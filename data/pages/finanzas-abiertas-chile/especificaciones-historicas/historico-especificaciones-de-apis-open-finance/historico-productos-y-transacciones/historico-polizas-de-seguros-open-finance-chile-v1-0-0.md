---
title: "Histórico-Pólizas de Seguros – Open Finance Chile v1.0.0"
id: "124488892"
version: 1
updated: "2025-12-30T14:18:50.307Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-productos-y-transacciones/historico-polizas-de-seguros-open-finance-chile-v1-0-0"
---
# Histórico-Pólizas de Seguros – Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSBI* consultar, con consentimiento v&aacute;lido, la **informaci&oacute;n de p&oacute;lizas de seguros** (datos generales y movimientos) que el cliente mantiene en la instituci&oacute;n financiera.

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
*/insurances*
 | 
 Lista todas las p&oacute;lizas de seguros del cliente.
 |  |
| 
2
 | 
*/insurances/{insuranceID}* 
 | 
Devuelve el detalle de una p&oacute;liza espec&iacute;fica.
 |  |
| 
3
 | 
*/insurances/{insuranceID}/transactions*
 | 
Lista los movimientos transaccionales de la p&oacute;liza. 
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
N&uacute;mero de p&aacute;gina (defecto 1, m&iacute;nimo 1, m&aacute;x 2 147 483 647). 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina (defecto 20, m&iacute;nimo 1, m&aacute;x 2 147 483 647). 
 |  |
| 
Authorization 
 | 
header 
 | 
string (Bearer JWT) 
 | 
Token emitido por el AS registrado ante la CMF. 
 |  |
| 
x-fapi-interaction-id 
 | 
header 
 | 
string (UUID) 
 | 
ID de correlaci&oacute;n generado por el PSBI (eco en la respuesta). 
 |  |
| 
x-jws-signature 
 | 
header 
 | 
string (JWS) 
 | 
Firma JWS del cuerpo de la petici&oacute;n. 
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
| 
default 
 | 
Error gen&eacute;rico no categorizado. 
 |  |