
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
// import Moment from 'react-moment';
import moment from 'moment'
// import 'moment-timezone';
// import ReactDOM from 'react-dom'
// import DatePicker from 'material-ui/core/Datepicker'

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

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

    handleFromChange = (date,event) => {
        this.setState({
              controlledDateFrom: event,
        },function(){
            const formattedDateFrom = moment(this.state.controlledDateFrom).format('YYYY-MM-DD')
            console.log(formattedDateFrom)
            this.props.sendDatafrom(formattedDateFrom);
        });
        
       //console.log(this.date)
        // console.log(this.state.controlledDateFrom)
 
    };
    
    render(props) {
        return (
            <div className="pickerOne">
                <DatePicker
                    hintText="From"
                    onChange={this.handleFromChange}
                    value={this.state.controlledDateFrom}   
                />
            </div>
        );
    }
}