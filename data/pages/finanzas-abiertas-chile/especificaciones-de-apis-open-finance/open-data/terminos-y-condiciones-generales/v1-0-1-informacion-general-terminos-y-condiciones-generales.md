---
title: "v1.0.1 - Información general - Términos y condiciones generales"
id: "124486049"
version: 1
updated: "2025-12-30T14:08:26.791Z"
path: "finanzas-abiertas-chile/especificaciones-de-apis-open-finance/open-data/terminos-y-condiciones-generales/v1-0-1-informacion-general-terminos-y-condiciones-generales"
---
# v1.0.1 - Información general - Términos y condiciones generales

## Cuentas : (GET /products-services/v1/opendata-accounts)

Consulta el listado de productos asociados a cuentas bancarias ofrecidos por instituci&oacute;n financiera.
![(200) - Sequence Diagram - Accounts.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Accounts.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Accounts.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Accounts.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-accounts?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
  "productServices": [
    {
      "productServiceId": "ACC_001",
      "productServiceType": "Cuenta",
      "productServiceName": "Cuenta Corriente Base",
      "providerId": "BCI001",
      "providerName": "Banco Ejemplo",
      "currency": "CLP",
      "status": "Activo",
      "validFrom": "2025-01-01T00:00:00Z",
      "validTo": "2025-12-31T23:59:59Z",
      "description": "Cuenta con servicios mínimos y bajo costo",
      "maintenanceCost": {
        "periodicity": "Mensual",
        "amount": "1500",
        "currency": "CLP",
        "base": "Saldo promedio mensual",
        "exemptionCondition": "Exento si saldo mensual > 1.000.000"
      },
      "commissions": [],
      "termsDuration": 12,
      "benefits": "Acceso a cajeros sin comisión",
      "eligibilityCriteria": "Solo personas naturales mayores de 18 años",
      "clientType": "Persona Natural",
      "minOpeningStandards": "Documentación de identidad y comprobante de domicilio",
      "additionalNotes": "Orientado a clientes con uso regular de canales digitales",
      "accounts": [
        {
          "accountType": "Cuenta Corriente",
          "accountSubType": "Personal",
          "minimumOpeningAmount": "5000",
          "overdraftAvailability": true,
          "overdraftLimit": "200000",
          "interestRateCredit": "2.5% mensual",
          "periodRateCredit": "Mensual",
          "interestRateDebit": "0.1% mensual",
          "periodRateDebit": "Mensual",
          "maximumOperations": 10,
          "operationScope": "Sucursales y canales digitales"
        }
      ]
    }
  ],
  "links": {
    "self": "https://api-chile.cl/products-services/v1/opendata-accounts?page=1&pageSize=1"
  },
  "meta": {
    "firstAvailableDateTime": "2025-01-10T08:00:00Z",
    "lastAvailableDateTime": "2025-12-31T18:00:00Z",
    "totalPages": 5
  }
}
```

## Tarjetas de Cr&eacute;ditos : (GET /products-services/v1/opendata-credit-cards)

Consulta el listado de tarjetas de cr&eacute;ditos de un cliente, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Credits Cards.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Credits%20Cards.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Credits Cards.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Credits%20Cards.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-credit-cards?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "productServices": [
      {
        "productServiceId": "CARD_001",
        "productServiceType": "Tarjeta Crédito",
        "productServiceName": "Tarjeta Crédito Base",
        "providerId": "BCI001",
        "providerName": "Banco Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Tarjeta estándar con beneficios básicos",
        "maintenanceCost": {
          "periodicity": "Anual",
          "amount": "19900",
          "currency": "CLP",
          "base": "Monto fijo",
          "exemptionCondition": "Exonerado si facturación > $500.000 mensual"
        },
        "commissions": [
          {
            "type": "Administrativa",
            "amount": "0.5%",
            "currency": "CLP",
            "base": "Monto de compra",
            "exemptionCondition": "No aplica"
          }
        ],
        "termsDuration": 12,
        "benefits": "Promociones asociadas a comercios locales",
        "eligibilityCriteria": "Renta >= $400.000",
        "clientType": "Persona Natural",
        "minOpeningStandards": "Verificación de antecedentes comerciales",
        "additionalNotes": "Tarjeta básica para uso nacional",
        "cards": [
          {
            "cardType": "Tarjeta Crédito",
            "cardSubType": "Clásica",
            "creditLimit": {
              "minimum": "100000",
              "maximum": "2000000",
              "currency": "CLP"
            },
            "internationalUsage": true,
            "billingCycle": "Mensual",
            "dueDate": 10,
            "interestRatePurchases": "2.2% mensual",
            "periodRatePurchases": "Mensual",
            "cashAdvance": {
              "maximumPencentage": "30%",
              "fee": "5.0",
              "currency": "CLP",
              "interestRate": "3.0% mensual",
              "periodRate": "Mensual",
              "conditions": "Máx 30% del límite disponible"
            },
            "minimumPaymentPercent": "10%",
            "gracePeriodDays": 45,
            "loyaltyProgram": "Acumula puntos canjeables en comercios asociados"
          }
        ]
      }
    ],
    "links": {
      "self": "https://api-chile.cl/products-services/v1/opendata-credit-cards?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-01T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T18:00:00Z",
      "totalPages": 3
    }
  }
```

