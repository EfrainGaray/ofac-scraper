---
title: "v1.0.0 - Modelo de Operación e Integración del Directorio"
id: "123437591"
version: 1
updated: "2025-12-30T14:10:24.146Z"
path: "finanzas-abiertas-chile/directorio-de-participantes/v1-0-0-modelo-de-operacion-e-integracion-del-directorio"
---
# v1.0.0 - Modelo de Operación e Integración del Directorio

# Gobierno Operacional y Responsabilidades del Directorio CMF

## **Funciones principales del Directorio**

El Directorio cumple funciones normativas, operativas y t&eacute;cnicas, entre ellas:

- 
**Identificaci&oacute;n oficial de participantes**

- 
Datos legales, comerciales y operativos.

- 
Estados y subestados definidos por la CMFo   (Activo: Normal o Mecanismo alternativo;Inactivo: Desconectado, Mantenimiento sistema, Suspendido, En proceso de incorporaci&oacute;n).

- 
Reglas de actualizaci&oacute;n seg&uacute;n la gu&iacute;a funcional.

- 
**Validaci&oacute;n y registro de certificados digitales**

- 
Certificados mTLS y de firma asociados a aplicaciones.

- 
Publicaci&oacute;n de claves p&uacute;blicas (JWKS) para validaci&oacute;n cruzada.

- 
Gobernanza del ciclo de vida de certificados, conforme al Anexo 3.

- 
**Publicaci&oacute;n de infraestructura t&eacute;cnica del participante**

- 
Servidores de autorizaci&oacute;n (issuer, PAR, token, certificados, discovery).

- 
Recursos API y sus versiones.

- 
Informaci&oacute;n estructurada accesible por API: /participants, /organisations, /authorisationservers, /apiresources.

- 
**Sincronizaci&oacute;n del ecosistema**

- 
Mecanismos `HEAD` para detectar actualizaciones.

- 
Versionamiento mediante encabezados (`x-version`, `x-last-updated`, `x-checksum`).

- 
Requerimiento de copias locales consistentes para todos los participantes, conforme al Perfil de Seguridad.

## **Rol de la CMF como Operador del Directorio**

La CMF es responsable de:

- 
Administrar las plataformas de **Sandbox** y **Producci&oacute;n**.

- 
Publicar, versionar y custodiar las APIs del Directorio.

- 
Supervisar el cumplimiento de los requisitos de certificados, estados y estructura t&eacute;cnica definida en el SFA.

- 
Mantener la disponibilidad, integridad y continuidad operativa del Directorio.

Este rol se enmarca en las funciones de supervisi&oacute;n y gobierno establecidas por la NCG 514 y el Modelo de Gobierno del SFA.

Es relevante destacar que dentro de las funciones que **no tiene** el Directorio est&aacute;n:

- 
Ejecuta procesos OAuth2/OIDC (authorization_code, token issuance, PAR).

- 
Administra consentimientos del Usuario Final.

- 
Actuar como proxy ni redirecciona tr&aacute;fico entre entidades.

- 
Validar flujos transaccionales de las APIs de informaci&oacute;n o iniciaci&oacute;n de pagos.

El Directorio es estrictamente **informacional y de confianza**, no transaccional.

## **Objetivo del gobierno operacional**

El gobierno operacional del Directorio establece las reglas, responsabilidades y procesos que permiten mantener la informaci&oacute;n del Sistema de Finanzas Abiertas (SFA) actualizada, &iacute;ntegra y confiable. Su objetivo es definir c&oacute;mo se administran los datos institucionales, los certificados, los servidores de autorizaci&oacute;n y los recursos API declarados por los participantes, garantizando que todo el ecosistema cuente con una &uacute;nica fuente aut&eacute;ntica que soporte la interoperabilidad requerida por la Ley Fintec, la NCG 514 (Anexo 3) y el Perfil de Seguridad del SFA.

---

## **Rol de la CMF como operador del Directorio**

La Comisi&oacute;n para el Mercado Financiero (CMF) es la responsable de operar el Directorio en los ambientes de Sandbox y Producci&oacute;n. Su funci&oacute;n consiste en administrar la plataforma y mantener la consistencia t&eacute;cnica y regulatoria de cada elemento publicado. Este rol implica asegurar que los datos institucionales, certificados, endpoints OIDC y recursos API cumplan con los requisitos vigentes antes de su publicaci&oacute;n, as&iacute; como custodiar las APIs del Directorio y garantizar su disponibilidad operativa.

