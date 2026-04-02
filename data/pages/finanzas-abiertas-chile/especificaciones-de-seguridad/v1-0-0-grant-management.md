---
title: "v1.0.0 - Grant Management"
id: "123437300"
version: 1
updated: "2025-12-30T14:09:53.999Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-grant-management"
---
# v1.0.0 - Grant Management

## Descripci&oacute;n general

El **Grant Management** permite a los Participantes del SFA (PSBI, PSIP, IPI, IPC) **crear, consultar, actualizar y revocar consentimientos** de acceso de forma estandarizada.
Su objetivo es otorgar al **Usuario Final** y a las instituciones un **control total sobre los grants vigentes**, asegurando trazabilidad, interoperabilidad y cumplimiento del **Perfil de Seguridad FAPI 2.0**.

El modelo sigue la especificaci&oacute;n **Grant Management for OAuth 2.0** (OIDF draft 08), que introduce:

- 
El par&aacute;metro `grant_id` como identificador &uacute;nico del consentimiento.

- 
La capacidad de **mantener, modificar o revocar** un grant sin repetir el flujo completo de autorizaci&oacute;n.

- 
APIs de gesti&oacute;n de grants accesibles para **consulta, auditor&iacute;a y revocaci&oacute;n**.

---

## Referencias normativas

| 
Fuente
 | 
Documento / est&aacute;ndar
 |  |
| --- | --- | --- |
| 
**OpenID Foundation**
 | 
Grant Management for OAuth 2.0 &ndash; draft 08
 |  |
| 
**IETF**
 | 
RFC 6749 (OAuth 2.0 Authorization Framework)
 |  |
| 
**IETF**
 | 
RFC 7009 (Token Revocation)
 |  |
| 
**FAPI 2.0 Security Profile**
 | 
OpenID Foundation
 |  |
| 
**NCG 514 (Anexo 3)**
 | 
Comisi&oacute;n para el Mercado Financiero (CMF)
 |  |

---

## Conceptos clave

| 
Elemento
 | 
Descripci&oacute;n
 |  |
| 
**Grant**
 | 
Autorizaci&oacute;n activa entre el Usuario Final, un PSBI/PSIP y un IPI/IPC. Define qu&eacute; recursos y acciones est&aacute;n permitidas.
 |  |
| 
**grant_id**
 | 
Identificador &uacute;nico del consentimiento, generado por el Authorization Server al crear el grant.
 |  |
| 
**Grant Management Action**
 | 
Par&aacute;metro que define la acci&oacute;n solicitada: `create`, `update`, `replace`, `merge`, `revoke`, `query`.
 |  |
| 
**Grant Management API**
 | 
Interfaz RESTful expuesta por el Authorization Server para consultar o revocar grants.
 |  |
| 
**Grant State**
 | 
Estado operativo del consentimiento (Authorized, Revoked, Expired, etc.).
 |  |

---

## Flujo general de gesti&oacute;n de grants

### Creaci&oacute;n (Create)

El cliente inicia una autorizaci&oacute;n con `grant_management_action=create`.

- 
Si la validaci&oacute;n es exitosa, el Authorization Server genera un `grant_id` &uacute;nico.

- 
El `grant_id` se asocia a los `authorization_details` del flujo (RAR) o a los scopes tradicionales.

### Actualizaci&oacute;n / Reemplazo (Update / Replace / Merge)

El cliente puede modificar un consentimiento existente enviando `grant_id` y `grant_management_action=update` | `replace` | `merge`.

- 
`update` &rarr; extiende duraci&oacute;n o metadatos sin cambiar alcance.

- 
`replace` &rarr; sustituye permisos previos por un nuevo conjunto.

- 
`merge` &rarr; combina permisos previos con nuevos sin eliminar los existentes.

### 4.3 Consulta (Query)

Permite conocer el estado actual del grant y los recursos autorizados.
**Endpoint:** `GET /grants/{grant_id}`

### 4.4 Revocaci&oacute;n (Revoke)

El Usuario Final puede revocar un consentimiento activo:
**Endpoint:** `DELETE /grants/{grant_id}` o `POST /grants/{grant_id}/revoke`

- 
Tras la revocaci&oacute;n, el Authorization Server deber&aacute; invalidar tokens asociados y notificar al Panel de control de consentimientos.

## Estados del grant para el panel de control de consentimientos

| 
Estado
 | 
Descripci&oacute;n
 |  |
| 
**AwaitingAuthorisation **
 | 
Consentimiento creado en PSBI/PSIP, pendiente de autorizaci&oacute;n del Usuario Final en la IPI/IPC.
 |  |
| 
**AwaitingMultiAuthorisation**
 | 
Requiere m&uacute;ltiples aprobaciones (p. ej. cuentas conjuntas o corporativas).
 |  |
| 
**Authorised**
 | 
El consentimiento fue aprobado y se encuentra activo.
 |  |
| 
**Rejected**
 | 
