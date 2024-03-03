"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
function getWord(url, word) {
    axios_1.default
        .get(url)
        .then(res => {
        const $ = cheerio_1.default.load(res.data);
        $('h2').each((index, element) => {
            const text = $(element).text();
            if (text.includes(word)) {
                const words = text.split(' ');
                const wordIndex = words.indexOf(word);
                const startIndex = Math.max(0, wordIndex - 10);
                const endIndex = Math.min(words.length - 1, wordIndex + 10);
                const contextWords = words.slice(startIndex, endIndex + 1);
                console.log(contextWords.join(' '));
            }
        });
    })
        .catch(err => console.error(err));
}
getWord('https://www.freecodecamp.org/news', 'React');
