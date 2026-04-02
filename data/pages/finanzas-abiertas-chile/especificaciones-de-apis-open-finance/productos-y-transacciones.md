---
title: "Productos y transacciones"
id: "124486389"
version: 1
updated: "2025-12-30T14:08:31.858Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones"
---
# Productos y transacciones

Cuentas &ndash; Open Finance Chile v1.0.0 

Enrolamiento &ndash; Open Finance Chile v1.0.0 

Tarjetas de Cr&eacute;ditos &ndash; Open Finance Chile v1.0.0 

Operaciones de Cr&eacute;dito &ndash; Open Finance Chile v1.0.0 

Servicio de Operaci&oacute;n de Tarjetas de Pago &ndash; Open Finance Chile v1.0.0 

Recursos &ndash; Open Finance Chile v1.0.0 

Recursos &ndash; Open Finance Chile v1.0.0 

P&oacute;lizas de Seguros &ndash; Open Finance Chile v1.0.0 

Instrumentos de Inversi&oacute;n - Open Finan Chile v1.0.0 

Esta categor&iacute;a agrupa todas las APIs *read-only* que exponen los **productos financieros** del cliente y sus **transacciones** (cuentas, tarjetas, cr&eacute;ditos, inversiones, seguros, etc.).

## Alcance y actores

- 
**PSBI** &ndash; Proveedor de Servicios Basados en Informaci&oacute;n.  

- 
**PSU** &ndash; Usuario final.  

- 
**IPI (Data Holder)** &ndash; Banco o emisor que aloja los datos.

## Flujo de autorizaci&oacute;n
![Flujo API + RAR.png](../attachments/productos-y-transacciones/Flujo%20API%20%2B%20RAR.png)

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
El PSBI intercambia `code` + `code_verifier` por un Access Token. 
 |  |
| 
(8) 
 | 
Las llamadas *GET* a las APIs se realizan con `Authorization: Bearer <token>`. 
 |  |

## C&oacute;digos de error transversales

| 
HTTP
 | 
`error`
 | 
Descripci&oacute;n
 | 
Acci&oacute;n sugerida
 |  |
| 
400 
 | 
`invalid_request` 
 | 
Par&aacute;metro requerido faltante o inv&aacute;lido. 
 | 
Corrige la llamada. 
 |  |
| 
401 
 | 
`invalid_token` 
 | 
Token expirado o sin *scope*. 
 | 
Renueva el token. 
 |  |
| 
403 
 | 
`consent_revoked` 
 | 
El cliente revoc&oacute; el consentimiento. 
 | 
Inicia nuevo flujo RAR. 
 |  |
| 
429 
 | 
`rate_limit_exceeded` 
 | 
L&iacute;mite de llamadas superado. 
 | 
Espera y reintenta. 
 |  |
| 
529 
 | 
`site_overloaded` 
 | 
Servicio temporalmente sobrecargado. 
 | 
Retry con *back-off*. 
 |  |

---

## Attachments

- 🖼️ [Flujo API + RAR.png](../attachments/productos-y-transacciones/Flujo%20API%20%2B%20RAR.png) (184 KB)
