import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import "./MemberCard.css"
import { withStyles } from '@material-ui/core/styles';


//css styling for card components displaying member data
const styles = {

    div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%'
    },

    paperLeft: {
        height: 125,
        width: 400,
        margin: 10,
        marginLeft: 420,
        marginTop: -375,
        textAlign: 'center',
        padding: 10,
    },
  
    paperRight: {
        height: 125,
        width: 400,
        margin: 10,
        marginRight: 100,
        marginTop: -375,
        textAlign: 'center',
        padding: 10,
    },

    paperTwoLeft: {
        height: 125,
        width: 400,
        margin: 10,
        marginLeft: 420,
        marginTop: -225,
        textAlign: 'center',
        padding: 10,
    },
  
    paperTwoRight: {
        height: 125,
        width: 400,
        margin: 10,
        marginRight: 100,
        marginTop: -225,
        textAlign: 'center',
        padding: 10,
    },

    paperThreeLeft: {
        height: 125,
        width: 400,
        margin: 10,
        marginLeft: 420,
        marginTop: -75,
        textAlign: 'center',
        padding: 10,
    },
  
    paperThreeRight: {
   
        height: 125,
        width: 400,
        margin: 10,
        marginRight: 100,
        marginTop: -75,
        textAlign: 'center',
        padding: 10
    
    }
};


//member card components with values passed from parent
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
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
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

//export member component to parent
export default withStyles(styles)(MemberCard)