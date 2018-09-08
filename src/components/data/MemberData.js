// import React, { Component } from 'react'
// import Grid from '@material-ui/core/Grid';
// // import TextField from '@material-ui/core/TextField';
// import DatePicker from 'material-ui/DatePicker';
// import MemberCard from '../member/MemberCard'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// // import ReactDOM from 'react-dom';
// import axios from 'axios';

// let calendarStart = "2017-01-01",
//     calendarFinish = "2018-01-01"

// const query = "https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + calendarStart + "/end/" + calendarFinish

// console.log(query);

// class MemberData extends Component {
//     state = {
//         members: [],
//         calendarStart: '',
//         calendarFinish: ''
//     }
//     constructor() {
//         super()
//         this.getMembers()
//     }
//     getMembers = () => {
//         axios.get({
//             dataType: 'json',
//             url: query,
//             method: "GET",
//         })
//             .then((response) => {
//                 this.setState({ members: response.items })
//                 console.log(this.state.members)
//             })
//             .catch((error) => {
//                 console.log("Error occurred while fetching Entries")
//                 console.error(error)
//             })
//     }
//     onSearchInputChange = (event) => {
//         console.log("Search changed ..." + event.target.value)
//         if (event.target.value) {
//             this.setState({ calendarStart: event.target.value })
//             this.setState({ calendarFinish: event.target.value })
//         } else {
//             this.setState({ calendarStart: '' })
//             this.setState({ calendarFinish: '' })
//         }
//         this.getMembers()
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.members ? (
//                     <div>
//                         <MuiThemeProvider>
//                             <DatePicker style={{ padding: 24 }}
//                                 id="calendarInput"
//                                 placeholder="Search for Dates"
//                                 margin="normal"
//                                 onChange={this.onSearchInputChange}
//                             />
//                         </MuiThemeProvider>
//                         <Grid container spacing={24} style={{ padding: 24 }}>
//                             {this.state.members.map(currentMember => (
//                                 <Grid item xs={12} sm={6} lg={4} xl={3}>
//                                     <MemberCard member={currentMember} />
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </div>
//                 ) : "No members found"}
//             </div>
//         )
//     }
// }

// export default MemberData;