---
title: "Pago Programado - Open Finance Chile v1.0.0"
id: "124487307"
version: 1
updated: "2025-12-30T14:08:48.831Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-programado-open-finance-chile-v1-0-0"
---
# Pago Programado - Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSIP* (Proveedores de Servicios de Iniciaci&oacute;n de Pagos) crear una **orden de pago programada** en nombre del cliente y, posteriormente, consultar su estado.

![Flujo de secuencia - Pago programado.png](../attachments/pago-programado-open-finance-chile-v1-0-0/Flujo%20de%20secuencia%20-%20Pago%20programado.png)

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
*/*scheduled-payments
 | 
 **POST**
 | 
Crea una orden de pago programada (iniciaci&oacute;n).
 |  |
| 
2
 | 
*/*scheduled-payments*/{paymentID}* 
 | 
**GET**
 | 
Consulta el estado y los datos de la orden de pago programada.
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
**Solo POST **. Clave &uacute;nica para evitar duplicados en reintentos. 
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

## Consideraciones del Caso de uso

- 
El plazo m&aacute;ximo para programar la orden de pago ser&aacute; de 90 d&iacute;as desde el d&iacute;a siguiente de la aprobaci&oacute;n.

- 
El doble factor de seguridad se aplicar&aacute; &uacute;nicamente durante el proceso de generaci&oacute;n del token de consentimiento. Una vez obtenido el consentimiento, no ser&aacute; necesario aplicar factores de seguridad adicionales al momento de ejecutar las &oacute;rdenes de pago aprobadas.