import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

export interface SideBarItem {
    label: any;
    content?: any;
    children?: SideBarItem[];
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    // padding: theme.spacing(2),
}));

export const SideBar: React.FC<SideBarProps> = ({ data }) => {
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            {data.map((item: SideBarItem) => {
                return (
                    <Accordion expanded={expanded === item.label} onChange={handleChange(item.label)}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{item.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="">{item.content}</div>
                            {item.children && (
                                <div className="children">
                                    <SideBar data={item.children} />
                                </div>
                            )}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
};
