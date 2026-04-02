---
title: "Entidad Financiera Simulada (EFS)"
id: "304906443"
version: 1
updated: "2026-04-01T16:37:06.092Z"
path: "finanzas-abiertas-chile/pruebas-pre-productivas-en-sandbox-atena/entidad-financiera-simulada-efs"
---
# Entidad Financiera Simulada (EFS)

## Introducci&oacute;n

La Entidad Financiera Simulada (EFS) corresponde a un componente t&eacute;cnico del Sandbox Tecnol&oacute;gico que emula el comportamiento de una entidad financiera participante del Sistema de Finanzas Abiertas (SFA), permitiendo la ejecuci&oacute;n controlada de pruebas de integraci&oacute;n, autenticaci&oacute;n y consumo de APIs, conforme a los est&aacute;ndares y lineamientos definidos por la CMF.

La EFS no representa a una instituci&oacute;n financiera real, sino que constituye un entorno t&eacute;cnico de referencia dispuesto para que los participantes puedan validar sus integraciones de forma segura, controlada y trazable.

En este contexto, la EFS permite:

- 
Exponer APIs conforme a las especificaciones del SFA.

- 
Implementar flujos de seguridad basados en OAuth 2.0 / OpenID Connect, de acuerdo con FAPI 2.0 Perfil Chileno.

- 
Simular datos financieros estructurados para la ejecuci&oacute;n de pruebas funcionales y t&eacute;cnicas.

- 
Facilitar pruebas repetibles, controladas y con trazabilidad de resultados y evidencias.

## Objetivo de la EFS

El objetivo de la EFS es proporcionar a los participantes del Sandbox un entorno com&uacute;n de validaci&oacute;n que permita:

- 
verificar la correcta integraci&oacute;n t&eacute;cnica con los componentes del ecosistema;

- 
ejecutar pruebas de autenticaci&oacute;n, autorizaci&oacute;n y consumo de APIs;

- 
validar el uso de certificados, credenciales, metadatos y configuraciones requeridas;

- 
probar escenarios funcionales y t&eacute;cnicos antes de una integraci&oacute;n con participantes reales;

- 
registrar resultados y evidencias de manera homog&eacute;nea y trazable.

## APIs Disponibles 

La EFS expone un conjunto de APIs habilitadas para pruebas dentro del Sandbox, organizadas por dominio funcional y seg&uacute;n el alcance definido para cada etapa o batch de ejecuci&oacute;n.

El cat&aacute;logo resumido de APIs disponibles se presenta por dominio, pudiendo considerar, entre otros, los siguientes grupos:

### Open Data

APIs orientadas a la consulta de informaci&oacute;n p&uacute;blica de productos y servicios, conforme al alcance definido para el entorno de pruebas.

### Productos y Servicios

APIs orientadas a la consulta estructurada de informaci&oacute;n de productos, condiciones o servicios financieros disponibles en el entorno simulado.

### Cuentas

APIs asociadas a consulta de cuentas, saldos, movimientos u otros recursos relacionados, seg&uacute;n el alcance habilitado en el Sandbox.

### Recursos transaccionales

APIs orientadas a casos de uso que involucren capacidades transaccionales o flujos asociados a iniciaci&oacute;n, confirmaci&oacute;n o validaci&oacute;n de operaciones, cuando corresponda dentro del entorno de pruebas.

La definici&oacute;n detallada de endpoints, estructuras, par&aacute;metros, respuestas y consideraciones de implementaci&oacute;n deber&aacute; entenderse conforme a la documentaci&oacute;n t&eacute;cnica y a las especificaciones vigentes del SFA.

**Referencia a la documentaci&oacute;n t&eacute;cnica y especificaciones vigentes del SFA:** Especificaciones de APIs Open Finance.

## Manual de Consumo de APIs

Para la correcta ejecuci&oacute;n de pruebas sobre la EFS, los participantes deber&aacute;n considerar el manual de consumo de APIs dispuesto para el Sandbox.

Este documento contiene lineamientos operativos y recomendaciones pr&aacute;cticas para:

- 
configuraci&oacute;n inicial de credenciales, certificados y variables;

- 
preparaci&oacute;n del entorno de pruebas;

