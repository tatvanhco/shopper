const ProductSize = [
    { title: 'S' },
    { title: 'M' },
    { title: 'L' },
    { title: 'XL' },
    { title: '2XL' },
    { title: '3XL' },
    { title: '4XL' },
    { title: 'One Size' },
];

export const SizeCheckBox = () => {
    return (
        <div className="m-0">
            {ProductSize.map((item, index) => {
                return (
                    <div key={index} className="inline-block mr-1 ">
                        <div className="flex items-center mb-2 mr-2 min-h-[1.5rem] ">
                            <input hidden type="radio" name="sizeRadio" id="sizeRadio1" value={item.title} />
                            <label
                                htmlFor="sizeRadio1"
                                className="border border-[#ddd] p-2 text-center min-w-[3rem] cursor-pointer inline-block text-[#767676] hover:border-black hover:text-[#000]"
                            >
                                {item.title}
                            </label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
