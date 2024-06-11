// import React, { useEffect, useState } from "react";
// // import { deleteCar } from './CarComponent.jsx';
// import { Link } from "react-router-dom";
// import hatchbackImg from '../images/hatchback.png';
// import sedanImg from '../images/sedan.png';
// import suvImg from '../images/suv.png';
// import muvImg from '../images/muv.png';
// import axios from "axios";

// const CarCard = (props) => {
//     // if (!props.car) {
//     //     return null; // Return null if car prop is not defined or null
//     // }

//     const [averageRating, setAverageRating] = useState(null);

//     useEffect(() => {
//         if (props.car) {
//             const fetchAverageRating = async () => {
//                 try {
//                     const response = await axios.get(`http://localhost:8080/api/reviews/car/averageRating?carId=${props.car.id}`);
//                     setAverageRating(response.data); // Assuming the API returns just the average rating
//                 } catch (error) {
//                     console.error("Error fetching average rating:", error);
//                 }
//             };

//             fetchAverageRating();
//         }
//     }, [props.car]);

//     const handleDeleteCar = () => {
//         props.deleteCar(props.car.id);
//     };

//     // Function to get the corresponding image based on carType
//     const getCarImage = (carType) => {
//         switch (carType) {
//             case 'HATCHBACK':
//                 return hatchbackImg;
//             case 'SEDAN':
//                 return sedanImg;
//             case 'SUV':
//                 return suvImg;
//             case 'MUV':
//                 return muvImg;
//             default:
//                 return null; // Return null if carType doesn't match
//         }
//     };

//     const carImage = getCarImage(props.car.carType);

//     return (
//         <div className=" mx-auto grid w-full max-w-7xl items-center gap-6 px-2 py-10 md:grid-cols-1 md:gap-6 md:space-y-0 lg:grid-cols-1">
//             {/* {error && <div className="alert alert-danger">{error}</div>} */}
//             {[...Array(1)].map((_, i) => (
//                 <div key={i} className="rounded-md border">
//                     {carImage && <img
//                         src={carImage}
//                         alt="Car"
//                         className=" bg-transparent bg-gradient-to-r from-cyan-500 to-bg-zinc-50 aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] object-contain"
//                     />}
//                     <div className="p-4 bg-cyan-100">
//                         <h3 className="inline-flex items-center text-lg font-semibold text-justify">
//                             {props.car.brand}
//                         </h3>
//                         <p className="mt-3 text-sm text-gray-600">{props.car.id}</p>

//                         <p className="mt-3 text-sm text-gray-600">{props.car.location}</p>

//                         {averageRating !== null && (
//                       <div className=" container flex justify-items-center gap-2">

//                           <div className=" m-2 m">
//                              <img src="https://www.zoomcar.com/img/icons_star.svg" alt="Star Icon" className="w-5 h-5" />
//                           </div>
//                           <div className=" my-2 font-bold " >
//                              <p font-serif>{averageRating}</p>
//                           </div>
//                       </div>
//                       )}

//                         {/* <div className="mt-4">
//                             <p className="mt-1 text-sm text-gray-500">{car.description}</p>
//                         </div> */}
//                         {/* <div className="mt-4 w-70  overflow-auto bg-gray-100 p-2 rounded-md">
//                             <p className="text-sm text-gray-700">{props.car.description}</p>
//                         </div> */}
//                         <div className="mt-4 w-70 h-40 overflow-auto bg-gray-100 p-2 rounded-md">
//                                <p className="text-sm text-gray-700">{props.car.description}</p>
//                           </div>

