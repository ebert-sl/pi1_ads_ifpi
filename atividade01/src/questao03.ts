import axios from 'axios';
import * as fs from 'fs';

function downloadImage(url: string, filename: fs.PathOrFileDescriptor) {
  axios
    .get(url, { responseType: 'arraybuffer' })
    .then(response => {
      fs.writeFile(filename, response.data, (err) => {
        if (err) throw err;
        console.log('Download realizado com sucesso!');
      });
    })
    .catch(err => console.error(err));
}

downloadImage('https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png', '../images/image.png');