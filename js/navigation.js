$(window).on("scroll", function()	{

// indien er wordt gescrolled op de pagina
//indien er gescrolled is voeg volgende Class toe, zoniet haal Class weg
	if($(window).scrollTop() )	{
		$("nav").addClass("scrolling");
	}

	else	{
		$("nav").removeClass("scrolling");
	}
} )