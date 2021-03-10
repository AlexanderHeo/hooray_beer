$(document).ready(initializeApp)

let database = {}

function initializeApp() {
  addClickHandlers()
  getBeerList()
}

function addClickHandlers() {
  $('#footerPlusButton').on('click', footerButtonClicked)
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

function footerButtonClicked() {
  toggleButton()
  toggleModal()
}

function toggleButton() {
  const button = $('#footerPlusButton')
  if (button.text() === 'ADD') {
    button.text('CLOSE')
  } else {
    button.text('ADD')
  }
}

function toggleModal() {
  const addModal = $('#addModal')
  addModal.toggleClass('hide')
  const classList = $('#addModal').attr('class')
  if (classList.split(' ')[1] === 'hide') {
    takedownAddModal()
  } else {
    setupAddModal()
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

function takedownAddModal() {
  // console.log('take down')
  $('#addModal').empty()
}

function setupAddModal() {
  // console.log('setup')
  const div = $('<div>')
  $('#addModal').append(div)
  const col = $('<div>', { class: 'col-lg-4 col-md-12 col-sm-12 formContainer', id: 'addModalForm' })
  const form = $('<form>')
  const h4 = $('<h4>').text('Add a New Beer')
  const formSectionBeer = $('<div>', { class: 'form-section' })
  const formSectionBrewery = $('<div>', { class: 'form-section' })
  const formSectionRating = $('<div>', { class: 'form-section' })
  const formSectionTasting = $('<div>', { class: 'form-section' })
  const labelBeer = $('<label>').text('Beer:')
  const inputBeer = $('<input>')
  const labelBrewery = $('<label>').text('Brewery:')
  const inputBrewery = $('<input>')
  const labelRating = $('<label>').text('Rating:')
  const inputRating = $('<input>')
  const labelTasting = $('<label>').text('Tasting:')
  const inputTasting = $('<textarea>')
  const buttons = $('<div>', { class: 'button-container' })
  const buttonAdd = $('<button>', { type: 'button', class: 'btn btn-primary' }).text('ADD')
  const buttonCancel = $('<button>', { type: 'button', class: 'btn btn-secondary' }).text('CANCEL')
  formSectionBeer.append(labelBeer)
  formSectionBeer.append(inputBeer)
  formSectionBrewery.append(labelBrewery)
  formSectionBrewery.append(inputBrewery)
  formSectionRating.append(labelRating)
  formSectionRating.append(inputRating)
  formSectionTasting.append(labelTasting)
  formSectionTasting.append(inputTasting)
  buttons.append(buttonAdd)
  buttons.append(buttonCancel)
  form.append(h4)
  form.append(formSectionBeer)
  form.append(formSectionBrewery)
  form.append(formSectionRating)
  form.append(formSectionTasting)
  form.append(buttons)
  col.append(form)
  $('#addModal').append(col)
}
