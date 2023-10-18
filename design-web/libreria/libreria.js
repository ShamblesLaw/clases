// sweetalert

let boton = document.getElementById("btn");

boton.addEventListener('click', function () {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
    });
});

// Toastify

let boton2 = document.getElementById("btn2");

boton2.addEventListener('click', function () {
    Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://youtu.be/dQw4w9WgXcQ?si=M08prCXUpO2tWLU8",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
});

const estudiantes = []
class Estudiantes {
    constructor(nombre, apellidos, edad) {
        this.id = estudiantes.length;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        estudiantes.push(this);
    }
}