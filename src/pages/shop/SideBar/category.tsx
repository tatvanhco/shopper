import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import * as productServices from 'services/productServices';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface CateGoryChildProps {
    data: productServices.Categories;
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

export const CateGoryItem: React.FC<CateGoryChildProps> = ({ data }) => {
    const [expanded, setExpanded] = useState<string | false>('');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <Accordion expanded={expanded === data.id} onChange={handleChange(data.id)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{data.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {data.childs.map((item) => {
                        return (
                            <FormGroup key={item.id}>
                                <FormControlLabel control={<Checkbox />} label={item.name} />
                            </FormGroup>
                        );
                    })}
                </AccordionDetails>
            </Accordion>
        </>
    );
};
