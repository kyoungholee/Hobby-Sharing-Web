const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://kyoungholee:asdf1234@jack.9utks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {
     useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true, useFindAndModify: false
 }).then(() => console.log('몽고 디비 연결 성공!!!!'))
 .catch(err => console.log(err))
// const cors = require('cors');
// const router = require('./routers');

app.get('/', (req, res) => res.send("Hello world!!"))

app.listen(port, () => console.log(`Example app listening on port
${port}!`))