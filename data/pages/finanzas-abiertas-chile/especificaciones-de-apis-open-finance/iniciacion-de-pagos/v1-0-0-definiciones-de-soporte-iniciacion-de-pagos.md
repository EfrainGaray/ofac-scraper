---
title: "v1.0.0 Definiciones de soporte Iniciación de pagos"
id: "124489693"
version: 1
updated: "2025-12-30T19:10:43.399Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/v1-0-0-definiciones-de-soporte-iniciacion-de-pagos"
---
# v1.0.0 Definiciones de soporte Iniciación de pagos

# Reglas de Idempotencia

- 
**Uso obligatorio de clave de idempotencia**:

- 
El **PSIP (iniciador de pagos)** deber&aacute; enviar en cada solicitud POST/PATCH de iniciaci&oacute;n de pagos una cabecera `x-idempotency-key` con un valor &uacute;nico (GUID).

- 
El **IPC (proveedor de cuentas)** deber&aacute; validar dicha clave.

- 
**Comportamiento esperado**:

- 
Si recibe la **misma clave con el mismo payload**, deber&aacute; retornar exactamente la misma respuesta entregada en la primera ejecuci&oacute;n (incluyendo `201 Created`).

- 
Si recibe la **misma clave con payload distinto**, deber&aacute; responder con `422 Unprocessable Entity` y un c&oacute;digo de error `ERROR_IDEMPOTENCIA`.

- 
Si recibe la **misma clave con un **`iss`** distinto** (organizaci&oacute;n no asociada al `clientId` que emiti&oacute; la solicitud original), deber&aacute; responder con `403 Forbidden`.

- 
**Alcance y validez**:

- 
La clave de idempotencia deber&aacute; almacenarse por un periodo de **24 horas**.

- 
La validaci&oacute;n se aplica en el **&aacute;mbito de cada endpoint de iniciaci&oacute;n de pagos**, no de forma global.

- 
**Restricciones**:

- 
El PSIP no debe alterar el cuerpo de la solicitud cuando reutilice la misma clave.

- 
El IPC no debe crear un nuevo recurso si la solicitud est&aacute; marcada como idempotente.

- 
Cada nueva operaci&oacute;n deber&aacute; incluir una nueva clave de idempotencia.

- 
**Seguridad adicional**:

- 
El IPC podr&aacute; verificar la integridad de la solicitud utilizando la **firma del mensaje** junto con la clave de idempotencia, garantizando que no exista alteraci&oacute;n en el payload.

- 
Toda nueva solicitud deber&aacute; generar una nueva firma con `jti` e `iat`.

# Polling y Control de Acceso 

### Consultas de estado (Polling)

- 
El **PSIP (Prestador de Servicios de Iniciaci&oacute;n de Pagos)** podr&aacute; consultar, v&iacute;a `GET`, el estado de procesamiento de una transacci&oacute;n en cualquier momento, respetando los l&iacute;mites establecidos en la secci&oacute;n de **Requisitos No Funcionales** del Anexo 3 (disponibilidad, frecuencia de consultas y uso de mecanismos alternativos).

- 
Se recomienda que el **PSIP** implemente un mecanismo de **reintentos con backoff exponencial**, para evitar sobrecarga en los sistemas del **IPC (Instituci&oacute;n Proveedora de Cuentas)**.

- 
El **IPC** deber&aacute; garantizar que la informaci&oacute;n expuesta en la consulta est&eacute; actualizada al menos con la misma periodicidad y calidad que los canales electr&oacute;nicos tradicionales.

### Control de Acceso

- 
Los endpoints de consulta (`HTTP GET`) deber&aacute;n permitir acceso &uacute;nicamente mediante un **access_token emitido bajo el grant type **`client_credentials`, o, alternativamente, mediante el **token vinculado al consentimiento del cliente (hybrid flow)**.

- 
Para prevenir fugas de informaci&oacute;n:

- 
El **IPC** deber&aacute; validar que el recurso consultado pertenece efectivamente al `client_id` que lo cre&oacute;.

- 
En caso de discrepancias, deber&aacute; responder con un error **HTTP 400 (Bad Request)** y el c&oacute;digo de error correspondiente.

- 
El **PSIP** deber&aacute; asegurar que no se utilicen tokens de terceros ni reutilizaci&oacute;n indebida de credenciales.

# Firma de Mensajes vs Idempotencia

### Reglas espec&iacute;ficas

- 
El **claim **`jti` incluido en el JWT de la firma de la **solicitud/respuesta** tiene como objetivo **evitar ataques de repetici&oacute;n** y **no debe ser utilizado** como mecanismo de control de idempotencia.

- 
Cada nueva solicitud a las APIs (ya sea una operaci&oacute;n nueva o una confirmaci&oacute;n de operaci&oacute;n idempotente previa) deber&aacute; incluir un **nuevo valor &uacute;nico de **`jti`, generado como UUID v4.

- 
La **validaci&oacute;n de las claims de seguridad** (`jti`, `iat`, `iss`, `aud`) y la firma digital de la solicitud deber&aacute;n realizarse **antes de la validaci&oacute;n de idempotencia**.

- 
El **control de idempotencia** se gestionar&aacute; exclusivamente mediante la cabecera `x-idempotency-key` y sus reglas asociadas (validez 24h, respuesta repetida si mismo payload, error 422 si distinto payload).

# **Datos de la cuenta de origen**

En los casos en que la iniciaci&oacute;n de pagos no se realice mediante el ingreso manual de los datos de la cuenta por parte del cliente, o la PSIP no informe a la IPC la cuenta que el usuario final autoriz&oacute; para efectuar el pago, deber&aacute; la IPC poner a disposici&oacute;n del usuario final las cuentas disponibles en la instituci&oacute;n, junto con los saldos correspondientes de cada una, a fin de que el cliente pueda seleccionar la cuenta desde la cual desea efectuar el pago.