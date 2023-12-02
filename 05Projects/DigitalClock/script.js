const Setclock =  document.querySelector('#Setclock')

setInterval(function () {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    Setclock.innerHTML = date.toLocaleTimeString();
},1000);