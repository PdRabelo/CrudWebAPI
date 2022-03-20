import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Lontra as LontraType } from '../types/Lontra';
import LontraTable from './LontraTable/LontraTable';
import { Container } from './styles';
import Modal from '../../../components/Modal';
import ModalDelete from '../../../components/ModalDelete';
import Footer from '../../../components/Footer';




const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Lontra() {
    const classes = useStyles();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [lontras, setLontras] = useState<LontraType[]>([]);

    async function getLontras() {
        const response = await axios.get("https://localhost:7187/lontras")
        setLontras(response.data);
    }

    useEffect(() => {
        getLontras()
    }, [])

    const handleEditButtonsClick = () => {
        setIsEditModalOpen((prevState) => !prevState);
    };

    const handleDeleteButtonsClick = () => {
        setIsDeleteModalOpen((prevState) => !prevState);
    };

    const getLontraList = () => {
        return (lontras);
    }

    return (
        <Container>
            <LontraTable
                lontras={lontras}
                onDeleteButtonClick={handleDeleteButtonsClick}
                onEditButtonClick={handleEditButtonsClick}
            />
            <Modal
                onClose={handleEditButtonsClick}
                open={isEditModalOpen}
                title="Edit Lontra"
                getLontras = {getLontras}
            />
            <ModalDelete
                open2={isDeleteModalOpen}
                title="Tem certeza que deseja deletar a Lontra?"
                onClose={handleDeleteButtonsClick}
            />
            <Footer
                getLontras = {getLontras}
            />
        </Container>
    );

}

export { Lontra };