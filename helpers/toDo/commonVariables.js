function commonVariables(eventTarget, data) {
    const listId = eventTarget.closest('.list').id
    const card = eventTarget.closest('.card')
    const currentId = +card.id
    const deletedCard = data[listId].filter((card) => card.id === currentId)[0]
    const deletedCardIndex = data[listId].findIndex((card) => card.id === deletedCard.id)
  
    return {listId, deletedCard, deletedCardIndex}
  }

export default commonVariables