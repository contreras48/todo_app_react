import { useState } from 'react';
import './styles/app.css';

import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';

import todolist from './data/data.json';


function App() {
  const MY_TASKS = [...todolist];
  const [theme, setTheme] = useState('light');
  const [items, setItems] = useState(MY_TASKS);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [nextId, setNextId] = useState(items.length + 1);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const addItem = (newItem) => {
    setItems(items => [...items, newItem]);
    setNextId(nextId => nextId + 1);
  }

  const deleteItem = (id) => {
    setItems(items.filter(i => items.id !== id));
  }

  const updateItem = (id) => {
    const itemsList = [...items];

    const editItem = itemsList.find(i => id === i.id);

    if (editItem) {
      editItem.complete = !editItem.complete
    }

    setItems(itemsList);
  }

  const updateItems = (updateList) => {
    setItems(updateList)
  }

  const updateFilter = (selected) => {
    setSelectedFilter(selected)
  }

  const clearComplete = () => {
    setItems(items.find(i => i.complete !== false))
  }



  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className={theme == 'dark' ? "app-main dark-mode" : "app-main"}>
        <section className='app-container'>
          <Form addItem={addItem} nextId={nextId} />
          <Todolist 
            items={items}
            updateItems={updateItems}
            updateItem={updateItem}
            deleteItem={deleteItem}
            selectedFilter={selectedFilter}
            updateFilter={updateFilter}
            clearComplete={clearComplete}
          />
        </section>

      </main>
    </>
  );
}

export default App;
//https://frontendmentor-todo-app-react.vercel.app/

//TODO: refactorizar codigo, aplicar tema oscuro y claro, aplizar drap and drop