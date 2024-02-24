import React, { useContext } from 'react';
import { Box, Paper, Typography, Accordion, AccordionSummary, AccordionDetails,
    List, ListItem, ListItemText, Stack} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { LifeStrategyContext } from '../../context';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const AIConclusion = () => {
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
                        <StyledListItem>
                            <Stack spacing={0}>
                                <ListItemText primary="Strong areas"/>
                            </Stack>
                        </StyledListItem>
                        <StyledListItem>
                            <Stack spacing={0}>
                                <ListItemText primary="Weak areas"/>
                            </Stack>
                        </StyledListItem>
                        <StyledListItem>
                            <Stack spacing={0}>
                                <ListItemText primary="Strategy"/>
                            </Stack>
                        </StyledListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default AIConclusion;