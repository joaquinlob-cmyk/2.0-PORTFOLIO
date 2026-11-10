/*---Menú desplegable (tablet y móvil)---*/

const header = document.querySelector('.header');
const menuToggle = document.querySelector('.header__toggle');

if (header && menuToggle) {
    const menu = document.getElementById(menuToggle.getAttribute('aria-controls'));

    const setMenu = (open) => {
        header.classList.toggle('is-open', open);
        menuToggle.setAttribute('aria-expanded', open);
        menuToggle.textContent = open ? 'Cerrar' : 'Menú';
    };

    menuToggle.addEventListener('click', () => {
        setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    // Al elegir una sección, el menú se cierra
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    // Clic fuera del header → cerrar
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            setMenu(false);
        }
    });

    // Tecla Escape → cerrar y devolver el foco al botón
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && header.classList.contains('is-open')) {
            setMenu(false);
            menuToggle.focus();
        }
    });

    // Si la pantalla pasa a escritorio con el menú abierto, se reinicia
    window.matchMedia('(min-width: 64.0625rem)').addEventListener('change', (event) => {
        if (event.matches) {
            setMenu(false);
        }
    });
}


/*---Reloj de Valencia---*/

const clock = document.querySelector('[data-clock]');

if (clock) {
    const timeFormat = new Intl.DateTimeFormat('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Madrid'
    });

    const updateClock = () => {
        clock.textContent = timeFormat.format(new Date());
    };

    updateClock();
    setInterval(updateClock, 15000);
}


/*---Tabla de proyectos + vista previa---*/

const rows = document.querySelectorAll('.archive__row');
const preview = document.querySelector('.preview');

if (rows.length > 0 && preview) {

    // Huecos de la vista previa que se rellenan con los datos de cada fila
    const field = (name) => preview.querySelector(`[data-p="${name}"]`);

    const video = preview.querySelector('.preview__media');
    const projectLink = preview.querySelector('.preview__link');

    let current = document.querySelector('.archive__row.is-active');

    // Precarga los pósters (primer fotograma de cada GIF) cuando el navegador está libre:
    // al cambiar de proyecto se ven al instante mientras carga el vídeo
    const preloadPosters = () => {
        rows.forEach(row => {
            new Image().src = row.dataset.poster;
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadPosters);
    } else {
        window.addEventListener('load', () => setTimeout(preloadPosters, 1000));
    }

    function showProject(row) {
        if (row === current) {
            return;
        }

        if (current) {
            current.classList.remove('is-active');
        }

        row.classList.add('is-active');
        current = row;

        const data = row.dataset;

        field('num').textContent = data.num;
        field('title').textContent = data.title;
        field('desc').textContent = data.desc;
        field('role').textContent = data.role;
        field('software').textContent = data.software;
        field('type').textContent = data.type;
        field('year').textContent = data.year;

        // Cambio del GIF (vídeo en bucle). Si el proyecto no tiene vídeo, se ve solo el póster
        video.classList.toggle('is-contain', data.fit === 'contain');
        video.poster = data.poster;
        video.setAttribute('aria-label', data.title);

        if (data.video) {
            video.src = data.video;   // con "autoplay" empieza solo
        } else {
            video.removeAttribute('src');
            video.load();             // vacía el vídeo y deja el póster
        }

        // Enlace a la página del proyecto (se oculta si aún no tiene página)
        if (data.page) {
            projectLink.href = data.page;
            projectLink.hidden = false;
        } else {
            projectLink.hidden = true;
        }
    }

    // Ratón con hover: se actualiza al pasar por encima
    const canHover = window.matchMedia('(hover: hover)').matches;

    rows.forEach(row => {
        if (canHover) {
            row.addEventListener('mouseenter', () => showProject(row));
        }

        row.addEventListener('click', () => {
            // Con ratón: el clic abre la página del proyecto (la vista previa ya se vio al pasar por encima).
            // En móvil: el primer toque muestra la vista previa y el segundo abre el proyecto.
            if ((canHover || row === current) && row.dataset.page) {
                location.href = row.dataset.page;
                return;
            }

            showProject(row);

            // En móvil, la vista previa queda debajo de la tabla: la llevamos a la vista
            if (!canHover) {
                preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Teclado: al llegar con Tab al botón de una fila, se muestra su vista previa
        // (solo con teclado: con ratón o dedo el foco no debe adelantarse al clic)
        const button = row.querySelector('.archive__btn');
        if (button) {
            button.addEventListener('focus', () => {
                if (button.matches(':focus-visible')) {
                    showProject(row);
                }
            });
        }
    });
}


const contactLinks = document.querySelectorAll('.contact__big');

contactLinks.forEach(link => {
    const activate = () => {
        contactLinks.forEach(other => other.classList.remove('is-active'));
        link.classList.add('is-active');
    };

    link.addEventListener('mouseenter', activate);
    link.addEventListener('focus', activate);
});
