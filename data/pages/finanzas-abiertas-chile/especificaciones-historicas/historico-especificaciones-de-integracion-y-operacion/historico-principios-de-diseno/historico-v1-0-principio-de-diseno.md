---
title: "Histórico-v1.0 - Principio de diseño"
id: "124489274"
version: 1
updated: "2025-12-30T14:18:56.436Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-integracion-y-operacion/historico-principios-de-diseno/historico-v1-0-principio-de-diseno"
---
# Histórico-v1.0 - Principio de diseño

## Introducci&oacute;n

En los &uacute;ltimos a&ntilde;os, el sector financiero global ha experimentado una transformaci&oacute;n significativa, impulsada por la adopci&oacute;n de modelos abiertos y colaborativos. Chile, como parte de esta tendencia, ha comenzado a implementar el concepto de Open Finance, un enfoque que promueve la interoperabilidad y la competencia en el mercado financiero mediante el uso de interfaces de programaci&oacute;n de aplicaciones (APIs). Estas APIs permiten que las instituciones financieras compartan informaci&oacute;n de manera segura y transparente con terceros autorizados, facilitando la creaci&oacute;n de servicios innovadores y mejorando la experiencia del usuario.

El dise&ntilde;o de APIs en este contexto es crucial, ya que no solo debe garantizar la seguridad y la privacidad de los datos, sino tambi&eacute;n fomentar la accesibilidad y la eficiencia en la integraci&oacute;n de nuevos servicios. **Los principios de dise&ntilde;o de APIs en Open Finance en Chile** deben considerar aspectos como la estandarizaci&oacute;n, la facilidad de uso, la escalabilidad y la robustez, permitiendo que tanto las instituciones financieras tradicionales como las fintechs puedan aprovechar al m&aacute;ximo las oportunidades de este ecosistema abierto y regulado. Este enfoque, respaldado por la normativa local, tiene el potencial de transformar el panorama financiero chileno, promoviendo una mayor inclusi&oacute;n financiera y una oferta m&aacute;s diversa de productos y servicios para los usuarios.

---

## Character Encoding

### **Uso de UTF-8 de forma obligatoria**

- 
UTF-8 es el est&aacute;ndar de facto para la codificaci&oacute;n de caracteres en servicios web y Open APIs alrededor del mundo. Se asegura la representaci&oacute;n correcta de todos los caracteres de idiomas latinos y otros alfabetos.

- 
Permite manejar tildes, e&ntilde;es y otros caracteres espec&iacute;ficos del espa&ntilde;ol, as&iacute; como caracteres de lenguajes internacionales.

- 
Se establece utilizar UTF-8 tanto en los contenidos de texto de las solicitudes y respuestas (payload JSON) como en los metadatos y encabezados HTTP (Content-Type: application/json; charset=utf-8)

**Ejemplo**
![image-20250318-201008.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-201008.png)
### **Validaci&oacute;n y Normalizaci&oacute;n**

- 
NFC (Normalization Form C): Al procesar texto, las aplicaciones deber&aacute;n manejar las cadenas en una forma de normalizaci&oacute;n coherente para facilitar la comparaci&oacute;n de cadenas con tildes o caracteres combinados.

- 
Verificar que el servidor y el cliente incluyan de forma expl&iacute;cita Content-Type con charset=utf-8 y que no haya conflictos con otras codificaciones para los encabezados HTTP.

---

## Formatos de Fecha y Hora

Se debe usar el est&aacute;ndar de **ISO 8601** para representar fechas y horas, incluyendo zonas horarias. Esta pr&aacute;ctica garantiza la uniformidad y reduce la ambig&uuml;edad en la interpretaci&oacute;n de datos temporales. Ejemplo: YYYY-MM-DDTHH:mm:ssZ

- 
YYYY: a&ntilde;o en formato de cuatro d&iacute;gitos (p. ej., 2025)

- 
MM: mes en formato de dos d&iacute;gitos (01&ndash;12)

- 
DD: d&iacute;a en formato de dos d&iacute;gitos (01&ndash;31)

