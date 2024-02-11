import React, { useContext, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { LifeStrategyContext } from '../../context';

const LifeAreaUnits = ({ area }) => {
    const { state, setState } = useContext(LifeStrategyContext);
    // console.log('LifeAreaUnits::state:::', state);

    // reading state from local storage
    useEffect(() => {
        const localState = JSON.parse(localStorage.getItem('state'));
        if (localState) {
            setState(localState);
        }
    }, []);

    const handleChange = ({ target: { value, name, checked }}) => {
        const updatedState = {
            ...state,
            [value]: {
                ...state[value],
                [name]: {
                    ...state[value][name],
                    checked: checked,
                },
            },
        };
        setState(updatedState);
        localStorage.setItem('state', JSON.stringify(updatedState));
    };

    switch (area) {
        case 10:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['10'].significantOther.checked} name="significantOther" size="small"
                        value={10} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Significant other" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['10'].family.checked} name="family" size="small"
                        value={10} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Family" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['10'].friendship.checked} name="friendship" size="small"
                        value={10} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Friendship" 
                    />
                </FormGroup>
            );
        case 20:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['20'].phisicalHealth.checked} name="phisicalHealth" size="small"
                        value={20} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Phisical health/sports" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['20'].mentalHealth.checked} name="mentalHealth" size="small"
                        value={20} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Mental health" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['20'].spirit.checked} name="spirit" size="small"
                        value={20} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Spirituality" 
                    />
                </FormGroup>
            );
        case 30:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['30'].community.checked} name="community" size="small"
                        value={30} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Community" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['30'].socialLife.checked} name="socialLife" size="small"
                        value={30} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Social life" 
                    />
                </FormGroup>
            );
        case 40:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['40'].job.checked} name="job" size="small"
                        value={40} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Job" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['40'].learning.checked} name="learning" size="small"
                        value={40} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Learning" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['40'].finances.checked} name="finances" size="small"
                        value={40} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Finances" 
                    />
                </FormGroup>
            );
        case 50:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['50'].interests.checked} name="interests" size="small"
                        value={50} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Interests" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['50'].hobbies.checked} name="hobbies" size="small"
                        value={50} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Hobbies" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['50'].fun.checked} name="fun" size="small"
                        value={50} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Fun" 
                    />
                </FormGroup>
            );
        case 60:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['60'].physNeeds.checked} name="physNeeds" size="small"
                        value={60} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Physiological Needs" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state['60'].dailyActivities.checked} name="dailyActivities" size="small"
                        value={60} inputProps={{'aria-label': 'controlled'}}/>}
                        label="Daily Activities" 
                    />
                </FormGroup>
            );
        default: return <></>;
    };
};

export default LifeAreaUnits;
