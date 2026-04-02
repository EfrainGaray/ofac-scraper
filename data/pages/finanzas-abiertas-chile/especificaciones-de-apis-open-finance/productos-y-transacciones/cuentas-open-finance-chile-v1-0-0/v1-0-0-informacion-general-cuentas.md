---
title: "v1.0.0 - Información general - Cuentas"
id: "124486442"
version: 1
updated: "2026-04-01T14:30:03.092Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/cuentas-open-finance-chile-v1-0-0/v1-0-0-informacion-general-cuentas"
---
# v1.0.0 - Información general - Cuentas

## Cuentas : (GET /accounts/v1/accounts)

### Descripci&oacute;n

Devuelve todas las cuentas (corriente, ahorro, vista, prepago) asociadas al cliente que otorg&oacute; consentimiento.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Accounts Response All.png](../attachments/v1-0-0-informacion-general-cuentas/UML%20Diagram%20-%20Accounts%20Response%20All.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Cuentas : (GET /accounts/v1/accounts/{accountID})

Consulta la cuenta bancaria de un cliente mediante el par&aacute;metro accountID, asociado al consentimiento otorgado por el cliente y la instituci&oacute;n financiera.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Accounts Response All.png](../attachments/v1-0-0-informacion-general-cuentas/UML%20Diagram%20-%20Accounts%20Response%20All.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Balance de Cuenta : (GET /accounts/{accountID}/balance)

Devuelve los *saldos vigentes* de la cuenta identificada por **accountID**.  
Incluye el saldo contable, el saldo disponible y, cuando aplique, los montos bloqueados o pendientes.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Account Balance Response.png](../attachments/v1-0-0-informacion-general-cuentas/UML%20Diagram%20-%20Account%20Balance%20Response.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## L&iacute;mite de Sobregiro Actual : (GET /accounts/{accountID}/current-overdraft-limit

Devuelve el **l&iacute;mite de sobregiro vigente** de la cuenta identificada por *accountID*, as&iacute; como el monto actualmente utilizado (si lo hubiera).

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Current Overdraft Limit Response.png](../attachments/v1-0-0-informacion-general-cuentas/UML%20Diagram%20-%20Current%20Overdraft%20Limit%20Response.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Sobregiro de Cuenta : (GET /accounts/v1/accounts/{accountID}/overdraft)

Devuelve el **hist&oacute;rico de movimientos de sobregiro** asociados a la cuenta identificada por *accountID*.  
Un **PSBI** puede usar esta informaci&oacute;n para mostrar al cliente cu&aacute;nto ha utilizado de su l&iacute;nea de sobregiro y en qu&eacute; fechas.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Overdraft Limits Response.png](../attachments/v1-0-0-informacion-general-cuentas/UML%20Diagram%20-%20Overdraft%20Limits%20Response.png)

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Petici&oacute;n HTTP

## Transacciones : (GET /accounts/v1/accounts/{accountID}/transactions)

Devuelve el **hist&oacute;rico de transacciones** (cr&eacute;ditos y d&eacute;bitos) de la cuenta identificada por *accountID*.  
Usado por un **PSBI** para mostrar al cliente el detalle de sus movimientos, filtrar por fechas o conciliar gastos.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Transacctions Response.png](../attachments/v1-0-0-informacion-general-cuentas/UML%20Diagram%20-%20Transacctions%20Response.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta