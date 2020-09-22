import React from 'react';
import { Component } from 'react';
import data from "../data/city.json";
import SwiperCore, { A11y, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';


import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';



SwiperCore.use([A11y, Navigation])

export default class State extends Component {

    render() {

        return (

            <div className="stateBar">
                <div className="state">استان</div>
                <div className="swiperContainer">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={'auto'}
                        onSlideChange={(swiper) => {
                            swiper.update()
                        }}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}
                    >
                        {data.City.map((city, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    {city.Title}
                                </SwiperSlide>

                            );
                        })
                        }

                    </Swiper >
                    <div className="prev"> <MdKeyboardArrowRight color='white' size='20' /></div>
                    <div className="next"> <MdKeyboardArrowLeft color='white' size='20' /> </div>
                </div>



            </div>



        );

    }

}
