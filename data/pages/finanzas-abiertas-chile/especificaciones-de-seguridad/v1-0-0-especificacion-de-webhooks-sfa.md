---
title: "V1.0.0 - Especificación de Webhooks SFA"
id: "123437375"
version: 1
updated: "2025-12-30T14:09:54.967Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-especificacion-de-webhooks-sfa"
---
# V1.0.0 - Especificación de Webhooks SFA

## Objetivo y alcance

La presente especificaci&oacute;n define el modelo de **comunicaciones as&iacute;ncronas v&iacute;a webhook** dentro del Sistema de Finanzas Abiertas (SFA), estableciendo los lineamientos t&eacute;cnicos y de seguridad que deber&aacute;n aplicar los Participantes para recibir y procesar notificaciones de eventos generados por:

- 
El **Directorio de Participantes** (altas, bajas, rotaci&oacute;n y revocaci&oacute;n de claves o certificados).

- 
Las **APIs de Productos, Transacciones e Iniciaci&oacute;n de Pagos**, mediante las m&aacute;quinas de estado correspondientes.

- 
Los **Consentimientos** otorgados por personas naturales o jur&iacute;dicas, incluyendo sus cambios de estado y revocaciones.

El objetivo es permitir que los actores autorizados reciban de forma **segura, confiable y estandarizada** los avisos de cambios de estado, sin que en el mensaje viajen datos sensibles.
Cada Participante, tras recibir una notificaci&oacute;n, deber&aacute; realizar una **consulta directa** a la API o al Directorio correspondiente para obtener el detalle del evento.

---

## Seguridad y autenticaci&oacute;n

### Canal de transporte

El intercambio de notificaciones deber&aacute; realizarse exclusivamente sobre **TLS 1.3**.
No se admiten versiones inferiores del protocolo.
Los certificados utilizados deber&aacute;n cumplir los **lineamientos chilenos de emisi&oacute;n y validaci&oacute;n** definidos por la Comisi&oacute;n para el Mercado Financiero (CMF).

### Autenticaci&oacute;n del emisor

Las llamadas salientes entre actores del SFA deber&aacute;n emplear **autenticaci&oacute;n mutua TLS (mTLS)**.
El certificado de cliente deber&aacute; encontrarse registrado y vigente en el **Directorio de Participantes**, que actuar&aacute; como fuente de confianza para validar la identidad del emisor.

### Firma digital del mensaje

Cada mensaje deber&aacute; incluir una firma **JWS (JSON Web Signature)** con *payload* separado.
El encabezado HTTP `X-Signature` contendr&aacute; la firma del cuerpo del mensaje.
El campo `kid` deber&aacute; permitir resolver la clave p&uacute;blica asociada a trav&eacute;s del Directorio de Participantes.

### Protecci&oacute;n contra repetici&oacute;n e idempotencia

Para evitar duplicados o ataques de repetici&oacute;n, se establecen los siguientes encabezados obligatorios:

| 
Encabezado
 | 
Descripci&oacute;n
 |  |
| --- | --- | --- |
| 
`X-Idempotency-Key`
 | 
Identificador &uacute;nico (UUID v4) del evento, v&aacute;lido para duplicaci&oacute;n durante 24 horas.
 |  |
| 
`X-Timestamp`
 | 
Fecha y hora UTC de emisi&oacute;n del evento (formato ISO 8601).
 |  |
| 
`X-Nonce`
 | 
Valor aleatorio &uacute;nico para cada env&iacute;o, v&aacute;lido por un m&aacute;ximo de 5 minutos.
 |  |

El receptor deber&aacute; verificar la unicidad de estos valores antes de procesar un evento.

### Entrega y reintentos

El modelo de entrega ser&aacute; **al menos una vez**, con reintentos autom&aacute;ticos y escalonados (1, 2, 5, 15, 60 minutos; hasta 24 horas).
El orden de los eventos estar&aacute; garantizado por el campo `event.sequence` dentro del cuerpo del mensaje.

---

## Alta y gesti&oacute;n de suscripciones

### Registro de suscripciones

