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
app.get('/api/beer', (req, res, next) => {
  const beerListSQL = `
		select "br"."name" as "brewery",
					 "br"."breweryID",
					 "be"."name",
					 "be"."rating",
					 "be"."note",
					 "be"."bar",
					 "be"."beerID"
		from "beers" as "be"
		join "brewery" as "br" using ("breweryID")
		order by "be"."beerID"
	`;
  db.query(beerListSQL)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

// get My Breweries List
app.get('/api/brewery', (req, res, next) => {
  const brewerysql = `
		select * from "brewery"
		order by "breweryID";
	`;
  db.query(brewerysql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => next(error));
});

// add new Brewery
app.post('/api/brewery', (req, res, next) => {
  const breweryID = req.body.breweryID;
  const name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const link = req.body.link;

  if (!breweryID || !name || !city || !state || !link) {
    next(new ClientError('Please complete the form before submitting.', 400));
    return;
  } else if (isNaN(breweryID)) {
    next(new ClientError('Error with Brewery ID. Please contact web master.', 400));
  }

  const addBrewerySQL = `
		insert into "brewery" ("breweryID", "name", "city", "state", "link")
		values ($1, $2, $3, $4, $5)
		returning *;
	`;
  const addBreweryParams = ([
    breweryID, name, city, state, link
  ]);
  db.query(addBrewerySQL, addBreweryParams)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

// add new Beer
app.post('/api/beer', (req, res, next) => {
  const name = req.body.name;
  const breweryID = req.body.breweryID;
  const rating = req.body.rating;
  const note = req.body.note;
  const bar = req.body.bar;

  if (!name || !breweryID || !rating || !note || !bar) {
    next(new ClientError('Please complete form before submitting', 400));
  } else if (isNaN(breweryID)) {
    next(new ClientError('Error with Brewery ID. Please contact web master', 400));
  }

  const addBeerSQL = `
		insert into "beers" ("name", "breweryID", "rating", "note", "bar")
		values ($1, $2, $3, $4, $5)
		returning *;
	`;
  const addBeerParams = ([
    name, breweryID, rating, note, bar
  ]);
  db.query(addBeerSQL, addBeerParams)
    .then(result => res.status(200).json(result.rows))
    .catch(error => {
      next(error);
    });
});

// remove Beer
app.delete('/api/beer/:beerID', (req, res, next) => {
  const { beerID } = req.params;
  if (isNaN(beerID)) {
    next(new ClientError('Beer ID must be a number', 400));
  } else if (!beerID) {
    next(new ClientError('Beer ID is required', 400));
  }
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
app.patch('/api/beer/:beerID', (req, res, next) => {
  const { beerID } = req.params;
	  if (isNaN(beerID)) {
    next(new ClientError('Beer ID must be a number', 400));
  } else if (!beerID) {
    next(new ClientError('Beer ID is required', 400));
  }
  const beerPatchSQL = `
		update "beers"
		set "rating" = $1, "note" = $2, "bar" =$3
		where "beerID" = $4
		returning *;
	`;
  const beerPatchParams = ([req.body.rating, req.body.note, req.body.bar, beerID]);
  db.query(beerPatchSQL, beerPatchParams)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(error => next(error));
});

// remove Brewery
app.delete('/api/brewery/:breweryID', (req, res, next) => {
  const { breweryID } = req.params;
	  if (isNaN(breweryID)) {
    next(new ClientError('Brewery ID must be a number', 400));
  } else if (!breweryID) {
    next(new ClientError('Brewery ID is required', 400));
  }
  const removeBrewerySQL = `
		delete from "brewery"
		where "breweryID" = $1
		returning *;
	`;
  const removeBreweryParams = [breweryID];
  db.query(removeBrewerySQL, removeBreweryParams)
    .then(result => {
      const removedBrewery = result.rows[0];
      if (!removedBrewery) {
        res.status(404).json({ error: `Cannot find brewery at id ${breweryID}` });
      } else {
        res.status(204).json(removedBrewery);
      }
    })
    .catch(error => next(error));
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
