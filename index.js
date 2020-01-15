document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    let select = document.createElement('select')
    let options = document.createElement('option')
    // body.appendChild(select)
    
    



let baseUrl = 'http://jservice.io'

document.querySelector('body').appendChild(select)
let option = document.createElement('option')


const fireRequest = (url, callback) => {
    fetch(url).then(res => res.json().then(data => console.log(data)))
}

const updateSelect = (movies) => {
    debugger
}

fireRequest(`${baseUrl}/api/clues`)


})




    

