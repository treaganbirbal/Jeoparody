document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    let selector = document.createElement('select')
    let options = document.createElement('option')
    // body.appendChild(select)
    selector.classList.add('movie-selector')
    let baseUrl = 'http://jservice.io'

    let clueObj = {}

document.querySelector('body').appendChild(selector)
let option = document.createElement('option')

selector.addEventListener("change", (event) => {
    displayClue(clueObj[event.target.value])
})

const displayClue = (clue) => {
    let main = document.querySelector('main')
    let oldClue = document.querySelector('.clue-display')
    let newClue = document.createElement('div')
    newClue.classList.add('clue-display')
    let clueTag = document.createElement('h3')
    clueTag.innerText = clueObj[clue.id].question
    newClue.appendChild(clueTag)
    main.replaceChild(newClue, oldClue)
}

const fireRequest = (url, callback) => {
    fetch(url)
    .then(res => res.json()
    .then(data => callback(data))
    )}

const getAnswers = (event) => {
    selector.addEventListener('click', () => {
        console.log(event)
    })
}

const updateSelect = (clues) => {
    clues.forEach(clue => {
        clueObj[clue.id] = clue
        let catOption = document.createElement('option')
        catOption.innerText = clue.category.title
        catOption.value = clue.id
        selector.appendChild(catOption)
    })
    getAnswers()
}

fireRequest(`${baseUrl}/api/clues`, updateSelect)



})




    

