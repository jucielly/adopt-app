import React from 'react';
import ErrorImage from '../../assets/poodle-error.svg';
import './style.css';



type ErrorCardProps = {
  message: string
}

const ErrorCard: React.FC<ErrorCardProps> = ({ message }) => {

  return (
    <div className="error-card-container">
      <div className="error-card">
        <img src={ErrorImage} alt="doggo" className="error-logo" />
        <h3 className="error-message">{message}</h3>
      </div>
    </div>


  );
};

export default ErrorCard;
