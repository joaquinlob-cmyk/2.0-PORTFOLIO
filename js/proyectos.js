/*---Datos de los proyectos---*/

const PROYECTOS = [
    {
        id: '001',
        titulo: 'Meditation attempt',
        frase: 'Un intento de meditar en plena Plaza del Ayuntamiento de Valencia, hasta que la mente —y la ciudad— se rompen.',

        // Ficha
        tipo: 'Vídeo experimental',
        rol: 'Concepto, animación y edición',
        software: 'After Effects, Premiere Pro',
        anio: '2025',

        // Media
        video: 'media/gif-1.mp4',
        poster: 'media/gif-1.jpg',

        // YouTube
        youtube: 'https://youtu.be/zC92pebkl14',

        // (01) Brief
        contexto: 'Pieza creada para el módulo de **VFX y motion graphics** del CEI Valencia. Nace de algo personal: **la meditación como refugio** y la lucha constante contra los **pensamientos intrusivos**. Grabada en la Plaza del Ayuntamiento, la historia va **de la calma al colapso** y vuelve a la normalidad con un simple grito.',
        porque: 'Quería mostrar **lo que pasa dentro de una cabeza que intenta desconectar**. Por eso cada estado tiene su propio lenguaje: **collages de papel** que se abren para la calma; **glitch, color y sonido distorsionados** para la invasión de ideas negativas, y **una ciudad que se derrumba** como clímax. Rotoscopia, efectos de destrucción y una mezcla de audio por fases sostienen ese recorrido.',
        publico: 'Pensada para un **público joven** que vive rodeado de estímulos y conoce de cerca la dificultad de desconectar. Por eso apuesta por un **formato breve, sin diálogos y de ritmo creciente**, donde la imagen y el sonido cuentan la historia y **cualquier persona puede reconocerse** en ella.',

        // (02) Resultado
        resultado: [
            { img: 'media/proyecto-1-1.jpg', texto: 'Rotoscopia de la figura en After Effects' },
            { img: 'media/proyecto-1-2.jpg', texto: 'Collages animados por fotogramas clave' },
            { img: 'media/proyecto-1-3.jpg', texto: 'Destrucción de los edificios con Shatter' },
            { img: 'media/proyecto-1-4.jpg', texto: 'Glitch y corrección de color en Premiere Pro' }
        ],

        // (03) Ficha técnica
        ficha: [
            { campo: 'Dirección, grabación y postproducción', valor: 'Joaquín Lobos' },
            { campo: 'Locación', valor: 'Plaza del Ayuntamiento, Valencia' },
            { campo: 'Técnicas', valor: 'Rotoscopia, collage animado, glitch, VFX' },
            { campo: 'Software', valor: 'After Effects, Premiere Pro, Photoshop' },
            { campo: 'Contexto', valor: 'CEI Valencia — VFX y motion graphics' }
        ]
    },
    {
        id: '002',
        titulo: 'Nokia 3310 ads',
        frase: 'El Nokia 3310 contra el martillo de Thor. Spoiler: gana el Nokia.',

        tipo: 'Animación 3D',
        rol: 'Concepto, modelado y animación',
        software: 'Cinema 4D, Premiere Pro',
        anio: '2025',

        video: 'media/gif-2.mp4',
        poster: 'media/gif-2.jpg',
        youtube: 'https://youtu.be/zRXTnTkUg80',

        contexto: 'Una **publicidad animada en 3D** que juega con una leyenda de los 2000: la **«indestructibilidad» del Nokia 3310**. La pieza enfrenta al teléfono con **el Mjolnir** y con un diamante que se hace pedazos al primer golpe, mientras **el Nokia sigue intacto**.',
        porque: 'Quería **convertir un meme en un anuncio con look cinematográfico**. Modelé desde cero el Nokia —rehíce el primer modelo para lograr una **topología limpia**—, el Mjolnir y el diamante, con **materiales físicos** de reflexión y refracción, **simulación de fractura** y cámaras dramáticas. El render final se montó en Premiere Pro con mezcla de audio y un **cierre de marca** en After Effects.',
        publico: 'Habla a **quienes crecieron con el Nokia 3310** y a **la generación que lo conoce como meme**. Esa doble lectura —**nostalgia y humor**— definió el tono: un anuncio con **estética de tráiler de acción** que no se toma demasiado en serio y está pensado para **compartirse en redes**.',

        resultado: [
            { img: 'media/proyecto-2-1.jpg', texto: 'Modelado poligonal del Nokia 3310' },
            { img: 'media/proyecto-2-2.jpg', texto: 'Construcción de la escena en Cinema 4D' },
            { img: 'media/proyecto-2-3.jpg', texto: 'Montaje del render y mezcla de audio' },
            { img: 'media/proyecto-2-4.jpg', texto: 'Corrección de color y efectos en Premiere Pro' },
            { img: 'media/proyecto-2-5.jpg', texto: 'Cierre de marca animado en After Effects' }
        ],

        ficha: [
            { campo: 'Concepto, modelado y animación', valor: 'Joaquín Lobos' },
            { campo: 'Técnicas', valor: 'Modelado poligonal, fractura, materiales físicos' },
            { campo: 'Render', valor: 'ProRes 422 HQ · 25 fps' },
            { campo: 'Software', valor: 'Cinema 4D, Premiere Pro, After Effects' }
        ]
    },
    {
        id: '003',
        titulo: 'Mathrock — book',
        frase: 'Una publicación donde el ritmo irregular del math rock se convierte en retícula, tipografía e imagen.',

        tipo: 'Diseño editorial',
        rol: 'Concepto, maquetación y tipografía',
        software: 'InDesign, Photoshop, Illustrator',
        anio: '2026',

        video: 'media/gif-3.mp4',
        poster: 'media/gif-3.jpg',

        contexto: 'Publicación dedicada al **math rock**, un género definido por sus **compases irregulares** y estructuras poco convencionales. El punto de partida fue **tratar la música como un sistema visual**: que la forma de cada página respondiera al contenido y que **la imagen tuviera más peso que el texto**.',
        porque: 'Buscaba **traducir el ritmo del género al papel**. Elegí una **retícula modular de tradición suiza** porque, igual que el math rock, **ordena lo irregular** dentro de una estructura precisa. Sobre ella combiné **Helvetica**, neutra y legible, con **Youth Crew**, cruda y expresiva, para equilibrar **control y espontaneidad**. Todo el documento se preparó para impresión desde el primer día.',
        publico: 'Dirigido a **seguidores de la escena math rock e indie** y a lectores interesados en el **diseño editorial**. Por eso las composiciones son limpias, con una **jerarquía clara y poco texto**: la publicación **se recorre como se escucha un disco**, guiada por el ritmo visual.',

        resultado: [
            { img: 'media/proyecto-3-5.jpg', texto: 'Doble página «A-simetría» sobre retícula suiza' },
            { img: 'media/proyecto-3-6.jpg', texto: 'Jerarquía de texto e imagen en InDesign' },
            { img: 'media/proyecto-3-7.jpg', texto: 'Recorte y tratamiento de imagen en Photoshop' },
            { img: 'media/proyecto-3-8.jpg', texto: 'Ilustración vectorial en Illustrator' }
        ],

        ficha: [
            { campo: 'Diseño editorial y maquetación', valor: 'Joaquín Lobos' },
            { campo: 'Retícula', valor: 'Modular, de tradición suiza' },
            { campo: 'Tipografías', valor: 'Helvetica, Youth Crew' },
            { campo: 'Producción', valor: 'Preparado para impresión' },
            { campo: 'Software', valor: 'InDesign, Photoshop, Illustrator' }
        ]
    },
    {
        id: '004',
        titulo: 'OKW Studio — web',
        frase: 'Web corporativa en WordPress para una productora audiovisual: un portfolio pensado para convertir visitas en presupuestos.',

        tipo: 'Diseño web',
        rol: 'Concepto, dirección y revisión',
        software: 'WordPress, Elementor Pro, ACF',
        anio: '2026',

        video: 'media/gif-4.mp4',
        poster: 'media/gif-4.jpg',

        // Web
        web: 'https://joaquinlob.alexadefig.com',

        contexto: 'Proyecto final del módulo de **Diseño web con WordPress** del CEI Valencia. Okʷ- studio es una **productora audiovisual ficticia** de Valencia que hace vídeo para empresas: corporativos, spots, eventos, formación y redes sociales. Como una productora vive de mostrar su trabajo, era el caso ideal para una **web corporativa con portfolio**.',
        porque: 'Quería una web que **convenciera de pedir presupuesto**. La estética parte de una **sala de cine y un plató**: fondo casi negro, fotografía a sangre y un único acento, el **rojo del piloto «REC»**, todo definido como sistema global en Elementor. Cada trabajo es un **Custom Post Type con campos ACF**, filtrable por tipo de vídeo. El sitio se construyó **dirigiendo a una IA (Claude)** dentro de WordPress, sin escribir código.',
        publico: 'Pensada para **responsables de marketing, comunicación y RR. HH.** de pymes y empresas medianas que necesitan **vídeo profesional sin tener equipo propio**. Por eso los trabajos son los protagonistas, hay **llamadas a la acción en todas las páginas** con un formulario de presupuesto, y un **blog de consejos** que genera confianza.',

        resultado: [
            { img: 'media/proyecto-4-1.jpg', texto: 'Guía de estilos · colores globales' },
            { img: 'media/proyecto-4-2.jpg', texto: 'Guía de estilos · tipografías y estilos de texto' },
            { img: 'media/proyecto-4-3.jpg', texto: 'Guía de estilos · títulos, párrafos y enlaces' },
            { img: 'media/proyecto-4-4.jpg', texto: 'Guía de estilos · botones, formularios y tarjetas' },
            { img: 'media/proyecto-4-5.jpg', texto: 'Wireframe de inicio · escritorio y móvil' },
            { img: 'media/proyecto-4-6.jpg', texto: 'Wireframe de sobre nosotros · historia, valores y equipo' },
            { img: 'media/proyecto-4-7.jpg', texto: 'Wireframe de trabajos con filtro por tipo de vídeo' },
            { img: 'media/proyecto-4-8.jpg', texto: 'Wireframe de ficha de trabajo con campos ACF' },
            { img: 'media/proyecto-4-9.jpg', texto: 'Wireframe de contacto y formulario de presupuesto' }
        ],

        ficha: [
            { campo: 'Concepto y dirección', valor: 'Joaquín Lobos' },
            { campo: 'Desarrollo', valor: 'Elementor Pro, con asistencia de IA (Claude)' },
            { campo: 'Funcionalidades', valor: 'CPT, campos ACF, Loop Grid, filtros, formulario' },
            { campo: 'SEO y seguridad', valor: 'Yoast SEO, Wordfence, reCAPTCHA' },
            { campo: 'Web', valor: 'joaquinlob.alexadefig.com', url: 'https://joaquinlob.alexadefig.com' }
        ]
    }
];
