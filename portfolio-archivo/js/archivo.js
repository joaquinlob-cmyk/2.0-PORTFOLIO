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

    const media = preview.querySelector('.preview__media');
    const sourceAvif = field('avif');
    const sourceWebp = field('webp');
    const image = field('img');

    let current = document.querySelector('.archive__row.is-active');

    // Precarga las imágenes grandes cuando el navegador está libre,
    // para que el cambio de proyecto sea instantáneo
    const preloadImages = () => {
        rows.forEach(row => {
            const img = new Image();
            img.src = `${row.dataset.img}.avif`;
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadImages);
    } else {
        window.addEventListener('load', () => setTimeout(preloadImages, 1000));
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

        // Cambio de imagen con un pequeño fundido
        media.classList.add('is-loading');
        media.classList.toggle('is-contain', data.fit === 'contain');

        sourceAvif.srcset = `${data.img}.avif`;
        sourceWebp.srcset = `${data.img}.webp`;
        image.src = `${data.img}.jpg`;
        image.alt = data.title;
    }

    image.addEventListener('load', () => {
        media.classList.remove('is-loading');
    });

    // Ratón con hover: se actualiza al pasar por encima
    const canHover = window.matchMedia('(hover: hover)').matches;

    rows.forEach(row => {
        if (canHover) {
            row.addEventListener('mouseenter', () => showProject(row));
        }

        row.addEventListener('click', () => {
            showProject(row);

            // En móvil, la vista previa queda debajo de la tabla: la llevamos a la vista
            if (!canHover) {
                preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Teclado: el botón de cada fila también selecciona el proyecto
        const button = row.querySelector('.archive__btn');
        if (button) {
            button.addEventListener('focus', () => showProject(row));
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
