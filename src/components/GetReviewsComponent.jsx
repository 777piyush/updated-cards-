// import React, { useState, useEffect } from 'react';
// import ReviewService from '../services/ReviewService';
// import { Link } from 'react-router-dom';

// const GetReviewsComponent = () => {
//     const [reviews, setReviews] = useState([]);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         getAllReviews();
//     }, []);

//     const getAllReviews = () => {
//         ReviewService.getAllReviews()
//             .then(response => {
//                 console.log(response.data);
//                 setReviews(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching reviews:', error);
//                 setError('Error fetching reviews. Please try again later.')
//             });
//     };

//     return (
//         <div className="table-responsive">
//             <h2>All Reviews</h2>
//             {error && <p className="text-danger">{error}</p>}
//             <div>
//                 <table className="table table-bordered table-hover table-striped">
//                     <thead>
//                         <tr className="table-dark">
//                             <th>ID</th>
//                             <th>Rating</th>
//                             <th>Comment</th>
//                             <th>User ID</th>
//                             <th>Car ID</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {reviews.map(review => (
//                             <tr key={review.id}>
//                                 <td>{review.id}</td>
//                                 <td>{review.rating}</td>
//                                 <td>{review.comment}</td>
//                                 <td>{review.userId}</td>
//                                 <td>{review.carId}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <Link to="/admin" className="btn btn-danger ">Back</Link>
//         </div>
//     );
// };

// export default GetReviewsComponent;

import React, { useState, useEffect, useContext } from "react";
import ReviewService from "../services/ReviewService";
import { Link } from "react-router-dom";
import "../styles/BackButton.css";
import { AuthContext } from "../context/AuthProvider";
import { Star } from "lucide-react";

const GetReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    getAllReviews();
  }, [status]);

  const getAllReviews = () => {
    ReviewService.getAllReviews(auth.accessToken)
      .then((response) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setError("Error fetching reviews. Please try again later.");
      });
  };

  const handleDeleteReview = (reviewId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (confirmDelete) {
      console.log("Delete handler fired.. Id value received : ", reviewId);
      ReviewService.deleteReview(reviewId, auth.accessToken)
        .then((response) => {
          console.log("Response received from delete API:", response.data);
          setStatus(!status);
        })
        .catch((error) => {
          console.error("Error received from delete API:", error);
          setError("Error deleting car. Please try again.");
        });
    }
  };

  return (
    <div className="bg-blue-100">
      <div className="p-10">
        <h2 className="font-serif text-center pb-12">All Reviews</h2>
        {error && <p className="text-danger">{error}</p>}
        <div>
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <strong>ID:</strong> {review.id}
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <strong>Rating:</strong>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <strong>Comment:</strong> {review.comment}
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <strong>User ID:</strong> {review.userId}
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <strong>Car ID:</strong> {review.carId}
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <button
                    type="button"
                    onClick={() => handleDeleteReview(review.id)}
                    className="py-2 flex justify-center items-center gap-2 w-20 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/admin" className="custButton btn">
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
  

// return (
//   <div className="bg-blue-100">
//     <div className="p-10">
//       <h2 className="font-serif text-center pb-12">All Reviews</h2>
//       {error && <p className="text-danger">{error}</p>}
//       <div>
//         {reviews.map((review) => (
//           <div key={review.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
//             <div className="flex flex-wrap">
//               <div className="w-full md:w-1/2 lg:w-1/3 p-2">
//                 <strong>ID:</strong> {review.id}
//               </div>
//               <div className="w-full md:w-1/2 lg:w-1/3 p-2">
//                 <strong>Rating:</strong> 
//                 <span className="flex justify-center">
//                   {Array.from({ length: review.rating }).map((_, i) => (
//                     <Star key={i} className="text-yellow-400" />
//                   ))}
//                 </span>
//               </div>
//               <div className="w-full md:w-1/2 lg:w-1/3 p-2">
//                 <strong>Comment:</strong> {review.comment}
//               </div>
//               <div className="w-full md:w-1/2 lg:w-1/3 p-2">
//                 <strong>User ID:</strong> {review.userId}
//               </div>
//               <div className="w-full md:w-1/2 lg:w-1/3 p-2">
//                 <strong>Car ID:</strong> {review.carId}
//               </div>
//             </div>
//             <div className="mt-4 flex space-x-4">
//               <button
//                 type="button"
//                 onClick={() => handleDeleteReview(review.id)}
//                 className="py-2 flex justify-center items-center gap-2 w-20 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Link to="/admin" className="custButton btn">
//         <svg
//           height="16"
//           width="16"
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           viewBox="0 0 1024 1024"
//         >
//           <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
//         </svg>
//         <span>Back</span>
//       </Link>
//     </div>
//   </div>
// );


};

export default GetReviewsComponent;
