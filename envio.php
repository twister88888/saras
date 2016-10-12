
<?php
	require_once ('class/phpmailer.class.php');
/*	require('class/fpdf.php');

	//create a FPDF object
	$pdf=new FPDF();

	//set document properties
	$pdf->SetAuthor('Juanma Ortiz');
	$pdf->SetTitle('Presupuesto Sara´s Audiovisuales');

	//set font for the entire document
	$pdf->SetFont('Helvetica','B',20);
	$pdf->SetTextColor(50,60,100);

	//set up a page
	$pdf->AddPage('P');
	$pdf->SetDisplayMode(real,'default');

	//insert an image and make it a link
	$pdf->Image('img/logo.jpg',10,20,33,0,' ','http://www.sarasaudiovisuales.com/');

	//display the title with a border around it
	$pdf->SetXY(50,20);
	$pdf->SetDrawColor(50,60,100);
	$pdf->Cell(100,10,'FPDF Tutorial',1,0,'C',0);

	//Set x and y position for the main text, reduce font size and write content
	$pdf->SetXY (10,50);
	$pdf->SetFontSize(10);
	$pdf->Write(5,'Congratulations! You have generated a PDF.');

	//Output the document
	$pdf->Output('presupuesto.pdf','I');
*/



	$mail = new PHPMailer();

	$mail->From     = "info@sarasaudiovisuales.com";
	$mail->FromName = "Sara´s Audiovisuales";

	$mail->AddAddress ("info@sarasaudiovisuales.com");
	$mail->AddAddress ($_POST['email']);

	$mail->IsHTML(true);
	$date = new DateTime($_POST['date']);


	$mail->Subject  =  "Presupuesto Sara´s Audiovisuales";
	$mail->Body     =  '<table align="left" width="800">
							<tr><td><strong style="color:#DD0A1B;"><u>DATOS DE CONTACTO</u></strong><br />
							<tr><td><strong>Nombre:  </strong>'.$_POST['name'].' </td></tr>
							<tr><td><strong>Teléfono: </strong>'.$_POST['phone'].'</td></tr>
							<tr><td><strong>Email: </strong>'.$_POST['email'].'</td></tr>
							<tr><td><strong>Fecha: </strong>'.$date->format('d/m/Y').'</td></tr>
							<tr><td><strong>Lugar: </strong>'.$_POST['place'].'</td></tr>
							<tr><td><strong>Observaciones: </strong>'.$_POST['observations'].'</td></tr>
							<tr><td height="20"></td></tr>
							<tr><td><strong style="color:#DD0A1B;"><u>PRESUPUESTO</u></strong></td></tr>';
							//Sonidos
							if (isset($_POST['sonido_basico'])){
								$mail->Body     .= '<tr><td>Sonido: P.A. (2x600Wrms) = 1200Wrms + ILUMINACIÓN: Truss 3mts con luces, Técnico cualificado, Disc Jockey: 3 Horas  </td><td>'.$_POST['sonido_basico'].' € </td></tr>';
									}
									if (isset($_POST['sonido_basico2'])){
										$mail->Body     .= '<tr><td>Sonido: P.A. (2x600Wrms) = 1200Wrms + ILUMINACIÓN: Truss 3mts con luces, Técnico cualificado, Pack sonido básico sin DJ  </td><td>'.$_POST['sonido_basico2'].' € </td></tr>';
									}
									if (isset($_POST['sonido_superior'])){
										$mail->Body     .= '<tr><td>Sonido: P.A. (4x600Wrms) = 2400Wrms + ILUMINACIÓN: Truss 4mts con luces, Técnico cualificado, Disc Jockey: 3 Horas, ESCENARIO: 2,5x1,90mts (REGALO)  </td><td>'.$_POST['sonido_superior'].' € </td></tr>';
									}
									if (isset($_POST['sonido_superior2'])){
										$mail->Body     .= '<tr><td>Sonido: P.A. (4x600Wrms) = 2400Wrms + ILUMINACIÓN: Truss 4mts con luces, Técnico cualificado, Disc Jockey: 3 Horas, Pack sonido superior sin DJ  </td><td>'.$_POST['sonido_superior2'].' € </td></tr>';
									}

									//Extras
									if (isset($_POST['extras_dj']) && ($_POST['extras_dj'] != 0)){
										$mail->Body     .= '<tr><td width="700">Horas DJS  </td><td width="100">'.$_POST['extras_dj'].' € </td></tr>';
									}
									if (isset($_POST['extras_grupo'])){
										$mail->Body     .= '<tr><td width="700">Si llevara grupo que no sea contratado con nosotros  </td><td width="100">'.$_POST['extras_grupo'].' € </td></tr>';
									}
									if (isset($_POST['extras_civil'])){
										$mail->Body     .= '<tr><td width="700">Sonido ceremonia civil  </td><td width="100">'.$_POST['extras_civil'].' € </td></tr>';
									}
									if (isset($_POST['extras_ambiente'])){
										$mail->Body     .= '<tr><td width="700">Sonido ambiente aperitivo 2 columnas  </td><td width="100">'.$_POST['extras_ambiente'].' € </td></tr>';
									}
									if (isset($_POST['extras_ambiente2'])){
										$mail->Body     .= '<tr><td width="700">Sonido ambiente aperitivo 4 columnas  </td><td width="100">'.$_POST['extras_ambiente2'].' € </td></tr>';
									}
									if (isset($_POST['extras_banquete'])){
										$mail->Body     .= '<tr><td width="700">Sonido ambiente banquete 2 columnas  </td><td width="100">'.$_POST['extras_banquete'].' € </td></tr>';
									}
									if (isset($_POST['extras_banquete2'])){
										$mail->Body     .= '<tr><td width="700">Sonido ambiente banquete 4 columnas  </td><td width="100">'.$_POST['extras_banquete2'].' € </td></tr>';
									}
									if (isset($_POST['proyector'])){
										$mail->Body     .= '<tr><td width="700">Proyector  </td><td width="100">'.$_POST['proyector'].' € </td></tr>';
									}

									//Animación
									if (isset($_POST['monitores'])){
										$mail->Body     .= '<tr><td width="700">Dos monitores cualificados durante 4H (hora extra / monitor 20€)  </td><td width="100">'.$_POST['monitores'].' € </td></tr>';
									}
									if (isset($_POST['monitores2'])){
										$mail->Body     .= '<tr><td width="700">Dos monitores cualificados durante toda la boda  </td><td width="100">'.$_POST['monitores2'].' € </td></tr>';
									}
									if (isset($_POST['castillo'])){
										$mail->Body     .= '<tr><td width="700">Castillo pequeño (sólo el tiempo que este los monitores)  </td><td width="100">'.$_POST['castillo'].' € </td></tr>';
									}
									if (isset($_POST['castillo2'])){
										$mail->Body     .= '<tr><td width="700">Castillo mediano (sólo el tiempo que este los monitores)  </td><td width="100">'.$_POST['castillo2'].' € </td></tr>';
									}
									if (isset($_POST['castillo3'])){
										$mail->Body     .= '<tr><td width="700">Castillo grande (sólo el tiempo que este los monitores)  </td><td width="100">'.$_POST['castillo3'].' € </td></tr>';
									}

									//Fotomatón
									if (isset($_POST['fotos'])){
										$mail->Body     .= '<tr><td width="700">Servicio 3h fotos ilimitadas, atresos  </td><td width="100">'.$_POST['fotos'].' € </td></tr>';
									}
									if (isset($_POST['chroma'])){
										$mail->Body     .= '<tr><td width="700">Sistema chroma o photocall digital  </td><td width="100">'.$_POST['chroma'].' € </td></tr>';
									}
									if (isset($_POST['impresion'])){
										$mail->Body     .= '<tr><td width="700">Hora extra de impresión  </td><td width="100">'.$_POST['impresion'].' € </td></tr>';
									}
									if (isset($_POST['grabacion'])){
										$mail->Body     .= '<tr><td width="700">Hora extra grabación mensajes cortos  </td><td width="100">'.$_POST['grabacion'].' € </td></tr>';
									}
									if (isset($_POST['digital'])){
										$mail->Body     .= '<tr><td width="700">Foto álbum en impresión digital con las mejores fotos  </td><td width="100">'.$_POST['digital'].' € </td></tr>';
									}
									if (isset($_POST['reportaje'])){
										$mail->Body     .= '<tr><td width="700">Reportaje fotográfico de la barra libre  </td><td width="100">'.$_POST['reportaje'].' € </td></tr>';
									}
									if (isset($_POST['filmaciones'])){
										$mail->Body     .= '<tr><td width="700">Filmaciones creativas  </td><td width="100">'.$_POST['filmaciones'].' € </td></tr>';
									}
									if (isset($_POST['coches'])){
										$mail->Body     .= '<tr><td width="700">Coches clásicos (precio según zona)  </td><td width="100">'.$_POST['coches'].'  </td></tr>';
									}
									if (isset($_POST['desplazamiento'])){
										$mail->Body     .= '<tr><td width="700">Desplazamiento 1€/km a partir 50km de Sevilla  </td><td width="100">'.$_POST['desplazamiento'].' € </td></tr>';
									}

								$mail->Body     .= '
								<tr><td width="700" height="20"></td></tr>
								<tr><td width="700"><strong style="color:#DD0A1B;">TOTAL:</strong></td><td width="100"><strong style="color:#DD0A1B;">'.$_POST['res_total'].' €</strong></td></tr></table>';

								$mail->Send();
								echo $mail->Body;
?>
