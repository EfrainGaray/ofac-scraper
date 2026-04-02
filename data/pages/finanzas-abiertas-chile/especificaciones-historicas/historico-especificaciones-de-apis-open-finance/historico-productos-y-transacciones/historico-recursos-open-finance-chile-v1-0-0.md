---
title: "Histórico-Recursos – Open Finance Chile v1.0.0"
id: "124488805"
version: 1
updated: "2025-12-30T14:18:49.101Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-productos-y-transacciones/historico-recursos-open-finance-chile-v1-0-0"
---
# Histórico-Recursos – Open Finance Chile v1.0.0

Permite a los *PSBI* consultar, con consentimiento v&aacute;lido, la **lista de recursos** (p. ej. activos, garant&iacute;as, bienes) que el cliente mantiene en las instituciones financieras participantes.

| 
**#**
 | 
Endpoint
 | 
Descripci&oacute;n resumida
 |  |
| --- | --- | --- | --- |
| 
1
 | 
*/resources*
 | 
Lista todos los recursos mantenidos por el cliente en la instituci&oacute;n.
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
N&uacute;mero de p&aacute;gina (por defecto 1, m&iacute;nimo 1, m&aacute;ximo 2147483647).
 |  |
| 
pageSize
 | 
query
 | 
integer
 | 
Registros por p&aacute;gina (por defecto 20, m&iacute;nimo 1, m&aacute;ximo 2147483647).
 |  |
| 
Authorization
 | 
header
 | 
Bearer JWT
 | 
Token emitido por el AS registrado ante la CMF.
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
OK &ndash; Respuesta exitosa con la lista de recursos.
 |  |
| 
400
 | 
Bad Request &ndash; Par&aacute;metros faltantes o mal formados.
 |  |
| 
404
 | 
Not Found &ndash; Recurso inexistente o fuera del consentimiento.
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
Site Is Overloaded &ndash; Servicio temporalmente sobrecargado.
 |  |
| 
default
 | 
Error gen&eacute;rico no categorizado.
 |  |