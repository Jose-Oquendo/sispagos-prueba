# Sispagos (pruebaspagos)

Aplicativo para prueba técnica - Vacante: Desarrollador Frontend VueJs.

## 1. Instrucciones para la instalación y ejecución del entorno local

El aplicativo está construido utilizando el framework Quasar con Vue 3 y TypeScript. Para levantar el entorno local, siga los siguientes pasos:

### Requisitos Previos

- Node.js (versión 22.12 o superior recomendada según package.json)
- Gestor de paquetes de Node (npm, yarn o pnpm)

### Pasos de Instalación

1. Ubicarse en el directorio raíz del proyecto (`/pruebaspagos`) mediante una terminal de comandos.
2. Instalar las dependencias del proyecto ejecutando su gestor de paquetes preferido:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. Una vez finalizada la instalación de los módulos, iniciar el servidor de desarrollo mediante el comando de Quasar:

   ```bash
   npx quasar dev
   # o si dispone de Quasar CLI de manera global:
   quasar dev
   # o utilizando el script de npm:
   npm run dev
   ```

4. El servidor se compilará y la aplicación estará disponible en la dirección local proporcionada por la consola (por defecto `http://localhost:9000`).

### Construcción para Producción

Para generar los archivos minificados y optimizados para un entorno de producción, ejecutar:

```bash
npx quasar build
# o
npm run build
```

---

## 2. Supuestos adoptados respecto a las estructuras de datos y el tipado del modelo de negocio

El modelo de negocio ha sido tipado de manera estricta utilizando interfaces de TypeScript para asegurar la consistencia de los datos en el Frontend. Estas interfaces se localizan en `src/components/models.ts`.

### Estructuras de Datos y Tipado

Se adoptaron los siguientes supuestos para las entidades principales:

- **User**: Representa el usuario de la sesión actual, estructurando la información básica de acceso como `name` y `role`.
- **PaymentMethod**: Constituye la entidad central para los medios de pago. Se diseñó como una estructura unificada que agrupa los atributos de todos los tipos de pago disponibles (tarjetas, transferencias bancarias, efectivo y otros).
  - **Propiedades comunes**: Incluye campos de control como `id`, `alias`, `creationDate`, `paymentType` e `isActive`.
  - **Propiedades específicas**: Contiene campos especializados que pueden o no estar poblados dependiendo del valor de `paymentType`. Por ejemplo, `cardNumber` y `cardHolder` para tarjetas; `bankName` y `bankAccount` para transferencias; `cashProvider` y `cashReference` para pagos en efectivo.
- **filter**: Interfaz auxiliar diseñada para estandarizar el tipado de los parámetros de búsqueda y filtrado de las tablas en la interfaz de usuario.

### Implementación de Mocks y Datos Precargados

Al carecer de un servidor backend funcional, la aplicación implementa una arquitectura basada en mocks para simular las respuestas de una API REST:

- **Origen de los Datos**: Los registros de prueba, credenciales de acceso simuladas y el conjunto inicial de métodos de pago están definidos de forma estática en `src/mocks/AppMocks.ts`.
- **Intercepción de Peticiones**: El proyecto incluye como dependencia `axios-mock-adapter`. Este enfoque permite que la capa de servicios del frontend utilice Axios para realizar peticiones HTTP de manera estándar. El adaptador intercepta estas solicitudes específicas y devuelve respuestas controladas utilizando la información del archivo de mocks, emulando la latencia y la estructura de una respuesta de red real.
- **Gestión del Estado Global**: Una vez la capa de servicios obtiene los datos mockeados, la información se transfiere a los manejadores de estado de Pinia (ubicados en `src/stores`), los cuales distribuyen los datos reactivamente a los componentes de la interfaz de usuario (Vue components). Esto permite probar el flujo completo de la aplicación sin alterar la lógica de negocio para la futura integración real.
