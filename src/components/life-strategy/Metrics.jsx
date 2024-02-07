import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';

const Metrics = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Typography variant="caption" component="h1" color="text.darkBlue">
                    Time
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" component="h1" color="text.darkBlue">
                    Importance
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" component="h1" color="text.darkBlue">
                    Satisfection
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Metrics;