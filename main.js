$(document).ready(initializeApp)

var database = [
  {
    beer: 'Pale Dog',
    brewery: 'State Brewing',
    rating: '5'
  },
  {
    beer: 'Super IPA',
    brewery: 'American Brewing',
    rating: '5'
  },
  {
    beer: 'Chocky Stout',
    brewery: 'Isle Brewing',
    rating: '5'
  },
  {
    beer: 'Rocker Lager',
    brewery: 'Treble Beer',
    rating: '5'
  },
  {
    beer: 'Double IPA',
    brewery: 'Twice Brewery',
    rating: '5'
  }
]

function initializeApp() {
  addClickHandlers()
}

function addClickHandlers() {
  $('#footerPlusButton').on('click', footerButtonClicked)
}

function footerButtonClicked() {
  openModal()
  toggleButton()
}

function openModal() {
  $('#addModal').toggleClass('hide')
}

function toggleButton() {
  const button = $('#footerPlusButton')
  if (button.text() === 'ADD') {
    button.text('CLOSE')
  } else {
    button.text('ADD')
  }
}
