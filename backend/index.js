const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');

// 클라이언트에서 오는 정보를 서버에서 분석해서 보내거나
// 가지고 있다.

const {User} = require("./models/User");


// application/x-www-form-urlencoded 형태로 가져온다. 
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}))


//애플리케이션/json 형태를 가져온다.
//app.use(bodyParser.json());
app.use(express.json());

// const cors = require('cors');
// const router = require('./routers');



mongoose.connect('mongodb+srv://kyoungholee:asdf1234@jack.9utks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {
    //useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true, useFindAndModify: false
 }).then(() => console.log('몽고 디비 연결 성공!!!!'))
 .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello world!!"))


//post 방식 즉 서버에게 데이터 정보를 보낸다. 
app.post('/register', (req, res) => {



    // 회원가입 할때 필요한 정보들을 client에 있는 User정보를 가져오면
    //그것들을 DB에 넣어준다. 

    //인스턴스 생성 
    const user = new User(req.body)
    /** 
     * req.body 안에는 User에 대한 정보가 들어가 있다.
     * {
     *      id : "kyoungholee",
     *      password : "1234",
     *      email : "asdsdk@naver.com"
     * }
     * 같은 형식으로 
        */


    // DB에 넣어주고 저장해준다. 
    user.save((err, userInfo) => {
        //json 형태로 에러를 전달 !!
        if(err) return res.json({ success : false, err})

        //성공 했다는 의미 (200이 성공의 의미 !!)
        return res.status(200).json({ 
            success : true
        })
    })

})


app.listen(port, () => console.log(`Example app listening on port
${port}!`))
