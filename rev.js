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

const prevBtn = document.querrySelector(".prev-btn");
const nextBtn = document.querrySelector(".next-btn");
const randomBtn = document.querrySelector(".random-btn");