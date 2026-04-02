---
title: "v1.0.0 - Información general - Confirmación de Fondos"
id: "124487659"
version: 1
updated: "2025-12-30T14:08:55.700Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/confirmacion-de-fondos-open-finance-chile-v1-0-0/v1-0-0-informacion-general-confirmacion-de-fondos"
---
# v1.0.0 - Información general - Confirmación de Fondos

# Confirmaci&oacute;n de Fondos - Crear pago - Persona Natural: (POST  /founds-confirmation/v1/PN/founds-confirmation)

Crear una **orden de confirmaci&oacute;n de fondos para persona natural**. Se recibe la solicitud para validar la disponibilidad de fondos de un Usuario Final antes de realizar una transacci&oacute;n.

## Especificaci&oacute;n y diccionarios de datos

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de confirmaci&oacute;n de fondos**, lo que facilita su comprensi&oacute;n.
![Founds_Confirmation_Diagrama UML_ request_ PN.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Founds_Confirmation_Diagrama%20UML_%20request_%20PN.png)
### **Request &mdash; Confirmaci&oacute;n de Fondos &mdash; Persona Natural (PN)**

| 
**Name**
 | 
**Glosa Field Name**
 | 
**ISO20022 Type**
 | 
**JSON Data Type**
 | 
**Cardinalidad**
 | 
**Mandatory**
 | 
**Ejemplo**
 | 
**Observaciones**
 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
fundsConfirmationRequest
 | 
Objeto global
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Ra&iacute;z de la solicitud
 |  |
| 
data
 | 
Objeto data
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Contenedor del payload
 |  |
| 
confirmation
 | 
Arreglo de confirmaciones
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Una confirmaci&oacute;n por request
 |  |
| 
grantId
 | 
Identificador del consentimiento
 | 
&ndash;
 | 
string (uuid)
 | 
1..1
 | 
S&iacute;
 | 
3f7c9e9c-&hellip;
 | 
ID del consentimiento vigente
 |  |
| 
transactionType
 | 
Tipo de transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
FUNDS_CONFIRMATION
 | 
Fijo para este uso
 |  |
| 
debtorInstitutionId
 | 
Instituci&oacute;n Financiera del ordenante
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
14
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
debtorAccountNumber
 | 
N&ordm; de cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
123456789
 | 
Cuenta a consultar
 |  |
| 
debtorAccountType
 | 
Tipo de cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CHECKING
 | 
CHECKING,SAVINGS,VISTA,RUT
 |  |
| 
debtorName
 | 
Nombre del ordenante
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
JUAN P&Eacute;REZ
 | 
Persona Natural
 |  |
| 
debtorIdentification
 | 
RUN del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
12.345.678-9
 | 
RUN/DNI/Pasaporte
 |  |
| 
amount
 | 
Monto a confirmar
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
150000
 | 
Monto bruto solicitado
 |  |
| 
currency
 | 
Moneda
 | 
ActiveOrHistoricCurrencyCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CLP
 | 
ISO 4217
 |  |
| 
holdRequest
 | 
Solicitar retenci&oacute;n
 | 
&ndash;
 | 
boolean
 | 
0..1
 | 
No
 | 
false
 | 
Si true, se solicita retener el monto por T segundos
 |  |
| 
holdTimeSeconds
 | 
Tiempo de retenci&oacute;n
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
120
 | 
Obligatorio si holdRequest=true
 |  |
| 
remittanceInformation
 | 
Motivo/uso previsto
 | 
Max140Text
 | 
string
 | 
0..1
 | 
No
 | 
Pre-autorizaci&oacute;n pago
 | 
Trazabilidad/anal&iacute;tica
 |  |
| 
requestDateTime
 | 
Fecha/hora de la solicitud
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-03T10:30:00Z
 | 
Marca de tiempo del PSIP
 |  |

### Ejemplo de petici&oacute;n 

### **Response &mdash; Confirmaci&oacute;n de Fondos &mdash; Persona Natural (PN)**

| 
**Name**
 | 
**Glosa Field Name**
 | 
**ISO20022 Type**
 | 
**JSON Data Type**
 | 
**Cardinalidad**
 | 
**Mandatory**
 | 
**Ejemplo**
 | 
**Observaciones**
 |  |
| 
fundsConfirmationResponse
 | 
Objeto global
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Ra&iacute;z de respuesta
 |  |
| 
data
 | 
Objeto data
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Contenedor del resultado
 |  |
| 
confirmation
 | 
Arreglo de confirmaciones
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Un resultado por solicitud
 |  |
| 
grantId
 | 
ID consentimiento
 | 
&ndash;
 | 
string (uuid)
 | 
1..1
 | 
S&iacute;
 | 
3f7c9e9c-&hellip;
 | 
R&eacute;plica del request
 |  |
| 
debtorInstitutionId
 | 
Instituci&oacute;n Financiera del ordenante
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
14
 | 
&ndash;
 |  |
| 
debtorAccountNumber
 | 
N&ordm; cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
123456789
 | 
