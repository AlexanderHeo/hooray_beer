function buildModal() {
  const div = $('<div>')
  $('#addModal').append(div)
  const col = $('<div>', { class: 'col-lg-4 col-md-12 col-sm-12 formContainer', id: 'addModalForm' })
  const form = $('<form>')
  const h4 = $('<h4>').text('Add a New Beer')
  const formSectionBeer = $('<div>', { class: 'form-section' })
  const formSectionBrewery = $('<div>', { class: 'form-section' })
  const formSectionRating = $('<div>', { class: 'form-section' })
  const formSectionTasting = $('<div>', { class: 'form-section' })
  const labelBeer = $('<label>', { for: 'beer' }).text('Beer:')
  const inputBeer = $('<input>', { name: 'beer', id: 'inputBeer' })
  const errorBeer = $('<div>', { id: 'beerError', class: 'error errorBeer hide' }).text('enter beer name')
  const labelBrewery = $('<label>').text('Brewery:')
  const inputBrewery = $('<input>', { id: 'inputBrewery' })
  const labelRating = $('<label>').text('Rating:')
  const inputRating = $('<input>', { id: 'inputRating' })
  const labelTasting = $('<label>').text('Tasting:')
  const inputTasting = $('<textarea>', { id: 'inputTasting' })
  const buttons = $('<div>', { class: 'button-container' })
  const buttonAdd = $('<button>', { name: 'submit', id: 'submitButton', type: 'button', class: 'btn btn-primary' }).text('ADD')
  const buttonCancel = $('<button>', { name: 'cancel', id: 'cancelButton', type: 'button', class: 'btn btn-secondary' }).text('CANCEL')
  formSectionBeer.append(labelBeer)
  formSectionBeer.append(inputBeer)
  formSectionBeer.append(errorBeer)
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

  $('#submitButton').click(handleButtonClick)
  $('#cancelButton').click(handleButtonClick)
  $('#inputBeer').focus(handleInputFocus)
}
