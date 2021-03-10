function buildComponent() {
  const container = $('<div>', { class: 'container-fluid container' })
  const rowHeader = $('<div>', { class: 'row' })
  const headerSizer = $('<div>', { class: 'header-sizer' })
  const colTitle = $('<div>', { class: 'col-xl-7 col-lg-7 col-md-7 col-sm-6 col-12 app-title-container' })
  const h1 = $('<h1>', { class: 'app-title' })
  const h1Span = $('<span>').text('Hooray Beer!')
  h1.append(h1Span)
  colTitle.append(h1)

  const colStats = $('<div>', { class: 'col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12' })
  const statsContainer = $('<div>', { class: 'stats-container' })

  const statsTotal = $('<div>', { class: 'stats' })
  const titleTotal = $('<span>', { class: 'stat title' }).text('Total Beers:')
  const valueTotal = $('<span>', { class: 'stat value' }).text('99')
  statsTotal.append(titleTotal)
  statsTotal.append(valueTotal)

  const statsAverage = $('<div>', { class: 'stats' })
  const titleAverage = $('<span>', { class: 'stat title' }).text('Average Rating:')
  const valueAverage = $('<span>', { class: 'stat value' }).text('4.1')
  statsAverage.append(titleAverage)
  statsAverage.append(valueAverage)

  const statsHighest = $('<div>', { class: 'stats' })
  const titleHighest = $('<span>', { class: 'stat title' }).text('Highest Rated:')
  const valueHighest = $('<span>', { class: 'stat value' }).text('Best Pale Ale')
  statsHighest.append(titleHighest)
  statsHighest.append(valueHighest)

  const statsMost = $('<div>', { class: 'stats' })
  const titleMost = $('<span>', { class: 'stat title' }).text('Most Drank:')
  const valueMost = $('<span>', { class: 'stat value' }).text('America Pale')
  statsMost.append(titleMost)
  statsMost.append(valueMost)

  statsContainer.append(statsTotal)
  statsContainer.append(statsAverage)
  statsContainer.append(statsHighest)
  statsContainer.append(statsMost)
  colStats.append(statsContainer)

  headerSizer.append(colTitle)
  headerSizer.append(colStats)

  rowHeader.append(headerSizer)
  container.append(rowHeader)

  const rowBody = $('<div>', { class: 'row' })
  const h4 = $('<h4>', { class: 'table-title' }).text('My Beers List')
  const table = $('<table>', { id: 'table' })
  rowBody.append(h4)
  rowBody.append(table)
  container.append(rowBody)

  const addModal = $('<div>', { id: 'addModal', class: 'addModal hide' })
  container.append(addModal)

  const footer = $('<div>', { class: 'footer' })
  const buttonFooter = $('<button>', { id: 'footerPlusButton' }).text('ADD')
  footer.append(buttonFooter)
  container.append(footer)

  $('#body').append(container)

}
