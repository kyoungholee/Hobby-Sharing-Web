import React from 'react'
import dummy from '../DB/Item.json';

function ItemList() {
    console.log(dummy)
    return (
        <div>
            <ul>
                {dummy.hobbys.map(item => (
                    <li>
                        {item.id}
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList
