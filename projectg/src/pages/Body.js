import React from "react";
import { NavLink } from "react-router-dom";

export default function Body (){
  return (
    <div className="body">
  <NavLink to="/instructions">how to play</NavLink>
    </div>
  )
}