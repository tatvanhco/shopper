import * as React from 'react';
import * as productServices from 'services/productServices';
import { Button, List, ListItemButton, ListItemText } from '@mui/material';

export const SideBar = (props: any) => {
    const [categorys, setCategorys] = React.useState<productServices.Categories[]>();

    React.useEffect(() => {
        productServices.getCateGory().then((data) => {
            setCategorys(data);
        });
    }, []);

    const handlechoose = (e: any) => {
        props.handleChange(e);
    };
    return (
        <>
            <div className="">
                <List>
                    <ListItemText>
                        <p className="text-xl font-semibold hover:cursor-pointer" onClick={(e) => handlechoose(0)}>
                            Tất cả sản phẩm
                        </p>
                    </ListItemText>
                    {categorys?.map((categoryItem) => {
                        return (
                            <>
                                <ListItemButton>
                                    <ListItemText onClick={(e) => handlechoose(categoryItem.id)}>
                                        <p className="text-xl font-semibold hover:cursor-default">
                                            {categoryItem.name}
                                        </p>
                                    </ListItemText>
                                </ListItemButton>
                            </>
                        );
                    })}
                </List>
            </div>
        </>
    );
};
