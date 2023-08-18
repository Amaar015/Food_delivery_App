import React from 'react'
import Header from './Basic-component/Hearder'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import Product from '../Data/Product'
const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="hero-details">
                    <span>
                        Bike Delivery
                        <MdOutlineDirectionsBike />
                    </span>
                    <h1 className="hero-heading">
                        The Fastest Delivery in Your City
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nesciunt modi provident cupiditate veritatis non sint. Commodi consequatur quod nam doloremque odio, obcaecati porro soluta, nostrum ipsam quaerat voluptates totam.
                    </p>
                    <button className="btn">Order Now</button>
                </div>
                <div className="boxes">
                    {Product.map((pro) => (
                        <div className="box">
                            <h1>{pro.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home