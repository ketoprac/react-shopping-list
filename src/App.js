import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todos from './components/Todos';
import Empty from './components/Empty';
import Popup from './components/Popup';
import Greet from './components/Greet';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Milk', count: 1},
    {title: 'Egg', count: 1},
    {title: 'Bread', count: 1},
  ]);
  const [show, setShow] = useState(true);
  const [name, setName] = useState('');

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]

    if (newTodos[index].count > 0) {
      // Selama jumlah count masih di atas 0
      // Masih bisa melakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      // Kalo jumlah count sudah 0 dan dikurangin juga
      // Maka, array value dengan index yang sesuai akan dihapus
      newTodos.splice(index, 1)
    }

    setTodos(newTodos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert('Oops, list cannot be blank:(');
      return;
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos);

    setValue('');
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0);

    return totalCounts;
  }

  const handleDelete = () => {
    setTodos([]);
  }

  const handleSubmitName = (e) => {
    e.preventDefault();

    // const addedName = e.target.value;
      if(!name) {
        alert('Please, fill in the name');
        return;
      }
    setName(name);
    setShow(false);
  }

  return (
    <>

      <Navbar />

      <Container>

        {!show ? 
          <Greet name={name} />
          : "" }


        <Popup
          trigger={show}
          // showPopup={() => setShow(false)}
          onSubmit={handleSubmitName}
          onChange={(e) => {setName(e.target.value)}}
          name={name}
        />

        <SearchInput 
          onSubmit={handleSubmit} 
          onChange={(e) => {setValue(e.target.value)}} 
          value={value} 
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={handleDelete}
        />

        {todos.length > 0 ? (
          <Todos 
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
            )}
      </Container>        
    </>
  );
}

export default App;
