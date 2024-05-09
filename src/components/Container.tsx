import React from 'react';
import classes from "../styles/Container.module.css"

const Container: React.FC<{ children: any }> = (props) => {
    return (
        <main className={classes.container}>
            {props.children}
        </main>
    );
}

export default Container;
