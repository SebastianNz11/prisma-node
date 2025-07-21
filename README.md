# Instalar Prisma CLI como dependencia de desarrollo
npm install prisma --save-dev

# Inicializar Prisma
npx prisma init

# Instalar el cliente Prisma para usar en el código
npm install @prisma/client

# Crear modelos en schema.prisma

# Crear migración y aplicar a la base de datos
npx prisma migrate dev --name init

# (Opcional) Si tienes problemas con PrismaClient
# - Borrar 'output' del schema.prisma
# - Regenerar cliente manualmente
npx prisma generate
