import React from 'react'
import dummy from '../DB/Item.json';
import { useHistory } from 'react-router';
import './ItemList.css';

function ItemList() {

    const history = useHistory();

    const goToItems = () => {
        history.push('./items')
    }

    return (
        <>
        <div className = "list">
            <ul onClick = {goToItems}>
                {dummy.hobbys.map(item => (
                    <li key = {item.id}>
                        {item.id}
                    <a key = {item.id} 
                    className = "Name"
                    >
                        {item.name}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ItemList
