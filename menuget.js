window.addEventListener("DOMContentLoaded", (event) => {
   const menu = document.getElementById('menu');

   const links = [
      { text: 'Titulní stránka', href: 'https://moodle.spsejecna.cz/' },
      { text: 'Nástěnka', href: 'https://moodle.spsejecna.cz/my/' },
      { text: 'Moje kurzy', href: 'https://moodle.spsejecna.cz/my/courses.php', isActive: true },
      { text: 'Požádat o kurz', href: 'https://moodle.spsejecna.cz/course/request.php' },
      { text: 'Starý Moodle', href: 'https://oldmoodle.spsejecna.cz/' },
      { text: 'Další', href: '#' }
   ];

   generateRandomMenu(menu, links);
});

function generateRandomMenu(menuElement, linksArray) {
   const ul = document.createElement('ul');
   ul.classList.add('nav');

   const randomCount = Math.floor(Math.random() * linksArray.length) + 1;

   for (let i = 0; i < randomCount; i++) {
      const randomIndex = Math.floor(Math.random() * linksArray.length);
      const linkObj = linksArray[randomIndex];

      const li = document.createElement('li');
      li.classList.add('nav-item');

      const a = document.createElement('a');
      a.setAttribute('role', 'menuitem');
      a.classList.add('nav-link');
      if (linkObj.isActive) {
         a.classList.add('active');
         a.setAttribute('aria-current', 'true');
      }
      a.textContent = linkObj.text;
      a.setAttribute('href', linkObj.href);
      a.setAttribute('tabindex', '-1');

      li.appendChild(a);
      ul.appendChild(li);

      linksArray.splice(randomIndex, 1);
   }

   menuElement.appendChild(ul);
}
