---
title: "v1.0.1 - Información general - Instrumentos de inversión"
id: "124487072"
version: 1
updated: "2025-12-30T14:08:44.436Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/productos-y-transacciones/instrumentos-de-inversion-open-finan-chile-v1-0-0/v1-0-1-informacion-general-instrumentos-de-inversion"
---
# v1.0.1 - Información general - Instrumentos de inversión

## Instrumentos de inversi&oacute;n - Inversiones : (GET /investments/v1/investments)

Lista todas las **inversiones** (dep&oacute;sitos a plazo, fondos mutuos, acciones, etc.) asociadas al cliente.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Investments.png](../attachments/v1-0-1-informacion-general-instrumentos-de-inversion/UML%20Diagram%20-%20Investments.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Instrumentos de inversi&oacute;n - Identificaci&oacute;n de la inversi&oacute;n : (GET /investments/v1/investments/{investmentID})

Devuelve el **detalle completo** del instrumento de inversi&oacute;n identificado por *investmentID*.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Insurances-ID.png](../attachments/v1-0-1-informacion-general-instrumentos-de-inversion/UML%20Diagram%20-%20Insurances-ID.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Instrumentos de inversi&oacute;n - Balance: (GET /investments/v1/investments/balance)

Entrega el **saldo actualizado** y el hist&oacute;rico de balances del instrumento.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Balance.png](../attachments/v1-0-1-informacion-general-instrumentos-de-inversion/UML%20Diagram%20-%20Balance.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta

## Instrumentos de inversi&oacute;n - Transacciones: (GET /investments/{investmentID}/transactions)

Lista las **transacciones** (aportes, rescates, valorizaciones) del instrumento.

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Transactions.png](../attachments/v1-0-1-informacion-general-instrumentos-de-inversion/UML%20Diagram%20-%20Transactions.png)
 

### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

### Ejemplo de uso

#### Petici&oacute;n HTTP

#### Respuesta