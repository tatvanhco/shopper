import { SideBarItem } from 'pages/shop/SideBar';
import * as React from 'react';
import { CheckboxChildren } from 'pages/shop/SideBar/CheckBox';
import { SizeCheckBox } from './sizeCheckBox';
import { FiSearch } from 'react-icons/fi';
import styles from './sidebar.module.scss';
import clsx from 'clsx';
import { List } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { MultipleSelect } from './choosePrice';

// const [checkSize, setCheckSize] = React.useState(value: '');

// const handleCheck = () => {
//     setCheckSize(true)
// };

// function renderThumbHorizontalDefault({ style, ...props }) {
//     const finalStyle = {
//         ...style,
//         cursor: 'pointer',
//         borderRadius: 'inherit',
//         backgroundColor: 'rgba(0,0,0,.2)',
//     };
//     return <div style={finalStyle} {...props} />;
// }

export const data: SideBarItem[] = [
    {
        label: <div className="font-semibold text-lg">Category</div>,
        content: <div className="text-base mt-3">tất cả sản phẩm</div>,
        children: [
            {
                label: <div className="">Áo</div>,
                content: <CheckboxChildren groupName="shirt" />,
            },
            {
                label: <div className="">Quần</div>,
                content: <CheckboxChildren groupName="trousers" />,
            },
        ],
    },
    {
        label: <div className="font-semibold text-lg">Thời trang theo mùa</div>,
        content: <CheckboxChildren groupName="season" />,
        children: [],
    },
    {
        label: <div className="font-semibold text-lg">Kích cỡ</div>,
        content: <SizeCheckBox />,
        children: [],
    },
    {
        label: <div className="font-semibold text-lg">Màu sắc</div>,
        content: <CheckboxChildren groupName="color" />,
        children: [],
    },
    {
        label: <div className="font-semibold text-lg">Thương hiệu</div>,
        content: (
            <>
                <div className="flex flex-wrap items-stretch relative w-full pb-4">
                    <input
                        className={clsx(
                            styles.from_control,
                            'flex',
                            'flex-auto',
                            'min-w-0',
                            'relative',
                            'w-[1%]',
                            'h-[calc(2.40625rem + 2px)]',
                            'px-3',
                            'py-2',
                            'leading-[1.5]',
                            'text-[.9375rem]',
                            'outline-none',
                        )}
                        type="search"
                        placeholder="Search Brand"
                    />
                    <FiSearch className="absolute right-[16px] top-[12px] w-[18px] h-[18px]" />
                </div>
                <Scrollbars style={{ width: 280, height: 220 }}>
                    <CheckboxChildren groupName="brand" />
                </Scrollbars>
            </>
        ),
        children: [],
    },
    {
        label: <div className="font-semibold text-lg">Giá</div>,
        content: (
            <>
                <CheckboxChildren groupName="price" />
                <div className="">
                    <MultipleSelect />
                </div>
            </>
        ),
        children: [],
    },
];
