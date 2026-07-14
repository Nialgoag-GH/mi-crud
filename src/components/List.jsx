import React, { useState } from "react";
import Item from './Item';

function List({ items, deleteItem, editItem, toggleCompleteItem, deleteAllItems, deleteVisibleItems }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteAll = () => {
        const confirmed = window.confirm('¿Deseas borrar todos los elementos?');
        if (confirmed) {
            deleteAllItems();
        }
    };

    const handleDeleteVisible = () => {
        const confirmed = window.confirm('¿Deseas borrar los elementos actualmente visibles?');
        if (confirmed) {
            deleteVisibleItems(filteredItems.map((item) => item.id));
            setSearchTerm('');
        }
    };

    const shouldShowDeleteResults = searchTerm.trim().length > 0;

    return (
        <div className="list">
            <div className="list-actions">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar Elementos"
                    className="buscador"
                />
                {shouldShowDeleteResults && (
                    <button className="delete" onClick={handleDeleteVisible}>Borrar Resultados</button>
                )}
            </div>
            <p>Total: {filteredItems.length}</p>
            <ul>
                {filteredItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                        editItem={editItem}
                        toggleCompleteItem={toggleCompleteItem}
                    />
                ))}
            </ul>
            <div className="list-actions">
                <button className="delete" onClick={handleDeleteAll}>Borrar todo</button>
            </div>
        </div>
    );
}

export default List;