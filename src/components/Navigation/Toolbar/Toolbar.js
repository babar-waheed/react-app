import React from 'react'
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <ul>
                    <li>Item 1</li>
                </ul>
            </nav>
        </header>
    );
};

export default toolbar