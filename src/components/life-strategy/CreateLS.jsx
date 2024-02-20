import React, { useCallback, useContext, useEffect } from 'react';
import { Box, Paper, Stack, Typography, Grid, Button } from '@mui/material';
import StrategicAreas from './StrategicAreas';
import Explanation from './Explanation';
import Chart from './Chart';
import useDialog from '../../hooks/useDialog';
import StrategicAreasControl from './StrategicAreasControl';
import Recommendation from './Recommendation';
import AIRecommendation from './AIRecommendation';
import { LifeStrategyContext } from '../../context';

// 'This tool is designed to help you create your life strategy. You can use it to analyze your life and set goals for the future. You can also use it to track your progress and make adjustments to your strategy. To get started, click on the "Strategic Life Areas" tab and start adding your goals. You can also use the "Explanation" tab to learn more about the tool and how to use it. Good luck!'

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

    // console.log('CreateLS:::');

    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Let's create your Life Strategy!
                </Typography>
                <Typography variant="body1" component="h1" color="text.darkBlue">
                    <Button onClick={openDialogCallback} variant="text" color="primary">
                        How to use this tool?
                    </Button>
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Strategic Life Areas
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
                            <Chart />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
            <DialogComponent />
        </Box>
    );
});

export default CreateLS;