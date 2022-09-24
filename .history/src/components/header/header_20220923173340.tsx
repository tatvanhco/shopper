import clsx from 'clsx';
import { Fragment } from 'react';
import styles from './header.module.scss';

function header() {
    return (
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className={clsx(styles.headerContact)}>hjdbsd</div>
                    <div className={clsx('')}>adhga</div>
                </div>
            </div>
        </Fragment>
    );
}

export default header;