&ndash;
 |  |
| 
debtorAccountType
 | 
Tipo cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CHECKING
 | 
&ndash;
 |  |
| 
debtorName
 | 
Nombre del ordenante
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
JUAN P&Eacute;REZ
 | 
&ndash;
 |  |
| 
debtorIdentification
 | 
RUN del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
12.345.678-9
 | 
&ndash;
 |  |
| 
amount
 | 
Monto solicitado
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
150000
 | 
&ndash;
 |  |
| 
currency
 | 
Moneda
 | 
ActiveOrHistoricCurrencyCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CLP
 | 
&ndash;
 |  |
| 
fundsAvailable
 | 
Fondos suficientes
 | 
Max5Text
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
YES
 | 
YES/NO
 |  |
| 
asOfDateTime
 | 
Fecha/hora del saldo
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-03T10:30:05Z
 | 
Instante de evaluaci&oacute;n
 |  |
| 
holdExecuted
 | 
Retenci&oacute;n aplicada
 | 
&ndash;
 | 
boolean
 | 
0..1
 | 
No
 | 
false
 | 
true si se retuvo por holdTimeSeconds
 |  |
| 
holdReference
 | 
Referencia de retenci&oacute;n
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
HOLD-2025-0001
 | 
Presente si holdExecuted=true
 |  |
| 
status
 | 
Estado de la operaci&oacute;n
 | 
Max35Text
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
COMPLETED
 | 
COMPLETED, REJECTED, ERROR
 |  |
| 
statusReason/code
 | 
C&oacute;digo motivo
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
OK
 | 
Cat&aacute;logo: OK, INSUFFICIENT_FUNDS, CONSENT_EXPIRED, ACCOUNT_BLOCKED, TECH_ERROR, AML_CHECK
 |  |

**Ejemplo de respuesta**

# Confirmaci&oacute;n de Fondos - Crear pago - Persona Jur&iacute;dica: (POST  /founds-confirmation/v1/PJ/founds-confirmation)

 Crear una **orden de confirmaci&oacute;n de fondos para persona jur&iacute;dica**. Se recibe la solicitud para validar la disponibilidad de fondos de un Usuario Final antes de realizar una transacci&oacute;n.

## Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de confirmaci&oacute;n de fondos**, lo que facilita su comprensi&oacute;n.
![Founds_Confirmation_Diagrama UML_ request_ PJ.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Founds_Confirmation_Diagrama%20UML_%20request_%20PJ.png)

### **Request &mdash; Confirmaci&oacute;n de Fondos &mdash; Persona Juridica (PJ)**

| 
**Name**
 | 
**Glosa Field Name**
 | 
**ISO20022 Type**
 | 
**JSON Data Type**
 | 
**Cardinalidad**
 | 
**Mandatory**
 | 
**Ejemplo**
 | 
**Observaciones**
 |  |
| 
fundsConfirmationRequest
 | 
Objeto global
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Ra&iacute;z de la solicitud
 |  |
| 
data
 | 
Objeto data
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Contenedor
 |  |
| 
confirmation
 | 
Arreglo de confirmaciones
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Una confirmaci&oacute;n por request
 |  |
| 
grantId
 | 
Identificador del consentimiento
 | 
&ndash;
 | 
string (uuid)
 | 
1..1
 | 
S&iacute;
 | 
3f7c9e9c-&hellip;
 | 
&ndash;
 |  |
| 
transactionType
 | 
Tipo de transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
FUNDS_CONFIRMATION
 | 
&ndash;
 |  |
| 
debtorInstitutionId
 | 
Instituci&oacute;n Financiera del ordenante
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
14
 | 
&ndash;
 |  |
| 
debtorAccountNumber
 | 
N&ordm; cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
123456789
 | 
&ndash;
 |  |
| 
debtorAccountType
 | 
Tipo de cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CHECKING
 | 
&ndash;
 |  |
| 
debtorName
 | 
Raz&oacute;n social del ordenante
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
EMPRESA ABC S.A.
 | 
Persona Jur&iacute;dica
 |  |
| 
debtorIdentification
 | 
RUT del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
76.123.456-7
 | 
RUT con DV
 |  |
| 
debtorRepresentativeId
 | 
RUN apoderado
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
9.876.543-2
 | 
Requerido si el mandato lo exige
 |  |
| 
debtorRepresentativeRole
 | 
Rol apoderado
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
APODERADO
 | 
APODERADO/GERENTE/FIRMA A
 |  |
| 
amount
 | 
Monto a confirmar
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
5000000
 | 
&ndash;
 |  |
| 
currency
 | 
Moneda
 | 
ActiveOrHistoricCurrencyCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CLP
 | 
&ndash;
 |  |
| 
holdRequest
 | 
Solicitar retenci&oacute;n
 | 
&ndash;
 | 
boolean
 | 
0..1
 | 
No
 | 
true
 | 
Si se desea bloquear cupo
 |  |
| 
holdTimeSeconds
 | 
Tiempo de retenci&oacute;n
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
300
 | 
