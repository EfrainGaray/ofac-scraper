---
title: "v1.0.0 - Perfil de Seguridad del Sistema de Finanzas Abiertas"
id: "128974849"
version: 1
updated: "2026-01-05T17:52:43.824Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-perfil-de-seguridad-del-sistema-de-finanzas-abiertas"
---
# v1.0.0 - Perfil de Seguridad del Sistema de Finanzas Abiertas

# Introducci&oacute;n

El presente documento establece el **Perfil de Seguridad del Sistema de Finanzas Abiertas (SFA) de Chile**, en cumplimiento de la **Ley N&deg; 21.521 (Ley Fintec)** y la **Norma de Car&aacute;cter General N&deg; 514 (NCG 514) y su Anexo 3**, emitidas por la **Comisi&oacute;n para el Mercado Financiero (CMF)**.

Su objetivo es proporcionar a los **Participantes** (PSBI, PSIP, IPI e IPC) un marco t&eacute;cnico-normativo homog&eacute;neo para la implementaci&oacute;n de interfaces seguras de intercambio de informaci&oacute;n y de iniciaci&oacute;n de pagos, en conformidad con los est&aacute;ndares internacionales **FAPI 2.0 Security ** y **OAuth 2.0**.

El Perfil adopta los lineamientos de la **OpenID Foundation**, garantizando interoperabilidad internacional y adecuaci&oacute;n a la realidad regulatoria chilena.

---

## Normativas de referencia

| 
Categor&iacute;a
 | 
Referencia
 | 
Detalle
 |  |
| --- | --- | --- | --- |
| 
**OpenID Foundation**
 | 
FAPI 2.0 Security Profile 
 | 
Control obligatorio en el SFA.
 |  |
| 
 | 
FAPI 2.0 Attacker Model
 | 
Marco de amenazas adoptado.
 |  |
| 
 | 
OpenID Connect CIBA
 | 
Flujo desacoplado para iniciaci&oacute;n de pagos.
 |  |
| 
**OAuth 2.0 / IETF RFCs**
 | 
RFC 6749
 | 
OAuth 2.0 Authorization Framework.
 |  |
| 
 | 
RFC 6819
 | 
OAuth 2.0 Threat Model and Security Considerations.
 |  |
| 
 | 
RFC 7519
 | 
JSON Web Token (JWT).
 |  |
| 
 | 
RFC 7591 / 7592
 | 
Dynamic Client Registration Protocol / Management.
 |  |
| 
 | 
RFC 8705
 | 
Mutual TLS for OAuth 2.0.
 |  |
| 
 | 
RFC 9126
 | 
Pushed Authorization Requests.
 |  |
| 
 | 
RFC 9396
 | 
Rich Authorization Requests (RAR).
 |  |
| 
 | 
RFC 8414
 | 
OAuth 2.0 Authorization Server Metadata.
 |  |
| 
 | 
RFC 7009
 | 
OAuth 2.0 Token Revocation.
 |  |
| 
**Regulaci&oacute;n chilena**
 | 
Ley N&deg; 21.521 (Ley Fintec)
 | 
Marco legal habilitante.
 |  |
| 
 | 
NCG 514 (Anexo 3) &ndash; CMF
 | 
Disposiciones t&eacute;cnicas obligatorias.
 |  |

---

## &Iacute;ndice de abreviaturas

| 
Abreviatura
 | 
Definici&oacute;n
 |  |
| 
**SFA**
 | 
Sistema de Finanzas Abiertas (Chile).
 |  |
| 
**CMF**
 | 
Comisi&oacute;n para el Mercado Financiero.
 |  |
| 
**PSBI**
 | 
Proveedora de Servicios Basados en Informaci&oacute;n.
 |  |
| 
**PSIP**
 | 
Proveedora de Servicios de Iniciaci&oacute;n de Pagos.
 |  |
| 
**IPI**
 | 
Instituci&oacute;n Proveedora de Informaci&oacute;n.
 |  |
| 
**IPC**
 | 
Instituci&oacute;n Proveedora de Cuentas.
 |  |
| 
**PAR**
 | 
Pushed Authorization Requests.
 |  |
| 
**JARM**
 | 
JWT Secured Authorization Response Mode.
 |  |
| 
**RAR**
 | 
Rich Authorization Requests.
 |  |
| 
**CIBA**
 | 
Client Initiated Backchannel Authentication.
 |  |
| 
**DCR**
 | 
Dynamic Client Registration.
 |  |
| 
**JWT**
 | 
JSON Web Token.
 |  |
| 
**mTLS**
 | 
Mutual TLS (autenticaci&oacute;n mutua).
 |  |
| 
**MFA**
 | 
Multi-Factor Authentication.
 |  |
| 
**SCA**
 | 
Strong Customer Authentication
 |  |
| 
**JWKS**
 | 
JSON Web Key Set.
 |  |
| 
**DRP**
 | 
Disaster Recovery Plan.
 |  |
