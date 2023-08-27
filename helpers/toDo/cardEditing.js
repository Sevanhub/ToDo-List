import cardDrawing from './cardDrawing.js'
import commonVariables from './commonVariables.js'

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
      localStorage.setItem('todos', JSON.stringify(data))
      editWindowClose()
    }
  
    editSubmitButton.addEventListener('click', dataChanging)
  
    btnCloseEl.addEventListener('click', (event) => {
      event.preventDefault()
      editWindowClose()
    })
  }

export default cardEditing