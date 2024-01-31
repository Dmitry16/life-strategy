import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const useDialog = () => {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const DialogComponent = ({ title, content, transition }) => {
        return (
            <Dialog
                open={open}
                TransitionComponent={transition}
                keepMounted
                onClose={handleClose}
                maxWidth='md'
                area-aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle>
                    <Typography variant="h4" component="h1" color="text.darkBlue">
                        {title}
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'text.darkBlue',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {content}
                </DialogContent>
            </Dialog>
        );
    };

    return [DialogComponent, handleOpen];
}

export default useDialog;
