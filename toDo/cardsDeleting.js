import cardDrawing from './toDo/cardDrawing.js.js.js.js'

function cardsDeleting(data) {
    data.deleted = []
    cardDrawing(data, 'deleted')
  }

export default cardsDeleting