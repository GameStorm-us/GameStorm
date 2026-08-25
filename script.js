/* =====================================
   GAMESTORM JAVASCRIPT
===================================== */


/* HERO GAMES */

const games = [

    {
        title: "Minecraft",

        category: "SANDBOX • ADVENTURE",

        description:
            "Explore, build, survive and create your own incredible world.",

        image:
            "https://images.unsplash.com/photo-1607513746994-51f730a44832?auto=format&fit=crop&w=1800&q=90"
    },

    {
        title: "GTA San Andreas",

        category: "ACTION • OPEN WORLD",

        description:
            "Experience the classic open-world adventure of GTA San Andreas.",

        image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=90"
    }

];


let currentSlide = 0;


/* HERO ELEMENTS */

const heroTitle =
    document.getElementById("heroTitle");

const heroCategory =
    document.getElementById("heroCategory");

const heroDescription =
    document.getElementById("heroDescription");

const heroBackground =
    document.querySelector(".hero-background");

const dots =
    document.querySelectorAll(".dot");


/* SHOW SLIDE */

function showSlide(index) {

    currentSlide = index;

    const game = games[currentSlide];

    heroTitle.textContent =
        game.title;

    heroCategory.textContent =
        game.category;

    heroDescription.textContent =
        game.description;

    heroBackground.style.backgroundImage =
        `url("${game.image}")`;

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentSlide
        );

    });

}


/* NEXT */

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= games.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    });


/* PREVIOUS */

document
    .getElementById("prevBtn")
    .addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = games.length - 1;
        }

        showSlide(currentSlide);

    });


/* DOTS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/* AUTO SLIDER */

setInterval(() => {

    currentSlide++;

    if (currentSlide >= games.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 6000);


/* =====================================
   MINECRAFT
===================================== */

function playMinecraft() {

    window.open(
        "https://www.minecraft.net/",
        "_blank"
    );

}

function downloadMinecraft() {

    window.open(
        "https://www.minecraft.net/download",
        "_blank"
    );

}


/* =====================================
   GTA SAN ANDREAS
===================================== */

function playGTA() {

    window.open(
        "https://www.rockstargames.com/games/sanandreas",
        "_blank"
    );

}

function downloadGTA() {

    window.open(
        "https://www.rockstargames.com/games/sanandreas",
        "_blank"
    );

}


/* =====================================
   OTHER GAMES
===================================== */

function showDemo(gameName) {

    alert(
        gameName +
        "\n\nOnline game page coming soon!"
    );

}

function showDownload(gameName) {

    alert(
        gameName +
        "\n\nOfficial download page coming soon!"
    );

}


/* =====================================
   HERO PLAY BUTTON
===================================== */

document
    .getElementById("playBtn")
    .addEventListener("click", () => {

        if (games[currentSlide].title === "Minecraft") {

            playMinecraft();

        } else {

            playGTA();

        }

    });


/* =====================================
   HERO DOWNLOAD
===================================== */

document
    .getElementById("downloadBtn")
    .addEventListener("click", () => {

        if (games[currentSlide].title === "Minecraft") {

            downloadMinecraft();

        } else {

            downloadGTA();

        }

    });


/* =====================================
   SEARCH
===================================== */

const searchBtn =
    document.getElementById("searchBtn");

const searchBox =
    document.getElementById("searchBox");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");


searchBtn.addEventListener("click", () => {

    searchBox.classList.add("show");

    searchInput.focus();

});


closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("show");

    searchInput.value = "";

});


searchInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Enter") {
            return;
        }

        const value =
            searchInput.value
                .trim()
                .toLowerCase();

        const found =
            games.find(game =>
                game.title
                    .toLowerCase()
                    .includes(value)
            );

        if (found) {

            showSlide(
                games.indexOf(found)
            );

            searchBox.classList.remove("show");

            searchInput.value = "";

        } else {

            alert("Game not found!");

        }

    }
);


/* =====================================
   LOGIN / SIGNUP
===================================== */

const loginModal =
    document.getElementById("loginModal");

const signupModal =
    document.getElementById("signupModal");


document
    .getElementById("loginBtn")
    .addEventListener("click", () => {

        loginModal.classList.add("show");

    });


document
    .getElementById("closeLogin")
    .addEventListener("click", () => {

        loginModal.classList.remove("show");

    });


document
    .getElementById("closeSignup")
    .addEventListener("click", () => {

        signupModal.classList.remove("show");

    });


document
    .getElementById("signupLink")
    .addEventListener("click", () => {

        loginModal.classList.remove("show");

        signupModal.classList.add("show");

    });


document
    .getElementById("loginLink")
    .addEventListener("click", () => {

        signupModal.classList.remove("show");

        loginModal.classList.add("show");

    });


/* =====================================
   LOGIN DEMO
===================================== */

document
    .getElementById("loginSubmit")
    .addEventListener("click", () => {

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value.trim();

        if (!email || !password) {

            alert(
                "Please enter your email and password."
            );

            return;
        }

        alert(
            "Login system ready!\n\n" +
            "Firebase authentication will be connected later."
        );

    });


/* =====================================
   SIGNUP DEMO
===================================== */

document
    .getElementById("signupSubmit")
    .addEventListener("click", () => {

        const username =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value.trim();


        if (!username || !email || !password) {

            alert("Please fill all fields.");

            return;
        }


        if (password.length < 6) {

            alert(
                "Password must be at least 6 characters."
            );

            return;
        }


        alert(
            "Account created UI is ready!\n\n" +
            "Firebase will be connected later."
        );

    });


/* =====================================
   CLOSE MODALS
===================================== */

window.addEventListener("click", (event) => {

    if (event.target === loginModal) {

        loginModal.classList.remove("show");

    }

    if (event.target === signupModal) {

        signupModal.classList.remove("show");

    }

});


/* ESCAPE */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            loginModal.classList.remove("show");

            signupModal.classList.remove("show");

            searchBox.classList.remove("show");

        }

    }
);


/* START */

showSlide(0);