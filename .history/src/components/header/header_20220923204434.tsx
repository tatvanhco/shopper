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
                            <ul className={clsx('headerContactRightItems', 'ul', 'd-flex')}>
                                <li className={clsx('headerContactRightItem', 'd-flex')}>
                                    <FontAwesomeIcon icon={faCarSide} />
                                    <p className={clsx('title')}>FREE SHIPPING WORLDWIDE</p>
                                </li>
                                <li className={clsx('headerContactRightItem', 'd-flex')}>
                                <select name="khuvuc">
                        <option value="">-- Chọn khu vực đi cưng --</option>
                        <option value="1">Khu vực 1</option>
                        <option value="2">Khu vực 2</option>
                        <option value="3">Khu vực 3</option>
                        <option value="4">Khu vực 4</option>
                        <option value="5">Khu vực 5</option>
                        <option value="6">Khu vực 6</option>
                    </select>
                                </li>
                                <li className={clsx('headerContactRightItem', 'd-flex')}></li>
                                <li className={clsx('headerContactRightItem', 'd-flex')}></li>
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
