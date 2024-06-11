import React, { useContext, useEffect, useState } from "react";
import ReviewService from "../services/ReviewService";
import { Link, useParams } from "react-router-dom";
import "../styles/BackButton.css";
import { AuthContext } from "../context/AuthProvider";
import { Star } from "lucide-react";


const CarReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { carId } = useParams();

  const { auth } = useContext(AuthContext);
  // const admin = auth.role === "ROLE_ADMIN";

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    console.log("inside fetch reviews by car id:", carId);
    ReviewService.getReviewsByCarId(carId, auth.accessToken)
      .then((response) => {
        console.log(
          "Response received from get reviews by carid  API:",
          response.data
        );
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error received from get reviews API:", error);
        setError("No Reviews Yet. Be the first to review this car!");
      });
  };

  if (reviews === null) {
    return <p>Loading reviews...</p>; // Display loading message while fetching reviews
  }
  // return (
  //   <div>
  //     <h3 className="text-lg font-bold mb-2">Reviews:</h3>
  //     {error && <div className="alert alert-danger">{error}</div>}
  //     <div>
  //       <table className="table table-bordered table-hover table-striped">
  //         <thead>
  //           <tr className="table-dark">
  //             <th>ID</th>
  //             <th>Rating</th>
  //             <th>Comment</th>
  //             <th>User ID</th>
  //             <th>Car ID</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {reviews.map((review) => (
  //             <tr key={review.id}>
  //               <td>{review.id}</td>
  //               <td className="px-4 py-4 flex justify-center">
  //                 {Array.from({ length: review.rating }).map((_, i) => (
  //                   <Star key={i} className=" text-yellow-400" />
  //                 ))}
  //               </td>
  //               <td>{review.comment}</td>
  //               <td>{review.userId}</td>
  //               <td>{review.carId}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //     {/* <Link to="/cars/getAll" className="btn btn-danger ">Back</Link> */}
  //     <Link to="/cars/getAll" className="custButton btn">
  //       <svg
  //         height="16"
  //         width="16"
  //         xmlns="http://www.w3.org/2000/svg"
  //         version="1.1"
  //         viewBox="0 0 1024 1024"
  //       >
  //         <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
  //       </svg>
  //       <span>Back</span>
  //     </Link>
  //   </div>
  // );
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Reviews:</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <strong>ID:</strong> {review.id}
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <strong>Rating:</strong> 
                <span className="flex justify-center">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </span>
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
            </div>
          </div>
        ))}
      </div>
      <Link to="/cars/getAll" className="custButton btn">
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
  );
  

};

export default CarReviews;
