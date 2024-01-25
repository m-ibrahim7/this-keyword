const questionsArray = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Cilantro"],
        answer: "Avocado"
    }
];
let index = 0;
let heading = document.querySelector("#heading");
let optionContainer = document.querySelector("#options");
let btn = document.getElementById("btn");
function quizApp() {
    heading.textContent = `${index + 1})${questionsArray[index].question}`;
    optionContainer.innerHTML = `
      ${questionsArray[index].options.map((elm) => `<button >
      <a href="#lll" onClick = answer(this)><span>${elm}</span></a> 
      </button>`).join('')}
    `;
}
function answer(elm) {
    if (questionsArray[index].answer === elm.textContent) {
        alert("Your answer is right");
    } else {
        alert("Your answer is wrong  right answer is :" + questionsArray[index].answer);
    }
}
btn.addEventListener("click", function () {
    index++;
    if (index > questionsArray.length - 1) {
        index = 0;
    }
    quizApp();
})
quizApp();