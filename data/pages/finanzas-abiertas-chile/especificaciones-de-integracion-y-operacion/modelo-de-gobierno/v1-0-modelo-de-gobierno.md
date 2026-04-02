---
title: "v1.0 - Modelo de gobierno"
id: "124553036"
version: 1
updated: "2026-01-05T15:18:10.160Z"
path: "finanzas-abiertas-chile/especificaciones-de-integracion-y-operacion/modelo-de-gobierno/v1-0-modelo-de-gobierno"
---
# v1.0 - Modelo de gobierno

## **Elaboraci&oacute;n de est&aacute;ndares**

La CMF establece un marco t&eacute;cnico uniforme para el desarrollo, versionado y publicaci&oacute;n de las APIs del Sistema de Finanzas Abiertas (SFA). El **Roadmap de publicaci&oacute;n** debe estar vinculado al momento en que una API se declara &ldquo;**stable**&rdquo; para permitir certificaciones funcionales.

El proceso de elaboraci&oacute;n se basa en **est&aacute;ndares internacionales obligatorios** que aseguran la consistencia t&eacute;cnica, interoperabilidad y trazabilidad de todas las especificaciones publicadas.

### **Marco de referencia**

| 
Elemento
 | 
Est&aacute;ndar adoptado
 | 
Aplicaci&oacute;n obligatoria
 | 
Descripci&oacute;n
 |  |
| --- | --- | --- | --- | --- |
| 
**Modelo de datos**
 | 
ISO 20022 (pain, camt, acmt)
 | 
S&iacute;
 | 
Los campos &ldquo;core&rdquo; de cuentas y pagos deber&aacute;n mapearse expl&iacute;citamente en los YAML `Accounts.yaml` y `Payments.yaml`.
 |  |
| 
**Contratos de servicios**
 | 
OpenAPI 3.0.x (YAML)
 | 
S&iacute;
 | 
Estructura com&uacute;n con secciones `info`, `servers`, `components`, y reutilizaci&oacute;n de `schemas` para errores y paginaci&oacute;n.
 |  |
| 
**Denominaci&oacute;n de rutas**
 | 
`/v{major}/{recurso}`
 | 
S&iacute;
 | 
Ejemplo: `/v1/accounts`, `/v1/payments`. El recurso debe escribirse en plural y en min&uacute;sculas, con verbo impl&iacute;cito por el m&eacute;todo HTTP.
 |  |
| 
**Versionamiento**
 | 
SemVer (mayor.menor.parche)
 | 
S&iacute;
 | 
Un cambio *major* genera nueva ruta; cambios *minor* o *patch* se documentan en el `changelog`.
 |  |
| 
**Objeto Error**
 | 
`ResponseError` (code, title, detail, meta)
 | 
S&iacute;
 | 
Se utiliza en todas las APIs del SFA, extendido a los YAML de cuentas, pagos, productos y seguros.
 |  |
| 
**Paginaci&oacute;n y filtrado**
 | 
Par&aacute;metros `page`, `pageSize`, `fromDate`, `toDate`
 | 
S&iacute;
 | 
Obligatorios en endpoints de lista (por ejemplo: `GET /accounts/{id}/transactions`).
 |  |

**Nota:** Las APIs ser&aacute;n consideradas &ldquo;stable&rdquo; una vez que la CMF emita la instrucci&oacute;n normativa correspondiente, habilitando a las instituciones proveedoras (IPI/IPC) a iniciar su proceso de certificaci&oacute;n funcional y de seguridad.

### **Gu&iacute;a de estilo OpenAPI**

La gu&iacute;a de estilo garantiza uniformidad sem&aacute;ntica y t&eacute;cnica entre todas las APIs publicadas.

**Componentes reutilizables**

- 
`components.schemas.MonetaryAmount`

- 
`components.schemas.Party`

- 
`components.headers.X-Fapi-Interaction-Id`

- 
`components.responses.ResponseError`

**Convenci&oacute;n de verbos HTTP**
`GET` = consulta, `POST` = creaci&oacute;n/orden, `PATCH` = actualizaci&oacute;n parcial, `DELETE` = revocaci&oacute;n.

**Documentaci&oacute;n embebida**
Cada `schema` debe incluir ejemplos realistas (`example:`) con datos en formato **ISO 8601** y montos en **CLP**.

