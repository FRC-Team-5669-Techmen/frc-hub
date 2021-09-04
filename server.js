const express = require('express')
const path = require('path')

const app = express()

const publicDir = path.join(__dirname, 'public')

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')))

app.listen(3000, () => console.log('Listening on port http://localhost:3000/'))