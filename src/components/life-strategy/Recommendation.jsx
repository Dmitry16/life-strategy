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

const recommendationText = `The main idea is to have all your life areas strong and balanced. To achieve that,
    you need to get all the life units more or less at the same level and as strong as possible.
    So the basic strategy is to improve the weak units, maintain or improve the neutral, maintain the strong units or 
    levarage them to improve the weak or neutral ones.`;

const Recommendation = () => {
    const { state, setState } = useContext(LifeStrategyContext);

    const handleClick = () => {
        setState({ ...state,
            showRecommendation: !state.showRecommendation,
        });
    };

    // const getStrongAreas = () => {
    //     return 

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
                <AccordionDetails sx={{mt: 0, pt: 0}}>
                    <List dense>
                        <Typography variant="body1" component="h1" color="text.darkBlue">
                            The current state of your life areas/units is the following:
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
                                <StyledListItemText primary="Recommended strategy:"/>
                                <Typography sx={{pl: 1, fontSize: 14}} variant="body1" component="h1" color="text.darkBlue">
                                    {recommendationText}
                                </Typography>
                            </Stack>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Recommendation;