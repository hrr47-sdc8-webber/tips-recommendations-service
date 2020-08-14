const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 6070;

app.use(express.json());

app.get('/api/tips/:id', (req, res) => {
  const restaurantId = req.params.id;

  db.getRestaurantInfo(restaurantId, (error, data) => {
    if (error) {
      console.log('Error at server/restaurants GET request');
    } else {
      console.log('Successful server/restaurants GET request');
      console.log(data);
      res.send(data);
    }
  });
});

app.get('/api/articles/:id', (req, res) => {
  db.getRestaurantArticles((error, data) => {
    if (error) {
      console.log('Error at server/articles GET request');
    } else {
      console.log('Successful server/articles GET request');
      console.log(data);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
