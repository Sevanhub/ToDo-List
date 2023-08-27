import cardDrawing from './toDo/cardDrawing.js.js.js.js'
import commonVariables from './toDo/commonVariables.js.js.js.js'

function cardRestoring(eventTarget, data) {
    const {deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
  
    data.deleted.splice(deletedCardIndex, 1)
    data.toDo.push(deletedCard)
  
    cardDrawing(data, 'deleted')
    cardDrawing(data, 'toDo')
  }

export default cardRestoring  