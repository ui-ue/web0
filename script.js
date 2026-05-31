//hi
const sections = document.querySelectorAll('.time-block');
console.log("Found sections:", sections);
//basic click
const sections = document.querySelectorAll('.time-block');

sections.forEach((section) => {
    section.addEventListener('click', () => {
        console.log("clicked!");
    });
    //item creation on click
});
function createItem(section) {
    const item = document.createElement('div');
    item.innerText = '🍃';
    item.style.position = 'absolute';
    item.style.top = '10px';
    item.style.left = '50%'; 
    section.appendChild(item);
}

const sections = document.querySelectorAll('.time-block');
sections.forEach((section) => {
    section.addEventListener('click', () => {
        createItem(section);
    });
});;

// randomisation

function createItem(section) {
    const item = document.createElement('div');
    item.classList.add('falling-item'); // Connects to CSS animation
    item.innerText = '🍃';

    // Randomize position and speed
    item.style.left = Math.random() * 100 + '%';
    const duration = Math.random() * 3 + 3;
    item.style.animationDuration = duration + 's';

    section.appendChild(item);

    // Memory cleanup: remove item after it falls
    setTimeout(() => { item.remove(); }, duration * 1000);
}
// (Keep the rest of the loop from Step 3)
