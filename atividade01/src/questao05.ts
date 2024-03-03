import axios from 'axios';
import cheerio from 'cheerio';

function getWord(url: string, word: string) {
    axios
        .get(url)
        .then(res => {
            const $ = cheerio.load(res.data);
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