- 
T: separador literal entre fecha y hora

- 
HH:mm:ss: hora, minutos y segundos en formato de 24 horas (00&ndash;23)

- 
Z o &plusmn;hh:mm: indicador de zona horaria. Z representa UTC o, alternativamente, se puede incluir un desplazamiento horario (p. ej., -03:00 para Chile Continental en horario est&aacute;ndar)

###  **UTC como referencia**

- 
Para los intercambios cr&iacute;ticos (por ejemplo, registro de transacciones, auditor&iacute;a y conciliaci&oacute;n), se define almacenar y transmitir fechas/horas en UTC (coordinated universal time).

- 
La correlaci&oacute;n de eventos en sistemas distribuidos que operan en diferentes husos horarios.

---

## Interoperabilidad y estandarizaci&oacute;n

Utilizar especificaciones comunes (p. ej., OpenAPI Specification (OAS3), ISO20022) para garantizar que las APIs se ajusten a lineamientos ampliamente aceptados. De esta forma, se facilita la comunicaci&oacute;n entre diferentes actores del ecosistema financiero (bancos, FinTechs, proveedores de servicios, etc.). Ejemplos de enfoques en diferentes regiones:

- 
En Reino Unido, el Open Banking Implementation Entity (OBIE) define formatos y endpoints est&aacute;ndar para cuentas y pagos.

- 
En Europa (PSD2), la regulaci&oacute;n exige la exposici&oacute;n de APIs con requisitos comunes de seguridad y funcionalidad, aunque no siempre se prescribe un est&aacute;ndar &uacute;nico.

- 
Brasil adopt&oacute; un modelo supervisado por el Banco Central, con gu&iacute;as t&eacute;cnicas y de datos detalladas.

- 
Nueva Zelanda sigue un enfoque m&aacute;s voluntario, pero recomienda alinearse a pr&aacute;cticas de dise&ntilde;o comunes para favorecer la adopci&oacute;n.

### Estructura de Datos

Diccionarios de datos alineados con ISO20022, lo que permite un manejo de datos alineados con los requerimientos globales establecidos por la Ley Fintec y una interoperabilidad real en los diferentes niveles de intercambio de informaci&oacute;n. Esto aplica tanto para Read/Write APIs como para Open Data, optimizando la integraci&oacute;n entre diferentes ecosistemas y reduciendo la complejidad en la gesti&oacute;n de datos.

### Headers

Conforma la especificaci&oacute;n FAPI 2.0 y el uso correcto de mTLS y tokens de acceso (OAuth 2.1/OpenID Connect) para proteger la comunicaci&oacute;n y la autenticaci&oacute;n. A continuaci&oacute;n, se detallan los encabezados que se deben seguir para la estructura de llamados y respuestas:

#### Estructura Request API

| 
**Header**
 | 
**Obligatoriedad**
 | 
**Descripci&oacute;n**
 | 
**Ejemplo**
 |  |
| --- | --- | --- | --- | --- |
| 
Authorization
 | 
Obligatorio
 | 
Porta el **token de acceso** (Bearer Token) obtenido tras el proceso de autenticaci&oacute;n. Permite al servidor identificar y autorizar la solicitud.
 | 
Authorization: Bearer eyJhbGciOiJ...
 |  |
| 
Accept
 | 
Obligatorio
 | 
Indica el formato de respuesta que el cliente espera. Se establece usar application/json para servicios REST.
 | 
Accept: application/json
 |  |
| 
Content-Type

(si hay cuerpo en la solicitud)
 | 
Obligatorio
 | 
Especifica el tipo de contenido del cuerpo de la solicitud y la codificaci&oacute;n de caracteres.
 | 
Content-Type: application/json; charset=UTF-8
 |  |
| 
x-fapi-interaction-id
 | 
Recomendado
 | 
**UUID** para rastrear la solicitud. Facilita la correlaci&oacute;n de logs y el debugging. FAPI 2.0 sugiere retornarlo en la respuesta tambi&eacute;n.
 | 
