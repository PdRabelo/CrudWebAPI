import * as React from 'react';
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'


import Modal from '../Modal'

import './styles.css'

const Footer = (props: any) => {
    const [open, setOpen] = React.useState(false);

    const {getLontras} = props

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <footer style={{ justifySelf: "end" }}>
        <Button onClick={handleClickOpen} id='addButton' endIcon={<SendIcon />} color="primary" variant='contained'>Add</Button>
        <Modal
            title={"Submit Lontra"}
            open={open}
            onClose={handleClose}
            getLontras = {getLontras}
        />

    </footer>
}

export default Footer