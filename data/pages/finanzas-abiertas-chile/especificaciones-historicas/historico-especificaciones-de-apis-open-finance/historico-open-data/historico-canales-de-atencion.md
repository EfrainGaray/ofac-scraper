---
title: "Histórico-Canales de Atención"
id: "124487889"
version: 1
updated: "2025-12-30T14:18:34.910Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-apis-open-finance/historico-open-data/historico-canales-de-atencion"
---
# Histórico-Canales de Atención

# Canales Presenciales &ndash; Open Finance Chile v1.0.0

## Prop&oacute;sito

Publica, como datos abiertos, los **canales presenciales de atenci&oacute;n** de la entidad (oficinas y cajeros autom&aacute;ticos).

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
 /office-channels
 | 
Lista las oficinas presenciales (sucursales, centros de servicio).
 |  |
| 
2
 | 
/atm-channels
 | 
 Lista los cajeros autom&aacute;ticos disponibles. 
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
N&uacute;mero de p&aacute;gina (defecto 1). 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina (defecto 20). 
 |  |
| 
city 
 | 
query 
 | 
string 
 | 
Filtra por ciudad (opcional). 
 |  |
| 
townName 
 | 
query 
 | 
string 
 | 
Filtra por comuna (opcional). 
 |  |
| 
countrySubDivision 
 | 
query 
 | 
string 
 | 
Filtra por regi&oacute;n (opcional). 
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
OK &ndash; Lista devuelta. 
 |  |
| 
400 
 | 
Bad Request. 
 |  |
| 
404 
 | 
Not Found. 
 |  |
| 
405 
 | 
Method Not Allowed. 
 |  |
| 
429 
 | 
Too Many Requests. 
 |  |
| 
500 
 | 
Internal Server Error. 
 |  |
| 
504 
 | 
Gateway Timeout. 
 |  |
| 
529 
 | 
Site Is Overloaded. 
 |  |

# Canales Digitales &ndash; Open Finance Chile v1.0.0

## Prop&oacute;sito

Publica, como datos abiertos, los distintos **canales digitales de atenci&oacute;n** que la entidad financiera pone a disposici&oacute;n de sus clientes (SMS, Web App, Tel&eacute;fono, Email y Redes Sociales).

### Endpoints Disponibles

| 
#
 | 
Endpoint
 | 
Funcionalidad principal
 |  |
| 
1
 | 
 /sms-channels
 | 
Lista los n&uacute;meros de contacto que permiten comunicaci&oacute;n mediante SMS.
 |  |
| 
2
 | 
/web-app-channels
 | 
Lista los sitios web y apps disponibles como canal digital.
 |  |
| 
3
 | 
phone-channels
 | 
 Lista los n&uacute;meros telef&oacute;nicos de atenci&oacute;n.
 |  |
| 
4
 | 
/email-channels
 | 
I Lista las direcciones de correo electr&oacute;nico de atenci&oacute;n. 
 |  |
| 
5
 | 
/social-media-channels
 | 
Lista las cuentas en redes sociales de la entidad.
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
N&uacute;mero de p&aacute;gina (defecto 1). 
 |  |
| 
pageSize 
 | 
query 
 | 
integer 
 | 
Registros por p&aacute;gina (defecto 20, m&aacute;x 1000). 
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
OK &ndash; Lista de canales devuelta. 
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
Too Many Requests &ndash; L&iacute;mite de llamadas excedido. 
 |  |
| 
500 
 | 
Internal Server Error. 
 |  |
| 
504 
 | 
Gateway Timeout. 
 |  |
| 
529 
 | 
Site Is Overloaded. 
 |  |