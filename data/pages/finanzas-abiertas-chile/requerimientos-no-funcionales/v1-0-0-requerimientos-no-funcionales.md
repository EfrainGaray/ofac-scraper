---
title: "v1.0.0 Requerimientos no funcionales"
id: "124553139"
version: 1
updated: "2025-12-30T19:42:06.868Z"
path: "finanzas-abiertas-chile/requerimientos-no-funcionales/v1-0-0-requerimientos-no-funcionales"
---
# v1.0.0 Requerimientos no funcionales

## Introducci&oacute;n

Este cap&iacute;tulo consolida los requerimientos no funcionales establecidos por la normativa chilena para el funcionamiento del Sistema de Finanzas Abiertas (SFA). 
Cada apartado describe un aspecto fundamental del desempe&ntilde;o operativo de las APIs y servicios, proporcionando claridad sobre los est&aacute;ndares m&iacute;nimos exigidos y los par&aacute;metros que deber&aacute;n observar las IPI, IPC, PSBI y PSIP.

## L&iacute;mites Operacionales (TPS y TPM)

Corresponde a los umbrales m&aacute;ximos de operaci&oacute;n medidos en transacciones por segundo (TPS) y transacciones por minuto (TPM), que permiten asegurar que las interfaces del SFA soporten cargas adecuadas y funcionen dentro de par&aacute;metros estables. 

Conforme al Anexo T&eacute;cnico de la NCG 514, cada Instituci&oacute;n Proveedora de Informaci&oacute;n (IPI) deber&aacute; implementar mecanismos de control que aseguren la observancia de los siguientes l&iacute;mites operacionales:

- 
10 transacciones por Segundo (TPS) por IPI hacia todos los PSBI/PSIP.

- 
60 transacciones por Minuto (TPM) por IPI hacia cada PSBI o PSIP.

- 
Las m&eacute;tricas se aplican a nivel de endpoint, contabilizando &uacute;nicamente solicitudes exitosas (c&oacute;digos HTTP 2XX).

Cuando se superen dichos umbrales:

- 
Exceso de TPS &rarr; Error 529 (Site Overloaded) acompa&ntilde;ado de header Retry-After con un rango aleatorio entre 0 y 5 segundos.

- 
Exceso de TPM &rarr; Error 429 (Too Many Requests) acompa&ntilde;ado de Retry-After fijado en el minuto siguiente con un rango aleatorio entre 0 y 15 segundos.

*Referencia normativa oficial: NCG 514 &ndash; Anexo 3. Secci&oacute;n C - Disponibilidad y Rendimiento (p&aacute;g. 53)*

## L&iacute;mites de Tr&aacute;fico

Hace referencia al volumen total de consultas recibidas, exitosas y fallidas por API, endpoint y participante, permitiendo evaluar la demanda sobre las interfaces y su correcto funcionamiento.

La normativa exige que las IPI reporten:

- 
N&uacute;mero total de llamadas recibidas por API.

- 
N&uacute;mero de llamadas exitosas.

- 
Desagregaci&oacute;n por tipo de informaci&oacute;n y por PSBI/PSIP.

Esto permite monitorear la carga de tr&aacute;fico sobre cada interfaz y evaluar la estabilidad del sistema.

*Referencia normativa: NCG 514 &ndash; Anexo 3*

## Desempe&ntilde;o (TTLB)

Es el par&aacute;metro oficial exigido por la normativa es el Time to Last Byte (TTLB), definido como el tiempo entre la recepci&oacute;n de una solicitud en el Gateway de la IPI y la respuesta completa emitida por dicha interfaz.

Est&aacute;ndares exigidos por la normativa:

- 
Respecto al tiempo de procesamiento de las APIs de datos, ellas deber&aacute;n procesar transacciones en un tiempo m&aacute;ximo de 4.000 milisegundos, considerando el momento en que se realiza la consulta de la API y el tiempo TTLB transcurrido de la respuesta, conforme revelen las marcas de tiempo respectivas.

- 
Trat&aacute;ndose de endpoints que provean un n&uacute;mero relevante de registros, y que sean debidamente identificados como tales en las especificaciones que da cuenta el Anexo N&deg;3 de esta Norma, la m&eacute;trica de rendimiento exigida se aplicar&aacute; por p&aacute;gina de respuesta, considerando hasta 100 registros por cada p&aacute;gina.

- 
Las APIs de iniciaci&oacute;n de pagos deber&aacute;n procesar transacciones en un tiempo m&aacute;ximo de 800 milisegundos.

*Referencia normativa oficial: Regulaci&oacute;n del SFA de la Ley Fintech. Secci&oacute;n Disponibilidad y rendimiento (p&aacute;g. 56)*

## Disponibilidad

Corresponde al porcentaje de tiempo en que las APIs deben encontrarse operativas y accesibles para su uso, con est&aacute;ndares diarios y mensuales definidos normativamente.

Las APIs deben cumplir con los siguientes m&iacute;nimos normativos:

**APIs de datos:**

- 
95% disponibilidad de forma diaria por d&iacute;a calendario.

- 
99% disponibilidad de forma mensual.

**APIs de iniciaci&oacute;n de pagos:**

- 
95% disponibilidad de forma diaria por d&iacute;a calendario.

- 
99,5% disponibilidad de forma mensual.

Exclusiones del c&aacute;lculo de indisponibilidad:

- 
Mantenciones programadas.

- 
Suspensiones temporales ordenadas por la CMF.

Marcha Blanca (primeros 6 meses por API):

- 
90% disponibilidad diaria.

- 
95% mensual.

## Tiempo de Espera (Time Out)

Corresponde al tiempo m&aacute;ximo permitido para que una API procese una operaci&oacute;n antes de considerarse una falla, seg&uacute;n los l&iacute;mites establecidos por la normativa.

Una vez superado los l&iacute;mites m&aacute;ximos de procesamiento, se podr&aacute; aplicar el &ldquo;timeout&rdquo;: 

- 
4.000 ms para APIs de datos.

- 
800 ms para APIs de iniciaci&oacute;n de pagos.