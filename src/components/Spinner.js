import React from "react";
import "./loader.css";

const Spinner =() => {
    return (
      <div className="loader-wrapper">
        <div className="news-spinner"></div>
        <p className="loading-text">Fetching Latest News...</p>
      </div>
    );   
}

export default Spinner;
