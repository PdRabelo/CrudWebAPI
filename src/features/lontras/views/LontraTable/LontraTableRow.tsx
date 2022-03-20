import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Lontra } from '../../types/Lontra';
import { DeleteButton, EditButton } from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import { MouseEventHandler } from 'react';


type LontraTableRowProps = {
    row: Lontra;
    onEditButtonClick: MouseEventHandler<HTMLButtonElement>;
    onDeleteButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function LontraTableRow(props: LontraTableRowProps) {
    const {
        row,
        onEditButtonClick,
        onDeleteButtonClick
    } = props;

    return (
        <TableRow key={row.nome}>
            <TableCell component="th" scope="row">
                {row.id}
            </TableCell>
            <TableCell align="left" width="13%">{row.nome}</TableCell>
            <TableCell align="left" width="13%">{row.raca}</TableCell>
            <TableCell align="left" width="13%">{row.localizacao}</TableCell>
            <TableCell align="left" width="13%">{row.descricao}</TableCell>
            <TableCell align="left" width="13%">{row.genero}</TableCell>
            <TableCell align="left">
                <EditButton onClick={onEditButtonClick} variant="contained" color="primary" startIcon={<EditIcon />}>Edit</EditButton>
                <DeleteButton onClick={onDeleteButtonClick} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</DeleteButton>
            </TableCell>
        </TableRow>
    );
}