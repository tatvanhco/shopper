import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import styles from './header.module.scss';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

function header() {
    return (
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className={clsx(styles.headerContact)}>
                        <div className="headerContactRight">
                            <ul className={
                                clsx
                            }>
                                <li className="headerContactRightItem">
                                    <FontAwesomeIcon icon={faCarSide} />
                                    <p>FREE SHIPPING WORLDWIDE</p>
                                </li>
                                <li className="headerContactRightItem"></li>
                                <li className="headerContactRightItem"></li>
                                <li className="headerContactRightItem"></li>
                            </ul>
                        </div>
                        <div className="headerContactLeft"></div>
                    </div>
                    <div className={clsx(styles.headerFrom)}>adhga</div>
                </div>
            </div>
        </Fragment>
    );
}

export default header;
