
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './Calendar.css';
// import Moment from 'react-moment';
import moment from 'moment'
import { createMuiTheme } from '@material-ui/core'
import { purple600 } from 'material-ui/styles/colors';
// import 'moment-timezone';
// import ReactDOM from 'react-dom'
// import DatePicker from 'material-ui/core/Datepicker'

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

export const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: purple600,
        },
    },
    datePicker: {
        color: purple600,
        calendarYearBackgroundColor: purple600,
      },
})


let controlledDateFrom = ('2000-01-01');

export default class DatePickerValueFrom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            controlledDateFrom: moment('').format('YYYY-MM-DD'),
            formattedDateFrom: moment(controlledDateFrom).format('YYYY-MM-DD')
        };
        // console.log(this.state.controlledDateFrom)
    }

    // handleFromChange = (event, date) => {
    //     this.setState({
    //         controlledDateFrom: date,
    //         formattedDateFrom: moment(date).format('YYYY-MM-DD')
    //     });
    //     // console.log(this.state.controlledDateFrom)
    //    console.log(this.state.formattedDateFrom)
    //     this.props.sendDatafrom(this.state.formattedDateFrom);

    // };

    resetDate = () => {
        this.state = {
            controlledDateFrom: moment('').format('YYYY-MM-DD'),
            formattedDateFrom: moment(controlledDateFrom).format('YYYY-MM-DD')
        };

    }

    handleFromChange = (date,event) => {
        this.setState({
              controlledDateFrom: event,
        },function(){
            const formattedDateFrom = moment(this.state.controlledDateFrom).format('YYYY-MM-DD')
            console.log(formattedDateFrom)
            this.props.sendDatafrom(formattedDateFrom);
        });
     
 
    };
    render(props) {
      

        return (
            <div className="pickerOne">
                <DatePicker className="calendarOne" id="fromDate"
                    hintText="From"
                    inputStyle={{ textAlign: 'left' }}
                    onChange={this.handleFromChange}
                    // hideCalendarDate={props.componentDidMount()}
                    value={this.state.controlledDateFrom} 
                 
                />
            </div>
        );
    }
}