La CMF tambi&eacute;n debe mantener la trazabilidad de todos los cambios, conservar los registros por al menos cinco a&ntilde;os conforme a lo indicado en el Anexo 3, y asegurar que los mecanismos de versionamiento y control (como `x-version`, `x-last-updated` o `x-checksum`) reflejen correctamente cualquier actualizaci&oacute;n. Adicionalmente, es la encargada de propagar los eventos asociados a la revocaci&oacute;n o rotaci&oacute;n de certificados, cambios de estado o ajustes en los servidores de autorizaci&oacute;n, velando por la coherencia del ecosistema.

## **Responsabilidades de los participantes del SFA**

Los participantes (PSBI, PSIP, IPI e IPC) tienen la obligaci&oacute;n de registrar y mantener actualizada la informaci&oacute;n necesaria para formar parte del Directorio. Esto incluye la actualizaci&oacute;n de sus datos institucionales, los estados operativos definidos en la gu&iacute;a funcional, los certificados utilizados para mTLS y firma digital, y la infraestructura declarada para su servidor de autorizaci&oacute;n (issuer, endpoints, JWKS, recursos API y versiones).

Cada entidad debe revisar que esta informaci&oacute;n sea precisa, vigente y coherente con su operaci&oacute;n real. Asimismo, debe sincronizar de forma continua su copia local del Directorio utilizando los mecanismos previstos por las APIs (`HEAD /participants` y los metadatos de control). El Perfil de Seguridad exige que toda integraci&oacute;n o proceso cr&iacute;tico se realice siempre con la versi&oacute;n m&aacute;s reciente del Directorio, por lo que mantener una copia local correctamente actualizada es una responsabilidad exclusiva de cada participante.

## **Delimitaci&oacute;n de responsabilidades**

El gobierno operacional define con claridad qu&eacute; corresponde a cada actor. La CMF administra, valida y publica la informaci&oacute;n del Directorio, pero no interviene en la operaci&oacute;n interna ni en la infraestructura tecnol&oacute;gica que cada entidad utiliza para implementar sus endpoints, sus certificados o sus servidores de autorizaci&oacute;n. Por su parte, los participantes deben garantizar que la informaci&oacute;n que declaran est&eacute; vigente y operativa; no pueden publicar endpoints que no funcionen, certificados expirados o revocados o datos inconsistentes con sus sistemas reales.

Asimismo, los participantes no deben atribuir fallas de integraci&oacute;n a la CMF cuando su copia local no est&eacute; sincronizada o cuando su configuraci&oacute;n t&eacute;cnica sea incorrecta. Esta delimitaci&oacute;n asegura que el Directorio cumpla su rol estrictamente como fuente de informaci&oacute;n y no como intermediario funcional.

## **Mecanismos de control y actualizaci&oacute;n**

La consistencia del Directorio se mantiene mediante mecanismos formales de control. Todo cambio visible para el ecosistema debe pasar por el proceso de validaci&oacute;n previo de la CMF y reflejarse correctamente en los metadatos de versi&oacute;n y checksum. De igual forma, el Directorio registra cada modificaci&oacute;n realizada, desde la actualizaci&oacute;n de un certificado hasta la incorporaci&oacute;n de un nuevo recurso API. Esta trazabilidad, exigida por la normativa, permite auditar el historial completo de modificaciones en las entidades.

## **Principios de operaci&oacute;n**

El funcionamiento del Directorio se basa en principios comunes a todo el SFA: ser la fuente aut&eacute;ntica de informaci&oacute;n, mantener la integridad de los datos publicados, garantizar la actualizaci&oacute;n continua, asegurar la consistencia t&eacute;cnica necesaria para la interoperabilidad, conservar trazabilidad completa y operar bajo un modelo neutral y transparente. Estos principios permiten que el Directorio sea un componente confiable para el ecosistema y aseguran la estabilidad del SFA a lo largo del tiempo.

## **Principios de auditor&iacute;a y trazabilidad**

