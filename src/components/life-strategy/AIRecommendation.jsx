import React, { useContext, useEffect, useState } from 'react';
import { Box, Paper, Typography, Accordion, AccordionSummary, AccordionDetails,
    List, ListItem, ListItemText, ListItemButton, Stack} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { LifeStrategyContext } from '../../context';
import useDialog from '../../hooks/useDialog';
import CommentIcon from '@mui/icons-material/Comment';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const AIRecommendation = () => {
    const { state, setState } = useContext(LifeStrategyContext);
    const [ DialogComponent, openDialog ] = useDialog();

    const [recommendation, setRecommendation] = useState('No recommendation. You are perfect!');

    // console.log('AIRecommendation:::state:::', state);

    const url = "https://api.openai.com/v1/chat/completions";

    // const sysMsg = `You are sochiopatical nerdish sarcastic Sheldon Cooper (Big bang theory). 
    const sysMsg = `You are sochiopatical, nerdish, sarcastic, bad ass Dr House. 
    In an expressive but entertaining tone, based on the [User Data] provide a brief structured recommendation 
    of 100-120 words use bullet points, numbered lists, etc. (e.g. 1. Do this \n 2. Do that \n 3. Do this etc.)
    as to what actions to take in order to get a good and balanced life across all areas. Explain how could I 
    leverage the strong areas in order to improve the weak areas.`;
    // const sysMsg = `You are a agresively lecturing gen-z oriented pickup coach. 
    // In an expressive but entertaining tone, based on the [User Data] provide a brief structured recommendation 
    // of 100-150 words use bullet points, numbered lists, etc. (e.g. 1. Do this \n 2. Do that \n 3. Do this etc.)
    // as to what actions to take in order to get a good and balanced life across all areas. Explain how could I 
    // leverage the strong areas in order to improve the weak areas.`;
    // const sysMsg = `You are a helpful personal life coach. 
    // In a professional tone, based on the [User Data] provide a brief structured recommendation 
    // of 100-150 words use bullet points, numbered lists, etc. (e.g. 1. Do this \n 2. Do that \n 3. Do this etc.)
    // as to what actions to take in order to get a good and balanced life across all areas. Explain how could I 
    // leverage the strong areas in order to improve the weak areas.`;

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
            // .catch(error => {
            // console.log("Error:", error);
            // return Promise.reject(
            //     "Ooops! Smth's wrong :/ Please, try again later."
            // )});
        // setRecommendation(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //     Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        //     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        //     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        // );

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
                    <CommentIcon sx={{mt: 0.5, mr: 4, color: 'text.darkBlue'}}/>
                    <Typography variant="h6" component="h2" color="text.darkBlue">
                        AI Recommendation
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List dense>
                        <ListItem>
                            <Stack spacing={0}>
                                <ListItemButton
                                    alignItems="center"
                                    sx={{
                                        border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px',
                                        '&:hover': { backgroundColor: '#f0f0f0' },
                                    }}
                                    onClick={() => openDialog({
                                        content: recommendation
                                })}>
                                    <ListItemText
                                        sx={{
                                            fontSize: '1.2rem', fontWeight: 600, color: 'text.darkBlue'
                                        }}
                                        primary='Full page display'
                                    />
                                </ListItemButton>
                                <ListItemText
                                    sx={{
                                        fontSize: '1.2rem', fontWeight: 600, color: 'text.darkBlue'
                                    }}
                                    primary={recommendation}
                                />
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