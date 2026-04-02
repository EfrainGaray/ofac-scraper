---
title: "v1.0.0 - Casos de Error vinculados a Seguridad"
id: "123437316"
version: 1
updated: "2025-12-30T14:09:54.167Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-casos-de-error-vinculados-a-seguridad"
---
# v1.0.0 - Casos de Error vinculados a Seguridad

El presente apartado consolida una serie de requerimientos t&eacute;cnicos y operativos para el tratamiento de errores de seguridad en el Sistema de Finanzas Abiertas (SFA) de Chile, en el marco del Perfil de Seguridad FAPI 2.0 y la NCG 514 (Anexo 3). Estas directrices complementan los cap&iacute;tulos de Seguridad y Especificaciones T&eacute;cnicas del Perfil, sin duplicar las disposiciones ya definidas.

| 
**Descripci&oacute;n del error**
 | 
**Requerimientos t&eacute;cnicos y operativos **
 |  |
| --- | --- | --- |
| 
Error de autenticaci&oacute;n de cliente (mTLS fallido o certificado inv&aacute;lido)
 | 
Validar que el certificado est&eacute; inscrito y vigente en el Directorio de Participantes. No reintentar autom&aacute;ticamente: registrar evento, suspender la conexi&oacute;n y notificar al responsable de seguridad.
 |  |
| 
Certificado de firma o transporte expirado o revocado
 | 
Consultar el estado del certificado en el Directorio Local. Implementar rotaci&oacute;n autom&aacute;tica y alertas 15 d&iacute;as antes del vencimiento.
 |  |
| 
Token inv&aacute;lido, expirado o vinculado a otro cliente
 | 
Rechazar con c&oacute;digo 401 o 'invalid_token'. No exponer detalles. Requerir renovaci&oacute;n v&iacute;a flujo PAR. Registrar incidente de seguridad y auditar trazabilidad.
 |  |
| 
Error de firma JWS/JWT (integridad comprometida)
 | 
Retornar error 400 'invalid_request_object'. Verificar clave p&uacute;blica en JWKS del Directorio. Registrar evento de validaci&oacute;n y alertar si el emisor est&aacute; comprometido.
 |  |
| 
Falla en solicitud PAR (request_uri no v&aacute;lido o vencido)
 | 
Rechazar con error 'invalid_request_uri'. Recordar que la validez m&aacute;xima es 90 segundos. Evitar reintentos autom&aacute;ticos; generar nueva solicitud PAR.
 |  |
| 
Manipulaci&oacute;n de par&aacute;metros de autorizaci&oacute;n (redirect_uri, scope, RAR)
 | 
Detener flujo de autorizaci&oacute;n y registrar evento. FAPI 2.0 exige PAR obligatorio: no se permite continuar con par&aacute;metros directos en URI.
 |  |
| 
Replay o reutilizaci&oacute;n de tokens (replay attack)
 | 
Validar binding mTLS y cnf en token. Implementar control de unicidad de jti (JWT ID). Rechazar inmediatamente y registrar incidente.
 |  |
| 
Phishing o consentimiento fraudulento detectado
 | 
Invalidar consentimiento y tokens asociados ('/revoke'). Notificar al Cliente Final y a la CMF seg&uacute;n protocolo de incidentes operacionales.
 |  |
| 
Error de login del Usuario final (credenciales incorrectas o sesi&oacute;n interrumpida)
 | 
Mantener estado 'pendiente' del consentimiento por hasta 60 minutos. Permitir reanudaci&oacute;n sin solicitar nuevas credenciales (resume flow).
 |  |
| 
Consentimiento no confirmado o abandonado por el Cliente Final
 | 
Registrar estado 'pendiente' o 'rechazado' en el registro de solicitudes de consentimiento. Permitir reintento hasta expirar el authorization context.
 |  |
| 
Exceso de solicitudes (limitaci&oacute;n TPS/TPM)
 | 
Responder 429 con 'Retry-After'. Implementar backoff exponencial y monitorear m&eacute;tricas en reporte de disponibilidad.
 |  |
| 
Indisponibilidad del Authorization Server o ca&iacute;da de canal TLS
 | 
Reintentar luego de 30&ndash;60 segundos. Mantener consentimiento vigente; el Access Token sigue v&aacute;lido mientras no expire.
 |  |
| 
Revocaci&oacute;n o suspensi&oacute;n en el Directorio
 | 
Bloquear transacciones del participante afectado hasta actualizaci&oacute;n del estado. Notificar a los consumidores de APIs mediante evento 'cl.sfa.participant.suspended'.
 |  |
| 
Eventos de revocaci&oacute;n no procesados (tokens o certificados)
 | 
Implementar endpoints de recepci&oacute;n y confirmaci&oacute;n de eventos conforme al Cap. 11 del Perfil de Seguridad. Registrar el ack de recepci&oacute;n en logs auditables.
 |  |