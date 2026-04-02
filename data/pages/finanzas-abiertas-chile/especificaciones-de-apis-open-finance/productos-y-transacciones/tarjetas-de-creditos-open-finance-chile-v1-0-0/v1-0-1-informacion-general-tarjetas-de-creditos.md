---
title: "v1.0.1 - Información general - Tarjetas de Créditos"
id: "124486634"
version: 1
updated: "2025-12-30T14:08:36.506Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/tarjetas-de-creditos-open-finance-chile-v1-0-0/v1-0-1-informacion-general-tarjetas-de-creditos"
---
# v1.0.1 - Información general - Tarjetas de Créditos

## Tarjetas de Cr&eacute;ditos - Cuentas: (GET /credit-card-accounts/v1/accounts)

Lista todas las **cuentas de tarjeta de cr&eacute;dito** asociadas al cliente bajo el consentimiento vigente.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Credit Card Accounts.png](../attachments/v1-0-1-informacion-general-tarjetas-de-creditos/UML%20Diagram%20-%20Credit%20Card%20Accounts.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Tarjetas de Cr&eacute;ditos - Identificaci&oacute;n de Cuentas: (GET /accounts/{creditCardAccountID})

Devuelve los **detalles completos** de la cuenta de tarjeta de cr&eacute;dito identificada por *creditCardAccountID*.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Credit Card AccountID.png](../attachments/v1-0-1-informacion-general-tarjetas-de-creditos/UML%20Diagram%20-%20Credit%20Card%20AccountID.png)
### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Tarjetas de Cr&eacute;ditos - Saldo: (GET accounts/{creditCardAccountID}/balance)

Devuelve el **balance de cierre** (estado de cuenta) de la tarjeta.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Balance.png](../attachments/v1-0-1-informacion-general-tarjetas-de-creditos/UML%20Diagram%20-%20Balance.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Tarjetas de Cr&eacute;ditos - Saldo Actual: (GET /accounts/{creditCardAccountID}/current-balance)

Devuelve el **balance de cierre** (estado de cuenta) de la tarjeta.

### Especificaci&oacute;n

Entrega el **saldo actualizado al momento de la consulta**, considerando consumos recientes a&uacute;n no facturados.
![UML Diagram - Current Balance.png](../attachments/v1-0-1-informacion-general-tarjetas-de-creditos/UML%20Diagram%20-%20Current%20Balance.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Tarjetas de Cr&eacute;ditos - l&iacute;mite: (GET /accounts/{creditCardAccountID}/limit)

Devuelve los **l&iacute;mites de cr&eacute;dito** aprobados, la l&iacute;nea disponible y la vigencia de la l&iacute;nea.

### Especificaci&oacute;n

Entrega el **saldo actualizado al momento de la consulta**, considerando consumos recientes a&uacute;n no facturados.
![UML Diagram - Limit.png](../attachments/v1-0-1-informacion-general-tarjetas-de-creditos/UML%20Diagram%20-%20Limit.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Tarjetas de Cr&eacute;ditos - Historial Transaccional: (GET /accounts/{creditCardAccountID}/transactions)

Devuelve las **transacciones** realizadas con la tarjeta (hasta los &uacute;ltimos 12 meses).

### Especificaci&oacute;n

Entrega el **saldo actualizado al momento de la consulta**, considerando consumos recientes a&uacute;n no facturados.
![UML Diagram - Transactions.png](../attachments/v1-0-1-informacion-general-tarjetas-de-creditos/UML%20Diagram%20-%20Transactions.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta