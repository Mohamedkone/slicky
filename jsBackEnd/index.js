
const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const db = require('./db');
const path = require('path')

const bodyParser = require('body-parser');



db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3000;
const app = express();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}
// console.log(db)
// app.use() middleware here ^ ///////////////////

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes);



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));