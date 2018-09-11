import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './FilterYesterday.css'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%'
    },
});



function SimpleTable(props) {

    const { classes } = props;
    console.log(props.action)

    return (

        <div style={styles.div} id="div">
            <Paper className={classes.root} id="table">
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow >
                            <h4 className="activity">Activity Log</h4>
                        </TableRow>
                        <TableRow >
                            <TableCell><h4 className="titleOne">Activity Type</h4></TableCell>
                            <TableCell numeric><h4 className="titleTwo">Number</h4></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Comments</TableCell>
                            <TableCell numeric>{props.action.commentCard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cards Created</TableCell>
                            <TableCell numeric>{props.action.createCard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cards Moved</TableCell>
                            <TableCell numeric>{props.action.moveCardToBoard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cards Duplicated</TableCell>
                            <TableCell numeric>{props.action.copyCard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cards Archived</TableCell>
                            <TableCell numeric>{props.action.moveCardFromBoard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cards Deleted</TableCell>
                            <TableCell numeric>{props.action.deleteCard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Lists Created</TableCell>
                            <TableCell numeric>{props.action.createList}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Lists Moved</TableCell>
                            <TableCell numeric>{props.action.moveListToBoard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Lists Archived</TableCell>
                            <TableCell numeric>{props.action.moveListFromBoard}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Unique Labels</TableCell>
                            <TableCell numeric>{props.action.createCustomField}</TableCell>
                        </TableRow>
                        {/* {rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell numeric>{row.number}</TableCell>
                                    </TableRow>
                                );
                            })} */}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}



// SimpleTable.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SimpleTable)