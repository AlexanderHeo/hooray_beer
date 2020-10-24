/* eslint-disable no-tabs */
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

// get My Beers List
app.get('/api/beer-list', (req, res, next) => {
  const beerListSQL = `
		select "br"."name" as "brewery",
					 "be"."name",
					 "be"."rating",
					 "be"."note",
					 "be"."bar",
					 "be"."beerID"
		from "beers" as "be"
		join "brewery" as "br" using ("breweryID")
	`;
  db.query(beerListSQL)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

// get My Breweries List
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

// add new Brewery
app.post('/api/add-new-brewery', (req, res, next) => {
  const addBrewerySQL = `
		insert into "brewery" ("breweryID", "name", "city", "state", "link")
		values ($1, $2, $3, $4, $5)
		returning *;
	`;
  const addBreweryParams = ([
		`${req.body.breweryID}`, `${req.body.name}`, `${req.body.city}`, `${req.body.state}`, `${req.body.link}`
  ]);
  db.query(addBrewerySQL, addBreweryParams)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

// add new Beer
app.post('/api/add-new-beer', (req, res, next) => {
  const addBeerSQL = `
		insert into "beers" ("name", "breweryID", "rating", "note", "bar")
		values ($1, $2, $3, $4, $5)
		returning *;
	`;
  const addBeerParams = ([
		`${req.body.name}`, `${req.body.brewery}`, `${req.body.rating}`, `${req.body.note}`, `${req.body.bar}`
  ]);
  db.query(addBeerSQL, addBeerParams)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

// remove Beer
app.delete('/api/remove-beer/:beerID', (req, res, next) => {
  const { beerID } = req.params;
  const removeBeerSQL = `
		delete from "beers"
		where "beerID" = $1
		returning *;
	`;
  const removeBeerParams = [beerID];
  db.query(removeBeerSQL, removeBeerParams)
    .then(result => {
      const removedBeer = result.rows[0];
      if (!removedBeer) {
        res.status(404).json({ error: `Cannot find beer at id ${beerID}` });
      } else {
        res.status(204).json(removedBeer);
      }
    })
    .catch(error => next(error));
});

// edit Beer
app.patch('/api/beer-edit/:beerID', (req, res, next) => {
  const { beerID } = req.params;
  console.log(beerID);
  const beerPatchSQL = `
		update "beers"
		set "rating" = $1, "note" = $2, "bar" =$3
		where "beerID" = $4
		returning *;
	`;
  const beerPatchParams = ([req.body.rating, req.body.note, req.body.bar, beerID]);
  db.query(beerPatchSQL, beerPatchParams)
    .then(result => {
      console.log(result.rows[0]);
      res.status(200).json(result.rows[0]);
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
