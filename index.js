document.addEventListener('DOMContentLoaded', () => {
    // let body = document.querySelector('body')
    // let select = document.createElement('select')
    // let options = document.createElement('option')
    // body.appendChild(select)
    
    

getClues()
})

let baseUrl = 'http://jservice.io'

let select= document.createElement('select')
document.querySelector('body').appendChild(select)
// let option = document.createElement('option')


const getClues = (event) => {fetch(`${baseUrl}/api/clues`)
         .then(response => {
             return response.json()
         }).then((data) => {
             console.log(data)
            let options = data.map(el => {
                return `<option value=${el.category.title}>${el.category.title}</option>`
            })
            select.innerHTML = options
     })
    }

    

