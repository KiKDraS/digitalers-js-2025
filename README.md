# 📋 TABLA COMPARATIVA: history.pushState vs location.hash

## 🔧 CARACTERÍSTICAS TÉCNICAS

| CARACTERÍSTICA          | history.pushState()                    | location.hash                |
| ----------------------- | -------------------------------------- | ---------------------------- |
| **Sintaxis**            | history.pushState(estado, título, url) | location.hash = "#seccion"   |
| **URL resultante**      | https://dominio.com/ruta               | https://dominio.com/#seccion |
| **Recarga la página**   | NO                                     | NO                           |
| **Cambia el historial** | SÍ (nueva entrada)                     | SÍ (nueva entrada)           |

## 🌐 SEO Y URLS

| ASPECTO                | history.pushState() | location.hash                    |
| ---------------------- | ------------------- | -------------------------------- |
| **Amigable con SEO**   | ✅ SÍ               | ❌ NO                            |
| **URLs limpias**       | ✅ SÍ               | ❌ NO                            |
| **Indexable por bots** | ✅ SÍ               | ❌ NO (los bots ignoran el hash) |

## ⚙️ CONFIGURACIÓN Y COMPLEJIDAD

| REQUERIMIENTO                  | history.pushState()      | location.hash                        |
| ------------------------------ | ------------------------ | ------------------------------------ |
| **Configuración servidor**     | ✅ NECESARIA (redirects) | ❌ NO NECESARIA                      |
| **Complejidad implementación** | 🟡 MEDIA                 | 🟢 BAJA                              |
| **Compatibilidad navegadores** | ✅ Excelente (IE10+)     | ✅ Excelente (todos los navegadores) |

## 💾 MANEJO DE ESTADO

| CAPACIDAD                 | history.pushState()             | location.hash |
| ------------------------- | ------------------------------- | ------------- |
| **Almacenar datos**       | ✅ SÍ (objeto estado)           | ❌ NO         |
| **Recuperar datos**       | ✅ SÍ (evento popstate)         | ❌ NO         |
| **Límite almacenamiento** | 🟡 640k-2MB (depende navegador) | ❌ NO APLICA  |

## 🎯 USOS RECOMENDADOS

| ESCENARIO                      | history.pushState()   | location.hash     |
| ------------------------------ | --------------------- | ----------------- |
| **Aplicaciones SPA grandes**   | ✅ IDEAL              | ❌ No recomendado |
| **Prototipos rápidos**         | ❌ Demasiado complejo | ✅ PERFECTO       |
| **Navegación secciones**       | ✅ Excelente          | ✅ Adecuado       |
| **Aplicaciones empresariales** | ✅ RECOMENDADO        | ❌ No profesional |

## 🔍 DETECCIÓN DE CAMBIOS

| MÉTODO                  | history.pushState()                                 | location.hash                                        |
| ----------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| **Evento de detección** | window.onpopstate                                   | window.onhashchange                                  |
| **Ejemplo de evento**   | window.addEventListener('popstate', (e) => { ... }) | window.addEventListener('hashchange', () => { ... }) |

## 📱 EJEMPLOS PRÁCTICOS

| OPERACIÓN                  | history.pushState()                                      | location.hash                            |
| -------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| **Navegar a página**       | history.pushState(null, null, "/productos")              | location.hash = "productos"              |
| **Navegar con datos**      | history.pushState({id: 123}, null, "/productos/123")     | ❌ No posible                            |
| **Navegar con parámetros** | history.pushState(null, null, "/productos?orden=precio") | location.hash = "productos?orden=precio" |

## ⚠️ LIMITACIONES

| LIMITACIÓN                | history.pushState()       | location.hash             |
| ------------------------- | ------------------------- | ------------------------- |
| **Política mismo origen** | ✅ APLICA (mismo dominio) | ✅ APLICA (mismo dominio) |
| **Límite longitud URL**   | 🟡 2000 caracteres aprox. | 🟡 2000 caracteres aprox. |
| **Back/Forward**          | ✅ Funciona perfecto      | ✅ Funciona perfecto      |

## 🏆 CONCLUSIÓN

| CATEGORÍA                 | history.pushState()         | location.hash                   |
| ------------------------- | --------------------------- | ------------------------------- |
| **PROFESIONALISMO**       | ✅ ALTO                     | ❌ BAJO                         |
| **FACILIDAD USO**         | ❌ MEDIA-BAJA               | ✅ ALTA                         |
| **ESCALABILIDAD**         | ✅ ALTA                     | ❌ BAJA                         |
| **RECOMENDACIÓN GENERAL** | ✅ USAR EN PROYECTOS SERIOS | ✅ SOLO PARA PROTOTIPOS RÁPIDOS |

---

📝 **Nota:** Esta tabla es válida para aplicaciones web modernas (2024).
