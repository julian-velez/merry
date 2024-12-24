// Inicializa el efecto de "tilt" (inclinación) en los elementos seleccionados.
VanillaTilt.init(
    // Selecciona todos los elementos con la clase "box" para aplicarles el efecto.
    document.querySelectorAll(".box"),
    {
        // Define el ángulo máximo de inclinación en grados (25 grados en este caso).
        max: 25,
        
        // Establece la velocidad de transición del efecto, en milisegundos (400 ms aquí).
        speed: 400,
        
        // Activa el efecto de brillo (glare) en el elemento cuando se inclina.
        glare: true,
        
        // Define la intensidad máxima del brillo (0.5 significa 50% de brillo).
        "max-glare": 0.5
    }
);
