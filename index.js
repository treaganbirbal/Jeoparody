document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    let selector = document.createElement('select')
    let options = document.createElement('option')
    // body.appendChild(select)
    selector.classList.add('movie-selector')



let baseUrl = 'http://jservice.io'

document.querySelector('body').appendChild(select)
let option = document.createElement('option')


const fireRequest = (url, callback) => {
    fetch(url).then(res => res.json().then(data => callback(data)))
}

const updateSelect = (movies) => {
    movies.forEach
}

fireRequest(`${baseUrl}/api/clues`, updateSelect)



})




    

