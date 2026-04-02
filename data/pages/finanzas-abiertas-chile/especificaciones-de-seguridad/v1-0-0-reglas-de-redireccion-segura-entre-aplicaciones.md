---
title: "v1.0.0 - Reglas de Redirección Segura entre Aplicaciones"
id: "123437408"
version: 1
updated: "2025-12-30T14:09:55.453Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-reglas-de-redireccion-segura-entre-aplicaciones"
---
# v1.0.0 - Reglas de Redirección Segura entre Aplicaciones

## Introducci&oacute;n

El presente establece los requisitos de seguridad asociados a los flujos de redirecci&oacute;n utilizados por los Participantes del Sistema de Finanzas Abiertas (SFA), particularmente en los procesos de autenticaci&oacute;n, consentimiento, autorizaci&oacute;n y retorno de control aplicativo entre PSBI/PSIP e IPI/IPC.

Su prop&oacute;sito es garantizar la protecci&oacute;n de los datos del usuario, la integridad de las sesiones, la prevenci&oacute;n de ataques de manipulaci&oacute;n de redirecci&oacute;n y la interoperabilidad segura entre aplicaciones.

## Validaci&oacute;n estricta de redirect_uri

- 
El redirect_uri debe estar previamente registrado por el PSBI/PSIP en el Directorio.

- 
La IPI/IPC debe validar coincidencia exacta (exact match) del redirect_uri recibido en la solicitud de autorizaci&oacute;n.

- 
No se permite el uso de wildcard, pattern matching o registros din&aacute;micos.

## Integridad del flujo de consentimiento

- 
El flujo de autorizaci&oacute;n debe mantener integridad desde el inicio hasta la redirecci&oacute;n final al PSBI/PSIP.

- 
Los par&aacute;metros sensibles (authorization_code, state, request_uri, request object) deben permanecer inalterados durante el tr&aacute;nsito.

## Par&aacute;metro obligatorio &ldquo;state&rdquo;

En flujos basados en redirecci&oacute;n, se debe enviar y retornar el par&aacute;metro state, utilizado como token anti-CSRF. 

El uso de **state** es obligatorio porque forma parte de los controles de seguridad definidos en **FAPI 2.0**, asegurando que la respuesta del servidor de autorizaci&oacute;n corresponda exactamente a la solicitud iniciada por el PSBI/PSIP. Este par&aacute;metro permite prevenir ataques de manipulaci&oacute;n de redirecci&oacute;n, evitar el secuestro del flujo de autorizaci&oacute;n y mitigar riesgos como CSRF y mix-up en ecosistemas donde existen m&uacute;ltiples servidores de autorizaci&oacute;n.

## Prohibici&oacute;n de redirecciones invisibles

El flujo debe ser expl&iacute;cito, visible al usuario, sin iframes ni redirecciones ocultas:

- 
Previene ataques de redirecci&oacute;n maliciosa.

- 
Garantiza consentimiento informado.