# Auditoría UX: App de Notas (Laboratorio 05)

## 1. Tabla de Heurísticas de Nielsen

| Heurística | Problema original | Solución aplicada | Gravedad original |
| :--- | :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar una nota, no aparece ningún mensaje de confirmación. | Se agregó un mensaje dinámico "Nota agregada" que desaparece a los 2 segundos. | Alta |
| **Coincidencia con el mundo real** | El botón decía "Add" en inglés y no había un título claro. | Se cambió a "Agregar nota" y se puso un `<h1>` descriptivo. | Media |
| **Control y libertad** | El botón de eliminar (X) borraba la nota inmediatamente. | Se agregó una confirmación (`confirm()`) antes de borrar. | Alta |
| **Prevención de errores** | Se podía agregar una nota vacía. | Se deshabilitó el botón de agregar si el campo está vacío y se agregó un mensaje de error. | Alta |
| **Reconocer, no recordar** | Solo había placeholder en el campo de texto. | Se agregó un `<label>` visible asociado al campo. | Alta |
| **Accesibilidad** | Sin contraste, sin foco visible, botones muy pequeños. | Se aplicaron variables de color, `:focus-visible` y tamaño de 44px en botones. | Alta |

## 2. Aplicación de Leyes de UX

*   **Ley de Fitts:** El botón "Agregar nota" ahora ocupa todo el ancho disponible (`width: 100%`) y es más alto (44px) para ser más fácil de pulsar.
*   **Ley de Hick:** En este caso no hay muchas opciones en una lista, pero se mejoró la jerarquía visual agrupando el input y el botón en un bloque claro de "Nueva nota", y la lista de notas en otro bloque, reduciendo la carga cognitiva.
*   **Ley de Miller:** Se dividió la pantalla en dos secciones claras: el formulario para agregar (2 elementos) y la lista de notas, para que el usuario no se sienta abrumado por los elementos.