Los Participantes podr&aacute;n registrar sus **puntos de recepci&oacute;n (callback URLs)** mediante un atributo a completar en el directorio de Participantes. 

### 3.2 Estados de una suscripci&oacute;n

Una suscripci&oacute;n podr&aacute; encontrarse en alguno de los siguientes estados:

- 
`PendingVerification`

- 
`Active`

- 
`Suspended`

- 
`Revoked`

El Directorio de Participantes mantendr&aacute; la lista actualizada de suscripciones activas por entidad.

---

## Modelo de eventos

### Tipos base de eventos

Los eventos del SFA utilizar&aacute;n un esquema de nombres normalizado (`sfa.{dominio}.{evento}`):

| 
Dominio
 | 
Eventos a notificar
 | 
Descripci&oacute;n
 |  |
| 
**Directorio**
 | 
`sfa.directory.participant.updated`, `sfa.directory.key.rotated`, `sfa.directory.key.revoked`
 | 
Cambios en certificados, llaves o estado de participantes.
 |  |
| 
**Consentimiento**
 | 
`sfa.consent.authorised`, `sfa.consent.revoked y sfa.consent.rejected`
 | 
Cambios en los consentimientos de personas naturales o jur&iacute;dicas. 
 |  |

---

## 5. Estructura del mensaje

El formato de los mensajes seguir&aacute; la convenci&oacute;n de **CloudEvents 1.0 simplificado**:

**Importante:** el campo `data` no deber&aacute; contener informaci&oacute;n sensible.
Su funci&oacute;n es &uacute;nicamente **notificar un cambio de estado**.
El receptor deber&aacute; consultar la API correspondiente para obtener los detalles completos del recurso afectado.

---

## 6. M&aacute;quinas de estado y eventos asociados

Los webhooks se aplican a las m&aacute;quinas de estado de las siguientes categor&iacute;as:

### 6.1 Consentimientos (persona natural o jur&iacute;dica)

![Flujo de cambios de estado Consentimientos.png](../attachments/v1-0-0-especificacion-de-webhooks-sfa/Flujo%20de%20cambios%20de%20estado%20Consentimientos.png)

Cada transici&oacute;n de estado generar&aacute; un **evento webhook** hacia los Participantes suscritos.

---

## 7. Flujo general de notificaci&oacute;n y consulta
![Flujo general de notificaci&oacute;n y consulta.png](../attachments/v1-0-0-especificacion-de-webhooks-sfa/Flujo%20general%20de%20notificaci%26oacute%3Bn%20y%20consulta.png)
El emisor notifica el evento; el receptor confirma la autenticidad, valida la firma y posteriormente realiza la **consulta directa** a la API correspondiente para conocer el estado actualizado.

---

## 8. Reglas de entrega y trazabilidad

- 
**Entrega garantizada:** m&iacute;nimo una vez; reintentos autom&aacute;ticos en caso de fallo.

- 
**Registro de eventos:** cada emisor debe mantener un log de entrega firmado digitalmente por al menos 5 a&ntilde;os.

- 
**Orden y secuencia:** los eventos de un mismo recurso (`event.streamId`) deber&aacute;n entregarse en orden.

- 
**Verificaci&oacute;n:** todo evento debe incluir `X-Signature`, `X-Timestamp` y `X-Idempotency-Key`.

- 
**Confidencialidad:** los mensajes no deber&aacute;n incluir valores financieros, credenciales ni datos personales identificables.

---

## 9. Ejemplo de evento completo

**Encabezados**

**Cuerpo**

---

## 10. Consideraciones finales

- 
El uso de webhooks es **obligatorio** para los Participantes que implementen APIs sujetas a certificaci&oacute;n funcional y de seguridad.

- 
El **Directorio de Participantes** ser&aacute; la **fuente de confianza** para validaciones de certificados, firmas y endpoints registrados.

- 
Los emisores deber&aacute;n implementar mecanismos de **monitoreo y auditor&iacute;a** de las entregas, as&iacute; como registros firmados de reintentos y respuestas.

- 
Cualquier actualizaci&oacute;n en esta especificaci&oacute;n ser&aacute; publicada en el **Portal del Desarrollador** y notificada por los canales oficiales de la CMF.