## Operaciones de Cr&eacute;ditos : (GET /products-services/v1/opendata-credit-operations)

Consulta el listado de las operaciones de cr&eacute;ditos de un cliente, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Credit Operations.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Credit%20Operations.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Credit Operations.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Credit%20Operations.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-credit-operations?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "productServices": [
      {
        "productServiceId": "CRED_001",
        "productServiceType": "Crédito",
        "productServiceName": "Crédito de Consumo Básico",
        "providerId": "BCI001",
        "providerName": "Banco Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Crédito de consumo con requisitos mínimos",
        "maintenanceCost": {
          "periodicity": "Mensual",
          "amount": "0",
          "currency": "CLP"
        },
        "commissions": [],
        "termsDuration": 24,
        "benefits": "Tasas competitivas para clientes con buen historial",
        "eligibilityCriteria": "Renta >= $400.000",
        "clientType": "Persona Natural",
        "creditOperations": [
          {
            "creditType": "Personal",
            "creditSubType": "Consumo",
            "minTermMonths": 6,
            "maxTermMonths": 48,
            "minAmount": "100000",
            "maxAmount": "3000000",
            "interesRate": "2.1% mensual",
            "periodInterestRate": "Mensual",
            "typeInterestRate": "Fija",
            "gracePeriodMonths": 3,
            "installmentsAllowed": true,
            "installmentsFrequency": "Mensual",
            "collateralRequired": false
          }
        ]
      }
    ],
    "links": {
      "self": "https://api-chile.cl/products-services/v1/opendata-credit-operations?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-05T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T23:59:59Z",
      "totalPages": 5
    }
  }
```

## Operaciones de Cr&eacute;ditos : (GET /products-services/v1/opendata-insurance-policies)

Consulta el listado de p&oacute;lizas de seguros asociados a un cliente, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Insurance Policies.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Insurance%20Policies.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Insurance Policies.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Insurance%20Policies.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

   

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-insurance-policies?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none

{
    "productServices": [
      {
        "productServiceId": "INS_001",
        "productServiceType": "Seguro",
        "productServiceName": "Seguro de Vida Básico",
        "providerId": "BCI001",
        "providerName": "Banco Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Póliza de vida con cobertura estándar",
        "maintenanceCost": {
          "periodicity": "Mensual",
          "amount": "0",
          "currency": "CLP"
        },
        "commissions": [],
        "termsDuration": 12,
        "benefits": "Protección en caso de fallecimiento e invalidez total",
        "eligibilityCriteria": "Personas entre 18 y 65 años",
        "clientType": "Persona Natural",
        "insurancePolicies": [
          {
            "policyType": "Vida",
            "coverageDescription": "Cobertura de muerte e invalidez",
            "sumInsured": "10.000.000",
            "deductible": "100.000",
            "coInsuranceRate": "10%",
            "maxBeneficiaries": 3,
            "gracePeriodDays": 30,
            "renewalConditions": "Renovable anualmente",
            "exclusions": "Suicidio, accidentes preexistentes",
            "premiumRange": "$10.000 - $50.000/ mensual",
            "availableRegion": ["Región Metropolitana", "Región de Valparaíso"]
          }
        ]
      }
    ],
    "links": {
      "self": "https://api-chile.cl/products-services/v1/opendata-insurance-policies?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-05T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T23:59:59Z",
      "totalPages": 5
    }
  }
  
```

