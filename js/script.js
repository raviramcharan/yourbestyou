function calculateCalories()	{

// variabelen
	var x = document.getElementById("myNumber").value;	
	var vraag2 = document.calories.vraag2.value
	var caloriecounter;
	

//als opgegeven waarde afvallen is zie formule, vermeningvuldig met ingevoerde gewicht
	if (vraag2 == "Afvallen") {
		caloriecounter = (x * 2.2 * 13)
}
//als opgegeven waarde onderhouden is zie formule, vermeningvuldig met ingevoerde gewicht
	if (vraag2 == "Onderhouden") {
		caloriecounter = (x * 2.2 * 15)
}
//als opgegeven waarde aankomen is zie formule, vermeningvuldig met ingevoerde gewicht 	
	if (vraag2 == "Aankomen") {
		caloriecounter = (x * 2.2 * 17)
	}
	
// zoek Id op in html en voeg volgende html toe
	document.getElementById("caloriesneeded").innerHTML = "Je hebt " + caloriecounter + " kCal nodig.";
	
	}

	