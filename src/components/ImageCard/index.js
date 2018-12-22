import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img 
            alt={props.id} 
            src={props.image_src} 
            onClick={() => props.selectImage(props.id)}
        />
      </div>
    </div>
  );
}

export default ImageCard;
