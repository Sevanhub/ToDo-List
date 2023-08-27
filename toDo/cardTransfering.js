import cardDrawing from './toDo/cardDrawing.js.js.js.js'
import commonVariables from './toDo/commonVariables.js.js.js.js'

function cardTransfering(eventTarget, data) {
    const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
    
    const listsId = [...document.querySelectorAll('.list')].map((list) => list.id)
    const nextListIndex = listsId.findIndex((id) => id === listId) + 1
  
    data[listId].splice(deletedCardIndex, 1)
    data[listsId[nextListIndex]].push(deletedCard)
  
    cardDrawing(data, listId)
    cardDrawing(data, listsId[nextListIndex])
  }

export default cardTransfering