## Operaciones de Cr&eacute;ditos : (GET /products-services/v1/opendata-saving-instruments)

Consulta el listado de instrumentos de ahorro asociados a un cliente, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Savings Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Savings%20Instruments.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Savings Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Savings%20Instruments.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-savings-instruments?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "productServices": [
      {
        "productServiceId": "SAV_001",
        "productServiceType": "Ahorro",
        "productServiceName": "Depósito a Plazo Fijo",
        "providerId": "BCI001",
        "providerName": "Banco Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Instrumento de depósito con tasa fija a plazo",
        "maintenanceCost": {
          "periodicity": "Mensual",
          "amount": "0",
          "currency": "CLP"
        },
        "commissions": [],
        "termsDuration": 12,
        "benefits": "Tasa preferente para plazos mayores a 6 meses",
        "eligibilityCriteria": "Monto mínimo $100.000 para apertura",
        "clientType": "Persona Natural",
        "savingsInstruments": [
          {
            "savingsType": "Deposito a plazo",
            "savingsSubType": "Fijo",
            "minTermMonths": 3,
            "maxTermMonths": 12,
            "interestRate": "0.7% mensual",
            "periodInterestRate": "Mensual",
            "typeInterestRate": "Fija",
            "capitalizationPeriod": "Al vencimiento",
            "minDepositAmount": "100.000",
            "maxDepositAmount": "10.000.000",
            "partialWithdrawalAllowed": false,
            "earlyWithdrawalPenalties": "Penalización del 2% sobre capital",
            "autoRenewal": true
          }
        ]
      }
    ],
    "links": {
      "self": "https://api-chile.cl/products-services/v1/opendata-savings-instruments?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-05T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T23:59:59Z",
      "totalPages": 5
    }
  }
```

## Operaciones de Cr&eacute;ditos : (GET /products-services/v1/opendata-investment-instruments)

Consulta el listado de instrumentos de inversi&oacute;n de un cliente, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Investment Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Investment%20Instruments.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Investment Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Investment%20Instruments.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-investment-instruments?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "productServices": [
      {
        "productServiceId": "INV_001",
        "productServiceType": "Inversión",
        "productServiceName": "Fondo Mutuo Renta Fija",
        "providerId": "BCI001",
        "providerName": "Banco Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Fondo mutuo con predominio de instrumentos de renta fija",
        "maintenanceCost": {
          "periodicity": "Anual",
          "amount": "0",
          "currency": "CLP"
        },
        "commissions": [],
        "termsDuration": 12,
        "benefits": "Estabilidad, bajo riesgo",
        "eligibilityCriteria": "Apto para clientes conservadores",
        "clientType": "Persona Natural",
        "investmentInstruments": [
          {
            "instrumentType": "Fondo Mutuo",
            "instrumentSubType": "Renta Fija Nacional",
            "riskProfile": "Bajo",
            "investmentOptions": [
              {
                "currency": "CLP",
                "minInvestmentAmount": "100.000",
                "maxInvestmentAmount": "50.000.000",
                "tenor": 12,
                "yieldRate": "5% anual estimado",
                "periodYieldRate": "Mensual",
                "typeYieldRate": "Variable",
                "conditions": "Disponible rescate en 72 horas"
              }
            ],
            "fees": {
              "managementFee": "1.0%",
              "periodManagementFee": "Anual",
              "subscriptionFee": "0%",
              "redemptionFee": "0.5% si se retira antes de 6 meses",
              "performanceFee": "0%",
              "conditions": "Comisión de salida se aplica a rescates tempranos"
            }
          }
        ]
      }
    ],
    "links": {
      "self": "https://api-chile.cl/products-services/v1/opendata-investment-instruments?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-05T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T23:59:59Z",
      "totalPages": 5
    }
  }
```

