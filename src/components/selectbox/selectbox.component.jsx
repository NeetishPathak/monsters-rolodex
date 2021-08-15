import React from 'react'
import './selectbox.styles.css'

function Selectbox({ placeholder, handleChange }) {
    return (

        <input className='search' type="search" placeholder={placeholder} onChange={handleChange} />

    )
}

export default Selectbox
