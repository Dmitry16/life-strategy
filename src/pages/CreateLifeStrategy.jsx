import React from 'react';
import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemButton,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import useDialog from '../hooks/useDialog';
import CreateLS from '../components/life-strategy/CreateLS';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const CreateLifeStrategy = () => {
    const [DialogComponent, openDialog] = useDialog();

    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <CreateLS />
            </Stack>
        </Box>
    );
};

export default CreateLifeStrategy;
