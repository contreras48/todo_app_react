import react from 'react';
import { useState } from 'react';

function Form({ nextId, addItem }) {
  const[text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(e.key === "Enter"){
      const item = {
        "id": nextId,
       "text": text,
       "complete": false
      }
      
      addItem(item);
      setText('')
    }
  }

  return (
    <form>
      <input type='text' value={text} onChange={e => setText(e.target.value)} onKeyUp={onSubmit} />
    </form>
  );
}

export default Form;