x-fapi-interaction-id: 123e4567-e89b-12d3-a456-426655440000
 |  |
| 
x-idempotency-key
 | 
Condicional
 | 
**Clave &uacute;nica** que identifica una operaci&oacute;n idempotente (ej. una orden de pago). Evita la duplicaci&oacute;n de operaciones en reintentos.
 | 
x-idempotency-key: f123-e45b-12d3-a456-999955440000
 |  |
| 
x-jws-signature
 | 
Opcional / Seg&uacute;n nivel FAPI
 | 
Porta una **firma JWS** que cubre el cuerpo y/o ciertos headers de la solicitud para garantizar integridad. FAPI 2.0 Avanzado/High puede requerirlo.
 | 
x-jws-signature: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...<restoToken>
 |  |
| 
Otros (User-Agent, etc.)
 | 
Opcional
 | 
Encabezados est&aacute;ndar de HTTP. User-Agent puede ser &uacute;til para identificar la aplicaci&oacute;n cliente.
 | 
User-Agent: MiAppCliente/1.0
 |  |

**Ejemplo**
![image-20250318-203245.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-203245.png)
#### Estructura Response API

| 
**Header**
 | 
**Obligatoriedad**
 | 
**Descripci&oacute;n**
 | 
**Ejemplo**
 |  |
| 
Content-Type
 | 
Obligatorio
 | 
Indica el tipo de contenido en la **respuesta** y la codificaci&oacute;n. Se recomienda application/json; charset=UTF-8.
 | 
Content-Type: application/json; charset=UTF-8
 |  |
| 
x-fapi-interaction-id
 | 
Recomendado
 | 
Devuelve el **mismo UUID** recibido en la solicitud, para correlacionar request/response.
 | 
x-fapi-interaction-id: 123e4567-e89b-12d3-a456-426655440000
 |  |
| 
x-jws-signature
 | 
Opcional / Seg&uacute;n nivel FAPI
 | 
Firma JWS de la **respuesta** que cubre el payload y/o ciertos headers, reforzando la integridad del mensaje.
 | 
x-jws-signature: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...<restoToken>
 |  |
| 
Cache-Control, Pragma
 | 
Recomendado
 | 
Controlan la forma en que el contenido puede guardarse en cach&eacute;. Para datos sensibles se recomienda no-store y no-cache.
 | 
Cache-Control: no-store, no-cache

Pragma: no-cache
 |  |
| 
Date
 | 
Obligatorio (HTTP)
 | 
Indica la fecha y hora en que el servidor gener&oacute; la respuesta. Es un est&aacute;ndar de HTTP.
 | 
Date: Mon, 03 Feb 2025 15:30:00 GMT
 |  |
| 
Otros (Strict-Transport-Security, X-Frame-Options, etc.)
 | 
Opcional / Recomendado
 | 
Encabezados de **seguridad** que refuerzan la protecci&oacute;n contra ataques (HSTS, XSS, Clickjacking, etc.).
 | 
Strict-Transport-Security: max-age=31536000; includeSubDomains
 |  |

**Ejemplo**
![image-20250318-204901.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-204901.png)
### Compatibilidad entre Plataformas

El dise&ntilde;o de las APIs sigue los principios para que el intercambio de informaci&oacute;n sea homog&eacute;neo y f&aacute;cil de integrar en m&uacute;ltiples entornos tecnol&oacute;gicos. Esto implica:

- 
Uso de JSON con definiciones claras en ISO20022.

- 
Inclusi&oacute;n de metadatos y encabezados estandarizados para versi&oacute;n, autenticaci&oacute;n y trazabilidad.

#### Documentaci&oacute;n

Proveer documentaci&oacute;n v&iacute;a developer portal para desarrolladores con ejemplos de uso, gu&iacute;as de integraci&oacute;n y definiciones Swagger (OAS3). Los est&aacute;ndares t&eacute;cnicos que ser&aacute; mas visibles a la industria se expondr&aacute;n en el confluence de la CMF

#### Estructura de Endpoints

