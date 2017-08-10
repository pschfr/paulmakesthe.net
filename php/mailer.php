<?php
	if(!empty($_POST['name']) && !empty($_POST['email'])) {
		$to = "hello@paulmakesthe.net";
		$subject = "Message from your website!";
		$header  = "Reply-To: <" . $_POST['email'] . ">\n";
		$header .= "X-Mailer: PHP/" . phpversion() . "\n";
		$header .= "X-Priority: 1";
		$body .= $_POST['message'];
		if(@mail($to, $subject, $body, $header)) {
			header('Location: /contact?thanks');
		} else {
			header('Location: /contact?error');
		}
	} else {
		header('Location: /contact?error');
	}
?>
