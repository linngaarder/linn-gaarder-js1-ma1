// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading.";

// Question 3

heading.style.fontSize = "2em";

// Question 4

console.dir(heading.className);

heading.className = "subheading";

console.log(heading.className);

// Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.getElementsByClassName("results")[0];

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function logName(list) {
    for (var i = 0; i < list.length; i++) {
        var listName = list[i].name;
        console.log(listName);
    }
    };
    
    logName(cats);

// Question 8

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

const container = document.querySelector(".cat-container");

console.log(container);

let html = "";

function createCats() {

    for (var i = 0; i < cats.length; i++) {
        console.log(cats[i]);
    
        html += `<div class ="cat-container">
        <h5>${cats[i].name}</h5>
        <p>Age: ${cats[i].age}</p>
        </div>
    `;
    console.log(html);
}
container.innerHTML = html;
}

createCats(cats);