//                         <div className="mt-3 items-center space-x-2">
//                             <p className={`mt-1  text-sm ${props.car.availability ? "text-green-500" : "text-red-500"}`}>
//                                 {props.car.availability ? "Available" : "Not Available"}
//                             </p>
//                         </div>
//                         <div className="mt-4">
//                             <img src="	https://www.revv.co.in/assets/RentalImages/PLP/iconDiesel.svg" />
//                             <p className="mt-1 text-sm text-gray-600" >{props.car.fuelType}</p>
//                         </div>
//                         <div className="mt-4">
//                             <img src="	https://www.revv.co.in/assets/RentalImages/PLP/iconTransmission.svg" />
//                             <p className="mt-1 text-sm text-gray-600">{props.car.transmissionType}</p>
//                         </div>
//                         <div>
//                             <img src="https://www.revv.co.in/assets/RentalImages/PLP/iconSeat.svg" />
//                             <p className="mt-1 text-sm text-gray-600">{props.car.carType}</p>
//                         </div>
//                         <div className="mt-5 flex items-center space-x-2">
//                             <span className="block text-sm font-semibold">
//                                 <span className="text-black">Car Colour: </span>
//                                 <span style={{ color: props.car.color }}>{props.car.color}</span>
//                             </span>
//                         </div>
//                         <div className="mt-0.5 flex items-center space-x-2">
//                             <span className="block text-sm font-semibold">
//                                 <span className="text-black">Price: </span>
//                                 <span>{props.car.price}</span>
//                             </span>
//                         </div>
//                         <div>
//                             <Link type="button" to={`/reservations/make/${props.car.id}`} className=" btn mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
//                                 Book
//                             </Link>
//                             <button type="button" onClick={() => handleDeleteCar(props.car.id)} className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
//                                 Delete
//                             </button>

//                             <Link type="button" to={`/cars/updateCar/${props.car.id}`} className="btn my-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
//                                 Update
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CarCard;

import React, { useContext, useEffect, useState } from "react";
// import { deleteCar } from './CarComponent.jsx';
import { Link } from "react-router-dom";
import hatchbackImg from "../images/hatchback.png";
import sedanImg from "../images/sedan.png";
import suvImg from "../images/suv.png";
import muvImg from "../images/muv.png";
import ReviewService from "../services/ReviewService";
import { AuthContext } from "../context/AuthProvider";