- 
ejecuci&oacute;n de requests sobre los endpoints habilitados;

- 
validaci&oacute;n de respuestas esperadas;

- 
registro de resultados y evidencias m&iacute;nimas requeridas.

El manual tiene por finalidad estandarizar la forma en que los participantes ejecutan sus pruebas, reduciendo errores de configuraci&oacute;n y facilitando una revisi&oacute;n homog&eacute;nea de resultados.

**Adjunto:** *CMF Manual de ejecuci&oacute;n de pruebas Postman v1*.

## Generaci&oacute;n de certificados del cliente** **

Para la generaci&oacute;n de los certificados del cliente **para los entornos de pruebas** se necesitan los siguientes recursos: 

- 
**client.cnf**: plantilla con la configuraci&oacute;n del cliente () 

- 
**ca-cert.pem**: certificado p&uacute;blico de la CA que se usar&aacute; para firmar los certificados clientes ()

- 
**ca-key.key**: certificado privado de la CA que se usar&aacute; para firmar los certificados clientes ()

- 
**generate-client-cert.sh**: script de generaci&oacute;n de los certificados ()

Todos los ficheros deben estar en la misma ruta y han de ejecutarse sobre /bin/bash. 

## Colecciones Postman

Con el objeto de facilitar una ejecuci&oacute;n estandarizada de las pruebas, se disponen colecciones oficiales Postman para el consumo de APIs de la EFS.

Estas colecciones se encuentran organizadas de forma alineada con el set de pruebas y con los escenarios definidos para el Sandbox, permitiendo a los participantes ejecutar validaciones sobre endpoints espec&iacute;ficos de manera ordenada.

Las colecciones podr&aacute;n incluir, seg&uacute;n corresponda:

- 
requests organizados por dominio o flujo funcional;

- 
variables de ambiente para parametrizaci&oacute;n;

- 
scripts de apoyo para autenticaci&oacute;n y obtenci&oacute;n de tokens;

- 
configuraciones necesarias para ejecutar pruebas bajo el flujo definido en el Sandbox;

- 
ejemplos de ejecuci&oacute;n para facilitar la validaci&oacute;n de escenarios.

El uso de estas colecciones no reemplaza la revisi&oacute;n de la documentaci&oacute;n t&eacute;cnica, sino que act&uacute;a como herramienta de apoyo para una ejecuci&oacute;n consistente y trazable.

**Adjunto:** *Colecciones Postman del Sandbox*:

### Entorno

El fichero del entorno contiene las diferentes variables que utilizan las colecciones postman para su correcto funcionamiento (urls, identificadores, etc...). Algunas de estas variables, permiten que ciertas colecciones postman obtengan par&aacute;metros en la respuesta de un endpoint que se mapean como variables en endpoints posteriores.

| 
**Postman Enviroment**
 |  |
| --- | --- |
| 

 |  |

### Open Data

| 
**Canales de Atenci&oacute;n Presencial**
 | 
**Canales de Atenci&oacute;n Digitales**
 | 
**Productos y Servicios**
 |  |
| 

 | 

 | 

 |  |

### Productos y Transacciones

| 
**Cuentas**
 | 
**Enrolamiento**
 | 
**Tarjetas de Cr&eacute;ditos**
 | 
**Operaciones de Cr&eacute;dito**
 | 
**Operaci&oacute;n de Tarjetas de Pago**
 | 
**Recursos**
 | 
**P&oacute;lizas de Seguro**
 | 
**Instrumentos de Inversi&oacute;n**
 |  |
| 

 | 

 | 

 | 

 | 

 | 

 | 

 | 

 |  |

### API Dynamic Client Registration (DCR) 

Es un protocolo estandarizado que permite a las aplicaciones cliente registrarse program&aacute;ticamente ante un Proveedor de OpenID (OP) en tiempo de ejecuci&oacute;n, eliminando la necesidad de una configuraci&oacute;n manual previa en un panel de administraci&oacute;n.

| 
**Registro Din&aacute;mico de Clientes**
 |  |
| 

 |  |

### Pushed Authorization Requests (PAR)

