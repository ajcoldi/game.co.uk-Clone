const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})


let port = 3000 | process.env.port
app.listen(port, () => {
    console.log('listening')
})