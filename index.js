import modalWindowOpen from './helpers/modal/modalWindowOpen.js'
import modalWindowClose from './helpers/modal/modalWindowClose.js'
import dataAdding from './helpers/modal/dataAdding.js'

import cardDeleting from './helpers/toDo/cardDeleting.js'
import cardEditing from './helpers/toDo/cardEditing.js'
import cardRestoring from './helpers/toDo/cardRestoring.js'
import cardsDeleting from './helpers/toDo/cardsDeleting.js'
import cardTransfering from './helpers/toDo/cardTransfering.js'
import cardTransferingBack from './helpers/toDo/cardTransferingBack.js'
import cardDrawing from './helpers/toDo/cardDrawing.js'

const init = () => {
  const modalWindowEl = document.querySelector('.modalWindowWrapper')
  const windowFormEl = document.querySelector('.windowForm')
  const toDoContainerEl = document.querySelector('.box-containers')

  const btnCloseEl = document.querySelector('#formCloseButton')
  const btnOpenEl = document.querySelector('#button1')

  const todos = localStorage.getItem('todos') 
      ? JSON.parse(localStorage.getItem('todos'))
      : {
      toDo: [],
      inProgress: [],
      done: [],
      deleted: [],
  }

  const dataKeys = Object.keys(todos)
  dataKeys.forEach((key) => cardDrawing(todos, key))

  btnCloseEl.addEventListener('click', (event) => modalWindowClose(event, modalWindowEl))
  windowFormEl.addEventListener('submit', (event) => dataAdding(event, todos))
  btnOpenEl.addEventListener('click', (event) => modalWindowOpen(event, modalWindowEl))

  toDoContainerEl.addEventListener('click', (event) => {
    const eventTarget = event.target
    switch (true) {
      case [...eventTarget.classList].includes('deleteButton'):
        cardDeleting(eventTarget, todos)
        break
      case[...eventTarget.classList].includes('clearAllButton'):
        cardsDeleting(todos)
        break
      case[...eventTarget.classList].includes('restoreButton'):
        cardRestoring(eventTarget, todos)
        break
      case[...eventTarget.classList].includes('nextButton'):
        cardTransfering(eventTarget, todos)
        break
      case[...eventTarget.classList].includes('backButton'):
      cardTransferingBack(eventTarget, todos)
        break
      case[...eventTarget.classList].includes('editButton'):
        cardEditing(eventTarget, todos)
        break
    } 
  })
}

init()