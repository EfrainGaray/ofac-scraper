---
title: "Uso de la colección Postman – Directorio de Participantes"
id: "305627137"
version: 1
updated: "2026-04-01T18:23:07.274Z"
path: "finanzas-abiertas-chile/pruebas-pre-productivas-en-sandbox-atena/directorio-cmf/uso-de-la-coleccion-postman-directorio-de-participantes"
---
# Uso de la colección Postman – Directorio de Participantes

Esta gu&iacute;a explica **c&oacute;mo utilizar la colecci&oacute;n Postman** para interactuar con el **Directorio de Participantes de Open Finance Chile (CMF) (entorno QA)**, enfoc&aacute;ndose en la **obtenci&oacute;n del JWKS** y del **SSA (Software Statement Assertion)**.

## Prerrequisitos

- 
Acceso a la **colecci&oacute;n Postman del Directorio de Participantes (ambiente de pruebas)**

- 
Credenciales de una **Participante registrada**:

- 
`client_id`

- 
`client_secret`

- 
Un **entorno Postman** configurado para almacenar variables

- 
La instituci&oacute;n debe estar **habilitada en el Directorio (CMF)**

## Variables de entorno utilizadas

La colecci&oacute;n utiliza las siguientes variables que se van cargando autom&aacute;ticamente:

- 
`access_token` &rarr; Token OAuth2 del participante (PSBI/PSIP)

- 
`OrganisationId` &rarr; Identificador de la organizaci&oacute;n en el Directorio

- 
`SoftwareStatementId` &rarr; Identificador del Software Statement

## Paso 0 &ndash; Crear Token del Participante (PSBI/PSIP)

**Objetivo:**
Obtener un **access token OAuth2** que permita autenticarse contra las APIs privadas del Directorio.

**Qu&eacute; hace este paso:**

- 
Ejecuta el flujo **Client Credentials** contra el servidor OIDC del Directorio

- 
Genera un `access_token` asociado al PSBI/PSIP

**Endpoint:**

- 
`POST https://oidc-qa.finanzasabiertas.cl/realms/directorio/protocol/openid-connect/token`

**Par&aacute;metros principales:**

- 
`client_id`

- 
`client_secret`

- 
`grant_type=client_credentials`

- 
`scope=openid`

**Resultado:**

- 
El token se guarda autom&aacute;ticamente en la variable de entorno:

- 
`access_token`

📌 **Nota:** Este token ser&aacute; utilizado en los pasos 1, 2 y 4.

## Paso 1 &ndash; Listar Organizaciones (CMF)

**Objetivo:**
Obtener el **OrganisationId** de la instituci&oacute;n registrada en el Directorio.

**Qu&eacute; hace este paso:**

- 
Consulta el listado de organizaciones registradas

- 
Filtra organizaciones del ambiente de pruebas

**Requiere autenticaci&oacute;n:**

- 
S&iacute;, usando `Bearer {{access_token}}`

**Endpoint:**

- 
`GET https://api-qa.finanzasabiertas.cl/organisations`

**Resultado:**

- 
Se obtiene el identificador de la organizaci&oacute;n

- 
Se guarda autom&aacute;ticamente en la variable:

- 
`OrganisationId`

📌 **Importancia:**
El `OrganisationId` es obligatorio para acceder a los Software Statements, JWKS y SSA.

## Paso 2 &ndash; Listar Software Statements

**Objetivo:**
Identificar el **Software Statement** asociado a la organizaci&oacute;n.

**Qu&eacute; hace este paso:https://api-qa.finanzasabiertas.cl/**

- 
Lista los Software Statements registrados para la organizaci&oacute;n

- 
Permite identificar el cliente (PSBI/PSIP) y su configuraci&oacute;n

**Requiere autenticaci&oacute;n:**

- 
S&iacute;, usando `Bearer {{access_token}}`

**Endpoint:**

- 
`GET https://api-qa.finanzasabiertas.cl/organisations/{{OrganisationId}}/softwarestatements`

**Resultado:**

- 
Se obtiene el identificador del Software Statement

- 
Se guarda autom&aacute;ticamente en la variable:

- 
`SoftwareStatementId`