## Servicio de Operaciones de Tarjetas : (GET /products-services/v1/opendata-card-operation-services)

Consulta el listado de las operaciones de tarjetas de un cliente, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Card Operation Services.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Card%20Operation%20Services.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Card Operation Services.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Card%20Operation%20Services.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

 

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-card-operation-services?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "productServices": [
      {
        "productServiceId": "CARDSVC_001",
        "productServiceType": "Operaciones Tarjeta",
        "productServiceName": "Servicio de POS Físico Básico",
        "providerId": "BCI001",
        "providerName": "Banco Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Servicio básico para comercios con POS físico",
        "maintenanceCost": {
          "periodicity": "Mensual",
          "amount": "0",
          "currency": "CLP"
        },
        "commissions": [],
        "termsDuration": 12,
        "benefits": "Tarifas bajas para pymes",
        "eligibilityCriteria": "Comercio formalizado con giro minorista",
        "clientType": "Comercios",
        "cardOperationServices": [
          {
            "serviceType": "POS Físico",
            "serviceSubType": "Estándar",
            "acceptanceChannels": ["Contacto"],
            "coverageArea": "Nacional",
            "brandCompatibility": ["Visa", "Mastercard"],
            "transactionFee": "2.5% por transacción",
            "transactionFeeBase": "monto de la venta",
            "settlementTime": 48,
            "dailyTransactionLimit": 20,
            "fraudPreventionTools": "Tokenización básica",
            "chargeBackPolicy": "30 días para disputas"
          }
        ]
      }
    ],
    "links": {
      "self": "https://api.sfa-chile.cl/products-services/v1/opendata-card-operation-services?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-10T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T23:59:59Z",
      "totalPages": 5
    }
  }
