import axios from 'axios';

axios
    .get('http://webcode.me')
    .then(resp => {
    console.log("Status: " + resp.status, resp.statusText);
    console.log("\nHeaders:\n" + resp.headers);
    console.log("\nData:\n" + resp.data);
});