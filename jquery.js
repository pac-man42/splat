$(function() {

	  	$('#search').focus(function() {
	  	$('#search').animate({width: "220"}, 200);
	  			});

	  	$('#search').blur(function() {
	  	$('#search').animate({width: "127"}, 200);
	  			});
	  	});
$('#slider').cycle({
	fx:'scrollHorz',
	timeout: 0,
	speed:'slow',
	prev:'#left',
	next:'#right'
});
