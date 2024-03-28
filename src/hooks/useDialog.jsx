import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useDialog = dialogContent => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(dialogContent?.content || '');
    
    const handleClose = () => {
        setOpen(false);
    };

    // write a function that parses the content into an array of chanks. Each chunk is wrapped in a Typography component.
    // The first chunk starts from the beginning of the content and ends at the first occurence of a bullet point or number of
    // the numbered list. The second chunk starts from the end of the first chunk and ends at the next bullet point or number of
    // the numbered list, etc.

    const parseContent = content => {
        return content.split('\n').map((chunk, index) => {
            return (
                <Typography variant="h5" component="h1" color="text.darkBlue" sx={{m:2}} key={index}>
                    {chunk}
                </Typography>
            );
        });
    };

    const openDialog = ({ content }) => {
    // const openDialog = () => {
        content && setContent(content);
        setOpen(true);
    };

    const DialogComponent = () => {
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                maxWidth='md'
                area-aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle>
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
                    {/* <Typography variant="h5" component="h1" color="text.darkBlue" sx={{m:2}}> */}
                        {parseContent(content)}
                    {/* </Typography> */}
                </DialogContent>
            </Dialog>
        );
    };

    return [DialogComponent, openDialog];
}

export default useDialog;
