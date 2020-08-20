const feProjects = [
    {
        name: "chat-app",
        friendly: "Chat Illustration App",
        used: "HTML, SCSS, Gulp 4"
    },
    {
        name: "huddle-landing-page",
        friendly: "Huddle Landing Page",
        used: "HTML, SCSS, Gulp 4"
    },
    {
        name: "article-preview",
        friendly: "Article Preview",
        used: "HTML, CSS, Javascript"
    }
]

const list = document.querySelector('.list');

feProjects.forEach(({ name, friendly, used }) => {
    const item = document.createElement('LI');

    item.innerHTML = `
    
    <div class="img-wrapper">
    <img src="/${name}/starter_files/design/desktop-design.jpg" alt="${name}" />
    </div>
    <div class="text-wrapper">
        <a href="/${name}/index.html" aria-label="view ${friendly} project">
        <p class="subtitle">Project: </p>
        </a>
        <p>${friendly}</p>
        <p class="subtitle">Tech used: </p>
        <p>${used}</p>
        </div>
    `

    list.appendChild(item);
})
