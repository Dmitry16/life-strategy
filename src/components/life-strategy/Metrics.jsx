import React, { useContext, useState, useEffect } from 'react';
import { Box, Stack, Typography, Grid, Tabs, Tab, Slider } from '@mui/material';
import { LifeStrategyContext } from '../../context';
import { calculateAndAddStatusToLifeUnit } from '../../utils/status';

const Metrics = ({ area }) => {
    const { state, setState } = useContext(LifeStrategyContext);
    const [selectedTab, setSelectedTab] = useState('importance');
    // console.log('Metrics::state:::', state);

    useEffect(() => {
        const localState = JSON.parse(localStorage.getItem('state'));
        if (localState) {

            // console.log('Metrics::useEffect::localState:::', localState);

            setState(localState);
        }
    }, []);
    
    const selectedUnits = area => area && Object.keys(state[area]).filter(key => state[area][key].checked) || [];
    
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

    const mapUnitStatusToNumber = (unitStatus) => {
        switch (unitStatus) {
            case 'weak':
                return 1;
            case 'neutral':
                return 2;
            case 'strong':
                return 3;
            default:
                return 0;
        }
    };

    const calculateAreaStatus = (area) => {
        const units = Object.entries(area).filter(([key, value]) => key !== 'name').map(([key, value]) => value);

        const unitsStatus = units.map(unit => unit.status);
        const unitsStatusNumbers = unitsStatus.map(unitStatus => mapUnitStatusToNumber(unitStatus));
        const sum = unitsStatusNumbers.reduce((acc, cur) => acc + cur, 0);
        const average = sum / unitsStatusNumbers.length;
        if (average < 2) {
            return ['weak', 25];
        } else if (average === 2) {
            return ['neutral', 50];
        } else {
            return ['strong', 75];
        }
    };

    // console.log('Metrics::calculateAreaStatus:::', calculateAreaStatus(state[area]));

    const mapAreaStatusToAreasData = (state, area) => {
        // console.log('Metrics::mapAreaStatusToAreasData::state:::', state);

        const updatedState = {...state};
        const [areaStatus, points] = calculateAreaStatus(state[area]);

        console.log('Metrics::mapAreaStatusToAreasData::areaStatus:::', areaStatus);

        updatedState.areasData = {
            ...updatedState.areasData,
            [area]: {
                ...updatedState.areasData[area],
                status: areaStatus,
                points,
            },
        };
        return updatedState;
    };

    // console.log('Metrics::mapAreaStatusToAreasData:::', mapAreaStatusToAreasData(state, area));

    const handleSliderChange = (event, newValue) => {
        const stateWithSliderValue = {
            ...state,
            [area]: {
                ...state[area],
                ...mapSliderValueToSelectedUnits(selectedUnits(area), newValue),
            },
        };

        // console.log('Metrics::handleSliderChange::111:::', stateWithSliderValue);

        const updatedState = calculateAndAddStatusToLifeUnit(stateWithSliderValue);

        const updatedStateWithAreaStatus = mapAreaStatusToAreasData(updatedState, area);

        // console.log('Metrics::handleSliderChange::updatedStateWithAreaStatus::222:', updatedStateWithAreaStatus);

        localStorage.setItem('state', JSON.stringify(updatedStateWithAreaStatus));
        setSliderValue(newValue);
        setState(updatedStateWithAreaStatus);
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
