$(document).ready(initializeApp)

let database = {}
function initializeApp() {
  buildComponent()
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
  if (database) buildTable()
}

function footerButtonClicked() {
  toggleButton()
  toggleModal()
}

function toggleButton() {
  const button = $('#footerPlusButton')
  if (button.text() === 'ADD') button.text('CLOSE')
  else button.text('ADD')
}

function toggleModal() {
  const addModal = $('#addModal')
  addModal.toggleClass('hide')
  const classList = $('#addModal').attr('class')
  if (classList.split(' ')[1] === 'hide') {
    takedownAddModal()
  } else {
    buildModal()
  }
}
function takedownAddModal() {
  // console.log('take down')
  $('#addModal').empty()
}