**Validaci&oacute;n t&eacute;cnica y revisi&oacute;n**
Toda propuesta de API debe pasar por una **revisi&oacute;n de sintaxis y estructura autom&aacute;tica (lint)** antes de su presentaci&oacute;n al Comit&eacute; de Cambios.

**Etiquetado de estado**
Los estados posibles son:
`draft` &rarr; `approved`&rarr; `stable` &rarr; `deprecated`.

### **Roadmap de publicaci&oacute;n de APIs**

El roadmap establece las olas de publicaci&oacute;n por grupo funcional, los plazos de revisi&oacute;n y los mecanismos de actualizaci&oacute;n.

| 
Ola
 | 
Trimestre objetivo
 | 
Estado esperado
 |  |
| 
**APIs Grupo 1**
 | 
Octubre 2026
 | 
stable v1
 |  |
| 
**APIs Grupo 2**
 | 
Octubre 2026
 | 
stable v1
 |  |

**Mecanismos de actualizaci&oacute;n**

- 
Cada cambio *minor* o *patch* se publica en el portal con changelog.

- 
Las APIs solo pueden pasar a &ldquo;stable&rdquo; luego de obtener **certificaci&oacute;n funcional y de seguridad** conforme al Cap&iacute;tulo 6.

- 
Existir&aacute; un **ambiente preproductivo (Sandbox Tecnol&oacute;gico)** donde los participantes realizar&aacute;n pruebas antes de su publicaci&oacute;n final.

## Lineamientos de autenticaci&oacute;n y autorizaci&oacute;n

El Sistema de Finanzas Abiertas (SFA) adopta el **FAPI 2.0 Security Profile** como marco obligatorio de autenticaci&oacute;n, autorizaci&oacute;n y protecci&oacute;n de tokens.
Estos lineamientos garantizan la integridad, confidencialidad y no repudio de las transacciones, asegurando que cada operaci&oacute;n se realice en un entorno autenticado, trazable y supervisado.

### **Arquitectura de seguridad**

| 
Componente
 | 
Est&aacute;ndar / Mecanismo
 | 
Aplicaci&oacute;n
 | 
Descripci&oacute;n
 |  |
| 
**Canal de transporte**
 | 
TLS 1.3 
 | 
Obligatorio
 | 
Canal cifrado extremo a extremo con certificados emitidos bajo una CA reconocida por la CMF.
 |  |
| 
**Autenticaci&oacute;n cliente/API**
 | 
mTLS (`tls_client_auth`)
 | 
Obligatorio
 | 
M&eacute;todo principal de autenticaci&oacute;n de clientes confidenciales (PSBI/PSIP) ante los Authorization Servers (IPI/IPC).
 |  |
| 
**Autenticaci&oacute;n reforzada de clientes (ARC)**
 | 
2 factores 
 | 
Obligatorio
 | 
Aplica a todas las operaciones de iniciaci&oacute;n de pagos; el Usuario final debe autenticarse por al menos dos factores. 
 |  |
| 
**Perfil de seguridad**
 | 
FAPI 2.0 Security Profile
 | 
Obligatorio
 | 
Protege los tokens, impone uso de Pushed Authorization Requests (PAR) y binding de tokens al canal TLS.
 |  |
| 
**Consentimiento**
 | 
OAuth 2.0 + `GrantId` + `authorization_details` (RAR)
 | 
Obligatorio
 | 
Define el alcance y prop&oacute;sito autorizado por el Usuario final; complementa los scopes tradicionales.
 |  |

### **Requisitos generales de autenticaci&oacute;n y autorizaci&oacute;n**

- 
**Todos los flujos de autorizaci&oacute;n** deber&aacute;n implementarse mediante **PAR (RFC 9126)**, eliminando el uso de par&aacute;metros en redirecciones.

- 
Los **tokens** deber&aacute;n estar **vinculados (sender-constrained)** al cliente y al canal TLS.

- 
Se **proh&iacute;be** el uso de `client_secret_basic`, `client_secret_post` o `private_key_jwt`.

- 
Los **certificados utilizados en mTLS** deber&aacute;n estar inscritos en el **Directorio de Participantes** y rotarse conforme a la pol&iacute;tica CMF.

- 
El **Usuario final **deber&aacute; autenticarse con **MFA obligatorio** en todos los casos de iniciaci&oacute;n de pagos o acceso a informaci&oacute;n sensible.

- 
Los **Authorization Servers (IPI/IPC)** deber&aacute;n validar coherencia entre `scope`, `actions` y `authorization_details`.

