---
title: "v1.0.0 - Dynamic Client Registration"
id: "123437331"
version: 1
updated: "2025-12-30T14:09:54.325Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-dynamic-client-registration"
---
# v1.0.0 - Dynamic Client Registration

## Descripci&oacute;n general

El **Dynamic Client Registration (DCR)** permite que las aplicaciones cliente (PSBI, PSIP) se registren din&aacute;micamente ante un **Authorization Server** (IPI, IPC), obteniendo credenciales y metadatos de configuraci&oacute;n de forma automatizada y segura.

El DCR habilita el **onboarding estandarizado entre participantes** dentro del Sistema de Finanzas Abiertas (SFA), evitando procesos manuales y garantizando la coherencia con el **Directorio de Participantes** y el **Perfil de Seguridad FAPI 2.0.**

La implementaci&oacute;n deber&aacute; seguir los est&aacute;ndares definidos en los **RFC 7591** (protocolo de registro) y **RFC 7592** (gesti&oacute;n y actualizaci&oacute;n del registro), adaptados a los requisitos regulatorios chilenos.

---

## Referencias normativas

| 
Est&aacute;ndar / Fuente
 | 
Descripci&oacute;n
 |  |
| --- | --- | --- |
| 
**RFC 7591**
 | 
*OAuth 2.0 Dynamic Client Registration Protocol*
 |  |
| 
**RFC 7592**
 | 
*OAuth 2.0 Dynamic Client Registration Management Protocol*
 |  |
| 
**FAPI 2.0 Security Profile** &ndash; OpenID Foundation
 | 
Define los requisitos de autenticaci&oacute;n, firma, y transporte seguro aplicables al flujo DCR.
 |  |
| 
**RFC 6749 / 8705 / 7519**
 | 
Base OAuth 2.0, Mutual TLS y JWT.
 |  |
| 
**NCG 514 (Anexo 3)** &ndash; CMF
 | 
Disposiciones t&eacute;cnicas para APIs y mecanismos de registro de clientes en el SFA.
 |  |

---

## Objetivos del DCR

- 
Estandarizar el **registro, actualizaci&oacute;n y revocaci&oacute;n** de clientes.

- 
Asociar de manera un&iacute;voca cada **software client** con su organizaci&oacute;n registrada en el Directorio.

- 
Habilitar una **validaci&oacute;n criptogr&aacute;fica** de la identidad del solicitante mediante **software statements asertion (SSA)**.

- 
Permitir la **actualizaci&oacute;n automatizada** de atributos y certificados del cliente, sin intervenci&oacute;n manual.

- 
Garantizar trazabilidad y cumplimiento del **perfil FAPI 2.0**.

---

## Flujos principales del DCR

### Registro inicial (RFC 7591)

El cliente se registra en el Authorization Server de la IPI/IPC mediante una solicitud HTTPS autenticada y firmada:

**POST **`/register`

#### Ejemplo de solicitud:

#### Ejemplo de respuesta:

---

### Actualizaci&oacute;n de registro (RFC 7592)

Los clientes pueden modificar informaci&oacute;n previamente registrada:

**PUT **`/register/{client_id}`

Campos actualizables: `redirect_uris`, `jwks_uri`, `logo_uri`, `contacts`, `policy_uri`, `tos_uri`, `software_statement` (en caso de renovaci&oacute;n).

Cada actualizaci&oacute;n debe estar autenticada y firmada por el cliente registrado.

---

### Consulta del registro (RFC 7592)

Permite recuperar la configuraci&oacute;n actual de un cliente:

**GET **`/register/{client_id}`

La respuesta incluye todos los metadatos activos del cliente, con fines de auditor&iacute;a y control de versiones.

---

### Revocaci&oacute;n o eliminaci&oacute;n del registro

El Authorization Server podr&aacute; invalidar registros de clientes que:

- 
Pierdan su autorizaci&oacute;n en el Directorio de Participantes.

- 
Posean certificados expirados o comprometidos.

- 
Infrinjan pol&iacute;ticas de seguridad definidas por la CMF.

---

## Validaci&oacute;n del *Software Statement Assertion (SSA)*

Cada solicitud de registro (`POST /register`) deber&aacute; incluir un campo `software_statement`, que corresponde a un **JWT firmado** emitido por el **Directorio de Participantes**.

El Authorization Server deber&aacute;:

- 
Validar la firma del SSA usando las claves publicadas en el **JWKS del Directorio**.

- 
Verificar su **vigencia (exp)**, **audiencia (aud)** y **identificador &uacute;nico (jti)**.

