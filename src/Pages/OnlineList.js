import React, {useRef} from 'react';
import './OnlineList.css';
import dummy from '../DB/Online.json';
import { Swiper , SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination} from "swiper"; 
import left from '../images/left 2.JPG';
import right from '../images/right.JPG';

function OnlineList() {


    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <>
            <div className = "OnlineList">
                <Swiper className = "Swiper"


                navigation={{
                    prevEl: prevRef.current ? prevRef.current : undefined,
                    nextEl: nextRef.current ? nextRef.current : undefined,
                  }}

            
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation ={{ clickable: true }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 1000 }}
                >
                    {dummy.online.map(list => (

                    <SwiperSlide key = {list.id} className = "swiper-slide">

                        <div className = "images">
                        <img src = {list.image} alt = {list.name} width = "400px" height = "320px"/>
                        </div>

                    </SwiperSlide>
                        ))}
                        <div ref={prevRef} className = "left">
                            <img src = {left} alt = "left" width = "44px" height = "32px" />
                        </div>
                        <div ref={nextRef} className = "right">
                            <img src = {right} alt = "right" width = "44px" height = "32px" />
                        </div>
                </Swiper>
            </div>
        </>
    ) 

}

export default OnlineList
