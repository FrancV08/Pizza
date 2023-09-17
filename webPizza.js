         // Función para cambiar la fuente de la imagen según el tamaño de la pantalla
         function actualizarImagen() {
            // Obtener el elemento de la imagen
            var imagen = document.getElementById('pizzaImg');

            // Verificar el ancho de la pantalla y cambiar la fuente de la imagen
            if (window.innerWidth >= 800) {
                imagen.src = 'https://lh3.googleusercontent.com/pw/AIL4fc_AGi0Rokroyg1wlkX1fL0MPCDe2zFW7xYz-i6b1tBZfZeEl3L8TE3mmgvdFXOz382OJVcy6tpwcYOG4tNhbI9YnrIVRkFLVd2iGWdWcAd6BAp4TsLYLejqDx3OPB40cPy2h9KyQN9elath8ca18NXsEg=w1000-h500-s-no?authuser=0';
            } else if (window.innerWidth < 800) {
                imagen.src = 'https://lh3.googleusercontent.com/pw/AIL4fc_r7gSjDF45mNQFZNizWahoFbX3NffOoR6xXF-Aj8LtvP2h7B0Sn7rd76DGgcWxpwZMR5uCwgVwzC00wQ9FwlbGBZ3pLaQTYe5cUfSUSRjySElXxPew1q7y3ikwzhlWJeIM_XmdbHUMyEYtfjMAmI70Cg=w460-h919-s-no?authuser=0';
            }  
        }

        // Llama a la función al cargar la página y cuando se redimensiona la ventana
        window.addEventListener('load', actualizarImagen);
        window.addEventListener('resize', actualizarImagen);