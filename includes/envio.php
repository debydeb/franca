<?
require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();  // Aquí le dices que utilice SMTP
$mail->Host= "mail.francastudio.com"; // El nombre del servidor smtp. Este lo debes buscar en el panel de control del hosting.

$mail->From= "info@francastudio.com"; // Remitente
$mail->AddAddress("franca.creative.studio@gmail.com"); // Destinatario

$mail->Subject = $_POST['asunto']; // Asunto
$mail->Body    = $_POST['mensaje']; // Cuerpo del mensaje.
$mail->WordWrap= 150; // Permite 50 palabras por línea (no por correo; no es lo mismo :P)

if(!$mail->Send()) 
	{
		echo 'Mensaje no se envió.';
		echo 'Error: ' . $mail->ErrorInfo;
	}else{
			echo 'Mensaje enviado.';
			}
			
	$sendto = 'franca.creative.studio@gmail.com';
	$subject = "Cliente Franca Studio:";
	
	$corps="Nombre: ".$_POST['nombre']."\n"."Email: ".$_POST['email']."\n"."Subject: ".$_POST['asunto']."\n"."Mensaje: ".$_POST['mensaje']."\n"."\n";
	
	$From = "From: ".$_POST['nombre']." <".$_POST['email'].">\n";
	$From .= "Reply-To: ".$_POST['nombre']." <".$_POST['email'].">\n";

	@mail($sendto, $subject, $corps, $From);
	header("Location:../index.php");		
?>

