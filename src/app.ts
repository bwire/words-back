import express from 'express';
import bodyParser from 'body-parser';
import { addNewWord } from './service';

const app = express();
const port = 1748;

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Checking');
});

app.post('/words', async (req, res) => {
  const newData = await addNewWord(req.body);
  res.send(JSON.stringify(newData));
})

app.listen(port, () => {
  return console.log(`Words server is listening at http://localhost:${port}`);
});