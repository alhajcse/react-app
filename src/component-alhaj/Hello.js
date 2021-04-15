import React from 'react'

function Hello(props) {

    
    function btnClick(a) {
        alert(a);
    }
    
    return(
        <div>
            <button onClick={btnClick.bind(this,"i'm here")}> click me</button>
            <h1> name: {props.name} and Age: {props.age}</h1>
        </div>

    );
    
}

export default Hello