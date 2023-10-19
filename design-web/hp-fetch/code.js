// let listaEstudiantes = document.getElementById('listaEstudiantes');

// fetch('https://hp-api.onrender.com/api/characters/students')
//     .then(resp => resp.json())
//     .then(data => {

//         console.log(data);

//         data.forEach(student => {
//             const tr = document.createElement('tr');
//             tr.innerHTML = `
//             <td>${student.name}</td>
//             <td>${student.gender}</td>
//             <td>${student.species}</td>
//             <td><button class="showInfo" data-key="${key}">Más Info</button></td>
//             `
//             listaEstudiantes.append(tr)
//         })

//         const showInfoButtons = document.querySelectorAll('.showInfo');
//         showInfoButtons.forEach(button => {
//             button.addEventListener('click', cambiarEstadoPedido);
//     })

//     })

// function cambiarEstadoPedido(event) {
//     const key = event.currentTarget.getAttribute('data-key');
//     const pedidoString = localStorage.getItem(key);
//     const pedido = JSON.parse(pedidoString);

//     pedido.entregado = !pedido.entregado;
//     localStorage.setItem(key, JSON.stringify(pedido));

//     mostrarPedidosPendientes();
// }

let listaEstudiantes = document.getElementById('listaEstudiantes');
 
fetch('https://hp-api.onrender.com/api/characters/students')
.then(resp => resp.json())
.then(data => {
 
    console.log(data);
 
    function showStudents(){
 
        listaEstudiantes.innerHTML = '';
 
        data.forEach(student => {
            const section = document.createElement('section');
            section.innerHTML = `
            <div class="fpfStudent">
                <img src="`+fpfStudent(student.image)+`" alt="image-${student.name}">
            </div>
            <div class="minDatosStudent">
                <p class="nameStudent">${student.name}</p>
                <p class="genderStudent">${student.gender}</p>
                <p class="speciesStudent">${student.species}</p>
                <button class="showInfo">Más Info</button>
            </div>
                `;
                // 
           
            // <button class="showInfo" data-key="${key}">Más Info</button>
            // ;
 
            listaEstudiantes.append(section);
            modal(student.name, student.image, student.gender, student.dateOfBirth, student.species, student.house);
        })
            
        function modal(name, image, gender, date, species, house){
            const showInfoButtons = document.querySelectorAll('.showInfo');
            showInfoButtons.forEach(button => {
            button.addEventListener('click', 
                Swal.fire({
                    title: name,
                    imageURL: image,
                    imageWidth: 200,
                    imageHeight: 400,
                    text: "No podras revertir esto!",
                    html: ` <strong><p>Género:</p></strong> <p>${gender}</p><br>
                            <strong><p>Fecha de nacimiento:</p></strong> <p>${date}</p><br>
                            <strong><p>Especie:</p></strong> <p>${species}</p><br>
                            <strong><p>Casa:</p></strong> <p>${house}</p><br>
                    `,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    })
                );
            })
        }

        // const showInfoButtons = document.querySelectorAll('.showInfo');
        // showInfoButtons.forEach(button => {
        //     button.addEventListener('click', cambiarEstadoPedido);
        // })
        
        function fpfStudent(imageStudent){
            if(imageStudent == ""){
                return "./imgs/unknown-user-icon.png";
            } else {
                return imageStudent;
            }
        }
    }
 
    showStudents();

})
 
// function showMaxDatos(name, fecnac, gender, species, house){
//     const key = event.currentTarget.getAttribute('data-key');
//     const pedidoString = localStorage.getItem(key);
//     const 
// }
 
// function cambiarEstadoPedido(event){
//     const key = event.currentTarget.getAttribute('data-key');
//     const pedidoString = localStorage.getItem(key);
//     const pedido = JSON.parse(pedidoString);
 
//     pedido.entregado = !pedido.entregado;
//     localStorage.setItem(key, JSON.stringify(pedido));
 
 
// }

// {"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One"],
// "species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true, 
// "ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},  
// "patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,   
// "image":"https://ik.imagekit.io/hpapi/harry.jpg"};