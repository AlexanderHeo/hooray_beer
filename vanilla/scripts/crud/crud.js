async function beerList(action, beerData, value) {
  const getResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const getData = await getResponse.json()

  if (getData) {
    const dataCopy = Object.assign({}, getData)

    if (action === 'submit') {
      const beerId = dataCopy.currentId++
      beerData.id = beerId
      dataCopy[beerId] = beerData
      $('#inputBeer').val('')
      $('#inputBrewery').val('')
      $('#inputRating').val('')
      $('#inputTasting').val('')

    } else if (action === 'delete') {
      // console.log(dataCopy)
      // console.log(beerData)
      delete dataCopy[beerData]
      // console.log(dataCopy)
    } else if (action === 'edit') {
      beerData.id = value
      dataCopy[value] = beerData
    }

    const putResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataCopy)
    })
    const putData = await putResponse.json()
    if (putData) {
      if (action === 'submit') addNewBeerToTable(dataCopy, beerData)
      else if (action === 'delete') removeBeerFromTable(beerData)
      else if (action === 'edit') editBeerTable(dataCopy, beerData)
    }
  }
}
