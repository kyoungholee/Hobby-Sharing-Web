import React from 'react'
import './Main.css'
import SmOutSideList from '../Pages/SmOutSideList';

function Main() {
    return (
    <>    
        <div className = "Main">
            <h1 className = "title">여름 특가!! 여름에 추천하는 취미</h1>
                <SmOutSideList />
        </div>
    </>    
    )
}

export default Main;