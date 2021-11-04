import React,  {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Home({name}) {

    const history = useHistory();


    const {user}  = useSelector(state => state.LoginReducer);

    useEffect(() => {
        
        if(!user.name) {
            alert("로그인을 해주세요!")
            history.push('/login');
        }

    }, [])

    return (
        <>
                <div>
               {user.name}항상 응원합니다.!!
                </div>

        </>
    )
}

export default Home
