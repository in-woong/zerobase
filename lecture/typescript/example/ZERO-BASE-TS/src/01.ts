const enum Language {
  TypeScript = 'TS',
  JavaScript = 'JS',
  Java = 'JAVA',
  Ruby = 'RB',
}

type LangCode = keyof typeof Language;

type LangCode2 = 'TypeScript' | 'JavaScript' | 'Java' | 'Ruby';

type Lang = 'TS' | 'JS';

function getLang(langCode: LangCode) {
  console.log(langCode);
}
getLang('Java');