| 
**BCP**
 | 
Business Continuity Plan.
 |  |
| 
**SOC**
 | 
Security Operations Center.
 |  |
| 
**OIDF**
 | 
OpenID Foundation.
 |  |

# &Aacute;mbito y Definiciones

## Descripci&oacute;n

Este cap&iacute;tulo establece el alcance normativo y t&eacute;cnico del **Perfil de Seguridad del Sistema de Finanzas Abiertas (SFA) de Chile**, identificando los **roles, componentes y principios fundamentales** que regir&aacute;n la interacci&oacute;n entre los Participantes.

El Perfil de Seguridad aplica a todos los **flujos de intercambio de informaci&oacute;n y de iniciaci&oacute;n de pagos** definidos en el marco de la **Ley N&deg; 21.521 (Ley Fintec)**, la **NCG 514 y su Anexo 3**, as&iacute; como las disposiciones t&eacute;cnicas emitidas por la **Comisi&oacute;n para el Mercado Financiero (CMF)**.

## Roles del SFA

| 
Rol
 | 
Definici&oacute;n
 | 
Ejemplos
 |  |
| 
**PSBI**
 | 
Proveedor de Servicios Basados en Informaci&oacute;n. Consume APIs de IPI previa autorizaci&oacute;n del Usuario Final.
 | 
Fintech de PFM, scoring crediticio.
 |  |
| 
**PSIP**
 | 
Proveedor de Servicios de Iniciaci&oacute;n de Pagos. Ordena pagos en representaci&oacute;n del Usuario Final, previa autorizaci&oacute;n.
 | 
Iniciadores de pagos.
 |  |
| 
**IPI**
 | 
Instituci&oacute;n Proveedora de Informaci&oacute;n. Expone datos financieros del Usuario Final a trav&eacute;s de APIs.
 | 
Bancos, compa&ntilde;&iacute;as de seguros entre otros.
 |  |
| 
**IPC**
 | 
Instituci&oacute;n Proveedora de Cuentas. Provee acceso a cuentas corrientes, cuentas vista, tarjetas prepago y productos equivalentes para la ejecuci&oacute;n de una orden de pago instruida por un Usuario Final.
 | 
Bancos, emisores de prepago y otros proveedores de cuentas relacionados.
 |  |
| 
**Directorio de Participantes**
 | 
Infraestructura administrada por la CMF para validar identidad, certificados, endpoints y estado de los Participantes. Cada entidad mantiene una copia local sincronizada.
 | 
Operado por la CMF.
 |  |

## Requisitos normativos

- 
Todos los Participantes del SFA deber&aacute;n implementar obligatoriamente el **Perfil  de FAPI 2.0 Security Profile**.

- 
La utilizaci&oacute;n de perfiles inferiores est&aacute; expresamente prohibida.

- 
Los roles definidos (PSBI, PSIP, IPI, IPC) deber&aacute;n estar **inscritos y validados en el Directorio de Participantes**, el cual constituye la &uacute;nica fuente de confianza para:

- 
Validaci&oacute;n de certificados digitales durante el proceso de inscripci&oacute;n.

- 
Publicaci&oacute;n y consulta de endpoints de APIs.

- 
Gesti&oacute;n de estados de habilitaci&oacute;n, suspensi&oacute;n o revocaci&oacute;n.

- 
El Directorio operar&aacute; bajo el principio de **fuente aut&eacute;ntica**, desacoplado del flujo transaccional, con mecanismos de **sincronizaci&oacute;n** hacia las copias locales de los participantes.

- 
Todos los certificados, endpoints y atributos de seguridad deber&aacute;n estar **actualizados y reflejados** tanto en el Directorio como en las copias locales de cada Participante.

## Observaciones

- 
Los lineamientos para el manejo de Certificados (atributos, CAs autorizadas, vigencia, validaci&oacute;n extendida) ser&aacute;n detallados por la CMF.

- 
El modelo adoptado por Chile se alinea con experiencias internacionales, facilitando la **interoperabilidad** y la **certificaci&oacute;n de FAPI 2.0 **

- 
Los PSBI y PSIP deber&aacute;n contemplar la **integraci&oacute;n con el Directorio** desde fases tempranas de desarrollo, considerando costos asociados a la gesti&oacute;n de certificados y sincronizaci&oacute;n de datos.

# Modelo de Amenazas y Principios de Seguridad

## Descripci&oacute;n

Este cap&iacute;tulo define el **marco de amenazas y principios de seguridad** que deber&aacute;n observar todos los Participantes del SFA.

El modelo adoptado se basa en el **FAPI 2.0 Attacker Model** de la OpenID Foundation, adaptado a la realidad del ecosistema chileno conforme a la **Ley N&deg; 21.521 (Ley Fintec)** y la **NCG 514 (Anexo 3)**.

