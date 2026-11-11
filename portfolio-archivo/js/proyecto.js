/*---Plantilla de proyecto: rellena proyecto.html con los datos de proyectos.js---*/

/*---Lightbox: click a results image to see it bigger---*/

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImg = document.querySelector('[data-lightbox-img]');
const lightboxCount = document.querySelector('[data-lightbox-count]');
let lightboxIndex = 0;

function showLightboxImage(index) {
    const images = document.querySelectorAll('.gallery__item img');
    const total = images.length;
    lightboxIndex = (index + total) % total;   // after the last one, back to the first

    const image = images[lightboxIndex];
    lightboxImg.src = image.currentSrc || image.src;   // same format the page already loaded
    lightboxImg.alt = image.alt;
    lightboxCount.textContent = `${String(lightboxIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function openLightbox(index) {
    showLightboxImage(index);
    lightbox.showModal();
}

// One image only: no previous/next buttons
function updateLightboxNav() {
    const single = document.querySelectorAll('.gallery__item img').length < 2;
    lightbox.querySelector('[data-lightbox-prev]').hidden = single;
    lightbox.querySelector('[data-lightbox-next]').hidden = single;
}

lightbox.querySelector('[data-lightbox-prev]').addEventListener('click', () => showLightboxImage(lightboxIndex - 1));
lightbox.querySelector('[data-lightbox-next]').addEventListener('click', () => showLightboxImage(lightboxIndex + 1));
lightbox.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());

// Arrow keys move between images (Escape already closes a <dialog>)
lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showLightboxImage(lightboxIndex - 1);
    if (event.key === 'ArrowRight') showLightboxImage(lightboxIndex + 1);
});

// Click anywhere except the bottom bar (image or dark background) → close
lightbox.addEventListener('click', (event) => {
    if (!event.target.closest('.lightbox__bar')) {
        lightbox.close();
    }
});

function getYouTubeId(link) {
    if (!link) {
        return null;
    }
    const match = link.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/);
    return match ? match[1] : null;
}

// 1. Qué proyecto se pide: proyecto.html?id=002 → "002"
//    Si no hay id (o no existe), se muestra el primero de la lista
const projectId = new URLSearchParams(location.search).get('id');
const project = PROYECTOS.find(item => item.id === projectId) || PROYECTOS[0];

fillProject(project);

function fillProject(data) {

    // Título de la pestaña
    document.title = `${data.titulo} — Joaquín Lobos`;

    // 2. Textos: cada elemento con data-campo="x" recibe data.x
    document.querySelectorAll('[data-campo]').forEach(element => {
        element.textContent = data[element.dataset.campo] || '';
    });

    // 3. Main media: the YouTube video if there is one, otherwise the GIF.
    //    (The GIF isn't loaded at all when there's a video: it's too heavy to load for nothing)
    const media = document.querySelector('[data-media]');
    const videoBox = document.querySelector('[data-youtube]');
    const videoId = getYouTubeId(data.youtube);

    if (!videoId) {
        media.style.backgroundImage = `url(${data.poster})`;
        media.src = data.gif;
        media.alt = data.titulo;
    } else {
        media.remove();

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
        iframe.title = data.titulo;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        videoBox.appendChild(iframe);
        videoBox.hidden = false;
    }

    // 4. Resultado: una figura por imagen
    const gallery = document.querySelector('[data-resultado]');
    // Each image is a <picture>: the browser picks AVIF, then WebP, and falls back to JPG
    data.resultado.forEach((item, i) => {
        const base = item.img.replace(/\.jpg$/, '');
        const figure = document.createElement('figure');
        figure.className = 'gallery__item';
        figure.innerHTML = `
            <button type="button" class="gallery__zoom">
                <picture>
                    <source srcset="${base}.avif" type="image/avif">
                    <source srcset="${base}.webp" type="image/webp">
                    <img src="${item.img}" alt="" loading="lazy">
                </picture>
            </button>`;
        figure.querySelector('.gallery__zoom').setAttribute('aria-label', `Ampliar imagen ${i + 1}`);
        figure.querySelector('.gallery__zoom').addEventListener('click', () => openLightbox(i));
        figure.querySelector('img').alt = item.texto || `${data.titulo} — imagen ${i + 1}`;

        if (item.texto) {
            const caption = document.createElement('figcaption');
            caption.textContent = item.texto;
            figure.appendChild(caption);
        }

        gallery.appendChild(figure);
    });

    updateLightboxNav();

    // 5. Ficha técnica: una fila por dato
    const sheet = document.querySelector('[data-ficha]');
    data.ficha.forEach(item => {
        const row = document.createElement('div');
        row.innerHTML = '<dt></dt><dd></dd>';
        row.querySelector('dt').textContent = item.campo;
        row.querySelector('dd').textContent = item.valor;
        sheet.appendChild(row);
    });

    // 6. Anterior y siguiente (al llegar al final vuelve al primero)
    const index = PROYECTOS.indexOf(data);
    const total = PROYECTOS.length;
    const prev = PROYECTOS[(index - 1 + total) % total];
    const next = PROYECTOS[(index + 1) % total];

    const linkTo = (item) => `proyecto.html?id=${item.id}`;

    const prevLink = document.querySelector('[data-anterior]');
    prevLink.href = linkTo(prev);
    prevLink.textContent = `← ${prev.id} ${prev.titulo}`;

    const nextLink = document.querySelector('[data-siguiente]');
    nextLink.href = linkTo(next);
    nextLink.textContent = `${next.id} ${next.titulo} →`;

    // Bloque grande "Siguiente proyecto"
    document.querySelector('[data-next]').href = linkTo(next);
    document.querySelector('[data-next-title]').textContent = `${next.id} ${next.titulo} →`;
    const nextImg = document.querySelector('[data-next-img]');
    nextImg.src = next.poster;
    nextImg.alt = next.titulo;

    // 7. Si un proyecto no tiene resultado o ficha, se oculta esa sección
    document.querySelector('#resultado').hidden = data.resultado.length === 0;
    document.querySelector('#ficha').hidden = data.ficha.length === 0;
}
