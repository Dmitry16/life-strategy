import React from 'react';
import { Box, Paper, Stack, Typography,
    List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import Metrics from './Metrics';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const StrategicAreas = () => {
    return (
        <Box sx={{ mt: 2 }}>
            {/* <Paper elevation={1} sx={{ mb:2, p:2 }}> */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        <Typography variant="h6" component="h2" color="text.darkBlue">
                            Relationships
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            <StyledListItem>
                                <Stack spacing={0}>
                                    <ListItemText primary="Significant other"/>
                                    <Metrics />
                                </Stack>
                            </StyledListItem>
                            <StyledListItem>
                                <Stack spacing={0}>
                                    <ListItemText primary="Family"/>
                                    <Metrics />
                                </Stack>
                            </StyledListItem>
                            <StyledListItem>
                                <Stack spacing={0}>
                                    <ListItemText primary="Friendship"/>
                                    <Metrics />
                                </Stack>
                            </StyledListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            {/* </Paper> */}
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Body, Mind and Spirituality
                </Typography>
                <List dense>
                    <StyledListItem>
                        <Stack spacing={0}>
                            <ListItemText primary="Phisical health/sports"/>
                            <Metrics />
                        </Stack>
                    </StyledListItem>
                    <StyledListItem>
                        <Stack spacing={0}>
                            <ListItemText primary="Mental health/mindfulness"/>
                            <Metrics />
                        </Stack>
                    </StyledListItem>
                    <StyledListItem>
                        <Stack spacing={0}>
                            <ListItemText primary="Spirituality/faith"/>
                            <Metrics />
                        </Stack>
                    </StyledListItem>
                </List>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Community and Social Life
                </Typography>
                <List dense>
                    <StyledListItem>
                        <Stack spacing={0}>
                            <ListItemText primary="Community/citizenship"/>
                            <Metrics />
                        </Stack>
                    </StyledListItem>
                    <StyledListItem>
                        <Stack spacing={0}>
                            <ListItemText primary="Societal engagement"/>
                            <Metrics />
                        </Stack>
                    </StyledListItem>
                </List>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Job, learning and finances
                </Typography>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Interests, hobbies and entertainment
                </Typography>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Personal care
                </Typography>
            </Paper>
        </Box>
    );
};

export default StrategicAreas;
