import React, { useContext, useState, useEffect } from 'react';
import { Box, Stack, Typography, Grid, Tabs, Tab, Slider } from '@mui/material';
import { LifeStrategyContext } from '../../context';

const Metrics = ({ area }) => {
    const { state, setState } = useContext(LifeStrategyContext);
    const [selectedTab, setSelectedTab] = useState('importance');
    console.log('Metrics::state:::', state);

    useEffect(() => {
        const localState = JSON.parse(localStorage.getItem('state'));
        if (localState) {
            setState(localState);
        }
    }, []);
    
    const selectedUnits = area => Object.keys(state[area]).filter(key => state[area][key].checked);
    
    const getSliderValue = (selectedUnits, selectedTab) => selectedUnits[0] && state[area][selectedUnits[0]][selectedTab];
    const [sliderValue, setSliderValue] = useState(getSliderValue(selectedUnits(area), selectedTab));

    useEffect(() => {
        setSliderValue(getSliderValue(selectedUnits(area), selectedTab));
    }, [selectedTab, area, state]);

    const mapSliderValueToSelectedUnits = (selectedUnits, value) => {
        return selectedUnits.reduce((acc, key) => {
            return {
                ...acc,
                [key]: {
                    ...state[area][key],
                    [selectedTab]: value,
                },
            };
        }, {});
    };

    const handleSliderChange = (event, newValue) => {
        const updatedState = {
            ...state,
            [area]: {
                ...state[area],
                ...mapSliderValueToSelectedUnits(selectedUnits(area), newValue),
            },
        };
        setSliderValue(newValue);
        setState(updatedState);
        localStorage.setItem('state', JSON.stringify(updatedState));
    };


    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const setLabel = label => (
        <Typography variant="caption" component="h1" color="text.darkBlue">
            {label}
        </Typography>
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="tabs example"
            >
                <Tab value="timeSpent" label={setLabel('Time Spent')} />
                <Tab value="importance" label={setLabel('Importance')} />
                <Tab value="satisfaction" label={setLabel('Satisfaction')} />
            </Tabs>
            <Box sx={{ p: 2 }}>
                <Slider
                    aria-label="Time"
                    defaultValue={30}
                    value={sliderValue}
                    onChange={handleSliderChange}
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