- 
Asegurar que los atributos del SSA (ej. `organization_id`, `roles`, `jwks_uri`) coincidan con la informaci&oacute;n declarada.

En entornos de prueba o sandbox, la validaci&oacute;n del SSA podr&aacute; ser simulada, pero deber&aacute; activarse en producci&oacute;n sin excepci&oacute;n.

---

## Atributos m&iacute;nimos del registro de cliente

| 
Campo
 | 
Tipo
 | 
Obligatorio
 | 
Descripci&oacute;n
 |  |
| 
`software_statement`
 | 
JWT
 | 
Si
 | 
Emite el Directorio, contiene atributos verificados.
 |  |
| 
`redirect_uris`
 | 
array
 | 
Si
 | 
URIs v&aacute;lidas de retorno del flujo OAuth.
 |  |
| 
`grant_types`
 | 
array
 | 
Si
 | 
Tipos de flujo admitidos (solo `authorization_code`).
 |  |
| 
`token_endpoint_auth_method`
 | 
string
 | 
Si
 | 
`tls_client_auth` o `private_key_jwt`.
 |  |
| 
`jwks_uri`
 | 
string
 | 
Si
 | 
URI p&uacute;blica de las claves del cliente.
 |  |
| 
`scope`
 | 
string
 | 
Si
 | 
Scopes autorizados (`openid accounts payments`, etc.).
 |  |
| 
`application_type`
 | 
string
 | 
Si
 | 
`web` o `service`.
 |  |
| 
`client_name`
 | 
string
 | 
Si
 | 
Nombre legible del cliente.
 |  |
| 
`contacts`
 | 
array
 | 
Si
 | 
Correos de contacto t&eacute;cnico y de seguridad.
 |  |
| 
`logo_uri`
 | 
string
 | 
Opcional
 | 
Logo del cliente.
 |  |
| 
`policy_uri` / `tos_uri`
 | 
string
 | 
Opcional
 | 
Pol&iacute;tica de privacidad y t&eacute;rminos de servicio.
 |  |

---

## Requisitos de seguridad

- 
Las comunicaciones del DCR deber&aacute;n realizarse mediante **HTTPS + mTLS** conforme a **RFC 8705**.

- 
El uso de **client_secret_basic** o **client_secret_post** est&aacute; prohibido.

- 
Todos los *tokens* y *statements* deben utilizar **firmas PS256** y, cuando aplique, **cifrado RSA-OAEP/A256GCM**.

- 
Cada actualizaci&oacute;n de registro deber&aacute; generar un **nuevo token de acceso** (rotaci&oacute;n obligatoria).

- 
Todos los eventos de alta, actualizaci&oacute;n o revocaci&oacute;n deber&aacute;n registrarse con un **identificador &uacute;nico y timestamp** para fines de auditor&iacute;a.

---

## Consideraciones operativas y auditor&iacute;a

- 
Los registros deber&aacute;n conservarse **&iacute;ntegros y auditables** por un m&iacute;nimo de 5 a&ntilde;os.

- 
El Directorio de Participantes deber&aacute; mantener sincronizaci&oacute;n en tiempo real con los registros aprobados, evitando inconsistencias entre entornos.

- 
En caso de p&eacute;rdida de sincronizaci&oacute;n o error de firma en SSA, el registro deber&aacute; **rechazarse autom&aacute;ticamente**.

## Diagrama de flujo simplificado

![Flujo de secuencia DCR.png](../attachments/v1-0-0-dynamic-client-registration/Flujo%20de%20secuencia%20DCR.png)

## Glosario de abreviaturas

| 
Sigla
 | 
Descripci&oacute;n
 |  |
| 
DCR
 | 
Dynamic Client Registration
 |  |
| 
SSA
 | 
Software Statement Assertion
 |  |
| 
JWKS
 | 
JSON Web Key Set
 |  |
| 
mTLS
 | 
Mutual TLS
 |  |
| 
PSBI / PSIP
 | 
Prestador de Servicios Basados en Informaci&oacute;n / de Iniciaci&oacute;n de Pagos
 |  |
| 
IPI / IPC
 | 
Instituci&oacute;n Proveedora de Informaci&oacute;n / de Cuentas de Pago
 |  |

---

## Attachments

- 🖼️ [Flujo de registro con SSA  emitido por CMF.png](../attachments/v1-0-0-dynamic-client-registration/Flujo%20de%20registro%20con%20SSA%20%20emitido%20por%20CMF.png) (224 KB)
- 🖼️ [Flujo de secuencia DCR.png](../attachments/v1-0-0-dynamic-client-registration/Flujo%20de%20secuencia%20DCR.png) (208 KB)
