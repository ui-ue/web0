//hi
const sections = document.querySelectorAll('.time-block');
console.log("Found sections:", sections);
const sections = document.querySelectorAll('.time-block');

sections.forEach((section) => {
    section.addEventListener('click', () => {
        console.log("Section clicked!");
    });
});
