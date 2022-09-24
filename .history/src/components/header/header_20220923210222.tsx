import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import styles from './header.module.scss';
import { faCarSide, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
                                    <div className={clsx(styles.nation, 'd-flex')}>
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3J
                                                    nLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTRDMTAuODY2IDE0IDE0IDEwLjg2NiAxNCA3QzE0IDMuMTM0MDEgMTAuODY2IDAgNyAwQzMuMTM0MDEgMCAwIDMuMTM0MDEgMCA3QzAgMTAuO
                                                    DY2IDMuMTM0MDEgMTQgNyAxNFoiIGZpbGw9IiNGMEYwRjAiLz4KPHBhdGggZD0iTTYuNjk1OCA2Ljk5OTk4SDE0LjAwMDFDMTQuMDAwMSA2LjM2ODE4IDEzLjkxNTkgNS43NTYxMiAxMy4
                                                    3NTkgNS4xNzM4OUg2LjY5NThWNi45OTk5OFoiIGZpbGw9IiNEODAwMjciLz4KPHBhdGggZD0iTTYuNjk1OCAzLjM0NzgzSDEyLjk3MjdDMTIuNTQ0MiAyLjY0ODU5IDExLjk5NjMgMi4wM
                                                    zA1NCAxMS4zNTc1IDEuNTIxNzNINi42OTU4VjMuMzQ3ODNaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik02Ljk5OTk3IDE0QzguNjQ3NCAxNCAxMC4xNjE2IDEzLjQzMDYgMTEuMzU
                                                    3NCAxMi40NzgzSDIuNjQyNThDMy44MzgzMiAxMy40MzA2IDUuMzUyNTMgMTQgNi45OTk5NyAxNFoiIGZpbGw9IiNEODAwMjciLz4KPHBhdGggZD0iTTEuMDI3NDggMTAuNjUyMkgxMi45N
                                                    zI3QzEzLjMxNjcgMTAuMDkwOCAxMy41ODM1IDkuNDc3MjMgMTMuNzU4OSA4LjgyNjA3SDAuMjQxMjExQzAuNDE2Njc2IDkuNDc3MjMgMC42ODM0NjkgMTAuMDkwOCAxLjAyNzQ4IDEwLjY
                                                    1MjJaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik0zLjI0MjUzIDEuMDkzMTVIMy44ODA0M0wzLjI4NzA3IDEuNTI0MjJMMy41MTM3MyAyLjIyMTczTDIuOTIwMzkgMS43OTA2NkwyL
                                                    jMyNzA2IDIuMjIxNzNMMi41MjI4NCAxLjYxOTE2QzIuMDAwNDEgMi4wNTQzNCAxLjU0MjUyIDIuNTY0MTkgMS4xNjUxNyAzLjEzMjI4SDEuMzY5NTdMMC45OTE4NjcgMy40MDY2OEMwLjk
                                                    zMzAyMyAzLjUwNDg0IDAuODc2NTg2IDMuNjA0NTYgMC44MjI1IDMuNzA1NzZMMS4wMDI4NiA0LjI2MDg3TDAuNjY2MzY3IDQuMDE2MzlDMC41ODI3MjMgNC4xOTM2IDAuNTA2MjE1IDQuM
                                                    zc0ODEgMC40Mzc0NDUgNC41NTk3OUwwLjYzNjE1MiA1LjE3MTQxSDEuMzY5NTdMMC43NzYyMDcgNS42MDI0OUwxLjAwMjg2IDYuM0wwLjQwOTUyNyA1Ljg2ODkzTDAuMDU0MTEzMyA2LjE
                                                    yNzE2QzAuMDE4NTM5MSA2LjQxMzEyIDAgNi43MDQzOSAwIDdIN0M3IDMuMTM0MDMgNyAyLjY3ODI3IDcgMEM1LjYxNzE3IDAgNC4zMjgxMSAwLjQwMTEzMyAzLjI0MjUzIDEuMDkzMTVaT
                                                    TMuNTEzNzMgNi4zTDIuOTIwMzkgNS44Njg5M0wyLjMyNzA2IDYuM0wyLjU1MzcxIDUuNjAyNDlMMS45NjAzNiA1LjE3MTQxSDIuNjkzNzdMMi45MjAzOSA0LjQ3MzlMMy4xNDcwMiA1LjE
                                                    3MTQxSDMuODgwNDNMMy4yODcwNyA1LjYwMjQ5TDMuNTEzNzMgNi4zWk0zLjI4NzA3IDMuNTYzMzZMMy41MTM3MyA0LjI2MDg3TDIuOTIwMzkgMy44Mjk3OUwyLjMyNzA2IDQuMjYwODdMM
                                                    i41NTM3MSAzLjU2MzM2TDEuOTYwMzYgMy4xMzIyOEgyLjY5Mzc3TDIuOTIwMzkgMi40MzQ3N0wzLjE0NzAyIDMuMTMyMjhIMy44ODA0M0wzLjI4NzA3IDMuNTYzMzZaTTYuMDI0NTkgNi4
                                                    zTDUuNDMxMjYgNS44Njg5M0w0LjgzNzkzIDYuM0w1LjA2NDU4IDUuNjAyNDlMNC40NzEyMiA1LjE3MTQxSDUuMjA0NjRMNS40MzEyNiA0LjQ3MzlMNS42NTc4OSA1LjE3MTQxSDYuMzkxM
                                                    0w1Ljc5Nzk0IDUuNjAyNDlMNi4wMjQ1OSA2LjNaTTUuNzk3OTQgMy41NjMzNkw2LjAyNDU5IDQuMjYwODdMNS40MzEyNiAzLjgyOTc5TDQuODM3OTMgNC4yNjA4N0w1LjA2NDU4IDMuNTY
                                                    zMzZMNC40NzEyMiAzLjEzMjI4SDUuMjA0NjRMNS40MzEyNiAyLjQzNDc3TDUuNjU3ODkgMy4xMzIyOEg2LjM5MTNMNS43OTc5NCAzLjU2MzM2Wk01Ljc5Nzk0IDEuNTI0MjJMNi4wMjQ1O
                                                    SAyLjIyMTczTDUuNDMxMjYgMS43OTA2Nkw0LjgzNzkzIDIuMjIxNzNMNS4wNjQ1OCAxLjUyNDIyTDQuNDcxMjIgMS4wOTMxNUg1LjIwNDY0TDUuNDMxMjYgMC4zOTU2MzdMNS42NTc4OSA
                                                    xLjA5MzE1SDYuMzkxM0w1Ljc5Nzk0IDEuNTI0MjJaIiBmaWxsPSIjMDA1MkI0Ii8+Cjwvc3ZnPgo="
                                            alt=""
                                        />
                                        <p>United States</p>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </li>
                                <li className={clsx('headerContactRightItem', 'd-flex')}>
                                    <div className={clsx(styles.nation, 'd-flex')}>
                                        <p>USD</p>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </li>
                                <li className={clsx('headerContactRightItem', 'd-flex')}>
                                    <div className={clsx(styles.nation, 'd-flex')}>
                                        <p>English</p>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="headerContactLeft">
                            <ul className="headerContactLeftItems">
                                <li className={clsx()}></li>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(styles.headerFrom)}>adhga</div>
                </div>
            </div>
        </Fragment>
    );
}

export default header;
