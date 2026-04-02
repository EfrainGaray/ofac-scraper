---
title: "v1.0.0 - Información general - Iniciación de Pagos Recurrentes con Monto Fijo"
id: "124487439"
version: 1
updated: "2025-12-30T14:08:51.715Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-recurrente-con-monto-fijo-open-finance-chile-v1-0-0/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo"
---
# v1.0.0 - Información general - Iniciación de Pagos Recurrentes con Monto Fijo

# Iniciaci&oacute;n de Pagos Recurrentes con Monto Fijo - Crear pago - Persona Natural: (POST  /recurring-payments/v1/PN/recurring-payments)

Crear una **orden de pago recurrente con monto fijo para persona natural**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n y diccionarios de datos

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **authorization_details**, lo que facilita su comprensi&oacute;n.

![Authorization_Details_PN_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Authorization_Details_PN_Request.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago recurrente con monto fijo**, lo que facilita su comprensi&oacute;n.
![UML_Recurring Payment_PN_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/UML_Recurring%20Payment_PN_Request.png)

### Authorization Details &mdash; Pago Recurrente con Monto Fijo &mdash; Persona Natural (PN)

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
authorization_details
 | 
Arreglo de detalles de autorizaci&oacute;n
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
Contiene un (1) objeto para este flujo
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
recurring-payments
 | 
Tipo fijo para pagos recurrentes
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
["CreateRecurringPayments"]
 | 
Permite: Create/Read/Pause/Resume/Cancel
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
["v1/PN/recurring-payments"]
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
E2E-PLAN-0001
 | 
Opcional para identificar el plan
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
Instrucci&oacute;n del pago
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
Requerido para Create
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
Moneda por ocurrencia
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
Monto por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
string (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000.00
 | 
Decimal como string
 |  |
| 
recurrence
 | 
Caracter&iacute;sticas de la recurrencia
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
recurrence.frequency
 | 
Frecuencia
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
MONTHLY
 | 
DAILY,WEEKLY,MONTHLY,QUARTERLY,YEARLY
 |  |
| 
recurrence.interval
 | 
Intervalo
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
Cada n per&iacute;odos (default 1)
 |  |
| 
recurrence.dayOfMonth
 | 
D&iacute;a del mes
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
15
 | 
Requerido si regla por d&iacute;a del mes
 |  |
| 
recurrence.weekDay
 | 
D&iacute;a de semana
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FRIDAY
 | 
Requerido si WEEKLY (MON..SUN)
 |  |
| 
recurrence.weekOfMonth
 | 
Semana del mes
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FIRST
 | 
FIRST,SECOND,THIRD,FOURTH,LAST
 |  |
| 
schedule
 | 
Programaci&oacute;n
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
schedule.startDate
 | 
Fecha inicio
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
01/11/2025
 | 
Inicio de vigencia
 |  |
| 
schedule.firstExecutionDateTime
 | 
Primera ejecuci&oacute;n
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
Si se fija exacto (UTC)
 |  |
| 
schedule.endDate
 | 
Fecha fin
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
01/11/2026
 | 
Fin de vigencia
 |  |
| 
schedule.occurrences
 | 
N&ordm; de ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
L&iacute;mite de cobros
 |  |
| 
executionTimeOfDay
 | 
Hora de ejecuci&oacute;n (UTC)
 | 
&ndash;
 | 
string (time/UTC)
 | 
1..1
 | 
S&iacute;
 | 
15:00:00Z
 | 
Hora fija por ocurrencia
 |  |
| 
timezone
 | 
Zona horaria
 | 
&ndash;
 | 
string (IANA)
 | 
1..1
 | 
S&iacute;
 | 
America/Santiago
 | 
Para c&aacute;lculos locales
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
Operativa de ventanillas/feriados
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
parties
 | 
Partes
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
Entidad Financiera del ordenante
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
Tipo de cuenta ordenante
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
N&ordm; cuenta ordenante
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
Entidad Financiera del beneficiario
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
PROVEEDOR XYZ
 | 
PN o PJ
 |  |
| 
creditor.identification
 | 
Identificaci&oacute;n
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
&ndash;
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
Enum: CHECKING, SIGHT,  PREPAID
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
Vigencia/uso del consentimiento
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
2026-11-01T23:59:59Z
 | 
Debe cubrir todo el per&iacute;odo autorizado
 |  |
| 
constraints.maxOccurrences
 | 
M&aacute;x. ocurrencias autorizadas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
L&iacute;mite de ejecuciones
 |  |
| 
constraints.totalAmountLimit.currency
 | 
Moneda del tope total
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
Si se fija tope monetario global
 |  |
| 
constraints.totalAmountLimit.value
 | 
Monto tope total
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
string (decimal)
 | 
1..1
 | 
S&iacute;
 | 
600000.00
 | 
Suma de todas las ocurrencias
 |  |

### Ejemplo de petici&oacute;n 

 

### **Request &mdash; Pago Recurrente con Monto Fijo &mdash; Persona Natural (PN)**

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
Arreglo de pago recurrente
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
Se define un plan recurrente
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
3f7c&hellip;-uuid
 | 
Consentimiento asociado al plan
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
TEF_RECURRING_FIXED
 | 
Enum para recurrente monto fijo
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
&ndash;
 |  |
| 
creditorAccountType
 | 
Tipo cuenta del beneficiario
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
Enum: CHECKING, SAVINGS, VISTA
 |  |
| 
creditorName
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
PROVEEDOR XYZ
 | 
PN o PJ
 |  |
| 
creditorIdentification
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
&ndash;
 |  |
| 
amount
 | 
Monto por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000
 | 
Valor fijo de cada cobro
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
recurrence
 | 
Datos para recurrencia
 | 
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
frequency
 | 
Frecuencia
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
MONTHLY
 | 
Enum: DAILY,WEEKLY,MONTHLY,QUARTERLY,YEARLY
 |  |
| 
interval
 | 
Intervalo
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
Cada n per&iacute;odos (default 1)
 |  |
| 
dayOfMonth
 | 
D&iacute;a del mes
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
15
 | 
Requerido si MONTHLY/&hellip;
 |  |
| 
weekDay
 | 
D&iacute;a de semana
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FRIDAY
 | 
Requerido si WEEKLY
 |  |
| 
weekOfMonth
 | 
Semana del mes
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FIRST
 | 
FIRST&ndash;LAST
 |  |
| 
schedule
 | 
Datos para programaci&oacute;n
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
startDate
 | 
Fecha inicio
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-01
 | 
Inicio vigencia
 |  |
| 
firstExecutionDateTime
 | 
Primera ejecuci&oacute;n
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
Exacto UTC
 |  |
| 
endDate
 | 
Fecha fin
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2026-11-01
 | 
Fin vigencia
 |  |
| 
occurrences
 | 
N&ordm; ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
L&iacute;mite cobros
 |  |
| 
executionTimeOfDay
 | 
Hora de ejecuci&oacute;n
 | 
&ndash;
 | 
string (time/UTC)
 | 
1..1
 | 
S&iacute;
 | 
15:00:00Z
 | 
Hora fija UTC
 |  |
| 
timezone
 | 
Zona horaria
 | 
&ndash;
 | 
string (IANA)
 | 
1..1
 | 
S&iacute;
 | 
America/Santiago
 | 
&ndash;
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
Ventanillas/feriados
 |  |
| 
endToEndId
 | 
ID punta-a-punta
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
E2E-PLAN-0001
 | 
Conciliaci&oacute;n
 |  |
| 
remittanceInformation
 | 
Motivo
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Cuota mensual
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
Marca PSIP
 |  |

### Ejemplo de petici&oacute;n 

### **Response &mdash; Pago Recurrente con Monto Fijo &mdash; Persona Natural (PN)**

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
Contenedor
 |  |
| 
payments
 | 
Arreglo de pago recurrente
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
Un plan
 |  |
| 
recurringPaymentId
 | 
ID del pago
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
RP-2025-0001
 | 
Identificador del pago
 |  |
| 
grantId
 | 
ID del consentimiento
 | 
&ndash;
 | 
string (uuid)
 | 
1..1
 | 
S&iacute;
 | 
3f7c&hellip;-uuid
 | 
&ndash;
 |  |
| 
creationDateTime
 | 
Fecha creaci&oacute;n
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
| 
statusUpdateDateTime
 | 
Fecha actualizaci&oacute;n estado
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-03T10:31:00Z
 | 
&ndash;
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
ACTIVE
 | 
ACTIVE, PAUSED, CANCELLED, COMPLETED, EXPIRED, PENDING_APPROVAL
 |  |
| 
nextExecutionDateTime
 | 
Pr&oacute;xima ejecuci&oacute;n
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
Calculada
 |  |
| 
lastExecutionDateTime
 | 
&Uacute;ltima ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-15T15:00:10Z
 | 
Si ya hubo cobros
 |  |
| 
executionsSummary
 | 
Resumen de la ejecuci&oacute;n
 | 
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
totalScheduled
 | 
Total programadas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
Programadas al crear
 |  |
| 
totalExecuted
 | 
Total ejecutadas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
&ndash;
 |  |
| 
totalFailed
 | 
Total fallidas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
0
 | 
&ndash;
 |  |
| 
limits
 | 
Limites sobre los pagos recurrentes
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
maxOccurrences
 | 
M&aacute;x. ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
&ndash;
 |  |
| 
occurrencesRemaining
 | 
Ocurrencias restantes
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
11
 | 
&ndash;
 |  |
| 
totalAmountLimit
 | 
L&iacute;mite total 
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
600000
 | 
Tope monetario
 |  |
| 
totalAmountUsed
 | 
Monto acumulado
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000
 | 
Ejecutado a la fecha
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
debtorName
 | 
Nombre del del ordenante
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
&ndash;
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
&ndash;
 |  |
| 
creditorAccountType
 | 
Tipo cuenta del beneficiario
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
creditorName
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
PROVEEDOR XYZ
 | 
&ndash;
 |  |
| 
creditorIdentification
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
&ndash;
 |  |
| 
amount
 | 
Monto por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000
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
recurrence
 | 
Caracter&iacute;sticas de la recurrencia
 | 
&ndash;
 | 
object
 | 
1..1
 | 
Si
 | 
 | 
 |  |
| 
frequency
 | 
Frecuencia
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
MONTHLY
 | 
&ndash;
 |  |
| 
interval
 | 
Intervalo
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
Si
 | 
1
 | 
&ndash;
 |  |
| 
dayOfMonth
 | 
D&iacute;a del mes
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
15
 | 
&ndash;
 |  |
| 
weekDay
 | 
D&iacute;a semana
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FRIDAY
 | 
&ndash;
 |  |
| 
weekOfMonth
 | 
Semana mes
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FIRST
 | 
&ndash;
 |  |
| 
schedule
 | 
Programaci&oacute;n del pago
 | 
&ndash;
 | 
object
 | 
1..1
 | 
Si
 | 
 | 
 |  |
| 
startDate
 | 
Inicio
 | 
ISODate
 | 
string 
 | 
1..1
 | 
S&iacute;
 | 
2025-11-01
 | 
&ndash;
 |  |
| 
firstExecutionDateTime
 | 
Primera ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string 
 | 
1..1
 | 
Si
 | 
2025-11-15T15:00:00Z
 | 
&ndash;
 |  |
| 
endDate
 | 
Fin
 | 
ISODate
 | 
string 
 | 
1..1
 | 
Si
 | 
2025-11-01
 | 
&ndash;
 |  |
| 
occurrences
 | 
N&ordm; ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
Si
 | 
12
 | 
&ndash;
 |  |
| 
executionTimeOfDay
 | 
Hora por ocurrencia
 | 
&ndash;
 | 
string (time/UTC)
 | 
1..1
 | 
S&iacute;
 | 
15:00:00Z
 | 
&ndash;
 |  |
| 
timezone
 | 
Zona horaria
 | 
&ndash;
 | 
string (IANA)
 | 
1..1
 | 
Si
 | 
America/Santiago
 | 
&ndash;
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
Si
 | 
REGULAR_DAY
 | 
&ndash;
 |  |
| 
endToEndId
 | 
ID punta-a-punta
 | 
Max35Text
 | 
string
 | 
1..1
 | 
Si
 | 
E2E-PLAN-0001
 | 
&ndash;
 |  |
| 
remittanceInformation
 | 
Motivo
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Cuota mensual
 | 
R&eacute;plica del motivo informado en el request
 |  |

**Ejemplo de respuesta**

# Iniciaci&oacute;n de Pagos Recurrentes con Monto Fijo - Crear pago - Persona Jur&iacute;dica: (POST  /recurring-payments/v1/PJ/recurring-payments)

 Crear una **orden de pago recurrente con monto fijo para persona jur&iacute;dica**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje del **authorization_details**, lo que facilita su comprensi&oacute;n.
![Authorization_Details_PJ_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Authorization_Details_PJ_Request.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago recurrente con monto fijo**, lo que facilita su comprensi&oacute;n.

![UML_Recurring Payment_PJ_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/UML_Recurring%20Payment_PJ_Request.png)

### Authorization Details &mdash; **Pago Recurrente con Monto Fijo** &mdash; Persona Jur&iacute;dica (PJ)

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
recurring-payments
 | 
Tipo fijo para pagos recurrentes
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
["CreateRecurringPayments"]
 | 
Permite: Create/Read/Pause/Resume/Cancel
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
["v1/PJ/recurring-payments"]
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
RP-2025-0101
 | 
Identifica el plan
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
Instrucci&oacute;n del plan
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
Obligatoria en Create
 |  |
| 
amount
 | 
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
Moneda por ocurrencia
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
Monto por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
string (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000.00
 | 
Decimal como string
 |  |
| 
recurrence
 | 
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
recurrence.frequency
 | 
Frecuencia
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
MONTHLY
 | 
DAILY,WEEKLY,MONTHLY,QUARTERLY,YEARLY
 |  |
| 
recurrence.interval
 | 
Intervalo
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
Si
 | 
1
 | 
Cada n per&iacute;odos (default 1)
 |  |
| 
recurrence.dayOfMonth
 | 
D&iacute;a del mes
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
15
 | 
Requerido si regla por d&iacute;a de mes
 |  |
| 
recurrence.weekDay
 | 
D&iacute;a de semana
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FRIDAY
 | 
Requerido si WEEKLY (MON..SUN)
 |  |
| 
recurrence.weekOfMonth
 | 
Semana del mes
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FIRST
 | 
FIRST,SECOND,THIRD,FOURTH,LAST
 |  |
| 
schedule
 | 
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
schedule.startDate
 | 
Fecha inicio
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-01
 | 
Inicio de vigencia
 |  |
| 
schedule.firstExecutionDateTime
 | 
Primera ejecuci&oacute;n
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
Si se fija exacto (UTC). Si el campo no tiene 
 |  |
| 
schedule.endDate
 | 
Fecha fin
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2026-11-01
 | 
Fin de vigencia
 |  |
| 
schedule.occurrences
 | 
N&ordm; de ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
L&iacute;mite total de cobros
 |  |
| 
executionTimeOfDay
 | 
Hora de ejecuci&oacute;n (UTC)
 | 
&ndash;
 | 
string (time/UTC)
 | 
1..1
 | 
S&iacute;
 | 
15:00:00Z
 | 
Hora fija por ocurrencia
 |  |
| 
timezone
 | 
Zona horaria
 | 
&ndash;
 | 
string (IANA)
 | 
0..1
 | 
No
 | 
America/Santiago
 | 
Para c&aacute;lculos locales
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
Operativa de ventanillas/feriados
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
parties
 | 
Partes
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
debtor.institutionId
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
debtor.representativeId
 | 
RUT del apoderado
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
Igual al mensaje del request si se inform&oacute;
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
Igual al mensaje del request si se inform&oacute;
 |  |
| 
creditor.institutionId
 | 
Entidad Financiera del beneficiario
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
Cuenta destino
 |  |
| 
creditor.accountType
 | 
Tipo cuenta del beneficiario
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
Enum como deudor
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
PN o PJ
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
Vigencia/uso del consentimiento
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
2026-11-01T23:59:59Z
 | 
Cubrir todo el per&iacute;odo del plan
 |  |
| 
constraints.maxOccurrences
 | 
M&aacute;x. ocurrencias autorizadas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
L&iacute;mite de ejecuciones
 |  |
| 
constraints.totalAmountLimit.currency
 | 
Moneda tope total
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
Si hay tope monetario global
 |  |
| 
constraints.totalAmountLimit.value
 | 
Monto tope total
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
string (decimal)
 | 
1..1
 | 
S&iacute;
 | 
600000.00
 | 
Suma de todas las ocurrencias
 |  |

### Ejemplo de petici&oacute;n 

### **Request &mdash; Pago Recurrente con Monto Fijo &mdash; Persona Juridica (PJ)**

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
Contenedor del payload
 |  |
| 
payments
 | 
Arreglo del plan recurrente
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
Se define un plan por request
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
Consentimiento asociado al plan
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
TEF_RECURRING_FIXED
 | 
Enum para recurrente monto fijo
 |  |
| 
debtorInstitutionId
 | 
Entidad Financiera del ordenante
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
Requerido si el mandato/firmas lo exige
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
Entidad Financiera del beneficiario
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
Tipo cuenta del beneficiario
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
Enum como deudor
 |  |
| 
creditorName
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
PN o PJ
 |  |
| 
creditorIdentification
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
amount
 | 
Monto por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000
 | 
Valor fijo de cada cobro
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
recurrence
 | 
Caracter&iacute;sticas de la recurrencia
 | 
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
frequency
 | 
Frecuencia
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
MONTHLY
 | 
DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY
 |  |
| 
recurrence.interval
 | 
Intervalo
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
Cada n per&iacute;odos (default 1)
 |  |
| 
recurrence.dayOfMonth
 | 
D&iacute;a del mes
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
15
 | 
Requerido si regla por d&iacute;a del mes
 |  |
| 
recurrence.weekDay
 | 
D&iacute;a de semana
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FRIDAY
 | 
Requerido si WEEKLY (MON..SUN)
 |  |
| 
recurrence.weekOfMonth
 | 
Semana del mes
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FIRST
 | 
FIRST, SECOND, THIRD, FOURTH, LAST
 |  |
| 
schedule
 | 
caracter&iacute;sticas de la programaci&oacute;n
 | 
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
startDate
 | 
Fecha inicio
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-01
 | 
Inicio de vigencia del plan
 |  |
| 
firstExecutionDateTime
 | 
Primera ejecuci&oacute;n
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
Si se quiere fijar exacto (UTC)
 |  |
| 
endDate
 | 
Fecha fin
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2026-11-01
 | 
Fin de vigencia
 |  |
| 
occurrences
 | 
N&ordm; de ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
L&iacute;mite total de cobros
 |  |
| 
executionTimeOfDay
 | 
Hora de ejecuci&oacute;n (UTC)
 | 
&ndash;
 | 
string (time/UTC)
 | 
1..1
 | 
S&iacute;
 | 
15:00:00Z
 | 
Hora fija por ocurrencia (UTC)
 |  |
| 
timezone
 | 
Zona horaria
 | 
&ndash;
 | 
string (IANA)
 | 
1..1
 | 
S&iacute;
 | 
America/Santiago
 | 
Para c&aacute;lculos locales si aplica
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
Operativa de ventanillas/feriados
 |  |
| 
endToEndId
 | 
ID punta-a-punta (plan)
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
E2E-PLAN-0001
 | 
Para conciliaci&oacute;n del plan
 |  |
| 
remittanceInformation
 | 
Motivo
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Cuota mensual
 | 
Descripci&oacute;n del cobro
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

### **Response &mdash; Pago Recurrente con Monto Fijo &mdash; Persona Jur&iacute;dica (PJ)**

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
Ra&iacute;z de la respuesta
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
payments
 | 
Arreglo del plan recurrente
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
Un plan
 |  |
| 
recurringPaymentId
 | 
Identificador del plan
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
RP-2025-0101
 | 
ID del plan recurrente
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
Consentimiento utilizado
 |  |
| 
creationDateTime
 | 
Fecha de creaci&oacute;n
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
Alta del plan
 |  |
| 
statusUpdateDateTime
 | 
&Uacute;ltima actualizaci&oacute;n de estado
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-03T10:31:00Z
 | 
&ndash;
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
ACTIVE
 | 
ACTIVE, PAUSED, CANCELLED, COMPLETED, EXPIRED, PENDING_APPROVAL
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
Detalles del estado
 |  |
| 
code
 | 
C&oacute;digo motivo
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
1000
 | 
Cat&aacute;logo de negocio
 |  |
| 
description
 | 
Descripci&oacute;n motivo
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Plan activo
 | 
Texto legible
 |  |
| 
category
 | 
Categor&iacute;a
 | 
Max35Text
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
OK
 | 
OK, VALIDATION, FUNDS, AML, TECHNICAL, CUTOFF, CONSENT, AUTHZ
 |  |
| 
nextExecutionDateTime
 | 
Pr&oacute;xima ejecuci&oacute;n
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
Calculada
 |  |
| 
lastExecutionDateTime
 | 
&Uacute;ltima ejecuci&oacute;n
 | 
ISODateTimeText
 | 
string (date-time)
 | 
1..1
 | 
S&iacute;
 | 
2025-10-15T15:00:10Z
 | 
Si ya hubo cobros
 |  |
| 
executions
 | 
M&eacute;tricas de ejecuciones
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
Resumen de cobranzas
 |  |
| 
summary
 | 
M&eacute;tricas de ejecuciones resumen
 | 
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
 | 
 |  |
| 
totalScheduled
 | 
Total programadas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
Ocurrencias planificadas
 |  |
| 
totalExecuted
 | 
Total ejecutadas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
&ndash;
 |  |
| 
totalFailed
 | 
Total fallidas
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
0
 | 
&ndash;
 |  |
| 
limits
 | 
L&iacute;mites del plan
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
Tope de ocurrencias/montos
 |  |
| 
maxOccurrences
 | 
M&aacute;x. ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
&ndash;
 |  |
| 
occurrencesRemaining
 | 
Ocurrencias restantes
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
11
 | 
&ndash;
 |  |
| 
totalAmountLimit
 | 
Tope total (monto)
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
600000
 | 
Tope monetario del plan
 |  |
| 
totalAmountUsed
 | 
Monto acumulado ejecutado
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000
 | 
Ejecutado a la fecha
 |  |
| 
debtorInstitutionId
 | 
Entidad Financiera del ordenante
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
Igual al mensaje del request
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
&ndash;
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
&ndash;
 |  |
| 
debtorRepresentativeId
 | 
RUT del apoderado
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
Igual al mensaje del request si se inform&oacute;
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
Igual al mensaje del request si se inform&oacute;
 |  |
| 
creditorInstitutionId
 | 
Entidad Financiera del beneficiario
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
&ndash;
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
&ndash;
 |  |
| 
creditorAccountType
 | 
Tipo cuenta del beneficiario
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
creditorName
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
&ndash;
 |  |
| 
creditorIdentification
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
&ndash;
 |  |
| 
amount
 | 
Monto por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
45000
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
recurrence
 | 
Caracter&iacute;sticas de la recurrencia
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
 | 
 |  |
| 
frequency
 | 
Frecuencia
 | 
&ndash;
 | 
string (enum)
 | 
1..1
 | 
S&iacute;
 | 
MONTHLY
 | 
&ndash;
 |  |
| 
interval
 | 
Intervalo
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
1
 | 
&ndash;
 |  |
| 
dayOfMonth
 | 
D&iacute;a del mes
 | 
&ndash;
 | 
integer
 | 
0..1
 | 
Condicional
 | 
15
 | 
&ndash;
 |  |
| 
weekDay
 | 
D&iacute;a de semana
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FRIDAY
 | 
&ndash;
 |  |
| 
weekOfMonth
 | 
Semana del mes
 | 
&ndash;
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
FIRST
 | 
&ndash;
 |  |
| 
schedule
 | 
 | 
 | 
 | 
 | 
 | 
 | 
 |  |
| 
startDate
 | 
Inicio
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2025-11-01
 | 
&ndash;
 |  |
| 
firstExecutionDateTime
 | 
Primera ejecuci&oacute;n
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
&ndash;
 |  |
| 
endDate
 | 
Fin
 | 
ISODate
 | 
string (date)
 | 
1..1
 | 
S&iacute;
 | 
2026-11-01
 | 
&ndash;
 |  |
| 
occurrences
 | 
N&ordm; de ocurrencias
 | 
&ndash;
 | 
integer
 | 
1..1
 | 
S&iacute;
 | 
12
 | 
&ndash;
 |  |
| 
executionTimeOfDay
 | 
Hora por ocurrencia
 | 
&ndash;
 | 
string (time/UTC)
 | 
1..1
 | 
S&iacute;
 | 
15:00:00Z
 | 
&ndash;
 |  |
| 
timezone
 | 
Zona horaria
 | 
&ndash;
 | 
string (IANA)
 | 
1..1
 | 
S&iacute;
 | 
America/Santiago
 | 
&ndash;
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
&ndash;
 |  |
| 
endToEndId
 | 
ID punta-a-punta (plan)
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
E2E-PLAN-0001
 | 
&ndash;
 |  |
| 
remittanceInformation
 | 
Motivo
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
Cuota mensual
 | 
R&eacute;plica del motivo informado en el request
 |  |

**Ejemplo de respuesta**

# Consulta de estado de un Pago por `paymentId`

Una vez creada una orden de **Pago ** (PN o PJ), el `paymentId` retornado en la respuesta puede ser utilizado para **consultar el estado y los detalles actualizados del pago**.

Este endpoint permite recuperar la informaci&oacute;n m&aacute;s reciente de la orden, incluyendo su estado, fechas relevantes y datos principales del deudor y beneficiario.

### Endpoint

**GET**
`/recurring-payments/v1/{participantType}/recurring-payments/{paymentId}`

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

- 🖼️ [UML Diagram - loans.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/UML%20Diagram%20-%20loans.png) (55 KB)
- 📊 [Payments v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Payments%20v1.0.0.xlsx) (36 KB)
- 🖼️ [UML Diagram - Payments.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/UML%20Diagram%20-%20Payments.png) (83 KB)
- 🖼️ [AD_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/AD_PN_%20Request.png) (17 KB)
- 🖼️ [Request_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Request_PN_%20Request.png) (25 KB)
- 📊 [Payments-ID v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Payments-ID%20v1.0.0.xlsx) (42 KB)
- 🖼️ [Authorization Details _PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Authorization%20Details%20_PN_%20Request.png) (18 KB)
- 🖼️ [Request_PJ_ API.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Request_PJ_%20API.png) (26 KB)
- 🖼️ [Authorization_details_PJ_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Authorization_details_PJ_%20Request.png) (21 KB)
- 🖼️ [UML_Recurring Payment_PN_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/UML_Recurring%20Payment_PN_Request.png) (32 KB)
- 🖼️ [UML_Recurring Payment_PJ_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/UML_Recurring%20Payment_PJ_Request.png) (33 KB)
- 🖼️ [Authorization_Details_PN_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Authorization_Details_PN_Request.png) (39 KB)
- 🖼️ [Authorization_Details_PJ_Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-fijo/Authorization_Details_PJ_Request.png) (40 KB)
