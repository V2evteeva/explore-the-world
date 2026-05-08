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



// Події 

// Через атрибут

function showCountry() {

    alert(
        "Наступна подорож: Японія 🇯🇵"
    );
}


// Через властивість

let ticketBtn =
    document.getElementById("ticketBtn");

if (ticketBtn) {

    ticketBtn.onclick = function () {

        alert(
            "Квиток до Таїланду заброньовано ✈️"
        );
    };
    
}


// addEventListener

let tipsBtn =
    document.getElementById("tipsBtn");

function firstTip() {

    alert(
        "Не забудьте паспорт 🌏"
    );
}

function secondTip() {

    alert(
        "Перевірте багаж перед польотом ✈️"
    );
}

if (tipsBtn) {

    tipsBtn.addEventListener(
        "click",
        firstTip
    );

    tipsBtn.addEventListener(
        "click",
        secondTip
    );
}


// handleEvent

let guideBtn =
    document.getElementById("guideBtn");

let travelGuide = {

    handleEvent(event) {

        alert(
            "Гід відкрив інформацію про тур"
        );
    }
};

if (guideBtn) {

    guideBtn.addEventListener(
        "click",
        travelGuide
    );
}


// removeEventListener

let removeGuideBtn =
    document.getElementById(
        "removeGuideBtn"
    );

if (removeGuideBtn) {

    removeGuideBtn.onclick = function () {

        guideBtn.removeEventListener(
            "click",
            travelGuide
        );

        alert(
            "Туристичний гід видалений"
        );
    };
}



// Делегування подій

let asiaList =
    document.getElementById("asia-list");

if (asiaList) {

    asiaList.onclick = function(event) {

        if (
            event.target.tagName === "LI"
        ) {

            let countries =
                asiaList.querySelectorAll("li");

            countries.forEach(country => {

                country.classList.remove(
                    "active-country"
                );
            });

            event.target.classList.add(
                "active-country"
            );
        }
    };
}



// data-* меню

let asiaMenu =
    document.getElementById("asia-menu");

let actions = {

    background() {

    alert(
        "🌏 Азія — континент неймовірних подорожей!"
    );
    },

    dialog() {

        let tourist =
            prompt("Ваше ім’я:");

        alert(
            "Гарної подорожі, " +
            tourist +
            " 🌏"
        );
    },

    welcome() {

        alert(
            "Ласкаво просимо до Азії ✈️"
        );
    }
};

if (asiaMenu) {

    asiaMenu.onclick = function(event) {

        let action =
            event.target.dataset.action;

        if (action) {

            actions[action]();
        }
    };
}


// Behavior

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.dataset.toggle ===
            "travel-mode"
        ) {

            document.body.classList.toggle(
                "travel-mode"
            );
        }
    }
);