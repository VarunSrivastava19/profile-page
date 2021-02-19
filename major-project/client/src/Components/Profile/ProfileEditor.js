import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import AddAddress from './AddAddress';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function EditProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div maxwidth="md">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog fullScreen onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Profile
        </DialogTitle>
        <form>
            <DialogContent>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                    <OutlinedInput
                        label="Name"
                        type="text"
                    />
                </FormControl>
            </DialogContent>
            <DialogContent>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                    <OutlinedInput
                        label="Email"
                        type="email"
                    />
                </FormControl>
            </DialogContent>
            <DialogContent>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
                    <OutlinedInput
                        label="Phone"
                        type="tel"
                    />
                </FormControl>
            </DialogContent>
            <DialogContent>
                <Typography align="left">
                    {/*Component */}
                    <AddAddress/>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary">Save</Button>
                <Button variant="contained" color="secondary">Cancel</Button>
            </DialogActions>
        
        </form>
        
      </Dialog>
    </div>
  );
}