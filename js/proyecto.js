/*---Plantilla de proyecto---*/

/*---Lightbox---*/

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImg = document.querySelector('[data-lightbox-img]');
const lightboxCount = document.querySelector('[data-lightbox-count]');
let lightboxIndex = 0;

function showLightboxImage(index) {
    const images = document.querySelectorAll('.gallery__item img');
    const total = images.length;
    lightboxIndex = (index + total) % total;

    const image = images[lightboxIndex];
    lightboxImg.src = image.currentSrc || image.src;
    lightboxImg.alt = image.alt;
    lightboxCount.textContent = `${String(lightboxIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function openLightbox(index) {
    showLightboxImage(index);
    lightbox.showModal();
    window.lenis?.stop();
}

lightbox.addEventListener('close', () => window.lenis?.start());

function updateLightboxNav() {
    const single = document.querySelectorAll('.gallery__item img').length < 2;
    lightbox.querySelector('[data-lightbox-prev]').hidden = single;
    lightbox.querySelector('[data-lightbox-next]').hidden = single;
}

lightbox.querySelector('[data-lightbox-prev]').addEventListener('click', () => showLightboxImage(lightboxIndex - 1));
lightbox.querySelector('[data-lightbox-next]').addEventListener('click', () => showLightboxImage(lightboxIndex + 1));
lightbox.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());

lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showLightboxImage(lightboxIndex - 1);
    if (event.key === 'ArrowRight') showLightboxImage(lightboxIndex + 1);
});

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

const projectId = new URLSearchParams(location.search).get('id');
const project = PROYECTOS.find(item => item.id === projectId) || PROYECTOS[0];

fillProject(project);

function fillProject(data) {

    document.title = `${data.titulo} — Joaquín Lobos`;

    const withBold = (text) => text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    document.querySelectorAll('[data-campo]').forEach(element => {
        element.innerHTML = withBold(data[element.dataset.campo] || '');
    });

    const title = document.querySelector('.project-title__name');
    title.textContent = '';

    data.titulo.split(' ').forEach((word, index) => {
        const outer = document.createElement('span');
        const inner = document.createElement('span');
        outer.className = 'hero__w';
        inner.className = 'hero__wi';
        inner.style.setProperty('--i', index + 1);
        inner.textContent = word;
        outer.appendChild(inner);
        title.append(outer, ' ');
    });

    const media = document.querySelector('[data-media]');
    const videoBox = document.querySelector('[data-youtube]');
    const videoId = getYouTubeId(data.youtube);

    if (!videoId) {
        media.poster = data.poster;
        media.src = data.video;
        media.setAttribute('aria-label', data.titulo);
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

    const webLink = document.querySelector('[data-web]');
    if (data.web) {
        webLink.href = data.web;
        webLink.querySelector('[data-web-url]').textContent = data.web.replace(/^https?:\/\//, '').replace(/\/$/, '');
        webLink.hidden = false;
    }

    const gallery = document.querySelector('[data-resultado]');
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

    const sheet = document.querySelector('[data-ficha]');
    data.ficha.forEach(item => {
        const row = document.createElement('div');
        row.innerHTML = '<dt></dt><dd></dd>';
        row.querySelector('dt').textContent = item.campo;
        const value = row.querySelector('dd');

        if (item.url) {
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.textContent = `${item.valor} ↗`;
            value.appendChild(link);
        } else {
            value.textContent = item.valor;
        }
        sheet.appendChild(row);
    });

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

    document.querySelector('[data-next]').href = linkTo(next);
    document.querySelector('[data-next-title]').textContent = `${next.id} ${next.titulo} →`;
    const nextImg = document.querySelector('[data-next-img]');
    nextImg.src = next.poster;
    nextImg.alt = next.titulo;

    document.querySelector('#resultado').hidden = data.resultado.length === 0;
    document.querySelector('#ficha').hidden = data.ficha.length === 0;
}
