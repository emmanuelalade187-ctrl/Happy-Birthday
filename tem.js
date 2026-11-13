
/* BIRTHDAY MESSAGE */

const birthdayMessage = `Today is all about celebrating the wonderful person you are. 🌷

May your day be filled with laughter, sweet surprises, warm hugs, and beautiful memories. May every wish in your heart find its way to you, and may this new chapter bring you endless happiness, love, and success.

Keep shining, keep smiling, and never forget how truly special you are. The world is brighter with you in it! ✨

Wishing you the happiest birthday ever! 🎂🎁

With lots of love,
Someone who cares about you 💕`;


/* GET HTML ELEMENTS */

const envelope = document.getElementById("envelope");

const seal = document.getElementById("seal");

const message = document.getElementById("message");

const hint = document.getElementById("hint");

const reset = document.getElementById("reset");

let typingTimer;


/* TYPE MESSAGE SLOWLY */

function typeMessage(text) {

    clearInterval(typingTimer);

    message.textContent = "";

    let i = 0;

    const cursor = document.createElement("span");

    cursor.className = "typed-cursor";

    cursor.textContent = "▍";

    message.appendChild(cursor);

    typingTimer = setInterval(() => {

        if (i >= text.length) {

            clearInterval(typingTimer);

            cursor.remove();

            return;

        }

        cursor.insertAdjacentText(
            "beforebegin",
            text.charAt(i)
        );

        i++;

    }, 42);

}


/* CREATE CONFETTI */

function makeConfetti() {

    const bits = [
        "💗",
        "✨",
        "🌸",
        "🎉",
        "💕",
        "⭐"
    ];

    for (let i = 0; i < 42; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti";

        piece.textContent =
            bits[Math.floor(Math.random() * bits.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (14 + Math.random() * 18) + "px";

        piece.style.animationDelay =
            Math.random() * 1.1 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 4600);

    }

}


/* OPEN ENVELOPE */

function openEnvelope() {

    if (envelope.classList.contains("opened")) {

        return;

    }

    envelope.classList.add("opened");

    hint.textContent =
        "💖 Your birthday message is being written…";

    reset.hidden = false;

    makeConfetti();

    // Begin typing immediately after opening starts
    setTimeout(() => {

        typeMessage(birthdayMessage);

    }, 450);

}


/* CLOSE ENVELOPE */

function closeEnvelope() {

    clearInterval(typingTimer);

    envelope.classList.remove("opened");

    message.textContent = "";

    hint.textContent =
        "💌 Tap the heart seal to open your surprise 💌";

    reset.hidden = true;

}


/* EVENT LISTENERS */

// When the seal is tapped
seal.addEventListener("click", openEnvelope);

// When the reset button is clicked
reset.addEventListener("click", closeEnvelope);
