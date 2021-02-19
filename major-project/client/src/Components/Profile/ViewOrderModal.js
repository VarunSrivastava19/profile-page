import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import ReceiptIcon from '@material-ui/icons/Receipt';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import HoverRating from './Rate';
import OrderTable from './OrderTable';
import BillTable from './Bill';
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

export default function ViewOrder(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const [data, setData] = React.useState({
  //   restaurants:[]
  // });
  // React.useEffect(()=>{
  //   const fetchRestaurants = async () => {
  //     try{
  //       setData(data=>({restaurants:data.restaurants}));
  //       const response = await axios.get(RESTAURANT_DB_URL);
  //       console.log(data);
  //       console.log('Restaurants: ',response);
  //       setData({restaurants:response.data});
  //       console.log(data.restaurants);
  //     } catch(e){
  //       console.log(e);
  //       setData(data=>({restaurants:data.restaurants}));
  //     }
  //   };
  //   fetchRestaurants();
  // },[])
  return (
    <div maxwidth="sm">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <ReceiptIcon/>View
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {console.log(props.restaurantprop.id)}
          <Typography variant="p" align="center" color="textPrimary" paragraph>
            {props.restaurantprop.name}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
            {/*Rating Input */}
            <HoverRating restaurantobj = {props.restaurantprop}/> {/*passing props to Rating system, which are coming from Dashboard.js */}
            {/*Rating Input */}
        </DialogContent>
        <DialogContent dividers>
            <Typography variant="h5" gutterBottom>
                Your Order
            </Typography>
            {/*Pull ordered elements from that Order ID */} 
            <Typography gutterBottom>
                <OrderTable/>
            </Typography>
            <Typography gutterBottom>
                <BillTable/>
            </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}