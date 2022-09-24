import clsx from 'clsx';
imm
import { Fragment } from 'react';
import styles from './header.module.scss';

function header() {
    return (
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className={clsx(styles.headerContact)}>
                        <div className="headerContactRight">
                            <ul className="headerContactRightItems">
                                <li className="headerContactRightItem">
                                    <FontAwesomeIcon icon="fa-regular fa-car-side" />
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
