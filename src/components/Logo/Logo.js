import React from 'react'
import logoImg from  '../../assets/images/burger-logo.png';
import classes from '../Logo/Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img alt="logo" src={logoImg} />
        </div>
    );
};

export default logo