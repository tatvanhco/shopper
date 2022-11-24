import React from 'react';

type Props = {
    children: any;
};
export const BodyContainer = ({ children }: Props) => {
    return <div className="xl:px-[15%] px-10">{children}</div>;
};
