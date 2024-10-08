import Filter from './Filter'
import Todoitem from './Todoitem'

function Todolist ({ items, updateItems, updateItem, deleteItem, selectedFilter, updateFilter, clearComplete }){

  const itemsList = (() => {
    switch(selectedFilter){
      case 'all':
        return items;
      case 'active':
        return items.filter(i => i.complete === false);
      case 'completed':
        return items.filter(i => i.complete === true);
      default:
        return items;
    }
  })();

  const rederList = itemsList.map(item => {
    return (
      <Todoitem key={item.id} item={item} onDelete={deleteItem} updateItem={updateItem} />
    )
  }); 

  const getItemsLeft = () => {
    const completedItems = itemsList.filter(item => item.complete === true).length;
    const total = itemsList.length;
    return total - completedItems
  }

  return (
    <div className='app-list'>
      <div className='app-filter'>
        <span>{getItemsLeft()}</span>
        <Filter updateFilter={updateFilter} selectedFilter={selectedFilter}/>
        <span onClick={clearComplete}>Limpíar</span>
      </div>
      <div>
        <ul>
          {rederList}
        </ul>
      </div>
    </div>
  )

}

export default Todolist;