// import axios from 'axios';

// const RESERVATION_API_BASE_URL = 'http://localhost:8080/api/reviews/';

// const ReviewService = {
//     getAllReviews: () => {
//         return axios.get(RESERVATION_API_BASE_URL+ "getAll");
//     },

//     // getReviewById:  (id) => {
//     //     return axios.get(RESERVATION_API_BASE_URL+"user"+'/'+ id);
//     // }


//     // export const UpdateReview=(id,review) =>{
//     //     axios.put(RESERVATION_API_BASE_URL+"user"+'/'+id,review)
//     // }

//     // getReservationById: (reservationId) => {
//     //     return axios.get(`${RESERVATION_API_BASE_URL}/${reservationId}`);
//     // },

//     // addReservation: (reservation) => {
//     //     return axios.post(RESERVATION_API_BASE_URL, reservation);
//     // },

//     // updateReservation: (reservationId, reservation) => {
//     //     return axios.put(`${RESERVATION_API_BASE_URL}/${reservationId}`, reservation);
//     // },

//     // deleteReservation: (reservationId) => {
//     //     return axios.delete(`${RESERVATION_API_BASE_URL}/${reservationId}`);
//     // }
// };

// export default ReviewService;

// export const UpdateReview=(id,review) =>{
//     axios.put(RESERVATION_API_BASE_URL+"user"+'/'+id,review)
// }


// import axios from 'axios';

// const REVIEW_API_BASE_URL = 'http://localhost:8080/api/reviews/';

// const ReviewService = {
//     getAllReviews: () => {
//         return axios.get(REVIEW_API_BASE_URL+ "getAll");
//     },

//     getReviewById: (id) => {
//         return axios.get(REVIEW_API_BASE_URL+"getById/"+ id);
//     },
    
//     createNewReview : (reviewData) =>{  
//         return axios.post(REVIEW_API_BASE_URL +"add", reviewData);  
//     },

//     updateReview: (id, reviewData) => { 
//        return axios.put(REVIEW_API_BASE_URL +'update/' + id , reviewData ); 
//     },

//     deleteReview: (id) => {          
//         return axios.delete(REVIEW_API_BASE_URL + 'delete/' + id);                 
//     },

//     getReviewsByCarId(carId) {
//         return axios.get(REVIEW_API_BASE_URL+"car/"+carId);       
//     },
    
//     getReviewsByUserID(userID){
//         return axios.get(REVIEW_API_BASE_URL+"user/"+userID);
//     },

//     getAvgReviews(id){  //returns a promise with the average rating of all reviews for given car id
//         return axios.get(REVIEW_API_BASE_URL+"car/averagerRating",{
//             params:{
//                 carId:id
//             }
//         });
//     },
// };

// export default ReviewService;


import axios from 'axios';

const REVIEW_API_BASE_URL = 'http://localhost:8080/api/reviews/';

const ReviewService = {
    getAllReviews(token){
        return axios.get(REVIEW_API_BASE_URL + "getAll", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    getReviewById(id, token) {
        return axios.get(REVIEW_API_BASE_URL + "getById/" + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    createNewReview(reviewData,token){
        const response = axios({
            method: 'post',
            url: REVIEW_API_BASE_URL + "add",
            data : reviewData ,
            headers: {  
                'Authorization': `Bearer ${token}`,  
                'Content-Type' : 'application/json'  
             }  
          })
          return  response; 
    },

    updateReview(id, reviewData,token){
        const response= axios({
            method:'put',
            url: REVIEW_API_BASE_URL+"update/"+id ,
            data : reviewData, 
             headers:{ 
                Authorization:`Bearer ${token}`,
                'Content-Type': 'application/json'
              }    
          })
          return response;  
    },

    deleteReview(id, token) {
        const response = axios({
            method: 'delete',
            url: REVIEW_API_BASE_URL + 'delete/' + id,
            data: {},
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response;
    },


    getReviewsByCarId(carId, token) {
        return axios.get(REVIEW_API_BASE_URL + "car/" + carId, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    getReviewsByUserID(userID, token) {
        return axios.get(REVIEW_API_BASE_URL + "user/" + userID, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    getAvgReviews(id, token) {
        return axios.get(REVIEW_API_BASE_URL + "car/averageRating", {
            params: {
                carId: id
            },
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
};

export default ReviewService;

