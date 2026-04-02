---
title: "Histórico-Operaciones de Crédito – Open Finance Chile v1.0.0"
id: "124488601"
version: 1
updated: "2025-12-30T14:18:46.233Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-productos-y-transacciones/historico-operaciones-de-credito-open-finance-chile-v1-0-0"
---
# Histórico-Operaciones de Crédito – Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSBI* obtener, con consentimiento v&aacute;lido, la **informaci&oacute;n de los pr&eacute;stamos y cr&eacute;ditos** que mantiene el cliente en la instituci&oacute;n financiera: datos generales, saldos, movimientos y estado corriente de cada operaci&oacute;n.

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
*/loans*
 | 
Lista todas las operaciones de cr&eacute;dito del cliente.
 |  |
| 
2
 | 
*/loans/{loanID}*
 | 
Lista todas las operaciones de cr&eacute;dito del cliente.
 |  |
| 
3
 | 
*/loans/{loanID}/balance*
 | 
Devuelve el detalle completo de una operaci&oacute;n de cr&eacute;dito.
 |  |
| 
4
 | 
*/loans/{loanID}/current-transactions*
 | 
Devuelve los movimientos recientes (abonos, cargos, intereses) de la operaci&oacute;n.
 |  |

## Patrones Comunes

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
Registros por p&aacute;gina (por defecto 25; m&aacute;x 1 000). 
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
ID de correlaci&oacute;n generado por el PSBI; eco en la respuesta. 
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
 | 
Uso t&iacute;pico
 |  |
| 
200 
 | 
OK 
 | 
Petici&oacute;n procesada exitosamente. 
 |  |
| 
400 
 | 
Bad Request 
 | 
Par&aacute;metros faltantes o con formato inv&aacute;lido. 
 |  |
| 
401 
 | 
Unauthorized 
 | 
Token expirado/falta de scope o firma JWS inv&aacute;lida. 
 |  |
| 
404 
 | 
Not Found 
 | 
Recurso inexistente o fuera del consentimiento. 
 |  |
| 
429 
 | 
Too Many Requests 
 | 
L&iacute;mite de llamadas excedido. 
 |  |
| 
5xx 
 | 
Server Error 
 | 
Error interno del *Data Holder*. 
 |  |