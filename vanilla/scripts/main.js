$(document).ready(initializeApp)

function initializeApp() {
  buildComponent()
  getBeerList()
  addClickHandlers()
}

const addClickHandlers = () => {
  $('#footerPlusButton').click(handleButtonClick)
}

const getBeerList = async () => {
  const init = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', init)
  const data = await response.json()
  if (data) buildTable(data)
}

const handleButtonClick = e => {
  e.preventDefault()
  const name = e.target.name
  const value = e.target.value

  if (name === 'addButton') {
    toggleButton()
    toggleModal('addButton')

  } else if (name === 'editButton') {
    console.log('main edit button')
    const { beerData } = e.data
    console.log(name, beerData, value)
    toggleButton()
    toggleModal('editButton', beerData, value)

  } else if (name === 'submit' || name === 'edit') {
    // console.log('main submit/edit')
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
      if (name === 'edit') {
        // console.log('main edit')
        beerList('edit', beerData, value)
        toggleButton()
        toggleModal()
      } else if (name === 'submit') {
        beerList('submit', beerData)
        toggleButton()
        toggleModal()
      }
    }

  } else if (name === 'cancel') {
  	toggleButton()
    toggleModal()

  } else if (name === 'delete') {
    beerList('delete', value)
  }
}

const handleInputFocus = e => {
  const name = e.target.name
  $(`#${name}Error`).addClass('hide')
  $(`#input${name.charAt(0).toUpperCase()}${name.slice(1)}`).removeClass('invalid')
}

const toggleButton = () => {
  const button = $('#footerPlusButton')
  if (button.text() === 'ADD') button.text('CLOSE')
  else button.text('ADD')
}

const toggleModal = (action, beerData, value) => {
  const addModal = $('#addModal')
  addModal.toggleClass('hide')
  const classList = $('#addModal').attr('class')
  if (classList.split(' ')[1] === 'hide') {
    takedownModal()
  } else {
    buildModal(action, beerData, value)
  }
}

const takedownModal = () => {
  $('#addModal').empty().addClass('hide')
}
