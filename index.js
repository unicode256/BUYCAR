const express = require('express');
const app = express();
const path = require('path')
const lqip = require('lqip');

const file = 'public/img/DRIVECLUB™_20191024204336.jpg'; 

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/ad', (req, res) => {
    console.log(123);
    res.sendFile(path.join(__dirname + '/public/ad.html'));

    lqip.base64(file).then(res => {
        console.log(res);
    });
});

app.get('/cars', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/cars.html'));   
});

app.get('/ads', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/ads.html'));   
});

app.get('/favorites', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/favorites.html'));   
});

app.get('/notifications', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/notifications.html'));   
});

app.get('/dialogs', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/dialogs.html'));   
});

app.get('/settings', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/settings.html'));   
});

































































































app.get('/add', (req, res) => {
    console.log(333);
    res.sendFile(path.join(__dirname + '/public/add.html'));   
});

app.listen(port, () => {
    console.log(`Express web app available at localhost: ${port}`);
});  