import { React, useState } from 'react';
import clsx from 'clsx';
import styles from './header.module.scss';
import NavLinks from './NavLinks';
import { FiMenu } from 'react-icons/fi';

function MobileNavigation() {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.mobileNavigation}>
            {open && <NavLinks/>}
            <FiMenu size={'24px'} className={clsx(styles.btnMenu)} onClick={() => setOpen(!open)} />
        </div>
    );
}

export default MobileNavigation;
