import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
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
        flex: 1,
        height: 150,
        width: 100,
        margin: 10,
        textAlign: 'center',
        padding: 10,
        margin: 10
    },
    paperMiddle: {
        flex: 1,
        height: 150,
        width: 100,
        margin: 10,
        textAlign: 'center',
        padding: 10,
        margin: 10
    },
    paperRight: {
        flex: 1,
        height: 150,
        width: 100,
        margin: 10,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        font: 20
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
                        <Paper zDepth={3} style={styles.paperLeft}>
                            <h4>Members</h4>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <p>{props.activeMembers}</p>
                            </Typography>
                        </Paper>
                        <Paper zDepth={3} style={styles.paperMiddle}>
                            <h4>Inactive Members</h4>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <p>{props.inactiveMembers}</p>
                            </Typography>
                        </Paper>
                        <Paper zDepth={3} style={styles.paperRight}>
                            <h4>Licensed Members</h4>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <p>{props.licensedMembers}</p>
                            </Typography>
                        </Paper>
                    </div>
                    <div style={styles.div}>
                        <Paper zDepth={3} style={styles.paperLeft}>
                            <h4>Active Boards</h4>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <p>{props.activeBoard}</p>
                            </Typography>
                        </Paper>
                        <Paper zDepth={3} style={styles.paperMiddle}>
                            <h4>Deleted Boards</h4>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <p>{props.deletedBoard}</p>
                            </Typography>
                        </Paper>
                        <Paper zDepth={3} style={styles.paperRight}>
                            <h4>Archived Boards</h4>
                            <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                                <p>{props.archivedBoard}</p>
                            </Typography>
                        </Paper>
                    </div>
                </div>

                // <Card className={classes.card}>
                //     <CardContent>
                //         <Typography className={classes.title} gutterBottom variant="headline" component="h2">
                //             <p>Members: </p>
                //         </Typography>
                //         <Typography className={classes.number} gutterBottom variant="headline" component="h2">
                //             <p>{props.activeMembers}</p>
                //         </Typography>
                //     </CardContent>
                // </Card>
            ) : null}
        </div>
    )
}
export default withStyles(styles)(MemberCard)