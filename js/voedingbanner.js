$(document).ready(function()	{

//addClasses met offset van % tov bovenkant pagina
	$(".first").waypoint(function()	{
		$(".first").addClass("animated fadeInLeft");
		}, 	{
				offset: "30%"
		});
	$(".second").waypoint(function()	{
		$(".second").addClass("animated fadeInRight");
		}, 	{
				offset: "90%"
		});
	/*
	$(".third").waypoint(function()	{
		$(".third").addClass("animated fadeInRight");
		}, 	{
				offset: "50%"
		});
	*/ 
});