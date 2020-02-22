<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>click Game</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="index.js"></script>
</head>
<body>
    <div class="login-box">
        <form class="login" method="post">
            <input type="text" id="login-user" placeholder="User email" required/>
            <input type="password" id="login-password" placeholder="Password" required/>
            <input type="submit" id="login-submit" value="LOGIN"/>
        </form>
        <div id="input-hint">hint?</div>
        <div id="login-hint-detail">
            <p>User email = test@test.com</p>
            <p>Password = password</p>
        </div>
    </div>
</body>
</html>
