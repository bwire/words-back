import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 1748;

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Checking');
});

app.post('/words', (req, res) => {
  console.log(req.body);

  res.send(JSON.stringify(req.body));
})

app.listen(port, () => {
  return console.log(`Words server is listening at http://localhost:${port}`);
});