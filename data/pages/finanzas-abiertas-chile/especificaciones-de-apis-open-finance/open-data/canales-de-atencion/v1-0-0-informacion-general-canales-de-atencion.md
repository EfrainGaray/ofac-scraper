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

```none
GET /presential-channels/v1/office-channels?page=1&pageSize=1 HTTP/1.1
Accept: application/json
```

#### Respuesta

```json
{
  "openData": {
    "brand": {
      "brandName": "Banco Uno"
    },
    "officeChannels": [
      {
        "officeId": "BRCH_001",
        "officeType": "HQ",
        "bankingSegment": "PERSONAS",
        "officeManager": "Ana Pérez",
        "servicesOffered": [
          "Apertura de cuentas",
          "Cambio de divisas"
        ]
      }
    ],
    "links": {
      "self": "https://api-chile.cl/presential-channels/v1/office-channels?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-15T09:00:00Z",
      "lastAvailableDateTime": "2025-12-31T18:00:00Z",
      "totalPages": 10
    }
  }
}
```

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

```none
GET /presential-channels/v1/atm-channels?page=1&pageSize=1 HTTP/1.1
Accept: application/json
```

#### Respuesta

```none
{
    "openData": {
      "brand": {
        "brandName": "Banco Uno"
      },
      "presentialChannels": [
        {
          "channelId": "CHN_001",
          "channelType": "ATM",
          "contactNumber": "+56 2 12345678",
          "additionalInfo": "Cajero automático habilitado 24/7"
        }
      ],
      "atmChannels": [
        {
          "atmId": "ATM_CH_001",
          "currency": "CLP",
          "servicesAvailable": [
            "Depósitos",
            "Giros"
          ],
          "minimumPossibleAmount": 10000
        }
      ],
      "links": {
        "self": "https://api-chile.cl/presential-channels/v1/atm-channels?page=1&pageSize=1"
      },
      "meta": {
        "firstAvailableDateTime": "2025-01-15T09:00:00Z",
        "lastAvailableDateTime": "2025-12-31T18:00:00Z",
        "totalPages": 5
      }
    }
  }
  
```

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

```none
GET /digital-channels/v1/sms-channels?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "openData": {
      "brand": {
        "brandName": "Banco Ejemplo"
      },
      "digitalChannels": [
        {
          "channelId": "CHN_SMS_001",
          "channelType": "SMS",
          "segmentType": "PERSONAS",
          "additionalInfo": "Servicio de notificaciones vía SMS",
          "smsChannels": [
            {
              "smsId": "SMS_CH_001",
              "smsNumber": "+56 9 87654321"
            }
          ]
        }
      ],
      "links": {
        "self": "https://api-chile.cl/digital-channels/v1/sms-channels?page=1&pageSize=1"
      },
      "meta": {
        "firstAvailableDateTime": "2025-01-05T08:00:00Z",
        "lastAvailableDateTime": "2025-12-31T18:00:00Z",
        "totalPages": 3
      }
    }
  }
```

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

```none
GET /digital-channels/v1/web-app-channels?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "openData": {
      "brand": {
        "brandName": "Banco Ejemplo"
      },
      "digitalChannels": [
        {
          "channelId": "CHN_WEB_001",
          "channelType": "WEB_APP",
          "segmentType": "PERSONAS",
          "additionalInfo": "Portal web principal para clientes",
          "webAppChannels": [
            {
              "webAppId": "WEB_CH_001",
              "url": "https://www.bancoejemplo.cl",
              "applicationPlatform": "Online Banking"
            }
          ]
        }
      ],
      "links": {
        "self": "https://api-chile.cl/digital-channels/v1/web-app-channels?page=1&pageSize=1"
      },
      "meta": {
        "firstAvailableDateTime": "2025-01-01T08:00:00Z",
        "lastAvailableDateTime": "2025-12-31T18:00:00Z",
        "totalPages": 5
      }
    }
  }
```

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

```none
GET /digital-channels/v1/phone-channels?page=1&pageSize=1
Accept: application/json
Authorization: Bearer Se debe especificar el access token obtenido desde el servidor de autenticación.
```

#### Respuesta

