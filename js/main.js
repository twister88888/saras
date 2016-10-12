//Declaramos las variables que vamos a user
/*var lat = null;
var lng = null;
var map = null;
var geocoder = null;
var marker = null;
var lugar = null;
*/

$(document).ready(function(){
	var sonido_basico 		= $('#sonido_basico');
	var sonido_basico2 		= $('#sonido_basico2');
	var sonido_superior 	= $('#sonido_superior');
	var sonido_superior2 	= $('#sonido_superior2');
	var extras_dj 			= $('#extras_dj');
	var extras_grupo 		= $('#extras_grupo');
	var extras_civil 		= $('#extras_civil');
	var extras_ambiente 	= $('#extras_ambiente');
	var extras_ambiente2 	= $('#extras_ambiente2');
	var extras_banquete 	= $('#extras_banquete');
	var extras_banquete2 	= $('#extras_banquete2');
	var monitores 			= $('#monitores');
	var monitores2 			= $('#monitores2');
	var castillo 			= $('#castillo');
	var castillo2 			= $('#castillo2');
	var castillo3 			= $('#castillo3');
	var proyector 			= $('#proyector');
	var fotos 				= $('#fotos');
	var chroma 				= $('#chroma');
	var impresion 			= $('#impresion');
	var grabacion 			= $('#grabacion');
	var digital 			= $('#digital');
	var reportaje 			= $('#reportaje');
	var filmaciones 		= $('#filmaciones');
	var coches 				= $('#coches');
	var desplazamiento 		= $('#desplazamiento');
	var total = 0;



	$('#sonido_basico,#sonido_basico2').click(function (){
		if ($('#sonido_basico,#sonido_basico2').is(':checked')){
			$('#sonido_superior,#sonido_superior2').attr("checked", false);
		}
	});

	$('#sonido_superior,#sonido_superior2').click(function (){
		if ($('#sonido_superior,#sonido_superior2').is(':checked')){
			$('#sonido_basico,#sonido_basico2').attr("checked", false);
		}
	});


	$('#desplazamiento').click(function (){
		//Declaramos las variables que vamos a user
		lugar =  $('#place').val();

     	//obtenemos los valores en caso de tenerlos en un formulario ya guardado en la base de datos
     	lat = $('#lat').val();
     	lng = $('#long').val();

     	//Asignamos al evento click del boton la funcion codeAddress
     	codeAddress(lugar);
     	//Inicializamos la función de google maps una vez el DOM este cargado
    	initialize();

		lat = $('#lat').val();
     	lng = $('#long').val();
	});


	//$("#solicitar").click(function () {
	$("#solicitar").click(function () {
		var cont = 0;
		var descuento = 0;
		var oferta = 0;

		if (($(sonido_basico).is(':checked')) || ($(sonido_basico2).is(':checked')) || ($(sonido_superior).is(':checked')) || ($(sonido_superior2).is(':checked'))){
			//Sonidos
			if ($(sonido_basico).is(':checked')){
				total += parseInt(sonido_basico.val());
			}

			if ($(sonido_basico2).is(':checked')){
				total += parseInt(sonido_basico2.val());
			}

			if ($(sonido_superior).is(':checked')){
				total += parseInt(sonido_superior.val());
			}

			if ($(sonido_superior2).is(':checked')){
				total += parseInt(sonido_superior2.val());
			}

			//Extras
			//if ($(extras_dj).is(':checked')){
			if ((extras_dj.val()) != 0){
				total += parseInt(extras_dj.val());
			}

			if ($(extras_grupo).is(':checked')){
				total += parseInt(extras_grupo.val());
			}

			if ($(extras_civil).is(':checked')){
				total += parseInt(extras_civil.val());
			}

			if ($(proyector).is(':checked')){
				total += parseInt(proyector.val());
			}

			//Animación
			if ($(monitores).is(':checked')){
				total += parseInt(monitores.val());
				cont ++;
			}

			if ($(monitores2).is(':checked')){
				total += parseInt(monitores2.val());
				cont ++;
			}

			if ($(castillo).is(':checked')){
				total += parseInt(castillo.val());
				cont ++;
			}

			if ($(castillo2).is(':checked')){
				total += parseInt(castillo2.val());
				cont ++;
			}

			if ($(castillo3).is(':checked')){
				total += parseInt(castillo3.val());
				cont ++;
			}

			//Fotomatón
			if ($(fotos).is(':checked')){
				total += parseInt(fotos.val());
				cont ++;
			}

			if ($(chroma).is(':checked')){
				total += parseInt(chroma.val());
				cont ++;
			}

			if ($(impresion).is(':checked')){
				total += parseInt(impresion.val());
				cont ++;
			}

			if ($(grabacion).is(':checked')){
				total += parseInt(grabacion.val());
				cont ++;
			}

			if ($(digital).is(':checked')){
				total += parseInt(digital.val());
				cont ++;
			}


			//Otros
			if ($(reportaje).is(':checked')){
				total += parseInt(reportaje.val());
				cont ++;
			}

			if ($(filmaciones).is(':checked')){
				total += parseInt(filmaciones.val());
				cont ++;
			}

			/*if ($(filmaciones).is(':checked')){
			//calcular km
			}*/


			//-----------------------------OFERTAS-----------------------------//
			//Sin ofertas
			if (($(extras_ambiente).is(':checked')) && (cont == 0))
			{
				total += parseInt(extras_ambiente.val());
			}

			if (($(extras_ambiente2).is(':checked')) && (cont == 0))
			{
				total += parseInt(extras_ambiente2.val());
			}

			if (($(extras_banquete).is(':checked')) && (cont == 0))
			{
				total += parseInt(extras_banquete.val());
			}

			if (($(extras_banquete2).is(':checked')) && (cont == 0))
			{
				total += parseInt(extras_banquete2.val());
			}

			//Oferta 1 y 2
			//Verificamos que tena mínimo un pack de sonido básico y un servicio
			if (($(sonido_basico).is(':checked') || $(sonido_basico2).is(':checked') || $(sonido_superior).is(':checked') || $(sonido_superior2).is(':checked')) && (cont == 1))
			{
				$('#ofertas label').html('Si selecciona sonido ambiente aperitivo o banquete tendrá un 50% en uno de ellos.');
				//Verificamos que ha marcado los dos tipos de banquetes y hacemos un descuento sobre uno de ellos
				if (($(extras_ambiente).is(':checked')) && ($(extras_banquete).is(':checked')))
				{
					descuento = parseInt(extras_ambiente.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}
				else if (($(extras_ambiente).is(':checked')) && ($(extras_banquete2).is(':checked')))
				{
					descuento = parseInt(extras_ambiente.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}
				else if ($(extras_ambiente).is(':checked'))
				{
					descuento = parseInt(extras_ambiente.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}

				//Verificamos que ha marcado los dos tipos de banquetes y hacemos un descuento sobre uno de ellos
				if (($(extras_ambiente2).is(':checked')) && ($(extras_banquete).is(':checked')))
				{
					descuento = parseInt(extras_ambiente2.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');

				}
				else if (($(extras_ambiente2).is(':checked')) && ($(extras_banquete2).is(':checked')))
				{
					descuento = parseInt(extras_ambiente2.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}
				else if ($(extras_ambiente2).is(':checked'))
				{
					descuento = parseInt(extras_ambiente2.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}


				if ($(extras_banquete).is(':checked'))
				{
					if (($(extras_banquete).is(':checked')) && ($(extras_ambiente).is(':checked')))
					{
						total += parseInt(extras_banquete.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else if (($(extras_banquete).is(':checked')) && ($(extras_ambiente2).is(':checked')))
					{
						total += parseInt(extras_banquete.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else if ($(extras_banquete).is(':checked'))
					{
						descuento = parseInt(extras_ambiente.val())/2;
						total += descuento;
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
				}


				if ($(extras_banquete2).is(':checked'))
				{
					if (($(extras_banquete2).is(':checked')) && ($(extras_ambiente).is(':checked')))
					{
						total += parseInt(extras_banquete2.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else if (($(extras_banquete2).is(':checked')) && ($(extras_ambiente2).is(':checked')))
					{
						total += parseInt(extras_banquete2.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else if ($(extras_banquete2).is(':checked'))
					{
						descuento = parseInt(extras_banquete2.val())/2;
						total += descuento;
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
				}
			}

			//Oferta 3
			if (($(sonido_basico).is(':checked') || $(sonido_basico2).is(':checked') || $(sonido_superior).is(':checked') || $(sonido_superior2).is(':checked')) && (cont >= 2)){
				if ($(extras_ambiente).is(':checked')){
					descuento = extras_ambiente.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete y Aperitivo');
				}

				if ($(extras_ambiente2).is(':checked')){
					descuento = extras_ambiente2.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete y Aperitivo');

				}

				if ($(extras_banquete).is(':checked')){
					descuento = extras_banquete.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete y Aperitivo');
				}

				if ($(extras_banquete2).is(':checked')){
					descuento = extras_banquete2.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete y Aperitivo');
				}
			}

			// Enviamos el formulario
			$('#myform').submit(function(event){
				$('#res_total').attr('value',total);
				var dataString = $('#myform').serialize();

				$.ajax({
					type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
					url			: 'envio.php', // the url where we want to POST
					data 		: dataString, // our data object
					dataType 	: 'json', // what type of data do we expect back from the server
					encode 		: true
					//success: function(data) {
					//}
	           	})
	           	//$('#cantidad').html(' ' + total + ' €');
	           	event.preventDefault();
	           	alert("Le hemos enviado el presupuesto a su correo.");
	           	location.reload();
	           	//window.location.href = "http://www.jmprogramadorweb.es/saras_new?send=ok";
				//$('#ofertas label').html('Le hemos enviado el presupuesto a su correo.');
			});
		}
		else{
			alert("Debes elegir un pack de sonido");
			event.preventDefault();
		}
	});
});


/*function initMap(ciudad) {
  var sevilla = new google.maps.LatLng(37.377222, -5.986944);
  var buenos_aires = new google.maps.LatLng(-34.608333, -58.371944);
  var distancia = google.maps.geometry.spherical.computeDistanceBetween(sevilla, buenos_aires);
  //alert(distancia);
}*/
/*
function initialize() {
    geocoder = new google.maps.Geocoder();

    //Si hay valores creamos un objeto Latlng
    if(lat !='' && lng != '')
    {
		var latLng = new google.maps.LatLng(lat,lng);
	}
	else
	{
		//Si no creamos el objeto con una latitud cualquiera como la de Mar del Plata, Argentina por ej
		var latLng = new google.maps.LatLng(37.0625,-95.677068);
	}
		//Definimos algunas opciones del mapa a crear
		var myOptions = {
		center: latLng,//centro del mapa
		zoom: 15,//zoom del mapa
		mapTypeId: google.maps.MapTypeId.ROADMAP //tipo de mapa, carretera, híbrido,etc
	};

	//creamos el mapa con las opciones anteriores y le pasamos el elemento div
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	//creamos el marcador en el mapa
	marker = new google.maps.Marker({
		map: map,//el mapa creado en el paso anterior
		position: latLng,//objeto con latitud y longitud
		draggable: true //que el marcador se pueda arrastrar
	});

	//función que actualiza los input del formulario con las nuevas latitudes
	//Estos campos suelen ser hidden
	updatePosition(latLng);
}

//funcion que traduce la direccion en coordenadas
function codeAddress(address) {
    //obtengo la direccion del formulario
    //var address = document.getElementById("direccion").value;
    //hago la llamada al geodecoder
    geocoder.geocode( { 'address': address}, function(results, status) {
	    //si el estado de la llamado es OK
	    if (status == google.maps.GeocoderStatus.OK) {
	        //centro el mapa en las coordenadas obtenidas
	        map.setCenter(results[0].geometry.location);
	        //coloco el marcador en dichas coordenadas
	        marker.setPosition(results[0].geometry.location);
	        //actualizo el formulario
	        updatePosition(results[0].geometry.location);

	        //Añado un listener para cuando el markador se termine de arrastrar
	        //actualize el formulario con las nuevas coordenadas
	        google.maps.event.addListener(marker, 'dragend', function(){
	            updatePosition(marker.getPosition());
	        });
		} else
		{
			//si no es OK devuelvo error
			alert("No podemos encontrar la direcci&oacute;n, error: " + status);
	  	}
	});
}

//funcion que simplemente actualiza los campos del formulario
function updatePosition(latLng)
{
   jQuery('#lat').val(latLng.lat());
   jQuery('#long').val(latLng.lng());
}*/
