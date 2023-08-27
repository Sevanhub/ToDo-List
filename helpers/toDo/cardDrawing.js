function cardDrawing(data, listType) {
    const list = document.querySelector(`#${listType}`)
    
    list.innerHTML = ''
    data[listType].forEach((card) => {
        list.innerHTML += `
          <li class='card' id=${card.id}>
            <span>Title:</span>
            <p class='title'>${card.title}</p>
            <span>Id:</span>
            <p class='card-id'>${card.id}</p>
            <span>Description:</span>
            <p class='description'>${card.description}</p>
            <br/>
            ${
              listType !== 'deleted'
                ? `<button class='editButton'>Edit</button>
                   <button class='nextButton'>Next</button>
                   <button class='backButton'>Back</button>
                   <button class='deleteButton'>Delete</button>`
                : `<button class='restoreButton'>Restore</button>`
            }
          </li>
        `
      })
   }

export default cardDrawing