---
title: "Pago Recurrente con Monto Variable - Open Finance Chile v1.0.0"
id: "124487522"
version: 1
updated: "2025-12-30T14:08:53.334Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-recurrente-con-monto-variable-open-finance-chile-v1-0-0"
---
# Pago Recurrente con Monto Variable - Open Finance Chile v1.0.0

## Prop&oacute;sito  

Permite a los *PSIP* (Proveedores de Servicios de Iniciaci&oacute;n de Pagos) crear una **orden de pago recurrente con monto variable **en nombre del cliente y, posteriormente, consultar su estado.
![Flujo de secuencia - Pago recurrente Variable.png](../attachments/pago-recurrente-con-monto-variable-open-finance-chile-v1-0-0/Flujo%20de%20secuencia%20-%20Pago%20recurrente%20Variable.png)

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
*/*variable-recurring-payments
 | 
 **POST**
 | 
Crea una orden de pago recurrente con monto variable (iniciaci&oacute;n).
 |  |
| 
2
 | 
*/*variable-recurring-payments*/{paymentID}* 
 | 
**GET**
 | 
Consulta el estado y los datos de la orden de pago recurrente con monto variable.
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
El consentimiento tendr&aacute; una duraci&oacute;n m&aacute;xima de 3 a&ntilde;os.

- 
El doble factor de seguridad se aplicar&aacute; &uacute;nicamente durante el proceso de generaci&oacute;n del token de consentimiento. Una vez obtenido el consentimiento, no ser&aacute; necesario aplicar factores de seguridad adicionales al momento de ejecutar las &oacute;rdenes de pago.