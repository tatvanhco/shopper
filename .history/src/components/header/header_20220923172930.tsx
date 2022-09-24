import clsx from 'clsx';
import { Fragment } from 'react';
import styles from './header.module.scss';

function header() {
    return (
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className={clsx('headerContact')}>
                        hjdbsd
                    </div>
                    <div className={clsx('headerFrom')}></div>
                </div>
            </div>
        </Fragment>
    );
}

export default header;
