var timecontinuum = require('./../js/alarm.js').timecontinuum;
var alarmMoment = [];

$(document).ready(function() {
  $('#alarmClock').submit(function(event) {
    event.preventDefault();

    var alarm = $('#addAlarm').val();
    console.log (alarm);
    timecontinuum(alarm);
    $('#allAlarms').append('<li>' + moment(alarm, 'HH:mm').format('LT') + '</li>');
    $('#addAlarm').val('');
    alarmMoment.push(moment(alarm, 'HH:mm'));
  });
});
