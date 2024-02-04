import React from 'react';
import { Box, Grid, Paper, Stack, Typography,
    List, ListItem, ListItemText, ListItemButton
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const StrategicAreas = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Relationships
                </Typography>
                <List dense>
                    <StyledListItem>
                        <ListItemText primary="Significant other"/>
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Family"/>
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Friendship"/>
                    </StyledListItem>
                </List>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Body, Mind and Spirituality
                </Typography>
                <List dense>
                    <StyledListItem>
                        <ListItemText primary="Phisical health/sports"/>
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Mental health/mindfulness"/>
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Spirituality/faith"/>
                    </StyledListItem>
                </List>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Community and Social Life
                </Typography>
                <List dense>
                    <StyledListItem>
                        <ListItemText primary="Community/citizenship"/>
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Societal engagement"/>
                    </StyledListItem>
                </List>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Job, learning and finances
                </Typography>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Interests, hobbies and entertainment
                </Typography>
            </Paper>
            <Paper elevation={1} sx={{ mb:2, p:2 }}>
                <Typography variant="h6" component="h2" color="text.darkBlue">
                    Personal care
                </Typography>
            </Paper>
        </Box>
    );
};

export default StrategicAreas;
