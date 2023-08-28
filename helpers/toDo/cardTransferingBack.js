import cardDrawing from './cardDrawing.js'
import commonVariables from './commonVariables.js'

function cardTransferingBack(eventTarget, data) {
    const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
    
    const listsId = [...document.querySelectorAll('.list')].map((list) => list.id)
    const nextListIndex = listsId.findIndex((id) => id === listId) - 1
    const currentListIndex = listsId.findIndex((id) => id === listId)
    
    if (currentListIndex === 0) {

    } else if (currentListIndex !== 0) {
      data[listId].splice(deletedCardIndex, 1)
      data[listsId[nextListIndex]].push(deletedCard)

      localStorage.setItem('todos', JSON.stringify(data))

      cardDrawing(data, listId)
      cardDrawing(data, listsId[nextListIndex])
    }
  }

export default cardTransferingBack