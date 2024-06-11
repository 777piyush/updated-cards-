// import React, { useState, useEffect } from 'react';
// import ReservationService from '../services/ReservationService';
// import { Link } from 'react-router-dom';

// const GetReservationsComponent = () => {
//     const [reservations, setReservations] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         console.log('Fetching all reservations...')
//         fetchAllReservations();
//     }, []);

//     const fetchAllReservations = () => {
//         ReservationService.getAllReservations()
//             .then(response => {
//                 setReservations(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching reservations:', error);
//                 setError('Error fetching reservations. Please try again later.')
//             });
//     };

//     return (
//         <div className="table-responsive">
//             <h2>All Reservations</h2>
//             {error && <p className="text-danger">{error}</p>}
//             <table className="table table-bordered table-hover table-striped">
//                 <thead>
//                     <tr className="table-dark">
//                         <th>Reservation ID</th>
//                         <th>User ID</th>
//                         <th>Car ID</th>
//                         <th>Pickup Date & Time</th>
//                         <th>Drop-off Date & Time</th>
//                         <th>Reservation Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {reservations.map(reservation => (
//                         <tr key={reservation.id}>
//                             <td>{reservation.id}</td>
//                             <td>{reservation.userId}</td>
//                             <td>{reservation.carId}</td>
//                             <td>{reservation.pickupDateTime}</td>
//                             <td>{reservation.dropOffDateTime}</td>
//                             <td>{reservation.reservationDate}</td>
//                             <td>{reservation.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <Link to="/admin" className="btn btn-danger ">Back</Link>
//         </div>
//     );
// };

// export default GetReservationsComponent;

import React, { useState, useEffect, useContext } from "react";
import ReservationService from "../services/ReservationService";
import { Link, useParams } from "react-router-dom";
import "../styles/BackButton.css";
import { AuthContext } from "../context/AuthProvider";

const GetReservationsComponent = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  const { auth } = useContext(AuthContext);
  const admin = auth.role === "ROLE_ADMIN";

  const { userId } = useParams();

  const [status, setStatus] =useState(false)

  useEffect(() => {
    fetchAllReservations();
  }, [status]);

  const fetchAllReservations = () => {
    // ReservationService.getAllReservations()
    //     .then(response => {
    //         setReservations(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching reservations:', error);
    //         setError('Error fetching reservations. Please try again later.')
    //     });

    if (userId) {
      ReservationService.getReservationByUserId(userId, auth.accessToken)
        .then((response) => {
          console.log("Fetching all reservations with user id :", userId);
          console.log(
            "data recieved from reservation by userId api..",
            response.data
          );
          setReservations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reservations:", error);
          setError("No Reservations.");
        });
    } else {
      ReservationService.getAllReservations(auth.accessToken)
        .then((response) => {
          console.log("Fetching all reservations...");
          console.log(
            "data recieved from get all  reservation  api..",
            response.data
          );
          setReservations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reservations:", error);
          setError("Error fetching reservations. Please try again later.");
        });
    }
  };

  // const path = auth.role === 'ROLE_USER' ? '/user' : '/admin';
  // console.log(auth.role, "this is the role");
  // console.log("path = ", path);

  // return (
  //     <>
  //     <section className='flex  items-center justify-center py-6 bg-blue-100  rounded-2xl' >
  //     <div className="table-responsive">
  //         <h2 className='font-serif text-center py-4 bg'>All Reservations</h2>
  //         {error && <p className="text-danger">{error}</p>}
  //         <table className="table table-bordered table-hover table-striped  ">
  //             <thead>
  //                 <tr className="table-dark">
  //                     <th>Reservation ID</th>
  //                     <th>User ID</th>
  //                     <th>Car ID</th>
  //                     <th>Pickup Date & Time</th>
  //                     <th>Drop-off Date & Time</th>
  //                     <th>Reservation Date</th>
  //                     <th>Status</th>
  //                     <th>Actions</th>
  //                 </tr>
  //             </thead>
  //             <tbody>
  //                 {reservations.map(reservation => (
  //                     <tr key={reservation.id}>
  //                         <td>{reservation.id}</td>
  //                         <td>{reservation.userId}</td>
  //                         <td>{reservation.carId}</td>
  //                         <td>{reservation.pickupDateTime}</td>
  //                         <td>{reservation.dropOffDateTime}</td>
  //                         <td>{reservation.reservationDate}</td>
  //                         <td className={`${reservation.status === 'Confirmed' ? 'text-green-700 !important' : reservation.status === 'Pending' ? 'text-orange-400 !important' : 'text-red-800 !important'}`}>{reservation.status}</td>

  //                         <td className="inline-flex">
  //                             {admin ? (
  //                                 <>
  //                                     <Link to={`/reservations/update/${reservation.id}`} className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
  //                                         Update
  //                                     </Link>
  //                                     {/* <button type="button" onClick={() => deleteReview(review.id)} className="py-2 flex justify-center items-center gap-2 w-20 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
  //                                         Delete
  //                                     </button> */}
  //                                 </>
  //                             ) : (
  //                                 <>
  //                                     <Link to={`/reviews/addReview/${reservation.carId}`} className="!important rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
  //                                         Add Review
  //                                     </Link>
  //                                 </>

  //                             )}
  //                         </td>
  //                     </tr>
  //                 ))}
  //             </tbody>
  //         </table>
  //         {/* <Link to="/admin" className="custButton btn"> */}
  //         <Link to={!admin ? '/user' : '/admin'} className="custButton btn">
  //             <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  //             <span>Back</span>
  //         </Link>
  //     </div>
  //     </section>

  //     </>

  // );

