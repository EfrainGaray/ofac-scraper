---
title: "Cuentas – Open Finance Chile v1.0.0"
id: "124486427"
version: 1
updated: "2025-12-30T14:08:32.370Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/cuentas-open-finance-chile-v1-0-0"
---
# Cuentas – Open Finance Chile v1.0.0

## Prop&oacute;sito

Esta API permite a los Proveedores de Servicios Basados en Informaci&oacute;n (PSBI) y Proveedores de Servicios de Iniciaci&oacute;n de Pagos (PSIP) consultar, de forma segura y normalizada, los **datos de cuentas** de los clientes que hayan otorgado consentimient.

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
*/accounts* 
 | 
Lista todas las cuentas asociadas al cliente. 
 |  |
| 
2 
 | 
*/accounts/{accountID}* 
 | 
Devuelve los datos detallados de una cuenta espec&iacute;fica. 
 |  |
| 
3 
 | 
*/accounts/{accountID}/balance* 
 | 
Entrega saldos actuales de la cuenta. 
 |  |
| 
4 
 | 
*/accounts/{accountID}/current-overdraft-limit* 
 | 
Informa los l&iacute;mites de sobregiro vigentes. 
 |  |
| 
5 
 | 
*/accounts/{accountID}/overdraft* 
 | 
Muestra los movimientos de sobregiro. 
 |  |
| 
6 
 | 
*/accounts/{accountID}/transactions* 
 | 
Devuelve las transacciones de la cuenta. 
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
N&uacute;mero de p&aacute;gina (por defecto 1). 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina (por defecto 25, m&aacute;x 1000). 
 |  |
| 
x-fapi-interaction-id 
 | 
header 
 | 
string (UUID) 
 | 
ID de correlaci&oacute;n generado por el  PSBI/PSIP. 
 |  |
| 
x-jws-signature 
 | 
header 
 | 
string 
 | 
Firma JWS del cuerpo de la petici&oacute;n. 
 |  |

### Respuestas

| 
C&oacute;digo
 | 
Significado
 | 
Esquema
 |  |
| 
200 
 | 
OK 
 | 
*AccountsResponse* 
 |  |
| 
400 
 | 
Petici&oacute;n inv&aacute;lida 
 | 
*Error* 
 |  |
| 
401 
 | 
No autorizado / token inv&aacute;lido 
 | 
*Error* 
 |  |
| 
404 
 | 
Recurso no encontrado 
 | 
*Error* 
 |  |
| 
429 
 | 
L&iacute;mite de tasa excedido 
 | 
*Error* 
 |  |
| 
5xx 
 | 
Error interno o timeout 
 | 
*Error* 
 |  |

## Audiencia objetivo

- 
Terceros registrados como **PSBI / PSIP** ante la CMF.  

- 
Entidades financieras que act&uacute;en **IPI/PSBI** **Data Holders**.  

- 
Desarrolladores de integraciones de canales digitales.