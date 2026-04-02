---
title: "Tarjetas de Créditos – Open Finance Chile v1.0.0"
id: "124486619"
version: 1
updated: "2025-12-30T14:08:36.197Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/tarjetas-de-creditos-open-finance-chile-v1-0-0"
---
# Tarjetas de Créditos – Open Finance Chile v1.0.0

Permite a los *PSBI* (y, cuando corresponda, a los *PSIP*) acceder &ndash;con consentimiento v&aacute;lido&ndash; a la **informaci&oacute;n de cuentas de tarjeta de cr&eacute;dito**, incluidos l&iacute;mites, saldos y transacciones.

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
*/accounts*
 | 
Lista todas las cuentas de tarjeta de cr&eacute;dito del cliente.
 |  |
| 
2
 | 
*/accounts/{creditCardAccountID}* 
 | 
Devuelve el detalle de una cuenta espec&iacute;fica.
 |  |
| 
3
 | 
*/accounts/{creditCardAccountID}/balance*
 | 
Entrega el balance de cierre (estado de cuenta).
 |  |
| 
4
 | 
*/accounts/{creditCardAccountID}/current-balance*
 | 
Saldo actualizado a la fecha/hora actual.
 |  |
| 
5
 | 
 */accounts/{creditCardAccountID}/limit*
 | 
Muestra los l&iacute;mites de cr&eacute;dito aprobados y disponibles.
 |  |
| 
6
 | 
*/accounts/{creditCardAccountID}/transactions*
 | 
Devuelve las transacciones de la tarjeta.
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
N&uacute;mero de p&aacute;gina (por defecto 1). 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina (por defecto 25, m&aacute;x. 1 000). 
 |  |
| 
Authorization 
 | 
header 
 | 
string (Bearer JWT) 
 | 
Token de acceso emitido por el AS registrado ante la CMF. 
 |  |
| 
x-fapi-interaction-id 
 | 
header 
 | 
string (UUID) 
 | 
ID de correlaci&oacute;n generado por el PSBI/PSIP. Se devuelve eco en la respuesta. 
 |  |
| 
x-jws-signature 
 | 
header 
 | 
string (JWS) 
 | 
Firma JWS del cuerpo de la petici&oacute;n (compact serialization). 
 |  |

## Respuestas comunes  

| 
C&oacute;digo
 | 
Significado
 | 
Uso t&iacute;pico
 |  |
| 
200 
 | 
OK 
 | 
La petici&oacute;n se proces&oacute; correctamente. 
 |  |
| 
400 
 | 
Bad Request 
 | 
Par&aacute;metros requeridos faltantes o mal formados. 
 |  |
| 
401 
 | 
Unauthorized 
 | 
Token expirado, sin *scope* adecuado o firma JWS inv&aacute;lida. 
 |  |
| 
404 
 | 
Not Found 
 | 
El recurso solicitado no existe o no pertenece al consentimiento. 
 |  |
| 
429 
 | 
Too Many Requests 
 | 
Se super&oacute; el l&iacute;mite de llamadas permitido. 
 |  |
| 
5xx 
 | 
Server Error 
 | 
Error interno del Data Holder o problemas temporales de la API. 
 |  |