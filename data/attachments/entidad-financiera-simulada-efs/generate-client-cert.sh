#!/bin/bash
# Script para generar certificados de cliente con OIDs parametrizables
# Firma con CA del Directorio de Pruebas
# Fecha: 2026-02-11

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuración
CA_CERT="ca-cert.pem"
CA_KEY="ca-key.key"
TEMPLATE_CNF="client.cnf"
DAYS_VALID=365

echo -e "${BLUE}=========================================="
echo "Generador de Certificados de Cliente"
echo "Directorio - Ambiente de Pruebas"
echo -e "==========================================${NC}"
echo ""

# Verificar archivos CA
if [ ! -f "${CA_CERT}" ]; then
    echo -e "${RED}ERROR: No se encuentra el certificado CA: ${CA_CERT}${NC}"
    exit 1
fi

if [ ! -f "${CA_KEY}" ]; then
    echo -e "${RED}ERROR: No se encuentra la clave privada CA: ${CA_KEY}${NC}"
    exit 1
fi

if [ ! -f "${TEMPLATE_CNF}" ]; then
    echo -e "${RED}ERROR: No se encuentra el template: ${TEMPLATE_CNF}${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Archivos CA encontrados${NC}"
echo ""

# Solicitar datos del certificado
echo -e "${YELLOW}=== DATOS DEL CERTIFICADO ===${NC}"
echo ""

read -p "Nombre del certificado (sin extensión, ej: cliente-banco1): " CERT_NAME
if [ -z "${CERT_NAME}" ]; then
    echo -e "${RED}ERROR: El nombre del certificado es obligatorio${NC}"
    exit 1
fi

# Verificar si ya existe
if [ -f "${CERT_NAME}.pem" ] || [ -f "${CERT_NAME}.key" ]; then
    read -p "$(echo -e ${YELLOW}ADVERTENCIA: Ya existe un certificado con este nombre. ¿Sobrescribir? \(y/n\): ${NC})" OVERWRITE
    if [ "$OVERWRITE" != "y" ]; then
        echo "Operación cancelada"
        exit 0
    fi
fi

echo ""
echo -e "${YELLOW}=== DATOS OBLIGATORIOS ===${NC}"
echo ""

read -p "Common Name (CN) [ej: *.banco1.cl]: " CN
if [ -z "${CN}" ]; then
    echo -e "${RED}ERROR: Common Name es obligatorio${NC}"
    exit 1
fi

read -p "Organization Name (O) [ej: Banco 1 SA]: " ORG_NAME
if [ -z "${ORG_NAME}" ]; then
    echo -e "${RED}ERROR: Organization Name es obligatorio${NC}"
    exit 1
fi

read -p "Serial Number (serialNumber) [ej: 76123456-7]: " SERIAL_NUMBER
if [ -z "${SERIAL_NUMBER}" ]; then
    echo -e "${RED}ERROR: Serial Number es obligatorio${NC}"
    exit 1
fi

read -p "UID [ej: 12345678-1234-1234-1234-123456789012]: " UID_VALUE
if [ -z "${UID_VALUE}" ]; then
    echo -e "${RED}ERROR: UID es obligatorio${NC}"
    exit 1
fi

read -p "Organization Identifier (OID para org identifier) [default: 2.5.4.97]: " ORG_ID_OID
if [ -z "${ORG_ID_OID}" ]; then
    ORG_ID_OID="2.5.4.97"
fi

read -p "Organization Identifier (valor, ej: OFCL-12345678-1234-1234-1234-123456789012): " ORG_IDENTIFIER
if [ -z "${ORG_IDENTIFIER}" ]; then
    echo -e "${RED}ERROR: Organization Identifier es obligatorio${NC}"
    exit 1
fi

read -p "SubjectAltName DNS [ej: *.banco1.cl, banco1.cl]: " SAN_DNS
if [ -z "${SAN_DNS}" ]; then
    SAN_DNS="${CN}"
fi

echo ""
echo -e "${YELLOW}=== OIDs PERSONALIZADOS (Presiona ENTER para omitir) ===${NC}"
echo ""

echo -e "${BLUE}--- Datos Organizacionales (1.3.6.1.4.1.99999.1.x) ---${NC}"
read -p "RUT (1.3.6.1.4.1.99999.1.1) [ej: 76123456-7]: " OID_RUT
read -p "Nombre Legal (1.3.6.1.4.1.99999.1.2) [ej: MiBanco SA]: " OID_NOMBRE_LEGAL
read -p "Ecosistema (1.3.6.1.4.1.99999.1.3) [ej: SFA-Chile]: " OID_ECOSISTEMA
read -p "Entorno (1.3.6.1.4.1.99999.1.4) [ej: Desarrollo]: " OID_ENTORNO

