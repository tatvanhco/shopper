import React from 'react';
import clsx from 'clsx';
import styles from './header.module.scss';
import NavLinks from './NavLinks';

function Navigation() {
    return (
        <div className={styles.Navigation}>
            <NavLinks />
        </div>
    );
}

export default Navigation;
