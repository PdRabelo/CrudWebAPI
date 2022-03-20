import React, { MouseEventHandler} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import LontraTableColumn from './LontraTableColumn';
import LontraTableRow from './LontraTableRow';
import { Lontra } from '../../types/Lontra';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

type LontraTableProps = {
    lontras: Lontra[];
    onEditButtonClick: MouseEventHandler<HTMLButtonElement>;
    onDeleteButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function LontraTable(props: LontraTableProps) {
    const classes = useStyles();

    const {
        lontras,
        onEditButtonClick,
        onDeleteButtonClick
    } = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <LontraTableColumn />
                <TableBody>
                    {lontras.map((row) => (
                        <LontraTableRow
                            row={row}
                            onDeleteButtonClick={onDeleteButtonClick}
                            onEditButtonClick={onEditButtonClick}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}