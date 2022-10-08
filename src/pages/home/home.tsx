import styles from './home.module.scss';
import '../../asset/globalStyle/globalStyle.scss';
import { FiTruck, FiRepeat, FiLock, FiTag } from 'react-icons/fi';
function Home() {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4">
                <div className="bg-cover bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-1.jpg')]">
                    <div className="flex flex-col text-center p-10">
                        <div className="mt-32">
                            <h1 className="text-5xl font-extrabold text-white">Women</h1>
                        </div>
                        <div className="mt-32">
                            <a className="rounded-none border-white px-6 py-3 bg-white font-semibold">Shop Women</a>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-200"> fg</div>
                <div className="bg-blue-200">3 fg</div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:mx-18 mx-12 pt-4 pb-4 border-b border-e5e5e5">
                <div className="p-3">
                    <div className="flex">
                        <FiTruck className="text-secondColor" size={'19'} />
                        <div className="ml-4">
                            <h6 className="text-sm mb-1 font-semibold uppercase tracking-wide">Free Shipping</h6>
                            <p className="text-sm text-color767676">From all orders over $100</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="flex">
                        <FiRepeat className="text-secondColor" size={'19'} />
                        <div className="ml-4">
                            <h6 className="text-sm mb-1 font-semibold uppercase tracking-wide">FREE RETURNS</h6>
                            <p className="text-sm text-color767676">Return money within 30 days</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="flex">
                        <FiLock className="text-secondColor" size={'19'} />
                        <div className="ml-4">
                            <h6 className="text-sm mb-1 font-semibold uppercase tracking-wide">SECURE SHOPPING</h6>
                            <p className="text-sm text-color767676">You're in safe hands</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="flex">
                        <FiTag className="text-secondColor" size={'19'} />
                        <div className="ml-4">
                            <h6 className="text-sm mb-1 font-semibold uppercase tracking-wide">OVER 10,000 STYLES</h6>
                            <p className="text-sm text-color767676">We have everything you need</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <>
        //     <section>
        //         <div className={styles.containerPromo}>
        //             <div className={clsx(styles.container)}>
        //                 <div className="row">
        //                     <div className={clsx(styles.headingPromo, 'col-lg-12', 'col-md-12', 'col-sm-12')}>
        //                         <span> ⚡️ Happy Holiday Deals on Everything ⚡️ </span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={clsx(styles.container, 'row')}>
        //             <div className={clsx(styles.cart, 'col-lg-4')}>
        //                 <div className={styles.cartBody}>
        //                     <h1>Women</h1>
        //                     <a>Shop Women</a>
        //                 </div>
        //                 <img src={require('../../asset/img/cover-1.jpg')} alt="" />
        //             </div>
        //             <div className={clsx(styles.cart, 'col-lg-4')}>
        //                 <div className={styles.cartBody}>
        //                     <h1>Men</h1>
        //                     <a>Shop Men</a>
        //                 </div>
        //                 <img src={require('../../asset/img/cover-2.jpg')} alt="" />
        //             </div>
        //             <div className={clsx(styles.cart, 'col-lg-4')}>
        //                 <img src={require('../../asset/img/cover-3.jpg')} alt="" />
        //                 <div className={styles.cartBody}>
        //                     <h1>Kids</h1>
        //                     <a>Shop Kids</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     <div className={clsx(styles.container)}>
        //         <div className="row flx-wrap pb-7 px-7 border-bottom">
        //             <div className="col-lg-3 col-md-6 col-sm-12" style={{ backgroundColor: 'blue'}}>
        //                 <div className="d-flex mb-6">
        //                     {/* Icon*/}
        //                     <FiTruck className="text-primary fs-lg" />
        //                     {/* Body */}
        //                     <div className="ms-6">
        //                         {/* Heading */}
        //                         <h6 className="heading-xxs mb-1">Free Shipping</h6>
        //                         {/* Text */}
        //                         <p className="fs-sm">From all orders over $100</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6 col-sm-12" style={{ backgroundColor: 'red' }}>
        //             <div className="d-flex mb-6">
        //                     {/* Icon*/}
        //                     <FiTruck className="text-primary fs-lg" />
        //                     {/* Body */}
        //                     <div className="ms-6">
        //                         {/* Heading */}
        //                         <h6 className="heading-xxs mb-1">Free Shipping</h6>
        //                         {/* Text */}
        //                         <p className="fs-sm">From all orders over $100</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6 col-sm-12 " style={{ backgroundColor: 'yellow' }}>
        //             <div className="d-flex mb-6">
        //                     {/* Icon*/}
        //                     <FiTruck className="text-primary fs-lg" />
        //                     {/* Body */}
        //                     <div className="ms-6">
        //                         {/* Heading */}
        //                         <h6 className="heading-xxs mb-1">Free Shipping</h6>
        //                         {/* Text */}
        //                         <p className="fs-sm">From all orders over $100</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-3 col-md-6 col-sm-12" style={{ backgroundColor: 'pink' }}>
        //                 <div className="d-flex mb-6">
        //                     {/* Icon*/}
        //                     <FiTruck className="text-primary fs-lg" />
        //                     {/* Body */}
        //                     <div className="ms-6">
        //                         {/* Heading */}
        //                         <h6 className="heading-xxs mb-1">Free Shipping</h6>
        //                         {/* Text */}
        //                         <p className="fs-sm">From all orders over $100</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}

export default Home;
