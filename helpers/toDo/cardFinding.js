import cardDrawing from './cardDrawing.js'
import commonVariables from './commonVariables.js'

function cardFinding(eventTarget, data) {
    const modalFindWindowEl = document.querySelector('.modalFindWindowWrapper')
    const findSubmitButtonEl = document.querySelector('.findSubmitButton')
    const findInputEl = document.querySelector('#findInput')
    const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)
    console.log('privet')
    modalFindWindowEl.style.display = 'flex'

    findSubmitButtonEl.addEventListener('submit', (event) => {
        event.preventDefault()
    })
}

export default cardFinding