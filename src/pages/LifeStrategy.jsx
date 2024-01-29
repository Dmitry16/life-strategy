import React from 'react';
import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemButton,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const LifeStrategy = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Typography variant="h4" component="h1" color="text.darkBlue">
                    Life Strategy
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Is an integrated set of choices and actions that enables a person to achieve
                    the best possible outcomes in life.
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        <Typography variant="h6" component="h1" color="text.darkBlue">
                            To create a Life Strategy, you need to answer the following questions:
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="How do I define a great life?"/>
                                </ListItemButton>
                            </StyledListItem>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="What is my life purpose?"/>
                                </ListItemButton>
                            </StyledListItem>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="What is my life vision?"/>
                                </ListItemButton>
                            </StyledListItem>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="How do I assess my life portfolio?"/>
                                </ListItemButton>
                            </StyledListItem>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="What can I learn from best practises and benchmarks?"/>
                                </ListItemButton>
                            </StyledListItem>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="What life portfolio choices can I make?"/>
                                </ListItemButton>
                            </StyledListItem>
                            <StyledListItem>
                                <ListItemButton>
                                <ListItemText primary="How can I ensure successful, sustained life change?"/>
                                </ListItemButton>
                            </StyledListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Box>
    );
};

export default LifeStrategy;
