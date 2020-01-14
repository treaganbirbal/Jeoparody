document.addEventListener('DOMContentLoaded', () => {
    // let body = document.querySelector('body')
    // let select = document.createElement('select')
    // body.appendChild(select)

    
   
})

let baseUrl = 'http://jservice.io'

fetch(`${baseUrl}/api/clues`)
         .then(response => {
             return response.json()
         }).then((data) => {
             console.log(data) 
     })


    

