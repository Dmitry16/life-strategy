import React, { useState, useContext, useEffect } from 'react';
import { Box, Stack, Typography, InputLabel, MenuItem, FormControl, Select, Paper,
} from '@mui/material';
import Metrics from './Metrics';
import LifeAreaUnits from './LifeAreaUnits';
import { LifeStrategyContext } from '../../context';

const StrategicAreasControl = React.memo(() => {
    const { state, setState } = useContext(LifeStrategyContext);
    // const [area, setArea] = useState();
    // localStorage.setItem('state', JSON.stringify(state));

    useEffect(() => {
        const localState = JSON.parse(localStorage.getItem('state'));
        // console.log('StrategicAreasControl::useEffect111:::localState::', localState);
        if (localState) {
            setState(localState);
        }
    }, []);

    useEffect(() => {
        // console.log('StrategicAreasControl::useEffect222:::state::', state);

        localStorage.setItem('state', JSON.stringify(state));
    }, [state.selectedArea]);

    // console.log('StrategicAreasControl::state::', state);

    const handleChange = ({ target: { value }}) => {
        // setArea(value);
        setState({
            ...state,
            selectedArea: value,
        });
    }

    return (
        <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="strategic-areas">Strategic Areas</InputLabel>
                    <Select
                        labelId="strategic-areas"
                        id="strategic-areas"
                        value={state.selectedArea}
                        label="Strategic Areas"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Relationships</MenuItem>
                        <MenuItem value={20}>Body, Mind and Spirituality</MenuItem>
                        <MenuItem value={30}>Community and Social Life</MenuItem>
                        <MenuItem value={40}>Job, learning and finances</MenuItem>
                        <MenuItem value={50}>Interests, hobbies and entertainment</MenuItem>
                        <MenuItem value={60}>Personal care</MenuItem>
                    </Select>
                    <LifeAreaUnits area={state.selectedArea}/>
                    <Metrics area={state.selectedArea}/>
                </FormControl>
            </Box>
        </Paper>
    );
});

export default StrategicAreasControl;