Obligatorio si holdRequest=true
 |  |
| 
purporemittanceInformationse
 | 
Motivo/uso previsto
 | 
Max140Text
 | 
string
 | 
0..1
 | 
No
 | 
Pre-autorizaci&oacute;n n&oacute;mina
 | 
&ndash;
 |  |
| 
requestDateTime
 | 
Fecha/hora de la solicitud
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-03T10:30:00Z
 | 
&ndash;
 |  |

### Ejemplo de petici&oacute;n 

### **Response &mdash; Confirmaci&oacute;n de Fondos &mdash; Persona Jur&iacute;dica (PJ)**

| 
**Name**
 | 
**Glosa Field Name**
 | 
**ISO20022 Type**
 | 
**JSON Data Type**
 | 
**Cardinalidad**
 | 
**Mandatory**
 | 
**Ejemplo**
 | 
**Observaciones**
 |  |
| 
fundsConfirmationRequest
 | 
Objeto global
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Ra&iacute;z de la solicitud
 |  |
| 
data
 | 
Objeto data
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Contenedor
 |  |
| 
confirmation
 | 
Arreglo de confirmaciones
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
&ndash;
 | 
Una confirmaci&oacute;n por request
 |  |
| 
grantId
 | 
Identificador del consentimiento
 | 
&ndash;
 | 
string (uuid)
 | 
1..1
 | 
S&iacute;
 | 
3f7c9e9c-&hellip;
 | 
&ndash;
 |  |
| 
transactionType
 | 
Tipo de transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
FUNDS_CONFIRMATION
 | 
&ndash;
 |  |
| 
debtorInstitutionId
 | 
Instituci&oacute;n Financiera del ordenante
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
14
 | 
&ndash;
 |  |
| 
debtorAccountNumber
 | 
N&ordm; cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
123456789
 | 
&ndash;
 |  |
| 
debtorAccountType
 | 
Tipo de cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CHECKING
 | 
&ndash;
 |  |
| 
debtorName
 | 
Raz&oacute;n social del ordenante
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
EMPRESA ABC S.A.
 | 
Persona Jur&iacute;dica
 |  |
| 
debtorIdentification
 | 
RUT del ordenante
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
76.123.456-7
 | 
RUT con DV
 |  |
| 
debtorRepresentativeId
 | 
RUN apoderado
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
9.876.543-2
 | 
Requerido si el mandato lo exige
 |  |
| 
debtorRepresentativeRole
 | 
Rol apoderado
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
APODERADO
 | 
APODERADO/GERENTE/FIRMA A
 |  |
| 
amount
 | 
Monto a confirmar
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
5000000
 | 
&ndash;
 |  |
| 
currency
 | 
Moneda
 | 
ActiveOrHistoricCurrencyCode
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
CLP
 | 
&ndash;
 |  |
| 
holdRequest
 | 
Solicitar retenci&oacute;n
 | 
&ndash;
 | 
boolean
 | 
0..1
 | 
No
 | 
true
 | 
Si se desea bloquear cupo
 |  |
| 
holdTimeSeconds
 | 
Tiempo de retenci&oacute;n
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
300
 | 
Obligatorio si holdRequest=true
 |  |
| 
remittanceInformation
 | 
Motivo/uso previsto
 | 
Max140Text
 | 
string
 | 
0..1
 | 
No
 | 
Pre-autorizaci&oacute;n n&oacute;mina
 | 
&ndash;
 |  |
| 
requestDateTime
 | 
Fecha/hora de la solicitud
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-03T10:30:00Z
 | 
&ndash;
 |  |

**Ejemplo de respuesta**

---

## Attachments

- 🖼️ [UML Diagram - loans.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/UML%20Diagram%20-%20loans.png) (55 KB)
- 🖼️ [UML Diagram - Payments.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/UML%20Diagram%20-%20Payments.png) (83 KB)
- 📊 [Payments v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Payments%20v1.0.0.xlsx) (36 KB)
- 🖼️ [AD_PN_ Request.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/AD_PN_%20Request.png) (17 KB)
- 🖼️ [Request_PN_ Request.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Request_PN_%20Request.png) (25 KB)
- 📊 [Payments-ID v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Payments-ID%20v1.0.0.xlsx) (42 KB)
- 🖼️ [Request_PJ_ API.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Request_PJ_%20API.png) (26 KB)
- 🖼️ [Authorization Details _PN_ Request.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Authorization%20Details%20_PN_%20Request.png) (18 KB)
- 🖼️ [Founds_Confirmation_Diagrama UML_ request_ PN.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Founds_Confirmation_Diagrama%20UML_%20request_%20PN.png) (12 KB)
- 🖼️ [Authorization_details_PJ_ Request.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Authorization_details_PJ_%20Request.png) (21 KB)
- 🖼️ [Founds_Confirmation_Diagrama UML_ request_ PJ.png](../attachments/v1-0-0-informacion-general-confirmacion-de-fondos/Founds_Confirmation_Diagrama%20UML_%20request_%20PJ.png) (13 KB)