- 
Los **eventos de autenticaci&oacute;n y autorizaci&oacute;n** deber&aacute;n ser registrados con trazabilidad completa (&eacute;xitos, rechazos, revocaciones).

### **Gesti&oacute;n de llaves y JWK Sets**

La gesti&oacute;n de llaves es responsabilidad compartida entre los participantes y la CMF, bajo un modelo de confianza federada.

| 
Elemento
 | 
Requisito
 | 
Descripci&oacute;n
 |  |
| 
**Publicaci&oacute;n de claves**
 | 
`.well-known/jwks.json`
 | 
Cada actor del SFA (PSBI, PSIP, IPI, IPC) deber&aacute; exponer su conjunto de claves p&uacute;blicas en formato JWK Set accesible p&uacute;blicamente.
 |  |
| 
**Mirror **
 | 
Replicaci&oacute;n diaria
 | 
La CMF mantendr&aacute; un *mirror* diario del conjunto de claves p&uacute;blicas de todos los participantes en el **Directorio de Participantes**, permitiendo validaciones cruzadas.
 |  |
| 
**Rotaci&oacute;n**
 | 
&le; 12 meses
 | 
Las claves RSA/ECC deber&aacute;n rotarse cada 12 meses o antes si se detecta vulnerabilidad. Se permite un per&iacute;odo de gracia (m&aacute;x. 30 d&iacute;as) con el `kid` antiguo marcado como *deprecated*.
 |  |
| 
**Revocaci&oacute;n**
 | 
Endpoint `/directory/keys/{kid}/revoke`
 | 
La revocaci&oacute;n se notificar&aacute; a la CMF, que propagar&aacute; la actualizaci&oacute;n a todo el ecosistema.
 |  |
| 
**Auditor&iacute;a**
 | 
Hash SHA-256
 | 
Toda clave publicada debe registrarse con su hash SHA-256 en el log de auditor&iacute;a del Directorio.
 |  |

**Principio de unicidad:** cada `kid` (Key ID) debe ser &uacute;nico dentro del SFA y trazable hasta el software statement registrado.

### **Integraci&oacute;n con el Perfil de Seguridad del SFA**

Los lineamientos t&eacute;cnicos del presente modelo de gobierno se complementan con las obligaciones establecidas en el documento **&ldquo;Perfil de Seguridad del Sistema de Finanzas Abiertas &ndash; v1.0&rdquo;**, particularmente en los cap&iacute;tulos:

- 
**Cap. 4 &ndash; PAR:** describe el flujo y requisitos de expiraci&oacute;n del `request_uri`.

- 
**Cap. 5 &ndash; mTLS:** m&eacute;todo de autenticaci&oacute;n permitido y pol&iacute;tica de certificados.

- 
**Cap. 6 &ndash; RAR:** estructura de `authorization_details` y campos obligatorios.

- 
**Cap. 7 &ndash; CIBA:** flujos desacoplados y `login_hint_token`.

- 
**Cap. 8 &ndash; Consentimiento:** definici&oacute;n de `grantId`, estados y revocaciones.

Toda actualizaci&oacute;n de estos mecanismos deber&aacute; pasar por una revisi&oacute;n interna CMF, y someterse a consulta p&uacute;blica antes de incorporarse en el **Portal del Desarrollador**.

### **Gobernanza y certificaci&oacute;n**

- 
Todos los flujos definidos deber&aacute;n ser **verificados por entidades certificadoras**, siguiendo las categor&iacute;as del Cap&iacute;tulo 6 (*Funcional*, *Seguridad* y *Directorio & Onboarding*).

- 
Las pruebas de cumplimiento de **mTLS, PAR, RAR y JWK Sets** deber&aacute;n producir un **Security Conformance Report (OpenID Foundation)**.

- 
Los incidentes o cambios en claves o certificados deber&aacute;n notificarse al **Directorio de participantes y a la CMF en &le; 24 horas**.

## Portal del desarrollador

El **Portal del desarrollador** constituye la fuente oficial de las especificaciones t&eacute;cnicas, gu&iacute;as de estilo y artefactos asociados a las APIs reguladas del Sistema de Finanzas Abiertas (SFA).

### **Estructura del repositorio**

| 
Nivel
 | 
Contenido
 | 
Responsabilidad
 | 
Visibilidad
 |  |
