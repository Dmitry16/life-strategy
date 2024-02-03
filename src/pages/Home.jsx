import React from 'react';
import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemButton,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import useDialog from '../hooks/useDialog';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const Home = () => {
    const [DialogComponent, openDialog] = useDialog();

    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Strategic Life: Applying Boardroom Thinking to Personal Success
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Design Your Desired Life
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Create Your Life Strategy
                </Typography>
            </Stack>
        </Box>
    );
};

export default Home;
