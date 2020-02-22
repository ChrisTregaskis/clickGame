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
<body class="body-login">
    <div class="login-box">
        <h2>Please Log In</h2>
        <form class="login" method="post">
            <fieldset class="user-email-input">
                <input type="text" id="login-user" placeholder="User email" required/>
                <span class="user-input-hint">user email = test@test.com &#128521;</span>
            </fieldset>
            <fieldset class="user-password-input">
                <input type="password" id="login-password" placeholder="Password" required/>
                <span class="user-input-hint">password = password &#128521;</span>
            </fieldset>
            <input type="submit" id="login-submit" value="LOGIN"/>
        </form>
    </div>
</body>
</html>
