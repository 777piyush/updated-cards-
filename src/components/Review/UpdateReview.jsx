// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ReviewService from '../../services/ReviewService';

// const UpdateReview = () => {
//   const { id } = useParams();

//   // Initialize state for review data
//   const [review, setReview] = useState({
//     comment: '',
//     rating: '',
//   });

//   const saveOrUpdateReview=()=>{
//     if(id){
//         // getReviewById(id).then((response)=>{
//             ReviewService.getReviewById(id).then((response)=>{

//             setReview(response.data)
//         }).catch(error =>{
//             console.error(error)
//         })
//     }
//   }

//   useEffect(()=>{
//     if(id){
//         // getReviewById(id).then((response)=>{
//             ReviewService.getReviewById(id).then((response)=>{

//             setReview(response.data)
//         }).catch(error =>{
//             console.error(error)
//         })
//     }
//   },[id])

//   // Handler for input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setReview((prevReview) => ({
//       ...prevReview,
//       [name]: value,
//     }));
//   };

//   // Handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement logic to update the review data
//     console.log('Updated review:', review);
//     // Clear form fields after submission
//     setReview({
//       comment: '',
//       rating: '',
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Update Review</h2>
//       <form >
//         <div className="mb-4">
//           <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
//           <textarea
//             id="comment"
//             name="comment"
//             value={review.comment}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             rows="3"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             value={review.rating}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             min="1"
//             max="5"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         onClick={saveOrUpdateReview}>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateReview;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import ReviewService from "../../services/ReviewService";
// import "../../styles/BackButton.css";
// import { AuthContext } from "../../context/AuthProvider";

// const UpdateReview = () => {
//   // Initialize state for review data
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const { reviewId } = useParams();
//   // const navigate = useNavigate();
//   const { carId } = useParams();
//   const { auth } = useContext(AuthContext);

//   const [review, setReview] = useState({
//     carId: carId || null,
//     userId: auth.id || null,
//     comment: "",
//     rating: 0,
//   });

//   useEffect(() => {
//     console.log("UseEffect hooked fired....");
//     if (reviewId) {
//       ReviewService.getReviewById(reviewId, auth.accessToken)
//         .then((response) => {
//           console.log(
//             "response recieved from getReviewById api: ",
//             response.data
//           );
//           const reviewData = response.data;
//           setReview(reviewData);
//         })
//         .catch((error) => {
//           console.error("Error retrieving car data:", error);
//           setErrorMessage("Error retrieving car data");
//         });
//     }
//   }, [reviewId]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setReview({ ...review, [name]: value });
//   };

//   const saveOrUpdateReview = async (e) => {
//     e.preventDefault();
//     if (reviewId) {
//       await ReviewService.updateReview(reviewId, review, auth.accessToken)
//         .then((response) => {
//           console.log(
//             "response recieved from updateReview api: ",
//             JSON.stringify(response.data)
//           );
//           setSuccessMessage("Review updated successfully!");
//           //navigate('/admin') // have to cahnge in future..
//         })
//         .catch((err) => {
//           console.error("Error updating the review: ", err);
//           setErrorMessage("Error updating the  review");
//         });
//     } else {
//       await ReviewService.createNewReview(review, auth.accessToken)
//         .then((response) => {
//           console.log("Created new review with ID: " + response.data.id);
//           setSuccessMessage(`Review created for Car ${response.data.carId}`);
//           //navigate("/reviews/"+response.data._id) // have to change in future
//         })
//         .catch((error) => {
//           console.error("Error creating a new review: ", error.response.data);
//           setErrorMessage("Error creating the review");
//         });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 py-24 ">
//       <h2 className="text-2xl font-semibold mb-4">
//         {carId ? "Add Review" : "Update Review"}
//       </h2>
//       {/* <h2 className="text-center text-2xl font-semibold mb-4">{reviewId ? 'Update Car' : 'Add New Car'}</h2> */}
//       {successMessage && (
//         <div className="alert alert-success">{successMessage}</div>
//       )}
//       {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//       <form className="border-2 border-black">
//         <div className="mb-4">
//           <label
//             htmlFor="comment"
//             className="block text-sm font-medium text-gray-700 text-center bg-slate-400"
//           >
//             Comment
//           </label>
//           <textarea
//             id="comment"
//             name="comment"
//             value={review.comment}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 "
//             rows="3"
//             required
//           />
//         </div>
//         <div className="mb-4 border-4 ">
//           <label
//             htmlFor="rating "
//             className="block text-sm font-medium text-gray-700 bg-slate-400"
//           >
//             Rating
//           </label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             placeholder="Enter Rating"
//             value={review.rating}
//             onChange={handleInputChange}
//             className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             min="1"
//             max="5"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           onClick={saveOrUpdateReview}
//         >
//           {carId ? "Save" : "Update"}
//         </button>
//       </form>
//       <Link to="/user" className="mt-3 custButton btn">
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
//   );
// };

// export default UpdateReview;



import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReviewService from "../../services/ReviewService";
import { AuthContext } from "../../context/AuthProvider";

const UpdateReview = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { reviewId } = useParams();
  const { carId } = useParams();
  const { auth } = useContext(AuthContext);

  const [review, setReview] = useState({
    carId: carId || null,
    userId: auth.id || null,
    comment: "",
    rating: 0,
  });

  useEffect(() => {
    if (reviewId) {
      ReviewService.getReviewById(reviewId, auth.accessToken)
        .then((response) => {
          const reviewData = response.data;
          setReview(reviewData);
        })
        .catch((error) => {
          console.error("Error retrieving review data:", error);
          setErrorMessage("Error retrieving review data");
        });
    }
  }, [reviewId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const saveOrUpdateReview = async (e) => {
    e.preventDefault();
    try {
      if (reviewId) {
        await ReviewService.updateReview(reviewId, review, auth.accessToken);
        setSuccessMessage("Review updated successfully!");
      } else {
        await ReviewService.createNewReview(review, auth.accessToken);
        setSuccessMessage(`Review created for Car ${review.carId}`);
      }
    } catch (error) {
      console.error("Error saving or updating review:", error);
      setErrorMessage("Error saving or updating review");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {carId ? "Add Review" : "Update Review"}
      </h2>
      {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
      <form>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={review.comment}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter Rating"
            value={review.rating}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            min="1"
            max="5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={saveOrUpdateReview}
        >
          {carId ? "Save" : "Update"}
        </button>
      </form>
      <Link to="/user" className="block mt-3 text-center text-indigo-600 hover:text-indigo-800">
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
          className="inline-block mr-1"
        >
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        <span>Back</span>
      </Link>
    </div>
  );
};

export default UpdateReview;
