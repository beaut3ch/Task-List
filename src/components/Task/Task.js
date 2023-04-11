import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = ({task, handleDeleteTask2,handleDoTask2}) => (
  <li className={styles.Task}>
    <span className={[styles.TaskText,(task.done?styles.TaskDone:'')].join(" ")}> {task.text} </span>
    <div className={styles.ButtonGroup}>
      <button onClick={()=>handleDeleteTask2(task)}>🗑️</button>
      <button onClick={()=>handleDoTask2(task)}>{task.done?'❌':'✔️'}</button>
    </div>
  </li>
);

Task.propTypes = {};

Task.defaultProps = {};

export default Task;