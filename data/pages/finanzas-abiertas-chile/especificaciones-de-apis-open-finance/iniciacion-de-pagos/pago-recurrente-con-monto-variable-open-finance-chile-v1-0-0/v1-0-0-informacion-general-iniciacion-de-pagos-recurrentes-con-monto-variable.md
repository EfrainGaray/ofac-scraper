---
title: "v1.0.0 - Información general - Iniciación de Pagos Recurrentes con Monto Variable"
id: "124487549"
version: 1
updated: "2025-12-30T14:08:53.781Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/iniciacion-de-pagos/pago-recurrente-con-monto-variable-open-finance-chile-v1-0-0/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable"
---
# v1.0.0 - Información general - Iniciación de Pagos Recurrentes con Monto Variable

# Iniciaci&oacute;n de Pagos Recurrentes con Monto Variable - Crear pago - Persona Natural: (POST  /variable-recurring-payments/v1/PN/variable-recurring-payments)

Crear una **orden de pago recurrente con monto variable para persona natural**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n y diccionarios de datos

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **authorization_details**, lo que facilita su comprensi&oacute;n.

![Recurrin_Variable_payments_Authorization_details_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Authorization_details_PN.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago recurrente con monto variable**, lo que facilita su comprensi&oacute;n.
![Recurrin_Variable_payments_Request_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Request_PN.png)

### Authorization Details &mdash; Pago Recurrente con Monto Variable &mdash; Persona Natural (PN)

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
variable-recurring-payments
 | 
Tipo fijo para este caso
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
["CreateVariableRecurringPayments"]
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
["v1/PN/variable-recurring-payments"]
 | 
Endpoint expuesto para PN
 |  |
| 
identifier
 | 
Identificador del payment
 | 
Max40Text
 | 
string
 | 
0..1
 | 
No
 | 
RPV-2025-0001
 | 
&Uacute;til para Read/Pause/Resume/Cancel
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
Instrucci&oacute;n del payment
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
amountPolicy
 | 
Pol&iacute;tica de montos
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
No se define amount fijo; se definen l&iacute;mites
 |  |
| 
amountPolicy.currency
 | 
Moneda
 | 
&ndash;
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
amountPolicy.perOccurrence.min
 | 
M&iacute;nimo por ocurrencia
 | 
&ndash;
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000.00
 | 
M&iacute;nimo de cobro
 |  |
| 
amountPolicy.perOccurrence.max
 | 
M&aacute;ximo por ocurrencia
 | 
&ndash;
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
200000.00
 | 
Tope por cobro
 |  |
| 
amountPolicy.periodicCaps.daily
 | 
Tope diario
 | 
&ndash;
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
300000.00
 | 
Suma de cobros por d&iacute;a
 |  |
| 
amountPolicy.periodicCaps.monthly
 | 
Tope mensual
 | 
&ndash;
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000000.00
 | 
Suma de cobros por mes
 |  |
| 
limits
 | 
L&iacute;mites globales del payment
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
limits.totalAmountLimit.currency
 | 
Moneda tope total
 | 
&ndash;
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
limits.totalAmountLimit.value
 | 
Monto tope total
 | 
&ndash;
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
3000000.00
 | 
&ndash;
 |  |
| 
limits.maxOccurrences
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
24
 | 
&ndash;
 |  |
| 
recurrence
 | 
Reglas de recurrencia
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
Frecuencia/intervalo
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
Fechas y ocurrencias
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
Ventana y recuento
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
Operativa/feriados
 |  |
| 
purpose
 | 
Motivo del consentimiento
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
Descripci&oacute;n 
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
Entidad que env&iacute;a los fondos
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
Entidad que recibe los fondos
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
N&uacute;mero de RUT
 |  |
| 
creditor.account.type
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
creditor.account.number
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
2026-11-01T23:59:59Z
 | 
Debe cubrir el per&iacute;odo del payment
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
0..1
 | 
No
 | 
24
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
0..1
 | 
No
 | 
CLP
 | 
Si se fija tope global
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
0..1
 | 
No
 | 
3000000.00
 | 
Suma de todas las ocurrencias
 |  |

### Ejemplo de petici&oacute;n 

 

### **Request &mdash; Pago Recurrente con Monto Variable &mdash; Persona Natural (PN)**

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
 | 
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
 | 
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
 | 
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
Un plan por request
 | 
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
Vincula el plan con el consentimiento
 | 
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
TEF_RECURRING_VARIABLE
 | 
Enum para recurrente monto variable
 | 
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
 | 
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
 | 
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
 | 
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
 | 
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
 | 
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
 | 
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
 | 
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
Enum: CHECKING, SIGHT,  PREPAID
 | 
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
 | 
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
 | 
 |  |
| 
amountPolicy
 | 
Pol&iacute;tica de montos por ocurrencia
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
Define l&iacute;mites de cada cobro y topes agregados
 | 
 |  |
| 
currency
 | 
Moneda del plan
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
Moneda para validaci&oacute;n y l&iacute;mites
 | 
 |  |
| 
perOccurrence.min
 | 
M&iacute;nimo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000
 | 
Si se omite, sin m&iacute;nimo
 | 
 |  |
| 
perOccurrence.max
 | 
M&aacute;ximo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
200000
 | 
Tope por cobro
 | 
 |  |
| 
periodicCaps.daily
 | 
Tope diario
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
300000
 | 
Suma de cobros por d&iacute;a
 | 
 |  |
| 
periodicCaps.monthly
 | 
Tope mensual
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000000
 | 
Suma de cobros por mes
 | 
 |  |
| 
Limits
 | 
 | 
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
 | 
 | 
 |  |
| 
limits.totalAmountLimit
 | 
Tope total del plan
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
3000000
 | 
L&iacute;mite acumulado global
 | 
 |  |
| 
limits.maxOccurrences
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
24
 | 
L&iacute;mite de ejecuciones
 | 
 |  |
| 
recurrence
 | 
 | 
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
 | 
 | 
 |  |
| 
frequency
 | 
Frecuencia base
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
 | 
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
 | 
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
Requerido si regla por d&iacute;a del mes
 | 
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
Requerido si WEEKLY (MON..SUN)
 | 
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
FIRST,SECOND,THIRD,FOURTH,LAST
 | 
 |  |
| 
schedule
 | 
 | 
 | 
object
 | 
1..1
 | 
S&iacute;
 | 
 | 
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
Inicio de vigencia
 | 
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
Si se fija exacto (UTC)
 | 
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
 | 
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
 | 
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
 | 
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
 | 
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
 | 
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
E2E-PLAN-VAR-0001
 | 
Para conciliaci&oacute;n del plan
 | 
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
Servicio seg&uacute;n consumo
 | 
Descripci&oacute;n general
 | 
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
 | 
 |  |

### Ejemplo de petici&oacute;n 

### **Response &mdash; Pago Recurrente con Monto Variable &mdash; Persona Natural (PN)**

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
Contenedor de resultado
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
ID del plan
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
RPV-2025-0001
 | 
Identificador del plan
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
3f7c9e9c-&hellip;
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
Fecha act. estado
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
planStatus
 | 
Estado del plan
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
ACTIVE,PAUSED,CANCELLED,COMPLETED,EXPIRED,PENDING_APPROVAL
 |  |
| 
statusReason
 | 
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
statusReason.code
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
&ndash;
 |  |
| 
statusReason.description
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
&ndash;
 |  |
| 
statusReason.category
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
OK,VALIDATION,FUNDS,AML,TECHNICAL,CUTOFF,CONSENT,AUTHZ
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
Calculada
 |  |
| 
executions
 | 
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
summary
 | 
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
limits.maxOccurrences
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
24
 | 
&ndash;
 |  |
| 
limits.occurrencesRemaining
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
23
 | 
&ndash;
 |  |
| 
limits.totalAmountLimit
 | 
Tope total plan
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
3000000
 | 
&ndash;
 |  |
| 
limits.totalAmountUsed
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
amountPolicy
 | 
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
currency
 | 
Moneda del plan
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
Informaci&oacute;n recibida en el request
 |  |
| 
perOccurrence
 | 
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
min
 | 
M&iacute;nimo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000
 | 
debtorName
 |  |
| 
max
 | 
M&aacute;ximo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
200000
 | 
debtorAccountNumber
 |  |
| 
periodicCaps
 | 
 | 
 | 
 | 
1..1
 | 
S&iacute;
 | 
 | 
debtorAccountType
 |  |
| 
daily
 | 
Tope diario
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
300000
 | 
debtorIdentification
 |  |
| 
monthly
 | 
Tope mensual
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000000
 | 
Informaci&oacute;n recibida en el request
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
PROVEEDOR XYZ
 | 
&ndash;
 |  |
| 
creditorIdentification
 | 
RUT del beneficiario
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
recurrence
 | 
Reglas de recurrencia
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
Frecuencia/intervalo
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
DAILY,WEEKLY,MONTHLY,QUARTERLY,YEARLY
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
Requerido si regla por d&iacute;a del mes
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
Requerido si WEEKLY (MON..SUN)
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
FIRST,SECOND,THIRD,FOURTH,LAST
 |  |
| 
schedule
 | 
Fechas y ocurrencias
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
Ventana y recuento
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
Inicio de vigencia
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
Exacto (UTC)
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
Hora por ocurrencia (UTC)
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
Informaci&oacute;n recibida en el request
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
Informaci&oacute;n recibida en el request
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
Informaci&oacute;n recibida en el request
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
E2E-PLAN-VAR-0001
 | 
Informaci&oacute;n recibida en el request
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
Seg&uacute;n consumo
 | 
 |  |

**Ejemplo de respuesta**

# Iniciaci&oacute;n de Pagos Recurrentes con Monto Variables - Crear pago - Persona Jur&iacute;dica: (POST  /variable-recurring-payments/v1/PJ/variable-recurring-payments)

 Crear una **orden de pago recurrente con monto variable para persona jur&iacute;dica**. Se recibe la solicitud con los datos del deudor, acreedor, monto y prop&oacute;sito, y se devuelve el *paymentID* junto con el estado inicial.

## Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje del **authorization_details**, lo que facilita su comprensi&oacute;n.

![Recurrin_Variable_payments_Authorization_details_PJ.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Authorization_details_PJ.png)

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura del mensaje para el **request de la orden de pago recurrente con monto variable**, lo que facilita su comprensi&oacute;n.

![Recurrin_Variable_payments_Request_PJ.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Request_PJ.png)

### Authorization Details &mdash; Pago Recurrente con Monto Variable &mdash; Persona Jur&iacute;dica (PJ)

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
variable-recurring-payments
 | 
Tipo fijo para este caso
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
["CreateVariableRecurringPayments"]
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
["v1/PJ/variable-recurring-payments"]
 | 
Endpoint expuesto para PJ
 |  |
| 
identifier
 | 
Identificador del payment
 | 
Max40Text
 | 
string
 | 
0..1
 | 
No
 | 
RPV-2025-0101
 | 
&Uacute;til para Read/Pause/Resume/Cancel
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
Instrucci&oacute;n del payment
 | 
&ndash;
 | 
object
 | 
1..1
 | 
S&iacute;*
 | 
&ndash;
 | 
Obligatoria en Create; opcional en Read/Pause/Resume/Cancel
 |  |
| 
amountPolicy
 | 
Pol&iacute;tica de montos
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
No hay amount fijo; se definen l&iacute;mites
 |  |
| 
amountPolicy.currency
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
amountPolicy.perOccurrence.min
 | 
M&iacute;nimo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000.00
 | 
M&iacute;nimo de cobro
 |  |
| 
amountPolicy.perOccurrence.max
 | 
M&aacute;ximo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
200000.00
 | 
Tope por cobro
 |  |
| 
amountPolicy.periodicCaps.daily
 | 
Tope diario
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
300000.00
 | 
Suma de cobros por d&iacute;a
 |  |
| 
amountPolicy.periodicCaps.monthly
 | 
Tope mensual
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000000.00
 | 
Suma de cobros por mes
 |  |
| 
limits
 | 
L&iacute;mites globales del payment
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
-
 |  |
| 
limits.totalAmountLimit.currency
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
&ndash;
 |  |
| 
limits.totalAmountLimit.value
 | 
Monto tope total
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
3000000.00
 | 
&ndash;
 |  |
| 
limits.maxOccurrences
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
24
 | 
&ndash;
 |  |
| 
recurrence
 | 
Reglas de recurrencia
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
Frecuencia/intervalo
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
Fechas y ocurrencias
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
Ventana y recuento
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
Operativa/feriados
 |  |
| 
purpose
 | 
Motivo del consentimiento
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
Descripci&oacute;n 
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
debtor.identification
 | 
Tipo de identificaci&oacute;n
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
RUT
 |  |
| 
debtor.account.type
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
Enum: CHECKING, SIGHT,  PREPAID
 |  |
| 
debtor.account.number
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
debtor.representative.name
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
debtor.representative.identification.type
 | 
Tipo ID apoderado
 | 
Max20Text
 | 
string (enum)
 | 
0..1
 | 
Condicional
 | 
CL_RUN
 | 
&ndash;
 |  |
| 
debtor.representative.identification.value
 | 
ID apoderado
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
&ndash;
 |  |
| 
debtor.representative.role
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
creditor
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
PROVEEDOR XYZ LTDA.
 | 
PN o PJ
 |  |
| 
creditor.identification
 | 
Tipo de identificaci&oacute;n
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
creditor.account.type
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
creditor.account.number
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
2026-11-01T23:59:59Z
 | 
Debe cubrir el per&iacute;odo del payment
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
24
 | 
L&iacute;mite de ejecuciones
 |  |
| 
totalAmountLimit
 | 
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
currency
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
Si se fija tope global
 |  |
| 
value
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
3000000.00
 | 
Suma de todas las ocurrencias
 |  |

### Ejemplo de petici&oacute;n 

### **Request &mdash; Pago Recurrente con Monto Variable &mdash; Persona Juridica (PJ)**

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
Arreglo del payment recurrente
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
Un payment por request
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
Vincula el payment con el consentimiento
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
TEF_RECURRING_VARIABLE
 | 
Recurrente monto variable
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
Cuenta origen
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
Enum: CHECKING, SIGHT,  PREPAID
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
APODERADO, GERENTE, FIRMA A
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
Enum: CHECKING, SIGHT,  PREPAID
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
PROVEEDOR XYZ LTDA.
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
amountPolicy
 | 
Pol&iacute;tica de montos por ocurrencia
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
Define l&iacute;mites por cobro y topes agregados
 |  |
| 
currency
 | 
Moneda del payment
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
Moneda para validaci&oacute;n y l&iacute;mites
 |  |
| 
perOccurrence
 | 
 | 
 | 
 | 
1..1
 | 
S&iacute;
 | 
 | 
 |  |
| 
min
 | 
M&iacute;nimo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000
 | 
Minimo
 |  |
| 
max
 | 
M&aacute;ximo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
200000
 | 
Tope por cobro
 |  |
| 
periodicCaps
 | 
 | 
 | 
 | 
1..1
 | 
S&iacute;
 | 
 | 
 |  |
| 
daily
 | 
Tope diario
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
300000
 | 
Suma de cobros por d&iacute;a
 |  |
| 
monthly
 | 
Tope mensual
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000000
 | 
Suma de cobros por mes
 |  |
| 
limits
 | 
 | 
 | 
 | 
1..1
 | 
S&iacute;
 | 
 | 
 |  |
| 
limits/totalAmountLimit
 | 
Tope total del payment
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
3000000
 | 
L&iacute;mite acumulado global
 |  |
| 
limits/maxOccurrences
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
24
 | 
L&iacute;mite de ejecuciones
 |  |
| 
recurrence
 | 
 | 
 | 
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
Frecuencia base
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
Requerido si regla por d&iacute;a del mes
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
Requerido si WEEKLY (MON..SUN)
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
FIRST,SECOND,THIRD,FOURTH,LAST
 |  |
| 
schedule
 | 
 | 
 | 
 | 
1..1
 | 
S&iacute;
 | 
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
Inicio de vigencia
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
Si se fija exacto (UTC)
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
Ventanillas/feriados
 |  |
| 
endToEndId
 | 
ID punta-a-punta (payment)
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
E2E-payment-VAR-0001
 | 
Para conciliaci&oacute;n del payment
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
Servicio seg&uacute;n consumo
 | 
Descripci&oacute;n general
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

### **Response &mdash; Pago Recurrente con Monto Variable &mdash; Persona Jur&iacute;dica (PJ)**

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
Contenedor de resultado
 |  |
| 
payments
 | 
Arreglo del payment recurrente
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
Un payment
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
RPV-2025-0101
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
3f7c9e9c-&hellip;
 | 
Consentimiento utilizado
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
Alta del payment
 |  |
| 
statusUpdateDateTime
 | 
Fecha act. estado
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
Motivo del estado
 |  |
| 
statusReason.code
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
statusReason-description
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
payment activo
 | 
Texto legible
 |  |
| 
statusReason-category
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
OK,VALIDATION,FUNDS,AML,TECHNICAL,CUTOFF,CONSENT,AUTHZ
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
Calculada
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
 | 
 | 
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
Ocurrencias paymentificadas
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
L&iacute;mites del payment
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
Topes de ocurrencias/montos
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
24
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
23
 | 
&ndash;
 |  |
| 
totalAmountLimit
 | 
Tope total payment
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
3000000
 | 
&ndash;
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
amountPolicy
 | 
 | 
 | 
 | 
1..1
 | 
S&iacute;
 | 
 | 
 |  |
| 
currency
 | 
Moneda del pago
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
R&eacute;plica del request
 |  |
| 
perOccurrence
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
min
 | 
M&iacute;nimo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000
 | 
R&eacute;plica del request si exist&iacute;a
 |  |
| 
max
 | 
M&aacute;ximo por ocurrencia
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
200000
 | 
R&eacute;plica del request
 |  |
| 
periodicCaps
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
daily
 | 
Tope diario
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
300000
 | 
R&eacute;plica del request
 |  |
| 
monthly
 | 
Tope mensual
 | 
ActiveOrHistoricCurrencyAndAmount
 | 
number (decimal)
 | 
1..1
 | 
S&iacute;
 | 
1000000
 | 
R&eacute;plica del request
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
R&eacute;plica de request
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
Enum: CHECKING, SIGHT,  PREPAID
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
R&eacute;plica si se inform&oacute;
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
R&eacute;plica si se inform&oacute;
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
Enum: CHECKING, SIGHT,  PREPAID
 |  |
| 
creditorName
 | 
Nombre/Raz&oacute;n social delbeneficiario
 | 
Max140Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
PROVEEDOR XYZ LTDA.
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
recurrence
 | 
Reglas de recurrencia
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
Frecuencia/intervalo
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
DAILY,WEEKLY,MONTHLY,QUARTERLY,YEARLY
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
Requerido si regla por d&iacute;a del mes
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
Requerido si WEEKLY (MON..SUN)
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
FIRST,SECOND,THIRD,FOURTH,LAST
 |  |
| 
schedule
 | 
Fechas y ocurrencias
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
Ventana y recuento
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
Inicio de vigencia
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
Si se fija exacto (UTC)
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
Hora por ocurrencia (UTC)
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
R&eacute;plica del request
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
R&eacute;plica del request
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
R&eacute;plica del request
 |  |
| 
endToEndId
 | 
ID punta-a-punta (payment)
 | 
Max35Text
 | 
string
 | 
1..1
 | 
S&iacute;
 | 
E2E-payment-VAR-0001
 | 
R&eacute;plica del request si exist&iacute;a
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
Seg&uacute;n consumo
 | 
R&eacute;plica del request
 |  |

**Ejemplo de respuesta**

# Consulta de estado de un Pago por `paymentId`

Una vez creada una orden de **Pago ** (PN o PJ), el `paymentId` retornado en la respuesta puede ser utilizado para **consultar el estado y los detalles actualizados del pago**.

Este endpoint permite recuperar la informaci&oacute;n m&aacute;s reciente de la orden, incluyendo su estado, fechas relevantes y datos principales del deudor y beneficiario.

### Endpoint

**GET**
`/variable-recurring-payments/v1/{participantType}/variable-recurring-payments/{paymentId}`

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

- 🖼️ [Request_PJ_ API.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Request_PJ_%20API.png) (26 KB)
- 🖼️ [Authorization Details _PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Authorization%20Details%20_PN_%20Request.png) (18 KB)
- 🖼️ [Authorization_details_PJ_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Authorization_details_PJ_%20Request.png) (21 KB)
- 📊 [Payments-ID v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Payments-ID%20v1.0.0.xlsx) (42 KB)
- 🖼️ [AD_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/AD_PN_%20Request.png) (17 KB)
- 🖼️ [Request_PN_ Request.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Request_PN_%20Request.png) (25 KB)
- 🖼️ [UML Diagram - Payments.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/UML%20Diagram%20-%20Payments.png) (83 KB)
- 🖼️ [UML Diagram - loans.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/UML%20Diagram%20-%20loans.png) (55 KB)
- 🖼️ [Recurrin_Variable_payments_Authorization_details_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Authorization_details_PN.png) (44 KB)
- 📊 [Payments v1.0.0.xlsx](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Payments%20v1.0.0.xlsx) (36 KB)
- 🖼️ [Recurrin_Variable_payments_Request_PN.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Request_PN.png) (38 KB)
- 🖼️ [Recurrin_Variable_payments_Request_PJ.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Request_PJ.png) (40 KB)
- 🖼️ [Recurrin_Variable_payments_Authorization_details_PJ.png](../attachments/v1-0-0-informacion-general-iniciacion-de-pagos-recurrentes-con-monto-variable/Recurrin_Variable_payments_Authorization_details_PJ.png) (46 KB)