const CarCard = (props) => {
  const { auth } = useContext(AuthContext);
  const admin = auth.role === "ROLE_ADMIN";
  const [averageRating, setAverageRating] = useState(null);

  const token = auth.accessToken;

  useEffect(() => {
    const fetchAvgReviews = () => {
      console.log("inside fetch average reviews by car id:", props.car.id);
      ReviewService.getAvgReviews(props.car.id, token)
        .then((response) => {
          console.log(
            `Response received from get avg reviews by carid ${props.car.id} API:`,
            response.data
          );
          setAverageRating(response.data);
        })
        .catch((error) => {
          console.error("Error received from get avg reviews API:", error);
          // setError("No Reviews Yet. Be the first to review this car!");
        });
    };

    if (props.car) {
      fetchAvgReviews();
    }
  }, [props.car]);

  // if (!props.car) {
  //     return null; // Return null if car prop is not defined or null
  // }

  const handleDeleteCar = () => {
    props.deleteCar(props.car.id);
  };

  // Function to get the corresponding image based on carType
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

  const carImage = getCarImage(props.car.carType);

  // const fetchAvgReviews = () => {
  //     console.log("inside fetch average reviews by car id:", props.car.id);
  //     ReviewService.getAvgReviews(props.car.id)
  //         .then((response) => {
  //             console.log(`Response received from get avg reviews by carid ${props.car.id} API:`, response.data);
  //             setAverageRating(response.data);
  //         })
  //         .catch(error => {
  //             console.error("Error received from get avg reviews API:", error);
  //             // setError("No Reviews Yet. Be the first to review this car!");
  //         });
  // };
  // useEffect(() => {
  //     fetchAvgReviews()
  // }, []); //run only once when component mounts


return (
  <div className=" component  pb-1 bg-sky-100 shadow-md rounded-md p-auto transition-transform hover:-translate-y-1 hover:shadow-lg">
    <div className=" mx-auto  items-center gap-3  md:grid-cols-1 md:gap-6 md:space-y-0 lg:grid-cols-1  ">
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
      {[...Array(1)].map((_, i) => (
        <div>
          <div key={i} className="border bg-gray-800 rounded-xl ">
            {carImage && (
              <img
                src={carImage}
                alt="Car"
                className="p-2 rounded-full bg-slate-800 aspect-[16/9] w-full  md:aspect-auto md:h-[300px] lg:h-[200px] object-contain"
              />
            )}
            {/* bg-transparent bg-gradient-to-r from-blue-300 to-bg-blue-150 */}
          </div>
          <div className="pl-2 shadow-2xl  bg-transparent bg-gradient-to-r from-sky-100 to-bg-blue-150- ">
            <div className="flexbox">
            <div className="inline-flex items-center text-xl font-semibold text-justify font-serif antialiased">
              {props.car.brand},  {props.car.model}
            </div>
              {/* <div className="inline-flex items-center text-lg font-semibold text-justify">
                {props.car.model}
              </div> */}
            </div>
            <h1 className=" text-sm text-gray-600">{props.car.id}</h1>

            <div>
              <span>Location: </span>
              <span className="mt-1 text-sm font-bold text-gray-600">
                {props.car.location}
              </span>
            </div>

            {averageRating !== null && (
              <div className="m-1 container inline-flex justify-items-center gap-2">
                <div className=" pt-1">
                  <img
                    src="https://www.zoomcar.com/img/icons_star.svg"
                    alt="Star Icon"
                    className="w-5 h-5"
                  />
                </div>
                <div className=" pl-2 font-bold ">
                  <p className="font-serif">
                    {averageRating > 0 ? averageRating : 0}

                  </p>
                </div>
              </div>
            )}

            {/* <div className="mt-4">
                          <p className="mt-1 text-sm text-gray-500">{car.description}</p>
                      </div> */}
            <div className=" w-auto h-10 overflow-auto bg-sky-50 p-2 rounded-xl">
              <p className="text-sm text-gray-700">{props.car.description}</p>
            </div>

            <div className=" items-center space-x-2">
              <p
                className={` font-semibold text-sm ${
                  props.car.availability ? "text-green-700" : "text-red-500"
                }`}
              >
                {props.car.availability ? "Available" : "Not Available"}
              </p>
            </div>
            <div className="flex">
              <img src="  https://www.revv.co.in/assets/RentalImages/PLP/iconDiesel.svg" />
              <span className="mt-1 mx-5 text-sm text-gray-600">
                {props.car.fuelType}
              </span>
            </div>
            <div className="flex">
              <img src="  https://www.revv.co.in/assets/RentalImages/PLP/iconTransmission.svg" />
              <span className="mt-1 mx-5 text-sm text-gray-600">
                {props.car.transmissionType}
              </span>
            </div>
            <div className="flex">
              <img src="https://www.revv.co.in/assets/RentalImages/PLP/iconSeat.svg" />
              <span className="mt-1 mx-5 text-sm text-gray-600">
                {props.car.carType}
              </span>
            </div>
            <div className="pt-1 flex items-center space-x-2">
              <span className="block text-sm font-semibold">
                <span className="text-black">Car Colour: </span>
                <span style={{ color: props.car.color }}>
                  {props.car.color}
                </span>
              </span>
            </div>
            <div className="mt-0.5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">
                <span className="text-black">Price: </span>
                <span>{props.car.price} /Hour</span>
              </span>
            </div>
            {admin ? (
              <div>
                <Link
                  type="button"
                  to={`/reviews/byCarId/${props.car.id}`}
                  className="btn mt-2 flex justify-center items-center w-full cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#92bbe2] via-[#b0cde8] to-[#65abec] hover:shadow-xl hover:shadow-indigo-500 hover:scale-105 duration-300 hover:from-[#92bbe2] hover:to-[#65abec]"
                >
                  Reviews
                </Link>
                <Link
                  type="button"
                  to={`/cars/updateCar/${props.car.id}`}
                  className=" btn mt-2 flex justify-center items-center w-full cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#92bbe2] via-[#b0cde8] to-[#65abec] hover:shadow-xl hover:shadow-indigo-500 hover:scale-105 duration-300 hover:from-[#92bbe2] hover:to-[#65abec]"
                >
                  Update
                </Link>
                {/* <button type="button" onClick={() => handleDeleteCar(props.car.id)} className="btn mt-2 w-full rounded-sm bg-black  py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                              Delete
                          </button> */}
                <button
                  type="button"
                  onClick={() => handleDeleteCar(props.car.id)}
                  className="btn mt-2 flex justify-center items-center  w-full cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <Link
                  type="button"
                  to={`/reservations/make/${props.car.id}`}
                  onClick={
                    !props.car.availability ? (e) => e.preventDefault() : null
                  }
                  className="btn mt-2 w-full flex justify-center items-center  cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                >
                  Book
                </Link>
                <Link
                  type="button"
                  to={`/reviews/byCarId/${props.car.id}`}
                  className="btn mt-2 flex justify-center items-center w-full cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#92bbe2] via-[#b0cde8] to-[#65abec] hover:shadow-xl hover:shadow-indigo-500 hover:scale-105 duration-300 hover:from-[#92bbe2] hover:to-[#65abec]"
                >
                  Reviews
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default CarCard;