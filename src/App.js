import { useRef, useState } from 'react'
import './index.css';
import { Button } from '@mui/material'
import { Todo } from './Components/Todo';

function App() {

  const inputRef = useRef(null)

  //State to hold todos
  const [todos, setTodos] = useState([]);

  //State to get input 
  const [input, setInput] = useState(null);

  //Function to get input from input filed and set it into input state
  const getInput = (e) => {
    setInput(e.target.value);
  }

  //Function to add todo to todos
  const addTodos = (e) => {
    if (input !== null) {

      let todo={
        id: todos.length === 0 ? 0 :todos[todos.length-1].id + 1,
        todo:input, 
      }

      setTodos((prev)=>{
        return [...prev,todo]
      })

      setInput(null)
      inputRef.current.value ='';

    } else {

      e.stopPropagation();

    }

  }

  return (
    <div className=''>
      <input type="text" placeholder='Add Todo' ref={inputRef} onChange={(e) => { getInput(e) }} />

      <Button variant="contained" onClick={e => addTodos(e)}>
        Add todo
      </Button>
      <div>
        {
          todos.map((ele) => {
            return (<Todo key={ele.id} todo={ele.todo} />);
          })
        }
      </div>

    </div>
  );
}

export default App;
