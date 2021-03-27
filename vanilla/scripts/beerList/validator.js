function missingInput(input) {
  $(`#input${input.charAt(0).toUpperCase()}${input.slice(1)}`).addClass('invalid')
  $(`#${input}Error`).text(`Enter a ${input}`).removeClass('hide')
}

function inputValidator(input) {
  console.log(input)
}