Consentimiento rechazado por el Usuario Final durante el proceso y que no se autoriz&oacute;.
 |  |
| 
**Revoked**
 | 
Consentimiento revocado luego de que haya sido aprobado por el Usuario Final.
 |  |
| 
**Incomplete**
 | 
Este estado indica que, en los casos de actuaci&oacute;n conjunta, el consentimiento no logr&oacute; perfeccionarse porque no concurrieron las dem&aacute;s firmas requeridas en ambiente de la IPI/IPC dentro del tiempo que cada instituci&oacute;n considera para este fin, en virtud del tipo de servicio y por motivos de seguridad
 |  |
| 
**Expired**
 | 
Corresponde cuando un consentimiento otorgado a una PSBI/PSIP ha expirado en su vigencia.
 |  |

## Flujos de error al momento de un proceso de captura de consentimiento

Los flujos de error considerados en este cap&iacute;tulo pueden producirse en cualquiera de las siguientes etapas:

- 
Registro previo de la solicitud de autorizaci&oacute;n.

- 
Interacci&oacute;n de autorizaci&oacute;n con el Usuario Final.

- 
Emisi&oacute;n y gesti&oacute;n de tokens.

- 
Operaciones sobre la Grant Management API.

Los errores que ocurren **antes de la creaci&oacute;n del grant** no generan un estado asociado, mientras que aquellos que ocurren **una vez creado el consentimiento** pueden impactar en su estado.

| 
Estado
 | 
Descripci&oacute;n
 |  |
| 
**Failed**
 | 
Proceso de autorizaci&oacute;n fallido por comunicaciones o respuesta API.
 |  |

Ejemplo de respuesta:

## Operaciones est&aacute;ndar sobre grants

| 
Acci&oacute;n
 | 
Funci&oacute;n
 | 
Ejemplo
 |  |
| 
**Create**
 | 
Crear un nuevo consentimiento.
 | 
Iniciaci&oacute;n de Pago: creaci&oacute;n con `grant_id = abc123`.
 |  |
| 
**Merge**
 | 
Combinar permisos adicionales.
 | 
A&ntilde;adir acceso a transacciones mientras se conserva el permiso de ver saldos.
 |  |
| 
**Replace**
 | 
Reemplazar permisos de un grant existente.
 | 
Sustituir acceso completo por acceso limitado a una cuenta de ahorros.
 |  |
| 
**Query**
 | 
Consultar permisos vigentes.
 | 
Verificar cuentas y tipos de acceso actualmente autorizados.
 |  |
| 
**Revoke**
 | 
Revocar un consentimiento activo.
 | 
Usuario final revoca permiso al finalizar un servicio.
 |  |
| 
**Update**
 | 
Extender la vigencia sin modificar el alcance.
 | 
Ampliar duraci&oacute;n del permiso por 90 d&iacute;as.
 |  |

---

## API de Grant Management 

| 
M&eacute;todo
 | 
Endpoint
 | 
Descripci&oacute;n
 |  |
| 
**GET**
 | 
`/grants`
 | 
Lista de todos los grants activos del Usuario Final.
 |  |
| 
**GET**
 | 
`/grants/{grant_id}`
 | 
Devuelve detalle y estado del grant.
 |  |
| 
**DELETE / POST**
 | 
`/grants/{grant_id}/revoke`
 | 
Revoca el grant y notifica su baja.
 |  |
| 
**GET**
 | 
`/grants/history`
 | 
Devuelve historial de eventos asociados a un grant_id (auditor&iacute;a).
 |  |

## Trazabilidad y auditor&iacute;a

- 
Cada evento debe generar un **registro inmutable (WORM)** con retenci&oacute;n &ge; 5 a&ntilde;os.

- 
Campos m&iacute;nimos por evento:

- 
`grant_id`, tipo de evento, RUT solicitante y aprobador, finalidad, permisos, fechas de creaci&oacute;n / expiraci&oacute;n, resultado y entidades involucradas.

- 
El formato de auditor&iacute;a sugerido es **JSON**.

- 
Debe existir un endpoint hist&oacute;rico (`/grants/history`) autenticado mediante **mTLS** que devuelva todos los eventos asociados a un `grant_id`.

- 
Los registros se utilizar&aacute;n para los tableros regulatorios del Panel de Control del Consentimiento y supervisi&oacute;n CMF.

## Seguridad y firma de mensajes

- 
Todas las solicitudes y respuestas deben estar **firmadas digitalmente** con **JWS PS256** conforme al subcap&iacute;tulo de *Firma Digital de Mensajes y Payloads*.

- 
Los tokens, consentimientos y eventos de revocaci&oacute;n deber&aacute;n estar **cifrados** (JWE) cuando contengan informaci&oacute;n sensible del Usuario Final.

- 
La comunicaci&oacute;n entre los participantes se realizar&aacute; exclusivamente por **HTTPS + mTLS**.

- 
El Authorization Server debe validar la integridad y vigencia de cada `grant_id` antes de procesar operaciones.