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
    const [cart, Setcart] = useState(false);


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
                <div className="cart">
                    <div className="buttons">
                        <button className="cart-button">A</button>
                        <span className="cart-button">Cart</span>
                        <button className="cart-button">Clear</button>
                    </div>
                    <div className="cart-product">
                        <div className="cart-product-box">
                            <img src={user} alt="" />
                            <div>
                                <h6>Strawberries</h6>
                                <span>$ 5.89</span>
                            </div>
                            <div className="counter-cart">
                                <button className='counter-btn'>-</button>
                                <p>1</p>
                                <button className='counter-btn'>+</button>
                            </div>
                        </div>

                        <div className="cart-pricing">
                            <div className="item-price">
                                <span>Sub Total</span>
                                <span>$ 5.75</span>
                            </div>
                            <div className="item-price">
                                <span>Delivery</span>
                                <span>$ 1.75</span>
                            </div>
                            <hr />
                            <div className="total-amount">
                                <span>Total</span>
                                <span>$ 7.25</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
