function missingInput(input) {
  console.log(input)
  $(`#input${input.charAt(0).toUpperCase()}${input.slice(1)}`).addClass('invalid')
  $(`#${input}Error`).removeClass('hide')
}

function inputValidator(input) {
  console.log(input)
}
