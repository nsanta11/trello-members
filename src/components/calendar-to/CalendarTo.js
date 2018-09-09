
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'
// import DatePicker from 'material-ui/core/Datepicker'

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

let controlledDateTo = moment()

export default class DatePickerValueTo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            controlledDateTo: moment().format('YYYY-MM-DD'),
            formattedDateTo: moment(controlledDateTo).format('YYYY-MM-DD')
        };
        console.log(this.state.controlledDateTo)
    }

    handleChange = (event, date) => {
        this.setState({
            controlledDateTo: date,
            formattedDateTo: moment(date).format('YYYY-MM-DD')
        });
        console.log(this.state.controlledDateTo)
        console.log(this.state.formattedDateTo)
    };

    render() {
        return (
            <div className="pickerTwo">
                <DatePicker
                    hintText="To"
                    value={this.state.controlledDateTo}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}