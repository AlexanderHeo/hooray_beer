$(document).ready(initializeApp)

let database = {}
// var database = [
//   {
//     beer: 'Pale Dog',
//     brewery: 'State Brewing',
//     rating: '5'
//   },
//   {
//     beer: 'Super IPA',
//     brewery: 'American Brewing',
//     rating: '5'
//   },
//   {
//     beer: 'Chocky Stout',
//     brewery: 'Isle Brewing',
//     rating: '5'
//   },
//   {
//     beer: 'Rocker Lager',
//     brewery: 'Treble Beer',
//     rating: '5'
//   },
//   {
//     beer: 'Double IPA',
//     brewery: 'Twice Brewery',
//     rating: '5'
//   }
// ]

function initializeApp() {
  addClickHandlers()
  getBeerList()
}

async function getBeerList() {
  const response = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  database = { ...data }
  console.log(database)
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
