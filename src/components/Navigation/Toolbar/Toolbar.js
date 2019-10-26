import React from 'react'
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Nav from '../../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <Nav />
        </header>
    );
};

export default toolbar