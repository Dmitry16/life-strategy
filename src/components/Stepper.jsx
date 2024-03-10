import React from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Select an Area (e.g. Relationships)', 'Select an Unit (e.g. Family)', 'Set or adjust the importance, satisfaction and effort'];

const StepperComponent = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default StepperComponent;
