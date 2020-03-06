const express = require( 'express');
const app = express();
const path = require('path')

app.use(express.urlencoded( {extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/api/hello', function (req, res) {
    res.send('my api')
});



app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'build/index.html'))
});

app.listen(PORT, function () {
    console.log ('listening')
});
