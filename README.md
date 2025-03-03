# Challenge Amigo Secreto

## Descripción
Este proyecto es una simple aplicación en JavaScript que permite agregar nombres a una lista y seleccionar aleatoriamente uno de ellos. Puede ser útil para realizar sorteos o elegir a una persona de un grupo de amigos.

## Características
- Agregar nombres a una lista.
- Mostrar los nombres ingresados.
- Seleccionar un nombre al azar de la lista.
- Validaciones para evitar nombres vacíos y listas vacías.

## Uso
1. Ingrese un nombre en el campo de entrada.
2. Presione el botón para agregar el nombre a la lista.
3. Una vez agregados los nombres, presione el botón de sorteo para elegir un nombre al azar.
4. El nombre seleccionado se mostrará en pantalla.

## Código
El archivo JavaScript contiene dos funciones principales:

### `agregarAmigo()`
- Obtiene el valor ingresado en el campo de entrada.
- Valida que el nombre no esté vacío.
- Agrega el nombre a la lista de amigos.
- Actualiza la lista mostrada en la interfaz.

### `sortearAmigo()`
- Verifica que la lista tenga al menos un nombre.
- Genera un índice aleatorio para seleccionar un nombre.
- Muestra el nombre seleccionado en la interfaz.

## Tecnologías utilizadas
- HTML
- CSS
- JavaScript

## Mejoras futuras
- Permitir eliminar nombres de la lista.
- Guardar los nombres en el almacenamiento local del navegador.
