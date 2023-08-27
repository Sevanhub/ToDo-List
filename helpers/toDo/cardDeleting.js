import cardDrawing from './cardDrawing.js'
import commonVariables from './commonVariables.js'

function cardDeleting(eventTarget, data) {
    const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
  
    data[listId].splice(deletedCardIndex, 1)
    data.deleted.push(deletedCard)

    localStorage.setItem('todos', JSON.stringify(data))

    cardDrawing(data, listId)
    cardDrawing(data, 'deleted')
  }

export default cardDeleting