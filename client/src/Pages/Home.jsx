import React, { useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'

import Header from './Basic-component/Hearder'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import { BiSolidCart } from 'react-icons/bi';

import Product from '../Data/Product'
import Fruits from '../Data/Fruits'
import back from '../assets/images/herobg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, } from 'swiper/modules';
import Footer from './Basic-component/Footer';

const Home = () => {
    const location = useLocation();
    const { pathname } = location;

    const splitLocation = pathname.split("/");
    return (
        <>
            <Header />
            <div className="hero">
                <div className="hero-details">
                    <span>
                        Bike Delivery
                        <span>
                            <MdOutlineDirectionsBike className='i' />
                        </span>
                    </span>
                    <h1 className="hero-heading">
                        The Fastest <br /> Delivery in <span>Your <br /> City</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nesciunt modi provident cupiditate veritatis non sint. Commodi consequatur quod nam doloremque odio, obcaecati porro soluta, nostrum ipsam quaerat voluptates totam.
                    </p>
                    <button className="btn">Order Now</button>
                </div>
                <div className="boxes">
                    <img src={back} alt="" />
                    {Product.map((pro) => (
                        <div className="box">
                            <img src={pro.image} alt="" />
                            <h1>{pro.name}</h1>
                            <span>{pro.description}</span>
                            <p>${pro.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fruits */}
            <div className="fruits">
                <h1 className="section-heading">
                    Fresh Fruits & Healthy Fruits
                </h1>
                <div className='line'></div>
                {/* Fruits section */}
                <div className="friut-product">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        pagination={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Navigation, Pagination,]}
                        className="mySwiper"
                    >
                        {Fruits.map((fruits) => (
                            <SwiperSlide >
                                <BiSolidCart className='icon' />
                                <img src={fruits.image} alt="" />
                                <h3>{fruits.name}</h3>
                                <span>{fruits.description}</span>
                                <p>${fruits.price}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Our Host dishes */}
                <div className="hot-dishes">
                    <h1 className="section-heading">
                        Our Hot Dishes
                    </h1>
                    <div className="line"></div>

                    <div className="categories">

                        <ul className="category">
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "" ? "selected" : ""} to=''>Chicken</Link>
                            </li>
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "curry" ? "selected" : ""} to=''>Curry</Link>
                            </li>
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "rice" ? "selected" : ""} to=''>Rice</Link>
                            </li>
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "fish" ? "selected" : ""} to=''>Fish</Link>
                            </li>
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "cream" ? "selected" : ""} to=''>Fruits</Link>
                            </li>
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "cream" ? "selected" : ""} to=''>IceCream</Link>
                            </li>
                            <li >
                                < BiSolidCart className='span' />
                                <Link className={splitLocation[1] === "soft" ? "selected" : ""} to=''>Soft Berries</Link>
                            </li>
                        </ul>

                    </div>

                    <div className="filter-product">
                        {Fruits.map((fruit) => (
                            <div className='product-box'>

                                <img src={fruit.image} alt="" />
                                {/* <BiSolidCart className='icon' /> */}
                                <h3>{fruit.name}</h3>
                                <p>{fruit.description}</p>
                                <p>${fruit.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home