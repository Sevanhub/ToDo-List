import cardDrawing from './cardDrawing.js'
import commonVariables from './commonVariables.js'

function cardRestoring(eventTarget, data) {
    const {deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
  
    data.deleted.splice(deletedCardIndex, 1)
    data.toDo.push(deletedCard)

    localStorage.setItem('todos', JSON.stringify(data))

    cardDrawing(data, 'deleted')
    cardDrawing(data, 'toDo')
  }

export default cardRestoring  