La operaci&oacute;n del Directorio requiere trazabilidad completa sobre todas las actividades que influyen en la integridad del ecosistema. Tanto la CMF como los participantes deben registrar de manera consistente las acciones relacionadas con la actualizaci&oacute;n de datos institucionales, gesti&oacute;n de certificados, modificaciones en servidores de autorizaci&oacute;n, publicaci&oacute;n de recursos API y sincronizaci&oacute;n interna.

El Anexo 3 exige que los registros de auditor&iacute;a se mantengan **al menos por cinco a&ntilde;os**, incluyendo timestamp, identificadores relevantes y cualquier informaci&oacute;n necesaria para reconstruir el flujo de cambios. Este nivel de trazabilidad permite realizar procesos de auditor&iacute;a interna, auditor&iacute;a regulatoria y an&aacute;lisis forense ante incidentes operativos o de seguridad.

# **Plataforma Web del Directorio de Participantes**

La plataforma web del directorio es la interfaz administrativa que utilizan las entidades participantes y la CMF para registrar, actualizar y revisar la informaci&oacute;n del Directorio. Est&aacute; compuesta por las secciones de participantes, detalles legales, direcciones, notificaciones, declaraciones de software, certificados y servidores de autorizaci&oacute;n, todas ellas descritas en la Gu&iacute;a de funcionalidades del Directorio.

A trav&eacute;s de esta plataforma, los administradores del participante pueden mantener la informaci&oacute;n institucional y t&eacute;cnica que ser&aacute; publicada en el Directorio. Asimismo, la CMF utiliza esta interfaz para realizar validaciones previas, revisar estados operativos y gestionar el ciclo de vida de certificados y endpoints antes de incorporarlos al repositorio central.

## **APIs p&uacute;blicas del Directorio**

Las APIs p&uacute;blicas constituyen el mecanismo oficial de sincronizaci&oacute;n para todos los participantes. Estas interfaces permiten consultar informaci&oacute;n estructurada del Directorio de participantes sin necesidad de acceder a la plataforma administrativa. Su dise&ntilde;o sigue un modelo jer&aacute;rquico que facilita el descubrimiento t&eacute;cnico del ecosistema.

Los endpoints principales incluyen:

- 
`/participants`: entrega el listado consolidado de participantes activos.

- 
`/organisations`: permite consultar organizaciones registradas y su informaci&oacute;n institucional.

- 
`/organisations/{id}/authorisationservers`: expone los servidores de autorizaci&oacute;n declarados por una organizaci&oacute;n.

- 
`/authorisationservers/{id}/apiresources`: muestra los recursos y familias API con sus versiones y endpoints asociados.

- 
`/.well-known/openid-configuration`: permite obtener la configuraci&oacute;n OIDC oficial del Directorio.

Estas APIs incorporan encabezados de control que permiten detectar cambios sin descargar el contenido completo, como en el caso del uso de `HEAD /participants`. La sincronizaci&oacute;n se realiza mediante la verificaci&oacute;n continua de las versiones publicadas y el consumo peri&oacute;dico de estas interfaces seg&uacute;n las necesidades del participante.

## **Copia local del participante**

Cada participante debe mantener una copia local del Directorio actualizada y coherente con la versi&oacute;n publicada por la CMF. Esta copia es utilizada para validar certificados, endpoints, servidores de autorizaci&oacute;n y cualquier informaci&oacute;n necesaria para iniciar flujos del SFA. El Perfil de Seguridad exige que los procesos cr&iacute;ticos se basen en datos oficiales actualizados, por lo que mantener esta copia correctamente sincronizada constituye una obligaci&oacute;n operativa del participante.

La copia local se alimenta exclusivamente mediante las APIs p&uacute;blicas del Directorio. Su funcionamiento depende de la detecci&oacute;n de cambios mediante los encabezados de metadatos, tras lo cual se descarga la nueva versi&oacute;n de la informaci&oacute;n correspondiente.

## **3.6 Relaciones entre componentes**

La arquitectura funcional se sostiene en la interacci&oacute;n arm&oacute;nica de los componentes descritos:

- 
La **CMF**, a trav&eacute;s del Directorio de participantes, mantiene la informaci&oacute;n oficial.

- 
Las **entidades participantes** actualizan su informaci&oacute;n desde la plataforma de gesti&oacute;n.

