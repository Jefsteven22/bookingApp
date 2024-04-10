import { useSelector } from "react-redux";
import HotelCard from "../Components/HomePage/HotelCard";

const HomePage = () => {
  const hotels = useSelector((states) => states.hotels);
  console.log(hotels);
  return (
    <div>
      {hotels?.map((hotelInfo) => (
        <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
      ))}
    </div>
  );
};

export default HomePage;
