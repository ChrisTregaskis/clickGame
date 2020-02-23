<?php

session_start();

if (!(isset($_SESSION['login']) && $_SESSION['login'] != '')) {
    header("Location: login.php");
}

if (isset($_POST['logout'])) {
    $_SESSION['login'] = '';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>click Game</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="index.js"></script>
</head>
<body class="body-game">
    <nav>
        <h3>You are logged in!</h3>
        <form action="login.php" method="post">
            <input type="submit" name="logout" value="Logout">
        </form>
    </nav>
    <div class="title"><h2>Click the UFO as many times as possible!</h2></div>
    <div class="name-input-box"><input id="name" type="text" class="name-input" placeholder="Type Name Here" required/>
    </div>
    <div id="click-to-play"><p class="start-btn">Click to Play!</p></div>
    <div class="game-box">
        <div id="surround" class="surround">
            <div id="end-game-box" class="game-box-item page-load-gif">
                <iframe src="https://giphy.com/embed/gIkyxVnwEUAJC1GcvP" width="100" height="100" frameBorder="0"
                        class="giphy-embed" allowFullScreen></iframe>
                <p><a href="https://giphy.com/stickers/dancing-party-alien-gIkyxVnwEUAJC1GcvP">via GIPHY</a></p></div>
            <div class="timer game-box-item">TIMER<p id="timer"></p></div>
            <div class="score game-box-item">SCORE<p id="score"></p></div>
        </div>
    </div>
    <div id="clicker-container">
        <div id="record-click" class="game-box-item preClick record-click-motion"></div>
    </div>
    <div id="leader-board">
        <h1>Leader Board</h1>
        <p id="leader-board-content"></p>
    </div>
</body>
</html>