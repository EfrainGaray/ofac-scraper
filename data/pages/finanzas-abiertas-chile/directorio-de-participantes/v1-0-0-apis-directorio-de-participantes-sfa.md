---
title: "v1.0.0 - APIs Directorio de Participantes SFA"
id: "123437476"
version: 1
updated: "2026-04-01T13:46:04.498Z"
path: "finanzas-abiertas-chile/directorio-de-participantes/v1-0-0-apis-directorio-de-participantes-sfa"
---
# v1.0.0 - APIs Directorio de Participantes SFA

## Descripci&oacute;n general

Las APIs p&uacute;blicas del Directorio permiten consultar informaci&oacute;n estructurada sobre los participantes del Sistema de Finanzas Abiertas, sus organizaciones, servidores de autorizaci&oacute;n y recursos API asociados. Estas interfaces facilitan la sincronizaci&oacute;n de datos entre los participantes (PSBI, PSIP, IPI, IPC) y el ecosistema regulado.

Dominio base: [https://directorio-qa.finanzasabiertas.cl/v1/](https://directorio.dev.finanzasabiertas.cl/v1/)

## Especificaciones de Endpoints

## GET /participants

### **Descripci&oacute;n**

Entrega el listado de participantes activos del SFA con datos institucionales y, cuando aplique, sus servidores de autorizaci&oacute;n y recursos API. Es la fuente de descubrimiento para integradores y monitoreo del ecosistema.

### **Flujo de secuencia**
![Untitled diagram-2025-10-30-183336-20251030-183337.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-10-30-183336-20251030-183337.png)
### **Especificaciones**
![Untitled diagram-2025-11-05-195746-20251105-195747.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-195746-20251105-195747.png)

### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## HEAD /participants

### **Descripci&oacute;n**

Permite verificar si hubo cambios en el Directorio sin descargar el contenido completo. Devuelve encabezados con metadatos de versi&oacute;n, checksum y &uacute;ltima actualizaci&oacute;n.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-200531-20251105-200533.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-200531-20251105-200533.png)
### **Especificaciones**
![Untitled diagram-2025-11-05-204459-20251105-204500.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-204459-20251105-204500.png)

### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## GET /.well-known/openid-configuration

### **Descripci&oacute;n**

Expone los metadatos de configuraci&oacute;n OIDC del Directorio. Permite el auto-descubrimiento de endpoints y m&eacute;todos soportados por el Authorization Server.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-205055-20251105-205056.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-205055-20251105-205056.png)
### **Especificaciones**
![image-20251105-210643.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-210643.png)

### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## GET /organisations

### **Descripci&oacute;n**

Devuelve el listado de organizaciones registradas en el Directorio CMF. Incluye metadatos b&aacute;sicos como identificador, nombre, pa&iacute;s y estado.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-211306-20251105-211307.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-211306-20251105-211307.png)
### **Especificaciones**
![image-20251105-211402.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-211402.png)
### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## GET /organisations/{OrganisationId}

### **Descripci&oacute;n**

Devuelve el detalle institucional de una organizaci&oacute;n espec&iacute;fica por su identificador. Es el paso previo para descubrir sus servidores de autorizaci&oacute;n y recursos API.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-212153-20251105-212154.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-212153-20251105-212154.png)
### **Especificaciones**
![image-20251105-212258.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-212258.png)
### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## **GET /organisations/{OrganisationId}/authorisationservers**

### **Descripci&oacute;n**

Lista los servidores de autorizaci&oacute;n (AS) declarados por la organizaci&oacute;n. Permite validar capacidades como DCR y CIBA, y descubrir endpoints de issuer y metadatos OIDC.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-212732-20251105-212733.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-212732-20251105-212733.png)
### **Especificaciones**
![image-20251105-212831.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-212831.png)
### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## **GET /organisations/{OrganisationId}/authorisationservers/{authorisationserverid}**

### **Descripci&oacute;n**

Recupera el detalle de un servidor de autorizaci&oacute;n espec&iacute;fico de la organizaci&oacute;n. Incluye issuer, endpoints, soportes (DCR/CIBA) y URIs de descubrimiento.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-213010-20251105-213011.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-213010-20251105-213011.png)
### **Especificaciones**
![image-20251105-213117.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-213117.png)
### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## **GET /organisations/{OrganisationId}/authorisationservers/{authorisationserverid}/apiresources**

### **Descripci&oacute;n**

Devuelve la colecci&oacute;n de recursos/familias API expuestos por un AS. Incluye familia, versi&oacute;n y endpoints por recurso para discovery funcional.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-213318-20251105-213320.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-213318-20251105-213320.png)
### **Especificaciones**
![image-20251105-213416.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-213416.png)
### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## **GET /organisations/{OrganisationId}/authorisationservers/{authorisationserverid}/apiresources/{apiresourceid}**

### **Descripci&oacute;n**

Entrega el detalle de un recurso API espec&iacute;fico (familia, versi&oacute;n, endpoints y metadatos). Es el &uacute;ltimo nivel de detalle para componer integraciones y validar compatibilidad.

### **Flujo de secuencia**
![Untitled diagram-2025-11-05-213613-20251105-213614.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/Untitled%20diagram-2025-11-05-213613-20251105-213614.png)
### **Especificaciones**
![image-20251105-213700.png](../attachments/v1-0-0-apis-directorio-de-participantes-sfa/image-20251105-213700.png)
### **Ejemplo de uso**

#### **Petici&oacute;n**

#### **Respuesta**

## Ejemplo de error est&aacute;ndar

## Consideraciones de implementaci&oacute;n y seguridad

- 
Las respuestas deben incluir los encabezados: x-version, x-checksum, x-last-updated.

- 
Todas las comunicaciones deben realizarse sobre TLS 1.3 con certificados emitidos por una CA que cumpla con los requisitos definidos por la CMF.

- 
La rotaci&oacute;n de llaves debe ser cada 12 meses y sincronizaci&oacute;n autom&aacute;tica del JWKS.

- 
Los logs y trazas deben conservarse por al menos 5 a&ntilde;os.

- 
Toda firma digital debe realizarse con PS256 (RSASSA-PSS SHA-256).

- 
Est&aacute; prohibido el uso de algoritmos sim&eacute;tricos (HS256) o none.