<?php
ini_set('display_errors', true);
if(isset($_POST['submit'])){
$name = "İsim:".$_POST['name']."
";
$email = "Email:".$_POST['email']."
";
$gender = "Cinsiyet:".$_POST['gender']."
";
$lessons = "Seçilen Ders:".$_POST['lessons']."
";
$language = "Seçilen Dil:".$_POST['language']."
";
$subject = "Konu:".$_POST['subject']."
";
$message = "Mesaj:".$_POST['message']."
";

$file=fopen('data.txt', 'w+');
fwrite($file, $name);
fwrite($file, $email);
fwrite($file, $gender);
fwrite($file, $lessons);
fwrite($file, $language);
fwrite($file, $subject);
fwrite($file, $message);
fclose($file);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Iletisim.html</title>
</head>
<body>
 <?php

 print <<< HERE
 <h1>Mesajınız için teşekkürler!</h1>

 <p>
 <h3> $name <br /> </h3>
 <h3> $email <br /> </h3>
 <h3> $gender <br /> </h3>
 <h3> $lessons <br /> </h3>
 <h3> $language <br /> </h3>
 <h3> $subject <br /> </h3>
 <h3> $message <br /> </h3>

 </p>
HERE;
 //generate output for text file
 $output = <<< HERE
HERE;
 //open file for output
 $fp = fopen("data.txt", "r");
 //write to the file
 fwrite($fp, $output);
 fclose($fp);
 ?>
</body>
</html>