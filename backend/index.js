const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');

const config = require('./config/key');
const {auth} = require('./middleware/auth')
const {User} = require("./models/User");
const cookieParser = require('cookie-parser')
// const cors = require('cors');
// const router = require('./routers');



app.use(cookieParser());
// application/x-www-form-urlencoded 형태로 가져온다. 
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}))


//애플리케이션/json 형태를 가져온다.
//app.use(bodyParser.json());
app.use(express.json());



mongoose.connect(config.mongoURI,
 {
    //useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true, useFindAndModify: false
 }).then(() => console.log('몽고 디비 연결 성공!!!!'))
 .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello world!!"))


app.get('/api/hello', (req, res) => {
    res.send("안녕하세요~~");
})




//post 방식 즉 서버에게 데이터 정보를 보낸다. 
app.post('/api/user/register', (req, res) => {



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


    

    // DB에 저장 하기 전에 User.js에서 비밀번호 암호화 한 후
    // 저장해준다.!!

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


app.post('/api/user/login', (req, res) => {

    // 1. 요청된 이메일을 DB에서 있는지 찾기 !!

        // 이메일이 있다면 이부분이 실행 !!
    User.findOne({  email: req.body.email}, (err, user) => {
        //(유저)정보가 없을 경우 실행
        if(!user) {
            return res.json({
                loginSuccess: false,
                message : "제공된 이메일에 해당 유저가 없습니다."
            })
        }
        
    // 2. 요청된 이메일이 DB에 있다면 비밀번호도 맞는지 확인!!

        //비밀번호가 있다면 이부분 실행
    user.comparePassword (req.body.password , (err, isMatch) => {

        // 없다면 여기를 실행 
        if(!isMatch)
         return res.json({ loginSuccess : false,
        message : "비밀번호가 틀렸습니다."}) 


          // 3. 비밀번호까지 맞다면 토큰을 생성한다.
          user.generateToken((err, user) => {
            if(err) return res.status(400).send(err);

           
            res.cookie("cookie_save", user.token)
            .status(200)
            .json({ loginSuccess : true , userId: user._id})



          })
        })
    })

})



                        //미들웨어 
app.get('/api/user/auth', auth, (req, res) => {

    //여기까지 미들웨어가 통과 되서 실행 되었다는 것은
    // Authentication이 True라는 말. 
    res.status(200).json({
        _id : req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth : true,
        email : req.user.email,
        name : req.user.name,
        lastname : req.user.lastname,
        role : req.user.role,
        image: req.user.image
    })

})

app.get('/api/user/logout', auth, (req, res) => {
    

    //로그아웃 하려는 유저를 Db에서 찾아라 ~! 
    User.findOneAndUpdate({ _id: req.user._id}, 
        { token :"" },
        (err, user) => {
            if (err) return res.json({ success : false, err});
            return res.status(200).send({
                success : true
            })
        })

})






app.listen(port, () => console.log(`Example app listening on port
${port}!`))
