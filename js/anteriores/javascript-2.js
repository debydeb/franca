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
		 $('#grilla').css('margin-top', $margingrilla +'px');		 
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
		 $heightformap = $('#formap').height() - 50;
		 $('#map').css('height',$heightformap + 'px');
		 $('#cont').css('height',$heightformap + 'px');
		 $altmap = ((80 * $total)/100 )- 135;
		 $altlist = ((80 * $total)/100 )- 105;
		 $('#maparg').css('height',$altmap+'px');
		 $('#mapger').css('height',$altmap+'px');
		 if( $total < 500){
		 $('#listcont').css('height',$altlist+'px');
		 }else{
				$('#listcont').css('height','200px');
				}
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
	 //-----------------------------fin depende del alto y ancho	
		//----------------------------Contacto
		 $heightformap = $('#formap').height() - 50;
		 $('#map').css('height',$heightformap + 'px');
		 $('#cont').css('height',$heightformap + 'px');
		 $altmap = ((80 * $total)/100 )- 135;
		 $altlist = ((80 * $total)/100 )- 105;
		 $('#maparg').css('height',$altmap+'px');
		 $('#mapger').css('height',$altmap+'px');
		 if( $total < 500){
		 $('#listcont').css('height',$altlist+'px');
		 }else{
				$('#listcont').css('height','200px');
				}
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
					$('#display').fadeOut();
					$('#display').empty();
					$('#display').remove();	
					$($contenido2).fadeOut();
					$('#section').fadeOut();
					//$($contenido2).css({'display':'none'});	//oculto contenido de la seccion
					//$('#section').css({'display':'none'});
				}
		 }//fin if >0		
	 });//fin each
	 //muestro el div del link q hizo click si esta oculto
		if($($contenido).css('display') == 'none')//si el elemento que quiero mostrar no esta visible
			{
			//muestro el div section
			$('#section').fadeIn('slow',function(){//primero "muestro" el div y su contenido y despues lo subo
				$('#section').css({'display':'block'});
				$($contenido).fadeIn('slow');
				$($contenido).css({'display':'block'});	
				//$('#section').animate({'top':'0px'},400);	
			});

	}//fin if  display none
	
	$($tag).addClass('this');
	
	//oculto el div del link q hizo click si esta visible
		if($($contenido).css('display') == 'block')//si el elemento que quiero mostrar no esta visible
			{
			$('#display').fadeOut();
			$('#display').empty();
				$('#display').remove();
				$('#section').fadeOut();
				$($contenido).fadeOut();
				$($tag).removeClass('this');
	}//fin if  display block

	$(document).keyup(function(e){
		if(e.keyCode == 27) // esc
			{  
				$($tag).removeClass('this');
				$('#display').fadeOut();
				$('#display').empty();
				$('#display').remove();
				$('#section').fadeOut();
				$($contenido).fadeOut();
			}  
	});	
		
});//fin click en nav li	
/*--------------------------------------------*/
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
/*---------------------------------------------*/
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
		$('#map').fadeIn();

		$('#cont').css('display','none');
		$('#listcont').css('display','none');
		$('#map').css('display','block');
	});
	
	$('#arg').click(function(){
		$('#maparg').css('display','block');
		$('#mapger').fadeOut(function(){
			$('#mapger').css('display','none');
		});
	});
	
	$('#ger').click(function(){
		$('#mapger').fadeIn();
		$('#maparg').fadeOut(function(){
			$('#maparg').css('display','none');
		});
		
	});
	
	
	//fin submenu contacto -form - phones - map	
/*---------------------------------------------*/	
$('.show img').click(function(){
	$('#display').empty();
	$('#display').remove();	
	$thisIdimg = $(this).attr('id');//llamo al id del elemento en el que se hizo click
	$split1 = $thisIdimg.charAt($thisIdimg.length-3);//tomo el  caracter que es numerico
	$split2 = $thisIdimg.charAt($thisIdimg.length-1);//tomo el  caracter que es numerico
	$idImg = parseInt($split2);
	if($split1 == 'w')
		{
		 $arrImg = [" ","img/mockups/mockup-1.png", "img/mockups/mockup-2.png", "img/mockups/mockup-3.png", "img/mockups/mockup-4.png", "img/mockups/mockup-5.png", "img/mockups/mockup-6.png", "img/mockups/mockup-7.png", "img/mockups/mockup-8.png"];//array con las img
		}
	if($split1 == 'g')
		{
		 $arrImg = [" ","img/graf/graf-1.png", "img/graf/graf-2.jpg", "img/graf/graf-3.jpg", "img/graf/graf-4.jpg", "img/graf/graf-5.jpg", "img/graf/graf-6.jpg"];//array con las img
		}
	if($split1 == 'p')
		{
		 $arrImg = [" ","img/ph/ph-1.jpg", "img/ph/ph-2.jpg", "img/ph/ph-3.jpg", "img/ph/ph-4.jpg", "img/ph/ph-5.jpg", "img/ph/ph-6.jpg", "img/ph/ph-7.jpg", "img/ph/ph-8.jpg", "img/ph/ph-9.jpg", "img/ph/ph-10.jpg", "img/ph/ph-11.jpg", "img/ph/ph-12.jpg"];//array con las img
		}	
	$mockup = '<img id="mock" src="'+ $arrImg[$idImg] +'"/>';
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
			$mockheight = ($total * 70)/100;
			$mockmargin = ($total - $mockheight)/2;
			$('#mock').css('height',$mockheight + 'px');
			$('#mock').css('margin-top',$mockmargin + 'px');
			$('#mock').css('width','auto');
		} //fin if

		if ($total > $width) 
		{
		  //----------------------------Mockup
			$mockw = ($width * 70)/100;
			$calculateheight = (595 * $mockw)/842;//size mockup
			$mockmargin2 = ($total - $calculateheight)/2;			
			$('#mock').css('height',$calculateheight + 'px');
			$('#mock').css('width',$mockw + 'px');
			$('#mock').css('margin-top',$mockmargin2 + 'px');			
		} //fin if
		
		$(window).resize(function(){	
		$width = $(window).width();
		$('#display').css('height',$total - 5 + 'px');
		$('#display').css('width',$width + 'px');
		
		if ($total < $width) 
		{
		  //----------------------------Mockup
			$mockheight = ($total * 70)/100;
			$mockmargin = ($total - $mockheight)/2;
			$('#mock').css('height',$mockheight + 'px');
			$('#mock').css('margin-top',$mockmargin + 'px');
			$('#mock').css('width','auto');
		} //fin if
		
		if ($total > $width) 
		{
		  //----------------------------Mockup
			$mockw = ($width * 70)/100;
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
			$number = $idImg - 1;
			if($number == 0)
				{
				 $number = ($($arrImg).length) - 1;
				}				
			$oldSrc = $arrImg[$idImg];
			$newSrc = $arrImg[$number];
			$('img[src="' + $oldSrc + '"]').attr('src', $newSrc);
			$idImg = $number;			
		});//fin click pre
		
		$('#nex').click(function(){
			$number = $idImg + 1;
			if($number == $($arrImg).length)
				{
				 $number = 1;
				}				
			$oldSrc = $arrImg[$idImg];
			$newSrc = $arrImg[$number];
			$('img[src="' + $oldSrc + '"]').attr('src', $newSrc);			
			$idImg = $number;
		});//fin click nex	
});//fin click .show img

/*---------------------------------------------*/
});//fin document ready

	

