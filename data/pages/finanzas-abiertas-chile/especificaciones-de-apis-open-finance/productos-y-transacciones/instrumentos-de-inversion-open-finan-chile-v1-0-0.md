---
title: "Instrumentos de Inversión - Open Finan Chile v1.0.0"
id: "124487057"
version: 1
updated: "2025-12-30T14:08:44.233Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/instrumentos-de-inversion-open-finan-chile-v1-0-0"
---
# Instrumentos de Inversión - Open Finan Chile v1.0.0

## Prop&oacute;sito

Permite a los *PSBI* consultar, con consentimiento v&aacute;lido, la **posici&oacute;n de ahorro e inversi&oacute;n** del cliente: instrumentos, saldos y movimientos.

## Endpoints disponibles

 

| 
**#**
 | 
**Endpoint**
 | 
**Descripci&oacute;n resumida**
 |  |
| --- | --- | --- | --- |
| 
1
 | 
*/investments*
 | 
Lista todas las inversiones del cliente.
 |  |
| 
2
 | 
*/investments/{investmentID}*
 | 
Devuelve el detalle de un instrumento espec&iacute;fico.
 |  |
| 
3
 | 
*/investments/{investmentID}/balance* 
 | 
Entrega el saldo actualizado y el hist&oacute;rico de balances. 
 |  |
| 
4
 | 
 */investments/{investmentID}/transactions*
 | 
Lista las transacciones del instrumento.
 |  |

## Par&aacute;metros comunes

| 
Nombre
 | 
Ubicaci&oacute;n
 | 
Tipo
 | 
Descripci&oacute;n
 |  |
| 
page 
 | 
query 
 | 
integer 
 | 
N&ordm; de p&aacute;gina (por defecto 1). 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina (por defecto 20, m&aacute;x 2 147 483 647). 
 |  |
| 
Authorization 
 | 
header 
 | 
Bearer JWT 
 | 
Token emitido por el AS registrado en la CMF. 
 |  |
| 
x-fapi-interaction-id 
 | 
header 
 | 
UUID 
 | 
ID de correlaci&oacute;n generado por el PSBI (eco en la respuesta). 
 |  |
| 
x-jws-signature 
 | 
header 
 | 
JWS 
 | 
Firma del cuerpo de la petici&oacute;n. 
 |  |

## Respuestas comunes

| 
C&oacute;digo
 | 
Significado
 |  |
| 
200 
 | 
OK &ndash; Respuesta exitosa. 
 |  |
| 
400 
 | 
Bad Request &ndash; Par&aacute;metros faltantes o mal formados. 
 |  |
| 
404 
 | 
Not Found &ndash; Recurso inexistente o fuera de consentimiento. 
 |  |
| 
405 
 | 
Method Not Allowed &ndash; M&eacute;todo HTTP no permitido. 
 |  |
| 
429 
 | 
Too Many Requests &ndash; L&iacute;mite de llamadas excedido. 
 |  |
| 
500 
 | 
Internal Server Error &ndash; Error interno del *Data Holder*. 
 |  |
| 
504 
 | 
Gateway Timeout &ndash; Tiempo de espera excedido. 
 |  |
| 
529 
 | 
Site Is Overloaded &ndash; Servicio sobrecargado. 
 |  |