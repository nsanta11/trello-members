
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './Calendar.css';
import moment from 'moment'
import { createMuiTheme } from '@material-ui/core'
import { purple600 } from 'material-ui/styles/colors';

//material ui theme colors styling
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

//set origin date
let controlledDateFrom = ('2000-01-01');

//export the value "from" date selected
export default class DatePickerValueFrom extends React.Component {

    constructor(props) {
        super(props);

        //set state of intial vaules and format 
        this.state = {
            controlledDateFrom: moment('').format('YYYY-MM-DD'),
            formattedDateFrom: moment(controlledDateFrom).format('YYYY-MM-DD')
        };
    }
   

    //on calendar change sends formatted date values to parent (app.js)
    handleFromChange = (date,event) => {
        this.setState({
              controlledDateFrom: event,
        },function(){
            const formattedDateFrom = moment(this.state.controlledDateFrom).format('YYYY-MM-DD')
            console.log(formattedDateFrom)
            this.props.sendDatafrom(formattedDateFrom);
        });
     
 
    };

   //render datepiceker component handles on change function
    render() {

        return (
            <div className="pickerOne">
                <DatePicker className="calendarOne" 
                    hintText="From"
                    inputStyle={{ textAlign: 'left' }}
                    onChange={this.handleFromChange}
                    value={this.state.controlledDateFrom}  
                />
            </div>
        );
    }
}