echo ""
echo -e "${BLUE}--- Roles de la Entidad (1.3.6.1.4.1.99999.2.x) ---${NC}"
read -p "IPI - Iniciador de Pago Individual (1.3.6.1.4.1.99999.2.1) [y/n]: " OID_IPI
read -p "IPC - Iniciador de Pago Corporativo (1.3.6.1.4.1.99999.2.2) [y/n]: " OID_IPC
read -p "PSBI - Proveedor Servicio Bancario Individual (1.3.6.1.4.1.99999.2.3) [y/n]: " OID_PSBI
read -p "PSIP - Proveedor Servicio Info Pagos (1.3.6.1.4.1.99999.2.4) [y/n]: " OID_PSIP

echo ""
read -p "Días de validez [default: 365]: " DAYS_INPUT
if [ ! -z "${DAYS_INPUT}" ]; then
    DAYS_VALID="${DAYS_INPUT}"
fi

# Crear archivo CNF temporal
TEMP_CNF="${CERT_NAME}.cnf"

echo ""
echo -e "${GREEN}Generando configuración del certificado...${NC}"

cat > "${TEMP_CNF}" << EOF
oid_section = OIDs

[req]
default_bits = 2048
default_md = sha256
encrypt_key = yes
prompt = no
string_mask = nombstr
distinguished_name = client_distinguished_name
req_extensions = req_cert_extensions

[OIDs]
EOF

# Declarar OID del organizationIdentifier si no es el estándar
if [ "${ORG_ID_OID}" != "2.5.4.97" ]; then
    echo "organizationIdentifier = ${ORG_ID_OID}" >> "${TEMP_CNF}"
fi

# Declarar OIDs personalizados
if [ ! -z "${OID_RUT}" ]; then
    echo "rut = 1.3.6.1.4.1.99999.1.1" >> "${TEMP_CNF}"
fi
if [ ! -z "${OID_NOMBRE_LEGAL}" ]; then
    echo "nombreLegal = 1.3.6.1.4.1.99999.1.2" >> "${TEMP_CNF}"
fi
if [ ! -z "${OID_ECOSISTEMA}" ]; then
    echo "ecosistema = 1.3.6.1.4.1.99999.1.3" >> "${TEMP_CNF}"
fi
if [ ! -z "${OID_ENTORNO}" ]; then
    echo "entorno = 1.3.6.1.4.1.99999.1.4" >> "${TEMP_CNF}"
fi
if [ "${OID_IPI}" == "y" ]; then
    echo "roleIPI = 1.3.6.1.4.1.99999.2.1" >> "${TEMP_CNF}"
fi
if [ "${OID_IPC}" == "y" ]; then
    echo "roleIPC = 1.3.6.1.4.1.99999.2.2" >> "${TEMP_CNF}"
fi
if [ "${OID_PSBI}" == "y" ]; then
    echo "rolePSBI = 1.3.6.1.4.1.99999.2.3" >> "${TEMP_CNF}"
fi
if [ "${OID_PSIP}" == "y" ]; then
    echo "rolePSIP = 1.3.6.1.4.1.99999.2.4" >> "${TEMP_CNF}"
fi

# Agregar distinguished_name
cat >> "${TEMP_CNF}" << EOF

[ client_distinguished_name ]
businessCategory = Private Organization
jurisdictionCountryName = CL
serialNumber = ${SERIAL_NUMBER}
countryName = CL
organizationName = ${ORG_NAME}
stateOrProvinceName = RM
localityName = Santiago
organizationIdentifier = ${ORG_IDENTIFIER}
UID = ${UID_VALUE}
commonName = ${CN}
EOF

# Agregar OIDs personalizados al DN
if [ ! -z "${OID_RUT}" ]; then
    echo "rut = ${OID_RUT}" >> "${TEMP_CNF}"
fi
if [ ! -z "${OID_NOMBRE_LEGAL}" ]; then
    echo "nombreLegal = ${OID_NOMBRE_LEGAL}" >> "${TEMP_CNF}"
fi
if [ ! -z "${OID_ECOSISTEMA}" ]; then
    echo "ecosistema = ${OID_ECOSISTEMA}" >> "${TEMP_CNF}"
fi
if [ ! -z "${OID_ENTORNO}" ]; then
    echo "entorno = ${OID_ENTORNO}" >> "${TEMP_CNF}"
fi

# Agregar extensiones
cat >> "${TEMP_CNF}" << EOF

[ req_cert_extensions ] 
basicConstraints = CA:FALSE
subjectAltName = @alt_name
keyUsage = critical,digitalSignature,keyEncipherment
extendedKeyUsage = clientAuth
EOF

# Agregar roles como extensiones usando sintaxis completa OID
if [ "${OID_IPI}" == "y" ]; then
    echo "1.3.6.1.4.1.99999.2.1 = ASN1:UTF8String:IPI" >> "${TEMP_CNF}"
fi
if [ "${OID_IPC}" == "y" ]; then
    echo "1.3.6.1.4.1.99999.2.2 = ASN1:UTF8String:IPC" >> "${TEMP_CNF}"
fi
if [ "${OID_PSBI}" == "y" ]; then
    echo "1.3.6.1.4.1.99999.2.3 = ASN1:UTF8String:PSBI" >> "${TEMP_CNF}"
