/* =========================================================
   PROJECTS DATA
   Each object is one project; project.html uses it as a template.
   To add one: copy a { … } block, change the data and link it
   from the home page with project.html?id=THE_ID
   ========================================================= */

const PROJECTS = [
    {
        id: '001',
        title: 'Meditation attempt',
        tagline: 'Vídeo experimental que explora la meditación frente al caos urbano y mental.',

        // Short facts
        type: 'Vídeo experimental',
        role: 'Concepto, animación y edición',
        software: 'After Effects, Premiere',
        year: '2025',

        // Main media (looping video + first frame)
        video: 'media/gif-1.mp4',
        poster: 'media/gif-1.jpg',

        // (01) Brief
        context: 'Vídeo experimental que explora la meditación frente al caos urbano y mental. A través del motion graphics, glitches visuales y rupturas del entorno, la pieza construye una narrativa que transita entre la calma, la tensión y el colapso emocional.',
        goal: 'Escribe aquí qué querías conseguir y por qué elegiste este camino y no otro.',
        audience: 'Escribe aquí a quién va dirigida la pieza y cómo eso influyó en tus decisiones.',

        // (02) Results
        results: [
            { image: 'media/gif-1.jpg', caption: 'Fotograma' },
            { image: 'media/image-1.jpg', caption: 'Collage' },
            { image: 'media/image-1.jpg', caption: 'Collage' },
            { image: 'media/image-1.jpg', caption: 'Collage' },
            { image: 'media/image-1.jpg', caption: 'Collage' }
        ],

        // (03) Credits
        credits: [
            { label: 'Dirección y animación', value: 'Joaquín Lobos' },
            { label: 'Software', value: 'After Effects, Premiere' },
            { label: 'Duración', value: '—' }
        ]
    },
    {
        id: '002',
        title: 'Nokia 3310 ads',
        tagline: 'El Nokia 3310 contra el Mjolnir: una prueba de resistencia «indestructible».',

        type: 'Animación 3D',
        role: 'Concepto, modelado y animación',
        software: 'Cinema 4D',
        year: '2025',

        video: 'media/gif-2.mp4',
        poster: 'media/gif-2.jpg',

        context: 'Animación 3D desarrollada en Cinema 4D que enfrenta al icónico Nokia 3310 contra el Mjolnir para poner a prueba su resistencia «indestructible». Con simulaciones de fractura, iluminación cinematográfica y modelado de objetos, la pieza construye una escena épica donde todo colapsa ante el Nokia.',
        goal: 'Escribe aquí qué querías conseguir y por qué elegiste este camino y no otro.',
        audience: 'Escribe aquí a quién va dirigida la pieza y cómo eso influyó en tus decisiones.',

        results: [
            { image: 'media/gif-2.jpg', caption: 'Fotograma' },
            { image: 'media/image-2.jpg', caption: 'Render' },
            
        ],

        credits: [
            { label: 'Concepto y 3D', value: 'Joaquín Lobos' },
            { label: 'Software', value: 'Cinema 4D' },
            { label: 'Duración', value: '—' }
        ]
    },
    {
        id: '003',
        title: 'Mathrock — book',
        tagline: 'Un libro donde la complejidad rítmica del math rock se convierte en tensión tipográfica.',

        type: 'Diseño editorial',
        role: 'Concepto, maquetación y tipografía',
        software: 'InDesign',
        year: '2026',

        video: 'media/gif-3.mp4',
        poster: 'media/gif-3.jpg',

        context: 'Proyecto editorial inspirado en el math rock, donde la complejidad rítmica del género se traduce en composiciones dinámicas, tensión tipográfica y una narrativa visual en la que las imágenes predominan sobre el texto.',
        goal: 'Escribe aquí qué querías conseguir y por qué elegiste este camino y no otro.',
        audience: 'Escribe aquí a quién va dirigido el libro y cómo eso influyó en tus decisiones.',

        results: [
            { image: 'media/image-3.jpg', caption: '' },
            { image: 'media/gif-3.jpg', caption: '' },
            { image: 'media/gif-3.jpg', caption: '' },
            { image: 'media/gif-3.jpg', caption: '' },
            { image: 'media/gif-3.jpg', caption: '' }
        ],

        credits: [
            { label: 'Diseño y maquetación', value: 'Joaquín Lobos' },
            { label: 'Software', value: 'InDesign' },
            { label: 'Formato', value: '—' },
            { label: 'Páginas', value: '—' }
        ]
    }
];
