import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import './App.css';
import ButtonStyled from "./components/filterYesterday/FilterYesterday";
import customTheme from "./components/calendar/Calendar.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from "./components/navbar/Navbar.js";
import MemberCard from "./components/member/MemberCard";
import StickyFooter from "./components/footer/Footer.js";
import DatePickerValueFrom from "./components/calendar/Calendar.js";
import DatePickerValueTo from "./components/calendar-to/CalendarTo.js";
import GuttersGrid from "./components/grid/Grid.js";
import FilterYesterday from "./components/filterYesterday/FilterYesterday";
import formattedDateTo from "./components/calendar-to/CalendarTo.js";
import { grey100 } from 'material-ui/styles/colors';
import { purple600, white } from 'material-ui/styles/colors';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey100
  },

  button: {
    margin: theme.spacing.unit,
    backgroundColor: purple600,
    color: white
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },


});





class App extends Component {

  constructor(props) {
    super(props)
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      controlledDateFrom: '',
      formattedDateFrom: '',
      formattedDateTo,
      isLoading: true,
      members: [],
      error: null,
      data: null,
      member: "",
      actions: [],
      action: "",
      commentCard: "",

    }
  }
  componentWillMount = (e) => {
    let today = moment().format('YYYY-MM-DD')
    console.log(today)

    // DatePickerValueFrom.resetDate()
    // document.getElementById("fromDate").value = "j";
    // this.setState({controlledDateFrom: ""})

    Promise.all([
      fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/2000-01-01/end/" + today),
      fetch
        ("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start/2000-01-01/end/" + today)])
      .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
      .then(([data1, data2]) => {

        console.log(data1)
        console.log(data2)
        let members = data1
        let actions = data2
        console.log(actions.actionCounts.commentCard)
        console.log(members.deletedBoardCount)
        console.log((members.activeMemberCount))
        console.log((members.inactiveMemberCount))
        this.setState({ members })
        this.setState({ actions })

        console.log("state", this.state.members)
        console.log("state", this.state.actions)
        let action = actions.actionCounts
        this.setState({ action })
        console.log(this.state.actions.actionCounts.commentCard)
        console.log(window.to)
      })



  }

  handleClick = (e, days) => {
    // const date = 0
    // if (days == 6){
    //   let months = days
    //   months = moment().subtract(months, 'month').add(1, 'day')
    //   console.log(months)
    //   //  date = months.format('YYYY-MM-DD')
    //   //  console.log(date)
    // }
    // else {
    console.log(days)
    let yesterday = moment().add(-days, 'days')
    console.log(yesterday)
    const date = yesterday.format('YYYY-MM-DD')
    // }
    console.log(date)
    let today = moment().format('YYYY-MM-DD')
    console.log(today)

    // .format('YYYY-MM-DD'),
    if (date) {
      console.log(("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + date + "/end/" + today))

      Promise.all([
        //api fetch to url with selected dates
        fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + date + "/end/" + today),
        fetch
          ("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start" + date + "/end/" + today)])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([data1, data2]) => {

          console.log(data1)
          console.log(data2)
          let members = data1
          let actions = data2
          console.log(actions.actionCounts.commentCard)
          console.log(members.deletedBoardCount)
          console.log((members.activeMemberCount))
          console.log((members.inactiveMemberCount))
          this.setState({ members })
          this.setState({ actions })

          console.log("state", this.state.members)
          console.log("state", this.state.actions)
          let action = actions.actionCounts
          this.setState({ action })
          console.log(window.to)
        })

    }

  }

  //       .then(response => {
  //         return response.json();
  //       }).then(data => {

  //         console.log(data)
  //         let members = data
  //         console.log(members.deletedBoardCount)
  //         console.log((members.activeMemberCount))
  //         console.log((members.inactiveMemberCount))
  //         this.setState({ members })
  //         console.log("state", this.state.members)



  //       })

  //   }
  // }

  //clears data in calendar selection and sets data to default
  clearData = () => {
    console.log("clear")
    this.DatePickerValueTo.state = null;
  }


  //"to" value from selected calendar date
  storeTo = (val) => {
    window.to = val
    console.log(val)
    // console.log("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start" + window.from + "/end/" + window.to)

    if (window.from) {

      // fetchData("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + window.from + "/end/" + window.to).then
      Promise.all([
        fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + window.from + "/end/" + window.to),
        fetch
          ("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start" + window.from + "/end/" + window.to)
      ])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([data1, data2]) => {


          // console.log(dataActions)
          console.log(data1)
          console.log(data2)
          let members = data1
          let actions = data2

          console.log(actions.actionCounts.commentCard)
          console.log(members.deletedBoardCount)
          console.log((members.activeMemberCount))
          console.log((members.inactiveMemberCount))
          this.setState({ members })
          this.setState({ actions })

          console.log("state", this.state.members)
          console.log("state", this.state.actions)
          let action = actions.actionCounts
          this.setState({ action })

          console.log(window.to)
        })

    }
    // 

  }

  storeFrom(val) {
    window.from = val
    console.log(val)
  }


  render() {

    // const { isLoading, error } = this.state;
    // const { members, yesterday, button, actions } = this.state


    return (

      <div className="App">
        <Calendar-to />
        <Helmet>
          <style>{'body { background-color: #eaeaea; }'}</style>
        </Helmet>
        <div>
          <NavBar />
          {/* <MemberData /> */}
        </div>

        <p className="App-intro">
          Filters
        </p>
        <div>
          <MuiThemeProvider>
            <DatePickerValueFrom sendDatafrom={this.storeFrom} />
          </MuiThemeProvider>
        </div>

        <div>
          <MuiThemeProvider theme={customTheme}>
            <DatePickerValueTo sendDatato={this.storeTo} />
            {/* endDate={this.state.formattedDateTo} */}
          </MuiThemeProvider>
        </div>
        {/* <div>
          <GuttersGrid />
        </div> */}
        <div>
          <Button variant="contained" className="button1" onClick={(e) => this.handleClick(e, 1800)}>
            All Time
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 1)}>
            Yesterday
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 7)}>
            Last 7 Days
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 30)}>
            Last 30 Days
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 182)}>
            Last 6 Months
          </Button>
        </div>
        <div>
          <Button variant="contained" className="button2" onClick={(e) => this.componentDidMount()}>
            Clear Filter
          </Button>
        </div>

        <div>
          <MemberCard activeMembers={this.state.members.activeMemberCount} inactiveMembers={this.state.members.inactiveMemberCount} licensedMembers={this.state.members.licensedMemberCount} activeBoard={this.state.members.activeBoardCount} deletedBoard={this.state.members.deletedBoardCount} archivedBoard={this.state.members.archivedBoardCount} />
        </div>
        <div>
          <FilterYesterday action={this.state.action} />
        </div>
        <div>
          <StickyFooter />
        </div>


      </div>

    );

  }
}

export default App;
