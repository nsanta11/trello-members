import React from 'react'
import StickyFooter from 'react-sticky-footer';

//Sticky footer component with minimized toggle version
const Footer = () => {
    return (
        <div>
            <StickyFooter   
                bottomThreshold={50}
                normalStyles={{
                    backgroundColor: "#eaeaea",
                    padding: "2rem",
                    color: "#6B3FA0"
                }}
                stickyStyles={{
                    padding: "1.5rem",
                    color: "#6B3FA0"
                }}
            >
                Grand Canyon University © | All rights reserved
            </StickyFooter>
        </div>
    )
}

//export footer to parent
export default Footer;