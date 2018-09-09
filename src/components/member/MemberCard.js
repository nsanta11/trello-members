import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider } from 'material-ui/styles';
// import Grid from "material-ui/Grid";
import { withStyles } from '@material-ui/core/styles';

const styles = {

    number: {
        fontSize: 40,
      },

    card: {
      maxWidth: 275,
      backgroundColor: 'white',
    },
    title: {
      marginBottom: 10,
      fontSize: 20,
      color: 'purple',
    },

    pos: {
      marginBottom: 12,
    },
  };
  


const MemberCard = (props) => {
    const { classes } = props;
    console.log(props.activeMembers)
    return(
        <div>
            { props.activeMembers ? (
                <Card className={classes.card}>
                    <CardContent>
                    <Typography className={classes.title} gutterBottom variant="headline" component="h2">
                       <p>Members: </p> 
                    </Typography>
                    <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                           <p>{props.activeMembers}</p>
                    </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}
export default withStyles(styles)(MemberCard)