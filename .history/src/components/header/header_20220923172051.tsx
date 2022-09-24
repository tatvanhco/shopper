import clsx from 'clsx';
import { Fragment } from 'react';
import styles from './header.module.scss'

function header() {
    return (
        <Fragment>
            <div className={clsx(
                'header',
                styles 
                )}>

            </div>
        </Fragment>
    );
}

export default header;
