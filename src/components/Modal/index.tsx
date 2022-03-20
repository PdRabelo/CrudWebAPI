import React, { useEffect, useRef, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import CloseIcon from '@material-ui/icons/Close'
import { Snackbar } from '@material-ui/core';
import './styles.css'
import { Lontra } from '../../features/lontras';
import axios from 'axios'

export interface SimpleModalProps {
    open: boolean;
    onClose: () => void;
    title: String;
    getLontras: any;
}

const Modal = (props: SimpleModalProps) => {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

const [openSnack, setOpenSnack] = useState(false)

    const handleError = () => setOpenSnack(true)

    const handleErrorClose = () => setOpenSnack(false)    

    const {getLontras} = props

    async function postLontra(){
        if(lontra.nome == "" || lontra.descricao == "" || lontra.genero == "" || lontra.localizacao == "" || lontra.nome == "" || lontra.raca == "" || lontra.url == ""){
            setMensagemErro("Todos os campos devem estar preenchidos!")
            handleError()
            return
        }
        if(lontra.nome.length > 40){
            setMensagemErro("Você digitou um nome grande demais!")
            handleError()
            return
        }
        if(lontra.descricao.length > 15){
            setMensagemErro("Você digitou uma descrição grande demais!")
            handleError()
            return
        }
        if(lontra.genero.length > 15){
            setMensagemErro("Você digitou um gênero grande demais!")
            handleError()
            return
        }
        if(lontra.localizacao.length > 15){
            setMensagemErro("Você digitou uma localização grande demais!")
            handleError()
            return
        }
        if (lontra.raca.length > 15){
            setMensagemErro("Você digitou um nome de raça grande demais!")
            handleError()
            return
        }

        await axios.post("https://localhost:7187/lontras", lontra)
        setLontra({
            nome: "",
            raca: "",
            localizacao: "",
            descricao: "",
            genero: "",
            url: ""
        })
        onClose()
        getLontras()
    }

    const [mensagemErro, setMensagemErro] = useState("")

    const [lontra, setLontra] = useState({
        nome: "",
        raca: "",
        localizacao: "",
        descricao: "",
        genero: "",
        url: ""
    });

    const handleField = (event:any) => {
        const value = event.target.value;
        setLontra({
            ...lontra,
            [event.target.name]:value
        })
    }

    return (<div>
        <Snackbar 
        open={openSnack}
        onClose={handleErrorClose}
        autoHideDuration={3000}
        message={mensagemErro}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        ></Snackbar>
        <Dialog onClose={handleClose} open={open}>
            <Button onClick={onClose} size="small" endIcon={<CloseIcon />}></Button>
            <DialogTitle>{props.title}</DialogTitle>
            <TextField onChange={handleField} name="nome" id="teste" label="Nome" variant="outlined"></TextField>
            <TextField onChange={handleField} name="raca" id="outlined-basic" label="Raça" variant="outlined"></TextField>
            <TextField onChange={handleField} name="localizacao" id="outlined-basic" label="Localização" variant="outlined"></TextField>
            <TextField onChange={handleField} name="descricao" id="outlined-basic" label="Descrição" variant="outlined"></TextField>
            <TextField onChange={handleField} name="genero" id="outlined-basic" label="Gênero" variant="outlined"></TextField>
            <TextField onChange={handleField} name="url" id="outlined-basic" label="Url da imagem" variant="outlined"></TextField>
            <Button onClick={postLontra} color="primary" type='submit' endIcon={<SendIcon />}>Submit</Button>
        </Dialog>
    </div>)
}

export default Modal