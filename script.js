var currentTime = moment();
const today = document.getElementById("currentDay");

function showTime() {
    setInterval(() => {
    }, 1000)
}
today.innerText = moment().format("dddd, MMMM Do, YYYY");

showTime();



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

// function applyClass() {
//     var d = new Date();
//     var n = d.getHours();
//     if (n > 9)
// $('timeofday').addClass('future');
//     else
// $('timeofday').addClass('present');
//     else
// $('timeofday').addClass('past');
// }
// col.on = applyClass