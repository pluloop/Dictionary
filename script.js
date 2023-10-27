var result = document.getElementById("result")
var textInput = document.getElementById("text-input");
const submitButton = document.getElementById("submit-button");
var partOfSpeech;
var definition1;
var definition2;

const definitions = {
    yes: {
        partOfSpeech: "noun", 
        definition1: "Used to give an affirmative response.", 
        definition2: "Used as a response to someone addressing one or otherwise trying to attract one's attention."
    },

    panacea: {
        partOfSpeech: "noun",
        definition1: "An answer or solution for all problems or difficulties."
    },

    concatenation: {
        partOfSpeech: "noun",
        definition1: "A series of interconnected or interdependent things or events."
    },

    saw: {
        partOfSpeech: "verb",
        definition1: "Cut (something) using a saw.",
        definition2: "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
    },

    found: {
        partOfSpeech: "adjective",
        definition1: "Having been discovered by chance or unexpectedly.",
        definition2: "(of a ship) Equipped; Supplied."
    },

    crane: {
        partOfSpeech: "verb",
        definition1: "Stretch out one's body or neck in order to see something.",
        definition2: "Move (a heavy object) with a crane."
    },

    minute: {
        partOfSpeech: "noun",
        definition1: "A period of time equal to sixty seconds or a sixtieth of an hour.",
        definition2: "A sixtieth of a degree of angular measurement (symbol: ʹ)"
    },

    grotesque: {
        partOfSpeech: "adjective",
        definition1: "Comically or repulsively ugly or distorted."
    },

    label: {
        partOfSpeech: "noun",
        definition1: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."
    },

    debacle: {
        partOfSpeech: "noun",
        definition1: "A sudden and ignominious failure; a fiasco."
    }
}

let errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.innerText = "Error: you need to input a word.";

function checkInput(){
    if (textInput.value == ""){
        result.appendChild(errorMessage);
    }

    else{
        result.removeChild(errorMessage);
    }

    textInput.value = "";
}

submitButton.addEventListener("click", checkInput);