---
title: "v1.0.0 - Rich Authorization Requests (RAR)"
id: "125304833"
version: 1
updated: "2025-12-30T19:37:03.929Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-rich-authorization-requests-rar"
---
# v1.0.0 - Rich Authorization Requests (RAR)

## Introducci&oacute;n

La **CMF** adopta **Rich Authorization Requests (RAR)** &ndash; RFC 9396&ndash; para granularizar el consentimiento m&aacute;s all&aacute; del par&aacute;metro `scope`.

- 
**Beneficio**: el Usuario Final (PSU) aprueba s&oacute;lo los recursos, acciones y finalidades que declara el `authorization_details`.

- 
**Cobertura**: todas las APIs que requieran token de consentimiento (Cuentas, Pagos, Cr&eacute;ditos, Inversiones, etc.).

## Estructura **authorization_details** (Request)

| 
Campo
 | 
Tipo JSON
 | 
Card.
 | 
&iquest;Oblig.?
 | 
Ejemplo
 | 
Observaciones
 |  |
| --- | --- | --- | --- | --- | --- | --- |
| 
`type`
 | 
string
 | 
1..1
 | 
**S&iacute;**
 | 
`"Accounts"`
 | 
API a la que se accede (`"Accounts"`, `"Payments"`, &hellip;).
 |  |
| 
`actions`
 | 
array
 | 
1..1
 | 
**S&iacute;**
 | 
`["ReadAccounts","ReadTransactions"]`
 | 
Acciones/operaciones permitidas.
 |  |
| 
`datatypes`
 | 
array
 | 
0..1
 | 
No
 | 
`["accounts","transactions"]`
 | 
Sub-recursos; opcional para futuro uso.
 |  |
| 
`locations`
 | 
array
 | 
0..1
 | 
No
 | 
`["https://api.bank.com/accounts"]`
 | 
Endpoints concretos (RFC 9396 opcional).
 |  |
| 
`identifier`
 | 
string
 | 
1..1
 | 
**S&iacute;**
 | 
`"ACC12345"`
 | 
ID de cuenta / p&oacute;liza / inversi&oacute;n, etc.
 |  |
| 
`privileges`
 | 
array
 | 
1..1
 | 
**S&iacute;**
 | 
`["level1","level2","level3"]`
 | 
Niveles con dependencia; `level3` &ge; `level2`.
 |  |
| 
`whiteList`
 | 
array
 | 
0..1
 | 
No
 | 
 | 
Lista creciente de recursos a futuro.
 |  |
| 
`purpose`
 | 
string
 | 
1..1
 | 
**S&iacute;**
 | 
`"personal_finance_management"`
 | 
Finalidad se&ntilde;alada en un m&aacute;ximo de 300 caracteres, en idioma espa&ntilde;ol. 
 |  |
| 
`consentType`
 | 
boolean
 | 
1..1
 | 
**S&iacute;**
 | 
`false`
 | 
`true` &rArr; Consentimiento con caducidad.
 |  |
| 
`recurringIndicator`
 | 
boolean
 | 
1..1
 | 
**S&iacute;**
 | 
`true`
 | 
`true` &rArr; acceso recurrente.
 |  |
| 
`frequency`
 | 
string (RFC 5545)
 | 
0..1*
 | 
S&iacute;*
 | 
`"R/2025-05-01T00:00:00Z/P1M"`
 | 
Obligatorio cuando `recurringIndicator` = true.
 |  |
| 
`validFrom`
 | 
string (UTC)
 | 
0..1*
 | 
S&iacute;*
 | 
`"2025-04-22T00:00:00Z"`
 | 
*Si falta &rArr; ahora*.
 |  |
| 
`validTo`
 | 
string (UTC)
 | 
0..1*
 | 
S&iacute;*
 | 
`"2026-04-22T00:00:00Z"`
 | 
M&aacute;ximo regulatorio: 36 meses
 |  |

* Campos marcados `*` se vuelven obligatorios al cumplirse la condici&oacute;n indicada.