fi
if [ "${OID_PSIP}" == "y" ]; then
    echo "1.3.6.1.4.1.99999.2.4 = ASN1:UTF8String:PSIP" >> "${TEMP_CNF}"
fi

cat >> "${TEMP_CNF}" << EOF

[ alt_name ]
EOF

# Agregar SANs
# Procesar SANs (pueden ser múltiples separados por coma)
IFS=',' read -ra SAN_ARRAY <<< "${SAN_DNS}"
for i in "${!SAN_ARRAY[@]}"; do
    DNS_VALUE=$(echo "${SAN_ARRAY[$i]}" | xargs) # trim whitespace
    echo "DNS.$((i+1)) = ${DNS_VALUE}" >> "${TEMP_CNF}"
done

echo -e "${GREEN}✓ Configuración generada: ${TEMP_CNF}${NC}"
echo ""

# Generar clave privada en formato PKCS8
echo -e "${GREEN}1. Generando clave privada (PKCS8)...${NC}"
openssl genpkey -algorithm RSA -out "${CERT_NAME}.key" -pkeyopt rsa_keygen_bits:2048
echo -e "${GREEN}✓ Clave privada generada (PKCS8): ${CERT_NAME}.key${NC}"
echo ""

# Generar CSR
echo -e "${GREEN}2. Generando Certificate Signing Request (CSR)...${NC}"
openssl req -new -key "${CERT_NAME}.key" -out "${CERT_NAME}.csr" -config "${TEMP_CNF}"
echo -e "${GREEN}✓ CSR generado: ${CERT_NAME}.csr${NC}"
echo ""

# Crear archivo de extensiones para la firma (copiar las extensiones del CNF)
EXT_FILE="${CERT_NAME}.ext"
cat > "${EXT_FILE}" << EOF
basicConstraints = CA:FALSE
keyUsage = critical,digitalSignature,keyEncipherment
extendedKeyUsage = clientAuth
subjectAltName = @alt_names

[alt_names]
EOF

# Agregar SANs al archivo de extensiones
for i in "${!SAN_ARRAY[@]}"; do
    DNS_VALUE=$(echo "${SAN_ARRAY[$i]}" | xargs)
    echo "DNS.$((i+1)) = ${DNS_VALUE}" >> "${EXT_FILE}"
done

# Firmar con CA
echo -e "${GREEN}3. Firmando certificado con CA del Directorio...${NC}"
openssl x509 -req \
    -in "${CERT_NAME}.csr" \
    -CA "${CA_CERT}" \
    -CAkey "${CA_KEY}" \
    -CAcreateserial \
    -out "${CERT_NAME}.pem" \
    -days "${DAYS_VALID}" \
    -sha256 \
    -extfile "${EXT_FILE}"

echo -e "${GREEN}✓ Certificado firmado: ${CERT_NAME}.pem${NC}"
echo ""

# Verificar certificado
echo -e "${GREEN}4. Verificando certificado...${NC}"
openssl x509 -in "${CERT_NAME}.pem" -text -noout > "${CERT_NAME}-info.txt"
echo -e "${GREEN}✓ Información del certificado guardada en: ${CERT_NAME}-info.txt${NC}"
echo ""

# Mostrar resumen
echo -e "${BLUE}=========================================="
echo "RESUMEN DEL CERTIFICADO"
echo -e "==========================================${NC}"
echo ""
echo -e "${YELLOW}Subject:${NC}"
openssl x509 -in "${CERT_NAME}.pem" -noout -subject
echo ""
echo -e "${YELLOW}Issuer:${NC}"
openssl x509 -in "${CERT_NAME}.pem" -noout -issuer
echo ""
echo -e "${YELLOW}Validity:${NC}"
openssl x509 -in "${CERT_NAME}.pem" -noout -dates
echo ""
echo -e "${YELLOW}SubjectAltName:${NC}"
openssl x509 -in "${CERT_NAME}.pem" -noout -ext subjectAltName
echo ""

# Limpiar archivos temporales
read -p "$(echo -e ${YELLOW}¿Eliminar archivos temporales \(.cnf, .csr, .ext\)? \(y/n\): ${NC})" CLEANUP
if [ "$CLEANUP" == "y" ]; then
    rm -f "${TEMP_CNF}" "${CERT_NAME}.csr" "${EXT_FILE}"
    echo -e "${GREEN}✓ Archivos temporales eliminados${NC}"
else
    echo -e "${YELLOW}Archivos temporales conservados${NC}"
fi

echo ""
echo -e "${GREEN}=========================================="
echo "✓ CERTIFICADO GENERADO EXITOSAMENTE"
echo -e "==========================================${NC}"
echo ""
echo "Archivos generados:"
echo "  - Clave privada: ${CERT_NAME}.key"
echo "  - Certificado: ${CERT_NAME}.pem"
echo "  - Información: ${CERT_NAME}-info.txt"
echo ""
echo -e "${YELLOW}IMPORTANTE:${NC}"
echo "  - Guarda la clave privada en un lugar seguro"
echo "  - No compartas la clave privada (.key)"
echo "  - El certificado (.pem) puede compartirse"
echo ""
