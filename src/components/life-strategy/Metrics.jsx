import React, { useContext } from 'react';
import { Box, Stack, Typography, Grid, Tabs, Tab, Slider } from '@mui/material';
import { LifeStrategyContext } from '../../context';

const Metrics = ({area}) => {
    const {state, setState} = useContext(LifeStrategyContext);
    
    console.log('Metrics::state:::', state);

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const setLabel = label => (
        <Typography variant="caption" component="h1" color="text.darkBlue">
            {label}
        </Typography>
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="tabs example"
            >
                <Tab value="one" label={setLabel('Time')} />
                <Tab value="two" label={setLabel('Importance')} />
                <Tab value="three" label={setLabel('Satisfaction')} />
            </Tabs>
            <Box sx={{ p: 2 }}>
                <Slider
                    aria-label="Time"
                    defaultValue={30}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={100}
                />
            </Box>
        </Box>
      );
};

export default Metrics;