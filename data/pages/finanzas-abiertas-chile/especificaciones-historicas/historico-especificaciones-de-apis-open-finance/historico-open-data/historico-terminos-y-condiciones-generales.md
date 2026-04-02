---
title: "Histórico-Términos y condiciones generales"
id: "124488051"
version: 1
updated: "2025-12-30T14:18:37.278Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-open-data/historico-terminos-y-condiciones-generales"
---
# Histórico-Términos y condiciones generales

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
Lista todas las cuentas asociadas al cliente.
 |  |
| 
2
 | 
/opendata-credit-cards
 | 
Devuelve los datos detallados de una cuenta espec&iacute;fica.
 |  |
| 
3
 | 
/opendata-credit-operations
 | 
Entrega saldos actuales de la cuenta.
 |  |
| 
4
 | 
/opendata-insurance-polices
 | 
Informa los l&iacute;mites de sobregiro vigentes.
 |  |
| 
5
 | 
/opendata-saving-instruments
 | 
Muestra los movimientos de sobregiro.
 |  |
| 
6
 | 
/opendata-investment-instruments
 | 
Devuelve las transacciones de la cuenta.
 |  |
| 
7
 | 
/opendata-card-operation-services
 | 
Servicios de *operaci&oacute;n de tarjetas* (avances, cuotas)
 |  |
| 
8
 | 
/opendata-financial-service-providers
 | 
*Proveedores* de servicios financieros (corredores, etc.).
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