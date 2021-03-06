(function printTime() {
    const time = document.getElementById("time");
    const day = document.getElementById("day");
    const date = document.getElementById("date");

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THI', 'FRI', 'SAT'];

    let today = new Date();

    let _year = today.getFullYear();
    let _month = today.getMonth();
    let _date = today.getDate();
    let _day = today.getDay();
    let _hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    let _minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    let _seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
    let _time = _hours + ":" + _minutes + ":" + _seconds;

    let today_date = `${_month+1} ${_date}`

    time.innerText = _time;
    day.innerText = dayNames[_day];
    date.innerHTML = today_date;

    console.log(typeof _seconds)
    setTimeout(printTime, 1000)

})()