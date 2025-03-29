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