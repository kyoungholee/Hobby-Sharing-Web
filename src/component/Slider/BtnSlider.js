import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left2.jpg";
import rightArrow from "./icons/right2.jpg";

export default function BtnSlider({ direction, moveSlide }) {
     //                             props로 값을 받은것 
  return (
    <button
      onClick={moveSlide}
      className = {direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src = {direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}