/* eslint-disable no-undef */
async function beerDB(action, beerData, id) {
  const getResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const getData = await getResponse.json()
  if (getData) {
    const beerList = Object.assign({}, getData)

    if (action === 'delete') {
      delete beerList[id]
    }

    if (action === 'submit') {
      const beerId = beerList.currentId++
      beerData.id = beerId
      beerList[beerId] = beerData
      $('#inputBeer').val('')
      $('#inputBrewery').val('')
      $('#inputRating').val('')
      $('#inputTasting').val('')

    } else if (action === 'edit') {
      beerData.id = id
      beerList[id] = beerData
    }

    const putResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(beerList)
    })
    const putData = await putResponse.json()
    if (putData) {
      if (action === 'submit') addNewBeerToTable(beerList, beerData)
      else if (action === 'delete') removeBeerFromTable(id)
      else if (action === 'edit') editBeerTable(beerList, beerData)
    }
  }
}
