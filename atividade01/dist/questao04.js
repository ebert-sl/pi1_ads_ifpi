"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
function getLinks(url) {
    axios_1.default
        .get(url)
        .then(res => {
        const $ = cheerio_1.default.load(res.data);
        $('a').each((index, element) => {
            const hrefLink = $(element).attr('href');
            console.log(hrefLink);
        });
    })
        .catch(err => console.error(err));
}
getLinks('https://www.freecodecamp.org/news');
