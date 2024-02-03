import React from 'react';
import { Box, Paper, Stack, Typography, Grid } from '@mui/material';
import SLA from './StrategicLifeAreas';
import Explanation from './Explanation';

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
                    {/* <Paper elevation={1} sx={{ p: 2 }}> */}
                        <SLA />
                    {/* </Paper> */}
                </Box>
            </Stack>
        </Box>
    );
};

export default Login;