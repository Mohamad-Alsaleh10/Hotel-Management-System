import { useParams } from "react-router-dom"
import { Package } from '../../types/package';
import { useEffect, useState } from "react";

const packageData: Package[] = [
  {
    id: '1',
    hotel_Name: 'sheraton',
    country_Name: 'damascus',
    Type_Reservation:'single room',
    price:10.00,
  },
  {
    id: '2',
    hotel_Name: 'sheraton',
    country_Name: 'damascus',
    Type_Reservation:'single room',
    price:10.00,
  },
  {
    id: '3',
    hotel_Name: 'sheraton',
    country_Name: 'damascus',
    Type_Reservation:'single room',
    price:10.00,
  },
  {
    id: '4',
    hotel_Name: 'sheraton',
    country_Name: 'damascus',
    Type_Reservation:'single room',
    price:10.00,
  },
];
export default function ViewHotel() {
    const {id} = useParams();
    const [hotel, setHotel] = useState<Package | undefined>();

    useEffect(() => {
      // Find the hotel with the matching id
      const foundHotel = packageData.find(hotel => hotel.id === id);
      setHotel(foundHotel);
    }, [id]);
    if (!hotel) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        );
      }
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Hotel image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{hotel.hotel_Name}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Hotel Name</a>
          <p className="mt-2 text-gray-500">Country: {hotel.country_Name}</p>
          <p className="mt-2 text-gray-500">Type of Reservation: {hotel.Type_Reservation}</p>
          <p className="mt-2 text-gray-500">Price: ${hotel.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
