/*
Author: Franca CS - 2013
Sitio de presentaci�n Franca Creative Studio 
*/
$(document).ready(function(){
//tama�o inicial que lo tomo del tama�o de la ventana no del dispositivo
	$total = $(window).height() - 65;//65 es la altura del menu	
	$totalancho = $(window).width();
	/*-----------------------------------------GENERALES---*/
	$('#wrapper').css({
		'width':$(window).width(),
		'height':$(window).height()	
	});
	$('.container').css({
		'width':$(window).width(),
		'height':$total
	});
	$('nav').css({
		'width':$(window).width()
	});	

/*------------------------------------RESPONSIVE---------*/
	$(window).resize(function() {	
		//para que tome el ancho de la pantalla y se adapte ya sea vertical u horizontal. cuando se redimensiona
		$total = $(window).height()-65;//altura-el menu
		$totalancho =$(window).width();
		/*-----------------------------------------GENERALES---*/
		$('#wrapper').css({
			'width':$(window).width(),
			'height':$(window).height()	
		});
		$('.container').css({
			'width':$(window).width(),
			'height':$total	
		});
		$('nav').css({
			'width':$(window).width()
		});
	});//fin resize
/*---------------------------------------------*/
});//fin document ready

	



