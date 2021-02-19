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
import EditProfile from './ProfileEditor';
import axios from 'axios';
const USER_DB_URL = 'http://localhost:8000/dashboard/users/3';

const useStyles = makeStyles((theme) => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
}));

export default function HeroUnit() {
    const classes = useStyles();
    const [data, setData] = useState({
        users:[]
    });
    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                setData(data=>({users:data.users}));
                const response = await axios.get(USER_DB_URL);
                // console.log(data);
                // console.log(response);
                setData({users:response.data});
                // console.log(data.users)
            } catch(e){
                console.log(e);
                setData(data=>({users:data.users}));
            }
        };
        fetchUsers();
    },[])
    return(
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {/*Pull from DB: Name of user according to his username using id of user*/}
                        {console.log(data.users[0].username)}
                        {data.users[0].username}
                        </Typography>
                        <Typography variant="p" align="center" color="textSecondary" paragraph>
                        <RoomIcon/> 
                        {data.users[0].city}
                        </Typography>
                        <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <EditProfile/>
                            </Grid>
                        </Grid>
                        </div>
                    </Container>
                </div>
                {/* End hero unit */}
            </main>
        </React.Fragment>
    )
}