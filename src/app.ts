import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { addNewWord } from './service';
import { validateNewWord } from './validate';
import { WordDTO } from './types';
import { number } from 'zod';

const app = express();
const port = 1748;

app.use(bodyParser.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Checking');
});

app.post('/words', validateNewWord, async (req: Request, res: Response) => {
  try {
    const newData: WordDTO = await addNewWord(req.body);
    res.send(JSON.stringify(newData));     
  } catch (error: unknown) {
    // TODO process error normally!!
    res.status(400).send((error as Error).message);
  }
})

app.listen(port, () => {
  return console.log(`Words server is listening at http://localhost:${port}`);
});