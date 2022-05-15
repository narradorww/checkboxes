import React from 'react'
import Checkbox from './components/Checkboxes';

function App(props) {
    return(
        <>
        <div><strong>What tech subjectives are you learning?</strong></div>
        <Checkbox id="css" label="CSS"/>
        <Checkbox id="html" label="HTML5"/>
        <Checkbox id="javascript" label="Javascript"/>
        </>
    )
}

export default App;