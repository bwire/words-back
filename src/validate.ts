import { z } from 'zod';
import { validateRequestBody } from 'zod-express-middleware';
import { Languages } from './types';

// TODO reorganize validators
export const NewWordSchema = z.object({
  word: z.string(),
  translation: z.string(),
  langFrom: z.nativeEnum(Languages),
  langTo: z.nativeEnum(Languages),
});

export const validateNewWord = validateRequestBody(NewWordSchema);