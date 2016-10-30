'use strict';

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const socketEvents = require('./socketEvents');

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/api/photos', (req, res, next) => {
    fs.readdir(__dirname + '/public/uploads/', (err, photos) => {
        if (err) return next(err);
        res.status(200).json({photos});
    });
});

app.get('/', function (req, res, next) {
    fs.readdir(__dirname + '/public/uploads/', function (err, files) {
        if (err) return next(err);
        res.render('index', {images: files.reverse()});
    });
});

socketEvents(io);

http.listen(PORT, function () {
    console.log('Server has started on port ' + PORT);
});