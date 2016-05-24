
// var update = require('./../js/update.js').update;

function displayTime() {
    var time = moment().format('LT');
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});
