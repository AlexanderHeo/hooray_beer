$(document).ready(initializeApp)

let database = {}

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
  if (database) setupBeerTable()
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

function setupBeerTable() {
  Object.keys(database).map(x => {
    if (!isNaN(x)) {
      const beer = database[x]
      const row = $('<tr>')
      const name = $('<td>').text(beer.beer)
      const brewery = $('<td>').text(beer.brewery)
      const rating = $('<td>').text(beer.rating)
      const buttons = $('<td>')
      const buttonDelete = $('<button>', { type: 'button', class: 'btn btn-warning' })
      const buttonEdit = $('<button>', { type: 'button', class: 'btn btn-info' })
      row.append(name)
      row.append(brewery)
      row.append(rating)
      buttons.append(buttonDelete.text('Delete'))
      buttons.append(buttonEdit.text('Edit'))
      row.append(buttons)
      $('#table-body').append(row)
    }
  })
}
