import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Fetch data from DB for ordered elements
export default function BillTable(){
    return(
        <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Item Total</TableCell>
                                <TableCell align="right">₹1075</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Promo(25% Off)</TableCell>
                                <TableCell align="right">-₹268.75</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Grand Total</TableCell>
                                <TableCell align="right">₹806.25</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
    )
}