
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
// function deleteBeer() { console.log('deleteBeer..........') }
const deleteBeer = async id => {
  const getResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  const getData = await getResponse.json()
  console.log(getData[id])
  delete getData[id]
  console.log(getData)
  const patchRes = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getData)
  })
  const patchData = await patchRes.json()
  breakdownTable()
  buildTable(patchData)

}