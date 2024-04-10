import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";
import { Map, Marker } from "pigeon-maps";

const HotelsIdPage = () => {
  const { id } = useParams();
  const url = `https://hotels-api.academlo.tech/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [url]);

  console.log(hotel);

  return (
    <article>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div className="slider">
        <img src={hotel?.images[0].url} alt="imagen del hotel" />
        {hotel && (
          <Map
            height={400}
            defaultCenter={[+hotel.lat, +hotel.lon]}
            defaultZoom={11}
          >
            <Marker anchor={[+hotel.lat, +hotel.lon]} color="red" width={40} />
          </Map>
        )}
      </div>
      <section>
        <h3>
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
    </article>
  );
};

export default HotelsIdPage;
