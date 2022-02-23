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
        text: "lorem20"
    },
    {
        id: 3,
        name: "Jonathan Nkuli",
        job: "Merch Assistant",
        img: "#",
        text: "lorem20"
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
    showPerson(currentItem);
})