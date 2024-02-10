import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { initialState } from '../../state';


const LifeAreaUnits = ({ area }) => {
    const [state, setState] = useState(initialState);

    const handleChange = event => {
        console.log('event.target.checked:::', event.target);

        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    switch (area) {
        case 10:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.signOther} name="signOther" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Significant other" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.family} name="family" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Family" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.friendship} name="friendship" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Friendship" 
                    />
                </FormGroup>
            );
        case 20:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.phisicalHealth} name="phisicalHealth" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Phisical health/sports" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.mentalHealth} name="mentalHealth" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Mental health" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.spirit} name="spirit" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Spirituality" 
                    />
                </FormGroup>
            );
        case 30:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.community} name="community" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Community" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.socialLife} name="socialLife" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Social life" 
                    />
                </FormGroup>
            );
        case 40:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.job} name="job" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Job" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.learning} name="learning" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Learning" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.finances} name="finances" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Finances" 
                    />
                </FormGroup>
            );
        case 50:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.interests} name="interests" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Interests" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.hobbies} name="hobbies" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Hobbies" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.fun} name="fun" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Fun" 
                    />
                </FormGroup>
            );
        case 60:
            return (
                <FormGroup>
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.physNeeds} name="physNeeds" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Physiological Needs" 
                    />
                    <FormControlLabel onChange={handleChange}
                        control={<Checkbox checked={state.dailyActivities} name="dailyActivities" size="small"
                        inputProps={{'aria-label': 'controlled'}}/>}
                        label="Daily Activities" 
                    />
                </FormGroup>
            );
        default: return <></>;
    };
};

export default LifeAreaUnits;