| 
**Portal del Desarrollador**
 | 
Publicaci&oacute;n oficial de APIs vigentes, documentaci&oacute;n y gu&iacute;as operativas.
 | 
CMF
 | 
P&uacute;blica (lectura)
 |  |
| 
**Sandbox tecnol&oacute;gico**
 | 
Entorno controlado para validaci&oacute;n de integraciones y pruebas comunitarias antes de certificaci&oacute;n.
 | 
CMF
 | 
Acceso por credenciales (PSBI, PSIP, IPI, IPC)
 |  |

Cada API contar&aacute; con una **p&aacute;gina ra&iacute;z** y **subp&aacute;ginas por versi&oacute;n**, siguiendo un formato uniforme.

### **Contenido m&iacute;nimo por API**

a. **Resumen funcional:** objetivo, actores involucrados y referencia normativa.
b. **Artefactos t&eacute;cnicos:**

- 
Especificaci&oacute;n OpenAPI (YAML OAS 3.0.x, firmada con SHA-256).

- 
Ejemplos de *request/response* en JSON.

- 
Colecci&oacute;n Postman.

c. **Historial de versiones y changelog.**
d. **Checklist de conformidad (lint + validaci&oacute;n de sem&aacute;ntica).**
e. **Estado actual:** `draft`, `approved`, `stable`, `deprecated`.

### **Control de versiones**

- 
Los cambios *minor* o *patch* deber&aacute;n acompa&ntilde;arse de un **changelog**.

- 
Las actualizaciones mayores (*major*) requerir&aacute;n publicaci&oacute;n en consulta p&uacute;blica (&ge; 30 d&iacute;as).

- 
La CMF mantendr&aacute; un **historial **de versiones para trazabilidad.

### **Integraci&oacute;n con Certificaci&oacute;n y Sandbox tecnol&oacute;gico**

- 
Solo las versiones etiquetadas como `stable` utilizarse en los procesos de certificaci&oacute;n (Cap. 6).

- 
El **Sandbox tecnol&oacute;gico **actuar&aacute; como entorno espejo del repositorio, garantizando que los artefactos probados coincidan con los publicados.

### **Modelo de integraci&oacute;n de Portal del desarrollador y Sandbox tecnol&oacute;gico**

El ecosistema t&eacute;cnico de publicaci&oacute;n y mantenimiento de APIs del SFA se organiza en **dos capas coordinadas**:

**Capa de portal del desarrollador:**

- 
Publica las APIs y especificaciones t&eacute;cnicas en sus diferentes estados y sus gu&iacute;as operativas..

- 
Expone ejemplos, documentaci&oacute;n y endpoints oficiales a los participantes del ecosistema.

**Capa de Sandbox tecnol&oacute;gico:**

- 
Replica las versiones en sus diferentes estados.

- 
Permite la validaci&oacute;n de integraciones reales y ejecuci&oacute;n de pruebas funcionales y t&eacute;cnicas. 

## **Flujo de publicaci&oacute;n de especificaciones**

El flujo de publicaci&oacute;n de especificaciones del Sistema de Finanzas Abiertas (SFA) garantiza que cada API pase por una secuencia controlada de **revisi&oacute;n, prueba, certificaci&oacute;n y publicaci&oacute;n**, con participaci&oacute;n supervisada de los actores definidos por la CMF.

### **Descripci&oacute;n general**

El proceso comprende **seis fases**, cada una con criterios de entrada, salida y responsables designados:

| 
Fase
 | 
Descripci&oacute;n
 | 
Responsable principal
 | 
Entregable / Evidencia
 |  |
| 
- 
**Propuesta de cambio**

 | 
El Foro del Sistema de Finanzas Abiertas prepara propuesta de cambios sobre APIs 
 | 
Foro del Sistema de Finanzas Abiertas
 | 
Documentaci&oacute;n de propuesta de APIs
 |  |
| 
- 
**Borrador (draft)**

 | 
CMF sube documentaci&oacute;n en estado &ldquo;draft&rdquo; al Portal del desarrollador para consulta. 
 | 
CMF
 | 
YAML OAS 3.0, checklist de estilo
 |  |
| 
- 
**Sandbox**

 | 
CMF despliega nueva especificaci&oacute;n en estado &ldquo;draft&rdquo; en el Sandbox y los participantes realizan pruebas funcionales y t&eacute;cnicas y se corrigen observaciones. 
 | 
