/*---Plantilla de proyecto: rellena proyecto.html con los datos de proyectos.js---*/

// 1. Qué proyecto se pide: proyecto.html?id=002 → "002"
const projectId = new URLSearchParams(location.search).get('id');
const project = PROYECTOS.find(item => item.id === projectId);

if (!project) {
    // Si el id no existe, vuelve al archivo
    location.replace('index.html#proyectos');
} else {
    fillProject(project);
}

function fillProject(data) {

    // Título de la pestaña
    document.title = `${data.titulo} — Joaquín Lobos`;

    // 2. Textos: cada elemento con data-campo="x" recibe data.x
    document.querySelectorAll('[data-campo]').forEach(element => {
        element.textContent = data[element.dataset.campo] || '';
    });

    // 3. Vídeo principal (GIF en bucle)
    const media = document.querySelector('[data-media]');
    media.poster = data.poster;
    media.src = data.video;
    media.setAttribute('aria-label', data.titulo);

    // 4. Resultado: una figura por imagen
    const gallery = document.querySelector('[data-resultado]');
    data.resultado.forEach(item => {
        const figure = document.createElement('figure');
        figure.className = 'gallery__item';
        figure.innerHTML = `<img src="${item.img}" alt="" loading="lazy"><figcaption></figcaption>`;
        figure.querySelector('img').alt = item.texto;
        figure.querySelector('figcaption').textContent = item.texto;
        gallery.appendChild(figure);
    });

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
