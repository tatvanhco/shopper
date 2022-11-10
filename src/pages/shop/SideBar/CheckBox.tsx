import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const CheckboxChildren = (props: any) => {
    let groupItems: any;
    switch (props.groupName) {
        case 'shirt':
            groupItems = {
                groupItem: (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Áo Polo" />
                        <FormControlLabel control={<Checkbox />} label="Áo khoác da lộn" />
                        <FormControlLabel control={<Checkbox />} label="Áo khoác nam kaki" />
                    </FormGroup>
                ),
            };
            break;
        case 'trousers':
            groupItems = {
                groupItem: (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Quần Jeans" />
                        <FormControlLabel control={<Checkbox />} label="Quần Tây" />
                        <FormControlLabel control={<Checkbox />} label="Quần Kaki" />
                        <FormControlLabel control={<Checkbox />} label="Quần thể thao" />
                        <FormControlLabel control={<Checkbox />} label="Quần short" />
                    </FormGroup>
                ),
            };
            break;
        case 'season':
            groupItems = {
                groupItem: (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Mùa hè" />
                        <FormControlLabel control={<Checkbox />} label="Mùa đông" />
                        <FormControlLabel control={<Checkbox />} label="Mùa xuân & mùa thu" />
                    </FormGroup>
                ),
            };
            break;
        case 'color':
            groupItems = {
                groupItem: (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Đen" />
                        <FormControlLabel control={<Checkbox />} label="Trắng" />
                        <FormControlLabel control={<Checkbox />} label="Xanh" />
                        <FormControlLabel control={<Checkbox />} label="Đỏ" />
                        <FormControlLabel control={<Checkbox />} label="Xám" />
                        <FormControlLabel control={<Checkbox />} label="Đỏ đô" />
                        <FormControlLabel control={<Checkbox />} label="Xanh ngọc" />
                    </FormGroup>
                ),
            };
            break;
        case 'brand':
            groupItems = {
                groupItem: (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Owen" />
                        <FormControlLabel control={<Checkbox />} label="4men" />
                        <FormControlLabel control={<Checkbox />} label="Biluxury" />
                        <FormControlLabel control={<Checkbox />} label="Merriman" />
                        <FormControlLabel control={<Checkbox />} label="Novelty" />
                        <FormControlLabel control={<Checkbox />} label="Gucci" />
                        <FormControlLabel control={<Checkbox />} label="Calvin Klein" />
                    </FormGroup>
                ),
            };
            break;
        case 'price':
            groupItems = {
                groupItem: (
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="100.000 VND - 199.000 VND" />
                        <FormControlLabel control={<Checkbox />} label="200.000 VND - 399.000 VND" />
                        <FormControlLabel control={<Checkbox />} label="400.000 VND - 499.000 VND" />
                        <FormControlLabel control={<Checkbox />} label="500.000 trở lên" />
                    </FormGroup>
                ),
            };
            break;
        default:
            break;
    }
    return <div className="">{groupItems.groupItem}</div>;
};
