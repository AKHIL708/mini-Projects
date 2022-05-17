var timerMillisec ;
var timerSeconds ;
var timerMinutes ;
let countMilliSec = 0
let countSeconds = 0
let countMinutes = 0
function start(){
        // milliseconds

timerMillisec =setInterval(() => {
        let milliSeconds = document.getElementById("milliseconds").innerHTML = countMilliSec++
        if(milliSeconds >= 59){
            countMilliSec = 0
        }else{
            document.getElementById("milliseconds").innerHTML = countMilliSec;
        }
}, 10);
        // seconds 

timerSeconds =setInterval(() => {
        let Seconds = document.getElementById("seconds").innerHTML = countSeconds++
        if(Seconds >= 59){
            countSeconds = 0
        }else{
            document.getElementById("seconds").innerHTML = countSeconds;
        }
}, 1000);

       // minutes 

timerMinutes =setInterval(() => {
        let Minutes = document.getElementById("minutes").innerHTML = countMinutes++
        if(Minutes >= 59){
            countMinutes = 0
        }else{
            document.getElementById("minutes").innerHTML = countMinutes;
        }
}, 60000);

}

function stop(){
    clearInterval(timerMillisec)
    clearInterval(timerSeconds)
    clearInterval(timerMinutes)
}

function reset(){
   location.reload();
    
}