import React, { useCallback, useContext, useEffect } from 'react';
import { Box, Paper, Stack, Typography, Grid, Button } from '@mui/material';
import StrategicAreas from './StrategicAreas';
import Explanation from './Explanation';
import ScatterChart from '../charts/ScatterChart';
import BarChart from '../charts/BarChart';
import useDialog from '../../hooks/useDialog';
import StrategicAreasControl from './StrategicAreasControl';
import Recommendation from './Recommendation';
import AIRecommendation from './AIRecommendation';
import { LifeStrategyContext } from '../../context';

const dialogContent = {
    title: 'Usage Instructions',
    content: `This tool is designed to help you create a life strategy.
    It is based on the concept of life areas and their importance.
    You can add, remove and edit life areas and their importance.
    The chart will show you the current state of your life strategy.
    The goal is to have a balanced life strategy.
    You can use the chart to see which areas need more attention and which areas are doing well.
    `,
};

const CreateLS = React.memo(() => {
    const { state, setState } = useContext(LifeStrategyContext);

    const [DialogComponent, openDialog] = useDialog(dialogContent);

    const openDialogCallback = useCallback(openDialog, []);

    useEffect(() => {
        setState({ ...state, showAIRecommendation: false });
    }, []);

    console.log('CreateLS::state::2:', state);

    return (
        <Box sx={{m:0}}>
            <Stack spacing={2}>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" component="h1" color="text.darkBlue">
                        Let's create your Life Strategy!
                    </Typography>
                    <Typography variant="body1" component="h1" color="text.darkBlue">
                        <Button onClick={openDialogCallback} variant="text" color="primary">
                            <span>How to use this tool?</span>
                        </Button>
                    </Typography>
                </Box>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Life Areas and their Units
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                {!state.showAIRecommendation && !state.showRecommendation && <StrategicAreasControl />}
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
            <DialogComponent />
        </Box>
    );
});

export default CreateLS;