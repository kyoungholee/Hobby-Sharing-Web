import React from 'react'
import { Button, Header } from "semantic-ui-react";
import {useParams} from "react-router-dom";

function DetailPage( {list} ) {


    const {id} = useParams();
    console.log(id)
    const productList = list.filter(item => item.id === id);
    console.log(productList)

    return (
        <>

            <div>
            {productList.map(item => (

                <div key = {item.id}>

                        <strong >{item.name}</strong>
                        <strong >${item.price}</strong>
                    <Button color="orange">구매하기</Button>
                </div>
            ))}
            </div>


        </>
    )
}

export default DetailPage;
