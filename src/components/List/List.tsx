import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ListModel } from '../../models/models';

interface ListProps {
  items: ListModel[];
  removeItem: Function;
  editItem: Function;
}

const List: React.FC<ListProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;

        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                className='edit-btn'
                type='button'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                className='delete-btn'
                type='button'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
