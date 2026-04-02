---
title: "Términos y condiciones generales"
id: "124486034"
version: 1
updated: "2025-12-30T14:08:26.628Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/open-data/terminos-y-condiciones-generales"
---
# Términos y condiciones generales

## Prop&oacute;sito

Expone, como *open data*, los **productos y servicios financieros** que ofrece la entidad, junto con sus principales condiciones comerciales, para que los consumidores puedan compararlos f&aacute;cilmente.

### Endpoints Disponibles

| 
#
 | 
Endpoint
 | 
Funcionalidad principal
 |  |
| --- | --- | --- | --- |
| 
1
 | 
/opendata-accounts
 | 
Informaci&oacute;n de condiciones de todos los productos relacionados a cuentas de administraci&oacute;n de efectivo y ahorro
 |  |
| 
2
 | 
/opendata-credit-cards
 | 
Informaci&oacute;n de condiciones de los productos tarjetas de cr&eacute;dito
 |  |
| 
3
 | 
/opendata-credit-operations
 | 
Informaci&oacute;n de condiciones de todos los productos de cr&eacute;dito que ofrece la instituci&oacute;n
 |  |
| 
4
 | 
/opendata-insurance-polices
 | 
Informaci&oacute;n de condiciones de todos los productos de seguros que ofrece la instituci&oacute;n
 |  |
| 
5
 | 
/opendata-saving-instruments
 | 
Informaci&oacute;n de condiciones de todos los productos de administraci&oacute;n de ahorro que ofrece la instituci&oacute;n
 |  |
| 
6
 | 
/opendata-investment-instruments
 | 
Informaci&oacute;n de condiciones de todos los productos de inversiones que ofrece la instituci&oacute;n
 |  |
| 
7
 | 
/opendata-card-operation-services
 | 
Informaci&oacute;n de condiciones de los servicios de operaci&oacute;n de tarjetas de pago y actividades complementarias.
 |  |
| 
8
 | 
/opendata-financial-service-providers
 | 
Informaci&oacute;n de condiciones de todos los productos y servicios ofrecidos por Prestadores de Servicios Financieros.
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
N&uacute;mero de p&aacute;gina 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina  
 |  |

### Respuestas

| 
C&oacute;digo
 | 
Significado
 |  |
| 
200 
 | 
OK &ndash; Lista devuelta correctamente. 
 |  |
| 
400 
 | 
Bad Request &ndash; Par&aacute;metros faltantes o mal formados. 
 |  |
| 
404 
 | 
Not Found &ndash; Recurso inexistente. 
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
Site Is Overloaded &ndash; Servicio temporalmente sobrecargado. 
 |  |

## Audiencia objetivo

- 
Terceros registrados como **PSBI / PSIP** ante la CMF.

- 
Entidades financieras que act&uacute;en **Data Holders**.

- 
Desarrolladores de integraciones de canales digitales.