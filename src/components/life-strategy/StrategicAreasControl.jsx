import React, { useState } from 'react';
import { Box, Stack, Typography, InputLabel, MenuItem, FormControl, Select, Paper,
} from '@mui/material';
import Metrics from './Metrics';
import LifeAreaUnits from './LifeAreaUnits';

const StrategicAreasControl = () => {
    const [area, setArea] = useState(40);

    const handleChange = ({ target: { value }}) => {
        setArea(value);
    }

    return (
        <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="strategic-areas">Strategic Areas</InputLabel>
                    <Select
                        labelId="strategic-areas"
                        id="strategic-areas"
                        value={area}
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
                    <LifeAreaUnits area={area}/>
                    <Metrics area={area}/>
                </FormControl>
            </Box>
        </Paper>
    );
};

export default StrategicAreasControl;