- 
Los **cambios publicados** se propagan mediante las APIs p&uacute;blicas.

- 
Los **participantes** consumen dichas APIs para actualizar su copia local y operar con datos sincronizados.

- 
Los **procesos del SFA**, incluyendo la validaci&oacute;n de certificados, DCR y flujos OIDC, dependen de esta informaci&oacute;n para funcionar correctamente.

![Flujo de secuencia.png](../attachments/v1-0-0-modelo-de-operacion-e-integracion-del-directorio/Flujo%20de%20secuencia.png)
# **Flujos operativos del Directorio**

## **Flujo de incorporaci&oacute;n y actualizaci&oacute;n de un participante**

Este flujo aplica cuando una entidad se incorpora por primera vez al SFA o cuando realiza cambios relevantes en su informaci&oacute;n institucional u operativa (por ejemplo, ajustes de raz&oacute;n social, contactos, estados o canales de notificaci&oacute;n).

**Pasos operativos:**

- 
**Carga de informaci&oacute;n por el participante**
El administrador del participante enviar&aacute; sus datos institucionales, legales y de contacto a trav&eacute;s de la plataforma definida para tal efecto. 

- 
**Revisi&oacute;n y validaci&oacute;n por la CMF**
La CMF verifica que la informaci&oacute;n cumpla con los requisitos normativos y de consistencia (por ejemplo, que la entidad est&eacute; autorizada a operar en el SFA, que los datos de identificaci&oacute;n sean correctos y que el estado declarado sea coherente con la supervisi&oacute;n).

- 
**Publicaci&oacute;n en el Directorio de participantes**
Una vez aprobados los datos, la CMF actualiza el registro correspondiente en el Directorio de participantes. Este cambio se reflejar&aacute; en el resultado de las APIs del Directorio (por ejemplo, en `/participants` y `/organisations`).

- 
**Actualizaci&oacute;n de versi&oacute;n**
El Directorio incrementa su versi&oacute;n y actualiza los metadatos `x-version`, `x-last-updated` y `x-checksum`, que se devolver&aacute;n en las llamadas `HEAD /participants` y en las respuestas de las APIs de consulta.

- 
**Sincronizaci&oacute;n por parte del ecosistema**
Los participantes detectan el cambio de versi&oacute;n mediante el consumo peri&oacute;dico de `HEAD /participants` y, cuando corresponda, descargan la nueva informaci&oacute;n, actualizando su copia local.

## **Flujo de gesti&oacute;n de certificados**

La gesti&oacute;n de certificados es cr&iacute;tica para la autenticaci&oacute;n mTLS, la firma JWS y la validaci&oacute;n de JWKS en el SFA. Este flujo integra lo definido en el documento de Gesti&oacute;n de Certificados y en el Perfil de Seguridad, donde se establecen las reglas de emisi&oacute;n, rotaci&oacute;n, revocaci&oacute;n y publicaci&oacute;n de metadatos.

**Pasos operativos principales:**

- 
**Emisi&oacute;n o renovaci&oacute;n de certificados por la entidad**
El participante obtiene certificados de transporte (mTLS) y firma (JWS) emitidos por una CA que cumpla con los requisitos definidos por la CMF. 

- 
**Registro de certificados en la plataforma web del directorio**
El administrador del participante asocia los nuevos certificados a sus aplicaciones o servidores en la plataforma web del Directorio, incorporando la informaci&oacute;n necesaria (tipo de certificado, vigencia, `kid`, etc.).

- 
**Validaci&oacute;n por la CMF**
La CMF revisa la validez del certificado (formato, vigencia, CA emisora, uso previsto), as&iacute; como su coherencia con el resto de la configuraci&oacute;n de seguridad del participante (por ejemplo, que el certificado de mTLS se corresponda con el servidor de autorizaci&oacute;n declarado).

- 
**Publicaci&oacute;n en el Directorio Central**
Una vez validados, los certificados y sus metadatos se incorporan al Directorio Central, quedando disponibles para la verificaci&oacute;n por parte del ecosistema (a trav&eacute;s de JWKS y/o metadatos del Directorio).

- 
**Rotaci&oacute;n y coexistencia**
Durante el periodo de rotaci&oacute;n, el Directorio mantiene registrados tanto el certificado nuevo como el anterior, con estados apropiados (por ejemplo, `active` y `deprecated`), respetando la ventana de coexistencia definida en la pol&iacute;tica (30 d&iacute;as).

