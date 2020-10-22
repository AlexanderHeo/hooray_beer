require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);
app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/beer-list', (req, res, next) => {
  const beerListSQL = `
		select * from "beers";
	`;
  db.query(beerListSQL)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

app.get('/api/brewery-list', (req, res, next) => {
  const brewerysql = `
		select * from "brewery";
	`;
  db.query(brewerysql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => next(error));
});

// app.post('/api/add-new-beer', (req, res, next) => {
//   const beer = req.body.beer;
//   const breweryName = req.body.brewery;
//   const rating = req.body.rating;
//   const note = req.body.note;
//   const bar = req.body.bar;

//   if (!beer) {
//     return res.status(400).json({
//       error: 'You must enter a beer.'
//     });
//   } else if (!breweryName) {
//     return res.state(400).json({
//       error: 'You must enter a brewery.'
//     });
//   } else if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
//     return res.status(400).json({
//       error: 'Rating must be a number between 1 and 5'
//     });
//   } else if (!note) {
//     return res.status(400).json({
//       error: 'You must enter a note.'
//     });
//   } else if (!bar) {
//     return res.status(400).json({
//       error: 'You must enter a bar.'
//     });
//   }
//   const getBreweryCodeSQL = `
// 		select * from "brewery" where "name" = $1
// 	`;
//   const getBreweryCodeParams = ([breweryName]);

//   db.query(getBreweryCodeSQL, getBreweryCodeParams)
//     .then(result => {
//       let breweryID = null;
//       if (result.rows[0]) {
//         breweryID = result.rows[0].breweryID;
//         console.log('breweryID:', breweryID);
//       } else if (!result.rows[0]) {
//         fetch(`https://api.openbrewerydb.org/breweries/search?query=${breweryName}`)
//           .then(result => result.json())
//           .then(json => console.log('brewery queried:', json));
//       }
//       //   const newBeerSQL = `
//       // 		insert into "beers" ("name", "brewery", "rating", "note", "bar")
//       // 		values ($1, $2, $3, $4, $5)
//       // 		returning *;
//       // `;

//       //   const newBeerParams = ([beer, breweryID, rating, note, bar]);

//     //   db.query(newBeerSQL, newBeerParams)
//     //     .then(result => {
//     //       res.status(200).json(result.rows[0]);
//     //     })
//     //     .catch(error => next(error));
//     })
//     .catch(error => next(error));

// });

app.get('/api/beers', (req, res, next) => {
  const beersql = `
		select "name" from "beers";
	`;
  db.query(beersql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
