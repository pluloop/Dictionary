// to use current html elements
const result = document.getElementById("result")
const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("submit-button");
const userInterface = document.getElementById("user-interface");

// to use future html elements
const vocabTerm = document.createElement("p");
vocabTerm.classList.add("vocab-term");

const partOfSpeechText = document.createElement("p");
partOfSpeechText.classList.add("part-speech");

const definitionHeader = document.createElement("p");
definitionHeader.classList.add("definition-header");

const definition1Text = document.createElement("p");
definition1Text.classList.add("definition1-text");

const definition2Text = document.createElement("p");
definition2Text.classList.add("definition2-text");

const errorMessageBlank = document.createElement("p");
errorMessageBlank.classList.add("blank-error");
errorMessageBlank.innerText = "Error: you need to input a word";

const errorMessageNonexistent = document.createElement("p");
errorMessageNonexistent.classList.add("nonexistent-error");
errorMessageNonexistent.innerText = "Error: word not on record";

// to assign result of word inputted
var partOfSpeech;
var definition1;
var definition2;

// used to display later depending on input
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

// removes current definition if any
function checkDefinition(){
    if (vocabTerm.parentElement){
        result.removeChild(vocabTerm);
        result.removeChild(partOfSpeechText);
        result.removeChild(definitionHeader);
        result.removeChild(definition1Text);
        result.removeChild(definition2Text);
    }
}

// removes current blank error if any
function checkBlankError(){
    if (errorMessageBlank.parentElement){
        result.removeChild(errorMessageBlank);
    }
}

// removes current word not found error if any
function checkNonexistentError(){
    if (errorMessageNonexistent.parentElement){
        result.removeChild(errorMessageNonexistent);
    }
}

// display definition or word not found error if input not empty
function definition(){
    let inputValue = textInput.value.toLowerCase();

    // display if 2 definitions
    if (definitions.hasOwnProperty(inputValue) && definitions[inputValue].hasOwnProperty("definition2")){
        checkNonexistentError();
        checkBlankError();
        vocabTerm.innerText = inputValue + ":";
        partOfSpeechText.innerText = "part of speech: " + definitions[inputValue].partOfSpeech;
        definitionHeader.innerText = "definition(s):";
        definition1Text.innerText = "- " + definitions[inputValue].definition1;
        definition2Text.innerText = "- " + definitions[inputValue].definition2;
        result.appendChild(vocabTerm);
        result.appendChild(partOfSpeechText);
        result.appendChild(definitionHeader);
        result.appendChild(definition1Text);
        result.appendChild(definition2Text);

        userInterface.style.height = "30rem";
        vocabTerm.style.top = "40%";
        partOfSpeechText.style.top = "45%";
        definitionHeader.style.top = "50%";
        definition1Text.style.top = "55%";
        definition2Text.style.top = "62.5%";
    }

    // display if 1 definition
    else if(definitions.hasOwnProperty(inputValue)){
        checkDefinition();
        checkNonexistentError();
        
        vocabTerm.innerText = inputValue + ":";
        partOfSpeechText.innerText = "part of speech: " + definitions[inputValue].partOfSpeech;
        definitionHeader.innerText = "definition(s):";
        definition1Text.innerText = "- " + definitions[inputValue].definition1;
        result.appendChild(vocabTerm);
        result.appendChild(partOfSpeechText);
        result.appendChild(definitionHeader);
        result.appendChild(definition1Text);

        userInterface.style.height = "27.5rem";
        vocabTerm.style.top = "42%";
        partOfSpeechText.style.top = "47%";
        definitionHeader.style.top = "52%";
        definition1Text.style.top = "57%";
    }

    // display nonexistent error if word not found in definitions object
    else{
        checkDefinition();
        checkNonexistentError();
        checkBlankError();
        result.appendChild(errorMessageNonexistent);

        userInterface.style.height = "15rem";
    }
}

// checks if input is empty or not
function checkInput(){
    result.innerHTML = "";

    if (textInput.value == ""){
        userInterface.style.height = "15rem";
        result.appendChild(errorMessageBlank);
        checkNonexistentError();
        checkDefinition();
    }

    else{
        definition();
    }

    textInput.value = "";
}

// upon search button press, check input
submitButton.addEventListener("click", checkInput);