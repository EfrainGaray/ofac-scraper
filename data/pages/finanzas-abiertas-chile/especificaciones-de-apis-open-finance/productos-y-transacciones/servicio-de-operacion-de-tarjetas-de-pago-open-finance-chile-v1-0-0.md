---
title: "Servicio de Operación de Tarjetas de Pago – Open Finance Chile v1.0.0"
id: "124486817"
version: 1
updated: "2025-12-30T14:08:40.329Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/servicio-de-operacion-de-tarjetas-de-pago-open-finance-chile-v1-0-0"
---
# Servicio de Operación de Tarjetas de Pago – Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSBI* y *PSIP* consultar, con consentimiento v&aacute;lido, los **informes de pagos** generados por la instituci&oacute;n financiera: listado de reportes, detalle individual y las transacciones asociadas.

## Endpoints disponibles

| 
**#**
 | 
**Endopoint**
 | 
**Descripci&oacute;n resumida**
 |  |
| --- | --- | --- | --- |
| 
1
 | 
 */payment-reports*
 | 
Lista todos los informes de pagos disponibles para el cliente.
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
Registros por p&aacute;gina (por defecto 25; m&aacute;x 1 000). 
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
ID de correlaci&oacute;n generado por el *PSBI/PSIP*; eco en la respuesta. 
 |  |
| 
x-jws-signature 
 | 
header 
 | 
JWS 
 | 
Firma JWS (compact serialization) del cuerpo de la petici&oacute;n. 
 |  |

h2. Respuestas comunes  

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
Par&aacute;metros requeridos faltantes o mal formados. 
 |  |
| 
401 
 | 
Unauthorized 
 | 
Token expirado / sin scope o firma JWS inv&aacute;lida. 
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
Se super&oacute; el l&iacute;mite de llamadas permitido. 
 |  |
| 
5xx 
 | 
Server Error 
 | 
Error interno del *Data Holder* o indisponibilidad temporal. 
 |  |