import React from 'react'

export default function Alert(props) {
    return (
        <div className='container mt-5 text-center'>
            <p className='h1 text-danger'>
                No city found for the value: <span className='text-dark'>{props.errorValue}</span>
                </p>
            <h1 className='display-1 text-center'>Please enter a valid value</h1>
        </div>
    )
}
