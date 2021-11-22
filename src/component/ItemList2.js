import React from 'react'
import {Grid } from 'semantic-ui-react';
import './ItemList2.css';
import {Link, useParams} from "react-router-dom";



function ItemList2({ list }) {

    
// const a = useParams();
// console.log(a);

    return (
        <div>
            <Grid >
            <h2 >화장품 상품</h2>
                <Grid.Row className = "list-grid">

                {list.map((item) => (
                    <Grid.Column>

                    <Link to = {`/${item.id}`}>
                        <img src = {item.image_link} alt = {item.name} />

                        <strong className = "list-name">{item.name}</strong>
                        <span className = "list-info">
                            {item.category} {item.product_type}
                        </span>
                        <strong className = "list-price">{item.price}</strong>

                    </Link>
                    </Grid.Column>
                ))}

                </Grid.Row>
            </Grid>
        </div>
    )
}



export default ItemList2
