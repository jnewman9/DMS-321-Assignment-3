const reviews = [
    // make your own content here
    {
        name: "Godzilla Minus One",
        img: "Godzilla-2023.webp",
        description: "Featured in Godzilla Minus One (2023).",
        stars: 6,
        reviewText: "This Design is INCREDIBLE, have not had a chance to see the new movie yet but this design is killer!"
    },
    {
        name: "Shin-Godzilla",
        img: "Godzilla-2016.jpeg",
        description: "Featured in Shin-Godzilla (2016)",
        stars: 4,
        reviewText: " This design is so different, so interesting, and I love it!"
    },
    {
        name: "Legendary Godzilla(GVK)",
        img: "Godzilla-2021.avif",
        description: "Featured in Godzilla vs. Kong (2021)",
        stars: 5,
        reviewText: "One of my favoirte Godzilla designs of all time."
    },
    {
        name: "Legendary Godzilla(GXK)",
        img: "Godzilla-2024.png",
        description: "Will be featured in Godzilla X Kong (2024)",
        stars: 6,
        reviewText: "I was watching the new Godzilla X Kong movie trailer, and was absolutely blown away when I saw this new design! Different and amazing!"
    },
    {
        name: "Godzilla(Gigan Rex)",
        img: "Godzilla-2022.png",
        description: "Featured in Godzilla vs. Gigan Rex (2022)",
        stars:4,
        reviewText: "This Design is pretty good! It was also a fan made project that was backed by TOHO, the original creators of Godzilla.."
    },
    {
        name: "Godzilla Ultima",
        img: "Godzilla-2021_2.jpeg",
        description: "Featured in Godzilla Signular Point (2021)",
        stars: 3,
        reviewText: "A Godzilla design that I find looks nice, not my favorite, but I don't dislike it."
    }
];

const img = document.getElementById('item-img');
const name = document.getElementById('name');
const description = document.getElementById('description');
const stars = document.getElementById('stars');
const reviewText = document.getElementById('reviewText');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

// set initial item number
let currItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    // get object from array
    const item = reviews[currItem];
    // replace the src property of the DOM element with an id of 'img'
    img.src = item.img;
    // replace the text of the 'name', 'description' and 
    // 'review_text' id elements
    name.textContent = item.name;
    description.textContent = item.description;
    reviewText.textContent = item.reviewText;
    // clear contents of 'stars' id element
    while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
    }
    // this loops over the number of stars in item.stars
    // and pushes new span elements with star icons
    // into the stars DOM element
    const fragment = new DocumentFragment();
    for (let j = 0; j < item.stars; j++) {
        const i = document.createElement("span");
        i.textContent = "star_rate";
        i.className = "material-icons";
        fragment.append(i);
    }
    stars.append(fragment);
});

// show item based on currItem
function showItem(itemNum) {
    const item = reviews[itemNum];
    img.src = item.img;
    name.textContent = item.name;
    description.textContent = item.description;
    while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
    }
    const fragment = new DocumentFragment();
    for (let j = 0; j < item.stars; j++) {
        const i = document.createElement("span");
        i.textContent = "star_rate";
        i.className = "material-icons";
        fragment.append(i);
    }
    stars.append(fragment);

    reviewText.textContent = item.reviewText;
}
// show next item
nextBtn.addEventListener('click', () => {
    currItem++;
    if (currItem > reviews.length - 1) {
        currItem = 0;
    }
    showItem(currItem);
});

// write code here for show previous item
prevBtn.addEventListener('click', () => {
    currItem--;
    if (currItem > reviews.length - 1) {
        currItem = 0;
    }
    showItem(currItem);
});

// write code here to show random item
randBtn.addEventListener('click', () => {
    // currItem--;
    currItem = Math.floor(Math.random() * reviews.length);
    console.log(currItem);
    if (currItem > reviews.length - 1) {
        currItem = 0;
    }
    showItem(currItem);
});