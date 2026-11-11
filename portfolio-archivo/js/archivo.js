/*---Ancla al llegar desde otra página---*/

if (location.hash) {
    const target = document.querySelector(location.hash);

    if (target) {
        document.fonts.ready.then(() => {
            target.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
    }
}


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

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            setMenu(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && header.classList.contains('is-open')) {
            setMenu(false);
            menuToggle.focus();
        }
    });

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

    const field = (name) => preview.querySelector(`[data-p="${name}"]`);

    const gif = preview.querySelector('.preview__media');
    const projectLink = preview.querySelector('.preview__link');

    let current = document.querySelector('.archive__row.is-active');

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

        gif.classList.toggle('is-contain', data.fit === 'contain');
        gif.src = data.poster;
        gif.alt = data.title;

        if (data.gif) {
            const loader = new Image();
            loader.onload = () => {
                if (current === row) {
                    gif.src = data.gif;
                }
            };
            loader.src = data.gif;
        }

        if (data.page) {
            projectLink.href = data.page;
            projectLink.hidden = false;
        } else {
            projectLink.hidden = true;
        }

        gif.classList.toggle('is-link', Boolean(data.page));
    }

    const canHover = window.matchMedia('(hover: hover)').matches;

    rows.forEach(row => {
        row.addEventListener('click', () => {
            if (row === current && row.dataset.page) {
                location.href = row.dataset.page;
                return;
            }

            showProject(row);

            if (!canHover) {
                preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    gif.addEventListener('click', () => {
        if (!projectLink.hidden) {
            location.href = projectLink.href;
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
