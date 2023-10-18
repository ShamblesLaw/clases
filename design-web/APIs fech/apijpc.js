
const listaPosts = document.getElementById('posts')
const listaUsuarios= document.getElementById("tablaUsuarios")

//Traer todos los posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    // Sincronizar las acciones
    console.log(data)
    
    data.forEach(post => {
      const li = document.createElement('li')
    li.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.body}</p>
    `
    listaPosts.append(li)
    })
  })

//Traer todos los users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    // Sincronizar las acciones
    console.log(data)
    
    data.forEach(post => {
      const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${post.id}</td>
      <td>${post.name}</td>
      <td>${post.username}</td>
      <td>${post.address.city}</td>
    `
    listaUsuarios.append(tr)
    })
  })