Incluir la versi&oacute;n como parte de la ruta antes de cada recurso, facilitando as&iacute; la evoluci&oacute;n y la coexistencia de versiones distintas.

- 
/v1/<recurso>/

- 
/v1/<recurso>/<identificador>/

**Ejemplo**

- 
GET /v1/accounts

- 
GET /v1/accounts/{accountId}

Si se requiere una subversi&oacute;n o actualizaci&oacute;n se debe incluir en la misma ruta del endpoint.

- 
/v2/accounts

#### Recursos

Utilizar nombres de recursos en plural y en min&uacute;sculas (ej. accounts, transactions), siguiendo un estilo consistente en est&aacute;ndar camelCase

#### Sub-recursos

Cuando un recurso tenga datos dependientes o relacionados, se recomienda anidar las rutas. Por ejemplo:

- 
GET /v1/accounts/{accountId}/transactions

- 
GET /v1/accounts/{accountId}/transactions/{transactionId}

#### Versionado Efectivo

Las versiones deber&aacute;n ir de mayor a menor parche. Ej: mayor-menor-parche: v1, v1.1, v2, para permitir mejoras y nuevas funcionalidades sin interrumpir las implementaciones existentes.

#### Uso de Verbos HTTP

No incluir verbos en la ruta (p. ej., GET /v1/accounts y no GET /v1/getAccounts). Se aprovechan los m&eacute;todos HTTP (GET, POST, PUT, DELETE, PATCH) para indicar la operaci&oacute;n.

- 
**GET**: Obtenci&oacute;n de informaci&oacute;n

- 
**POST**: Creaci&oacute;n de un nuevo recurso o inicio de una acci&oacute;n

- 
**PUT / PATCH**: Actualizaci&oacute;n parcial o total

- 
**DELETE**: Eliminaci&oacute;n de recursos

#### Query Parameters y Filtros

Para b&uacute;squedas o filtros, usar par&aacute;metros de consulta (query params).

- 
Por ejemplo: **GET **/v1/accounts?type=savings&limit=20

---

## HTTP C&oacute;digos de estado

Los siguientes m&eacute;todos se han definido para los m&eacute;todos de las APIs expuestas en el SFA de Chile:

| 
**C&oacute;digo**
 | 
**Mensaje / Nombre**
 | 
**Descripci&oacute;n / Situaci&oacute;n de Uso**
 |  |
| 
**200**
 | 
**OK**
 | 
Consulta completada correctamente. <br/> - Se devuelve el **recurso solicitado** o la **respuesta** sin errores.
 |  |
| 
**201**
 | 
**Created**
 | 
La solicitud fue exitosa y **se cre&oacute;** un nuevo recurso. <br/> - Uso t&iacute;pico en la **creaci&oacute;n** de pagos, cuentas, etc.
 |  |
| 
**204**
 | 
**No Content**
 | 
Operaci&oacute;n completada correctamente pero **no hay contenido** que devolver. <br/> - &Uacute;til para indicar una acci&oacute;n exitosa (p. ej. eliminar un recurso) sin respuesta en el cuerpo.
 |  |
| 
**303**
 | 
**See Other**
 | 
Indica que la respuesta se encuentra en otra URI y se debe recuperar usando un **GET** en ese nuevo recurso. <br/> - Ocasionalmente se usa para redirigir a un cliente que deba realizar otra acci&oacute;n.
 |  |
| 
**304**
 | 
**Not Modified**
 | 
El recurso **no ha cambiado** desde la &uacute;ltima solicitud (If-Modified-Since / ETag). <br/> - Uso com&uacute;n en optimizaciones de **cach&eacute;** o validaciones condicionales.
 |  |
| 
**400**
 | 
**Bad Request**
 | 
Solicitud malformada o encabezado de autenticaci&oacute;n/token ausente o inv&aacute;lido. <br/> - Se omitieron atributos obligatorios (en **payload** o en la **URL**) o se viol&oacute; la estructura esperada.
 |  |
| 
**401**
 | 
**Unauthorized**
 | 
