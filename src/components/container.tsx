import React from 'react';

type Props = {
    children: any;
};
export const BodyContainer = ({ children }: Props) => {
    return <div className="lg:px-[2rem] xl:px-[20%] px-10">{children}</div>;
};
