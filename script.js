const feProjects = [
    {
        name: "chat-app",
        friendly: "Chat Illustration App",
        used: "HTML, SCSS, Gulp 4"
    }
]

const list = document.querySelector('.list');

feProjects.forEach(({ name, friendly, used }, project) => {
    const item = document.createElement('LI');

    item.innerHTML = `
    <li>
    <img src="/${name}/starter files/design/desktop-design.jpg" alt="${name}" />
        <a href="/${name}/index.html" aria-label="view ${friendly} project">
        <p class="subtitle">Project: </p>
        </a>
        <p>${friendly}</p>
        <p class="subtitle">Tech used: </p>
        <p>${used}</p>
        </li>
    `

    list.appendChild(item);
})
