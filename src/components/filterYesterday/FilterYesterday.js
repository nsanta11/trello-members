// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 700,
//     },
// });


//     let id = 0;
//     function createData(name, number) {
//         id += 1;
//         return { id, name, number };


//         let rows = [
//             createData('Comments', props.actionCounts.commentCard),
//             createData('Cards Created', props.actionCounts.createCard),
//             createData('Cards Moved', props.actionCounts.moveCardToBoard),
//             createData('Cards Duplicated', props.actionCounts.copyCard),
//             createData('Cards Archived', props.actionCounts.moveCardFromBoard),
//             createData('Cards Deleted', props.actionCounts.deleteCard),
//             createData('Lists Created', props.actionCounts.createList),
//             createData('Lists Moved', props.actionCounts.moveListToBoard),
//             createData('Lists Duplicated', props.actionCounts.copyList),
//             createData('Lists Archived', props.actionCounts.moveListFromBoard),
//             createData('Listed Deleted', props.actionCounts.deleteList),
//             createData('Unique Labels', props.actionCounts.createCustomField),
//         ];

    

//         function SimpleTable(props) {

//             const { classes } = props;
           
//             return (
//                 <Paper className={classes.root}>
//                     <Table className={classes.table}>
//                         <TableHead>
//                             <TableRow >
//                                 <TableCell>Activity</TableCell>
//                                 <TableCell numeric>Number</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows.map(row => {
//                                 return (
//                                     <TableRow key={row.id}>
//                                         <TableCell component="th" scope="row">
//                                             {row.name}
//                                         </TableCell>
//                                         <TableCell numeric>{row.number}</TableCell>
//                                     </TableRow>
//                                 );
//                             })}
//                         </TableBody>
//                     </Table>
//                 </Paper>
//             );
//         }
    

//         // SimpleTable.propTypes = {
//         //     classes: PropTypes.object.isRequired,
//         // };
       
//         export default withStyles(styles)(SimpleTable)