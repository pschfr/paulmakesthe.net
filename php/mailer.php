<?php
	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject'])) {
		$to = "hello@paulmakesthe.net";
		$subject = $_POST['subject'];
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
