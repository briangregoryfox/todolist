import React, {useState} from 'react';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);



  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      text: newTodo,
      complete: false 
    }
    setTodos([...todos, todoItem])
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo,i) => {
      return i != delIdx;
    });

    setTodos(filteredTodos);
  } 

  return (
    <div className="container mx-auto p-20">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input className='' onChange={(event) => {
          setNewTodo(event.target.value);
        }} 
        type="text"
        value={newTodo}
        />
        <div className='p-3'>
          <button className="p-10 bg-purple-600 hover:bg-purple-700 text-black font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Add</button>
        </div>
      </form>
      {todos.map((todo, i) => {
        return (
          <div className='p-3' key={i}>
            <input type="checkbox" />
            <span className='p-5'>{todo.text}</span>
            <button className='p-3 bg-blue-600 py-1 rounded' onClick={(event) => {
              handleTodoDelete(i);
            }}> Delete </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
