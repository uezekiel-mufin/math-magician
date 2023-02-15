import React from 'react'
import PropTypes from 'prop-types';

const Button = ({btn,onClick}) => {

  return (
    <button className={btn === '0'? 'zero':''} onClick={onClick}>{btn}</button>
  )
}

export default Button;
Button.propTypes = {btn: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired}