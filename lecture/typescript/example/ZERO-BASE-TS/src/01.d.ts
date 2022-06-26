declare const enum Language {
    TypeScript = "TS",
    JavaScript = "JS",
    Java = "JAVA",
    Ruby = "RB"
}
declare type LangCode = keyof typeof Language;
declare type LangCode2 = 'TypeScript' | 'JavaScript' | 'Java' | 'Ruby';
declare type Lang = 'TS' | 'JS';
declare function getLang(langCode: LangCode): void;
