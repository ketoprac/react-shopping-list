import React from 'react';
import PropTypes from 'prop-types';
import styles from './Greet.module.css';

const Greet = ({name}) => {
  return (
    <div className={styles.greet}>
      <h1>Hey, {name}!</h1>
    </div>
  )
}

Greet.propTypes = {
  name: PropTypes.func
}

export default Greet;
