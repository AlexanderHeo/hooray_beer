/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function buildComponent() {
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
  statsTotal.append(titleTotal).append(valueTotal)

  const statsAverage = $('<div>', { class: 'stats' })
  const titleAverage = $('<span>', { class: 'stat title' }).text('Average Rating:')
  const valueAverage = $('<span>', { class: 'stat value' }).text('4.1')
  statsAverage.append(titleAverage).append(valueAverage)

  const statsHighest = $('<div>', { class: 'stats' })
  const titleHighest = $('<span>', { class: 'stat title' }).text('Highest Rated:')
  const valueHighest = $('<span>', { class: 'stat value' }).text('Best Pale Ale')
  statsHighest.append(titleHighest).append(valueHighest)

  const statsMost = $('<div>', { class: 'stats' })
  const titleMost = $('<span>', { class: 'stat title' }).text('Most Drank:')
  const valueMost = $('<span>', { class: 'stat value' }).text('America Pale')
  statsMost.append(titleMost).append(valueMost)

  statsContainer.append(statsTotal).append(statsAverage).append(statsHighest).append(statsMost)
  colStats.append(statsContainer)

  headerSizer.append(colTitle).append(colStats)

  rowHeader.append(headerSizer)
  container.append(rowHeader)

  const rowBody = $('<div>', { class: 'row' })
  const h4 = $('<h4>', { class: 'table-title' }).text('My Beers List')
  const table = $('<div>', { id: 'table', class: 'table' })
  rowBody.append(h4).append(table)
  container.append(rowBody)

  const addModal = $('<div>', { id: 'addModal', class: 'addModal hide' })
  container.append(addModal)

  const footer = $('<div>', { class: 'footer' })
  const footerButton = $('<button>', { name: 'addButton', id: 'footerPlusButton', class: 'btn btn-success' }).text('ADD')
  footer.append(footerButton)
  container.append(footer)

  $('#body').append(container)
}

function buildTable(beerData) {
  const table = $('#table')

  Object.keys(beerData).map(x => {
    if (!isNaN(x)) {
      const beer = beerData[x]
      const beerContainer = $('<div>', { id: `${beer.id}Container`, class: 'beerContainer toggle' })

      const nameContainer = $('<div>', { class: 'nameContainer' })
      const nameSpan = $('<span>', { class: 'beer' }).text(beer.beer)
      const dotButton = $('<button>', { name: 'dotButton', value: beer.id, type: 'button', class: 'dotButton' }).text('ooo')
      const xButton = $('<button>', { name: 'xButton', value: beer.id, type: 'button', class: 'xButton' }).text('X')
      nameContainer.append(nameSpan).append(dotButton).append(xButton)

      const infoContainer = $('<div>', { class: 'infoContainer' })
      const info = $('<div>', { class: 'info' })
      const breweryRating = $('<div>', { class: 'breweryRating' })
      const brewery = $('<div>', { class: 'brewery' }).text(beer.brewery)
      const rating = $('<div>', { class: 'rating' }).text(beer.rating)
      breweryRating.append(brewery).append(rating)
      const tasting = $('<div>', { class: 'tasting' }).text(beer.tasting)
      info.append(breweryRating).append(tasting)
      const buttons = $('<div>', { class: 'buttons' })
      const buttonDelete = $('<button>', { name: 'delete', value: beer.id, type: 'button', id: 'deleteButton', class: 'btn btn-danger deleteButton' }).text('DELETE')
      const buttonEdit = $('<button>', { name: 'editButton', value: beer.id, type: 'button', id: 'editButton', class: 'btn btn-info editButton' }).text('EDIT')
      buttons.append(buttonEdit).append(buttonDelete)
      infoContainer.append(info).append(buttons)

      beerContainer.append(nameContainer).append(infoContainer)
      table.append(beerContainer)
    }
  })
  $('.dotButton').click(handleBeerClick)
  $('.xButton').click(handleBeerClick)
  $('.editButton').click({ beerData: beerData }, handleButtonClick)
  $('.deleteButton').click(handleButtonClick)
}

