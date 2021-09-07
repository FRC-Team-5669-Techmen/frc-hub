const express = require('express')
const path = require('path')

var port = process.env.PORT || 3000;

const app = express()

const publicDir = path.join(__dirname, 'public')

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')))
app.get('/login', (req, res) => res.sendFile(path.join(publicDir, 'login.html')))

app.listen(3000, () => console.log('Listening on port http://localhost:' + port + "/"))