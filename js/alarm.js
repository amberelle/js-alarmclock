exports.timecontinuum = function(alarmTime) {

  setInterval(function() {
    var currentTime = moment().format('HH:mm');
    if(currentTime === alarmTime) {
      alert("times up!");
    }
  }, 1000);

};
