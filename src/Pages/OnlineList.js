import React from 'react'
import './OnlineList.css';
import dummy from '../DB/Online.json';
import { Swiper , SwiperSlide} from "swiper/react";
import SwiperCore, { 
    Navigation, 
    Pagination, 
  } from "swiper"; //*

  import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

import "../Swiper/swiper.scss";
import "../Swiper/Navigation.scss";


function OnlineList() {
    return (
        <>
            <div className = "OnlineList">
                <Swiper className = "Swiper">
                    {dummy.online.map(list => (

                    <SwiperSlide key = {list.id} className = "swiper-slide">
                        <div className = "arrow">
                            <ArrowLeftOutlined  className = "Left" />
                            <div className = "name">{list.name}</div>
                            <ArrowRightOutlined  className = "right"/>
                        </div>       
                    </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </>
    )

}

export default OnlineList
