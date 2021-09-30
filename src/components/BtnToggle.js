import React, {useContext} from 'react'
import './BtnToggle.css'
import {ThemeContext} from '../context/ThemeContext';


function BtnToggle() {
    
    const {toggleTheme} = useContext(ThemeContext)
    
    return (
        <button
        onClick={toggleTheme}
        className="btn-toggle">Toggle</button>
    )
}

export default BtnToggle;