El objetivo es identificar los **riesgos m&aacute;s relevantes** y establecer los **controles m&iacute;nimos obligatorios** que PSBI, PSIP, IPI e IPC deber&aacute;n implementar en sus interfaces de autorizaci&oacute;n, autenticaci&oacute;n y acceso a recursos.

## Amenazas relevantes en el SFA

| 
Categor&iacute;a
 | 
Descripci&oacute;n
 | 
Ejemplo de ataque
 | 
Mitigaci&oacute;n en FAPI 2.0 
 |  |
| 
**Phishing / Consent phishing**
 | 
Enga&ntilde;o al Usuario Final para que autorice accesos indebidos.
 | 
Usuario Final aprueba acceso en un portal fraudulento.
 | 
Uso obligatorio de **PAR **y flujos de consentimiento expl&iacute;citos y auditables.
 |  |
| 
**Robo o fuga de tokens**
 | 
Interceptaci&oacute;n de access o refresh tokens.
 | 
Token expuesto en una red comprometida.
 | 
Tokens vinculados al cliente (**mTLS **)
 |  |
| 
**Replay / Token substitution**
 | 
Reutilizaci&oacute;n de tokens robados en otro contexto.
 | 
Token emitido para un PSBI usado por un atacante.
 | 
Binding de tokens + validaci&oacute;n de **aud** y **cnf**.
 |  |
| 
**Manipulaci&oacute;n de par&aacute;metros**
 | 
Alteraci&oacute;n de par&aacute;metros en el flujo de autorizaci&oacute;n.
 | 
Cambio de redirect_uri para capturar el c&oacute;digo.
 | 
**PAR obligatorio** y validaci&oacute;n estricta de redirect_uri.
 |  |
| 
**Exfiltraci&oacute;n de credenciales**
 | 
Robo de claves privadas o certificados.
 | 
Compromiso de client_secret o llaves JWT.
 | 
Prohibici&oacute;n de secretos compartidos + uso de certificados en **HSM**.
 |  |
| 
**Indisponibilidad (DoS/DoH)**
 | 
Saturaci&oacute;n de endpoints cr&iacute;ticos.
 | 
Ataques a `/authorize` o `/token`.
 | 
Monitoreo activo + planes de **resiliencia operativa** (ver Cap. 13).
 |  |

## Principios de seguridad obligatorios

- 
**Autenticaci&oacute;n robusta** de clientes mediante **mTLS**.

- 
**PAR obligatorio** en todas las autorizaciones, eliminando manipulaci&oacute;n de par&aacute;metros en redirecciones.

- 
**Binding de tokens** al cliente y al canal TLS (**sender-constraining**).

- 
**Consentimiento granular** con **RAR** (Cap. 7) y revocaci&oacute;n inmediata en tiempo real (Cap. 9).

- 
**Monitoreo y logging continuo** de accesos, rechazos y anomal&iacute;as.

- 
**Resiliencia operacional**, incluyendo planes de continuidad y recuperaci&oacute;n conforme a la NCG 514.

## Requisitos normativos

- 
Todos los Participantes deber&aacute;n adoptar como referencia el **FAPI 2.0 Attacker Model** para la gesti&oacute;n de riesgos de seguridad.

- 
Todo flujo de autorizaci&oacute;n deber&aacute; implementar controles contra **phishing, replay de tokens y manipulaci&oacute;n de par&aacute;metros**, conforme al perfil de seguridad.

- 
Los **Authorization Servers (IPI/IPC)** deber&aacute;n validar que los consentimientos y tokens est&eacute;n vinculados de manera un&iacute;voca al cliente autorizado.

- 
Todos los eventos de seguridad deber&aacute;n registrarse y conservarse con una retenci&oacute;n m&iacute;nima de **5 a&ntilde;os**, disponibles para fiscalizaci&oacute;n de la CMF.

- 
Se proh&iacute;be expresamente el uso de **secretos compartidos** como mecanismo de autenticaci&oacute;n.

# Perfil de Implementaci&oacute;n

## Descripci&oacute;n

Este cap&iacute;tulo define el **perfil &uacute;nico de seguridad aplicable en el SFA**, estableciendo que todos los Participantes deber&aacute;n implementar de manera obligatoria el **Perfil de FAPI 2.0 Security Profile**.

El uso de perfiles inferiores  no ser&aacute; admitido en el ecosistema chileno.

El perfil de seguridad proporciona controles reforzados frente a amenazas cr&iacute;ticas como **phishing, replay, manipulaci&oacute;n de par&aacute;metros y fuga de tokens**, mediante la obligatoriedad de:

- 
**Pushed Authorization Requests (PAR)**.

- 
**Sender-constraining de tokens**.

## Requisitos del perfil de seguridad

| 
Requisito
 | 
Descripci&oacute;n
 |  |
| 
**PAR obligatorio**
 | 
Toda solicitud de autorizaci&oacute;n debe realizarse v&iacute;a PAR (RFC 9126).
 |  |
| 
**Sender-constraining**
 | 
Tokens vinculados al cliente mediante **mTLS**
 |  |
