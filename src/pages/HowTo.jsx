import React from 'react';
import { Box, Stack, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Explanation from '../components/life-strategy/Explanation';
import { splitLinesAndConvertTagsToReactComponents } from '../utils/content.jsx';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const howToInstructions = [
    `
        1. Select a <b> Life Area </b> (e.g. Relations);
        2. Select one or several <b> Units </b> (e.g. Family) setting or adjusting the importance, satisfaction and effort (time spent) values with the slider.
        The charts will show you the current state of your Life Areas (Bar chart) and their units (Scatter chart).
        As to the <b> Life Areas </b>, ideally you want to have most of them in green color.
        The green color means that the status of the Area is high (good).
        The yellow color means the status is neutral (average). 
        The red color means the status is low (bad).
        Regarding to the <b>Units</b> ideally most of them should be in the upper right corner of the scatter chart. Such position means that the relation between importance and satisfaction is good so its status is high. In other words user is doing well in that aspect of their life.
        For example, if a Life Unit (e.g. Family) has the relation of hight importance/ high satisfaction the status of the Unit will be high.
        If the relation is high importance/ low satisfaction the status of the unit is low. This means user is not doing well in that aspect of their life. 
        You can use the charts to see which areas need more attention and which areas are doing well.
    `,
];

const About = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    <Grid item xs={16}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            {splitLinesAndConvertTagsToReactComponents(howToInstructions[0])}
                        </Paper>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h5" component="h1" color="text.darkBlue">
                                Strategic Life Areas
                            </Typography>
                            <Typography variant="body1" component="h1" color="text.darkBlue">
                                Life Strategy is built on the foundation of Strategic Life Areas. These are areas of life that are important to you and that you want to improve.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h6" component="h2" color="text.darkBlue">
                                Relationships
                            </Typography>
                            <List dense>
                                <StyledListItem>
                                    <ListItemText primary="Significant other"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Family"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Friendship"/>
                                </StyledListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h6" component="h2" color="text.darkBlue">
                                Body, Mind and Spirituality
                            </Typography>
                            <List dense>
                                <StyledListItem>
                                    <ListItemText primary="Phisical health/sports"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Mental health/mindfulness"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Spirituality/faith"/>
                                </StyledListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h6" component="h2" color="text.darkBlue">
                                Community and Social Life
                            </Typography>
                            <List dense>
                                <StyledListItem>
                                    <ListItemText primary="Community/citizenship"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Societal engagement"/>
                                </StyledListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h6" component="h2" color="text.darkBlue">
                                Job, learning and finances
                            </Typography>
                            <List dense>
                                <StyledListItem>
                                    <ListItemText primary="Job"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Learning"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Finances"/>
                                </StyledListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h6" component="h2" color="text.darkBlue">
                                Interests, hobbies and entertainment
                            </Typography>
                            <List dense>
                                <StyledListItem>
                                    <ListItemText primary="Interests"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Hobbies"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Entertainment"/>
                                </StyledListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h6" component="h2" color="text.darkBlue">
                                Personal care
                            </Typography>
                            <List dense>
                                <StyledListItem>
                                    <ListItemText primary="Physiological needs"/>
                                </StyledListItem>
                                <StyledListItem>
                                    <ListItemText primary="Activities of daily living"/>
                                </StyledListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Explanation />
                </Grid>
            </Stack>
        </Box>
    );
};

export default About;
