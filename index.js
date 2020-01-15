document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    let selector = document.createElement('select')
    let options = document.createElement('option')
    // body.appendChild(select)
    selector.classList.add('movie-selector')
    let baseUrl = 'http://jservice.io'

document.querySelector('body').appendChild(selector)
let option = document.createElement('option')


const fireRequest = (url, callback) => {
    fetch(url).then(res => res.json().then(data => callback(data)))
}

const updateSelect = (clues) => {
    clues.forEach(clue => {
        let catOption = document.createElement('option')
        catOption.innerText = clue.category.title
        selector.appendChild(catOption)
    })
}

fireRequest(`${baseUrl}/api/clues`, updateSelect)



})




    

