import React from "react";
import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <article className="hotelCard">
      <header className="hotelCard__header">
        <img
          className="hotelCard__img"
          src={hotel.images[0].url}
          alt="Imagen del Hotel"
        />
      </header>
      <section className="hotelCard__info">
        <h3 className="hotelCard__title">{hotel.name}</h3>
        <div className="hotelCard__info-container">
          <span className="hotelCard__rating">Puntuación: {hotel.rating}</span>
          <p className="hotelCard__country">
            {hotel.city.name}, {hotel.city.country}
          </p>
          <span className="hotelCard__price">{hotel.price}</span>
        </div>
        <button className="hotelCard__btn" onClick={handleClick}>
          See more...
        </button>
      </section>
    </article>
  );
};

export default HotelCard;
