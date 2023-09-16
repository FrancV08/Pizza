        // Función para comprobar el tamaño de la pantalla y agregar la imagen si es mayor o igual a 1000px
        function agregarImagen() {
            // Obtener el ancho de la ventana
            var anchoVentana = window.innerWidth;

            // Verificar si el ancho de la ventana es mayor o igual a 1000px
            if (anchoVentana >= 990) {
                // Verificar si ya se ha agregado la imagen
                var contenedor = document.getElementById('bienvenidaPizza');
                var imagenExistente = contenedor.querySelector('img');

                // Si no se ha agregado la imagen, la agregamos
                if (!imagenExistente) {
                    // Crear un elemento <img>
                    var imagen = document.createElement('img');

                    // Establecer los atributos de la imagen
                    imagen.src = 'https://lh3.googleusercontent.com/pw/AIL4fc-ptpzqjT2xWyjk7QFmDdeHdr13iXuC9r2xZu_qnHc1MQ3Bg0tey9STYBdjxtVvdN9D8UTAZmjbyCoiPKy6neU9bgiL55idiYLP_gvI33803ro6dJhKROU8dnTVYe1WyiVfcT5o2x2kcWbl4_GWZ62enQ=w1103-h552-s-no?authuser=0';
                    imagen.alt = 'Pizza deliciosa';

                    // Agregar la imagen al contenedor
                    contenedor.appendChild(imagen);
                }
            } else {
                // Si el ancho de la ventana es menor a 1000px, eliminar la imagen si existe
                var contenedor = document.getElementById('bienvenidaPizza');
                var imagenExistente = contenedor.querySelector('img');

                if (imagenExistente) {
                    contenedor.removeChild(imagenExistente);
                }
            }
        }

        // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
        window.addEventListener('load', agregarImagen);
        window.addEventListener('resize', agregarImagen);