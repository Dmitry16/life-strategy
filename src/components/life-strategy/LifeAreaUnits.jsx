import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const LifeAreaUnits = ({ area }) => {
    switch (area) {
        case 10:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Significant other" />
                    <FormControlLabel control={<Checkbox />} label="Family" />
                    <FormControlLabel control={<Checkbox />} label="Friendship" />
                </FormGroup>
            );
        case 20:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Phisical health/sports" />
                    <FormControlLabel control={<Checkbox />} label="Mental health" />
                    <FormControlLabel control={<Checkbox />} label="Spirituality" />
                </FormGroup>
            );
        case 30:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Community" />
                    <FormControlLabel control={<Checkbox />} label="Social life" />
                </FormGroup>
            );
        case 40:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Job" />
                    <FormControlLabel control={<Checkbox />} label="Learning" />
                    <FormControlLabel control={<Checkbox />} label="Finances" />
                </FormGroup>
            );
        case 50:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Interests" />
                    <FormControlLabel control={<Checkbox />} label="Hobbies" />
                    <FormControlLabel control={<Checkbox />} label="Entertainment" />
                </FormGroup>
            );
        case 60:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Personal care" />
                </FormGroup>
            );
        default:
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Significant other" />
                    <FormControlLabel control={<Checkbox />} label="Family" />
                    <FormControlLabel control={<Checkbox />} label="FriendshipQQQ" />
                </FormGroup>
            );
    };
};

export default LifeAreaUnits;
