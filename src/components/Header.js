import React from 'react'
import Link from 'gatsby-link'
import s3 from '../assets/images/s3.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><span>Season Three</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
