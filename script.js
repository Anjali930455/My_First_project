
const images = [
    "box1.png",
    "box2.png",
    "box3.png",
    "box4.png",
];

let current = 0;

const heroImg = document.getElementById("hero-img");

function nextSlide() {
    current = (current + 1) % images.length;
    heroImg.src = images[current];
}

function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    heroImg.src = images[current];
}

setInterval(nextSlide, 2000);


const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}


