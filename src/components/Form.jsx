import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
    const [inputValue, setInputValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Escribe un elemento');

    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
        setPlaceholder('Escribe un elemento');
    }, [itemToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            addOrUpdateItem(inputValue.trim());
            setInputValue('');
            setPlaceholder('Escribe un elemento');
            return;
        }

        setInputValue('');
        setPlaceholder('Por favor ingresa un valor');
    };

    const handleChange = (e) => {
        const newValue = e.target.value;

        if (!newValue.trim()) {
            setInputValue('');
            setPlaceholder('Por favor ingresa un valor');
            return;
        }

        setInputValue(newValue);
        setPlaceholder('Escribe un elemento');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <button className="button" type="submit">
                {itemToEdit ? 'Actualizar' : 'Agregar'}
            </button>
        </form>
    );
}

export default Form;