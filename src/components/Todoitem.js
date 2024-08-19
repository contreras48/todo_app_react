import React, { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";

function Todoitem({ item, onDelete, updateItem}) {

  return (
    <li>
      <label>
        <input type='checkbox' checked={item.complete} onClick={() => updateItem(item.id)} />
        {item.text}
      </label>
      <MdDeleteOutline className='icon-delete' onClick={() => onDelete(item.id)} />
    </li>
  );
}

export default Todoitem;