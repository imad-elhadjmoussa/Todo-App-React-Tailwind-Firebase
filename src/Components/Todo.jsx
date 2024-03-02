import React from 'react'
import { Button, DeleteIcon, label, Checkbox } from '@mui/material'
//import {DeleteIcon} from '@mui/icons-material';


export const Todo = ({ id, todo , deleteTodo }) => {
    return (

        <div
            className='text-white cursor-pointer hover:shadow-2xl transition duration-200   text-lg rounded-lg shadow-lg  items-center p-3 flex justify-between  bg-secndry'

        >
            <p className='w-10'>
                {todo}
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:gap-3 '>
                <Button variant="contained" color="success">
                    Completed
                </Button>
                <Button
                    id={id}
                    variant="outlined"
                    color="error"
                    onClick={(e)=>{deleteTodo(e)}}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}
