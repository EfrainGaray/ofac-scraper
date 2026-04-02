---
title: "v1.0.0 - Información general - Iniciación de Pagos Único Programado"
id: "124487329"
version: 1
updated: "2025-12-30T14:08:49.356Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-programado-open-finance-chile-v1-0-0/v1-0-0-informacion-general-iniciacion-de-pagos-unico-programado"
---
# v1.0.0 - Información general - Iniciación de Pagos Único Programado

# Iniciaci&oacute;n de Pagos &Uacute;nico Programado - Crear pago - Persona Natural: (POST  /scheduled-payments/v1/PN/scheduled-payments)

Crear una **orden de pago programado para persona natural**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n y diccionarios de datos

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **authorization_details**, lo que facilita su comprensi&oacute;n.
![Diagrama UML_Authorization Details_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-programado/Diagrama%20UML_Authorization%20Details_PN.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago programado**, lo que facilita su comprensi&oacute;n.
![Diagrama UML_Request_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-programado/Diagrama%20UML_Request_PN.png)

### Authorization Details &mdash; Pago &Uacute;nico Programado &mdash; Persona Natural (PN)

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
scheduled-payments
 | 
Tipo fijo para pagos programados
 |  |
| 
actions
 | 
Acciones solicitadas
 | 
Array
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["CreateScheduledPayments"]
 | 
Usar CreateScheduledPayments o ReadScheduledPayments
 |  |
| 
locations
 | 
Ubicaciones/endpoints
 | 
Array
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["v1/PN/scheduled-payments"]
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
E2E-2025-000000123
 | 
Opcional (plantilla/orden)
 |  |
| 
privileges
 | 
Niveles / scopes
 | 
Array
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
executionWindow
 | 
Ejecucion
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
 
 |  |
| 
executionWindow.from
 | 
Inicio ventana
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
 
 |  |
| 
executionWindow.to 
 | 
Fin ventana
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T18:00:00Z
 | 
 
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
1..1
 | 
S&iacute;
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
1..1
 | 
S&iacute;
 | 
REGULAR_DAY
 | 
Ventanillas/feriados
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
 
 |  |
| 
debtor.institutionId
 | 
Instituci&oacute;n Financiera  del ordenante
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
PN o PJ
 |  |
| 
creditor.identification
 | 
Identificaci&oacute;n del Beneficiario
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
RUN/RUT o ID extranjero
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
Enum: CHECKING,SAVINGS,VISTA,RUT
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
| 
constraints
 | 
Restricciones del consentimiento
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
Vigencia/uso
 |  |
| 
constraints.consentExpiresAt
 | 
Expiraci&oacute;n del consentimiento
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T18:00:00Z
 | 
Debe cubrir ventana de ejecuci&oacute;n
 |  |
| 
constraints.oneTimeUse
 | 
Uso &uacute;nico
 | 
&ndash;
 | 
boolean
 | 
1..1
 | 
S&iacute;
 | 
true
 | 
Propio de pago &uacute;nico
 |  |

### Ejemplo de petici&oacute;n 

 

### **Request &mdash; Pago &Uacute;nico Programado &mdash; Persona Natural (PN)**

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
Objeto ra&iacute;z de la solicitud
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
Solo se permite un pago programado
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
Vincula la orden con el consentimiento otorgado
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
TEF_SCHEDULED_SINGLE
 | 
Enumerado para pago &uacute;nico programado
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
C&oacute;digo de la instituci&oacute;n financiera del ordenante (CMF/SBIF)
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
Opcional. Si el PSIP no dispone de esta informaci&oacute;n debido a que el usuario realiz&oacute; la elecci&oacute;n de la cuenta en la interfaz de la entidad financiera, el PSIP deber&aacute; ejecutar el pago con la cuenta que fue elegido al momento de autorizar el consentimiento. 
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
debtorAddress
 | 
Domicilio del Ordenante
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
Av. Providencia 123
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
debtorCountry
 | 
Pa&iacute;s/Comuna del Ordenante
 | 
CountryCode / Max70Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
CL
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
debtorPaymentMethod
 | 
Forma de Pago del Ordenante
 | 
ExternalPaymentMethodCode
 | 
string
 | 
0..1
 | 
Condicional
 | 
Electr&oacute;nico
 | 
Ej.: Electr&oacute;nico, TPV, Transferencia, ; obligatorio si &ge; umbral AML
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
C&oacute;digo de la instituci&oacute;n financiera del beneficiario
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
N&uacute;mero de cuenta destino
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
Enum: CHECKING, SIGHT,  PREPAID
 |  |
| 
creditorName
 | 
Nombre del Beneficiario
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
Nombre completo de la persona natural o jur&iacute;dica beneficiaria
 |  |
| 
creditorIdentification
 | 
Identificaci&oacute;n del Beneficiario
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
RUN/RUT o ID extranjero
 |  |
| 
creditorAddress
 | 
Domicilio del Beneficiario
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
Av. Las Condes 999
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
creditorCountry
 | 
Pa&iacute;s/Comuna del Beneficiario
 | 
CountryCode / Max70Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
CL
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
originOfFunds
 | 
Pa&iacute;s/Comuna de Origen de Fondos
 | 
CountryCode / Max70Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
CL
 | 
Obligatorio para transferencias internacionales o montos altos
 |  |
| 
amount
 | 
Monto de la Transferencia
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
Valor num&eacute;rico con 2&ndash;4 decimales
 |  |
| 
currency
 | 
Moneda de la Transferencia
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
C&oacute;digo ISO 4217
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
Fecha programada (ISO 8601 UTC)
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
1..1
 | 
S&iacute;
 | 
{from:"&hellip;",to:"&hellip;"}
 | 
Define rango opcional de ejecuci&oacute;n
 |  |
| 
cutoffProfile
 | 
Perfil de corte
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
REGULAR_DAY
 | 
Ej.: REGULAR_DAY, HOLIDAY_EVE
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
1..1
 | 
S&iacute;
 | 
E2E-2025-000000123
 | 
Para conciliaci&oacute;n entre instituciones
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
Descripci&oacute;n/motivo
 |  |
| 
requestDateTime
 | 
Fecha/Hora de instrucci&oacute;n
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
Fecha en que el PSIP instruye el pago
 |  |

### Ejemplo de petici&oacute;n 

### **Response &mdash; Pago &Uacute;nico Programado &mdash; Persona Natural (PN)**

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
Solo un pago en este caso de uso
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
Marca de tiempo de alta de la orden
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
R&eacute;plica de la fecha programada
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
1..1
 | 
S&iacute;
 | 
2025-11-15T15:05:00Z
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
1..1
 | 
S&iacute;
 | 
2025-11-15T15:10:00Z
 | 
Estimaci&oacute;n de compensaci&oacute;n/liquidaci&oacute;n
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
2025-10-03T10:30:02Z
 | 
&Uacute;ltima actualizaci&oacute;n del estado
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
SCHEDULED
 | 
Enum: RECEIVED, SCHEDULED, PENDING_APPROVAL, EXECUTED, REJECTED, CANCELLED, EXPIRED
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
TEF_SCHEDULED_SINGLE
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
1..1
 | 
S&iacute;
 | 
E2E-2025-000000123
 | 
Para conciliaci&oacute;n multi-instituci&oacute;n
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
1..1
 | 
S&iacute;
 | 
BNK-ABC-9991
 | 
Identificador interno de la IPI/IPC
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
N&ordm; de Cuenta del Beneficiario
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
Enum: CHECKING, SIGHT,  PREPAID
 |  |
| 
creditorName
 | 
Nombre del Beneficiario
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
PN o PJ beneficiaria
 |  |
| 
creditorIdentification
 | 
Identificaci&oacute;n del Beneficiario
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
Monto de la Transferencia
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
Moneda de la Transferencia
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

# Iniciaci&oacute;n de Pagos &Uacute;nico Programado - Crear pago - Persona Jur&iacute;dica: (POST  /scheduled-payments/v1/PJ/scheduled-payments)

 Crear una **orden de pago programado para persona jur&iacute;dica**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje del **authorization_details**, lo que facilita su comprensi&oacute;n.
![Diagrama UML_Authorization Details_PJ.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-programado/Diagrama%20UML_Authorization%20Details_PJ.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago programado**, lo que facilita su comprensi&oacute;n.
![Diagrama UML_Request_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-unico-programado/Diagrama%20UML_Request_PN.png)

### Authorization Details &mdash; Pago &Uacute;nico Programado &mdash; Persona Jur&iacute;dica (PJ)

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
scheduled-payments
 | 
Tipo fijo
 |  |
| 
actions
 | 
Acciones solicitadas
 | 
Array
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["CreateScheduledPayments"]
 | 
O ReadScheduledPayments
 |  |
| 
locations
 | 
Ubicaciones/endpoints
 | 
Array
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["v1/PJ/scheduled-payments"]
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
Opcional
 |  |
| 
privileges
 | 
Niveles / scopes
 | 
Array
 | 
array
 | 
1..1
 | 
S&iacute;
 | 
["Level1"]
 | 
Nivel requerido
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
N&uacute;cleo operativo
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
executuion
 | 
Ejecuci&oacute;n
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
 |  |
| 
executionWindow.from
 | 
Inicio ventana
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
No
 | 
2025-11-15T15:00:00Z
 | 
Opcional
 |  |
| 
executionWindow.to
 | 
Fin ventana
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
No
 | 
2025-11-15T18:00:00Z
 | 
Opcional
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
1..1
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
&ndash;
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
&ndash;
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
debtor.RepresentativeName
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
Requerido si el mandato lo exige
 |  |
| 
debtor.RepresentativeId
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
debtor.RepresentativeRole
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
 |  |
| 
creditor.institutionId
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
creditor.Name
 | 
Nombre/Raz&oacute;n social beneficiario
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
PN o PJ
 |  |
| 
creditor.Identification
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
creditor.AccountType
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
&ndash;
 |  |
| 
creditor.AccountNumber
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
| 
constraints
 | 
Restricciones del consentimiento
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
Vigencia/uso
 |  |
| 
constraints.consentExpiresAt
 | 
Expiraci&oacute;n del consentimiento
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-15T18:00:00Z
 | 
Debe cubrir ventana de ejecuci&oacute;n
 |  |
| 
constraints.oneTimeUse
 | 
Uso &uacute;nico
 | 
&ndash;
 | 
boolean
 | 
1..1
 | 
S&iacute;
 | 
true
 | 
Propio de pago &uacute;nico
 |  |

### Ejemplo de petici&oacute;n 

### **Request &mdash; Pago &Uacute;nico Programado &mdash; Persona Juridica (PJ)**

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
Objeto ra&iacute;z de la solicitud
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
Solo un pago programado
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
Vincula la orden con el consentimiento
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
TEF_SCHEDULED_SINGLE
 | 
Enumerado para pago &uacute;nico programado
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
Requerido si el mandato/firmas lo exigen
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
p.ej. APODERADO, GERENTE, FIRMA A
 |  |
| 
debtorAddress
 | 
Domicilio del Ordenante
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
Av. Providencia 123
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
debtorCountry
 | 
Pa&iacute;s/Comuna del Ordenante
 | 
CountryCode / Max70Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
CL
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
debtorPaymentMethod
 | 
Forma de pago del Ordenante
 | 
ExternalPaymentMethodCode
 | 
string
 | 
0..1
 | 
Condicional
 | 
ELEC
 | 
Obligatorio si &ge; umbral AML
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
Enum: CHECKING, SIGHT,  PREPAID
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
PN o PJ
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
creditorAddress
 | 
Domicilio del Beneficiario
 | 
Max140Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
Av. Las Condes 999
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
creditorCountry
 | 
Pa&iacute;s/Comuna del Beneficiario
 | 
CountryCode / Max70Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
CL
 | 
Obligatorio si &ge; umbral AML
 |  |
| 
originOfFunds
 | 
Origen de fondos
 | 
CountryCode / Max70Text
 | 
string
 | 
0..1
 | 
Condicional
 | 
CL
 | 
Requerido en internacional/montos altos
 |  |
| 
amount
 | 
Monto de la Transferencia
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
Definir precisi&oacute;n (2&ndash;4 decimales)
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
ISO 8601 UTC
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
1..1
 | 
S&iacute;
 | 
{from:"&hellip;",to:"&hellip;"}
 | 
Rango opcional
 |  |
| 
cutoffProfile
 | 
Perfil de corte
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
REGULAR_DAY
 | 
p.ej. REGULAR_DAY, HOLIDAY_EVE
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
1..1
 | 
S&iacute;
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
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Pago de servicios
 | 
Descripci&oacute;n/motivo
 |  |
| 
requestDateTime
 | 
Fecha/Hora de instrucci&oacute;n
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

### **Response &mdash; Pago &Uacute;nico Programado &mdash; Persona Jur&iacute;dica (PJ)**

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
Solo un pago
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
Consentimiento utilizado
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
1..1
 | 
S&iacute;
 | 
2025-11-15T15:05:00Z
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
1..1
 | 
S&iacute;
 | 
2025-11-15T15:10:00Z
 | 
Estimaci&oacute;n compensaci&oacute;n/liquidaci&oacute;n
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
2025-10-03T10:30:02Z
 | 
&Uacute;ltima actualizaci&oacute;n
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
PENDING_APPROVAL
 | 
Enum: RECEIVED, SCHEDULED, PENDING_APPROVAL, EXECUTED, REJECTED, CANCELLED, EXPIRED
 |  |
| 
statusReason
 | 
Objeto motivo/raz&oacute;n
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
Motivo del estado
 |  |
| 
code
 | 
C&oacute;digo del estado
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
2101
 | 
Cat&aacute;logo de negocio
 |  |
| 
description
 | 
Descripci&oacute;n asociada
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
En espera de firma del apoderado
 | 
Texto legible
 |  |
| 
category
 | 
Categor&iacute;a de causa
 | 
Max35Text
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
AUTHZ
 | 
Enum: OK, VALIDATION, FUNDS, AML, TECHNICAL, CUTOFF, CONSENT, AUTHZ
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
TEF_SCHEDULED_SINGLE
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
1..1
 | 
S&iacute;
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
1..1
 | 
S&iacute;
 | 
BNK-ABC-9991
 | 
Identificador interno IPI/IPC
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
N&ordm; de Cuenta del Ordenante
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
debtorAccountType
 | 
Tipo de Cuenta del Ordenante
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
Enum: CHECKING, SIGHT,  PREPAID
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
RUT del Ordenante
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
RUT PJ
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
N&ordm; de Cuenta del Beneficiario
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
Enum: CHECKING, SIGHT,  PREPAID
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
PN o PJ
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
RUN/RUT o ID extranjero
 |  |
| 
amount
 | 
Monto de la Transferencia
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
Moneda de la Transferencia
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
Max140Text
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

# Consulta de estado de un Pago por `paymentId`

Una vez creada una orden de **Pago &Uacute;nico Programado** (PN o PJ), el `paymentId` retornado en la respuesta puede ser utilizado para **consultar el estado y los detalles actualizados del pago**.

Este endpoint permite recuperar la informaci&oacute;n m&aacute;s reciente de la orden, incluyendo su estado, fechas relevantes y datos principales del deudor y beneficiario.

### Endpoint

**GET**
`/scheduled-payments/v1/{participantType}/scheduled-payments/{paymentId}`

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