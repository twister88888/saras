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


	$("#solicitar").click(function () {
		var cont = 0;
		var descuento = 0;

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
			if ($(extras_dj).is(':checked')){
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

			alert("TOtal antes de ofertas: " + total);


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
				if ($(extras_ambiente).is(':checked'))
				{
					//Verificamos que ha marcado los dos tipos de banquetes y hacemos un descuento sobre uno de ellos
					if (($(extras_ambiente).is(':checked')) && ($(extras_banquete).is(':checked')))
					{
						descuento = parseInt(extras_ambiente.val())/2;
						total += descuento;
						//total += parseInt(extras_banquete.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else if (($(extras_ambiente).is(':checked')) && ($(extras_banquete2).is(':checked')))
					{
						descuento = parseInt(extras_ambiente.val())/2;

						total += descuento;
						//total += parseInt(extras_banquete2.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else
					{
						descuento = parseInt(extras_ambiente.val())/2;
						total += descuento;
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');

					}
				}

				if ($(extras_ambiente2).is(':checked'))
				{
					//Verificamos que ha marcado los dos tipos de banquetes y hacemos un descuento sobre uno de ellos
					if (($(extras_ambiente2).is(':checked')) && ($(extras_banquete).is(':checked')))
					{
						descuento = parseInt(extras_ambiente2.val())/2;
						total += descuento;
						total += parseInt(extras_banquete.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');

					}
					else if (($(extras_ambiente2).is(':checked')) && ($(extras_banquete2).is(':checked')))
					{
						descuento = parseInt(extras_ambiente2.val())/2;
						total += descuento;
						total += parseInt(extras_banquete2.val());
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
					else
					{
						descuento = parseInt(extras_ambiente2.val())/2;
						total += descuento;
						$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
					}
				}

				alert("TOtal1 después de ofertas: " + total);
				if ($(extras_banquete).is(':checked')){
					descuento = parseInt(extras_banquete.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}

				if ($(extras_banquete2).is(':checked')){
					descuento = parseInt(extras_banquete2.val())/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 50% Sonido Banquete o Aperitivo');
				}
				alert("TOtal2 después de ofertas: " + total);
			}

			//Oferta 3
			if (($(sonido_basico).is(':checked') || $(sonido_basico2).is(':checked') || $(sonido_superior).is(':checked') || $(sonido_superior2).is(':checked')) && (cont >= 2)){
				if ($(extras_ambiente).is(':checked')){
					descuento = extras_ambiente.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete o Aperitivo');
				}

				if ($(extras_ambiente2).is(':checked')){
					descuento = extras_ambiente2.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete o Aperitivo');

				}

				if ($(extras_banquete).is(':checked')){
					descuento = extras_banquete.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete o Aperitivo');
				}

				if ($(extras_banquete2).is(':checked')){
					descuento = extras_banquete2.val()/2;
					total += descuento;
					$('#ofertas label').html('Oferta: 2x1 Sonido Banquete o Aperitivo');
				}
			}






			// Enviamos el formulario
			/*$('#myform').submit(function(event){
				$('#res_total').attr('value',total);
				var dataString = $('#myform').serialize();

				$.ajax({
					type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
					url			: 'envio.php', // the url where we want to POST
					data 		: dataString, // our data object
					dataType 	: 'json', // what type of data do we expect back from the server
					encode 		: true
					//success: function(data) {
					}//


	           	})
	           	$('#msg').html('Le hemos enviado el presupuesto a su correo');
	           	$('#cantidad').html(' ' + total + ' €');
	           	total = 0;
	           	event.preventDefault();
			});*/
		}
		else{
			alert("Debes elegir un pack de sonido");
			event.preventDefault();
		}
	});

});
