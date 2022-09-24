import clsx from 'clsx';
import styles from './home.module.scss';

function Home() {
    return (
        <>
            <h2 className={clsx(styles.heading)}>Trang chủ</h2>
            <h2 className={clsx(styles.heading, styles.active)}>Trang chủ</h2>
        </>
    );
}

export default Home;
