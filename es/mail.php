<?php
//------------------------------------------------------------------ CORREO PARA NETSALUTI STUDIO -----------------------------------
if ($_POST["nombre"] == "" or $_POST["email"] == "" or $_POST["contenido"] == ""){
	echo '<SCRIPT LANGUAGE="javascript">location.href = "index.html";</SCRIPT>';
}
else{
//	$para  = 'diseño@netsaluti.net' . ', '; // atención a la coma
//	$para .= 'lorena@netsaluti.com';	$para = "jheancg@gmail.com";
	$asunto = 'Mensaje de: '.$_POST["nombre"];
	$cuerpo='<div style="width:650px; background-color:#9FB546; padding:50px;" align="center">
<div style="width:600px; font-family:\'Oswald\', sans-serif; font-size:14px; font-size:20px; color:#FFF; border:1px dashed #FF3; padding:30px;">
<br /><span style="color:#443F3F; font-weight:bold;">
<span style="text-transform:capitalize;">'.$_POST["nombre"].'</span><br />'.$_POST["email"].'</span>
<br /><br />'.$_POST["contenido"].'<br /><br /><br /><br /></div><br clear="all" /><br clear="all" /></div>';
	//para el envío en formato HTML
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	//dirección del remitente
	$headers .= "From: Netsaluti Studio <diseño@netsaluti.net>\r\n";
	mail($para,$asunto,$cuerpo,$headers);
	echo '<SCRIPT LANGUAGE="javascript">location.href = "javascript:window.history.go(-1)";</SCRIPT>';
}
?>
