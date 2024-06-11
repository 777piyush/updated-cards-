// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const UserPage = () => {
//     const {profileId}=useParams();
//     return (
//         <div>
//             <h2>Welcome to the User Page</h2>
//             {/* Add any content specific to the user page */}
//             {/* <Link to="/Profile" className='btn btn-primary mx-3' >Your Profile</Link> */}

//             <Link to={`/ReviewById/${profileId}`} className='btn btn-primary mx-3' >Your Reviews</Link>
//             <Link to="/reservationById" className='btn btn-primary mx-3' >Your Reservation</Link>

//         </div>
//     );
// }

// export default UserPage;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';

// const UserPage = () => {
//     const { auth } = useContext(AuthContext);

//     // Sample car data (replace with actual data from your database)
//     const cars = [
//         {
//             id: 1,
//             name: 'Toyota Camry',
//             image: 'https://via.placeholder.com/150',
//             description: 'Spacious sedan with advanced features',
//         },
//         {
//             id: 2,
//             name: 'Honda Civic',
//             image: 'https://via.placeholder.com/150',
//             description: 'Compact and fuel-efficient',
//         },
//         {
//             id: 3,
//             name: 'Ford Mustang',
//             image: 'https://via.placeholder.com/150',
//             description: 'Iconic sports car with powerful performance',
//         },
//     ];

//     return (
//         <div className="container mx-auto py-8">
//             <h2 className="text-4xl font-semibold mb-8 text-center">Welcome to the User Page</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {cars.map((car) => (
//                     <Link to={`/cars/${car.id}`} key={car.id} className="relative rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out">
//                         <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
//                         <div className="p-4">
//                             <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//                             <p className="text-sm text-gray-600 mb-4">{car.description}</p>
//                             <div className="absolute bottom-4 left-4">
//                                 <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm">Today's Offer</span>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default UserPage;

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';

// const UserPage = () => {
//     const { auth } = useContext(AuthContext);

//     // Sample car data (replace with actual data from your database)
//     const cars = [
//         {
//             id: 1,
//             name: 'Toyota Camry',
//             image: 'https://via.placeholder.com/150',
//             description: 'Spacious sedan with advanced features',
//             price: '$50/day',
//         },
//         {
//             id: 2,
//             name: 'Honda Civic',
//             image: 'https://via.placeholder.com/150',
//             description: 'Compact and fuel-efficient',
//             price: '$40/day',
//         },
//         {
//             id: 3,
//             name: 'Ford Mustang',
//             image: 'https://via.placeholder.com/150',
//             description: 'Iconic sports car with powerful performance',
//             price: '$100/day',
//         },
//     ];

//     const [hoveredCard, setHoveredCard] = useState(null);

//     return (
//         <div className="container mx-auto py-8">
//             <h2 className="text-4xl font-semibold mb-8 text-center">Welcome to the User Page</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {cars.map((car) => (
//                     <Link
//                         to={`/cars/${car.id}`}
//                         key={car.id}
//                         className={`relative rounded-lg overflow-hidden border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105 ${hoveredCard !== car.id ? 'filter blur-md' : ''}`}
//                         onMouseEnter={() => setHoveredCard(car.id)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                     >
//                         <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
//                         <div className="p-4">
//                             <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//                             <p className="text-sm text-gray-600 mb-1">{car.description}</p>
//                             <p className="text-sm text-gray-600 mb-4">Price: {car.price}</p>
//                             <div className="absolute bottom-4 left-4">
//                                 <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm">Today's Offer</span>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default UserPage;

// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';
// import axios from 'axios';

// const UserPage = () => {
//     const { auth } = useContext(AuthContext);
//     const [randomCars, setRandomCars] = useState([]);

//     useEffect(() => {
//         // Fetch random car data from your backend API
//         fetch('http://localhost:8080/api/cars/priceLessThan/5000')
//             .then(response => response.json())
//             .then(data => {
//                 // Set random car data to state
//                 setRandomCars(data);
//             })
//             .catch(error => console.error('Error fetching random cars:', error));
//     }, []); // Empty dependency array ensures the effect runs only once after the component mounts

//     return (
//         <div className="container mx-auto py-8">
//             <h2 className="text-4xl font-semibold mb-8 text-center">Welcome to the User Page</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {randomCars.map((car) => (
//                     <div key={car.id} className="relative rounded-lg overflow-hidden border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
//                         <Link to={`/cars/${car.id}`}>
//                             <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
//                             <div className="p-4">
//                                 <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//                                 <p className="text-sm text-gray-600 mb-1">{car.description}</p>
//                                 <p className="text-sm text-gray-600 mb-4">Price: {car.price}</p>
//                                 <div className="absolute bottom-4 left-4">
//                                     <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm">Today's Offer</span>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default UserPage;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContext } from "../context/AuthProvider";
import UserImg from "../images/user.jpg";
import UserImg2 from "../images/UserImg2.jpg";
import UserImg3 from "../images/UserImg3.jpg";
import Slider from "react-slick";
import axios from "axios";
import CarService from "../services/CarService";
import hatchbackImg from "../images/hatchback.png";
import sedanImg from "../images/sedan.png";
import suvImg from "../images/suv.png";
import muvImg from "../images/muv.png";

