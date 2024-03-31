import React, { useContext, useEffect } from 'react';
import { Box, Paper, Stack, Typography, Grid, Button } from '@mui/material';
import ScatterChart from '../charts/ScatterChart';
import BarChart from '../charts/BarChart';
import StrategicAreasControl from './StrategicAreasControl';
import Recommendation from './Recommendation';
import AIRecommendation from './AIRecommendation';
import { LifeStrategyContext } from '../../context';
import StepperComponent from '../Stepper';

const CreateLS = React.memo(() => {
    const { state, setState } = useContext(LifeStrategyContext);

    useEffect(() => {
        setState({ ...state, showAIRecommendation: false });
    }, []);

    // console.log('CreateLS::state::2:', state);

    return (
        <Box sx={{m:0}}>
            <Stack spacing={2}>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" component="h1" color="text.darkBlue">
                        Let's Create Your Life Strategy!
                    </Typography>
                    <Typography variant="body1" component="h1" color="text.darkBlue">
                        <StepperComponent />
                    </Typography>
                </Box>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Life Areas and their Units
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                {!state.showAIRecommendation && !state.showRecommendation &&
                                    <StrategicAreasControl />
                                }
                                <Recommendation />
                                <AIRecommendation />
                            </Stack>
                        </Grid>
                        <Grid item xs={8}>
                            <BarChart />
                            <ScatterChart />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
});

export default CreateLS;