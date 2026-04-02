---
title: "v1.0.0 - Introducción"
id: "123437190"
version: 1
updated: "2025-12-30T14:09:52.224Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-introduccion"
---
# v1.0.0 - Introducción

## Modelo de Seguridad, Actores y Flujos

Este apartado define el modelo de seguridad aplicable al Sistema de Finanzas Abiertas (SFA) en Chile, conforme a la Ley Fintec y a la Norma de Car&aacute;cter General N&deg; 514 (Anexo 3). Su prop&oacute;sito es garantizar la protecci&oacute;n de la informaci&oacute;n financiera y la operaci&oacute;n segura de las interfaces de programaci&oacute;n de aplicaciones (APIs) utilizadas en el ecosistema.

El modelo de seguridad se fundamenta en los principios de confidencialidad, integridad, disponibilidad, no repudio y trazabilidad. Dichos principios rigen el intercambio de datos entre los participantes y la ejecuci&oacute;n de servicios a trav&eacute;s de APIs estandarizadas.

Entre los mecanismos de protecci&oacute;n obligatorios se incluyen el uso de TLS 1.3, mTLS, certificados digitales de identidad y el Registro Din&aacute;mico de Clientes (DCR). Asimismo, se establece la utilizaci&oacute;n del Directorio de Participantes administrado por la Comisi&oacute;n para el Mercado Financiero (CMF), junto con el Portal de Desarrolladores y el ambiente de pruebas.

 

### Actores del Ecosistema

Los principales actores del SFA son los siguientes:

 

| 
**Actor**
 | 
**Rol**
 | 
**Descripci&oacute;n breve**
 | 
**Responsabilidades clave**
 |  |
| --- | --- | --- | --- | --- |
| 
**Usuario Final (PSU)**
 | 
Titular de datos y/o de cuentas
 | 
Otorga o revoca consentimiento sobre un intercambio de datos o ejecuci&oacute;n de pagos
 | 
Autorizar/Revocar; ejercer derechos sobre datos
 |  |
| 
**IPI &ndash; Instituci&oacute;n Proveedora de Informaci&oacute;n**
 | 
Proveedor de datos
 | 
Expone datos v&iacute;a APIs
 | 
Custodia de datos; seguridad de APIs; cumplimiento
 |  |
| 
**IPC &ndash; Instituci&oacute;n Proveedora de Cuentas**
 | 
Proveedor de cuentas/pagos
 | 
Emite cuentas/tarjetas y expone APIs
 | 
Operar pagos/cuentas; seguridad; cumplimiento
 |  |
| 
**PSBI &ndash; Prestador  de Servicios Basado en Informaci&oacute;n**
 | 
Consumidor de datos
 | 
Consume datos para proveer servicios
 | 
Gestionar consentimientos; proteger datos
 |  |
| 
**PSIP &ndash; Prestador de Servicios Iniciaci&oacute;n de Pagos**
 | 
Iniciador de pagos
 | 
Inicia pagos a nombre del cliente
 | 
Gestionar consentimientos; seguridad de pagos
 |  |
| 
**CMF - Comisi&oacute;n para el Mercado Financiero**
 | 
Regulador
 | 
Administra directorio, portal, sandbox
 | 
Supervisar; administrar directorio; exigir reportes
 |  |
| 
**Autoridades Certificadoras**
 | 
Infraestructura de confianza
 | 
Emite/renueva/revoca certificados
 | 
Ciclo de vida de certificados; listas de revocaci&oacute;n
 |  |
| 
**Directorio de Participantes**
 | 
Registro y descubrimiento
 | 
Valida entidades y publica endpoints/metadata
 | 
Registro, DCR/metadata, alta/baja, disponibilidad
 |  |

 

### Flujos de Seguridad

El flujo general de seguridad contempla las siguientes etapas:

- 
Registro de participantes en el Directorio administrado por la CMF, incluyendo certificados digitales.

- 
Autenticaci&oacute;n y autorizaci&oacute;n del cliente mediante protocolos seguros y estandarizados.

- 
Otorgamiento del consentimiento informado, digital, granular y revocable.

- 
Transmisi&oacute;n de datos a trav&eacute;s de APIs con cifrado TLS 1.3 y mTLS.

- 
Validaci&oacute;n de certificados y firmas digitales a trav&eacute;s del Directorio.

- 
Registro y monitoreo de accesos e incidentes, con reporter&iacute;a a la CMF.

- 
Implementaci&oacute;n de mecanismos de continuidad operacional que consideren contingencias.

