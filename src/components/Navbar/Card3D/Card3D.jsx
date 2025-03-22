
import React from 'react';
import './Card3D.css';

const Card3D = ({ title, description }) => {
  return (
    <div className="card-3d">
      <div className="card-3d-inner">
        <div className="card-3d-front">
          <h3>{title}</h3>
        </div>
        <div className="card-3d-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card3D;
