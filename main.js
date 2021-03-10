$(document).ready(initializeApp)

let database = {}

function initializeApp() {
  setupContainer()
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

function setupContainer() {
  const container = $('<div>', { class: 'container-fluid container' })
  const rowHeader = $('<div>', { class: 'row' })
  const headerSizer = $('<div>', { class: 'header-sizer' })
  const colTitle = $('<div>', { class: 'col-xl-7 col-lg-7 col-md-7 col-sm-6 col-12 app-title-container' })
  const h1 = $('<h1>', { class: 'app-title' })
  const h1Span = $('<span>').text('Hooray Beer!')
  h1.append(h1Span)
  colTitle.append(h1)

  const colStats = $('<div>', { class: 'col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12' })
  const statsContainer = $('<div>', { class: 'stats-container' })

  const statsTotal = $('<div>', { class: 'stats' })
  const titleTotal = $('<span>', { class: 'stat title' }).text('Total Beers:')
  const valueTotal = $('<span>', { class: 'stat value' }).text('99')
  statsTotal.append(titleTotal)
  statsTotal.append(valueTotal)

  const statsAverage = $('<div>', { class: 'stats' })
  const titleAverage = $('<span>', { class: 'stat title' }).text('Average Rating:')
  const valueAverage = $('<span>', { class: 'stat value' }).text('4.1')
  statsAverage.append(titleAverage)
  statsAverage.append(valueAverage)

  const statsHighest = $('<div>', { class: 'stats' })
  const titleHighest = $('<span>', { class: 'stat title' }).text('Highest Rated:')
  const valueHighest = $('<span>', { class: 'stat value' }).text('Best Pale Ale')
  statsHighest.append(titleHighest)
  statsHighest.append(valueHighest)

  const statsMost = $('<div>', { class: 'stats' })
  const titleMost = $('<span>', { class: 'stat title' }).text('Most Drank:')
  const valueMost = $('<span>', { class: 'stat value' }).text('America Pale')
  statsMost.append(titleMost)
  statsMost.append(valueMost)

  statsContainer.append(statsTotal)
  statsContainer.append(statsAverage)
  statsContainer.append(statsHighest)
  statsContainer.append(statsMost)
  colStats.append(statsContainer)

  headerSizer.append(colTitle)
  headerSizer.append(colStats)

  rowHeader.append(headerSizer)
  container.append(rowHeader)

  const rowBody = $('<div>', { class: 'row' })
  const h4 = $('<h4>', { class: 'table-title' }).text('My Beers List')
  const table = $('<table>', { id: 'table' })
  rowBody.append(h4)
  rowBody.append(table)
  container.append(rowBody)

  const addModal = $('<div>', { id: 'addModal', class: 'addModal hide' })
  container.append(addModal)

  const footer = $('<div>', { class: 'footer' })
  const buttonFooter = $('<button>', { id: 'footerPlusButton' }).text('ADD')
  footer.append(buttonFooter)
  container.append(footer)

  $('#body').append(container)

}

function setupBeerTable() {
  const thead = $('<thead>')
  const trHead = $('<tr>')
  const thBeer = $('<th>').text('Beer')
  const thBrewery = $('<th>').text('Brewery')
  const thRating = $('<th>').text('Rating')
  const thOperations = $('<th>').text('Operations')
  trHead.append(thBeer)
  trHead.append(thBrewery)
  trHead.append(thRating)
  trHead.append(thOperations)
  thead.append(trHead)
  const tbody = $('<tbody>')
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
      tbody.append(row)
    }
  })
  $('#table').append(thead)
  $('#table').append(tbody)
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
