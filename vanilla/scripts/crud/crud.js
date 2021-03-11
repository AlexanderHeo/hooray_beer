async function beerList(beerData, action) {
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
      delete dataCopy[beerData]

    } else if (action === 'edit') {
      const beer = dataCopy[beerData].beer
      const brewery = dataCopy[beerData].brewery
      const id = dataCopy[beerData].id
      const rating = dataCopy[beerData].rating
      const tasting = dataCopy[beerData].tasting
      console.log(beer, brewery, id, rating, tasting)
      // const beerElement = $('td:nth-child(1)', `#${beerData}`).text()
      // const breweryElement = $('td:nth-child(1)', `#${breweryData}`).text()
      // const ratingElement = $('td:nth-child(1)', `#${ratingData}`).text()
      // const beerElement = $('td:nth-child(1)', `#${beerData}`).text()
    }

    // const putResponse = await fetch('https://hooraybeer-d468f-default-rtdb.firebaseio.com/beers.json', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(dataCopy)
    // })
    // const putData = await putResponse.json()
    // if (putData) {
    //   if (action === 'submit') addNewBeerToTable(beerData)
    //   else if (action === 'delete') removeBeerFromTable(beerData)
    //   else if (action === 'edit') editBeerTable(beerData)
    // }
  }
}
