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
  headerSizer.append(colTitle)
  rowHeader.append(headerSizer)

  const rowBody = $('<div>', { class: 'row' })
  const h4 = $('<h4>', { class: 'table-title' }).text('My Beers List')
  const table = $('<div>', { id: 'table', class: 'table' })
  rowBody.append(h4).append(table)

  const addModal = $('<div>', { id: 'addModal', class: 'addModal hide' })

  const footer = $('<div>', { class: 'footer' })
  const footerButton = $('<button>', { name: 'addButton', id: 'footerPlusButton', class: 'btn btn-success' }).text('ADD')
  footer.append(footerButton)

  container.append(rowHeader).append(rowBody).append(addModal).append(footer)
  $('#body').append(container)
}

function buildStats(beerList) {
  const headerSizer = $('.header-sizer')
  const colStats = $('<div>', { class: 'col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12' })
  const total = Object.keys(beerList).filter(x => !isNaN(x)).length
  const sumArr = []
  Object.keys(beerList).forEach(x => {
    const rating = beerList[x].rating
    if (!isNaN(rating)) {
      sumArr.push(rating)
    }
  })
  const sum = sumArr.reduce((a, b) => parseInt(a) + parseInt(b))
  const avg = sum / total
  const toSortPlus = Object.assign({}, beerList)
  const sortedPlus = Object.keys(toSortPlus) // .sort((beerList[a], beerList[b]) => {
  //   if (!isNaN(a)) {
  //     console.log(b, a)
  //     console.log(beerList[b].rating, beerList[a].rating)
  //     console.log('----------------------------')
  //     return parseInt(beerList[b].rating) - parseInt(beerList[a].rating)
  //   }
  // })
  const sorted = []
  sortedPlus.forEach(x => {
    if (!isNaN(x)) {
      sorted.push(toSortPlus[x])
    }
  })
  sorted.sort((a, b) => parseInt(b.rating) - parseInt(a.rating))
  console.log(sorted)
  console.log(sorted[0].beer)
  console.log(sorted[Object.keys(sorted)[Object.keys(sorted).length - 1]].beer)
  const statsContainer = $('<div>', { class: 'stats-container' })
  const statsTotal = $('<div>', { class: 'stats' })
  const titleTotal = $('<span>', { class: 'stat title' }).text('Total Beers:')
  const valueTotal = $('<span>', { class: 'stat value' }).text(total)
  statsTotal.append(titleTotal).append(valueTotal)
  const statsAverage = $('<div>', { class: 'stats' })
  const titleAverage = $('<span>', { class: 'stat title' }).text('Average Rating:')
  const valueAverage = $('<span>', { class: 'stat value' }).text(avg)
  statsAverage.append(titleAverage).append(valueAverage)
  const statsHighest = $('<div>', { class: 'stats' })
  const titleHighest = $('<span>', { class: 'stat title' }).text('Highest Rated:')
  const valueHighest = $('<span>', { class: 'stat value' }).text(sorted[0].beer)
  statsHighest.append(titleHighest).append(valueHighest)
  const statsLowest = $('<div>', { class: 'stats' })
  const titleLowest = $('<span>', { class: 'stat title' }).text('Lowest Rated:')
  const valueLowest = $('<span>', { class: 'stat value' }).text(sorted[Object.keys(sorted)[Object.keys(sorted).length - 1]].beer)
  statsLowest.append(titleLowest).append(valueLowest)
  statsContainer.append(statsTotal).append(statsAverage).append(statsHighest).append(statsLowest)

  colStats.append(statsContainer)
  headerSizer.append(colStats)
}

function buildTable(beerList) {
  const table = $('#table')

  Object.keys(beerList).map(x => {
    if (!isNaN(x)) {
      const beer = beerList[x]
      const beerContainer = $('<div>', { id: `${beer.id}`, class: 'beerContainer toggle' })

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
}

function buildModal(action, beerList, value) {
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
    const beerToEdit = beerList[value]
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

const resetTable = () => {
  $('#table').off('click')
  $('#table').empty()
  $('.header-sizer').find('div:nth-child(2)').remove()
  getBeerList()
}
