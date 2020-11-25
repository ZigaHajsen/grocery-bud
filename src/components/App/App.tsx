import React, { useState, useEffect } from 'react';
import { List, Alert } from '../';

interface AppListState {
  id: string;
  title: string;
}

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<AppListState[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //deal with edit
    } else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            type='text'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
    </section>
  );
};

export default App;
