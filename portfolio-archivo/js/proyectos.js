/*
    DATOS DE LOS PROYECTOS
    Cada objeto es un proyecto. proyecto.html usa estos datos como plantilla.
    Para añadir uno: copia un bloque { … }, cambia los datos y enlázalo desde la home
    con proyecto.html?id=EL_ID
*/

const PROYECTOS = [
    {
        id: '001',
        titulo: 'Meditation attempt',
        frase: 'Vídeo experimental que explora la meditación frente al caos urbano y mental.',

        // Ficha
        tipo: 'Vídeo experimental',
        rol: 'Concepto, animación y edición',
        software: 'After Effects, Premiere',
        anio: '2025',

        // Medio principal (vídeo en bucle + primer fotograma)
        video: 'media/gif-1.mp4',
        poster: 'media/gif-1.jpg',

        // (01) Brief
        contexto: 'Vídeo experimental que explora la meditación frente al caos urbano y mental. A través del motion graphics, glitches visuales y rupturas del entorno, la pieza construye una narrativa que transita entre la calma, la tensión y el colapso emocional.',
        porque: 'Escribe aquí qué querías conseguir y por qué elegiste este camino y no otro.',
        publico: 'Escribe aquí a quién va dirigida la pieza y cómo eso influyó en tus decisiones.',

        // (02) Resultado
        resultado: [
            { img: 'media/gif-1.jpg', texto: 'Fotograma' },
            { img: 'media/image-1.jpg', texto: 'Collage' }
        ],

        // (03) Ficha técnica
        ficha: [
            { campo: 'Dirección y animación', valor: 'Joaquín Lobos' },
            { campo: 'Software', valor: 'After Effects, Premiere' },
            { campo: 'Duración', valor: '—' }
        ]
    },
    {
        id: '002',
        titulo: 'Nokia 3310 ads',
        frase: 'El Nokia 3310 contra el Mjolnir: una prueba de resistencia «indestructible».',

        tipo: 'Animación 3D',
        rol: 'Concepto, modelado y animación',
        software: 'Cinema 4D',
        anio: '2025',

        video: 'media/gif-2.mp4',
        poster: 'media/gif-2.jpg',

        contexto: 'Animación 3D desarrollada en Cinema 4D que enfrenta al icónico Nokia 3310 contra el Mjolnir para poner a prueba su resistencia «indestructible». Con simulaciones de fractura, iluminación cinematográfica y modelado de objetos, la pieza construye una escena épica donde todo colapsa ante el Nokia.',
        porque: 'Escribe aquí qué querías conseguir y por qué elegiste este camino y no otro.',
        publico: 'Escribe aquí a quién va dirigida la pieza y cómo eso influyó en tus decisiones.',

        resultado: [
            { img: 'media/gif-2.jpg', texto: 'Fotograma' },
            { img: 'media/image-2.jpg', texto: 'Render' }
        ],

        ficha: [
            { campo: 'Concepto y 3D', valor: 'Joaquín Lobos' },
            { campo: 'Software', valor: 'Cinema 4D' },
            { campo: 'Duración', valor: '—' }
        ]
    },
    {
        id: '003',
        titulo: 'Mathrock — book',
        frase: 'Un libro donde la complejidad rítmica del math rock se convierte en tensión tipográfica.',

        tipo: 'Diseño editorial',
        rol: 'Concepto, maquetación y tipografía',
        software: 'InDesign',
        anio: '2026',

        video: 'media/gif-3.mp4',
        poster: 'media/gif-3.jpg',

        contexto: 'Proyecto editorial inspirado en el math rock, donde la complejidad rítmica del género se traduce en composiciones dinámicas, tensión tipográfica y una narrativa visual en la que las imágenes predominan sobre el texto.',
        porque: 'Escribe aquí qué querías conseguir y por qué elegiste este camino y no otro.',
        publico: 'Escribe aquí a quién va dirigido el libro y cómo eso influyó en tus decisiones.',

        resultado: [
            { img: 'media/image-3.jpg', texto: 'Mockup' },
            { img: 'media/gif-3.jpg', texto: 'Portada' }
        ],

        ficha: [
            { campo: 'Diseño y maquetación', valor: 'Joaquín Lobos' },
            { campo: 'Software', valor: 'InDesign' },
            { campo: 'Formato', valor: '—' },
            { campo: 'Páginas', valor: '—' }
        ]
    }
];
