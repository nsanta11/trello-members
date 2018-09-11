import React from 'react'
import StickyFooter from 'react-sticky-footer';


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
                    // backgroundColor: "rgba(255,255,255,.8)",
                    padding: "1.5rem",
                    color: "#6B3FA0"
                }}
            >
                Grand Canyon University © | All rights reserved
</StickyFooter>
        </div>
    )
}
export default Footer;