import { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    children: any;
};

export const SrcollTopWrap = ({ children }: Props) => {
    let location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return <Fragment>{children}</Fragment>;
};