El flujo Authorization Code + PKCE + PAR es un mecanismo seguro dentro de OAuth 2.0 y OpenID Connect utilizado en Open Banking y otras aplicaciones que requieren autorizaci&oacute;n segura.

Componentes Clave:

- 
**Authorization Code Grant:** Es un flujo de OAuth 2.0 donde un cliente obtiene un c&oacute;digo de autorizaci&oacute;n (authorization_code) y lo intercambia por un Access Token. Se usa en aplicaciones donde no se deben exponer credenciales o tokens en la URL.

- 
**PKCE (Proof Key for Code Exchange):** Refuerza el Authorization Code Grant protegi&eacute;ndolo contra ataques de interceptaci&oacute;n del c&oacute;digo de autorizaci&oacute;n. Utiliza una clave temporal generada por el cliente (code_verifier) y su versi&oacute;n hasheada (code_challenge).

- 
**PAR (Pushed Authorization Request):** Evita la manipulaci&oacute;n de par&aacute;metros sensibles en la URL enviando la solicitud de autorizaci&oacute;n directamente al Authorization Server (AS) en una petici&oacute;n previa. El AS devuelve un request_uri, que se usa en la siguiente fase del flujo en lugar de pasar los par&aacute;metros en la URL.

| 
**Auth Code + PKCE + PAR**
 | 
**Oauth Browser Helper**
 | 
**PAR Request Generator**
 |  |
| 

 | 

 | 

 |  |

## Set de Prueba

Se expone un set de pruebas oficial para la ejecuci&oacute;n de validaciones sobre el Sandbox Pre-Productivo y su integraci&oacute;n con el Directorio, incluyendo pruebas t&eacute;cnicas, funcionales y de seguridad.

Este set de pruebas constituye la base de validaci&oacute;n para los participantes y tiene por finalidad asegurar una ejecuci&oacute;n ordenada, homog&eacute;nea y trazable de los distintos escenarios definidos para el entorno.

### Alcance del set de pruebas

El set de pruebas contempla, entre otras, actividades de habilitaci&oacute;n y preparaci&oacute;n para la ejecuci&oacute;n de pruebas por parte de los distintos roles participantes en el Sandbox. En particular, considera aspectos relacionados con:

- 
acceso y habilitaci&oacute;n en el Sandbox;

- 
integraci&oacute;n con el Directorio;

- 
uso de credenciales y certificados de prueba;

- 
conectividad segura;

- 
autenticaci&oacute;n y autorizaci&oacute;n;

- 
consumo de APIs expuestas por la EFS.

La siguiente figura presenta, de manera referencial, el flujo de habilitaci&oacute;n y ejecuci&oacute;n esperado para los roles **PSBI / PSIP** e **IPI / IPC** dentro del entorno de pruebas.
![image-20260327-143536.png](../attachments/entidad-financiera-simulada-efs/image-20260327-143536.png)
### Insumos y elementos provistos a los participantes

Para la correcta ejecuci&oacute;n del set de pruebas, a los participantes se les facilitar&aacute;n los insumos y elementos necesarios para su habilitaci&oacute;n, configuraci&oacute;n y ejecuci&oacute;n en el entorno. Entre ellos, se consideran:

- 
accesos al Sandbox y al Directorio;

- 
credenciales y certificados de prueba;

- 
documentaci&oacute;n t&eacute;cnica;

- 
colecciones Postman oficiales;

- 
matriz de pruebas;

- 
canales de soporte y coordinaci&oacute;n para la ejecuci&oacute;n.

Estos elementos tendr&aacute;n por objeto apoyar una ejecuci&oacute;n ordenada, homog&eacute;nea y trazable de las validaciones definidas para cada rol participante.

### Responsabilidades de los participantes

En el marco de la ejecuci&oacute;n del set de pruebas, se espera que los participantes:

- 
ejecuten las pruebas definidas conforme a su alcance;

- 
registren resultados y evidencias de forma trazable;

- 
documenten observaciones o hallazgos detectados;

- 
respeten los l&iacute;mites operacionales del entorno;

- 
entreguen feedback t&eacute;cnico cuando corresponda.

Cada participante deber&aacute; ejecutar &uacute;nicamente aquellos casos de prueba que resulten aplicables a su rol, alcance funcional y etapa de pruebas correspondiente.