- 
**Revocaci&oacute;n e incidentes**
En caso de incidente de seguridad o compromiso de claves, el participante notifica a la CMF; la CMF actualiza el estado del certificado a `revoked` en el Directorio y asegura la propagaci&oacute;n del cambio al ecosistema. Este evento debe quedar registrado.

## **Flujo de actualizaci&oacute;n de servidores de autorizaci&oacute;n y recursos API**

Este flujo aplica cuando una entidad incorpora un nuevo servidor de autorizaci&oacute;n, modifica uno existente o publica nuevos recursos API regulados (por ejemplo, nuevas versiones de cuentas, pagos o productos).

- 
**Declaraci&oacute;n en la plataforma web del directorio**
El participante registra o ajusta sus servidores de autorizaci&oacute;n en la plataforma de gesti&oacute;n, indicando el `issuer`, la URL de `openid-configuration`, soportes (PAR, DCR), as&iacute; como los recursos API y versiones asociadas (familia, `ApiResourceId`, `ApiVersion`, `FamilyComplete`, endpoints).

- 
**Verificaci&oacute;n t&eacute;cnica por la CMF**
La CMF valida que:

- 
el `issuer` exponga correctamente su documento `.well-known/openid-configuration`,

- 
los endpoints declarados sean accesibles y coherentes,

- 
los recursos API y sus versiones correspondan con las especificaciones publicadas en el repositorio central de est&aacute;ndares y el Perfil de Seguridad.

- 
**Publicaci&oacute;n en el Directorio Central**
Una vez superada la validaci&oacute;n, la informaci&oacute;n del servidor de autorizaci&oacute;n y de los recursos API queda disponible en las APIs del Directorio, en particular:

- 
`/organisations/{OrganisationId}/authorisationservers`

- 
`/organisations/{OrganisationId}/authorisationservers/{AuthorisationServerId}/apiresources`

- 
**Impacto en la interoperabilidad**
Desde ese momento, otros participantes pueden descubrir de forma automatizada qu&eacute; APIs expone la entidad, en qu&eacute; versiones y bajo qu&eacute; servidor de autorizaci&oacute;n, facilitando la configuraci&oacute;n de DCR y los flujos OIDC correspondientes.

## **Flujo de sincronizaci&oacute;n de la copia local del Directorio**

La sincronizaci&oacute;n de la copia local es un flujo recurrente y esencial, ya que asegura que cada entidad trabaje con la informaci&oacute;n m&aacute;s reciente del Directorio al ejecutar sus procesos de autorizaci&oacute;n, validaci&oacute;n de certificados y consumo de APIs.

**Secuencia t&iacute;pica de sincronizaci&oacute;n:**

- 
El sistema interno del participante realiza consultas peri&oacute;dicas a `HEAD /participants` (y, cuando corresponda, a otros endpoints del Directorio) para verificar si la versi&oacute;n del Directorio ha cambiado, revisando `x-version`, `x-last-updated` y `x-checksum`.

- 
Si la versi&oacute;n es distinta de la almacenada en la copia local, el participante ejecuta las llamadas `GET` necesarias (`/participants`, `/organisations`, `authorisationservers`, `apiresources`, etc.) para descargar la informaci&oacute;n actualizada.

- 
La copia local procesa los datos, actualiza registros, sustituye informaci&oacute;n obsoleta y marca como inactivos aquellos elementos que hayan sido eliminados o revocados en el Directorio Central.

- 
Una vez actualizada la copia local, los sistemas internos del participante utilizan esta informaci&oacute;n para sus flujos operativos: validaci&oacute;n de certificados, descubrimiento de endpoints, ejecuci&oacute;n de DCR, aplicaci&oacute;n del Perfil de Seguridad y cualquier otro proceso que dependa del Directorio.

Este flujo debe ejecutarse cada vez que exista un aviso de actualizaci&oacute;n y por defecto, en caso de no haber aviso, con una frecuencia de m&iacute;nimo 8 horas para cumplir con los requisitos del Perfil de Seguridad y del Anexo 3, especialmente en lo relativo a la vigencia de certificados, estados de participantes y endpoints habilitados.