#### Ejemplo completo &ndash; Acceso a cuenta y transacciones

#### RAR en el flujo PAR

- 
El (PSBI / PSIP) env&iacute;a la solicitud Pushed Auth Request (/par) con uno o m&aacute;s objetos dentro del `authorization_details`*.*

- 
El **Servidor de autorizaci&oacute;n** verifica coherencia entre `scope del API` y acciones declaradas; si todo es v&aacute;lido, devuelve el `request_uri` firmado.

## Respuesta **grant** del AS

| 
Campo
 | 
Tipo JSON
 | 
Card.
 | 
Ejemplo
 | 
Nota
 |  |
| 
`grantId`
 | 
string (UUID)
 | 
1..1
 | 
`93f7bf98-&hellip;`
 | 
Identificador &uacute;nico del consentimiento.
 |  |
| 
`status`
 | 
enum
 | 
1..1
 | 
`AwaitingAuthorisation`
 | 
Estados: AwaitingAuthorisation, Authorised, Rejected, Revoked, Consumed, Expired.
 |  |
| 
`creationDateTime`
 | 
string
 | 
1..1
 | 
`2025-04-22T14:25:33Z`
 | 
Creaci&oacute;n.
 |  |
| 
`statusUpdateDateTime`
 | 
string
 | 
1..1
 | 
`2025-04-22T14:30:10Z`
 | 
&Uacute;ltimo cambio de estado.
 |  |
| 
`validFromDateTime`
 | 
string
 | 
0..1
 | 
`2025-04-22T00:00:00Z`
 | 
Global (m&iacute;nimo de cada detail).
 |  |
| 
`validToDateTime`
 | 
string
 | 
0..1
 | 
`2026-04-22T00:00:00Z`
 | 
L&iacute;mite global.
 |  |
| 
`recurringIndicator`
 | 
boolean
 | 
1..1
 | 
`true`
 | 
Copia del request.
 |  |
| 
`frequency`
 | 
string
 | 
0..1
 | 
`R/.../P1M`
 | 
Obli. si `recurringIndicator = true`.
 |  |
| 
`expirationType`
 | 
boolean
 | 
1..1
 | 
`false`
 | 
`false` &rArr; solo finaliza por revocaci&oacute;n.
 |  |
| 
`authorization_details`
 | 
array<object>
 | 
1..n
 | 
*echo de lo concedido*
 | 
Verificado / podado por AS.
 |  |
| 
`requestedAt`
 | 
string
 | 
0..1
 | 
`2025-04-22T14:27:45Z`
 | 
Momento de SCA.
 |  |
| 
`authorisedBy`
 | 
string
 | 
0..n
 | 
`-1/3`
 | 
Firmantes si hay multi-usuario.
 |  |
| 
`revokedBy`
 | 
string
 | 
0..1
 | 
`"PN_109876..."`
 | 
Presente solo si revocado.
 |  |

#### Ejemplo truncado

## Mapa de **scope &rarr; authorization_details**

Las distintas APIs y accesos con sus respectivas granularidades a continuaci&oacute;n:

## Reglas de validaci&oacute;n CMF

- 
**Coherencia Scope &harr; RAR**

- 
Cada acci&oacute;n declarada debe corresponder a un *scope* autorizado en el registro CMF.

- 
**Privilegios jer&aacute;rquicos**

- 
No se puede solicitar `level3` si no se incluyen los previos (`level1`, `level2`).

- 
**Fechas y periodicidad**

- 
`validTo` &le; m&aacute;ximo regulatorio definido por la CMF para el cl&uacute;ster; `frequency` RFC 5545 requerido si recurrente.

- 
**Prop&oacute;sito controlado - Finalidad**

- 
Valores permitidos publicados por la CMF (p.ej. `credit_scoring`, `pfm`, `tax_compliance`).

- 
**Revocaci&oacute;n**

- 
Cualquier `PATCH /consents/{grantId}` a estado `Revoked` se refleja en <= 5 min en el Panel de control de consentimientos.