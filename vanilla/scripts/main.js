/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$(document).ready(initializeApp)

const database = {
  beers: {
    1: {
      beer: 'Pale Ale',
      brewery: 'Casper Brewing',
      id: '1',
      rating: '5',
      tasting: 'spooky good'
    },
    2: {
      beer: 'Pine IPA',
      brewery: 'Forest Brewing',
      id: 2,
      rating: '5',
      tasting: 'piney hops'
    },
    3: {
      beer: 'Vance Brewing Lager',
      brewery: 'Vance from Vance Brewing',
      id: 3,
      rating: '5',
      tasting: 'Vance from Vance Brewing'
    },
    currentId: 4
  }
}

function initializeApp() {
  buildComponent()
  getBeerList()
  addClickHandlers()
}

const addClickHandlers = () => {
  $('#footerPlusButton').click(handleButtonClick)
}
// const getBeerList = () => {
//   buildTable(database.beers)
// }
const getBeerList = async () => {
  const init = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', init)
  const data = await response.json()
  if (data) {
    buildStats(data)
    buildTable(data)
  }
}

const handleButtonClick = e => {
  e.preventDefault()
  const { name } = e.target
  const { value } = e.target

  if (name === 'addButton') {
    toggleButton()
    toggleModal('addButton')
    toggleAccordion()

  } else if (name === 'cancel') {
    toggleButton()
    toggleModal()
    toggleAccordion()

  } else if (name === 'delete') {
    beerDB('delete', null, value)

  } else if (name === 'xButton' || name === 'dotButton') {
    // console.log(value)
    toggleAccordion(value)

  }	else if (name === 'editButton') {
    const { beerList } = e.data
    toggleButton()
    toggleModal('editButton', beerList, value)

  } else if (name === 'submit' || name === 'edit') {
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
      if (name === 'submit') {
        beerDB('submit', beerData)
        toggleButton()
        toggleModal()
        toggleAccordion()
      } else if (name === 'edit') {
        beerDB('edit', beerData, value)
        toggleButton()
        toggleModal()
        toggleAccordion()
      }
    }
  }
}

const toggleAccordion = id => {
  const list = document.querySelectorAll('.beerContainer')
  list.forEach(x => {
    const beerCopy = x
    if (beerCopy.id === id) {
      $(`#${beerCopy.id}`).toggleClass('toggle')
    } else {
      if (beerCopy.classList.value.includes('open')) {
        beerCopy.classList.remove('open')
      }
    }
  })
  const container = $(`#${id}`)
  container.removeClass('beerContainer toggle')
  container.toggleClass('beerContainer toggle open')
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
