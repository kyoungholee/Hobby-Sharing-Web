import React,{useEffect, useState} from 'react'
import './Main.css'
//import SmOutSideList from '../Pages/SmOutSideList';
//import WnOutSideList from '../Pages/WnOutSideList';
import Axios from 'axios'
import ItemList2 from './ItemList2';



function Main() {

    const [list, setList] = useState([])

    const API_URL = 
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    function getData() {
        Axios.get(API_URL)
        .then(res => {
            console.log(res.data)
            setList(res.data);
        })
    }

    //api는 한번만 사용하면 되니깐 useEffect를 사용


    useEffect(() => {
        getData();
    }, [])



    return (
    <>    
        <div className = "Main">


            <ItemList2 list = { list }/>
        </div>
    </>    
    )
}

export default Main;