| 
**RAR obligatorio**
 | 
Consentimiento granular con `authorization_details`.
 |  |
| 
**Consentimiento expl&iacute;cito y revocable**
 | 
Panel de control y de gesti&oacute;n de consentimientos en el rol de IPI/IPC y PSBI/PSIP.
 |  |
| 
**Autenticaci&oacute;n MFA**
 | 
Autenticaci&oacute;n m&uacute;ltiple del Usuario Final para captura y gesti&oacute;n del consentimiento.
 |  |

## Requisitos normativos

- 
Todos los Participantes deber&aacute;n implementar el **Perfil de FAPI 2.0 Security Profile** como requisito obligatorio.

- 
Toda **solicitud de autorizaci&oacute;n** deber&aacute; realizarse v&iacute;a **PAR**.

- 
Todos los tokens deber&aacute;n estar vinculados al cliente emisor mediante **mTLS**.

- 
Queda prohibido el uso de perfiles inferiores.

- 
El **Directorio de Participantes** ser&aacute; la &uacute;nica fuente de validaci&oacute;n de certificados, endpoints y software statements.

# Pushed Authorization Requests (PAR)

## Descripci&oacute;n

El mecanismo **Pushed Authorization Requests (PAR)**, definido en el **RFC 9126**, establece que las solicitudes de autorizaci&oacute;n deben transmitirse de forma **directa, autenticada y segura** entre el Cliente (PSBI/PSIP) y el Authorization Server (IPI/IPC).

Con PAR se eliminan riesgos de exposici&oacute;n o manipulaci&oacute;n de par&aacute;metros en el navegador del Usuario Final, garantizando:

- 
**Integridad de los par&aacute;metros** de autorizaci&oacute;n.

- 
**Prevenci&oacute;n de ataques** de manipulaci&oacute;n de redirect_uri o scopes.

- 
**Consistencia** entre scopes tradicionales y acciones declaradas en **RAR** (Cap. 7).

En el SFA, el uso de PAR es **obligatorio en todos los flujos de autorizaci&oacute;n**.

## Flujo PAR en el SFA

- 
**Solicitud PAR**

- 
El PSBI/PSIP env&iacute;a una solicitud de autorizaci&oacute;n al endpoint `/par` del IPI/IPC.

- 
La transmisi&oacute;n se realiza en canal autenticado (**mTLS**).

- 
**Respuesta PAR**

- 
El Authorization Server responde con un `request_uri` &uacute;nico y ef&iacute;mero.

- 
Este identificador tiene una vigencia m&aacute;xima de **90 segundos**.

- 
**Redirecci&oacute;n del Usuario Final**

- 
El Usuario Final es redirigido al Authorization Server con el `request_uri`.

- 
El servidor valida que corresponda al cliente registrado y autorizado.

## Requisitos normativos

- 
Todos los Participantes deber&aacute;n implementar **PAR** como mecanismo &uacute;nico y obligatorio de autorizaci&oacute;n.

- 
El endpoint `/par` deber&aacute; estar **expuesto por todas las IPI/IPC** y publicado en el **Directorio de Participantes**.

- 
El `request_uri` generado deber&aacute; cumplir con:

- 
**Validez m&aacute;xima de 90 segundos**.

- 
**No reutilizable**.

- 
**Vinculaci&oacute;n un&iacute;voca** al cliente emisor.

- 
Queda prohibido incluir par&aacute;metros sensibles (ej. scopes, RAR, redirect_uri) directamente en el navegador.

- 
Los registros de solicitudes PAR deber&aacute;n conservarse &iacute;ntegros y auditables por un m&iacute;nimo de **5 a&ntilde;os**.

# Autenticaci&oacute;n de Clientes y mTLS

## Descripci&oacute;n

La autenticaci&oacute;n de clientes confidenciales es un pilar esencial del **Perfil de Seguridad del SFA**.

De acuerdo con **FAPI 2.0**, los clientes (PSBI y PSIP) deber&aacute;n autenticarse ante los Authorization Servers (IPI/IPC) mediante **mecanismos criptogr&aacute;ficos fuertes y asim&eacute;tricos**, eliminando el uso de secretos compartidos.

En el SFA, el mecanismo permitido es:

- 
**mTLS (Mutual TLS)** como m&eacute;todo principal

- 
El mTLS ser&aacute; inscrito a trav&eacute;s del **Directorio de Participantes**.

**Nota: private_key_jwt** no es una alternativa aceptada.

## M&eacute;todos de autenticaci&oacute;n permitidos

| 
M&eacute;todo
 | 
Descripci&oacute;n
 | 
Estado
 | 
Observaciones
 |  |
| 
**mTLS**
 | 
Autenticaci&oacute;n mutua TLS mediante certificado digital.
 | 
Obligatorio como m&eacute;todo principal.
 | 
Certificados emitidos por CA reconocida e inscritos en el Directorio.
 |  |
| 
**private_key_jwt**
 | 
