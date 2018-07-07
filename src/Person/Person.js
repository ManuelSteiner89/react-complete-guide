import React from 'react';


//ES6 equivalent to function {}
//props = properties
const person = (props) =>{
    return (
    <div>
        <p onClick={props.onClick}>I'm {props.name} and I am  {props.age} years old!</p>
        <p>{props.children}</p>  
        <input type="text" onChange={props.changed} value={props.name}/>  
    </div>
    )
};


export default person;