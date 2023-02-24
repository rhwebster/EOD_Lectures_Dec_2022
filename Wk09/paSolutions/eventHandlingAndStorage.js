window.addEventListener("DOMContentLoaded", () => {
    // Your code here

    // Problem #1
    document.getElementById("make-circle-blue").addEventListener("click", () => {
        document.getElementById("blue-border-circle").classList.add("blue-fill");
    })

    // Problem #2
    document.getElementById("will-not-check").addEventListener("click", (e) => {
        e.preventDefault();
    })

    // Problem #3
    document.getElementById("change-bananas-status").addEventListener("click", () => {
        document.getElementById("bananas-div").innerHTML = "No Bananas Today!";

        const bananasDiv = document.getElementById("bananas-image-div");

        if (bananasDiv.children.length) return;

        const noBananas = document.createElement("img");
        noBananas.src = "./images/no-bananas.png";
        bananasDiv.appendChild(noBananas);
    })

    // Problem #4
    document.getElementById("store-cookie").addEventListener("click", () => {
        const cookieInputText = document.getElementById("fav-cookie");
        document.cookie = `favCookie=${cookieInputText.value}`;
        let expireTime = new Date();
        expireTime.setTime(expireTime.getTime() + 1800000);
        document.cookie = `favCookie=${cookieInputText.value};expires=${expireTime.toUTCString()};`;
    })

    if (document.cookie) {
        const [key, value] = document.cookie.split("=");
        const input = document.getElementById("fav-cookie");
        input.value = value;
    }

    // Problem #5
    document.getElementById("save-pie").addEventListener("click", () => {
        const addedPieName = document.getElementById("pie-type");
        const list = document.getElementsByClassName("pie-list");

        if (list[0].children.length >= 5) return;

        const addPie = document.createElement("li");
        if (addedPieName.value.length > 0) {
            addPie.innerHTML = addedPieName.value;
            list[0].appendChild(addPie);
            addedPieName.value = "";
        }
    });

    // Problem #6
    document.getElementById("save-ice-cream").addEventListener("click", () => {
        const flavorInput = document.getElementById("fav-ice-cream");
        localStorage.setItem("favorite-flavor", flavorInput.value);
    });

    let favFlavor = localStorage.getItem("favorite-flavor");
    if (favFlavor) {
        let input = document.getElementById("fav-ice-cream");
        input.value = favFlavor;
    };

    // Problem #7
    let fruitCount = 0;
    const counter = document.getElementById("total-fruit");
    counter.innerHTML = fruitCount;
    document.getElementById("add-apple").addEventListener("click", (e) => {
        if (fruitCount >= 25) return;

        const basket = document.getElementById("fruit-storage");
        basket.innerHTML += "🍎";
        counter.innerHTML = fruitCount += 1;
    })

    document.getElementById("add-orange").addEventListener("click", (e) => {
        if (fruitCount >= 25) return;

        const basket = document.getElementById("fruit-storage");
        basket.innerHTML += "🍊";
        counter.innerHTML = fruitCount += 1;
    });

    document.getElementById("reset-basket").addEventListener("click", (e) => {
        const basket = document.getElementById("fruit-storage");
        basket.innerHTML = "";
        counter.innerHTML = fruitCount = 0;
    });

    // Problem #8
    document.getElementById("bubble-maker").addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Problem #9
    const dictionaryButton = document.querySelector('#dictionary-fetch');
    const dictionaryResults = document.querySelector('#results-area');

    dictionaryButton.addEventListener("click", async () => {
        const dictionaryRes = await fetch('https://api.dictionaryapi.dev/api/v1/entries/en/dictionary')
        const dictionaryJson = await dictionaryRes.json();

        const dictionaryUl = document.createElement('ul');
        dictionaryResults.appendChild(dictionaryUl);

        const dictionaryItems = [
            'Word: ' + dictionaryJson[0].word,
            'Definition: ' + dictionaryJson[0].meaning.noun[0].definition,
        ]

        dictionaryItems.forEach(item => {
            const dictionaryLi = document.createElement('li');
            dictionaryLi.innerText = item;
            dictionaryUl.appendChild(dictionaryLi);
        })
    })

});