import React, { useContext } from 'react';
import { Box, Paper, Typography, Accordion, AccordionSummary, AccordionDetails,
    List, ListItem, ListItemText, Stack} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { LifeStrategyContext } from '../../context';

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
    '.MuiTypography-root': {
        fontSize: '1rem',
    },
}));

const Recommendation = () => {
    const { state, setState } = useContext(LifeStrategyContext);

    const handleClick = () => {
        setState({ ...state,
            showRecommendation: !state.showRecommendation,
        });
    };

    return (
        <Box sx={{}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                    onClick={handleClick}
                >
                    <Typography variant="h6" component="h2" color="text.darkBlue">
                        Recommendation to your life strategy
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List dense>
                        <Typography variant="body1" component="h1" color="text.darkBlue">
                            The main idea is to have all the life areas in balance. So the basic strategy is to improve the weak, maintain or improove the neutral and levarage the strong areas.
                        </Typography>
                        <ListItem>
                            <Stack spacing={0}>
                                <StyledListItemText primary="Weak areas:"/>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack spacing={0}>
                                <StyledListItemText primary="Neutral areas:"/>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack spacing={0}>
                                <StyledListItemText primary="Strong areas:"/>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack spacing={0}>
                                <StyledListItemText primary="Strategy:"/>
                            </Stack>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Recommendation;