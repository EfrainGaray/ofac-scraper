---
title: "Histórico-Iniciación de pagos"
id: "124489094"
version: 1
updated: "2025-12-30T14:18:53.505Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-iniciacion-de-pagos"
---
# Histórico-Iniciación de pagos

Esta categor&iacute;a cubre la **creaci&oacute;n y monitoreo de &oacute;rdenes de pago** que un **PSIP** ejecuta en nombre del cliente (PSU).

## Alcance y actores

- 
**PSIP** &ndash; Proveedor de Servicios de Iniciaci&oacute;n de Pagos.  

- 
**PSU** &ndash; Usuario final que autoriza el pago.  

- 
**Data Holder** &ndash; Banco que ejecuta la transferencia.

## Flujo de autorizaci&oacute;n + pago

![Diagrama de secuencia Iniciaci&oacute;n de pagos.png](../attachments/historico-iniciacion-de-pagos/Diagrama%20de%20secuencia%20Iniciaci%26oacute%3Bn%20de%20pagos.png)
| 
Paso
 | 
Descripci&oacute;n
 |  |
| --- | --- | --- |
| 
(1) 
 | 
El PSBI genera `code_verifier` y `code_challenge` (PKCE). 
 |  |
| 
(2) 
 | 
Obtiene un *client_credentials* token para llamar a **/par**. 
 |  |
| 
(3) 
 | 
`POST /par` con una RAR (`type":"Customers_access"`, `permissions":["Read"]&hellip;). Recibe `request_uri`. 
 |  |
| 
(4) 
 | 
Redirecciona al PSU a `/authorize?request_uri=&hellip;`. 
 |  |
| 
(5) 
 | 
El PSU se autentica (SCA) y autoriza los permisos solicitados. 
 |  |
| 
(6) 
 | 
El AS redirige al PSBI con `code`. 
 |  |
| 
(7) 
 | 
 **POST /payments** con Access Token y `x-idempotency-key` &rarr; recibe `paymentId`, `status:PENDING`.
 |  |
| 
(8) 
 | 
**GET /payments/{paymentId}** para conocer el estado: `COMPLETED`, `REJECTED`, `REFUNDED`, etc.
 |  |

## Cabeceras obligatorias

- 
`Authorization: Bearer <access_token>`  

- 
`x-fapi-interaction-id: <uuid>`  

- 
`x-jws-signature: <JWS>` (si aplica)  

- 
`x-idempotency-key: <uuid>` (**solo POST /payments**)

## Buenas pr&aacute;cticas adicionales

- 
El mismo `x-idempotency-key` debe reutilizarse en reintentos &rArr; evita pagos duplicados.  

- 
Configura un *job* que re-pregunte el estado cada 30 s hasta `COMPLETED` o `REJECTED` (timeout = 5 min).  

- 
Algunos Data Holders ofrecen webhook opcional `/payments/notifications`; suscr&iacute;bete si existe.  

- 
Maneja `code_expired` (el PSU no complet&oacute; SCA en &le; 10 min): re-inicia el flujo PAR/RAR.

## Estados de la orden

| 
`status`
 | 
Significado
 | 
Acci&oacute;n recomendada
 |  |
| 
`PENDING` 
 | 
El PSU a&uacute;n no confirma o el banco est&aacute; procesando. 
 | 
Seguir consultando. 
 |  |
| 
`COMPLETED` 
 | 
Pago liquidado con &eacute;xito. 
 | 
Confirmar al comerciante/usuario. 
 |  |
| 
`REJECTED` 
 | 
El PSU cancel&oacute; o hubo error de fondos. 
 | 
Mostrar mensaje y permitir reintento. 
 |  |