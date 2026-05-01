// Діалог
function userDialog() {
    let name = prompt("Введіть ім'я:");
    let age = prompt("Ваш вік?");

    if (age >= 18) {
        alert("Вітаємо, " + name + "!");
    } else {
        alert("Ще трохи рано 🙂");
    }
}

// Інформація про розробника
function devInfo(surname, name, position = "Admin") {
    alert("Розробник: " + surname + " " + name + "\nПосада: " + position);
}

// Порівняння рядків
function compareStrings(a, b) {
    if (a.length > b.length) {
        alert("Більше: " + a);
    } else if (b.length > a.length) {
        alert("Більше: " + b);
    } else {
        alert("Однакові");
    }
}

// Зміна фону
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";

    setTimeout(() => {
        document.body.style.backgroundColor = "#e6f2ff";
    }, 30000);
}

// Перехід
function goToAsia() {
    location.href = "asia.html";
}

// DOM 
function changeContent() {

    // getElementById + textContent
    let header = document.getElementById("main-header");
    header.textContent = "Explore The World 🌍";

    // replaceWith() 
    setTimeout(() => {
        let newHeader = document.createElement("h2");
        newHeader.textContent = "🌟 Обери свою подорож";
        header.replaceWith(newHeader);
    }, 4000);

    // querySelectorAll
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.border = "2px solid blue";
    });

    // createElement + append 
    let newText = document.createElement("p");
    newText.innerHTML = "Відкрий нові напрямки для подорожей";
    document.body.append(newText);

    // prepend
    let first = document.createElement("p");
    first.textContent = "🌍 Ласкаво просимо на сторінку подорожей!";
    document.body.prepend(first);

    // createTextNode
    let textNode = document.createTextNode(" ✈️ Приємної подорожі!");
    newText.append(textNode);

    // remove 
    setTimeout(() => {
        newText.remove();
        first.remove();
    }, 15000);
}