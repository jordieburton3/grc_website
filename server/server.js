import express from 'express';
require('dotenv').config({ path: __dirname + '/.env' });

const PORT = process.env.PORT || 5250;

const app = express();

app.get('/', function (req, res) {
	res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
