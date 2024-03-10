import React from 'react';
import { Box, Stack, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Explanation from '../components/life-strategy/Explanation';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const About = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    <Grid item xs={16}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h5" component="h1" color="text.darkBlue">
                                <p>
                                This tool is built leveraging the Artificial Intelligence (OpenAI GPT models) to elaborate a life strategy for the user.
                                The functionality is designed to help an user create or adjust their life strategy.
                                It is based on the concepts of Life Strategy, Life Areas and their Units (different aspects of life).
                                The goal is to have such a Strategy which would make Life balanced across all the Areas.
                                </p>
                                <p>
                                - <b>Life Strategy</b> can be seen as an integrated set of choices and actions that enables a person to achieve
                                the best possible outcomes in order to have the desired life.
                                </p>
                                <p>
                                - <b>Life Areas</b> are common aspects of life that are important to most people.
                                </p>
                                <p>
                                - <b>Life Area Units</b> are specific aspects of life that are part of a life area.
                                </p>
                                <p>
                                In order to achieve that, the user needs to set or adjust the current state of their life areas and their units.
                                After that the system will provide a recommendation on what actions to take in order to get a good and balanced life across all areas.
                                </p>
                                <p>
                                To start off user can switch areas, select one or several units setting or adjusting the importance, satisfaction and effort (time spent).
                                The charts will show you the current state of your life areas (Bar chart) and their units (Scatter chart).
                                As to the Areas, ideally you want to have the most of
                                them in green color. The green color means that the status of the area is good.
                                The yellow color means that the status of the area is average. 
                                The red color means that the status of the area is bad.
                                Regarding to the Units ideally most of them should be in the upper right corner of the scatter chart.
                                Such position of an unit means that the relation between importance and satisfaction is good
                                so its status is high. In other words user is doing well in that aspect of their life.
                                E.g. hight importance/high satisfaction = good, high importance/low satisfaction = bad. 
                                You can use the charts to see which areas need more attention and which areas are doing well.
                                </p>
                            </Typography>
                        </Paper>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            <Typography variant="h5" component="h1" color="text.darkBlue">
                                Strategic Life Areas
                            </Typography>
                            <Typography variant="body1" component="h1" color="text.darkBlue">
                                Life Strategy is built on the foundation of strategic life areas. These are areas of life that are important to you and that you want to improve.
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
