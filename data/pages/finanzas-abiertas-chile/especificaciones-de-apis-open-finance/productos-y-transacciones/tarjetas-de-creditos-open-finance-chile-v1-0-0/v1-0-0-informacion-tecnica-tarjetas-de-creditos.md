---
title: "v1.0.0 - Información técnica - Tarjetas de Créditos"
id: "124486707"
version: 1
updated: "2025-12-30T14:08:37.843Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/tarjetas-de-creditos-open-finance-chile-v1-0-0/v1-0-0-informacion-tecnica-tarjetas-de-creditos"
---
# v1.0.0 - Información técnica - Tarjetas de Créditos

## Especificaci&oacute;n t&eacute;cnica &ndash; API Tarjeta de Cr&eacute;dito (OpenAPI 3.0)

Aqu&iacute; se publica el contrato completo en formato **OpenAPI 3.0** para facilitar:

- 
Generaci&oacute;n de SDKs y clientes.  

- 
Importaci&oacute;n en Postman, Insomnia o Swagger-UI.  

- 
Mocking de servicios y pruebas automatizadas.

## Archivo de referencia  

## Versionado  

- 
Versi&oacute;n mayor *1* &ndash; estable por al menos 12 meses.  

- 
Cambios retro-compatibles &rarr; versi&oacute;n menor (1.1, 1.2&hellip;).  

- 
Cambios incompatibles &rarr; nueva versi&oacute;n mayor (2.0).

## L&iacute;mites de uso referenciales  

- 
Por cliente: 60 requests/min.  

- 
Por aplicaci&oacute;n: 1 000 requests/min.  
La cabecera `X-Rate-Limit-Remaining` indica el cupo restante.