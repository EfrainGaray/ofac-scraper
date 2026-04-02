---
title: "Histórico-Especificaciones de integración y operación"
id: "124489227"
version: 1
updated: "2025-12-30T14:18:55.770Z"
path: "finanzas-abiertas-chile/especificaciones-historicas/historico-especificaciones-de-integracion-y-operacion"
---
# Histórico-Especificaciones de integración y operación

Con la implementaci&oacute;n de la nueva regulaci&oacute;n fintech en Chile, es esencial contar con especificaciones claras y detalladas para la integraci&oacute;n y operaci&oacute;n de las APIs dentro del ecosistema financiero. Esta secci&oacute;n aborda las pautas t&eacute;cnicas y operativas necesarias para garantizar que las soluciones tecnol&oacute;gicas cumplan con los requisitos regulatorios establecidos por la **Comisi&oacute;n para el Mercado Financiero (CMF)** y otras autoridades competentes. Las especificaciones incluyen aspectos clave como la interoperabilidad entre plataformas, los protocolos de comunicaci&oacute;n, las normas de seguridad y la protecci&oacute;n de datos, as&iacute; como los procedimientos operativos para una gesti&oacute;n eficiente y conforme a la ley. A trav&eacute;s de estas especificaciones, se busca asegurar un entorno fintech transparente, seguro y alineado con la normativa vigente.

## Actores del sistema de finanzas abiertas en Chile

| 
**Actor / T&eacute;rmino**
 | 
**Abreviatura**
 | 
**Definici&oacute;n / Rol**
 |  |
| --- | --- | --- | --- |
| 
**Instituci&oacute;n Proveedora de Cuentas**
 | 
**IPC**
 | 
Entidad responsable de la **custodia** y **administraci&oacute;n** de las cuentas de sus clientes. Puede ser un banco, cooperativa o emisor de cuentas de prepago que mantenga y opere cuentas a nombre de los usuarios.
 |  |
| 
**Instituci&oacute;n Proveedora de Informaci&oacute;n**
 | 
**IPI**
 | 
Entidad autorizada para **acceder** y **agregar** informaci&oacute;n financiera del usuario (p. ej., saldos, movimientos, productos contratados), siempre con el consentimiento expreso de este.
 |  |
| 
**Proveedor de Servicios de Iniciaci&oacute;n de Pagos**
 | 
**PSIP**
 | 
Entidad que puede **iniciar** o **ejecutar** pagos en nombre de un usuario, previa autorizaci&oacute;n. Su funci&oacute;n es orquestar la instrucci&oacute;n de pago hacia el IPC, sin custodiar directamente los fondos del usuario.
 |  |
| 
**Proveedor de Servicios Basados en Informaci&oacute;n**
 | 
**PSBI**
 | 
Entidad que puede agregar informaci&oacute;n financiera del usuario. Cubre un espectro m&aacute;s amplio de servicios que hacen uso de los datos (por ejemplo, agregadores, an&aacute;lisis de gasto, aplicaciones de planeaci&oacute;n financiera)
 |  |
| 
**Usuario** (Persona Natural o Jur&iacute;dica)
 | 
*N/A*
 | 
Persona (natural o jur&iacute;dica) que hace uso de servicios financieros dentro del SFA. Puede acceder a m&uacute;ltiples servicios, como la iniciaci&oacute;n de pagos, la consulta de informaci&oacute;n consolidada, comparadores de productos, etc.
 |  |
| 
**Proveedor de Servicios de Certificaci&oacute;n**
 | 
**PSC**
 | 
Entidad autorizada a emitir y gestionar **Certificados Digitales (CD)** y a operar dentro de una **Infraestructura de Claves P&uacute;blicas (PKI)**
 |  |

Principios de dise&ntilde;o