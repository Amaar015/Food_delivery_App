import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <span>Khazina</span>
            </div>
            <div className="list-navbar">
                <ul className='nav'>
                    <li>{splitLocation[1]}</li>
                    {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className={splitLocation[1] === "detail" ? "active" : ""}>
                        <Link to='/detail'>About</Link>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Header
