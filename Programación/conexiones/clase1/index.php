<?php 

function connection(){
    try{
        $host = "localhost";
        $user = "root";
        $pass = "";
        $bd = "mydb";

        $connect = mysqli_connect($host, $user, $pass);
        mysqli_select_db($connect, $bd);
        return $connect;
    }catch(mysqli_error $e){
        echo "Hubo un error: ".$e;    
    }
}

if ($_POST) {
    $con = connection();
    $id=null;
    $dato1 = $_POST['Nombre'];
    $dato2 = $_POST['Apellido'];
    $dato3 = $_POST['FecNac'];
    $dato4 = $_POST['Dir'];

    $sql = "INSERT INTO cliente VALUES('$id', '$dato1', '$dato2', '$dato3', '$dato4')";
    $query = mysqli_query($con, $sql);
}



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexion</title>
</head>
<body>
    <form action="index.php" method="post">
        Nombre:
        <input type="text" name="Nombre" id="">
        <br>
        Apellido:
        <input type="text" name="Apellido" id=""><br>
        Fec. de Nac:
        <input type="date" name="FecNac" id=""><br>
        Dirección:
        <input type="text" name="Dir" id=""><br>
        <input type="submit" value="Enviar"><br>
    </form>

    <table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Raza</td>
    <td>Jack Russell</td>
    <td>Caniche</td>
    <td>Perro callejero</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Edad</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Propietario</td>
    <td>Suegra</td>
    <td>Yo</td>
    <td>Yo</td>
    <td>Cuñada</td>
  </tr>
  <tr>
    <td>Hábitos alimentarios</td>
    <td>Come las sobras de todos</td>

<td>Mordisquea la comida</td>
    <td>Come en abundancia</td>

<td>Come hasta que revienta</td>
  </tr>
</table>

<style>
    table tr td {
        margin: 0;
        border: 1px solid black;
    }
</style>
</body>
</html>