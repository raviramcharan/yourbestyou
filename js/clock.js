setInterval(displayclock, 1);

// variabelen, haal uur, minuten en seconds op
function displayclock()	{
	var time = new Date();
	var hrs = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

// als het aantal uren onder de 10 ligt, voeg een 0 toe. zodat er 2 cijfers in de klok blijven
if (hrs < 10)	{
	hrs = "0" + hrs
}

// als het aantal minuten onder de 10 ligt, voeg een 0 toe. zodat er 2 cijfers in de klok blijven
if (min < 10) {
	min = "0" + min
}

// als het aantal seconden onder de 10 ligt, voeg een 0 toe. zodat er 2 cijfers in de klok blijven
if (sec < 10) {
	sec = "0" + sec
}

// vind Id clo en voeg onderstaande html toe
	document.getElementById("clo").innerHTML = hrs + ":" + min + ":" + sec;
}