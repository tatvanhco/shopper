import { useState } from 'react';
import { FiX } from 'react-icons/fi';

export const SizeChart = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <p className="mb-8 flex">
                <img
                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/icons/icon-ruler.svg"
                    alt=""
                    className=""
                />
                <p className="ml-3 underline hover:no-underline cursor-pointer" onClick={() => setShowModal(true)}>
                    Bảng quy đổi size
                </p>
            </p>

            {showModal ? (
                <>
                    <div className="bg-black bg-opacity-20 flex justify-center items-center fixed outline-0 inset-0 z-50">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex justify-center items-center p-5 border-b border-slate-200">
                                    <h3 className="text-xl font-semibold mx-auto">Size Chart</h3>
                                    <button
                                        className="bg-transparent border-0 text-2xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <FiX className="text-[#a6a6a6]" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6">
                                    <table className="border-collapse border border-slate-400 border-spacing-2">
                                        <thead>
                                            <tr className="">
                                                <th className="border border-slate-300 py-4 px-5">Size</th>
                                                <th className="border border-slate-300 py-4 px-5">Chiều cao</th>
                                                <th className="border border-slate-300 py-4 px-5">Cân nặng</th>
                                                <th className="border border-slate-300 py-4 px-5">Ngực</th>
                                                <th className="border border-slate-300 py-4 px-5">Eo</th>
                                                <th className="border border-slate-300 py-4 px-5">Mông</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-slate-300 py-4 px-5">S</td>
                                                <td className="border border-slate-300 py-4 px-5">165-167</td>
                                                <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                <td className="border border-slate-300 py-4 px-5">88-92</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 py-4 px-5">M</td>
                                                <td className="border border-slate-300 py-4 px-5">165-167</td>
                                                <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                <td className="border border-slate-300 py-4 px-5">88-92</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 py-4 px-5">L</td>
                                                <td className="border border-slate-300 py-4 px-5">165-167</td>
                                                <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                <td className="border border-slate-300 py-4 px-5">88-92</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 py-4 px-5">XL</td>
                                                <td className="border border-slate-300 py-4 px-5">165-167</td>
                                                <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                <td className="border border-slate-300 py-4 px-5">88-92</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};