Encabezado de autenticaci&oacute;n ausente o token inv&aacute;lido. <br/> - El **usuario/cliente** no se ha autenticado de forma adecuada.
 |  |
| 
**403**
 | 
**Forbidden**
 | 
El token tiene un **alcance (scope) incorrecto** o se viol&oacute; una pol&iacute;tica de seguridad (p. ej., el usuario no tiene permisos suficientes).
 |  |
| 
**404**
 | 
**Not Found**
 | 
El **recurso solicitado** no existe o no ha sido implementado. <br/> - Se usa cuando la **URL** es inv&aacute;lida o se solicita un ID inexistente.
 |  |
| 
**405**
 | 
**Method Not Allowed**
 | 
Se intent&oacute; acceder a un recurso con un **m&eacute;todo HTTP** no soportado (ej. DELETE cuando solo se permite GET).
 |  |
| 
**406**
 | 
**Not Acceptable**
 | 
Se especific&oacute; un **Accept** o **charset** que **no es compatible** (p. ej. no se admite el tipo application/xml, solo application/json).
 |  |
| 
**409**
 | 
**Conflict**
 | 
Hay un **conflicto** en el estado del recurso (p. ej. reintentar crear un objeto que ya existe).
 |  |
| 
**410**
 | 
**Gone**
 | 
El recurso **fue eliminado** y ya no est&aacute; disponible. <br/> - Respuesta permanente; a diferencia del 404, aqu&iacute; se sabe que existi&oacute; en el pasado pero no est&aacute; activo.
 |  |
| 
**415**
 | 
**Unsupported Media Type**
 | 
El cuerpo de la solicitud est&aacute; en un **formato no soportado** o la codificaci&oacute;n difiere de UTF-8. <br/> - Se produce cuando se env&iacute;an formatos distintos de application/json o sin cabecera charset=utf-8.
 |  |
| 
**429**
 | 
**Too Many Requests**
 | 
Se bloquea la operaci&oacute;n porque se **excedi&oacute; el l&iacute;mite** de solicitudes en un per&iacute;odo determinado (Rate Limiting). <br/> - Indica la necesidad de implementar **backoff** o reducir la frecuencia de peticiones.
 |  |
| 
**500**
 | 
**Internal Server Error**
 | 
Error inesperado en el **servidor**. <br/> - Uso gen&eacute;rico cuando no existe un c&oacute;digo espec&iacute;fico (se recomienda diagnosticar y, de ser posible, usar uno m&aacute;s preciso).
 |  |
| 
**503**
 | 
**Service Unavailable**
 | 
El servicio **no est&aacute; disponible** o se encuentra en mantenimiento. <br/> - Uso com&uacute;n para cuando la **API** est&aacute; sobrecargada o en tareas de **downtime** planeado.
 |  |

---

## Manejo de errores

En casos de error, se recomienda incluir un cuerpo JSON que explique la causa del fallo y un x-fapi-interaction-id para correlaci&oacute;n.

La siguiente tabla detalla cada campo que puede incluirse en la respuesta de error, especificando su tipo, su obligatoriedad, una descripci&oacute;n y un ejemplo de uso:

| 
**Campo**
 | 
**Tipo**
 | 
**Obligatorio**
 | 
**Descripci&oacute;n / Observaciones**
 | 
**Ejemplo**
 |  |
| 
**type**
 | 
string (URL)
 | 
Opcional
 | 
URI que **clasifica** el tipo de error o enlaza a la documentaci&oacute;n que lo describe. &Uacute;til para permitir la autoayuda o diagn&oacute;sticos m&aacute;s detallados.
 | 
"[https://api.sfa-chile.cl/errors/invalid-request](https://api.sfa-chile.cl/errors/invalid-request)"
 |  |
| 
**title**
 | 
string
 | 
**S&iacute;**
 | 
T&iacute;tulo o **nombre breve** de la categor&iacute;a de error, legible por humanos.
 | 
"Invalid Request"
 |  |
| 
**status**
 | 
number (HTTP Code)
 | 
**S&iacute;**
 | 
