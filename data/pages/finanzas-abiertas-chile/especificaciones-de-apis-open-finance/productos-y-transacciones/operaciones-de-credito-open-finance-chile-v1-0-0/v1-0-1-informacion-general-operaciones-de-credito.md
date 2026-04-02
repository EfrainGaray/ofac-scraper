---
title: "v1.0.1 - Información general - Operaciones de crédito"
id: "124486745"
version: 1
updated: "2025-12-30T14:08:38.791Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/operaciones-de-credito-open-finance-chile-v1-0-0/v1-0-1-informacion-general-operaciones-de-credito"
---
# v1.0.1 - Información general - Operaciones de crédito

## Operaciones de Cr&eacute;dito - Cr&eacute;ditos: (GET /loans/v1/loans)

Lista todas las **operaciones de cr&eacute;dito** (pr&eacute;stamos comerciales, hipotecarios, de consumo, etc.) asociadas al cliente.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - loans.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20loans.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Operaciones de Cr&eacute;dito - Identificaci&oacute;n del cr&eacute;dito: (GET /loans/v1/loans/{loanID})

Devuelve la **informaci&oacute;n completa** de la operaci&oacute;n de cr&eacute;dito identificada por *loanID*

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - loans.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20loans.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Operaciones de Cr&eacute;dito - Saldo: (GET /loans/{loanID}/balance)

Entrega el **saldo contable** de la operaci&oacute;n, incluyendo capital, intereses, mora y pagos aplicados.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - loans.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20loans.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Operaciones de Cr&eacute;dito - Movimientos actuales: (GET /loans/{loanID}/current-transactions)

Devuelve los **movimientos recientes** asociados a la operaci&oacute;n: abonos de cuota, cargos por intereses, comisiones, etc.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - transactions.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20transactions.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

---

## Attachments

- 🖼️ [UML Diagram - Credit Card Accounts.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20Credit%20Card%20Accounts.png) (42 KB)
- 🖼️ [UML Diagram - loans.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20loans.png) (55 KB)
- 🖼️ [UML Diagram - transactions.png](../attachments/v1-0-1-informacion-general-operaciones-de-credito/UML%20Diagram%20-%20transactions.png) (45 KB)
- 📊 [Loans-v1.0.xlsx](../attachments/v1-0-1-informacion-general-operaciones-de-credito/Loans-v1.0.xlsx) (96 KB)
- 📊 [Loans-ID-v1.0.xlsx](../attachments/v1-0-1-informacion-general-operaciones-de-credito/Loans-ID-v1.0.xlsx) (94 KB)
- 📊 [Loans-ID-Transactions v1.0.xlsx](../attachments/v1-0-1-informacion-general-operaciones-de-credito/Loans-ID-Transactions%20v1.0.xlsx) (78 KB)
- 📊 [Loans-ID-Balances v1.0.xlsx](../attachments/v1-0-1-informacion-general-operaciones-de-credito/Loans-ID-Balances%20v1.0.xlsx) (81 KB)
