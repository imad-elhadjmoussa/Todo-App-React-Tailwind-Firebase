import React from 'react'
import { Button} from '@mui/material'
//import {DeleteIcon} from '@mui/icons-material';


export const Todo = ({ id, todo, deleteTodo, completedTodo, completed }) => {

    return (

        <div
            className='text-white cursor-pointer hover:shadow-2xl transition duration-200   text-lg rounded-lg shadow-lg gap-2 items-center p-3 flex justify-between  bg-secndry'

        >
            <p
                className='  break-words md:w-96 sm:w-80 w-56'
                style={
                    {textDecoration: completed ? 'line-through' : 'none'}
                }
            >
                {todo}
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:gap-3 '>
                <Button
                    id={id}
                    onClick={(e) => { completedTodo(e) }}
                    variant="contained"
                    color="success">
                    Completed
                </Button>
                <Button
                    id={id}
                    variant="outlined"
                    color="error"
                    onClick={(e) => { deleteTodo(e) }}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}
