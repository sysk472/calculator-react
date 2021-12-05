import { Textfit } from "react-textfit";
import React from 'react';
import './Screen.css'

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  )
}