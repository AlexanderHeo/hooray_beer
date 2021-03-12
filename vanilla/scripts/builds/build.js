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
  const table = $('<div>', { id: 'table', class: 'table' })
  rowBody.append(h4)
  rowBody.append(table)
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
  // console.log(beerData)

  Object.keys(beerData).map(x => {
    if (!isNaN(x)) {
      const beer = beerData[x]
      const beerContainer = $('<div>', { class: 'beerContainer' })

      const nameContainer = $('<div>', { class: 'nameContainer' })
      const nameSpan = $('<span>').text(beer.beer)
      const dotContainer = $('<div>', { class: 'dotContainer', id: 'dotContainer' })
      const dot1 = $('<div>', { class: 'dot' })
      const dot2 = $('<div>', { class: 'dot' })
      const dot3 = $('<div>', { class: 'dot' })
      dotContainer.append(dot1).append(dot2).append(dot3)

      const xContainer = $('<div>', { class: 'xContainer', id: 'xContainer' })
      const xBar1 = $('<div>', { class: 'xBar xBar1' })
      const xBar2 = $('<div>', { class: 'xBar xBar2' })
      xContainer.append(xBar1).append(xBar2)

      nameContainer.append(nameSpan).append(dotContainer).append(xContainer)

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

  // const thead = $('<thead>')
  // const trHead = $('<tr>')
  // const thBeer = $('<th>').text('Beer')
  // const thBrewery = $('<th>').text('Brewery')
  // const thRating = $('<th>').text('Rating')
  // const thOperations = $('<th>').text('Operations')
  // trHead.append(thBeer)
  // trHead.append(thBrewery)
  // trHead.append(thRating)
  // trHead.append(thOperations)
  // thead.append(trHead)
  // const tbody = $('<tbody>', { id: 'table-body' })
  // Object.keys(beerData).map(x => {
  //   if (!isNaN(x)) {
  //     const beer = beerData[x]
  //     const row = $('<tr>', { id: beer.id })
  //     const name = $('<td>').text(beer.beer)
  //     const brewery = $('<td>').text(beer.brewery)
  //     const rating = $('<td>').text(beer.rating)
  //     const buttons = $('<td>')
  //     const buttonDelete = $('<button>', { name: 'delete', value: beer.id, type: 'button', id: 'deleteButton', class: 'btn btn-danger deleteButton' })
  //     const buttonEdit = $('<button>', { name: 'editButton', value: beer.id, type: 'button', id: 'editButton', class: 'btn btn-info editButton' })
  //     row.append(name)
  //     row.append(brewery)
  //     row.append(rating)
  //     buttons.append(buttonDelete.text('Delete'))
  //     buttons.append(buttonEdit.text('Edit'))
  //     row.append(buttons)
  //     tbody.append(row)
  //   }
  // })
  // $('#table').append(thead)
  // $('#table').append(tbody)
  // $('.deleteButton').click(handleButtonClick)
  // $('.editButton').click({ beerData: beerData }, handleButtonClick)
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

  formSectionBeer.append(labelBeer)
  formSectionBeer.append(inputBeer)
  formSectionBeer.append(errorBeer)
  formSectionBrewery.append(labelBrewery)
  formSectionBrewery.append(inputBrewery)
  formSectionBrewery.append(errorBrewery)
  formSectionRating.append(labelRating)
  formSectionRating.append(inputRating)
  formSectionRating.append(errorRating)
  formSectionTasting.append(labelTasting)
  formSectionTasting.append(inputTasting)
  formSectionTasting.append(errorTasting)
  form.append(h4)
  form.append(formSectionBeer)
  form.append(formSectionBrewery)
  form.append(formSectionRating)
  form.append(formSectionTasting)

  const buttons = $('<div>', { class: 'button-container' })
  let buttonAdd
  if (action === 'editButton') {
    buttonAdd = $('<button>', { name: 'edit', value: value, id: 'edit', type: 'button', class: 'btn btn-primary' }).text('EDIT')
  } else {
    buttonAdd = $('<button>', { name: 'submit', id: 'submitButton', type: 'button', class: 'btn btn-primary' }).text('SUBMIT')
  }
  const buttonCancel = $('<button>', { name: 'cancel', id: 'cancelButton', type: 'button', class: 'btn btn-secondary' }).text('CANCEL')
  buttons.append(buttonAdd)
  buttons.append(buttonCancel)
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
  const tr = $('<tr>', { id: beerData.id })
  const tdBeer = $('<td>').text(beerData.beer)
  const tdBrewery = $('<td>').text(beerData.brewery)
  const tdRating = $('<td>').text(beerData.rating)
  const tdButtons = $('<td>')
  const buttonDelete = $('<button>', { name: 'delete', value: beerData.id, type: 'button', id: 'deleteButton', class: 'btn btn-danger deleteButton' }).text('Delete')
  const buttonEdit = $('<button>', { name: 'editButton', value: beerData.id, type: 'button', id: 'editButton', class: 'btn btn-info editButton' }).text('Edit')
  tdButtons.append(buttonDelete).append(buttonEdit)
  tr.append(tdBeer)
  tr.append(tdBrewery)
  tr.append(tdRating)
  tr.append(tdButtons)
  $('#table-body').append(tr)
  $('.deleteButton').click(handleButtonClick)
  $('.editButton').click({ beerData: beerList }, handleButtonClick)
}

const removeBeerFromTable = id => {
  $(`#${id}`).remove()
}

const editBeerTable = (beerList, beerData) => {
  const beerRow = $(`#${beerData.id}`)
  beerRow.empty()
  const beer = $('<td>').text(beerData.beer)
  const brewery = $('<td>').text(beerData.brewery)
  const rating = $('<td>').text(beerData.rating)
  const buttons = $('<td>')
  const buttonDelete = $('<button>', { name: 'delete', value: beerData.id, type: 'button', id: 'deleteButton', class: 'btn btn-danger deleteButton' }).text('Delete')
  const buttonEdit = $('<button>', { name: 'editButton', value: beerData.id, type: 'button', id: 'editButton', class: 'btn btn-info editButton' }).text('Edit')
  buttons.append(buttonDelete).append(buttonEdit)
  beerRow.append(beer).append(brewery).append(rating).append(buttons)
  $('.deleteButton').click(handleButtonClick)
  $('.editButton').click({ beerData: beerList }, handleButtonClick)
}
