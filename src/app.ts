import express from 'express';
const app = express();
const port = 1748;

app.get('/', (req, res) => {
  res.send('Checking');
});

app.listen(port, () => {
  return console.log(`Words server is listening at http://localhost:${port}`);
});