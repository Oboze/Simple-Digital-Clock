setInterval(function(){
    const currentTime=new Date();
    let hours=currentTime.getHours();
    let minutes=currentTime.getMinutes();
    let seconds=currentTime.getSeconds();

    let period="AM";
    if (hours>=12){
        period="PM";
    }
    if (hours>12){
        hours=hours-12;
    }
    if (seconds<10){
        seconds="0"+seconds;
    }
    if (minutes<10){
        minutes="0"+minutes;
    }
    
    const displayTime=`${hours}:${minutes}:${seconds}  ${period}`;
    const clock=document.getElementById('clock-display-area');
    clock.textContent=displayTime;

},1000);