Autenticaci&oacute;n mediante JWT firmado con clave privada del cliente.
 | 
Prohibido.
 | 
 |  |
| 
**client_secret_basic / post**
 | 
Basados en secretos compartidos.
 | 
Prohibido.
 | 
Incompatibles con FAPI 2.0.
 |  |

## Requisitos normativos

- 
Todos los PSBI y PSIP deber&aacute;n autenticarse ante las IPI/IPC utilizando **mTLS**.

- 
Los certificados utilizados para mTLS deber&aacute;n:

- 
Ser emitidos por una **CA que cumpla con los requisitos definidos por la CMF**.

- 
Estar **inscritos en el Directorio de Participantes**.

- 
Rotarse conforme a la **pol&iacute;tica de ciclo de vida** definida por la CMF.

- 
Queda prohibido el uso de secretos compartidos (`client_secret_basic`, `client_secret_post`).

- 
Los intentos de autenticaci&oacute;n fallida deber&aacute;n registrarse y ser auditables.

# Scopes, Claims y Rich Authorization Requests (RAR)

## 6.1 Descripci&oacute;n

Este cap&iacute;tulo establece la gesti&oacute;n de **scopes, claims** y el uso obligatorio de **Rich Authorization Requests (RAR)** en el SFA.

La **CMF** adopta el **RFC 9396 (RAR)** para granularizar el consentimiento m&aacute;s all&aacute; del par&aacute;metro `scope`. De esta manera, el Usuario Final autoriza de forma expl&iacute;cita **recursos, acciones, identificadores y finalidades**, asegurando control y trazabilidad en cada autorizaci&oacute;n.

RAR ser&aacute; obligatorio en todas las APIs del SFA que requieran consentimiento, incluyendo: **cuentas, pagos, cr&eacute;ditos, inversiones, seguros**, entre otras, complementando los `scopes` tradicionales de OAuth 2.0.

## 6.2 Estructura de `authorization_details`

| 
Campo
 | 
Tipo JSON
 | 
Card.
 | 
Oblig.
 | 
Ejemplo
 | 
Observaciones
 |  |
| 
**type**
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
`"Accounts"`
 | 
Identifica la API solicitada.
 |  |
| 
**actions**
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
`["ReadAccounts","ReadTransactions"]`
 | 
Operaciones permitidas.
 |  |
| 
**datatypes**
 | 
array
 | 
0..1
 | 
No
 | 
`["accounts","transactions"]`
 | 
Sub-recursos opcionales.
 |  |
| 
**locations**
 | 
array
 | 
0..1
 | 
No
 | 
`["https://api.bank.com/accounts"]`
 | 
Endpoints concretos.
 |  |
| 
**identifier**
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
`"ACC12345"`
 | 
ID de cuenta, p&oacute;liza o contrato.
 |  |
| 
**privileges**
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
`["level1","level2"]`
 | 
Niveles jer&aacute;rquicos de privilegio.
 |  |
| 
**purpose**
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
`"personal_finance_management"`
 | 
Finalidad autorizada (&le;300 caracteres).
 |  |
| 
**consentType**
 | 
boolean
 | 
1..1
 | 
S&iacute;
 | 
`false`
 | 
Define si el consentimiento expira.
 |  |
| 
**recurringIndicator**
 | 
boolean
 | 
1..1
 | 
S&iacute;
 | 
`true`
 | 
Indica acceso recurrente.
 |  |
| 
**frequency**
 | 
string (RFC 5545)
 | 
0..1*
 | 
S&iacute;*
 | 
`"R/2025-05-01T00:00:00Z/P1M"`
 | 
Obligatorio si recurrente.
 |  |
| 
**validFrom**
 | 
string (UTC)
 | 
0..1
 | 
No
 | 
`"2025-04-22T00:00:00Z"`
 | 
Inicio de vigencia.
 |  |
| 
**validTo**
 | 
string (UTC)
 | 
0..1
 | 
S&iacute;
 | 
`"2026-04-22T00:00:00Z"`
 | 
L&iacute;mite regulatorio.
 |  |

## Ejemplo de solicitud RAR

## Requisitos normativos

- 
Toda autorizaci&oacute;n en el SFA deber&aacute; incluir el par&aacute;metro `authorization_details` conforme a RFC 9396.

- 
Los campos `type`, `actions`, `identifier`, `privileges`, `purpose`, `consentType` y `recurringIndicator` ser&aacute;n obligatorios.

- 
El campo `purpose` es un campo informativo abierto sin que se pueda utilizar para ninguna restricci&oacute;n.

- 
Cuando `recurringIndicator = true`, el campo `frequency` ser&aacute; obligatorio, siguiendo el est&aacute;ndar RFC 5545.

- 
La coherencia entre **scope &harr; actions **deber&aacute; ser validada por el Authorization Server (IPI/IPC).

- 
Los consentimientos deber&aacute;n identificarse con un **grantId &uacute;nico** y estados auditables (ej. AwaitingAuthorisation, Authorised, Revoked).

