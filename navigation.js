$(window).on("scroll", function()	{
	if($(window).scrollTop() )	{
		$("nav").addClass("scrolling");
	}

	else	{
		$("nav").removeClass("scrolling");
	}
} )