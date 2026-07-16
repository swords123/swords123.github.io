const { featuredProjects, publications } = window.SITE_CONTENT;

const linkLabels = {
    project: "Webpage",
    paper: "Paper",
    code: "Code"
};

const externalAttributes = (url) => url.startsWith("http")
    ? ' target="_blank" rel="noreferrer"'
    : "";

const allPublications = [
    ...featuredProjects,
    ...publications
];

document.getElementById("publication-list").innerHTML = allPublications.map((publication) => {
    const links = Object.entries(publication.links)
        .map(([type, url]) => `<a href="${url}"${externalAttributes(url)}>${linkLabels[type] || type}</a>`)
        .join("");

    return `
        <article class="publication">
            <div class="publication-image">
                <img src="${publication.image}" alt="${publication.imageAlt}" loading="lazy">
            </div>
            <div class="publication-content">
                <div class="publication-meta">
                    <span>${publication.venue}</span>
                    <span>${publication.year}</span>
                </div>
                <h3>${publication.title}</h3>
                ${publication.description ? `<p class="publication-description">${publication.description}</p>` : ""}
                <p class="publication-authors">${publication.authors}</p>
                <div class="publication-links">${links}</div>
            </div>
        </article>
    `;
}).join("");

document.getElementById("year").textContent = new Date().getFullYear();
