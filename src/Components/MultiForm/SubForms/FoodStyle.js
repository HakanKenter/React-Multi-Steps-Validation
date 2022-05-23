import React, {useRef} from 'react';
import './SubForm.css'

const Foodstyle = () => {

    const preventFunct = () => {

    }

    return (
        <div>
            <form
            className='checkbox-form'
            onClick={preventFunc}
            >

                <p>Quelles sont es cusiines préférée ?</p>
                <span>Choix multiples.</span>

                <label htmlFor='italian'>
                    Italienne
                </label>
                <input type="text" id='italian' value='italian' /> 

                <label htmlFor='italian'>
                    Italienne
                </label>
                <input type="text" id='italian' value='italian' />

                <label htmlFor='italian'>
                    Italienne
                </label>
                <input type="text" id='italian' value='italian' />               

                <label htmlFor='italian'>
                    Italienne
                </label>
                <input type="text" id='italian' value='italian' />

                <label htmlFor='italian'>
                    Italienne
                </label>
                <input type="text" id='italian' value='italian' />

            </form>
        </div>
    );
}

export default Foodstyle;
