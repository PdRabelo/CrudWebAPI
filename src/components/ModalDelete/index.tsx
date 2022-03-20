import React from 'react';
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { Typography } from '@material-ui/core';

export interface SimpleModalProps {
    open2: boolean;
    onClose: () => void;
    title: String;
}

const ModalDelete = (props: SimpleModalProps) => {

    const { onClose, open2 } = props;

    const handleClose = () => {
        onClose();
    };

    return <div>
        <Dialog onClose={handleClose} open={open2}>
            <DialogTitle>{props.title}</DialogTitle>
            <Button endIcon={<DeleteIcon />}>Delete</Button>
        </Dialog>
    </div>
}



export default ModalDelete