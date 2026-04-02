---
title: "v1.0.0 - Información general - Iniciación de Pagos Único Inmediato"
id: "123437640"
version: 1
updated: "2025-12-30T20:03:49.170Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-unico-inmediato-open-finance-chile-v1-0-0/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato"
---
# v1.0.0 - Información general - Iniciación de Pagos Único Inmediato

# Iniciaci&oacute;n de Pagos &Uacute;nico Inmediato - Crear pago - Persona Natural: (POST  /single-payments/v1/PN/single-payments)

Crear una **orden de pago para persona natural**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n y diccionarios de datos

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **authorization_details**, lo que facilita su comprensi&oacute;n.

![Authorization Details _PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Authorization%20Details%20_PN_%20Request.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago**, lo que facilita su comprensi&oacute;n.

![Request_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Request_PN_%20Request.png)

### Authorization Details &mdash; Pago &Uacute;nico Inmediato &mdash; Persona Natural (PN)

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
type
 | 
Tipo de autorizaci&oacute;n
 | 
Max40Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
single-immediate-payment
 | 
Tipo fijo para pago &uacute;nico inmediato
 |  |
| 
actions
 | 
Acciones solicitadas
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["CreateSingleImmediatePayment"]
 | 
Acci&oacute;n permitida
 |  |
| 
locations
 | 
Ubicaciones/endpoints
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["/v1/PN/single-payments"]
 | 
Endpoint expuesto para PN
 |  |
| 
identifier
 | 
Identificador de recurso
 | 
Max40Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-00000123
 | 
Opcional (plantilla/orden)
 |  |
| 
privileges
 | 
Niveles / scopes
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["Level1"]
 | 
Nivel de privilegio requerido
 |  |
| 
instruction
 | 
Instrucci&oacute;n de pago
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
N&uacute;cleo operativo de la orden
 |  |
| 
amount
 | 
Caracter&iacute;sticas del monto
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
Monto del pago
 |  |
| 
amount.currency
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
amount.value
 | 
Monto
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
string (decimal)
 | 
1..1
 | 
S&iacute;
 | 
150000.00
 | 
Decimal como string
 |  |
| 
requestedExecutionDateTime
 | 
Fecha/hora solicitada
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T15:00:00Z
 | 
Ejecuci&oacute;n inmediata (UTC ISO 8601)
 |  |
| 
endToEndId
 | 
Identificador punta-a-punta
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-00000123
 | 
Conciliaci&oacute;n
 |  |
| 
purpose
 | 
Motivo
 | 
Max300Text
 | 
string
 | 
0..1
 | 
Si
 | 
Pago de servicios
 | 
Descripci&oacute;n de uso
 |  |
| 
cutoffProfile
 | 
Perfil de corte
 | 
Max35Text
 | 
string (enum)
 | 
0..1
 | 
No
 | 
REGULAR_DAY
 | 
Ventanillas / feriados
 |  |
| 
parties
 | 
Partes de la operaci&oacute;n
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
Deudor y beneficiario
 |  |
| 
debtor
 | 
Datos del ordenante
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
Persona Natural
 |  |
| 
debtor.institutionId
 | 
Instituci&oacute;n financiera del ordenante
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
debtor.name
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
Persona Natural o Jur&iacute;dica
 |  |
| 
debtor.identification
 | 
Identificaci&oacute;n del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
12.345.678-9
 | 
Opcional. Si no se informa, el Usuario Final seleccionar&aacute; la cuenta de cargo en la interfaz de la Instituci&oacute;n Financiera durante la autorizaci&oacute;n. Si se informa, la Instituci&oacute;n Financiera debe validar que la cuenta pertenece al Usuario Final y es elegible para el pago. 
 |  |
| 
debtor.accountType
 | 
Tipo de cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
0..1
 | 
Opcional
 | 
CHECKING
 |  |
| 
debtor.accountNumber
 | 
N&ordm; cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
123456789
 |  |
| 
creditor
 | 
Datos del beneficiario
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
&ndash;
 |  |
| 
creditor.institutionId
 | 
Instituci&oacute;n financiera del beneficiario
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
creditor.name
 | 
Nombre/Raz&oacute;n social del beneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
ROBERTO PONCE
 | 
Destinatario final de los fondos
 |  |
| 
creditor.identification
 | 
Identificaci&oacute;n del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
11.222.333-4
 | 
RUT
 |  |
| 
creditor.accountType
 | 
Tipo de cuenta del beneficiario
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
Enum
 |  |
| 
creditor.accountNumber
 | 
N&ordm; cuenta del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
9876543210
 | 
&ndash;
 |  |

### Ejemplo de petici&oacute;n 

 

### **Request &mdash; Pago &Uacute;nico Inmediato &mdash; Persona Natural (PN)**

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
paymentsRequest
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
payments
 | 
Array de pagos
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
Solo un pago inmediato
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
8e65e3e5-2d5b&hellip;
 | 
Vincula con Authorization Details
 |  |
| 
transactionType
 | 
Tipo de Transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
TEF_SINGLE_IMMEDIATE
 | 
Enum para pago inmediato
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
Persona Natural o Jur&iacute;dica
 |  |
| 
debtorAccountNumber
 | 
N&deg; de Cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
123456789
 | 
Opcional. Si el PSIP no dispone de esta informaci&oacute;n debido a que el usuario realiz&oacute; la elecci&oacute;n de la cuenta en la interfaz de la entidad financiera, el PSIP deber&aacute; ejecutar el pago con la cuenta que fue elegido al momento de autorizar el consentimiento. 
 |  |
| 
debtorAccountType
 | 
Tipo de Cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
0..1
 | 
Opcional
 | 
CHECKING
 |  |
| 
debtorIdentification
 | 
Identificaci&oacute;n del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
12.345.678-9
 |  |
| 
creditorInstitutionId
 | 
Instituci&oacute;n Financiera del beneficiario
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
creditorAccountNumber
 | 
N&ordm; cuenta del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
9876543210
 | 
Cuenta destino
 |  |
| 
creditorAccountType
 | 
Tipo de cuenta del beneficiario
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
Enum
 |  |
| 
creditorName
 | 
Nombre del beneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
ROBERTO PONCE
 | 
Destinatario final de los fondos
 |  |
| 
creditorIdentification
 | 
Identificaci&oacute;n del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
11.222.333-4
 | 
RUN/RUT/ID
 |  |
| 
amount
 | 
Monto de la transferencia
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
Valor de la operaci&oacute;n
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
requestedExecutionDateTime
 | 
Fecha/hora solicitada
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T15:00:00Z
 | 
Ejecuci&oacute;n inmediata
 |  |
| 
executionWindow
 | 
Ventana de ejecuci&oacute;n
 | 
&ndash;
 | 
object
 | 
0..1
 | 
No
 | 
{from,to}
 | 
Rango opcional
 |  |
| 
endToEndId
 | 
Identificador punta-a-punta
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-00000123
 | 
Conciliaci&oacute;n
 |  |
| 
remittanceInformation
 | 
Motivo del pago
 | 
Max300Text
 | 
string
 | 
1..1
 | 
No
 | 
Pago de servicios
 | 
Descripci&oacute;n
 |  |
| 
requestDateTime
 | 
Fecha/hora instrucci&oacute;n
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

### **Response &mdash; Pago &Uacute;nico Inmediato &mdash; Persona Natural (PN)**

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
paymentsResponse
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
Objeto ra&iacute;z de la respuesta
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
Contenedor de la informaci&oacute;n de pagos
 |  |
| 
payments
 | 
Arreglo de pagos
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
Solo un pago inmediato en este caso de uso
 |  |
| 
paymentId
 | 
Identificador del pago
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
PAY-20250001
 | 
ID generado por IPI/IPC para rastrear la orden
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
8e65e3e5-2d5b&hellip;
 | 
Eco del consentimiento utilizado
 |  |
| 
creationDateTime
 | 
Fecha creaci&oacute;n de la iniciaci&oacute;n
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
Alta de la orden
 |  |
| 
statusUpdateDateTime
 | 
Fecha de actualizaci&oacute;n de estado
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
&Uacute;ltima actualizaci&oacute;n del estado
 |  |
| 
requestedExecutionDateTime
 | 
Fecha/Hora solicitada de ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T15:00:00Z
 | 
R&eacute;plica de la fecha solicitada
 |  |
| 
expectedExecutionDateTime
 | 
Fecha estimada de ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
0..1
 | 
No
 | 
2025-11-15T15:00:05Z
 | 
Estimaci&oacute;n operativa
 |  |
| 
expectedSettlementDateTime
 | 
Fecha estimada de liquidaci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
0..1
 | 
No
 | 
2025-11-15T15:10:00Z
 | 
Estimaci&oacute;n de compensaci&oacute;n/liquidaci&oacute;n
 |  |
| 
paymentStatus
 | 
Estado del pago
 | 
Max35Text
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
EXECUTED
 | 
Enum: RECEIVED, PENDING_APPROVAL, EXECUTED, REJECTED, CANCELLED, EXPIRED
 |  |
| 
transactionType
 | 
Tipo de Transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
TEF_SINGLE_IMMEDIATE
 | 
Naturaleza de la operaci&oacute;n
 |  |
| 
endToEndId
 | 
Identificador punta-a-punta
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-000000123
 | 
Para conciliaci&oacute;n entre instituciones
 |  |
| 
bankTrackingId
 | 
ID de seguimiento bancario
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
BNK-ABC-9991
 | 
Identificador interno de IPI/IPC (si aplica)
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
Persona Natural o Jur&iacute;dica
 |  |
| 
debtorAccountNumber
 | 
N&deg; de Cuenta del ordenante
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
PN
 |  |
| 
debtorAccountType
 | 
Tipo de Cuenta del ordenante
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
Tipo de cuenta
 |  |
| 
debtorIdentification
 | 
Identificaci&oacute;n del ordenante
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
RUN/RUT o documento extranjero
 |  |
| 
creditorInstitutionId
 | 
Instituci&oacute;n Financiera del beneficiario
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
creditorAccountNumber
 | 
N&deg; de Cuenta del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
9876543210
 | 
Cuenta destino
 |  |
| 
creditorAccountType
 | 
Tipo de Cuenta del beneficiario
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
Enum
 |  |
| 
creditorName
 | 
Nombre del beneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
ROBERTO PONCE
 | 
Destinatario final de los fondos
 |  |
| 
creditorIdentification
 | 
Identificaci&oacute;n del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
11.222.333-4
 | 
RUT o documento v&aacute;lido
 |  |
| 
amount
 | 
Monto de la transferencia
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
Valor de la operaci&oacute;n
 |  |
| 
currency
 | 
Moneda de la transferencia
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
remittanceInformation
 | 
Motivo/Descripci&oacute;n
 | 
Max300Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Pago de servicios
 | 
R&eacute;plica del motivo informado en el request
 |  |

**Ejemplo de respuesta**

# Iniciaci&oacute;n de Pagos &Uacute;nico Inmediato - Crear pago - Persona Jur&iacute;dica: (POST  /single-payments/v1/PJ/single-payments)

 Crear una **orden de pago para persona jur&iacute;dica**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje del **authorization_details**, lo que facilita su comprensi&oacute;n.
![Authorization_details_PJ_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Authorization_details_PJ_%20Request.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago**, lo que facilita su comprensi&oacute;n.

![Request_PJ_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Request_PJ_%20Request.png)

### Authorization Details &mdash; Pago &Uacute;nico Inmediato &mdash; Persona Jur&iacute;dica (PJ)

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
type
 | 
Tipo de autorizaci&oacute;n
 | 
Max40Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
single-immediate-payment
 | 
Tipo fijo para pago &uacute;nico inmediato
 |  |
| 
actions
 | 
Acciones solicitadas
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["CreateSingleImmediatePayment"]
 | 
Usar CreateSingleImmediatePayment
 |  |
| 
locations
 | 
Ubicaciones/endpoints
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["/v1/PJ/single-payments"]
 | 
Endpoint expuesto para PJ
 |  |
| 
identifier
 | 
Identificador de recurso
 | 
Max40Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-000000123
 | 
Opcional (plantilla/orden)
 |  |
| 
privileges
 | 
Niveles / scopes
 | 
&ndash;
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["Level1"]
 | 
Nivel de privilegio requerido
 |  |
| 
instruction
 | 
Instrucci&oacute;n de pago
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
N&uacute;cleo operativo de la orden
 |  |
| 
amount
 | 
Caracter&iacute;sticas del monto
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
Contenedor de monto
 |  |
| 
amount.currency
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
amount.value
 | 
Monto
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
string (decimal)
 | 
1..1
 | 
S&iacute;
 | 
150000.00
 | 
Decimal como string
 |  |
| 
requestedExecutionDateTime
 | 
Fecha/hora solicitada
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T15:00:00Z
 | 
UTC ISO 8601
 |  |
| 
endToEndId
 | 
Identificador punta-a-punta
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-000000123
 | 
Conciliaci&oacute;n
 |  |
| 
purpose
 | 
Motivo
 | 
Max300Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Pago de servicios
 | 
Objetivo del Consentimiento
 |  |
| 
parties
 | 
Partes de la operaci&oacute;n
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
Deudor y beneficiario
 |  |
| 
debtor
 | 
Datos de la entidad que env&iacute;a los fondos
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
Persona Jur&iacute;dica
 |  |
| 
debtor.institutionId
 | 
Instituci&oacute;n financiera del ordenante
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
debtor.name
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
Persona Natural o Jur&iacute;dica
 |  |
| 
debtor.identification
 | 
RUT del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
76.123.456-7
 | 
Opcional. Si no se informa, el Usuario Final seleccionar&aacute; la cuenta de cargo en la interfaz de la Instituci&oacute;n Financiera durante la autorizaci&oacute;n. Si se informa, la Instituci&oacute;n Financiera debe validar que la cuenta pertenece al Usuario Final y es elegible para el pago. 
 |  |
| 
debtor.accountType
 | 
Tipo de cuenta del ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
0..1
 | 
Opcional
 | 
CHECKING
 |  |
| 
debtor.accountNumber
 | 
N&deg; cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
123456789
 |  |
| 
debtor.representativeName
 | 
Nombre del apoderado
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
MAR&Iacute;A GONZ&Aacute;LEZ
 | 
Requerido si el mandato/firmas lo exigen
 |  |
| 
debtor.representativeId
 | 
RUN del apoderado
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
Requerido si el mandato/firmas lo exigen
 |  |
| 
debtor.representativeRole
 | 
Rol del apoderado
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
Ej.: APODERADO, GERENTE, FIRMA A
 |  |
| 
creditor
 | 
Datos de la entidad que recibe los fondos
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
&ndash;
 |  |
| 
creditor.institutionId
 | 
Instituci&oacute;n financiera del beneficiario
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
creditor.name
 | 
Nombre/Raz&oacute;n social del beneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
PROVEEDORES XYZ LTDA.
 | 
Destinatario final de los fondos
 |  |
| 
creditor.identification
 | 
RUN/RUT/ID del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
11.222.333-4
 | 
RUN/RUT o documento extranjero
 |  |
| 
creditor.accountType
 | 
Tipo de cuenta del beneficiario
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
Enum
 |  |
| 
creditor.accountNumber
 | 
N&deg; cuenta del beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
9876543210
 | 
&ndash;
 |  |

### Ejemplo de petici&oacute;n 

### **Request &mdash; Pago &Uacute;nico Inmediato &mdash; Persona Juridica (PJ)**

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
paymentsRequest
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
payments
 | 
Arreglo de pagos
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
Solo un pago inmediato
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
8e65e3e5-2d5b&hellip;
 | 
Vincula con Authorization Details
 |  |
| 
transactionType
 | 
Tipo de Transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
TEF_SINGLE_IMMEDIATE
 | 
Enum para pago inmediato
 |  |
| 
debtorInstitutionId
 | 
Instituci&oacute;n Financiera del Ordenante
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
Persona Natural o Jur&iacute;dica
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
0..1
 | 
Opcional
 | 
76.123.456-7
 | 
Opcional. Si el PSIP no dispone de esta informaci&oacute;n debido a que el usuario realiz&oacute; la elecci&oacute;n de la cuenta en la interfaz de la entidad financiera, el PSIP deber&aacute; ejecutar el pago con la cuenta que fue elegido al momento de autorizar el consentimiento. 
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
0..1
 | 
Opcional
 | 
CHECKING
 |  |
| 
debtorAccountNumber
 | 
N&deg; cuenta del ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
123456789
 |  |
| 
debtorRepresentativeName
 | 
Nombre del apoderado
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
MAR&Iacute;A GONZ&Aacute;LEZ
 | 
Requerido si mandato/firmas lo exigen
 |  |
| 
debtorRepresentativeId
 | 
RUN del apoderado
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
Requerido si mandato/firmas lo exigen
 |  |
| 
debtorRepresentativeRole
 | 
Rol del apoderado
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
Ej.: APODERADO, GERENTE, FIRMA A
 |  |
| 
creditorInstitutionId
 | 
Instituci&oacute;n Financiera del Beneficiario
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
creditorAccountNumber
 | 
N&uacute;mero de Cuenta del Beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
9876543210
 | 
Cuenta destino
 |  |
| 
creditorAccountType
 | 
Tipo de Cuenta del Beneficiario
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
Enum
 |  |
| 
creditorName
 | 
Nombre/Raz&oacute;n Social del Beneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
PROVEEDORES XYZ LTDA.
 | 
Destinatario final de los fondos
 |  |
| 
creditorIdentification
 | 
RUN/RUT/ID del Beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
11.222.333-4
 | 
RUN/RUT o documento extranjero
 |  |
| 
amount
 | 
Monto de la transferencia
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
Valor de la operaci&oacute;n
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
requestedExecutionDateTime
 | 
Fecha/Hora solicitada
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T15:00:00Z
 | 
Ejecuci&oacute;n inmediata (UTC ISO 8601)
 |  |
| 
endToEndId
 | 
Identificador punta-a-punta
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-000000123
 | 
Conciliaci&oacute;n
 |  |
| 
remittanceInformation
 | 
Motivo del pago
 | 
Max300Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Pago de servicios
 | 
Objetivo del pago
 |  |
| 
requestDateTime
 | 
Fecha/Hora instrucci&oacute;n
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

### **Response &mdash; Pago &Uacute;nico Inmediato &mdash; Persona Jur&iacute;dica (PJ)**

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
paymentsResponse
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
Objeto ra&iacute;z de la respuesta
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
Contenedor de la informaci&oacute;n de pagos
 |  |
| 
payments
 | 
Arreglo de pagos
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
Solo un pago inmediato
 |  |
| 
paymentId
 | 
Identificador del pago
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
PAY-20250001
 | 
ID generado por IPI/IPC
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
8e65e3e5-2d5b&hellip;
 | 
R&eacute;plica del consentimiento utilizado
 |  |
| 
creationDateTime
 | 
Fecha creaci&oacute;n de la iniciaci&oacute;n
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
Alta de la orden
 |  |
| 
statusUpdateDateTime
 | 
Fecha actualizaci&oacute;n de estado
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
&Uacute;ltima actualizaci&oacute;n del estado
 |  |
| 
requestedExecutionDateTime
 | 
Fecha/Hora solicitada de ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T15:00:00Z
 | 
R&eacute;plica del request
 |  |
| 
expectedExecutionDateTime
 | 
Fecha estimada de ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
0..1
 | 
No
 | 
2025-11-15T15:00:05Z
 | 
Estimaci&oacute;n operativa
 |  |
| 
expectedSettlementDateTime
 | 
Fecha estimada de liquidaci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
0..1
 | 
No
 | 
2025-11-15T15:10:00Z
 | 
Estimaci&oacute;n de compensaci&oacute;n/liquidaci&oacute;n
 |  |
| 
paymentStatus
 | 
Estado del pago
 | 
Max35Text
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
EXECUTED
 | 
Enum: RECEIVED, PENDING_APPROVAL, EXECUTED, REJECTED, CANCELLED, EXPIRED
 |  |
| 
transactionType
 | 
Tipo de Transacci&oacute;n
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
TEF_SINGLE_IMMEDIATE
 | 
Naturaleza de la operaci&oacute;n
 |  |
| 
endToEndId
 | 
Identificador punta-a-punta
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
E2E-2025-000000123
 | 
Conciliaci&oacute;n multi-instituci&oacute;n
 |  |
| 
bankTrackingId
 | 
ID de seguimiento bancario
 | 
Max35Text
 | 
string
 | 
0..1
 | 
No
 | 
BNK-ABC-9991
 | 
Identificador interno IPI/IPC (si aplica)
 |  |
| 
debtorInstitutionId
 | 
Instituci&oacute;n Financiera del Ordenante
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
N&uacute;mero de Cuenta del Ordenante
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
Cuenta origen
 |  |
| 
debtorName
 | 
Raz&oacute;n Social del Ordenante
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
EMPRESA ABC S.A.
 | 
PJ
 |  |
| 
debtorAccountType
 | 
Tipo de Cuenta del Ordenante
 | 
ExternalAccountTypeCode
 | 
string
 | 
0..1
 | 
Opcional
 | 
CHECKING
 | 
Tipo de cuenta
 |  |
| 
debtorIdentification
 | 
RUT del Ordenante
 | 
Max35Text
 | 
string
 | 
0..1
 | 
Opcional
 | 
76.123.456-7
 | 
RUN/RUT o documento extranjero
 |  |
| 
debtorRepresentativeName
 | 
Nombre del apoderado
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
MAR&Iacute;A GONZ&Aacute;LEZ
 | 
Presente si aplica firma
 |  |
| 
debtorRepresentativeId
 | 
RUN del apoderado
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
Presente si aplica firma
 |  |
| 
debtorRepresentativeRole
 | 
Rol del apoderado
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
creditorInstitutionId
 | 
Instituci&oacute;n Financiera del Beneficiario
 | 
FinancialInstitutionIdentification
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
C&oacute;digo CMF/SBIF
 |  |
| 
creditorAccountNumber
 | 
N&deg; de Cuenta del Beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
9876543210
 | 
Cuenta destino
 |  |
| 
creditorAccountType
 | 
Tipo de Cuenta del Beneficiario
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
Enum
 |  |
| 
creditorName
 | 
Nombre/Raz&oacute;n Social del Beneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
PROVEEDORES XYZ LTDA.
 | 
PJ
 |  |
| 
creditorIdentification
 | 
RUN/RUT/ID del Beneficiario
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
11.222.333-4
 | 
RUN/RUT o documento extranjero
 |  |
| 
amount
 | 
Monto de la transferencia
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
Valor de la operaci&oacute;n
 |  |
| 
currency
 | 
Moneda de la transferencia
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
remittanceInformation
 | 
Motivo/Descripci&oacute;n
 | 
Max300Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Pago de servicios
 | 
Objetivo del pago
 |  |

**Ejemplo de respuesta**

# Consulta de estado de un Pago por `paymentId`

Una vez creada una orden de **Pago &Uacute;nico Inmediato** (PN o PJ), el `paymentId` retornado en la respuesta puede ser utilizado para **consultar el estado y los detalles actualizados del pago**.

Este endpoint permite recuperar la informaci&oacute;n m&aacute;s reciente de la orden, incluyendo su estado, fechas relevantes y datos principales del deudor y beneficiario.

### Endpoint

**GET**
`/single-payments/v1/{participantType}/single-payments/{paymentId}`

Donde:

- 
`participantType`: `PN` o `PJ`

- 
`paymentId`: identificador &uacute;nico del pago, generado por la IPI/IPC al momento de la creaci&oacute;n

### Uso del `paymentId`

El campo `paymentId`:

- 
Se genera **exclusivamente** en la respuesta del endpoint de creaci&oacute;n del pago.

- 
Es &uacute;nico por orden de pago.

- 
Debe ser utilizado como referencia para:

- 
Consulta de estado

- 
Conciliaci&oacute;n

- 
Seguimiento operativo

### Ejemplo de Request

El mismo endpoint aplica para Persona Jur&iacute;dica utilizando `/PJ/` en la ruta.

### Ejemplo de Response (resumen)

### Consideraciones

- 
El endpoint **no crea ni modifica** pagos; &uacute;nicamente permite su consulta.

- 
El estado retornado refleja la **&uacute;ltima informaci&oacute;n disponible** al momento de la consulta.

- 
Aplica de forma homog&eacute;nea para **PN y PJ**, sin diferencias funcionales.

---

## Attachments

- 🖼️ [UML Diagram - loans.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/UML%20Diagram%20-%20loans.png) (55 KB)
- 📊 [Payments v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Payments%20v1.0.0.xlsx) (36 KB)
- 🖼️ [UML Diagram - Payments.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/UML%20Diagram%20-%20Payments.png) (83 KB)
- 📊 [Payments-ID v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Payments-ID%20v1.0.0.xlsx) (42 KB)
- 🖼️ [Authorization Details _PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Authorization%20Details%20_PN_%20Request.png) (18 KB)
- 🖼️ [Request_PJ_ API.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Request_PJ_%20API.png) (26 KB)
- 🖼️ [AD_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/AD_PN_%20Request.png) (17 KB)
- 🖼️ [Request_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Request_PN_%20Request.png) (21 KB)
- 🖼️ [Authorization_details_PJ_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Authorization_details_PJ_%20Request.png) (21 KB)
- 🖼️ [Request_PJ_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-inmediato/Request_PJ_%20Request.png) (26 KB)
