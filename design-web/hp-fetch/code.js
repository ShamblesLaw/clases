let listaEstudiantes = document.getElementById('listaEstudiantes');
 
fetch('https://hp-api.onrender.com/api/characters/students')
.then(resp => resp.json())
.then(data => {
 
    console.log(data);
 
    function showStudents(){
 
        listaEstudiantes.innerHTML = '';
 
        data.forEach(student => {
            const section = document.createElement('section');
            var nameStudentAlt = student.name;
            section.innerHTML = `
            <div class="fpfStudent">
                <img src="`+fpfStudent(student.image)+`" alt="image-${nameStudentAlt.replace(/ /g, "")}">
            </div>
            <div>
                <p class="nameStudent">${student.name}</p>
                <button class="showInfo" data-key="${student.id}">Más Info</button>
            </div>
                `;
 
            listaEstudiantes.append(section);
            
        })

        const showInfoButtons = document.querySelectorAll('.showInfo');
        showInfoButtons.forEach(button => {
        button.addEventListener('click', function() {

            const studentId = button.getAttribute('data-key');
            const student = data.find(s => s.id === studentId);

           if(student){
            Swal.fire({
                title: student.name,
                imageUrl: fpfStudent(student.image),
                imageWidth: 100,
                imageHeight: 140,
                text: "No podras revertir esto!",
                html: ` <p><strong>Género:</strong> ${genderStudent(student.gender)}</p><br>
                        ${student.dateOfBirth ? `<p><strong>Fecha de nacimiento:</strong> ${student.dateOfBirth}</p><br>` : '<p><strong>Fecha de nacimiento:</strong> No registrada</p><br>'}
                        ${student.ancestry ? `<p><strong>Ancestro:</strong> ${student.ancestry}</p><br>` : '<p><strong>Ancestro:</strong> No registrado</p><br>'}
                        ${student.house ? `<p><strong>Casa:</strong> ${student.house}</p><br>` : '<p><strong>Casa:</strong> No registrada</p><br>'}
                `,
                confirmButtonColor: '#3085d6',
                })
            } else {
                console.error("No se encontró al estudiante con ID: " + studentId);
            }
            
        })
        
        })
        
        function fpfStudent(imageStudent){
            if(imageStudent == ""){
                return "./imgs/unknown-user-icon.png";
            } else {
                return ""+imageStudent+"";
            }
        }

        function genderStudent(genderStudent){
            if(genderStudent == "male"){
                return "♂️ Hombre";
            } else if (genderStudent == "female") {
                return "♀ Mujer";
            } else {
                return "No definido"
            }
        }
    }
 
    showStudents();

})
 
// {"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One"],
// "species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true, 
// "ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},  
// "patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,   
// "image":"https://ik.imagekit.io/hpapi/harry.jpg"};