## Objetivos y Alcance de la Seguridad

Este apartado establece los objetivos estrat&eacute;gicos y el alcance de la seguridad en el SFA en Chile, definiendo un marco normativo claro para la gesti&oacute;n de riesgos y la protecci&oacute;n de la informaci&oacute;n.

### Objetivos de Seguridad

- 
Confidencialidad: protecci&oacute;n frente a accesos no autorizados.

- 
Integridad: resguardo de la exactitud y completitud de los datos.

- 
Disponibilidad: continuidad en la prestaci&oacute;n de los servicios cr&iacute;ticos.

- 
No repudio: certeza de las transacciones y consentimientos otorgados.

- 
Trazabilidad: registro y auditor&iacute;a verificable de las operaciones.

### Alcance de la Seguridad

La seguridad del SFA se aplica a los siguientes componentes:

- 
APIs que habilitan el acceso a informaci&oacute;n y servicios financieros.

- 
Tokens de acceso y credenciales asociadas a las aplicaciones registradas.

- 
Certificados digitales utilizados en la comunicaci&oacute;n segura.

- 
Procesos de autenticaci&oacute;n, autorizaci&oacute;n y consentimiento de clientes.

- 
Ambientes de prueba, directorio de participantes y portal de desarrolladores.

### Fuera de Alcance

No forman parte del alcance del modelo de seguridad:

- 
Infraestructura interna de cada entidad no vinculada directamente al SFA.

- 
Procesos de gesti&oacute;n internos sin relaci&oacute;n con el intercambio de datos por APIs.

- 
Sistemas legados que no participen en el ecosistema de finanzas abiertas.

### Suposiciones y Dependencias

El modelo de seguridad se basa en las siguientes premisas:

- 
Implementaci&oacute;n obligatoria de TLS 1.3 y mTLS por todas las entidades participantes.

- 
Certificados emitidos por Autoridades Certificadoras que cumplen con los requerimientos definidos por la CMF.

- 
Consentimiento digital, granular y revocable por parte de los clientes.

- 
Cumplimiento con la normativa de ciberseguridad dictada por la CMF.

- 
Adopci&oacute;n de protocolos y est&aacute;ndares reconocidos en materia de seguridad de APIs.

 

## Configuraci&oacute;n y Uso Seguro de las Integraciones

Este apartado establece lineamientos t&eacute;cnicos m&iacute;nimos y buenas pr&aacute;cticas para garantizar la configuraci&oacute;n y uso seguro de las integraciones en el marco del SFA en Chile.

### Checklist T&eacute;cnico de Seguridad

- 
Uso obligatorio de TLS 1.3 y mTLS en todas las conexiones.

- 
Implementaci&oacute;n de OAuth 2.0 y OpenID Connect (OIDC) con scopes definidos.

- 
Aplicaci&oacute;n del Registro Din&aacute;mico de Clientes (DCR).

- 
Rotaci&oacute;n peri&oacute;dica de certificados y llaves criptogr&aacute;ficas.

- 
Almacenamiento seguro de secretos en entornos protegidos.

### Flujo Redirigido

El flujo redirigido constituye el mecanismo previsto para la interacci&oacute;n entre aplicaciones, debiendo cumplir con las disposiciones t&eacute;cnicas y de seguridad establecidas por la CMF. La normativa no contempla, por el momento, lineamientos adicionales en materia de redirecci&oacute;n App-to-App.

### Gesti&oacute;n de Secretos y Llaves

- 
Rotaci&oacute;n peri&oacute;dica de credenciales y llaves.

- 
Uso de m&oacute;dulos de seguridad hardware (HSM) para la custodia de llaves.

- 
Eliminaci&oacute;n segura de llaves caducadas o comprometidas.

### Registro y Monitoreo de Integraciones

- 
Registro de accesos y transacciones con sellos de tiempo confiables.

- 
Reporte de incidentes de seguridad a la CMF conforme a la normativa vigente.

- 
Implementaci&oacute;n de alertas y detecci&oacute;n de anomal&iacute;as en tiempo real.

### Manejo de Errores y C&oacute;digos de Respuesta

El manejo de errores y c&oacute;digos de respuesta se encuentra normado en la secci&oacute;n de 'Principios de Dise&ntilde;o'. Las integraciones deber&aacute;n dar cumplimiento a lo establecido en dicha secci&oacute;n. En caso de errores vinculados espec&iacute;ficamente con seguridad, estos deber&aacute;n observar la misma estructura y criterios definidos en la normativa base.