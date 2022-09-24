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
                                    <select name="quocGia">
                                        <option value="">
                                            <FontAwesomeIcon icon={faCarSide} />
                                            <p></p>
                                            
                                        </option>
                                        <option value="1">United States</option>
                                        <option value="2">Canada</option>
                                        <option value="3">Germany</option>
                                        <option value="4">Khu vực 4</option>
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
