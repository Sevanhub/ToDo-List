import cardDrawing from './cardDrawing.js'

function cardsDeleting(data) {
    data.deleted = []
    localStorage.setItem('todos', JSON.stringify(data))
    cardDrawing(data, 'deleted')
  }

export default cardsDeleting