//   const handleDeleteReservation = (reservationId) => {
//     ReservationService.deleteUserById(reservationId, auth.accessToken)
//       .then((response) => {
//         fetchAllReservations(); // Refresh reservations after deletion
//       })
//       .catch((error) => {
//         setError("Error deleting reservation.");
//       });
//   };


const handleDeleteReservation = (reservationId) => {
    ReservationService.deleteUserById(reservationId, auth.accessToken)
      .then((response) => {
        console.log("Reservation deleted successfully:", response);
        fetchAllReservations(); // Refresh reservations after deletion
      })
      .catch((error) => {
        console.error("Error deleting reservation:", error);
        setError("Error deleting reservation. Please try again later.");
      });
  };
  
//   return (
//     <section className="flex  items-center justify-center py-6 bg-blue-100  rounded-2xl">
//       <div className="table-responsive">
//         <h2 className="font-serif text-center py-4 bg">All Reservations</h2>
//         {error && <p className="text-danger">{error}</p>}
//         <table className="table-bordered table-hover table-striped  custom-table">
//           <thead>
//             <tr className="table-dark">
//               <th>Reservation ID</th>
//               <th>User ID</th>
//               <th>Car ID</th>
//               <th>Pickup Date & Time</th>
//               <th>Drop-off Date & Time</th>
//               <th>Reservation Date</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.map((reservation) => (
//               <tr key={reservation.id}>
//                 <td>{reservation.id}</td>
//                 <td>{reservation.userId}</td>
//                 <td>{reservation.carId}</td>
//                 <td>{reservation.pickupDateTime}</td>
//                 <td>{reservation.dropOffDateTime}</td>
//                 <td>{reservation.reservationDate}</td>
//                 <td
//                   className={`${
//                     reservation.status === "Confirmed"
//                       ? "text-green-700 !important"
//                       : reservation.status === "Pending"
//                       ? "text-orange-400 !important"
//                       : "text-red-800 !important"
//                   }`}
//                 >
//                   {reservation.status}
//                 </td>

//                 <td className="inline-flex">
//                   {admin ? (
//                     <>
//                       <Link
//                         to={`/reservations/update/${reservation.id}`}
//                         className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                       >
//                         Update
//                       </Link>
//                       {/* <button type="button" onClick={() => deleteReview(review.id)} className="py-2 flex justify-center items-center gap-2 w-20 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
//                                             Delete
//                                         </button> */}
//                     </>
//                   ) : (
//                     <>
//                       <Link
//                         to={`/reviews/addReview/${reservation.carId}`}
//                         className="!important rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                       >
//                         Add Review
//                       </Link>

//                       <button type="button" onClick={() => handleDeleteReservation(reservation.id)} className="py-2 flex justify-center items-center gap-2 w-20 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
//                                             Delete
//                      </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* <Link to="/admin" className="custButton btn"> */}
//         <Link to={!admin ? "/user" : "/admin"} className="custButton btn">
//           <svg
//             height="16"
//             width="16"
//             xmlns="http://www.w3.org/2000/svg"
//             version="1.1"
//             viewBox="0 0 1024 1024"
//           >
//             <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
//           </svg>
//           <span>Back</span>
//         </Link>
//       </div>
//     </section>
//   );
// };

return (
  <section className="flex items-center justify-center py-6 bg-blue-100 rounded-2xl">
    <div className="w-full max-w-4xl">
      <h2 className="font-serif text-center py-4">All Reservations</h2>
      {error && <p className="text-danger">{error}</p>}
      {reservations.map((reservation) => (
        <div key={reservation.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>Reservation ID:</strong> {reservation.id}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>User ID:</strong> {reservation.userId}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>Car ID:</strong> {reservation.carId}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>Pickup Date & Time:</strong> {reservation.pickupDateTime}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>Drop-off Date & Time:</strong> {reservation.dropOffDateTime}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>Reservation Date:</strong> {reservation.reservationDate}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <strong>Status:</strong> 
              <span className={
                reservation.status === "Confirmed" ? "text-green-700" : 
                reservation.status === "Pending" ? "text-orange-400" : 
                "text-red-800"
              }>
                {reservation.status}
              </span>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            {admin ? (
              <Link
                to={`/reservations/update/${reservation.id}`}
                className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
              >
                Update
              </Link>
            ) : (
              <>
                <Link
                  to={`/reviews/addReview/${reservation.carId}`}
                  className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
                >
                  Add Review
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteReservation(reservation.id)}
                  className="py-2 flex justify-center items-center gap-2 w-20 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
      <Link to={!admin ? "/user" : "/admin"} className="custButton btn">
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        <span>Back</span>
      </Link>
    </div>
  </section>
);
};


export default GetReservationsComponent;
