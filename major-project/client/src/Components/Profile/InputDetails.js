import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import React from 'react';
//Send data from form to db
export default function InputDetails(){
    return (
        <form>
            <Box gutterBottom>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                    <OutlinedInput
                        type="text"
                    />
                </FormControl>
            </Box>
            
            <Box gutterBottom>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                    <OutlinedInput
                        type="email"
                    />
                </FormControl>
            </Box>
            
            <Box gutterBottom>
                
            </Box>
            <Button variant="outlined" color="primary">Add Address</Button>
            <Button variant="contained" color="primary">Save</Button>
            <Button variant="contained" color="secondary">Cancel</Button>
        </form>
    )

}