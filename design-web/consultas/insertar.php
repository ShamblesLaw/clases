<?php

if(isset($_REQUEST['enviar'])){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellidos'];
    $cedula = $_POST['pass'];
    try {
        echo $cedula;
        RegistrarCliente($nombre, $apellidos, $pass);
    } catch (\Throwable $th) {
        //throw $th;
    }
}

function RegistrarCliente($nombre, $apellidos, $pass){
    include("conectarBD.php");
    $con=ConectaraBD($server,$username,$password,$database);
    $sql = "INSERT INTO persona VALUES ('','$nombre','$apellidos','$pass')";
    $query=mysqli_query($con,$sql);
    if($query){
        echo "Se ha registrado el Cliente.";
        $ultimoid=mysqli_insert_id($con);
        echo "id del último registro:".$ultimoid;
    }else{
        
    }
}
?>