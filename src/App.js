import { useEffect, useRef, useState } from 'react'
import './index.css';
import { Button } from '@mui/material'
import { Todo } from './Components/Todo';
import { db } from './Firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'

function App() {
  //State to hold todos
  const [todos, setTodos] = useState([]);
  //Get collection in firebase
  const todosCollections = collection(db, "12345")
  //Fetch todos into firebase
  useEffect(() => {

    const getData = async () => {
      //Get docs from firebase
      const d = await getDocs(todosCollections)
      console.log(d.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setTodos(d.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }

    getData();

  }, [todos])

  //Using ref to target input filed
  const inputRef = useRef(null)

  //State to get input 
  const [input, setInput] = useState(null);

  //Function to get input from input filed and set it into input state
  const getInput = (e) => {
    setInput(e.target.value);
  }


  //Function to add todo to todos
  const addTodos = async (e) => {
    if (input !== null) {
      //initail todo object
      let todo = {
        todo: input,
        completed: false,
      }

      setInput(() => {
        return null;
      })
      //add doc with todo info to firebase
      await addDoc(todosCollections, todo)

      inputRef.current.value = '';

    } else {

      e.stopPropagation();

    }

  }

  //Delete todo from firebase
  const deleteTodo = (e) => {
    const todoDoc = doc(db, '12345', e.target.id);
    deleteDoc(todoDoc);
  }

  //Update todo from firebase
  const completedTodo = (e, completed) => {
    const todoDoc = doc(db, '12345', e.target.id);
    const newTodo = { completed: !completed };
    updateDoc(todoDoc, newTodo);

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
