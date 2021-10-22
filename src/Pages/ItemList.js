import React from 'react'
import dummy from '../DB/Item.json';
import './ItemList.css';

function ItemList() {

    return (
        <>
        <div className = "list">
            <ul>
                {dummy.hobbys.map(item => (
                    <li key = {item.id}>
                        {item.id}
                    <a className = "Name">
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
