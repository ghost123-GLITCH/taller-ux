# Auditoría UX: Formulario de Inscripción

## 1. Tabla de Heurísticas de Nielsen

| Heurística | Problema original | Solución aplicada | Gravedad original |
| :--- | :--- | :--- | :--- |
| **Visibilidad del estado** | Al pulsar «ok» no aparecía ningún mensaje, el usuario no sabía si se había inscrito. | Se agregó un mensaje dinámico con `role="status"` que indica "Enviando...", error o éxito. | Alta |
| **Coincidencia con el mundo real** | El botón decía «ok» y el texto decía «procesar la solicitud». | Se cambió a «Inscribirme» y textos amigables como «Inscríbete al taller». | Media |
| **Control y libertad** | El enlace «BORRAR TODO» borraba todo sin confirmación. | Se cambió por un botón «Limpiar formulario» con ventana de confirmación (`confirm()`). | Alta |
| **Prevención de errores** | No validaba el correo ni campos vacíos. | Se agregó `required`, `type="email"` y validación con `checkValidity()`. | Alta |
| **Reconocer, no recordar** | Solo había placeholders que desaparecían al escribir. | Se agregaron etiquetas `<label>` visibles y asociadas con `for` e `id`. | Alta |
| **Accesibilidad** | Sin etiquetas, sin foco visible, bajo contraste. | Se agregó `:focus-visible`, contraste 4.5:1, `alt` en imágenes y tamaño táctil de 44px. | Alta |

## 2. Aplicación de Leyes de UX

*   **Ley de Fitts:** Se hizo el botón principal «Inscribirme» mucho más grande (`flex: 1`) y se separó 24px del botón secundario para evitar clics accidentales.
*   **Ley de Hick:** La lista de 12 talleres se agrupó en 3 categorías con `<optgroup>` (Control de versiones, Desarrollo web, Diseño y calidad) para reducir el tiempo de decisión.
*   **Ley de Miller:** El formulario se dividió en dos bloques numerados (`<fieldset>` con `<legend>`: "1. Tus datos" y "2. Tu taller") para no saturar la memoria visual.

## 3. Capturas del Antes y Después

*(Aquí debes insertar tus capturas en el archivo Markdown cuando lo subas a GitHub, o simplemente mencionarlas en tu informe de Word).*

*   **Antes:** Formulario gris, letras minúsculas, botón "ok" diminuto.
*   **Después:** Tarjeta blanca, tipografía legible, botón azul grande, foco naranja visible.