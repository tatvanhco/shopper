export interface featureProps {
    heading: string;
    links: string[];
}

const FooterFeature = () => {
    const featureData: featureProps[] = [
        {
            heading: 'Về chúng tôi',
            links: ['Câu chuyện thương hiệu', 'Điều khoản và điều kiện', 'Tin tức'],
        },
        {
            heading: 'Chính sách bán hàng',
            links: ['Chính sách đổi trả', 'Hướng dẫn mua hàng', 'Chính sách giao nhận', 'Chính sách bảo mật'],
        },
        {
            heading: 'Tư vấn',
            links: ['Tư vấn phong cách', 'Tư vấn chọn size', 'Hỏi đáp'],
        },
        {
            heading: 'Liên hệ',
            links: ['1-202-555-0105', '1-202-555-0106', 'help@shopper.com'],
        },
    ];
    return (
        <>
            {featureData.map((item: featureProps, index) => (
                <div>
                    <h1 className="mb-3 font-semibold uppercase">{item.heading}</h1>
                    <ul className="text-footerColor">
                        {item.links.map((link) => (
                            <li className="pb-1">
                                <a href="" className="hover:text-[#a6a6a6]">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default FooterFeature;