- 
Las revocaciones deber&aacute;n informarse a las entidades de forma as&iacute;ncrona.

# Client Initiated Backchannel Authentication (CIBA)

## Descripci&oacute;n

**Client Initiated Backchannel Authentication (CIBA) no es un elemento que forme parte actualmente de la normativa. Este cap&iacute;tulo, as&iacute; como las menciones que se realizan a dicho protocolo, deben entenderse como una mera referencia, ante su eventual incorporaci&oacute;n en versiones posteriores de la norma.**

**CIBA**, definido por la **OpenID Foundation**, habilita la **autenticaci&oacute;n y autorizaci&oacute;n desacoplada** del Usuario Final, en escenarios donde no existe interacci&oacute;n directa v&iacute;a navegador.

En el SFA, **CIBA **permitir&aacute; que los **PSIP** inicien solicitudes mientras la autenticaci&oacute;n del Usuario Final se realiza en un canal seguro gestionado por la **IPI/IPC** (ejemplo: app bancaria, biometr&iacute;a, OTP).

## Par&aacute;metros principales en CIBA

| 
Par&aacute;metro
 | 
Descripci&oacute;n
 | 
Estado en Chile
 | 
Observaciones
 |  |
| 
**login_hint_token**
 | 
Identificador opaco emitido por la IPI/IPC que representa al Usuario Final.
 | 
Obligatorio en productivo.
 | 
Previene exposici&oacute;n de datos sensibles.
 |  |
| 
**id_token_hint**
 | 
ID Token previo del Usuario Final.
 | 
Opcional.
 | 
No sustituye a `login_hint_token`.
 |  |
| 
**binding_message**
 | 
Mensaje mostrado al Usuario Final para confirmar la operaci&oacute;n.
 | 
Opcional.
 | 
Recomendado en autenticaciones m&oacute;viles.
 |  |

## Flujo CIBA en el SFA

- 
**Inicio de autenticaci&oacute;n**

- 
El PSIP env&iacute;a una solicitud CIBA al Authorization Server (IPI/IPC), con `login_hint_token` y **authorization_details (RAR)**.

- 
**Autenticaci&oacute;n del Usuario Final**

- 
El Usuario Final recibe una notificaci&oacute;n en el canal seguro de la IPI/IPC (ej. aplicaci&oacute;n bancaria).

- 
La autenticaci&oacute;n deber&aacute; realizarse con **MFA/SCA obligatorio**.

- 
**Resultado de la operaci&oacute;n**

- 
El Authorization Server responde al PSIP mediante **polling** o **callback as&iacute;ncrono**.

- 
El resultado podr&aacute; ser: *Authorised*, *Rejected* o *Expired*.

## Requisitos normativos

- 
El uso de `login_hint_token` ser&aacute; **obligatorio en ambientes productivos**.

- 
Los `login_hint_token` deber&aacute;n ser **opacos, emitidos por la IPI/IPC** y validados en el **Directorio de Participantes**.

- 
La autenticaci&oacute;n del Usuario Final deber&aacute; realizarse siempre con **MFA/SCA**.

- 
Los resultados de autenticaci&oacute;n deber&aacute;n registrarse con **identificadores &uacute;nicos y estados auditables**.

- 
Los eventos de autorizaci&oacute;n o rechazo deber&aacute;n comunicarse en tiempo real para permitir la actualizaci&oacute;n del **Panel de gesti&oacute;n del consentimiento del PSBI/PSIP**.

# Consentimiento

## Descripci&oacute;n

El consentimiento constituye el **fundamento legal y t&eacute;cnico** del SFA.

De acuerdo con **FAPI 2.0 **y el **Anexo 3 de la NCG 514**, todo acceso a informaci&oacute;n o ejecuci&oacute;n de pagos por parte de un **PSBI** o **PSIP** deber&aacute; contar con un consentimiento:

- 
**Expreso y espec&iacute;fico**, otorgado por el Usuario Final.

- 
**Verificable y trazable** durante todo su ciclo de vida.

- 
**Revocable en tiempo real**.

El consentimiento se representar&aacute; como un **grant** con identificador &uacute;nico (`grantId`), gestionado mediante **RAR** (Cap. 7).

## Principios del consentimiento en el SFA

- 
**Expreso y espec&iacute;fico**: autorizaci&oacute;n de recursos, acciones y finalidades espec&iacute;ficas.

- 
**Duradero y verificable**: los consentimientos deber&aacute;n conservarse por un m&iacute;nimo de **5 a&ntilde;os**, incluso si fueron revocados o expirados.

- 
**Revocable en tiempo real**: todos los estados deber&aacute;n reflejarse inmediatamente en el Authorization Server (IPI/IPC) y se comunicar&aacute; a los participantes la revocaci&oacute;n.

- 
**Auditado**: cada consentimiento deber&aacute; contar con trazabilidad completa (`grantId`, estado, logs de cambios).

