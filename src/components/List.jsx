import React from "react";
import Item from './Item';

function List({ items, deleteItem, editItem}) {
    return (
        <div>            
            <ul className="list">
                <p>Total: {items.length}</p>
                {items.map((item) => (
                    <Item
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    editItem={editItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;