async function addNewBeer(beerData) {
  const idCheckResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await idCheckResponse.json()
  if (data) {
    const dataCopy = Object.assign({}, data)
    const beerId = dataCopy.currentId++
    beerData.id = beerId
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

const deleteBeer = async id => {
  console.log('deleteBeer', id)
  const getResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const getData = await getResponse.json()
  delete getData[id]
  const patchRes = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getData)
  })
  const patchData = await patchRes.json()
  if (patchData) removeBeerFromTable(id)
}