- 
**No condicionado**: queda prohibido condicionar servicios a consentimientos innecesarios o inducir mediante *dark patterns*.

## Estados de un consentimiento

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
Consentimiento rechazado por el Usuario Final durante el proceso. 
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
Se corresponde cuando el consentimiento otorgado a una PSBI/PSIP ha expirado en su vigencia.
 |  |

## Requisitos normativos

- 
Todos los consentimientos deber&aacute;n generarse mediante **RAR** conforme al Cap. 7.

- 
Cada consentimiento deber&aacute; contar con un **grantId &uacute;nico**, emitido por el Authorization Server (IPI/IPC).

- 
El campo `purpose` en `authorization_details` es un campo informativo que no deber&aacute; ser usado para ninguna restricci&oacute;n.

- 
El campo `validTo` no podr&aacute; exceder los l&iacute;mites regulatorios:

- 
**Datos**: vigencia m&aacute;xima de 36 meses.

- 
**Pagos**: Vigencia de acuerdo al caso de uso con un l&iacute;mite definido al momento de captura del consentimiento.

- 
Los Participantes deber&aacute;n ofrecer al Usuario Final un **Panel de control de consentimientos** que permita visualizar, auditar y revocar consentimientos en todo momento.

- 
La **revocaci&oacute;n** deber&aacute; propagarse a los participantes de forma as&iacute;ncrona.

- 
Los consentimientos deber&aacute;n almacenarse de forma &iacute;ntegra y verificable por un per&iacute;odo m&iacute;nimo de **5 a&ntilde;os**.

# Dynamic Client Registration (DCR)

## Descripci&oacute;n

El **Dynamic Client Registration (DCR)**, definido en los **RFC 7591 y RFC 7592**, permite que los clientes (PSBI y PSIP) se registren din&aacute;micamente en los Authorization Servers (IPI/IPC), utilizando **software statements** emitidos por el **Directorio de Participantes**.

En el SFA, **DCR es obligatorio para todos los participantes**, asegurando un proceso de **onboarding automatizado, seguro y auditable**.

## Elementos principales de DCR

| 
Elemento
 | 
Descripci&oacute;n
 | 
Cumplimiento
 |  |
| 
**Software statement**
 | 
JWT firmado por el Directorio con atributos del cliente.
 | 
Obligatorio.
 |  |
| 
**Atributos m&iacute;nimos**
 | 
Incluye `redirect_uri`, `jwks_uri`, `organization_id`, `roles`, `logo_uri`.
 | 
Definidos por la CMF.
 |  |
| 
**Validaci&oacute;n**
 | 
Verificaci&oacute;n de firma, vigencia, endpoints y certificados.
 | 
Obligatoria en IPI/IPC.
 |  |
| 
**Actualizaci&oacute;n**
 | 
Uso de RFC 7592 para rotaci&oacute;n de certificados o metadatos.
 | 
Obligatoria.
 |  |
| 
**Revocaci&oacute;n**
 | 
Invalidez cuando un participante pierde autorizaci&oacute;n o caduca un certificado.
 | 
Reflejada en el Directorio.
 |  |

## Flujo DCR en el SFA

- 
**Solicitud inicial**

- 
El PSBI/PSIP solicita registro enviando un *software statement* emitido por el Directorio.

- 
**Validaci&oacute;n**

- 
El Authorization Server valida la firma, vigencia y atributos del *software statement*.

- 
**Registro exitoso**

- 
El cliente recibe su `client_id` y atributos registrados.

- 
**Actualizaciones**

- 
Cualquier modificaci&oacute;n de `redirect_uri`, `jwks_uri` o certificados deber&aacute; realizarse mediante **RFC 7592**.

- 
**Revocaci&oacute;n**

- 
El Directorio podr&aacute; invalidar *software statements* o revocar registros en caso de incumplimiento o suspensi&oacute;n.

![image-20251229-140303.png](../attachments/v1-0-0-perfil-de-seguridad-del-sistema-de-finanzas-abiertas/image-20251229-140303.png)

## Requisitos normativos

- 
Todos los **PSBI y PSIP** deber&aacute;n registrarse din&aacute;micamente en cada **IPI/IPC** mediante DCR.

- 
El *software statement* deber&aacute; ser emitido exclusivamente por el **Directorio de Participantes**, firmado con su clave privada.

- 
Los Authorization Servers deber&aacute;n validar que los atributos incluidos en el *software statement* correspondan a los valores registrados en el Directorio.

- 
El proceso de actualizaci&oacute;n de metadatos (RFC 7592) ser&aacute; obligatorio, quedando prohibidas modificaciones manuales fuera del flujo DCR.

- 
El **Directorio de Participantes** ser&aacute; la &uacute;nica fuente oficial de emisi&oacute;n, renovaci&oacute;n y revocaci&oacute;n de *software statements*.

# Certificados y Confianza

## Descripci&oacute;n

