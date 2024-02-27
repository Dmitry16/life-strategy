import React, { useContext, useEffect, useState } from 'react';
import { Box, Paper, Typography, Accordion, AccordionSummary, AccordionDetails,
    List, ListItem, ListItemText, ListItemButton, Stack} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { LifeStrategyContext } from '../../context';
import useDialog from '../../hooks/useDialog';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const AIRecommendation = () => {
    const { state, setState } = useContext(LifeStrategyContext);
    const [ DialogComponent, openDialog ] = useDialog();

    const [recommendation, setRecommendation] = useState('No recommendation. You are perfect!');

    console.log('AIRecommendation:::state:::', state);

    const url = "https://api.openai.com/v1/chat/completions";

    const sysMsg = `You are a personal life coach. 
    In a conversational professional tone, based on the [User Data] provide a recommendation
    as to what actions to take in order to get a good and balanced life across all areas.`;

    const prompt = `User Data: ${JSON.stringify(state)}`;

    const data = {
        model: "gpt-4-0613",
        messages: [
            { role: "system", content: sysMsg },
            { role: "user", content: prompt },
        ],
    };

    const params = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        method: "POST",
    };

    useEffect(() => {
        if (!state.showAIRecommendation) {
            return;
        }
        fetch(url, params)
            .then(response => response.json())
            .then(data => {
                // return data.choices[0].message.content
                console.log('AIRecommendation:::useEffect:::data:::', data);
                setRecommendation(data.choices[0].message.content);
            })
            .catch(error => {
            console.log("Error:", error);
            return Promise.reject(
                "Ooops! Smth's wrong :/ Please, try again later."
            )});
    }, [state.showAIRecommendation]);

    const handleClick = () => {
        setState({ ...state,
            showAIRecommendation: !state.showAIRecommendation,
        });
    };

    return (
        <Box sx={{}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                    onClick={handleClick}
                >
                    <Typography variant="h6" component="h2" color="text.darkBlue">
                        AI Recommendation
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List dense>
                        <ListItem>
                            <Stack spacing={0}>
                                <ListItemButton onClick={() => openDialog({
                                    content: recommendation
                                })}>
                                    <ListItemText primary='Make it bigger'/>
                                </ListItemButton>
                            </Stack>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <DialogComponent />
        </Box>
    );
};

export default AIRecommendation;