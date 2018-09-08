import React from 'react'
import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import "./Navbar.css"
import logo from '../../images/trello-report-banner.png'


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                {/* <Toolbar> */}
                <div className="wrapper">
                    <div className="wrapper2">
                        <img src={logo} alt={"logo"} width={350} />
                    </div>
                </div>
                {/* </Toolbar> */}
            </AppBar>
        </div>
    )
}
export default NavBar;