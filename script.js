const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const question = document.getElementById("question");
const inputs = document.getElementsByClassName("answer");
const button = document.getElementById("submit");
const header = document.getElementsByClassName("quiz-header")[0];
const finisher = document.getElementsByClassName("quiz-finisher")[0];
const result = document.getElementById("result");

const quizData = [
    {
        question: "What is your skin type?",
        a: "Normal",
        b: "Dry",
        c: "Oily",
        d: "Combination",

    },
    {
        question: "What are your skin concerns?",
        a: "Acne & breakouts",
        b: "Dryness & dullness",
        c: "Sun damage & aging",
        d: "Uneven skin tone & texture",

    }
]


const letterToNum = (x) => {
    if (x == "a") return 1;
    else if (x == "b") return 2;
    else if (x == "c") return 3;
    else if (x == "d") return 4;
}


const totalQuizes = 2;
let currentQuiz = 0;
let score = 0;

const updateQuiz = () => {
    if (currentQuiz >= totalQuizes)
        return finishQuiz();

    a_text.innerText = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;
    question.innerText = quizData[currentQuiz].question;
}

const readyQuiz = () => {
    updateQuiz();

    verifyAnswer();
}

const verifyAnswer = () => {
    for (const input of inputs) {
        if (input.checked) {
            score += letterToNum(input.id);
            currentQuiz++;
        }
        input.checked = false;
    }

    updateQuiz();
}

const finishQuiz = () => {
    header.style.display = "none";
    finisher.style.display = "block";
    if (score == 2) {
        result.innerHTML = `
        <div style="display: flex; gap: 2rem; text-align: center;">
        <div style="display: flex; flex-direction: column; justify-content: center;">
        <strong>Cleanser</strong>
        <p>Vichy Normaderm Phytosolution</p>
        </div>
        <div style="display: flex; flex-direction: column;">
        <strong>Cream for acne pimples</strong>
        <p>La Roche-Posay Effaclar Duo+</p>
        </div>
        <div style="display: flex; flex-direction: column;">
        <strong>Moisturizing cream</strong>
        <p>PM Cerave Facial Moisturizing Lotion</p>
        </div>
        </div>
        `;
    }
    if (score == 3) {
        result.innerHTML = `
        <div style="display: flex; gap: 2rem; text-align: center;">
        <div style="display: flex; flex-direction: column; justify-content: center;">
        <strong>Cleanser</strong>
        <p>Beauty of Joseon Green Plum Cleanser</p>
        </div>
        <div style="display: flex; flex-direction: column;">
        <strong>Cream</strong>
        <p>COSRX Advanced Snail Radiance Dual Essence</p>
        </div>
        </div>
        `;
    }
}

button.addEventListener("click", () => readyQuiz());