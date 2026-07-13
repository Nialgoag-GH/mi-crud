import React from 'react';

function Item({ item, deleteItem, editItem}) {
    const handleDelete = () => {
        const confirmed = window.confirm(`¿Deseas eliminar "${item.value}"?`);
        if (confirmed) {
            deleteItem(item.id);
        }
    };

    return (
        <li>
            {item.value}
            <button className="edit" onClick={() => editItem(item)}>Editar</button>
            <button className='delete' onClick={handleDelete}>Eliminar</button>
        </li>
    );
}

export default Item;