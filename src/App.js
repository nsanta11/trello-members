import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import moment from 'moment'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from "./components/navbar/Navbar.js";
import MemberCard from "./components/member/MemberCard";
import StickyFooter from "./components/footer/Footer.js";
import DatePickerValueFrom from "./components/calendar/Calendar.js";
import DatePickerValueTo from "./components/calendar-to/CalendarTo.js";
import FilterYesterday from "./components/filterYesterday/FilterYesterday";
import formattedDateTo from "./components/calendar-to/CalendarTo.js"


//App (parent) component
class App extends Component {

  constructor(props) {
    super(props)

    //set state of inital values
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

  //set default date to all time on load or on "clear"
  componentDidMount = (e) => {
    let today = moment().format('YYYY-MM-DD')
    console.log(today)

    //fetch api member and activity data
    Promise.all([
      fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/2000-01-01/end/" + today),
      fetch("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start/2000-01-01/end/" + today)
    ])
      //format json response and log data results
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

        //set state for member and action data
        console.log("state", this.state.members)
        console.log("state", this.state.actions)
        let action = actions.actionCounts
        this.setState({ action })
        console.log(this.state.actions.actionCounts.commentCard)
        console.log(window.to)
      })



  }

  //handles click event for button filters by passing through day number arg
  handleClick = (e, days) => {

    console.log(days)
    let yesterday = moment().add(-days, 'days')
    console.log(yesterday)
    const date = yesterday.format('YYYY-MM-DD')
    console.log(date)
    let today = moment().format('YYYY-MM-DD')
    console.log(today)


    if (date) {
      console.log(("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + date + "/end/" + today))

      Promise.all([
        //api fetch to url with selected dates
        fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + date + "/end/" + today),

        fetch("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start" + date + "/end/" + today)
      ])
        //format json response and log data results
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

          //set state for action and member data
          console.log("state", this.state.members)
          console.log("state", this.state.actions)
          let action = actions.actionCounts
          this.setState({ action })
          console.log(window.to)
        })

    }

  }

  //"to" value from selected calendar date
  storeTo = (val) => {
    window.to = val
    console.log(val)

    if (window.from) {

      // fetching data from both the members and activities
      Promise.all([
        fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + window.from + "/end/" + window.to),

        fetch("https://www.gcumedia.com/sample-data/api/reporting/actionCounts/start" + window.from + "/end/" + window.to)
      ])
        //format json response and log data results
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

          //set state for member and action data
          console.log("state", this.state.members)
          console.log("state", this.state.actions)
          let action = actions.actionCounts
          this.setState({ action })

          console.log(window.to)
        })

    }

  }

  //"from" value from selected calendar date
  storeFrom(val) {
    window.from = val
    console.log(val)
  }

  //render app components
  render() {

    return (

      <div className="App">
        <Calendar-to />
        <Helmet>
          <style>{'body { background-color: #eaeaea; }'}</style>
        </Helmet>
        <div>
          <NavBar />
        </div>

        <h3 className="App-intro">
          Filters
        </h3>
        <h3 className="Report-intro">
          Reports
        </h3>
        <div>
          <MuiThemeProvider>
            <DatePickerValueFrom sendDatafrom={this.storeFrom} />
          </MuiThemeProvider>
        </div>

        <div>
          <MuiThemeProvider>
            <DatePickerValueTo sendDatato={this.storeTo} />
          </MuiThemeProvider>
        </div>
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
