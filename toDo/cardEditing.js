import cardDrawing from './toDo/cardDrawing.js.js.js.js'
import commonVariables from './toDo/commonVariables.js.js.js.js'

function cardEditing(eventTarget, data) {
    const modalEditWindowEl = document.querySelector('.modalEditWindowWrapper')
    const btnCloseEl = document.querySelector('#editFormCloseButton')
    const editSubmitButton = document.querySelector('.editSubmitButton')
  
    const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
    const editInputTitleEl = document.querySelector('#editTitleInput')
    const editInputDescriptionEl = document.querySelector('#editDescriptionInput')
  
    modalEditWindowEl.style.display = 'flex'
    editInputTitleEl.value = deletedCard.title
    editInputDescriptionEl.value = deletedCard.description
  
    const editWindowClose = () => {
      editSubmitButton.removeEventListener('click', dataChanging)
  
      modalEditWindowEl.style.display = 'none'
      cardDrawing(data, listId)
    }
  
    const dataChanging = (event) => {
      event.preventDefault()
      data[listId].splice(deletedCardIndex, 1, {
        title: editInputTitleEl.value,
        description: editInputDescriptionEl.value,
        id: deletedCard.id,
      })
  
      editWindowClose()
    }
  
    editSubmitButton.addEventListener('click', dataChanging)
  
    btnCloseEl.addEventListener('click', (event) => {
      event.preventDefault()
      editWindowClose()
    })
  }

export default cardEditing