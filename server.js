const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/listings/:listingId', express.static(path.join(__dirname, 'public')));

// booking module
app.get('/listings/:listingId/booking*', (req, res) => {
  res.redirect(`http://localhost:3001${req.url}`);
});

// description module
app.get('/listings/:listingId/overview', (req, res) => {
  res.redirect(`http://localhost:3002${req.url}`);
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  res.redirect(`http://localhost:3002${req.url}`);
});

// reviews module
app.get('/listings/:listingId/reviews', (req, res) => {
  res.redirect(`http://localhost:3003${req.url}`);
});

app.get('/listings/:listingId/overviews', (req, res) => {
  res.redirect(`http://localhost:3003${req.url}`);
});

// image module
app.get('/listings/:listingId/pictures', (req, res) => {
  res.redirect(`http://localhost:3004${req.url}`);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
