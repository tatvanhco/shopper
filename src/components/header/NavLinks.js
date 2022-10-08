import React from 'react';
import clsx from 'clsx';
import styles from './header.module.scss';
import '../../asset/globalStyle/globalStyle.scss';
import { MenuItems } from './MenuItems';

import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

function NavLinks() {
    return (
        <div className={clsx(styles.nav)}>
            <ul className={clsx(styles.navMenu)}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className={clsx(styles.navItem)}>
                            <a className={clsx(styles.navLink)} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className={clsx(styles.navIcon)}>
                <li className={clsx(styles.navIconItem)}>
                    <FiSearch />
                </li>
                <li className={clsx(styles.navIconItem)}>
                    <FiUser />
                </li>
                <li className={clsx(styles.navIconItem)}>
                    <FiHeart />
                </li>
                <li className={clsx(styles.navIconItem)}>
                    <FiShoppingCart className="cart-notify" />
                    <span className={clsx(styles.cartNumber)}>2</span>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;
