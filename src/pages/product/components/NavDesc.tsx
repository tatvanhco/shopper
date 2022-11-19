import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ShipTable } from './shipTable';
import { Description } from './Description';
import { SizeFit } from './SizeFit';

export const NavDesc = () => {
    const [value, setValue] = useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="my-20">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList className="items-align" onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Mô tả" value="1" />
                            <Tab label="Kích cỡ" value="2" />
                            <Tab label="Vận chuyển" value="3" />
                        </TabList>
                    </Box>
                    <div className="my-8 mx-[12rem] ">
                        <TabPanel value="1">
                            <Description />
                        </TabPanel>
                        <TabPanel value="2">
                            <SizeFit />
                        </TabPanel>
                        <TabPanel value="3">
                            <ShipTable />
                        </TabPanel>
                    </div>
                </TabContext>
            </Box>
        </div>
    );
};
