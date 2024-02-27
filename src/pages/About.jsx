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
                        <Typography variant="h5" component="h1" color="text.darkBlue">
                            Life Strategy
                        </Typography>
                        <Typography variant="body1" component="h1" color="text.darkBlue">
                            Is an integrated set of choices and actions that enables a person to achieve
                            the best possible outcomes in order to have the desired life.
                        </Typography>
                        <Typography variant="h5" component="h1" color="text.darkBlue">
                            Strategic Life Areas
                        </Typography>
                        <Typography variant="body1" component="h1" color="text.darkBlue">
                            Life Strategy is built on the foundation of strategic life areas. These are areas of life that are important to you and that you want to improve.
                        </Typography>
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
