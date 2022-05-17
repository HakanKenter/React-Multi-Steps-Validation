import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm() {

    const handleRadio = () => {

    }

    const preventFunc = e => e.preventDefault()
    
    return (
        <form
        onSubmit={preventFunc}
        className='diet-form'>

            <p>Quelle est ton régime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime particulier</label>
            <input 
            onChange={handleRadio}
            type='radio'
            name='nodiet'
            id='nodiet'
            value='nodiet'
            />

            <label htmlFor="homnivorous">Homnivore</label>
            <input 
            onChange={handleRadio}
            type='radio'
            name='nodiet'
            id='homnivorous'
            value='homnivorous'
            />
        </form>
    )
}
