const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));


app.get('/', (req, res) => {
    res.render('main');
});

app.listen(3000, () => {
    console.log('Server connected');
});
