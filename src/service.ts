import { readFile, writeFile } from 'fs/promises';
import { NewWordPayload, WordDTO } from "./types";

export async function addNewWord(payload: NewWordPayload): Promise<WordDTO> {
    const dto = getNewWordInfoFromRequest(payload);
    const content = await readFile('data/ru-en.json', { encoding: 'utf-8'});

    const records: WordDTO[] = JSON.parse(content);
    if (records.find(r => r.word === dto.word)) {
        throw new Error(`The word '${dto.word}' already exists in the learning list!`);
    }
    records.push(dto);

    await writeFile('data/ru-en.json', JSON.stringify(records));
    return dto;
}

function getNewWordInfoFromRequest(payload: NewWordPayload): WordDTO {
    // const localeOptions: Intl.DateTimeFormatOptions = { 
    //     weekday: 'long', 
    //     year: 'numeric', 
    //     month: 'short', 
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric', 
    // };
    const dateString = new Date().toISOString();
    return {
        word: payload.word, 
        translation: payload.translation,
        successAttempts: 0,
        failedAttempts: 0,
        created: dateString,
        updated: dateString,
    }
}