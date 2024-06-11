// import axios from 'axios';

// const RESERVATION_API_BASE_URL = 'http://localhost:8080/api/reservations/';

// const ReservationService = {
//     getAllReservations: () => {
//         return axios.get(RESERVATION_API_BASE_URL+ "all");
//     },

//     getReservationById: (reservationId) => {
//         return axios.get(`${RESERVATION_API_BASE_URL}/${reservationId}`);
//     },

//     addReservation: (reservation) => {
//         return axios.post(RESERVATION_API_BASE_URL+"make", reservation);
//     },

//     updateReservation: (reservationId, reservation) => {
//         return axios.put(`${RESERVATION_API_BASE_URL}/${reservationId}`, reservation);
//     },

//     deleteReservation: (reservationId) => {
//         return axios.delete(`${RESERVATION_API_BASE_URL}/${reservationId}`);
//     }
// };

// export default ReservationService;


// import axios from 'axios';

// const RESERVATION_API_BASE_URL = 'http://localhost:8080/api/reservations/';

// const ReservationService = {
//     getAllReservations: () => {
//         return axios.get(RESERVATION_API_BASE_URL+ "all");
//     },

//     getReservationById: (reservationId) => {
//         return axios.get(`${RESERVATION_API_BASE_URL}getById/${reservationId}`);
//     },

//     getReservationByUserId: (userId) => {
//         return axios.get(`${RESERVATION_API_BASE_URL}user/${userId}`);
//     },

//     addReservation: (reservation) => {
//         return axios.post(RESERVATION_API_BASE_URL+"make", reservation);
//     },

//     updateReservation: (reservationId, reservationStatus) => {
//         return axios.put(`${RESERVATION_API_BASE_URL}updateStatus/${reservationId}`,null, {
//             params: { 
//                 newStatus : reservationStatus,
//             }  
//         });
//     },

//     // deleteReservation: (reservationId) => {
//     //     return axios.delete(`${RESERVATION_API_BASE_URL}/${reservationId}`);
//     // }
// };

// export default ReservationService;


import axios from 'axios';

const RESERVATION_API_BASE_URL = 'http://localhost:8080/api/reservations/';

const ReservationService = {
    getAllReservations(token) {
        return axios.get(RESERVATION_API_BASE_URL + "all",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    getReservationById(reservationId, token) {
        return axios.get(`${RESERVATION_API_BASE_URL}getById/${reservationId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    getReservationByUserId(userId, token) {
        return axios.get(`${RESERVATION_API_BASE_URL}user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    addReservation(reservation, token) {
        const reponse = axios({
            method: 'post',
            url: `${RESERVATION_API_BASE_URL}make`,
            data: reservation,
            headers: {  
                'Authorization': `Bearer ${token}`,  
                'Content-Type': 'application/json'  
            } 
        })  
        return  reponse;
    },

    updateReservation(reservationId, reservationStatus, token) {
        return axios.put(`${RESERVATION_API_BASE_URL}updateStatus/${reservationId}`, null, {
            params: {
                newStatus: reservationStatus,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    deleteUserById: (id, token) => {
        return axios.delete(`${RESERVATION_API_BASE_URL}delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    // deleteReservation: (reservationId) => {
    //     return axios.delete(`${RESERVATION_API_BASE_URL}/${reservationId}`);
    // }
};

export default ReservationService;