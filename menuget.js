window.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.getElementById('menu');
    const links = [
        '<li><a role="menuitem" class="nav-link" href="https://moodle.spsejecna.cz/" tabindex="-1">Titulní stránka</a></li>',
        '<li><a role="menuitem" class="nav-link" href="https://moodle.spsejecna.cz/my/" tabindex="-1">Nástěnka</a></li>',
        '<li><a role="menuitem" class="nav-link active" href="https://moodle.spsejecna.cz/my/courses.php" aria-current="true">Moje kurzy</a></li>',
        '<li><a role="menuitem" class="nav-link" href="https://moodle.spsejecna.cz/course/request.php" tabindex="-1">Požádat o kurz</a></li>',
        '<li><a role="menuitem" class="nav-link" href="https://oldmoodle.spsejecna.cz/" tabindex="-1">Starý Moodle</a></li>',
        '<li><a href="#">Další</a></li>'
    ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    shuffleArray(links);

    const numberOfLinksToShow = 5;

    menu.innerHTML = '<ul>';

    for (let i = 0; i < Math.min(numberOfLinksToShow, links.length); i++) {
        menu.innerHTML += links[i];
    }

    menu.innerHTML += '</ul>';
});
