import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import * as productServices from 'services/productServices';
import { CateGoryItem } from './category';

export interface SideBarItem {
    label: any;
    content?: any;
}

interface SideBarProps {
    data: SideBarItem[];
}

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
        '&:not(:last-child)': {
            // borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

export const SideBar: React.FC<SideBarProps> = ({ data }) => {
    const [expanded, setExpanded] = React.useState<string | false>('');
    const [categorys, setCategorys] = React.useState<productServices.Categories[]>([]);

    React.useEffect(() => {
        productServices.getCateGory().then((data) => {
            setCategorys(data);
        });
    }, []);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <div className="">
                <Accordion expanded={expanded === 'category'} onChange={handleChange('category')}>
                    <AccordionSummary aria-controls="category-content" id="category-header">
                        <Typography>
                            <p className="font-semibold text-lg">Category</p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="text-base mt-3">tất cả sản phẩm</div>
                        {categorys.map((item) => {
                            return (
                                <div className="children">
                                    <CateGoryItem data={item} />
                                </div>
                            );
                        })}
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="">
                {data.map((item: SideBarItem) => {
                    return (
                        <Accordion expanded={expanded === item.label} onChange={handleChange(item.label)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>{item.label}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="">{item.content}</div>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        </>
    );
};
