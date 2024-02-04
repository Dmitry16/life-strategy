import React from 'react';
import { Box, Paper, Stack, Typography, Grid } from '@mui/material';
import StrategicAreas from './StrategicAreas';
import Explanation from './Explanation';
import Chart from './Chart';

const Login = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Explanation />
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Create your Life Strategy
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Strategic Life Areas
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <StrategicAreas />
                        </Grid>
                        <Grid item xs={8}>
                            <Chart />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
};

export default Login;