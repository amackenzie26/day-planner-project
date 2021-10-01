var currentTime = moment();
const today = document.getElementById("currentDay");

function showTime() {
    setInterval(() => {
    }, 1000)
}
today.innerText = moment().format("dddd, MMMM Do, YYYY");

showTime();

function setTimeColor() {
    document.getElementById('time-block')
}












// // Saving user input
// function saveInput() {
//     localStorage.setItem('inputSave', 'value');
// }
// saveInput()

// function getValue() {
//     return localStorage.getItem('inputSave')
// }
// // console.log(getValue());

// document.getElementById('savebtn').addEventListener('click', saveInput);
// // console.log('save');

// function changeTimeBlockColor() {
//     document.col.style.background = red;
// }

