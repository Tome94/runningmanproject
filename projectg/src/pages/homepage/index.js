import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div classname="page">
      <div classname="grid">
        <Link to="/local"><h2>local</h2></Link>
        <Link><h2>internet</h2></Link>
        
      </div>
    </div>
  );
};
export default HomePage