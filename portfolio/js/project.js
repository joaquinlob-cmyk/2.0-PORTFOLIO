/* =========================================================
   PROJECT — fills project.html with the data from projects-data.js
   ========================================================= */

// 1. Which project is requested: project.html?id=002 → "002"
//    With no id (or an unknown one), the first project is shown
const projectId = new URLSearchParams(location.search).get('id');
const project = PROJECTS.find(item => item.id === projectId) || PROJECTS[0];

fillProject(project);

function fillProject(data) {

    // Tab title
    document.title = `${data.title} — Joaquín Lobos`;

    // 2. Texts: every element with data-field="x" gets data.x
    document.querySelectorAll('[data-field]').forEach(element => {
        element.textContent = data[element.dataset.field] || '';
    });

    // 3. Main video (looping GIF)
    const media = document.querySelector('[data-project-media]');
    media.poster = data.poster;
    media.src = data.video;
    media.setAttribute('aria-label', data.title);

    // 4. Results: one figure per image
    const results = document.querySelector('[data-results]');
    data.results.forEach(item => {
        const figure = document.createElement('figure');
        figure.className = 'results__item figure';
        figure.innerHTML = '<img src="" alt="" loading="lazy"><figcaption></figcaption>';
        figure.querySelector('img').src = item.image;
        figure.querySelector('img').alt = item.caption;
        figure.querySelector('figcaption').textContent = item.caption;
        results.appendChild(figure);
    });

    // 5. Credits: one row per item
    const credits = document.querySelector('[data-credits]');
    data.credits.forEach(item => {
        const row = document.createElement('div');
        row.className = 'data-list__row';
        row.innerHTML = '<dt></dt><dd></dd>';
        row.querySelector('dt').textContent = item.label;
        row.querySelector('dd').textContent = item.value;
        credits.appendChild(row);
    });

    // 6. Previous and next (after the last one it goes back to the first)
    const index = PROJECTS.indexOf(data);
    const total = PROJECTS.length;
    const prev = PROJECTS[(index - 1 + total) % total];
    const next = PROJECTS[(index + 1) % total];

    const linkTo = (item) => `project.html?id=${item.id}`;

    const prevLink = document.querySelector('[data-prev-link]');
    prevLink.href = linkTo(prev);
    prevLink.textContent = `← ${prev.id} ${prev.title}`;

    const nextLink = document.querySelector('[data-next-link]');
    nextLink.href = linkTo(next);
    nextLink.textContent = `${next.id} ${next.title} →`;

    // Big "Next project" card
    document.querySelector('[data-next-card]').href = linkTo(next);
    document.querySelector('[data-next-title]').textContent = `${next.id} ${next.title} →`;
    const nextImage = document.querySelector('[data-next-image]');
    nextImage.src = next.poster;
    nextImage.alt = next.title;

    // 7. A project with no results or credits hides that section
    document.querySelector('#results').hidden = data.results.length === 0;
    document.querySelector('#credits').hidden = data.credits.length === 0;
}
