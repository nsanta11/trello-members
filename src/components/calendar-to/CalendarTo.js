
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'
import './CalendarTo.css';
// import DatePicker from 'material-ui/core/Datepicker'

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

let controlledDateTo = moment()

export default class DatePickerValueto extends React.Component {

    constructor(props) {
        super(props);
        //this.sendData = this.sendData.bind();

        this.state = {
            controlledDateTo: moment('').format('YYYY-MM-DD'),
            formattedDateTo: moment(controlledDateTo).format('YYYY-MM-DD')
        };
        // console.log(this.state.controlledDateTo)
    }

    handleToChange = (date, event) => {
        this.setState({
            controlledDateTo: event,
      },function(){
          const formattedDateTo = moment(this.state.controlledDateTo).format('YYYY-MM-DD')
          console.log(formattedDateTo)
          this.props.sendDatato(formattedDateTo);
      });
    };


    render(props) {
        return (
            <div className="pickerTwo">
                <DatePicker className="calendarTwo"
                    hintText="To"
                    value={this.state.controlledDateTo}
                    onChange={this.handleToChange}
                />
            </div>
        );
    }
}