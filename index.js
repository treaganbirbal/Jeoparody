document.addEventListener('DOMContentLoaded', () => {
    // let body = document.querySelector('body')
    // let select = document.createElement('select')
    // body.appendChild(select)

    
   
})

let baseUrl = 'http://jservice.io'

fetch('https://ghibliapi.herokuapp.com/films')
         .then(response => {
             return response.json()
         }).then((data) => {
             console.log(data)
     })


    