📌 **Contexto t&eacute;cnico:**
El Software Statement representa una **aplicaci&oacute;n registrada** del participante y es la base para:

- 
DCR (Dynamic Client Registration)

- 
Emisi&oacute;n del SSA

- 
Publicaci&oacute;n del JWKS

## Paso 3 &ndash; Obtener el JWKS (P&uacute;blico)

**Objetivo:**
Obtener el **JWKS (JSON Web Key Set)** del Software Statement.

**Qu&eacute; hace este paso:**

- 
Devuelve las **claves p&uacute;blicas** del PSBI/PSIP

- 
Permite a terceros validar firmas JWT

**Requiere autenticaci&oacute;n:**

- 
❌ No (endpoint p&uacute;blico)

**Endpoint:**

- 
`GET https://api-qa.finanzasabiertas.cl/public/v1/organisations/{{OrganisationId}}/softwarestatements/{{SoftwareStatementId}}/jwks`

**Resultado:**

- 
Se obtiene un documento JWKS con una o m&aacute;s claves p&uacute;blicas

📌 **Uso del JWKS:**

- 
Validaci&oacute;n de JWT firmados por el PSBI/PSIP

- 
Verificaci&oacute;n de SSA

- 
Flujos OAuth2/OpenID Connect entre participantes

## Paso 4 &ndash; Obtener el SSA (Software Statement Assertion)

**Objetivo:**
Obtener el **SSA**, que es un **JWT firmado por el Directorio**.

**Qu&eacute; hace este paso:**

- 
Genera un JWT que describe formalmente el Software Statement

- 
El JWT es firmado por el Directorio (CMF)

**Requiere autenticaci&oacute;n:**

- 
S&iacute;, usando el `access_token` del PSBI/PSIP

**Endpoint:**

- 
`GET https://api-qa.finanzasabiertas.cl/organisations/{{OrganisationId}}/softwarestatements/{{SoftwareStatementId}}/assertion`

**Resultado:**

- 
Se obtiene un **SSA en formato JWT**

📌 **Uso del SSA:**

- 
Dynamic Client Registration (DCR)

- 
Prueba de confianza entre participantes

- 
Registro de clientes OAuth2 en otros Authorization Servers

## Relaci&oacute;n entre JWKS y SSA

- 
El **SSA** es un JWT firmado

- 
El **JWKS** permite verificar la **firma criptogr&aacute;fica**

- 
Ambos son elementos fundamentales del modelo de confianza del **Open Finance Chile**

## Flujo resumido

- 
Autenticarse como PSBI/PSIP (Paso 0)

- 
Identificar la organizaci&oacute;n (Paso 1)

- 
Identificar el Software Statement (Paso 2)

- 
Obtener claves p&uacute;blicas &ndash; JWKS (Paso 3)

- 
Obtener el SSA firmado por el Directorio (Paso 4)

## Observaciones finales

- 
Este flujo es **obligatorio** para integraciones Open Finance

- 
El orden de los pasos **no debe alterarse**

- 
El SSA y el JWKS son insumos clave para OAuth2, OIDC y DCR

---

## Attachments

- 📎 [Directorio de Participantes - CMF (Pruebas - 2026).postman_collection](../attachments/uso-de-la-coleccion-postman-directorio-de-participantes/Directorio%20de%20Participantes%20-%20CMF%20(Pruebas%20-%202026).postman_collection) (16 KB)
- 📎 [Directorio de Participantes - CMF (Pruebas - 2026)(1).postman_collection](../attachments/uso-de-la-coleccion-postman-directorio-de-participantes/Directorio%20de%20Participantes%20-%20CMF%20(Pruebas%20-%202026)(1).postman_collection) (16 KB)
- 📄 [Guia_Registro_Participante_OpenFinance_Chile.pdf](../attachments/uso-de-la-coleccion-postman-directorio-de-participantes/Guia_Registro_Participante_OpenFinance_Chile.pdf) (295 KB)
- 📎 [Directorio de Participantes - CMF (Pruebas - Banco de Pruebas).postman_collection.json](../attachments/uso-de-la-coleccion-postman-directorio-de-participantes/Directorio%20de%20Participantes%20-%20CMF%20(Pruebas%20-%20Banco%20de%20Pruebas).postman_collection.json) (16 KB)
