/*
Author: Franca CS - 2013
Sitio de presentación Franca Creative Studio 
*/
$(document).ready(function(){
//tamaño inicial que lo tomo del tamaño de la ventana no del dispositivo
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
	/*-----------------------------------------SECCIONES---*/	
		//----------------------------Portfolio
		 $grillancho = (90 * $totalancho)/100;
		 $('#grilla').css('width', $grillancho +'px');
		 
		 $grilla = (80 * $total)/100;
		  $margingrilla = ($total - $grilla)/2;//margen 
		 $('#grilla').css('height', $grilla +'px');
		 $('#grilla').css('margin-top', ($margingrilla - 35) +'px');
		 
		 $portimg = $('#grilla').width();
		 $show = $grilla - 52;
		 $('.show').css('height',$show+'px');
		 $('.show').css('width',$portimg+'px');
		 
//-----------------------------depende del alto y ancho
	if ($total < $totalancho) 
		{
		 //----------------------------Contacto
	     $secont = (80 * $total)/100;//80% de altura
	     $margencont = (10 * $total)/100;
		 
	     $('#formap').css('height',$secont + 'px');
		 $('#formap').css('margin-top',$margencont + 'px');
		 $('#text').css('height',$secont + 'px');
		 $('#text').css('margin-top',$margencont + 'px');
		} //fin if
	//-----------------------------
	if ($total > $totalancho) 
		{
		 //----------------------------Contacto
	     $secont = (50 * $total)/100;//50% de altura
	     $margencont = (25 * $total)/100;
	     $('#formap').css('height',$secont + 'px');
		 $('#formap').css('margin-top',$margencont + 'px');
		 $('#text').css('height',$secont + 'px');
		 $('#text').css('margin-top',$margencont + 'px');
		} //fin if
	//-----------------------------
	//----------------------------Contacto
		 $marginlist = (($('#formap').height() - 40) - 90)/2;
		 $('#listcont').css('margin-top',$marginlist + 'px');
		 $heightformap = $('#formap').height() - 50;
		 $('#map').css('height',$heightformap + 'px');
		 $('#cont').css('height',$heightformap + 'px');
		//----------------------------Social
		$margenfb =(15 * $total)/100;
		$('#fb').css({
			'margin-top':$margenfb + "px"
		});
		$margenfb2 =((50 * $total)/100)-50;
		$('#fb2').css({
			'margin-top':$margenfb2 + "px"
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
		/*-----------------------------------------SECCIONES---*/		
		//----------------------------Portfolio
		  $grillancho = (90 * $totalancho)/100;
		 $('#grilla').css('width', $grillancho +'px');
		 
		 $grilla = (80 * $total)/100;
		 $margingrilla = ($total - $grilla)/2;//margen 
		 $('#grilla').css('height', $grilla +'px');
		 $('#grilla').css('margin-top', ($margingrilla - 35) +'px');
		 
		 $portimg = $('#grilla').width();

		 $show = $grilla - 52;
		 $('.show').css('height',$show+'px');
		 $('.show').css('width',$portimg+'px');
	     
//-----------------------------depende del alto y ancho				
	if ($total < $totalancho) 
		{
		 //----------------------------Contacto
	     $secont = (80 * $total)/100;//80% de altura
	     $margencont = (10 * $total)/100;
	     $('#formap').css('height',$secont + 'px');
		 $('#formap').css('margin-top',$margencont + 'px');
		 $('#text').css('height',$secont + 'px');
		 $('#text').css('margin-top',$margencont + 'px');
		} //fin if
	//-----------------------------
	if ($total > $totalancho) 
		{
		 //----------------------------Contacto
	     $secont = (50 * $total)/100;//50% de altura
	     $margencont = (25 * $total)/100;
	     $('#formap').css('height',$secont + 'px');
		 $('#formap').css('margin-top',$margencont + 'px');
		 $('#text').css('height',$secont + 'px');
		 $('#text').css('margin-top',$margencont + 'px');
		} //fin if
	 //-----------------------------
		//----------------------------Contacto
		 $marginlist = (($('#formap').height() - 40) - 90)/2;
		 $('#listcont').css('margin-top',$marginlist + 'px');
		 $heightformap = $('#formap').height() - 50;
		 $('#map').css('height',$heightformap + 'px');
		 $('#cont').css('height',$heightformap + 'px');
		//----------------------------Social
		$margenfb =(15 * $total)/100;
		$('#fb').css({
			'margin-top':$margenfb + "px"
		});
		$margenfb2 =((50 * $total)/100)-50;
			$('#fb2').css({
				'margin-top':$margenfb2 + "px"
			});
	});//fin resize
/*-------------------------------------------FUNCION CERRAR/OCULTAR DIVS-----*/
$('nav li').click(function(){	
	$currentId = $(this).attr('id');//llamo al id del elemento en el que se hizo click
	$tag = "#"+$currentId;
	$part = $currentId.charAt($currentId.length-1);//tomo el ultimo caracter que es numerico
	$id = parseInt($part);//lo paso de string a numero
	$arr = [" ","#serv", "#port", "#contacto", "#social"];//array con las secciones
	$contenido = $arr[$id];//guardo el elemento del array correspondiente en una variable 

	/*controlo si hay otro div desplegado al momento y lo oculto*/
	$.each($arr, function(indice){//recorro el array
		if(indice > 0 && indice != $id)//si es diferente del id del elemento en el que hice click
		 {
			 $num = indice;	
			 $contenido2 = $arr[$num];	
			 $link = '#link-' + $num;	
		     if($($contenido2).css('display') == 'block')//me fijo si esta desplegado si es asi lo oculto antes de mostrar el nuevo elemento
				{	
					$($link).removeClass('this');
					$('#display').empty();
					$('#display').remove();	
					$($contenido2).css({'display':'none'});	//oculto contenido de la seccion
					$('#section').animate({'top':'100%'},200,function(){//primero lo llevo hasta abajo y despues lo comprimo
					$('#section').css({'display':'none'});
					});	
				}
		 }//fin if >0		
	 });//fin each

	 //muestro el div del link q hizo click si esta oculto
		if($($contenido).css('display') == 'none')//si el elemento que quiero mostrar no esta visible
			{
				
			//muestro el div section
			$('#section').slideToggle(function(){//primero "muestro" el div y su contenido y despues lo subo
				$('#section').css({'display':'block'});
				$($contenido).css({'display':'block'});	
				$('#section').animate({'top':'0px'},400);	
			});

	}//fin if  display none

	$($tag).addClass('this');

	//submenu portfolio -web - dg - ph
	$('#s1').click(function(){
		$('#web').fadeIn();
		$('#dg').fadeOut();
		$('#ph').fadeOut();
		$('#web').css('display','block');
		$('#dg').css('display','none');
		$('#ph').css('display','none');		
	});
	
	$('#s2').click(function(){
		$('#web').fadeOut();
		$('#dg').fadeIn();
		$('#ph').fadeOut();
		$('#web').css('display','none');
		$('#dg').css('display','block');
		$('#ph').css('display','none');
	});
	
	$('#s3').click(function(){
		$('#web').fadeOut();
		$('#dg').fadeOut();
		$('#ph').fadeIn();
		$('#web').css('display','none');
		$('#dg').css('display','none');
		$('#ph').css('display','block');
	});
	//fin portfolio -web - dg - ph
	
	//miniaturas web mockup
	$('#web img').click(function(){
		$('#display').empty();
		$('#display').remove();	
		$thisId = $(this).attr('src');//llamo al id del elemento en el que se hizo click
		$split = $thisId.charAt($thisId.length-5);//tomo el  caracter que es numerico

		$mockup = '<img id="mock" src="img/mockups/mockup-'+ $split +'.png"/>';
		$buttons ='<br/><img class="control" src="img/prev.png" id="pre"/><img class="control" src="img/close-icon.png" id="clo"/><img class="control" id="nex" src="img/next.png"/>';
		$div = '<div id="display">'+$mockup+$buttons+'</div>';
		$('#port').prepend($div);
		//----------------css para los mockup	
		$width = $(window).width();
		$('#display').css('height',$total - 5 + 'px');
		$('#display').css('width',$width + 'px');
		if ($total < $width) 
		{
		  //----------------------------Mockup
			$mockheight = ($total * 60)/100;
			$mockmargin = ($total - $mockheight)/2;
			$('#mock').css('height',$mockheight + 'px');
			$('#mock').css('margin-top',$mockmargin + 'px');
			$('#mock').css('width','auto');
		} //fin if
		
		if ($total > $width) 
		{
		  //----------------------------Mockup
			$mockw = ($width * 60)/100;
			$calculateheight = (595 * $mockw)/842;//size mockup
			$mockmargin2 = ($total - $calculateheight)/2;
			
			$('#mock').css('height',$calculateheight + 'px');
			$('#mock').css('width',$mockw + 'px');
			$('#mock').css('margin-top',$mockmargin2 + 'px');
			
		} //fin if
		
		$(window).resize(function() {	
		$width = $(window).width();
		$('#display').css('height',$total - 5 + 'px');
		$('#display').css('width',$width + 'px');
		if ($total < $width) 
		{
		  //----------------------------Mockup
			$mockheight = ($total * 60)/100;
			$mockmargin = ($total - $mockheight)/2;
			$('#mock').css('height',$mockheight + 'px');
			$('#mock').css('margin-top',$mockmargin + 'px');
			$('#mock').css('width','auto');
		} //fin if
		
		if ($total > $width) 
		{
		  //----------------------------Mockup
			$mockw = ($width * 60)/100;
			$calculateheight = (595 * $mockw)/842;//size mockup
			$mockmargin2 = ($total - $calculateheight)/2;
			
			$('#mock').css('height',$calculateheight + 'px');
			$('#mock').css('width',$mockw + 'px');
			$('#mock').css('margin-top',$mockmargin2 + 'px');
			
		} //fin if
		
	});//fin resize		
	//----------------fin css para los mockup		


		$('#clo').click(function(){
			$('#display').remove();
		});//fin click clo
		
		$('#pre').click(function(){
			$number = parseInt($split) - 1;
			if($number == 0)
				{
				 $number = 8;
				}
			$oldSrc = 'img/mockups/mockup-'+ $split +'.png';
			$newSrc = 'img/mockups/mockup-'+ $number +'.png';
			$('img[src="' + $oldSrc + '"]').attr('src', $newSrc);
			$split = $number;
		});//fin click pre
		
		$('#nex').click(function(){
			$number = parseInt($split) + 1;
			if($number == 9)
				{
				 $number = 1;
				}
			$oldSrc = 'img/mockups/mockup-'+ $split +'.png';
			$newSrc = 'img/mockups/mockup-'+ $number +'.png';
			$('img[src="' + $oldSrc + '"]').attr('src', $newSrc);
			$split = $number;
		});//fin click nex

	});//fin miniaturas web

	
	
	
	
	
	
	
	
	
	
	
	
	
	//miniaturas dg 
	$('#dg img').click(function(){
		$('#display').empty();
		$('#display').remove();	
		$thisId = $(this).attr('src');//llamo al id del elemento en el que se hizo click
		$split = $thisId.charAt($thisId.length-5);//tomo el  caracter que es numerico

		$mockup = '<img id="mock" src="img/graf/graf-'+ $split +'.png"/>';
		$buttons ='<br/><img class="control" src="img/prev.png" id="pre"/><img class="control" src="img/close-icon.png" id="clo"/><img class="control" id="nex" src="img/next.png"/>';
		$div = '<div id="display">'+$mockup+$buttons+'</div>';
		$('#port').prepend($div);
		//----------------css para los dg mockup	
		$width = $(window).width();
		$('#display').css('height',$total - 5 + 'px');
		$('#display').css('width',$width + 'px');
		if ($total < $width) 
		{
		  //----------------------------Mockup
			$mockheight = ($total * 60)/100;
			$mockmargin = ($total - $mockheight)/2;
			$('#mock').css('height',$mockheight + 'px');
			$('#mock').css('margin-top',$mockmargin + 'px');
			$('#mock').css('width','auto');
		} //fin if
		
		if ($total > $width) 
		{
		  //----------------------------Mockup
			$mockw = ($width * 60)/100;
			$calculateheight = (595 * $mockw)/842;//size mockup
			$mockmargin2 = ($total - $calculateheight)/2;
			
			$('#mock').css('height',$calculateheight + 'px');
			$('#mock').css('width',$mockw + 'px');
			$('#mock').css('margin-top',$mockmargin2 + 'px');
			
		} //fin if
		
		$(window).resize(function() {	
		$width = $(window).width();
		$('#display').css('height',$total - 5 + 'px');
		$('#display').css('width',$width + 'px');
		if ($total < $width) 
		{
		  //----------------------------Mockup
			$mockheight = ($total * 60)/100;
			$mockmargin = ($total - $mockheight)/2;
			$('#mock').css('height',$mockheight + 'px');
			$('#mock').css('margin-top',$mockmargin + 'px');
			$('#mock').css('width','auto');
		} //fin if
		
		if ($total > $width) 
		{
		  //----------------------------Mockup
			$mockw = ($width * 60)/100;
			$calculateheight = (595 * $mockw)/842;//size mockup
			$mockmargin2 = ($total - $calculateheight)/2;
			
			$('#mock').css('height',$calculateheight + 'px');
			$('#mock').css('width',$mockw + 'px');
			$('#mock').css('margin-top',$mockmargin2 + 'px');
			
		} //fin if
		
	});//fin resize		
	//----------------fin css para los dg mockup		


		$('#clo').click(function(){
			$('#display').remove();
		});//fin click clo
		
		$('#pre').click(function(){
			$number = parseInt($split) - 1;
			if($number == 0)
				{
				 $number = 6;
				}
			$oldSrc = 'img/graf/graf-'+ $split +'.png';
			$newSrc = 'img/graf/graf-'+ $number +'.png';
			$('img[src="' + $oldSrc + '"]').attr('src', $newSrc);
			$split = $number;
		});//fin click pre
		
		$('#nex').click(function(){
			$number = parseInt($split) + 1;
			if($number == 7)
				{
				 $number = 1;
				}
			$oldSrc = 'img/graf/graf-'+ $split +'.png';
			$newSrc = 'img/graf/graf-'+ $number +'.png';
			$('img[src="' + $oldSrc + '"]').attr('src', $newSrc);
			$split = $number;
		});//fin click nex

	});//fin miniaturas dg
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//submenu contacto -form - phones - map
	$('#mail').click(function(){
		$('#cont').fadeIn();
		$('#listcont').fadeOut();
		$('#map').fadeOut();
		$('#cont').css('display','block');
		$('#listcont').css('display','none');
		$('#map').css('display','none');		
	});
	
	$('#phone').click(function(){
		$('#cont').fadeOut();
		$('#listcont').fadeIn();
		$('#map').fadeOut();
		$('#cont').css('display','none');
		$('#listcont').css('display','block');
		$('#map').css('display','none');
	});
	
	$('#map1').click(function(){
		$('#cont').fadeOut();
		$('#listcont').fadeOut();
		$('#map').fadeIn();
		$('#cont').css('display','none');
		$('#listcont').css('display','none');
		$('#map').css('display','block');
	});
	//fin submenu contacto -form - phones - map
	
	$('.close1').click(function(){//cuando hace click en el icono de cerrar
				//oculto la seccion y el contenido
				$($tag).removeClass('this');
				$('#display').empty();
				$('#display').remove();
				$('#section').animate({'top':'100%'},200,function(){//primero lo llevo hasta abajo y despues lo oculto
						$('#section').css({'display':'none'});
					    $($contenido).css({'display':'none'});
						
				});		
		});//fin click en el icono de cerrar  
	$(document).keyup(function(e){
		if(e.keyCode == 27) // esc
			{  
				$($tag).removeClass('this');
				$('#display').empty();
				$('#display').remove();
				$('#section').animate({'top':'100%'},200,function(){//primero lo llevo hasta abajo y despues lo oculto
						$('#section').css({'display':'none'});
					    $($contenido).css({'display':'none'});
				});	
			}  
	});	
		
		
		
		
		
});//fin click en nav li	
/*---------------------------------------------*/
});//fin document ready

	



