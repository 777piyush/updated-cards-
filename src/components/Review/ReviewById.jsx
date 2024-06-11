// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import UpdateReview from './UpdateReview';

// const ReviewById = () => {
//   const [reviews, setReviews] = useState([]);
//   const {profileId}=useParams();
//   const navigator= useNavigate();

//   useEffect(() => {
//     // Fetch reviews by user ID
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/reviews/user?id=${profileId}`);
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, [profileId]);

//   function  updateReview(id){

//     navigator(`/editReview/${id}`)

//   }
// //   const handleUpdateReview =(id)=>{
// //     UpdateReview(id)
// //   }

//   return (
//     <div className="mt-8">
//     <h2 className="text-2xl font-semibold mb-4">Reviews for User ID: {profileId}</h2>
//     <div className="overflow-x-auto">
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Review ID</th>
//             <th className="px-4 py-2">Rating</th>
//             <th className="px-4 py-2">Comment</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map(review => (
//             <tr key={review.id}>
//               <td className="border px-4 py-2">{review.id}</td>
//               <td className="border px-4 py-2">{review.rating}</td>
//               <td className="border px-4 py-2">{review.comment}</td>
//               <td> <button
//                     type="button"
//                     className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     onClick={()=> updateReview(review.id)}
//                     >
//                     Update
//                     </button>
//                     </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );
// };

// export default ReviewById;

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewService from "../../services/ReviewService";
import "../../styles/BackButton.css";
import { AuthContext } from "../../context/AuthProvider";
import { Star } from "lucide-react";

const ReviewById = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetchReviews();
  }, [status]);

  const fetchReviews = () => {
    ReviewService.getReviewsByUserID(userId, auth.accessToken)
      .then((response) => {
        console.log("data recieved from  server: ", response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  const deleteReview = (reviewId) => {
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
    <div className="mt-8 bg-blue-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Reviews for User ID: {userId}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-4 mb-4 relative">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <strong>Review ID:</strong> {review.id}
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <strong>Car ID:</strong> {review.carId}
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex items-center">
                <strong className="mr-2">Rating:</strong>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="w-full p-2 overflow-auto max-h-40">
                <strong>Comment:</strong> {review.comment}
              </div>
            </div>
            <div className="absolute right-4 bottom-4 space-x-2">
              <Link to={`/reviews/update/${review.id}`} className="btn btn-primary">
                Update
              </Link>
              <button
                type="button"
                onClick={() => deleteReview(review.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/user" className="mt-4 btn btn-secondary inline-flex items-center">
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path d="M874.7 495.5c0 11.3-9.2 20.5-20.5 20.5H249.4c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5h604.8c11.3 0 20.5 9.2 20.5 20.5z m-255.6 226.8c-5.2 5.2-5.2 13.7 0 18.9s13.7 5.2 18.9 0L723 533.9c5.2-5.2 5.2-13.7 0-18.9L637.8 433c-5.2-5.2-13.7-5.2-18.9 0-5.2 5.2-5.2 13.7 0 18.9l62.9 62.9H302.8c-7.1 0-12.9 5.8-12.9 12.9s5.8 12.9 12.9 12.9h378.9l-62.9 62.9z"></path>
        </svg>
        <span className="ml-2">Back</span>
      </Link>
    </div>
  );
  
  
};

export default ReviewById;
