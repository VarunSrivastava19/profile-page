import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import RoomIcon from '@material-ui/icons/Room';
import NavBar from './AppBar/AppBar';
import ViewOrder from './ViewOrderModal';
import ReplayIcon from '@material-ui/icons/Replay';
import EditProfile from './ProfileEditor';
import axios from 'axios';
import UserFetch from './userDetails';
import HeroUnit from './Hero';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import HoverRating from './Rate';
import OrderTable from './OrderTable';
import BillTable from './Bill';
const RESTAURANT_DB_URL = 'http://localhost:8000/dashboard/restaurants';
// const [state, setState] = useState(initialState);
// const userList = props
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#FoodzApp">
        FoodzApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState({
    restaurants:[]
  });
  useEffect(()=>{
    const fetchRestaurants = async () => {
      try{
        setData(data=>({restaurants:data.restaurants}));
        const response = await axios.get(RESTAURANT_DB_URL);
        console.log(data);
        console.log('Restaurants: ',response);
        setData({restaurants:response.data});
        console.log(data.restaurants);
      } catch(e){
        console.log(e);
        setData(data=>({restaurants:data.restaurants}));
      }
    };
    fetchRestaurants();
  },[])
  return (
    <React.Fragment>
      {/*AppBar Component Starts*/}
      <NavBar/>
      {/*AppBar Component Ends */}
      <main>
        {/*Hero Unit Component Starts*/}
        <HeroUnit/>
        {/*Hero Unit Component Ends */}
        {console.log(data.restaurants.map((restaurant)=>{return restaurant.id}))}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {/*Pull Past orders from User's DB using user's ID
            cards.map((card)=>(....*/}
            {data.restaurants.map((restaurant) => (
              <Grid item key={restaurant} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {restaurant.name}
                    </Typography>
                    <Typography variant="p" align="left" color="textSecondary" paragraph>
                    ORDER NUMBER
                    </Typography>
                    <Typography variant="p" align="left" color="textPrimary" paragraph>
                    #12345
                    </Typography>
                    <Typography variant="p" align="left" color="textSecondary" paragraph>
                      TOTAL AMOUNT
                    </Typography>
                    <Typography variant="p" align="left" color="textPrimary" paragraph>
                      ₹449.75
                    </Typography>                
                  </CardContent>
                  <CardActions>
                    <ViewOrder restaurantprop = {restaurant}/> {/* Button 1 : for viewing/rating past orders*/}
                    <Button size="small" variant="outlined" color="secondary">
                      <ReplayIcon/>Re-order
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}