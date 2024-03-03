import { useRef, useState } from 'react'
import './index.css';
import { Button, TextField } from '@mui/material'
import { Todo } from './Components/Todo';
import { Flag } from '@mui/icons-material';

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

      let todo = {
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        todo: input,
        completed: false,
      }

      setTodos((prev) => {
        return [...prev, todo]
      })
      setInput(() => {
        return null;
      })

      inputRef.current.value = '';

    } else {

      e.stopPropagation();

    }

  }

  const deleteTodo = (e) => {
    let newTodos = todos.filter((ele) => {
      return ele.id !== +e.target.id;
    })
    setTodos(newTodos);
  }

  const completedTodo = (e) => {

    const newTodos = todos.map(ele => {
      if(ele.id === +e.target.id){
        ele.completed=!ele.completed;
      }
      return ele;
    })

    setTodos(newTodos);

  }

  return (
    <div className=' app flex flex-col  '>

      <div className='flex  flex-col  sm:flex-row gap-5 md:gap-82 sm:gap-40 justify-between items-center py-10'>
        <input
          className='px-4 outline-none border  w-96 border-blue-900 md:w-96 sm:w-80  shadow-2xl  py-2 text-white rounded-sm bg-secndry  '
          type="text"
          placeholder='Add Todo'
          ref={inputRef}
          onChange={(e) => { getInput(e) }}
        />

        <Button variant="contained" onClick={e => addTodos(e)}>
          Add todo
        </Button>
      </div>

      <div className='sm:px-5 flex flex-col gap-5'>
        {
          todos.map((ele) => {
            return (<Todo key={ele.id} todo={ele.todo} id={ele.id} completed={ele.completed} deleteTodo={deleteTodo} completedTodo={completedTodo} />);
          })
        }
      </div>

    </div>
  );
}

export default App;
