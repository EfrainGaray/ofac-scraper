---
title: "Histórico-Productos y transacciones"
id: "124488210"
version: 1
updated: "2025-12-30T14:18:39.625Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-productos-y-transacciones"
---
# Histórico-Productos y transacciones

Esta categor&iacute;a agrupa todas las APIs *read-only* que exponen los **productos financieros** del cliente y sus **transacciones** (cuentas, tarjetas, cr&eacute;ditos, inversiones, seguros, etc.).

## Alcance y actores

- 
**PSBI** &ndash; Proveedor de Servicios Basados en Informaci&oacute;n.  

- 
**PSU** &ndash; Usuario final.  

- 
**IPI (Data Holder)** &ndash; Banco o emisor que aloja los datos.

## Flujo de autorizaci&oacute;n
![1000201596.png](../attachments/historico-productos-y-transacciones/1000201596.png)

| 
Paso
 | 
Descripci&oacute;n
 |  |
| --- | --- | --- |
| 
(1) 
 | 
El **PSBI** genera un code_verifier y calcula el code_challenge (PKCE m&eacute;todo S256).
 |  |
| 
(2) 
 | 
POST /par (mTLS) con:&bull; response_type=code, client_id, redirect_uri&bull; code_challenge + code_challenge_method=S256&bull; authorization_details (RAR)&bull; state, nonce, &hellip;&rarr; El **AS** devuelve request_uri.
 |  |
| 
(3) 
 | 
`El navegador redirige al AS:GET /authorize?client_id=&hellip;&request_uri=&hellip;` 
 |  |
| 
(4) 
 | 
El **PSU** se autentica (SCA) y concede el consentimiento solicitado.
 |  |
| 
(5) 
 | 
El **AS** responde con:302 redirect_uri?code=&hellip;&state=&hellip;&iss=&hellip;(el code es v&aacute;lido &le; 60 s).
 |  |
| 
(6) 
 | 
El **PSBI** hace POST /token (mTLS) con:grant_type=authorization_code, code, redirect_uri, code_verifier&rarr; Recibe **Access Token** vinculado a mTLS (y opcional **Refresh Token**).
 |  |
| 
(7) 
 | 
Acceso a la API:GET /api/&hellip; sobre conexi&oacute;n mTLSAuthorization: Bearer <access_token>La API valida que el certificado coincide con cnf.x5t#S256 del token.
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