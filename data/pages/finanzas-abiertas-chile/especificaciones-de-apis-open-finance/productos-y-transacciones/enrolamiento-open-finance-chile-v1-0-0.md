---
title: "Enrolamiento – Open Finance Chile v1.0.0"
id: "124486543"
version: 1
updated: "2025-12-30T14:08:34.484Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/enrolamiento-open-finance-chile-v1-0-0"
---
# Enrolamiento – Open Finance Chile v1.0.0

Permite a los *PSBI* (Proveedores de Servicios Basados en Informaci&oacute;n) acceder, con consentimiento v&aacute;lido, a los **datos de identificaci&oacute;n** del cliente (persona natural o jur&iacute;dica) mantenidos por la instituci&oacute;n financiera.

## Endpoints disponibles

| 
#
 | 
Endpoint
 | 
Descripci&oacute;n resumida
 |  |
| --- | --- | --- | --- |
| 
1
 | 
*/customer/pn*
 | 
Devuelve los datos de la persona natural asociada al consentimiento. 
 |  |
| 
2
 | 
*/customer/pj*
 | 
Devuelve los datos de la persona jur&iacute;dica asociada al consentimiento.
 |  |

## Par&aacute;metros comunes

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
Par&aacute;metros requeridos faltantes o con formato inv&aacute;lido. 
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
El recurso solicitado no existe o no corresponde al consentimiento. 
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
Par&aacute;metros requeridos faltantes o con formato inv&aacute;lido. 
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
El recurso solicitado no existe o no corresponde al consentimiento. 
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