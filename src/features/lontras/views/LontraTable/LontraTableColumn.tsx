import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function LontraTableColumn() {
    return (
        <TableHead>
            <TableRow>
                <TableCell width="10%">ID</TableCell>
                <TableCell align="left" width="13%">Nome</TableCell>
                <TableCell align="left" width="13%">Raça&nbsp;</TableCell>
                <TableCell align="left" width="13%">Localização&nbsp;</TableCell>
                <TableCell align="left" width="13%">Descrição&nbsp;</TableCell>
                <TableCell align="left" width="13%">Gênero&nbsp;</TableCell>
                <TableCell align="center" width="13%"></TableCell>
            </TableRow>
        </TableHead>
    );
}