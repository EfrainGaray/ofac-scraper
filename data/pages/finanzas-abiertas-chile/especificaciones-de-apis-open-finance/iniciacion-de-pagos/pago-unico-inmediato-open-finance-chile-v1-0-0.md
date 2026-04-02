---
title: "Pago Único Inmediato - Open Finance Chile v1.0.0"
id: "124487212"
version: 1
updated: "2025-12-30T19:53:08.756Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-unico-inmediato-open-finance-chile-v1-0-0"
---
# Pago Único Inmediato - Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSIP* (Proveedores de Servicios de Iniciaci&oacute;n de Pagos) crear una **orden de pago &uacute;nico programado** en nombre del cliente y, posteriormente, consultar su estado.
![Diagrama de secuencia Pago &uacute;nico Inmediato.png](../attachments/pago-unico-inmediato-open-finance-chile-v1-0-0/Diagrama%20de%20secuencia%20Pago%20%26uacute%3Bnico%20Inmediato.png)

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
*/single-payments*
 | 
 **POST**
 | 
Crea una orden de pago (iniciaci&oacute;n).
 |  |
| 
2
 | 
*/single-payments/{paymentID}* 
 | 
**GET**
 | 
Consulta el estado y los datos de la orden de pago.
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
| 
x-idempotency-key 
 | 
header 
 | 
string 
 | 
**Solo POST**. Clave &uacute;nica para evitar duplicados en reintentos. 
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

---

## Attachments

- 🖼️ [Diagrama de secuencia Pago único Inmediato.png](../attachments/pago-unico-inmediato-open-finance-chile-v1-0-0/Diagrama%20de%20secuencia%20Pago%20%C3%BAnico%20Inmediato.png) (306 KB)
- 🖼️ [Flujo de secuencia - Pago programado.png](../attachments/pago-unico-inmediato-open-finance-chile-v1-0-0/Flujo%20de%20secuencia%20-%20Pago%20programado.png) (164 KB)
