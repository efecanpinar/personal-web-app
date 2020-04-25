<?php
    if(isset($_POST['username']) && isset($_POST['password']))
    {
        if($_POST['username'] == 'g181210092@ogr.sakarya.edu.tr' &&
        $_POST['password'] == '1234')
        {
            $_SESSION['valid'] = true;
            $_SESSION['timeout'] = time();
            $_SESSION['username'] = 'g181210092@ogr.sakarya.edu.tr';
           

            header("Location:/html/login2.html");
        }
        else{
            header("Location:/html/login.html");
        }
    }
?>

