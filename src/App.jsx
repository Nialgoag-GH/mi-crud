import React, { useState, useEffect } from 'react';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem('items')) || [];
      const normalizedItems = Array.isArray(storedItems)
        ? storedItems.map((item) => ({ ...item, completed: Boolean(item.completed) }))
        : [];
      setItems(normalizedItems);
    } catch (error) {
      console.error('Error reading items from localStorage', error);
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems((currentItems) =>
        currentItems.map((item) =>
          item.id === itemToEdit.id ? { ...item, value, completed: item.completed || false } : item
        )
      );
      setItemToEdit(null);
    } else {
      setItems((currentItems) => [...currentItems, { id: Date.now(), value, completed: false }]);
    }
  };

  const deleteItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleCompleteItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  const deleteVisibleItems = (ids) => {
    setItems((currentItems) => currentItems.filter((item) => !ids.includes(item.id)));
  };

  return (
    <div className='tarjeta'>
      <h1>CRUD con Local Storage</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit}/>
      <List
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
        toggleCompleteItem={toggleCompleteItem}
        deleteAllItems={deleteAllItems}
        deleteVisibleItems={deleteVisibleItems}
      />
    </div>
  );
}

export default App;