CMF

Participantes

Foro del Sistema de Finanzas Abiertas
 | 
Evidencia de las pruebas y reporte de errores.
 |  |
| 
- 
**Aprobaci&oacute;n (approved)**

 | 
Se aprueba propuesta de cambios sobre especificaciones de APIs. 
 | 
CMF
 | 
Especificaci&oacute;n de API aprobada. 
 |  |
| 
- 
**Publicaci&oacute;n estable (stable)**

 | 
Publicaci&oacute;n en el Portal del Desarrollador de especificaci&oacute;n en estado &ldquo;stable&rdquo;.
 | 
CMF
 | 
Versi&oacute;n estable + changelog 
 |  |
| 
- 
**Deprecaci&oacute;n (deprecated)**

 | 
Notificaci&oacute;n de sunset y retiro de versiones previas.
 | 
CMF 
 | 
Aviso formal + plan de migraci&oacute;n
 |  |

![image-20251230-181022.png](../attachments/v1-0-modelo-de-gobierno/image-20251230-181022.png)

### **Reglas de trazabilidad**

- 
Las versiones *draft* y *approved* deber&aacute;n incluir changelog incremental.

- 
El **Portal del desarrollador **mantendr&aacute; un **RSS &ldquo;Change-Log&rdquo;** consolidado de actualizaciones.

- 
Cualquier modificaci&oacute;n *major* requerir&aacute; consulta p&uacute;blica y nueva revisi&oacute;n de seguridad.

### **Relaci&oacute;n con consulta p&uacute;blica**

- 
Toda actualizaci&oacute;n **major** deber&aacute; someterse a consulta p&uacute;blica &ge; **30 d&iacute;as**, antes de ser declarada &ldquo;stable&rdquo;.

## **Esquemas de certificaci&oacute;n**

Asegurar que **solo las APIs conformes a los est&aacute;ndares t&eacute;cnicos y de seguridad definidos por la CMF** puedan operar en ambiente productivo.
El esquema se basa en certificaci&oacute;n **independiente**, auditabilidad y transparencia.

### **Tipos de certificaci&oacute;n y alcance**

| 
#
 | 
Tipo de certificaci&oacute;n
 | 
Alcance
 | 
Obligatoria
 | 
Periodicidad
 | 
Certificador acreditado
 | 
Resultado / Artefacto
 |  |
| 
1
 | 
**Funcional &ndash; Interoperabilidad**
 | 
Cumplimiento OpenAPI, manejo de errores, SemVer
 | 
S&iacute; (todas las APIs)
 | 
Cada versi&oacute;n *major*
 | 
Entidad acreditada
 | 
`Functional Conformance Report` (JSON + PDF + JWS)
 |  |
| 
2
 | 
**Seguridad &ndash; FAPI 2.0 Security Profile**
 | 
mTLS, OAuth/OIDC, PAR, RAR, binding de tokens
 | 
S&iacute; (lectura y pagos)
 | 
12 meses o si CVE cr&iacute;tica
 | 
OpenID Foundation o autorizada
 | 
`Security Conformance Report` (PDF + JWS)
 |  |
| 
3
 | 
**Directorio & On-boarding**
 | 
DCR, publicaci&oacute;n de JWK, revocaci&oacute;n de llaves
 | 
S&iacute; (todos los participantes nuevos)
 | 
En cada alta
 | 
Entidad autorizada
 | 
`Integration Conformance Report` (PDF + JWS)
 |  |

![image-20251230-181753.png](../attachments/v1-0-modelo-de-gobierno/image-20251230-181753.png)

### **Vigencia, renovaci&oacute;n y revocaci&oacute;n**

| 
Tipo
 | 
Vigencia m&aacute;xima
 | 
Renovaci&oacute;n
 | 
Causa de revocaci&oacute;n
 |  |
| 
Funcional
 | 
Hasta siguiente versi&oacute;n *major*
 | 
Con nuevo release
 | 
Incompatibilidad sem&aacute;ntica detectada
 |  |
| 
Seguridad
 | 
12 meses
 | 
Autom&aacute;tica tras re-test FAPI
 | 
CVE cr&iacute;tica o fallo mTLS / PAR / RAR
 |  |
| 
Directorio de participantes y On-boarding
 | 
Alta de actor
 | 
N/A
 | 
P&eacute;rdida de habilitaci&oacute;n o certificado revocado
 |  |