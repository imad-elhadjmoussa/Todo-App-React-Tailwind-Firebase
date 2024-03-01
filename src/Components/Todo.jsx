import React from 'react'

export const Todo = ({ todo }) => {
    return (

        <div className='text-white flex justify-between w-48 bg-secndry'>
            <p>
                {todo}
            </p>
            <div>
                Delete
            </div>
        </div>
    )
}
