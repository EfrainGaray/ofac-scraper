---
title: "v1.0.0 - Información general - Canales de atención"
id: "124486238"
version: 1
updated: "2025-12-30T14:08:29.527Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/open-data/canales-de-atencion/v1-0-0-informacion-general-canales-de-atencion"
---
# v1.0.0 - Información general - Canales de atención

# Canales Presenciales

## Oficinas : (GET /presential-channels/v1/office-channels)

### Descripci&oacute;n

Consulta el listado de oficinas presenciales disponibles por cada instituci&oacute;n financiera.
![(200) - Sequence Diagram - Office-Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Office-Channels.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Office Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Office%20Channels.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Cajeros Autom&aacute;ticos: (GET /presential-channels/v1/atm-channels)

Consulta el listado de cajeros autom&aacute;ticos presenciales disponibles por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Atm.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Atm.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - ATM Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20ATM%20Channels.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

# Canales Digitales

### Descripci&oacute;n

Consulta el listado de canales digitales disponibles por cada instituci&oacute;n financiera.

## SMS : (GET /digital-channels/v1/sms-channels)

Consulta el listado de n&uacute;meros de tel&eacute;fono habilitados para responder por mensajes de texto, organizados por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Sms.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Sms.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Sms Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Sms%20Channels.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Web App: (GET /digital-channels/v1/web-app-channels)

Consulta el listado de aplicaciones y p&aacute;ginas web que ofrecen canales de comunicaci&oacute;n por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Web App Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Web%20App%20Channels.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Web App Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Web%20App%20Channels.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Tel&eacute;fonos : (GET /digital-channels/v1/phone-channels)

Consulta el listado de n&uacute;meros de tel&eacute;fono disponibles como canales de comunicaci&oacute;n, organizados por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Phone Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Phone%20Channels.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Phone Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Phone%20Channels.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Emails : (GET /digital-channels/v1/email-channels)

Consulta el listado de correos electr&oacute;nicos disponibles como canales de comunicaci&oacute;n, organizados por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Email Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Email%20Channels.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Email Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Email%20Channels.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Redes Sociales : (GET /digital-channels/v1/social-media-channels)

Consulta el listado de redes sociales disponibles como canales de comunicaci&oacute;n, organizados por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Social Media Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Social%20Media%20Channels.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Social Media Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Social%20Media%20Channels.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta