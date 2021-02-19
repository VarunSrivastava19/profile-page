import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0: 'Bad',
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating(props) {
  console.log('Rating to restaurant from DB:',props.restaurantobj.rating);
  const [value, setValue] = React.useState(props.restaurantobj.rating); //Default value - Fetch from DB
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  //PUT ratings to DB

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);  //Updated value, PUT to DB
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      {console.log(value)}
    </div>
  );
}