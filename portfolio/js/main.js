/* =========================================================
   MAIN — shared by index.html and project.html
   1. Dropdown menu (tablet and mobile)
   2. Archive table + preview (home only)
   3. Contact links
   ========================================================= */


/*--------------------1. Dropdown menu--------------------*/

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

    // Picking a section closes the menu
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    // Click outside the header → close
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            setMenu(false);
        }
    });

    // Escape key → close and give the focus back to the button
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && header.classList.contains('is-open')) {
            setMenu(false);
            menuToggle.focus();
        }
    });

    // If the screen grows to desktop with the menu open, reset it
    window.matchMedia('(min-width: 64.0625rem)').addEventListener('change', (event) => {
        if (event.matches) {
            setMenu(false);
        }
    });
}


/*--------------------2. Archive table + preview--------------------*/

const rows = document.querySelectorAll('.archive__row');
const preview = document.querySelector('.preview');

if (rows.length > 0 && preview) {

    // Preview slots that get filled with each row's data
    const field = (name) => preview.querySelector(`[data-preview="${name}"]`);

    const gif = preview.querySelector('.preview__media');
    const projectLink = preview.querySelector('.preview__link');

    let current = document.querySelector('.archive__row.is-active');

    // Preload the posters (first frame of each GIF) when the browser is idle,
    // so switching projects shows them instantly while the GIF loads.
    // The GIFs themselves are not preloaded: they are too heavy
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

        // Swap the GIF: first its first frame (already preloaded, so it's instant),
        // then the GIF once it has fully loaded. Without this, the browser keeps
        // showing the previous project's GIF while the new one downloads
        gif.classList.toggle('is-contain', data.fit === 'contain');
        gif.src = data.poster;
        gif.alt = data.title;

        if (data.gif) {
            const loader = new Image();
            loader.onload = () => {
                // Only if this project is still the selected one
                if (current === row) {
                    gif.src = data.gif;
                }
            };
            loader.src = data.gif;
        }

        // Link to the project page (hidden while it has no page yet)
        if (data.page) {
            projectLink.href = data.page;
            projectLink.hidden = false;
        } else {
            projectLink.hidden = true;
        }
    }

    // Mouse with hover: the preview updates on mouse over
    const canHover = window.matchMedia('(hover: hover)').matches;

    rows.forEach(row => {
        if (canHover) {
            row.addEventListener('mouseenter', () => showProject(row));
        }

        row.addEventListener('click', () => {
            // With a mouse: the click opens the project page (the preview was already seen on hover).
            // On touch: the first tap shows the preview and the second opens the project.
            if ((canHover || row === current) && row.dataset.page) {
                location.href = row.dataset.page;
                return;
            }

            showProject(row);

            // On mobile the preview sits under the table: scroll it into view
            if (!canHover) {
                preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Keyboard: tabbing onto a row's button shows its preview
        // (keyboard only: with mouse or finger the focus must not beat the click)
        const button = row.querySelector('.archive__button');
        if (button) {
            button.addEventListener('focus', () => {
                if (button.matches(':focus-visible')) {
                    showProject(row);
                }
            });
        }
    });
}


/*--------------------3. Contact links--------------------*/

// The hovered (or focused) link keeps the red band
const contactLinks = document.querySelectorAll('.contact__link');

contactLinks.forEach(link => {
    const activate = () => {
        contactLinks.forEach(other => other.classList.remove('is-active'));
        link.classList.add('is-active');
    };

    link.addEventListener('mouseenter', activate);
    link.addEventListener('focus', activate);
});
