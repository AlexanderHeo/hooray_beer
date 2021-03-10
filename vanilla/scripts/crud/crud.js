
async function addNewBeer(beerData) {
  const idCheckResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await idCheckResponse.json()
  if (data) {
    const dataCopy = Object.assign({}, data)
    const beerId = dataCopy.currentId++
    dataCopy[beerId] = beerData
    $('#inputBeer').val('')
    $('#inputBrewery').val('')
    $('#inputRating').val('')
    $('#inputTasting').val('')

    const addResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataCopy)
    })
    const addedData = await addResponse.json()
    if (addedData) addNewBeerToTable(beerData)
  }
}
