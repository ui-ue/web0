//hi
const sections = document.querySelectorAll('.time-block');
console.log("Found sections:", sections);
const sections = document.querySelectorAll('.time-block');

sections.forEach((section) => {
    section.addEventListener('click', () => {
        console.log("Section clicked!");
    });
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
});