```none
{
    "openData": {
      "brand": {
        "brandName": "Banco Ejemplo"
      },
      "digitalChannels": [
        {
          "channelId": "CHN_PHONE_001",
          "channelType": "PHONE",
          "segmentType": "PERSONAS",
          "additionalInfo": "Línea principal para atención telefónica",
          "phoneChannels": [
            {
              "phoneId": "PHN_001",
              "phoneNumber": "+56 2 12345678"
            }
          ]
        }
      ],
      "links": {
        "self": "https://api-chile.cl/digital-channels/v1/phone-channels?page=1&pageSize=1"
      },
      "meta": {
        "firstAvailableDateTime": "2025-01-15T08:00:00Z",
        "lastAvailableDateTime": "2025-12-31T18:00:00Z",
        "totalPages": 10
      }
    }
  }
```

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

```none
GET /digital-channels/v1/email-channels?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "openData": {
      "brand": {
        "brandName": "Banco Ejemplo"
      },
      "digitalChannels": [
        {
          "channelId": "CHN_EMAIL_001",
          "channelType": "EMAIL",
          "segmentType": "PERSONAS",
          "additionalInfo": "Canal de soporte al cliente vía correo electrónico",
          "emailChannels": [
            {
              "emailId": "EML_001",
              "emailAddress": "contacto@bancoejemplo.cl"
            }
          ]
        }
      ],
      "links": {
        "self": "https://api.sfa-chile.cl/digital-channels/v1/email-channels?page=1&pageSize=1"
      },
      "meta": {
        "firstAvailableDateTime": "2025-01-01T08:00:00Z",
        "lastAvailableDateTime": "2025-12-31T18:00:00Z",
        "totalPages": 5
      }
    }
  }
```

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

```none
GET /digital-channels/v1/social-media-channel?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none

{
    "openData": {
      "brand": {
        "brandName": "Banco Ejemplo"
      },
      "digitalChannels": [
        {
          "channelId": "CHN_SM_001",
          "channelType": "SOCIAL_MEDIA",
          "segmentType": "PERSONAS",
          "additionalInfo": "Canal de atención vía redes sociales",
          "socialMediaChannels": [
            {
              "platform": "Instagram",
              "URL": "https://www.instagram.com/BancoEjemplo",
              "handle": "@BancoEjemplo",
              "methodContact": ["DM", "Commentarios"]
            }
          ]
        }
      ],
      "links": {
        "self": "https://api-chile.cl/digital-channels/v1/social-media-channel?page=1&pageSize=1"
      },
      "meta": {
        "firstAvailableDateTime": "2025-01-01T09:00:00Z",
        "lastAvailableDateTime": "2025-12-31T17:00:00Z",
        "totalPages": 5
      }
    }
  }
```

---

## Attachments

- 📊 [OpenData-Social-Media-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Social-Media-Channels-v1.0.xlsx) (29 KB)
- 📊 [OpenData-Office-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Office-Channels-v1.0.xlsx) (31 KB)
- 📊 [OpenData-Email-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Email-Channels-v1.0.xlsx) (29 KB)
- 📊 [OpenData-Web-App-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Web-App-Channels-v1.0.xlsx) (29 KB)
- 📊 [OpenData-Phone-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Phone-Channels-v1.0.xlsx) (29 KB)
- 📊 [OpenData-Sms-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Sms-Channels-v1.0.xlsx) (29 KB)
- 📊 [OpenData-Atm-Channels-v1.0.xlsx](../attachments/v1-0-0-informacion-general-canales-de-atencion/OpenData-Atm-Channels-v1.0.xlsx) (29 KB)
- 🖼️ [UML Diagram - Social Media Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Social%20Media%20Channels.png) (51 KB)
- 🖼️ [UML Diagram - Email Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Email%20Channels.png) (49 KB)
- 🖼️ [UML Diagram - Phone Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Phone%20Channels.png) (49 KB)
- 🖼️ [UML Diagram - Sms Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Sms%20Channels.png) (49 KB)
- 🖼️ [UML Diagram - Web App Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Web%20App%20Channels.png) (51 KB)
- 🖼️ [UML Diagram - ATM Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20ATM%20Channels.png) (72 KB)
- 🖼️ [UML Diagram - Office Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/UML%20Diagram%20-%20Office%20Channels.png) (85 KB)
- 🖼️ [(200) - Sequence Diagram - Office-Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Office-Channels.png) (16 KB)
- 🖼️ [(200) - Sequence Diagram - Atm.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Atm.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Sms.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Sms.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Web App Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Web%20App%20Channels.png) (18 KB)
- 🖼️ [(200) - Sequence Diagram - Phone Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Phone%20Channels.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Email Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Email%20Channels.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Social Media Channels.png](../attachments/v1-0-0-informacion-general-canales-de-atencion/(200)%20-%20Sequence%20Diagram%20-%20Social%20Media%20Channels.png) (17 KB)
