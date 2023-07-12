import React, { useState } from 'react';
import db from '../../data/db.json';
import { useParams } from 'react-router-dom';
import './TourDetails.css';

const TourDetails = () => {
  const { id } = useParams();
  const [line, setLine] = useState(true);

  const tour = db.find((tour) => tour.id === id);

  const handleToggleLine = () => {
    setLine(!line);
  };

  return (
    <>
      {tour ? (
        <div>
          <div className="tour-section">
            <img src={tour.image} alt={tour.name} className="tour-image" />
            <div className="tour-content">
              <h1 className="tour-name">{tour.name}</h1>
              {line ? (
                <p className="tour-description">{tour.info.substring(0, 350) + ' ..Read More    '}</p>
              ) : (
                <p className="tour-description">{tour.info}</p>
              )}
              <button className="see-more-button" onClick={handleToggleLine}>
                {line ? 'Read More' : 'Read Less'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Tour not found</p>
      )}
    </>
  );
};

export default TourDetails;
