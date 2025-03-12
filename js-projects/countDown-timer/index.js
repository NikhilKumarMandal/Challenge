const startButton = document.getElementById('startButton');
const timeInputValue = document.getElementById('timeInputValue');
const countDownDisplay = document.getElementById('countDownDisplay');

function timer() {
    let inputValue = parseInt(timeInputValue.value);
    
    if (isNaN(inputValue)) {
        countDownDisplay.innerHTML = "Please enter a valid number!"
        return
    };

    if (inputValue <= 0) {
        countDownDisplay.innerHTML = "Please enter number greater then 0"
        return
    };

    function countDownFunction() {
        inputValue--
        countDownDisplay.innerHTML = `Time remainig ${inputValue} sec`
        if (inputValue < 0) {
            clearInterval(interval)
            countDownDisplay.innerHTML = `Time up ⏱️`
        }
    }

    countDownFunction()
    const interval = setInterval(countDownFunction,1 * 1000)
}

startButton.addEventListener("click",timer)