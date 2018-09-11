import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import "./MemberCard.css"
import { MuiThemeProvider } from 'material-ui/styles';
// import Grid from "material-ui/Grid";
import { withStyles } from '@material-ui/core/styles';

const styles = {

    div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%'
    },
    paperLeft: {
        // flex: 1,
        height: 125,
        width: 400,
        margin: 10,
        marginLeft: 420,
        marginTop: -375,
        textAlign: 'center',
        padding: 10,
        // margin: 10
    },
  
    paperRight: {
        // flex: 1,
        height: 125,
        width: 400,
        margin: 10,
        marginRight: 100,
        marginTop: -375,
        textAlign: 'center',
        padding: 10,
        // margin: 10,
    
    },

    div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%'
    },

    paperTwoLeft: {
        // flex: 1,
        height: 125,
        width: 400,
        margin: 10,
        marginLeft: 420,
        marginTop: -225,
        textAlign: 'center',
        padding: 10,
        // margin: 10
    },
  
    paperTwoRight: {
        // flex: 1,
        height: 125,
        width: 400,
        margin: 10,
        marginRight: 100,
        marginTop: -225,
        textAlign: 'center',
        padding: 10,
        // margin: 10,
    
    },

    div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%'
    },

    paperThreeLeft: {
        // flex: 1,
        height: 125,
        width: 400,
        margin: 10,
        marginLeft: 420,
        marginTop: -75,
        textAlign: 'center',
        padding: 10,
        // margin: 10
    },
  
    paperThreeRight: {
        // flex: 1,
        height: 125,
        width: 400,
        margin: 10,
        marginRight: 100,
        marginTop: -75,
        textAlign: 'center',
        padding: 10,
        // margin: 10,
    
    }
};



const MemberCard = (props) => {
    const { classes } = props;
    console.log(props.activeMembers)
    return (
        <div>
            {props.activeMembers ? (

                <div>
                    <div style={styles.div}>
                        <Paper style={styles.paperLeft}>
                            <h3>Members</h3>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h1">
                                <h1>{props.activeMembers}</h1>
                            </Typography>
                        </Paper>
                        <Paper style={styles.paperRight}>
                            <h3>Inactive Members</h3>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <h1>{props.inactiveMembers}</h1>
                            </Typography>
                        </Paper>
                    </div>
                    <div style={styles.div}>
                        <Paper style={styles.paperTwoLeft}>
                            <h3>Licensed Members</h3>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <h1>{props.licensedMembers}</h1>
                            </Typography>
                        </Paper> 
                        <Paper style={styles.paperTwoRight}>
                            <h3>Active Boards</h3>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <h1>{props.activeBoard}</h1>
                            </Typography>
                        </Paper>
                    </div>
                    <div style={styles.div}>
                        <Paper style={styles.paperThreeLeft}>
                            <h3>Deleted Boards</h3>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <h1>{props.deletedBoard}</h1>
                            </Typography>
                        </Paper>
                        <Paper style={styles.paperThreeRight}>
                            <h3>Archived Boards</h3>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <h1>{props.archivedBoard}</h1>
                            </Typography>
                        </Paper> 
                    </div>
                </div>

            ) : null}
        </div>
    )
}
export default withStyles(styles)(MemberCard)