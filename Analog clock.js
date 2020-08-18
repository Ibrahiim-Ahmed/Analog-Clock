const deg = 6;
const hr = document.querySelector('.hr-hand');
const min = document.querySelector('.min-hand');
const sec = document.querySelector('.sec-hand');
setInterval(() => {
	let date = new Date();
	// let n = date.getTimezoneOffset()
	// date.toString()
    // let ate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	let hour = date.getHours() * 30;
	let minutes = date.getMinutes() * deg;
	let seconds = date.getSeconds() * deg;
	hr.style.transform = `rotateZ(${hour+(minutes/12)} deg)`;
	min.style.transform = `rotateZ(${minutes}deg)`;
	sec.style.transform = `rotateZ(${seconds}deg)`;
})
