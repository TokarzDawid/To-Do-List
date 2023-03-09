let mainContainer = null

let filter = 'All'
let sort = 'ASCENDING'

let searchPhrase = ''
let searchInputIsFocused = false
let newToDoName = ''
let newToDoInputFocused = false

let task = [
    {
        name: 'Wynieś śmieci',
        isCompleted: false,
    }
]

const appendArray = function (array, container) {
    array.foreach(function (element) {
        container.appendChild(element)
    })
}

const render = function ()
{
return document.createTextNode('Ala ma kota')
}
const init = function (selector) {
    const conteiner = document.querySelector(selector)

    if (!conteiner) {
    console.log('Container do not exist')
    return
    }
    
    mainContainer = conteiner

    const app = render()

    mainContainer.appendChild(app)
}

init('.root')