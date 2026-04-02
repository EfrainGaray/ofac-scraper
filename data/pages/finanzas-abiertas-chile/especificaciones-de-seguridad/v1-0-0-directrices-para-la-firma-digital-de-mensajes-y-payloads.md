---
title: "v1.0.0 - Directrices para la Firma Digital de Mensajes y Payloads"
id: "123437359"
version: 1
updated: "2025-12-30T14:09:54.796Z"
path: "finanzas-abiertas-chile/especificaciones-de-seguridad/v1-0-0-directrices-para-la-firma-digital-de-mensajes-y-payloads"
---
# v1.0.0 - Directrices para la Firma Digital de Mensajes y Payloads

## Objetivo

Establecer las **normas de firma digital** aplicables a todos los mensajes, tokens y payloads intercambiados dentro del **Sistema de Finanzas Abiertas (SFA)**, garantizando autenticidad, integridad y no repudio conforme al **Perfil de Seguridad Chileno** y las buenas pr&aacute;cticas definidas por la **OpenID Foundation (FAPI 2.0)**.

## Alcance

Estas directrices se aplican a:

- 
**Mensajes OAuth 2.0 / OIDC**, incluidos `authorization_request`, `token_request`, `PAR`, `JARM`, `DCR`, `RAR` y `revocation`.

- 
**Payloads de negocio** transmitidos en APIs del SFA (datos financieros, consentimientos, &oacute;rdenes de pago)

- 
**Software Statements (SSA)** y **JWTs** emitidos por el Directorio o por los Participantes.

## Requisitos normativos de firma

| 
Elemento
 | 
Algoritmo / est&aacute;ndar
 | 
Referencia
 | 
Observaciones
 |  |
| --- | --- | --- | --- | --- |
| 
**Formato de firma**
 | 
`JSON Web Signature (JWS)` compact o detached
 | 
RFC 7515
 | 
Aplicable a todos los mensajes firmados.
 |  |
| 
**Algoritmo de firma obligatorio**
 | 
`PS256 (RSASSA-PSS SHA-256)`
 | 
FAPI 2.0
 | 
Algoritmo por defecto para todos los JWT/JWS.
 |  |
| 
**Cifrado opcional (payloads sensibles)**
 | 
`RSA-OAEP` + `A256GCM`
 | 
RFC 7516
 | 
Operaciones de alta criticidad.
 |  |
| 
**Clave privada**
 | 
Protegida en HSM o m&oacute;dulo seguro
 | 
NCG 514 Anexo 3
 | 
Prohibido almacenar llaves fuera de m&oacute;dulo certificado.
 |  |
| 
**Certificados asociados**
 | 
Emitidos por CA reconocida y publicados en JWKS del Directorio
 | 
RFC 5280 / 8705
 | 
Validaci&oacute;n en l&iacute;nea mediante `kid` / `x5c`.
 |  |
| 
**Claim **`jti`
 | 
Identificador &uacute;nico por mensaje
 | 
RFC 7519
 | 
Previene ataques de repetici&oacute;n (*replay*).
 |  |
| 
**Claim **`aud`** / **`iss`** / **`exp`
 | 
Obligatorios
 | 
RFC 7519
 | 
Control de destinatario, emisor y vigencia (&le; 5 min).
 |  |

## Reglas operativas de implementaci&oacute;n

- 
**Cada mensaje firmado debe incluir el encabezado JWS con **`alg`**, **`kid`** y, cuando corresponda, **`x5c`**.**

- 
**El receptor debe validar la firma digital** contra el JWKS del emisor (publicado en el Directorio de Participantes).

- 
**Las firmas deben realizarse siempre antes de cualquier cifrado**; los mensajes cifrados llevan estructura `JWE(JWS(payload))`.

- 
**No se permiten algoritmos de firma sim&eacute;trica** (`HS256`, `HS512`) ni `none`.

- 
**Tokens o mensajes con firma inv&aacute;lida, caducada o con **`aud`** no coincidente deben rechazarse autom&aacute;ticamente**.

- 
**La revocaci&oacute;n o rotaci&oacute;n de claves** deber&aacute; notificarse al Directorio y sincronizarse en &le; SLA definido (5 min m&aacute;x).

- 
**Los eventos de firma y validaci&oacute;n** deben registrarse para auditor&iacute;a (timestamp, jti, resultado).

### Ejemplo de estructura JWS (modo compacto)

## Recomendaciones de operaci&oacute;n

- 
**Rotaci&oacute;n peri&oacute;dica de claves**: al menos cada 12 meses o cuando lo disponga la CMF.

- 
**Uso de Key IDs (**`kid`**) &uacute;nicos** y publicaci&oacute;n anticipada en JWKS para evitar indisponibilidad.

- 
**Sincronizaci&oacute;n autom&aacute;tica del JWKS** del Directorio con todas las entidades receptoras.

- 
**Validaci&oacute;n del **`jti`** contra registros locales** para prevenir replay attacks.

- 
**Uso de clock skew &le; 30 segundos** en la validaci&oacute;n de `exp` y `iat`.