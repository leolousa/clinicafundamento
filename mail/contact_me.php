<?php
// Check for empty fields
if(empty($_POST['nome'])  		||
   empty($_POST['email']) 		||
   empty($_POST['mensagem'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Sem dados fornecidos!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['nome']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['mensagem']));
	
// Create the email and send the message
$to = 'contato@clinicafundamento.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contato do site:  $name";
$email_body = "Você recebeu uma mensagem do site clinicafundamento.com.br.\n\n"."Detalhes:\n\nNome: $name\n\nE-mail: $email_address\n\nMenssagem:\n$message";
$headers = "De: noreply@clinicafundamento.com.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
