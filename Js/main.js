/* Start ScrollToTop */
let toTop = document.querySelector(".scrolling");
window.onscroll = function () {
    if (window.scrollY >= 180) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
};
toTop.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};
/* End ScrollToTop */
/* Start countDown */
let countDownDate = new Date("Feb 23, 2023 18:0:0").getTime();
// console.log(countDownDate);
let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    // Get Days Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    // Get Hours Units 
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // Get Min Units 
    let min = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    // Get Sec Units 
    let sec = Math.floor(dateDiff % (1000 * 60) / (1000));
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".min").innerHTML = min < 10 ? `0${min}` : min;
    document.querySelector(".sec").innerHTML = sec < 10 ? `0${sec}` : sec;
    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000)
/* End countDown */