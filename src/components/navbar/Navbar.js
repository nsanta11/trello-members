import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import "./Navbar.css"
import logo from '../../images/trello-report-banner.png'

//Navbar component composition
const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <div className="wrapper">
                    <div className="wrapper1">
                        <div className="wrapper2">
                            <img className="logo" src={logo} alt={"logo"} width={350} />
                        </div>
                    </div>
                </div>
            </AppBar>
        </div>
    )
}

//export navbar to parent
export default NavBar;