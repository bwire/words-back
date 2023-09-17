export enum Languages { 'en', 'ru'};

export interface NewWordPayload {
  word: string,
  translation: string;
  langFrom: Languages;
  langTo: Languages;
}

export interface WordDTO {
  word: string,
  translation: string,
  successAttempts: number,
  failedAttempts: number,
  created: string,
  updated: string,   
}