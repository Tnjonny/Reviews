const reviews = [
    {
        id: 1,
        name: "John Smith",
        job: "web developer",
        img: "#",
        text: "lorem20"
    },
    {
        id: 2,
        name: "Jane Smith",
        job: "software developer",
        img: "#",
        text: "lorem15"
    },
    {
        id: 3,
        name: "Jonathan Nkuli",
        job: "Merch Assistant",
        img: "#",
        text: "lorem10"
    },
    {
        id: 4,
        name: "Caitlin Nkuli",
        job: "Sales Assistant",
        img: "#",
        text: "lorem5"
    }

]


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) { // -1 reflects last item in array
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) { // -1 reflects last item in array
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


randomBtn.addEventListener('click', function () {
   const ranDom = Math.floor(Math.random() * reviews.length);
   showPerson(ranDom);
});

