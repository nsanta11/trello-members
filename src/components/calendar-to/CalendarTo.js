
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'
import './CalendarTo.css';


//set intial "from" value to current date
let controlledDateTo = moment()

//export datepicker "from" component to parent
export default class DatePickerValueto extends React.Component {

    constructor(props) {
        super(props);

        //set state of initial values and define format
        this.state = {
            controlledDateTo: moment('').format('YYYY-MM-DD'),
            formattedDateTo: moment(controlledDateTo).format('YYYY-MM-DD')
        };
        
    }

    //handle change event to pass formatted values to parent component
    handleToChange = (date, event) => {
        this.setState({
            controlledDateTo: event,
      },function(){
          const formattedDateTo = moment(this.state.controlledDateTo).format('YYYY-MM-DD')
          console.log(formattedDateTo)
          this.props.sendDatato(formattedDateTo);
      });
    };

    //render date picker and pass handle change function
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