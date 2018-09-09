
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

export default class DatePickerValueto extends React.Component {

    constructor(props) {
        super(props);
        //this.sendData = this.sendData.bind();

        this.state = {
            controlledDateTo: moment().format('YYYY-MM-DD'),
            formattedDateTo: moment(controlledDateTo).format('YYYY-MM-DD')
        };
        // console.log(this.state.controlledDateTo)
    }

    handleToChange = (event, date) => {
        this.setState({
            controlledDateTo: date,
            formattedDateTo: moment(date).format('YYYY-MM-DD')
        });
        // console.log(this.state.controlledDateTo)
       // console.log(this.state.formattedDateTo)
       this.props.sendDatato(this.state.formattedDateTo);

    };

//    onchangename(){
//         var date =  this.state.formattedDateTo
//         this.props.onSelectdate(date);
//      }


    render(props) {
        return (
            <div className="pickerTwo">
                <DatePicker
                    hintText="To"
                    value={this.state.controlledDateTo}
                    onChange={this.handleToChange}
                />

            </div>
        );
    }
}