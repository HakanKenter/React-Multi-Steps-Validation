import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {

    const [formData, setFormData] = useState({
        dietForm: 'nodiet'
    })

    const handleRadio = e => {
        setFormData({
            dietForm: e.target.value
        })
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

            <label htmlFor="vegetarian">Végétarien</label>
            <input 
            onChange={handleRadio}
            type='radio'
            name='nodiet'
            id='vegetarian'
            value='vegetarian'
            />

            <label htmlFor="vegan">Vegan</label>
            <input 
            onChange={handleRadio}
            type='radio'
            name='nodiet'
            id='vegan'
            value='vegan'
            />

            <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
        </form>
    )
}
