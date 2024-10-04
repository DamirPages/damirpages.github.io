<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom('k.damir021@gmail.com', 'ITS Лендинг');

	$mail->addAddress('k.damir021@gmail.com');

	if(trim(!empty($_POST['form']))){
		$mail->Subject = $_POST['form'];
	}else{
		$mail->Subject = 'Форма обратной связи';
	}

	$body = '';

	if(trim(!empty($_POST['form']))){
		$body.='<p><strong>Форма:</strong> '.$_POST['form'].'</p>';
	}

	if(trim(!empty($_POST['col-sku']))){
		$body.='<p><strong>Количество SKU:</strong> '.$_POST['col-sku'].'</p>';
	}
	if(trim(!empty($_POST['product']))){
		$body.='<p><strong>Какая продукция:</strong> '.$_POST['product'].'</p>';
	}
	if(trim(!empty($_POST['company']))){
		$body.='<p><strong>Какая торговая сеть:</strong> '.$_POST['company'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
	}

	$mail->Body = $body;

	if(!$mail->send()){
		$message = 'Ошибка';
	}else{
		$message = 'Данные отправленны!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response)
?>