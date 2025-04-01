document.querySelectorAll('.questions__accordion').forEach(accordion => {
      const heading = accordion.querySelector('.questions__heading');
      
      heading.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.questions__accordion.active');
        
        if (currentlyActive && currentlyActive !== accordion) {
          currentlyActive.classList.remove('active');
        }
        
        accordion.classList.toggle('active');
      });
    });

const menuBtn = document.querySelector('#menu-btn');
const navList = document.querySelector('.header__nav-list');

menuBtn.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});