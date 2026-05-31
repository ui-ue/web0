
function createItem(section, type) {
    const item = document.createElement('div');
    item.classList.add('falling-item');
    

    item.innerText = type === 'day' ? '🍃' : '⭐';
    

    item.style.left = Math.random() * 100 + '%';
    

    const duration = Math.random() * 3 + 3;
    item.style.animationDuration = duration + 's';
    

    section.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}


const sections = document.querySelectorAll('.time-block');

sections.forEach((section) => {
  
    const isDay = section.classList.contains('day-1') || 
                  section.classList.contains('day-2') || 
                  section.classList.contains('day-3');
                  
    const themeType = isDay ? 'day' : 'night';


    section.addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            createItem(section, themeType);
        }
    });


    let scrollTimeout;
    window.addEventListener('scroll', () => {

        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !scrollTimeout) {

            createItem(section, themeType);
            
      
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 150); 
        }
    });
});
