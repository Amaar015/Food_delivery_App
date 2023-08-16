import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/avatar.png'
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [clicked, Setclicked] = useState(false);
    const [mobile, Setmobile] = useState(false);


    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <span>Khazina</span>
            </div>
            <div className="list-navbar">
                <ul className={mobile ? 'mobile-nav' : 'nav'} onClick={() => Setmobile(false)}>
                    <li >
                        <Link className={splitLocation[1] === "" ? "active" : ""} to='/'>Home</Link>
                    </li>
                    <li >
                        <Link className={splitLocation[1] === "about" ? "active" : ""} to='/about'>About</Link>
                    </li>
                    <li >
                        <Link className={splitLocation[1] === "service" ? "active" : ""} to='/service'>Service</Link>
                    </li>
                    <li >
                        <Link className={splitLocation[1] === "menu" ? "active" : ""} to='/menu'>Menu</Link>
                    </li>
                </ul>
                <div className="user-detail">
                    <span>A</span>
                    <img src={user} alt="" />
                </div>
                <button className="menu-button" onClick={() => Setmobile(!mobile)}>
                    {mobile ? <h2><RxCross1 /></h2> : <h2><AiOutlineBars /></h2>}
                </button>

            </div>
        </div>
    )
}

export default Header
