---
title: "Especificaciones de integración y operación"
id: "124158055"
version: 1
updated: "2025-12-30T14:09:25.521Z"
path: "finanzas-abiertas-chile/especificaciones-de-integracion-y-operacion"
---
# Especificaciones de integración y operación

Esta secci&oacute;n aborda las pautas t&eacute;cnicas y operativas necesarias para que las soluciones tecnol&oacute;gicas cumplan con los requisitos regulatorios establecidos por la **Comisi&oacute;n para el Mercado Financiero (CMF)**. 

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
**Prestador de Servicios de Iniciaci&oacute;n de Pagos**
 | 
**PSIP**
 | 
Entidad que puede **iniciar** o **ejecutar** pagos en nombre de un usuario, previa autorizaci&oacute;n. Su funci&oacute;n es orquestar la instrucci&oacute;n de pago hacia el IPC, sin custodiar directamente los fondos del usuario.
 |  |
| 
**Prestador de Servicios Basados en Informaci&oacute;n**
 | 
**PSBI**
 | 
Entidad que puede agregar informaci&oacute;n financiera del usuario. Cubre un espectro m&aacute;s amplio de servicios que hacen uso de los datos (por ejemplo, agregadores, an&aacute;lisis de gasto, aplicaciones de planeaci&oacute;n financiera)
 |  |
| 
**Usuario Final **(Persona Natural o Jur&iacute;dica)
 | 
**PSU**
 | 
Persona (natural o jur&iacute;dica) que hace uso de servicios financieros dentro del SFA. Puede acceder a m&uacute;ltiples servicios, como la iniciaci&oacute;n de pagos, la consulta de informaci&oacute;n consolidada, comparadores de productos, etc.
 |  |
| 
**Autoridad de Certificaci&oacute;n **
 | 
**CA**
 | 
Entidad autorizada a emitir y gestionar **Certificados Digitales (CD)** y a operar dentro de una **Infraestructura de Claves P&uacute;blicas (PKI)**
 |  |