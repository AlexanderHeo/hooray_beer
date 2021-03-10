$(document).ready(initializeApp)

let database = {}
function initializeApp() {
  buildComponent()
  getBeerList()
  addClickHandlers()
}

function addClickHandlers() {
  $('#footerPlusButton').click(handleButtonClick)
}

async function getBeerList() {
  const response = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  database = { ...data }
  if (database) {
    buildTable()
  }
}

function handleButtonClick(e) {
  e.preventDefault()
  const name = e.target.name
  if (name === 'addButton') {
    toggleButton()
    toggleModal()
  } else if (name === 'submit') {
    const beer = $('#inputBeer').val()
    const brewery = $('#inputBrewery').val()
    const rating = $('#inputRating').val()
    const tasting = $('#inputTasting').val()

    if (!beer) missingInput('beer')
    else if (!brewery) missingInput('brewery')
    else if (!rating) missingInput('rating')
    else if (!tasting) missingInput('tasting')
    else if (beer && brewery && rating && tasting) {
      const beerData = { beer, brewery, rating, tasting }
      addNewBeer(beerData)
  		toggleButton()
      toggleModal()
    }
  } else if (name === 'cancel') {
  	toggleButton()
    toggleModal()
  } else if (name === 'delete') {
    deleteBeer(e.target.value)
  } else if (name === 'edit') console.log('edit', e.target.value)
}

function handleInputFocus(e) {
  const name = e.target.name
  $(`#${name}Error`).addClass('hide')
  $(`#input${name.charAt(0).toUpperCase()}${name.slice(1)}`).removeClass('invalid')
}

function toggleButton() {
  const button = $('#footerPlusButton')
  if (button.text() === 'ADD') button.text('CLOSE')
  else button.text('ADD')
}

function toggleModal() {
  const addModal = $('#addModal')
  addModal.toggleClass('hide')
  const classList = $('#addModal').attr('class')
  if (classList.split(' ')[1] === 'hide') {
    takedownModal()
  } else {
    buildModal()
  }
}

function takedownModal() {
  $('#addModal').empty().addClass('hide')
}
