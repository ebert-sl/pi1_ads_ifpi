import axios from 'axios';
import cheerio from 'cheerio';

function getLinks(url: string) {
    axios
        .get(url)
        .then(res => {
            const $ = cheerio.load(res.data);
            $('a').each((index, element) => {
                const hrefLink = $(element).attr('href');
                console.log(hrefLink);
            });
        })
        .catch(err => console.error(err));
}

getLinks('https://www.freecodecamp.org/news');