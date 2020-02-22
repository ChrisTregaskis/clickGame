<?php

//Checking if user has entered credentials
function checkInput ($input) {
    if (isset($input)) {
        return $input;
    } else {
        return false;
    }
}

//Check if credentials are correct
function validateCredentials($userEmailDB, $userPasswordDB, $userEmailInput, $userPasswordInput) {
    if ($userEmailInput === $userEmailDB && $userPasswordInput === $userPasswordDB) {
        return true;
    } else {
        return false;
    }
}

//if credentials are correct create assoc session array with login key & value
function loginSession($credentialsToAction) {
    $error = '';
    if ($credentialsToAction === true) {
        $_SESSION['login'] = 1;
        header ('Location: index.html');
    } else {
        $error .= '<script type="text/javascript">';
        $error .= ' alert("Incorrect credentials, please try again. Hover input for working credentials.")';
        $error .= '</script>';
        return $error;
    }
}
