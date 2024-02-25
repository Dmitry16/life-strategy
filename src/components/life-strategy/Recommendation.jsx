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

    // const mapUnitStatusToNumber = (unitStatus) => {
    //     switch (unitStatus) {
    //         case 'weak':
    //             return 1;
    //         case 'neutral':
    //             return 2;
    //         case 'strong':
    //             return 3;
    //         default:
    //             return 0;
    //     }
    // };

    // const calculateAreaStatus = (area) => {
    //     const units = Object.entries(area).filter(([key, value]) => key !== 'name').map(([key, value]) => value);

    //     const unitsStatus = units.map(unit => unit.status);
    //     const unitsStatusNumbers = unitsStatus.map(unitStatus => mapUnitStatusToNumber(unitStatus));
    //     const sum = unitsStatusNumbers.reduce((acc, cur) => acc + cur, 0);
    //     const average = sum / unitsStatusNumbers.length;
    //     if (average < 2) {
    //         return 'weak';
    //     } else if (average === 2) {
    //         return 'neutral';
    //     } else {
    //         return 'strong';
    //     }
    // };

    const displayWeakAreas = () => {
        const areas = Object.entries(state)
            .filter(([key, value]) => key !== 'showRecommendation' && key !== 'showAIRecommendation')
            .map(([key, value]) => value);
        // const weakAreas = areas.filter(area => calculateAreaStatus(area) === 'weak');
        // return (
        //     <List dense>
        //         {weakAreas.map(weakArea => (
        //             <ListItem key={weakArea.id}>
        //                 <Stack spacing={0}>
        //                     <ListItemText primary={weakArea.name}/>
        //                 </Stack>
        //             </ListItem>
        //         ))}
        //     </List>
        // );
    };

    // console.log('Recommendation:::displayWeakAreas:::', displayWeakAreas());

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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                                // onClick={handleClick}
                            >
                                <Typography variant="body1" component="h1" color="text.darkBlue">
                                    The current state of your life areas and area units
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{mt: 0, pt: 0}}>
                                <ListItem>
                                    <Stack spacing={0}>
                                        <StyledListItemText primary="Weak areas:"/>
                                        {/* {displayWeakAreas()} */}
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
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                                // onClick={handleClick}
                            >
                                <Typography variant="body1" component="h1" color="text.darkBlue">
                                    Actions you could take to improve your life strategy
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{mt: 0, pt: 0}}>
                                <Typography sx={{pl: 1, fontSize: 14}} variant="body1" component="h1" color="text.darkBlue">
                                    {recommendationText}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Recommendation;