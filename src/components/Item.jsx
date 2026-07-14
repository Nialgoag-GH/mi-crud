import React from 'react';

function Item({ item, deleteItem, editItem, toggleCompleteItem }) {
    const handleDelete = () => {
        const confirmed = window.confirm(`¿Deseas eliminar "${item.value}"?`);
        if (confirmed) {
            deleteItem(item.id);
        }
    };

    return (
        <li>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.value}
            </span>
            <button className="complete" onClick={() => toggleCompleteItem(item.id)}>Completado</button>
            <button className="edit" onClick={() => editItem(item)}>Editar</button>
            <button className='delete' onClick={handleDelete}>Eliminar</button>
        </li>
    );
}

export default Item;