function buildModal(action, beerData, value) {
  const addModal = $('#addModal')
  const col = $('<div>', { class: 'col-12 formContainer', id: 'addModalForm' })
  const form = $('<form>')

  const h4 = $('<h4>').text('Add a New Beer')
  const formSectionBeer = $('<div>', { class: 'form-section' })
  const formSectionBrewery = $('<div>', { class: 'form-section' })
  const formSectionRating = $('<div>', { class: 'form-section' })
  const formSectionTasting = $('<div>', { class: 'form-section' })
  const labelBeer = $('<label>', { for: 'beer' }).text('Beer:')
  const inputBeer = $('<input>', { name: 'beer', id: 'inputBeer' })
  const errorBeer = $('<div>', { id: 'beerError', class: 'error errorBeer hide' })
  const labelBrewery = $('<label>').text('Brewery:')
  const inputBrewery = $('<input>', { name: 'brewery', id: 'inputBrewery' })
  const errorBrewery = $('<div>', { id: 'breweryError', class: 'error errorBrewery hide' })
  const labelRating = $('<label>').text('Rating:')
  const inputRating = $('<input>', { name: 'rating', id: 'inputRating' })
  const errorRating = $('<div>', { id: 'ratingError', class: 'error errorRating hide' })
  const labelTasting = $('<label>').text('Tasting:')
  const inputTasting = $('<textarea>', { name: 'tasting', id: 'inputTasting' })
  const errorTasting = $('<div>', { id: 'tastingError', class: 'error errorTasting hide' })

  if (action === 'editButton') {
    const beerToEdit = beerData[value]
    inputBeer.val(beerToEdit.beer)
    inputBrewery.val(beerToEdit.brewery)
    inputRating.val(beerToEdit.rating)
    inputTasting.val(beerToEdit.tasting)
  }

  formSectionBeer.append(labelBeer).append(inputBeer).append(errorBeer)
  formSectionBrewery.append(labelBrewery).append(inputBrewery).append(errorBrewery)
  formSectionRating.append(labelRating).append(inputRating).append(errorRating)
  formSectionTasting.append(labelTasting).append(inputTasting).append(errorTasting)
  form.append(h4).append(formSectionBeer).append(formSectionBrewery).append(formSectionRating).append(formSectionTasting)

  const buttons = $('<div>', { class: 'button-container' })
  let buttonAdd
  if (action === 'editButton') {
    buttonAdd = $('<button>', { name: 'edit', value: value, id: 'edit', type: 'button', class: 'btn btn-primary' }).text('EDIT')
  } else {
    buttonAdd = $('<button>', { name: 'submit', id: 'submitButton', type: 'button', class: 'btn btn-primary' }).text('SUBMIT')
  }
  const buttonCancel = $('<button>', { name: 'cancel', id: 'cancelButton', type: 'button', class: 'btn btn-secondary' }).text('CANCEL')
  buttons.append(buttonAdd).append(buttonCancel)

  form.append(buttons)
  col.append(form)
  addModal.append(col)

  $('#submitButton').click({ action: action }, handleButtonClick)
  $('#edit').click({ action: 'edit' }, handleButtonClick)
  $('#cancelButton').click(handleButtonClick)
  $('#inputBeer').focus(handleInputFocus)
  $('#inputBrewery').focus(handleInputFocus)
  $('#inputRating').focus(handleInputFocus)
  $('#inputTasting').focus(handleInputFocus)
}

function addNewBeerToTable(beerList, beerData) {
  const beer = beerData
  const table = $('#table')
  const beerContainer = $('<div>', { id: `${beer.id}Container`, class: 'beerContainer toggle' })
  const nameContainer = $('<div>', { class: 'nameContainer' })
  const nameSpan = $('<span>').text(beer.beer)
  const dotButton = $('<button>', { name: 'dotButton', value: beer.id, type: 'button', class: 'dotButton' }).text('ooo')
  const xButton = $('<button>', { name: 'xButton', value: beer.id, type: 'button', class: 'xButton' }).text('X')
  nameContainer.append(nameSpan).append(dotButton).append(xButton)

  const infoContainer = $('<div>', { class: 'infoContainer' })
  const info = $('<div>', { class: 'info' })
  const breweryRating = $('<div>', { class: 'breweryRating' })
  const brewery = $('<div>', { class: 'brewery' }).text(beer.brewery)
  const rating = $('<div>', { class: 'rating' }).text(beer.rating)
  breweryRating.append(brewery).append(rating)
  const tasting = $('<div>', { class: 'tasting' }).text(beer.tasting)
  info.append(breweryRating).append(tasting)
  const buttons = $('<div>', { class: 'buttons' })
  const buttonDelete = $('<button>', { name: 'delete', value: beer.id, type: 'button', id: 'deleteButton', class: 'btn btn-danger deleteButton' }).text('DELETE')
  const buttonEdit = $('<button>', { name: 'editButton', value: beer.id, type: 'button', id: 'editButton', class: 'btn btn-info editButton' }).text('EDIT')
  buttons.append(buttonEdit).append(buttonDelete)
  infoContainer.append(info).append(buttons)

  beerContainer.append(nameContainer).append(infoContainer)
  table.append(beerContainer)
  $('.dotButton').click(handleBeerClick)
  $('.xButton').click(handleBeerClick)
  $('.editButton').click({ beerData: beerList }, handleButtonClick)
  $('.deleteButton').click(handleButtonClick)
}

const removeBeerFromTable = id => $(`#${id}Container`).remove()

const editBeerTable = (beerList, beerData) => {
  console.log(beerData)
  const beerRow = $(`#${beerData.id}Container`)
  beerRow.find('.beer').text(beerData.beer)
  beerRow.find('.brewery').text(beerData.brewery)
  beerRow.find('.rating').text(beerData.rating)
  beerRow.find('.tasting').text(beerData.tasting)
}
