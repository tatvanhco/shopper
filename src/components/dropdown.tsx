import { FiChevronDown } from 'react-icons/fi';
import { DropdownItems } from '../data/DropdownItems';
export default function DropdownHover(props: any) {
    return (
        <div className="group relative text-sm">
            {DropdownItems.map((item, index) => {
                return (
                    <>
                        <button className="bg-gray-300 text-gray-700 py-2 inline-flex items-center group">
                            <span className="mr-1">{item.titleDisplay}</span>
                            <FiChevronDown />
                        </button>
                        {/* CHUA HOAN THIEN */}
                        <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-56">
                            {DropdownItems.map((list) => {
                                return (
                                    <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
                                        {list.list}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                );
            })}
            {/* menu list */}
            <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-56">
                <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer"></li>
                <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">United States</li>
                <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">Canada</li>
            </ul>
        </div>
    );
}
