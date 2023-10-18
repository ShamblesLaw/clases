<?php 

$server="localhost";
$user="root";
$pass="";
$bd="pruebas";

function ConectarBD($server, $user, $pass, $bd){
    try {
        $conn = mysqli_connect($server, $user, $pass, $bd);
        echo "Conectado a la base de datos: <p>&#128512;</p>"
        return $conn;
    } catch (\Throwable $th) {
        die('Connected failed: '.$th->getMessage());
    }
}

?>