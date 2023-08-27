import cardDrawing from '../toDo/cardDrawing.js'

function dataAdding(event, data) {
    event.preventDefault()
    const modalWindowEl = document.querySelector('.modalWindowWrapper')
    const windowFormEl = document.querySelector('.windowForm')
    const inputTitleEl = document.querySelector('#titleInput')
    const inputDescriptionEl = document.querySelector('#descriptionInput')
    
    const title = inputTitleEl.value
    const description = inputDescriptionEl.value
    data.toDo.push({id: Math.random(), title, description})
    
    localStorage.setItem('todos', JSON.stringify(data))
    cardDrawing(data, 'toDo')

    windowFormEl.reset()
    modalWindowEl.style.display = 'none'
  }

export default dataAdding