const UserPage = () => {
  const { auth } = useContext(AuthContext);
  const [carsData, setCarsData] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  const getCarImage = (carType) => {
    switch (carType) {
      case "HATCHBACK":
        return hatchbackImg;
      case "SEDAN":
        return sedanImg;
      case "SUV":
        return suvImg;
      case "MUV":
        return muvImg;
      default:
        return null; // Return null if carType doesn't match
    }
  };

  // const carImage = getCarImage(carsData.carType);

  // Function to fetch car data from the backend API
  const fetchCarData = async () => {
    // try {
    //   // Make API call to fetch car data from the backend
    //   const response = await axios.get(
        
    //   ); // Adjust the API endpoint accordingly
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch car data");
    //   }
    //   const data = await response.json();
    //   setCarsData(data); // Set the fetched car data to state
    // } catch (error) {
    //   console.error("Error fetching car data:", error);
    // }

    CarService.getCarUnderPrice(5000).then((res)=>{
      setCarsData(res.data)
    }).catch((err)=>console.log(err))
  
  };

  useEffect(() => {
    // Fetch car data when the component mounts
    fetchCarData();
  }, []); // Only run once on component mount

  return (
    <div >
      {/* <div className="py-18 bg-cover " style={{backgroundImage: `url(${UserImg})`}}>
       */}
      {/* <div className="container mx-auto h-screen ">
        <h2 className="text-6xl font-semibold mb-8 text-center p-10 text-white">
          Welcome to Road-Ready - Your Ultimate Car Rental Solution!
        </h2>
      </div> */}

      {/* <div className="container mx-auto max-w-7xl h-auto w-auto p-8  font-semibold text-gray-800">
        <p>
          Looking for hassle-free and reliable car rental services? You've come
          to the right place! At Road-Ready, we offer a wide range of
          vehicles to suit your every need, whether it's a quick city trip, a
          family vacation, or a business journey.
        </p>
      </div> */}
      {/* </div> */}

      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="text-xs font-medium md:text-sm">
                Welcome to Road-Ready - Your Ultimate Car Rental Solution!
              </p>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Thanks For Choosing Us...
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Welcome to Road-Ready, your trusted companion on the road! We're
              delighted to have you join our community of adventurers and
              travelers. Whether you're embarking on a cross-country road trip,
              exploring new destinations, or simply need a reliable ride for
              your daily commute, Road-Ready is here to ensure you're equipped
              for the journey ahead. Our wide selection of vehicles, easy
              booking process, and dedication to customer satisfaction make us
              the perfect choice for all your transportation needs. Get ready to
              hit the road with confidence and peace of mind. Welcome to
              Road-Ready, where every journey begins!
            </p>
            <div className="mt-8">
              <Link to={`/cars/getAll`} className='btn btn-primary mx-3' >
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore Now
              </button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4">
            <Slider {...settings}>
              <div>
                <img
                  className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
                  src={UserImg}
                  alt="User"
                />
              </div>
              <div>
                <img
                  className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
                  src={UserImg2}
                  alt="User"
                />
              </div>
              <div>
                <img
                  className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
                  src={UserImg3}
                  alt="User"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl mt-10 py-10">
        <h3 className="text-bold w-1/3 text-black font-serif h-20 py-6 rounded hover:bg-opacity-80 transition duration-300 ease-in-out transform hover:scale-105">
          Car Featured
        </h3>

        <div className="pl-72 place-content-between grid h-96px   lg:grid-cols-3 gap-16 rounded-6xl py-12 bg-blue-100 ">
          {carsData.map((car) => (
            <div
              key={car.id}
              className={`relative rounded-lg overflow-hidden border bg-white border-black shadow-2xl transition duration-300 ease-in-out transform hover:scale-105`}
            >
              {/* <Link to={`/cars/${car.id}`}> */}
                <img
                  src={getCarImage(car.carType)}
                  alt={car.model}
                  className="w-full h-56 object-contain rounded-md bg-slate-900"
                />
                <div className="p-4 ">
                  <h3 className="text-xl  text-black font-serif font-semibold mb-2">{car.brand}</h3>
                  <p className="text-sm text-gray-600 font-bold mb-1 px-2">
                    {car.description}
                  </p>
                  <p className="text-sm text-red-500 mb-4 p-2 font-extrabold">
                    Price: {car.price} /Hour
                  </p>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm">
                      Today's Offer
                    </span>
                  </div>
                </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
