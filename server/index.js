const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/easterEgg', (req, res) => {
  res.send(`<head><title>Wow, this worked?</title></head><body><div>He dies at the end :P</div></body>`);
});

app.listen(PORT, () => {
  console.log(`App is listening on: ${PORT}`);
});