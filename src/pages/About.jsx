import React from 'react';
import { Box, Stack, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { splitLinesAndConvertTagsToReactComponents } from '../utils/content.jsx';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const aboutText = 
`
    This app is built by <b>Mimas Technologies</b> leveraging the <u>Artificial Intelligence</u> (OpenAI GPT 4 model). 
    The goal is to help the User to have a better understanding of their life and to elaborate a personalized life strategy. Which would make their life balanced across all the areas. That cosists in analysing the User's data and providing a recommendation on what actions to take in order to get a more balanced life.
    The main functionalities are next:
    - <b>Data insertion</b>
    - <b>Data Visualizations</b>
    - <b>Data Analysis</b>
    - <b>Life Strategy Recommendation</b>
    The functionality is designed to help to create or adjust the User's life strategy.
    It is based on the concepts of Life Areas and their Units (different aspects of life).
    The goal is to have such a Strategy which would make life balanced in all the Areas and across all the Units.
    - <b>Life Strategy</b> can be seen as an integrated set of choices and actions that enables a person to achieve
    the best possible outcomes in order to have the desired life.
    - <b>Life Areas</b> are common aspects of life that are important to most people.
    - <b>Life Area Units</b> are specific aspects of life that are part of a life area.
    In order to achieve that, the user needs to set or adjust the current state of their life areas and their units.
    After that the system will provide a recommendation on what actions to take in order to get a good and balanced life across all areas.
`;

// console.log('aboutText:::',  formatContent(aboutText));

const About = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    <Grid item xs={16}>
                        <Paper elevation={1} sx={{ mb:2, p:2 }}>
                            {splitLinesAndConvertTagsToReactComponents(aboutText)}
                        </Paper>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
};

export default About;
