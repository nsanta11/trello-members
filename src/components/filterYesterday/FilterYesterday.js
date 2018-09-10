import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple600, white } from 'material-ui/styles/colors';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        backgroundColor: purple600,
        color: white
    },
    input: {
        display: 'none',
    },
});

const ButtonYesterday = (props) => {
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" className={classes.button}
                Yesterday
                onClick={props.handleClick}
            />
        </div>
    )
}

export default withStyles(styles)(ButtonYesterday);


// class ContainedButton extends React.Component {


//     constructor(props) {
//         super(props);

//         this.state = {
//             controlledDateYesterday: moment('').format('YYYY-MM-DD'),
//             formattedDateYesterday: moment(controlledDateYesterday).format('YYYY-MM-DD')
//         };
//         // console.log(this.state.controlledDateFrom)
//     }

//     handleFromChange = (date, event) => {
//         this.setState({
//             controlledDateFrom: event,
//         }, function () {
//             const formattedDateFrom = moment(this.state.controlledDateFrom).format('YYYY-MM-DD')
//             console.log(formattedDateFrom)
//             this.props.sendDatafrom(formattedDateFrom);
//         });

//         //console.log(this.date)
//         // console.log(this.state.controlledDateFrom)

//     };

//     render(props) {
//         return (
//             <div className="pickerOne">
//                 <Button
//                     variant="contained" className={classes.button}
//                     Yesterday
//                     onClick={this.handleFromChange}
//                     value={this.state.controlledDateYesterday}
//                 />
//             </div>
//         );
//     }
// }

// export default withStyles(styles)(ContainedButton);