C&oacute;digo num&eacute;rico que **refleja** el estado HTTP (por ej. 400, 401, 404). Debe coincidir con la cabecera HTTP.
 | 
400
 |  |
| 
**code**
 | 
string
 | 
Recomendado
 | 
**C&oacute;digo interno** de error, &uacute;til para trazabilidad o documentaci&oacute;n interna. Permite agrupar y filtrar errores espec&iacute;ficos.
 | 
"SFA_ERR_001"
 |  |
| 
**detail**
 | 
string
 | 
**S&iacute;**
 | 
Mensaje **detallado** que explica la causa del error. Se sugiere incluir indicaciones para corregir o mitigar el problema.
 | 
"El campo 'amount' es obligatorio y no se envi&oacute; en la solicitud."
 |  |
| 
**instance**
 | 
string (URI/Ruta)
 | 
Opcional
 | 
Indica la ruta o recurso que origin&oacute; el error. Ayuda a ubicar el contexto de la solicitud fallida.
 | 
"/v1/payments"
 |  |
| 
**x-fapi-interaction-id**
 | 
string (UUID)
 | 
Recomendado
 | 
Identificador de **trazabilidad** provisto por el cliente o generado por el servidor. Se reenv&iacute;a en la respuesta para correlacionar logs.
 | 
"123e4567-e89b-12d3-a456-426655440000"
 |  |
| 
**errors**
 | 
array[object]
 | 
Opcional
 | 
Lista de detalles adicionales sobre los errores espec&iacute;ficos (p.ej., errores de validaci&oacute;n por cada campo). Cada **elemento** dentro de errors puede tener su propia estructura.
 | 
Ver ejemplo en estructura JSON
 |  |

Cada objeto en el arreglo **errors **puede contener, como m&iacute;nimo, los siguientes campos:

| 
**Subcampo**
 | 
**Tipo**
 | 
**Descripci&oacute;n**
 | 
**Ejemplo**
 |  |
| 
field
 | 
string
 | 
Nombre del **campo** o parte de la solicitud donde ocurri&oacute; el error.
 | 
"currency"
 |  |
| 
message
 | 
string
 | 
Mensaje concreto que describe el problema con ese campo.
 | 
"El campo 'currency' no admite 'CLX'."
 |  |

**Ejemplo**
![image-20250318-212638.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212638.png)
### Ejemplos de errores comunes
![image-20250318-212825.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212825.png)![image-20250318-212844.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212844.png)![image-20250318-212904.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212904.png)
### Buenas pr&aacute;cticas en el detalle de c&oacute;digos de error

#### Consistencia en todos los endpoints

- 
El formato de error debe ser el mismo para cualquier endpoint o versi&oacute;n del API, de modo que los clientes puedan parsear y manejar las excepciones de forma uniforme.

#### Nivel de detalle

- 
Proporcionar suficiente contexto para que el desarrollador o el usuario identifiquen el problema.

- 
Evitar exponer informaci&oacute;n interna que comprometa la seguridad (logs o trazas sensibles).

#### Localizaci&oacute;n/Multilenguaje

- 
Si la API opera en varios idiomas, podr&iacute;a incluirse un Accept-Language en la solicitud y devolver mensajes de error localizados.

- 
Para integraciones internacionales, mantener al menos un modo en ingl&eacute;s o espa&ntilde;ol est&aacute;ndar.

#### Mapeo de Documentaci&oacute;n

- 
Cuando type apunte a una URL de error, esa p&aacute;gina podr&iacute;a explicar la causa t&iacute;pica y c&oacute;mo resolverla.

- 
Facilitar el autosoporte en implementaciones B2B o FinTech.

#### Estandarizar Subc&oacute;digos

- 
Organizar una tabla interna de error codes (SFA_ERR_001, SFA_AUTH_401, etc.) e incluirla en la documentaci&oacute;n para referencias r&aacute;pidas.

- 
Esto ayuda a la asistencia en caso de incidencias y a la trazabilidad en logs.

#### Idempotencia y reintentos

