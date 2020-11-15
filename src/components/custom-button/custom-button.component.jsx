import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProp }) => (
    <button className='custom-button' {...otherProp}>
        {children}
    </button>
);

export default CustomButton;