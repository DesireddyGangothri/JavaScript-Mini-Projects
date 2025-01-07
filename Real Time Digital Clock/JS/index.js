let section=document.querySelector('section');

// Creating a function and calling it in every seconds
setInterval(()=>{
    let date=new Date();
    hour=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();

    let d;
    d = hour<12?"AM":"PM";
    hour = hour>12?hour-12:hour;
    hour = hour==0?hour=12:hour;

    // Adding "0" before all the single digit value if they are less than 10 (like 09,08,...)
    hour = hour<10 ? "0"+hour : hour;
    min = min<10 ? "0"+min : min;
    sec = sec<10 ? "0"+sec : sec;

    console.log(hour,min,sec);

    document.querySelector(".hour_num").innerText=hour;
    document.querySelector(".min_num").innerText=min;
    document.querySelector(".sec_num").innerText=sec;
    document.querySelector(".am_pm").innerText=d;


},1000)