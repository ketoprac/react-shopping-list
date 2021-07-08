import React from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.css';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className={styles.name}>
      <div className={styles.nameInner}>

        <form onSubmit={props.onSubmit} className={styles.form}>
          <input 
            className={styles.input}
            onChange={props.onChange}
            value={props.name}
            type="text" 
            placeholder="Hi, what's your name?"
            />
          <button type="submit" className={styles.nameButton}>Submit</button>
        </form>

      </div>
    </div>
  ) : "";
}

Popup.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string
}

export default Popup
