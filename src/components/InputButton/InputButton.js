import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputButton.module.css';

const InputButton = ({handleAddTask}) => {

  const [title,setTitle] = useState('')

  function onAdd(){
    //handeAddTask "cogeTask" informa del titulo
    handleAddTask(title)
    //limpia el Titulo
    setTitle("") 
    // Con estoy limpiamos el input, y nos vamos al input del return y le decimos que este pendiente de las actuaciones.
  }



  return (
    <div className={styles.InputButton}>
    <input onChange={(e)=>setTitle(e.target.value)} value={title} />
    <button onClick={onAdd}>Añadir</button>
  </div>
  );
}

 InputButton.propTypes = {};

 InputButton.defaultProps = {};

export default InputButton;
