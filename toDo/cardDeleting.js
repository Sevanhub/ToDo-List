import cardDrawing from './toDo/cardDrawing.js.js.js.js'
import commonVariables from './toDo/commonVariables.js.js.js.js'

function cardDeleting(eventTarget, data) {
    const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
  
    data[listId].splice(deletedCardIndex, 1)
    data.deleted.push(deletedCard)
  
    cardDrawing(data, listId)
    cardDrawing(data, 'deleted')
  }

export default cardDeleting