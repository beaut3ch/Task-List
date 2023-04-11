import React from 'react';
 import PropTypes from 'prop-types';
import styles from './TaskList.module.css';
import Task from '../Task/Task'

const TaskList = ({tasklist, handleDeleteTask1,handleDoTask1}) => (
  <ul className={styles.TaskList}>
   {tasklist.map(t=> <Task key={t.id} handleDeleteTask2={handleDeleteTask1} handleDoTask2={handleDoTask1} task={t}></Task>)}
  </ul>
);

 TaskList.propTypes = {};

 TaskList.defaultProps = {};

export default TaskList;