Para c&oacute;digos como 409 Conflict o 429 Too Many Requests, se recomienda que los clientes incluyan un Idempotency-Key y manejen reintentos cuando corresponda, siguiendo la l&oacute;gica de negocio.

---

## Mecanismo de Idempotencia

Para implementar la idempotencia en APIs REST/HTTP para operaciones no idempotentes (como POST) es mediante la inclusi&oacute;n de una clave de idempotencia (idempotency key).

### Uso de la Cabecera x-idempotency-key

#### Campo &uacute;nico por operaci&oacute;n

- 
El cliente (o la aplicaci&oacute;n que consume la API) genera un identificador &uacute;nico (por ejemplo, un UUID) y lo env&iacute;a en la cabecera HTTP x-idempotency-key.

**Ejemplo:**

```json
x-idempotency-key: 123e4567-e89b-12d3-a456-426655440000
```

#### Persistencia en el servidor

- 
Al recibir la petici&oacute;n, el servidor almacena la clave junto con el cuerpo de la solicitud o un hash que lo represente, y con el resultado que se gener&oacute; (creaci&oacute;n de recurso, transacci&oacute;n, etc.).

- 
Si llega otra petici&oacute;n con la misma clave, el servidor verifica si ya existe un resultado asociado y, si es as&iacute;, responde el mismo resultado en lugar de volver a procesar la operaci&oacute;n.

#### Tiempo de vigencia

- 
Para evitar almacenar infinitamente cada clave, se recomienda definir un tiempo de vigencia (TTL). Tras ese tiempo, si vuelve a recibirse la misma clave, el sistema puede tratarla como nueva (seg&uacute;n pol&iacute;ticas del proveedor de datos o pagos).

### Errores y respuestas

- 
Si la operaci&oacute;n inicial result&oacute; en un error permanente (p. ej., datos inv&aacute;lidos), se puede guardar la clave junto con la respuesta de error, a fin de retornar la misma respuesta a reintentos posteriores.

- 
Este comportamiento debe ser bien documentado para evitar confusiones.

#### Longitud y formato

- 
Aceptar valores de clave con un tama&ntilde;o razonable (por ejemplo, hasta 50-100 caracteres) y preferir UUID o un hash SHA256 para univocidad.

- 
Validar que cumplan el formato esperado (sin caracteres peligrosos).

#### Tolerancia a reintentos

- 
Dise&ntilde;ar el servidor para que, ante reintentos, consulte su almac&eacute;n de operaciones idempotentes y devuelva el resultado original.

- 
Documentar el tiempo de retenci&oacute;n de la informaci&oacute;n.

### Manejo de conflictos (409 conflict) y excepciones

#### Conflicto de datos

Puede suceder que la operaci&oacute;n idempotente no pueda completarse por un conflicto con el estado actual del recurso (ej., fondos insuficientes o bloqueados). En ese caso, se puede retornar 409 Conflict.

Se debe almacenar el resultado 409 junto con la clave de idempotencia para entregar la misma respuesta en futuros reintentos.

#### Time-to-live (TTL)

Una vez transcurrido el TTL (por ejemplo, 24-48 horas), el servidor podr&iacute;a descartar la asociaci&oacute;n clave-resultado. Si se vuelve a recibir la misma clave despu&eacute;s de ese periodo, podr&iacute;a ser procesada como nueva.

Importante establecer la pol&iacute;tica clara para evitar comportamientos inesperados.

---

## Attachments

- 🖼️ [image-20250318-212638.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212638.png) (118 KB)
- 🖼️ [image-20250318-204901.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-204901.png) (170 KB)
- 🖼️ [image-20250318-201008.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-201008.png) (33 KB)
- 🖼️ [image-20250318-212904.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212904.png) (116 KB)
- 🖼️ [image-20250318-201009.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-201009.png) (33 KB)
- 🖼️ [image-20250318-203245.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-203245.png) (220 KB)
- 🖼️ [image-20250318-212825.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212825.png) (143 KB)
- 🖼️ [image-20250318-212844.png](../attachments/historico-v1-0-principio-de-diseno/image-20250318-212844.png) (152 KB)
