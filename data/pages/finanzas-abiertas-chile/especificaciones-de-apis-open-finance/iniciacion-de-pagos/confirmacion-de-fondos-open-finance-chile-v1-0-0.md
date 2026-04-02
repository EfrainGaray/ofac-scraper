---
title: "Confirmación de Fondos - Open Finance Chile v1.0.0"
id: "124487632"
version: 1
updated: "2025-12-30T14:08:55.249Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/confirmacion-de-fondos-open-finance-chile-v1-0-0"
---
# Confirmación de Fondos - Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSIP* (Proveedores de Servicios de Iniciaci&oacute;n de Pagos) solicitar la **confirmaci&oacute;n de fondos **en nombre del cliente.
![Flujo de confirmaci&oacute;n de fondos.png](../attachments/confirmacion-de-fondos-open-finance-chile-v1-0-0/Flujo%20de%20confirmaci%26oacute%3Bn%20de%20fondos.png)

## Endpoints disponibles

| 
**#**
 | 
**Endpoint**
 | 
**Operaci&oacute;n**
 | 
**Descripci&oacute;n**
 |  |
| --- | --- | --- | --- | --- |
| 
1
 | 
*/*founds-confirmation
 | 
 **POST**
 | 
Crea una orden de confirmaci&oacute;n de fondos.
 |  |
| 
2
 | 
*/*founds-confirmation*/{paymentID}* 
 | 
**GET**
 | 
Consulta el estado y los datos de la orden de confirmaci&oacute;n de fondos.
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
ID de correlaci&oacute;n generado por el PSIP (*eco* en la respuesta). 
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
201 
 | 
Created &ndash; Orden de pago registrada. 
 |  |
| 
200 
 | 
OK &ndash; Consulta exitosa. 
 |  |
| 
400 
 | 
Bad Request &ndash; Par&aacute;metros faltantes o mal formados. 
 |  |
| 
404 
 | 
Not Found &ndash; paymentID inexistente o fuera del consentimiento. 
 |  |
| 
405 
 | 
Method Not Allowed &ndash; Verbo HTTP no permitido. 
 |  |
| 
429 
 | 
Too Many Requests &ndash; Se super&oacute; el l&iacute;mite de llamadas. 
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