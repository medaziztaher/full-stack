import { useState } from 'react';
import '../styles/stylebutton.css'
import { Link } from 'react-router-dom';

const Buttons = (props) => {
  return (
    <button onClick={props.action} className={props.className} >
    {props.name}
    </button>
  );
}


export default Buttons; 
