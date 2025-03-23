const inputBox = document.getElementById('input-box');

let isInvalidExpression = false;


function appendToDisplay(t) {
    if (t == 'all-clear') return inputBox.value = "";
    if (isInvalidExpression) {
        isInvalidExpression = false;
        return inputBox.value = t
    }

    inputBox.value += t
}

function getResult() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (e) {
        isInvalidExpression = true;
        inputBox.value = "Invalid Expression.";
    }
}