```

## Proveedores de Servicios Financieros : (GET /products-services/v1/opendata-financial-service-providers)

Consulta el listado de proveedores de servicios financieros, asociadas a la instituci&oacute;n financiera consultada.
![(200) - Sequence Diagram - Financial Service Providers.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Financial%20Service%20Providers.png)

### Especificaci&oacute;n

El siguiente diagrama de clases UML representa gr&aacute;ficamente la estructura jer&aacute;rquica del mensaje, lo que facilita su comprensi&oacute;n.
![UML Diagram - Financial Sevice Providers.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Financial%20Sevice%20Providers.png)
### Diccionario de datos

La siguiente tabla detalla cada uno de los campos y entidades asociados al diagrama UML.

  

### Ejemplo de uso

#### Petici&oacute;n HTTP

```none
GET /v1/products-services/opendata-financial-service-providers?page=1&pageSize=1
Accept: application/json
```

#### Respuesta

```none
{
    "productServices": [
      {
        "productServiceId": "FSP_001",
        "productServiceType": "Proveedor Servicios Financieros",
        "productServiceName": "Gestión de Pagos Online",
        "providerId": "BCI001",
        "providerName": "PSIP Ejemplo",
        "currency": "CLP",
        "status": "Activo",
        "validFrom": "2025-01-01T00:00:00Z",
        "validTo": "2025-12-31T23:59:59Z",
        "description": "Servicio orientado a la recepción de pagos electrónicos",
        "maintenanceCost": {
          "periodicity": "Mensual",
          "amount": "500",
          "currency": "CLP",
          "base": "Fijo"
        },
        "commissions": [],
        "termsDuration": 12,
        "benefits": "Soporta recaudo de clientes con tarjetas de crédito, débito y prepago",
        "eligibilityCriteria": "Comercio formal con facturación regular",
        "clientType": "Comercios",
        "financialServiceProviders": [
          {
            "productId": "PRD12345",
            "productName": "Servicio de pagos",
            "description": "Procesamiento de pagos en línea",
            "serviceType": "Pagos",
            "pricingModel": "Por transacción",
            "region": "LatAm",
            "launchDate": "2025-01-01"
          }
        ]
      }
    ],
    "links": {
      "self": "https://api.sfa-chile.cl/products-services/v1/opendata-financial-service-providers?page=1&pageSize=1"
    },
    "meta": {
      "firstAvailableDateTime": "2025-01-10T08:00:00Z",
      "lastAvailableDateTime": "2025-12-31T23:59:59Z",
      "totalPages": 5
    }
  
```

---

## Attachments

- 🖼️ [UML Diagram - Accounts.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Accounts.png) (80 KB)
- 📊 [OpenData-Accounts-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Accounts-v1.0.xlsx) (31 KB)
- 🖼️ [UML Diagram - Credits Cards.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Credits%20Cards.png) (94 KB)
- 🖼️ [UML Diagram - Credit Operations.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Credit%20Operations.png) (83 KB)
- 📊 [OpenData-Credits-Cards-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Credits-Cards-v1.0.xlsx) (32 KB)
- 📊 [OpenData-Credit-Operations-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Credit-Operations-v1.0.xlsx) (31 KB)
- 🖼️ [UML Diagram - Insurance Policies.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Insurance%20Policies.png) (77 KB)
- 📊 [OpenData-Insurance-Policies-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Insurance-Policies-v1.0.xlsx) (31 KB)
- 🖼️ [UML Diagram - Savings Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Savings%20Instruments.png) (84 KB)
- 📊 [OpenData-Savings-Instruments-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Savings-Instruments-v1.0.xlsx) (32 KB)
- 🖼️ [UML Diagram - Investment Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Investment%20Instruments.png) (92 KB)
- 📊 [OpenData-Investment-Instruments-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Investment-Instruments-v1.0.xlsx) (32 KB)
- 🖼️ [UML Diagram - Card Operation Services.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Card%20Operation%20Services.png) (79 KB)
- 📊 [OpenData-Card-Operation-Service-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Card-Operation-Service-v1.0.xlsx) (32 KB)
- 🖼️ [UML Diagram - Financial Sevice Providers.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/UML%20Diagram%20-%20Financial%20Sevice%20Providers.png) (74 KB)
- 📊 [OpenData-Financial-Service-Providers-v1.0.xlsx](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/OpenData-Financial-Service-Providers-v1.0.xlsx) (31 KB)
- 🖼️ [(200) - Sequence Diagram - Accounts.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Accounts.png) (21 KB)
- 🖼️ [(200) - Sequence Diagram - Credits Cards.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Credits%20Cards.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Credit Operations.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Credit%20Operations.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Insurance Policies.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Insurance%20Policies.png) (17 KB)
- 🖼️ [(200) - Sequence Diagram - Savings Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Savings%20Instruments.png) (18 KB)
- 🖼️ [(200) - Sequence Diagram - Investment Instruments.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Investment%20Instruments.png) (19 KB)
- 🖼️ [(200) - Sequence Diagram - Card Operation Services.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Card%20Operation%20Services.png) (23 KB)
- 🖼️ [(200) - Sequence Diagram - Financial Service Providers.png](../attachments/v1-0-1-informacion-general-terminos-y-condiciones-generales/(200)%20-%20Sequence%20Diagram%20-%20Financial%20Service%20Providers.png) (22 KB)
