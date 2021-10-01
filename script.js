var currentTime = moment();
const today = document.getElementById("currentDay");

function showTime() {
    setInterval(() => {
    }, 1000)
}
today.innerText = moment().format("dddd, MMMM Do, YYYY");

showTime();

// let block = document.getAttribute(9, 10, 11, 12, 1, 2, 3, 4, 5)
var presenttime = moment();
var futuretime = moment().add(1, 'hours');
var pasttime = moment().subtract(1, 'hours');

function setTimeColor() {
    // document.getElementById('time-block') = moment()
    if (presenttime) {
        document.getElementById('time-block').style.backgroundColor = '#ff6961'; }
    else if (futuretime) {
        document.getElementById('time-block').style.backgroundColor = '#77dd77'; }
    else if (pasttime) {
        document.getElementById('time-block').style.backgroundColor = '#d3d3d3'; 
    }
    console.log('changecolor');
}

var value = $(this).siblings('.time-block').val()
var key = $(this).parent().attr('id')

$('saveBtn').on('click', function() {
localStorage.setItem(key, value)

})

$("#9 .time-block").val(localStorage.getItem('9'))
$("#10 .time-block").val(localStorage.getItem('10'))
$("#11 .time-block").val(localStorage.getItem('11'))
$("#12 .time-block").val(localStorage.getItem('12'))
$("#1 .time-block").val(localStorage.getItem('1'))
$("#2 .time-block").val(localStorage.getItem('2'))
$("#3 .time-block").val(localStorage.getItem('3'))
$("#4 .time-block").val(localStorage.getItem('5'))
$("#5 .time-block").val(localStorage.getItem('5'))





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