La gesti&oacute;n de certificados constituye el **n&uacute;cleo de confianza** del SFA.

Los certificados permiten:

- 
Validar la identidad de los Participantes.

- 
Establecer canales seguros de comunicaci&oacute;n (**TLS/mTLS**).

- 
Garantizar la validez de las **firmas digitales** en tokens y *software statements*.

El **Directorio de Participantes**, administrado por la CMF, ser&aacute; la **&uacute;nica fuente de confianza** para la validaci&oacute;n de certificados de identidad, transporte y firma.

## Tipos de certificados en el SFA

| 
Tipo
 | 
Uso principal
 | 
Cumplimiento
 |  |
| 
**Certificado de transporte (TLS/mTLS)**
 | 
Establecer canales seguros entre clientes y servidores.
 | 
Obligatorio. 
 |  |
| 
**Certificado de firma de tokens/JWT**
 | 
ID Tokens y Access Tokens.
 | 
Obligatorio. Claves p&uacute;blicas registradas en el Directorio (JWKS).
 |  |
| 
**Certificado de software statement**
 | 
Validar onboarding v&iacute;a DCR.
 | 
Obligatorio. Emitido por el Directorio.
 |  |

## Requisitos normativos

- 
Todos los Participantes deber&aacute;n utilizar certificados emitidos por **CAs aceptadas por la CMF**.

- 
Todos los certificados deber&aacute;n estar **inscritos y validados** en el Directorio de Participantes.

- 
Los certificados de transporte deber&aacute;n rotarse peri&oacute;dicamente seg&uacute;n la pol&iacute;tica de ciclo de vida definido por la CMF.

- 
Todos los dominios asociados a APIs del SFA deber&aacute;n implementar **DNSSEC** y **registros CAA**, limitando qu&eacute; CAs pueden emitir certificados.

- 
Son requeridos certificados con validaci&oacute;n extendida (EV) seg&uacute;n se indica en la secci&oacute;n VI Requerimientos de seguridad del Anexo 3.

- 
La revocaci&oacute;n de un certificado deber&aacute; reflejarse en el Directorio y propagarse a todos los Participantes.

# Eventos, Revocaci&oacute;n y Notificaci&oacute;n

## Descripci&oacute;n

La **revocaci&oacute;n en tiempo real** de tokens, consentimientos y certificados es fundamental para preservar la seguridad del SFA.

Este cap&iacute;tulo define los mecanismos obligatorios de **revocaci&oacute;n y notificaci&oacute;n as&iacute;ncrona** entre Participantes, garantizando la sincronizaci&oacute;n inmediata en el **Directorio de Participantes** y en **el Panel de gesti&oacute;n del Consentimiento**

## Tipos de eventos de revocaci&oacute;n

| 
Tipo
 | 
Descripci&oacute;n
 | 
Cumplimiento
 |  |
| 
**Revocaci&oacute;n de tokens**
 | 
Invalidaci&oacute;n de *access* y *refresh tokens* v&iacute;a `/revoke`.
 | 
Obligatoria.
 |  |
| 
**Revocaci&oacute;n de certificados**
 | 
Invalidez de certificados de cliente/servidor.
 | 
Obligatoria, reflejada en el Directorio.
 |  |
| 
**Notificaci&oacute;n de eventos**
 | 
Comunicaci&oacute;n de cambios mediante **webhooks/CloudEvents**.
 | 
Obligatoria.
 |  |

## Requisitos normativos

- 
La revocaci&oacute;n de certificados deber&aacute; registrarse en el Directorio de Participantes, con **notificaci&oacute;n autom&aacute;tica** a todos los actores.

- 
Todos los Participantes deber&aacute;n implementar endpoints para **recibir notificaciones de eventos de revocaci&oacute;n**.

- 
Los eventos deber&aacute;n cumplir con el est&aacute;ndar **definido por CMF**, incluyendo metadatos de tiempo, tipo de evento y entidad afectada.

- 
La CMF establecer&aacute; los **SLA m&aacute;ximos de propagaci&oacute;n** (ej. &le; 5 minutos).

---

## Attachments

- 🖼️ [image-20251229-140303.png](../attachments/v1-0-0-perfil-de-seguridad-del-sistema-de-finanzas-abiertas/image-20251229-140303.png) (182 KB)
- 🖼️ [image-20251229-140245.png](../attachments/v1-0-0-perfil-de-seguridad-del-sistema-de-finanzas-abiertas/image-20251229-140245.png) (182 KB)
- 🖼️ [Flujo de registro con SSA  emitido por CMF.png](../attachments/v1-0-0-perfil-de-seguridad-del-sistema-de-finanzas-abiertas/Flujo%20de%20registro%20con%20SSA%20%20emitido%20por%20CMF.png) (224 KB)
- 📊 [RAR Scope-Matriz.xlsx](../attachments/v1-0-0-perfil-de-seguridad-del-sistema-de-finanzas-abiertas/RAR%20Scope-Matriz.xlsx) (34 KB)
