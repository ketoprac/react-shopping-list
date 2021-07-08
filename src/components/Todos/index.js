import React from 'react';
import PropTypes from 'prop-types';
import styles from  './Todos.module.css';

import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';

const Todos = ({ todos, onSubstraction, onAddition }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div 
            key={index} 
            className={`${styles.todo} ${!(arr.length === index + 1 ) && styles.todoDivider}`}
          >
            {todo.title} 

            <div className={styles.todoIconWrapper}>

              <div className={styles.todoCount}>{todo.count}</div>

              <button onClick={() => onSubstraction(index)} className={styles.todoActionButton}>
                <img src={minusIcon} alt="minus icon" />
              </button>

              <button onClick={() => onAddition(index)} className={styles.todoActionButton}>
                <img src={plusIcon} alt="plus icon" />
              </button>

            </div>

          </div>
        )
      })}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number
  })),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func
}

export default Todos
