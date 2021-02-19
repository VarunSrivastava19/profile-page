import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Fetch data from DB for ordered elements
function createData(name, quantity, priceOne, total) {
    return { name, quantity, priceOne, total };
}
const rows = [
    createData('Butter Chicken', 2, 250, 500),
    createData('Grilled Chicken Rotissery', 1, 250, 250),
    createData('Garlic Naan', 5, 25, 125),
    createData('Budweiser Dark', 2, 100, 200)
]
export default function OrderTable(){
    return(
        <TableContainer maxwidth="sm" component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dish</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.quantity}</TableCell>
                                        <TableCell align="right">{row.priceOne}</TableCell>
                                        <TableCell align="right">{row.total}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
    )
}