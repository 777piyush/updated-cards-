// import React, { useState, useEffect } from 'react'
// import ReservationService from '../services/ReservationService';
// import { Link, useParams } from 'react-router-dom';

// export const AddBookingComponent = () => {
//     const { id } = useParams();

//     const [newReservation, setNewReservation] = useState({
//         userId: '',
//         carId: id,
//         pickupDateTime: '',
//         dropOffDateTime: ''
//     });

//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewReservation({ ...newReservation, [name]: value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("reservation data send to api .. :",JSON.stringify(newReservation));
//         ReservationService.addReservation(newReservation) // Assuming addBooking function sends a POST request to add a booking
//             .then((response) => {
//                 console.log('Booking added successfully:', response.data);
//                 setSuccessMessage("Your booking is added  successfuly! We Let You Know once it confirms. Thank you!");
//             })
//             .catch((error) => {
//                 console.error('Error adding booking:', error);
//                 setErrorMessage("Error adding booking");
//             });
//     };

//     return (
//         <div className="container">
//             <h1>Add Booking</h1>
//             {successMessage && <div className="alert alert-success">{successMessage}</div>}
//             {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>User ID:</label>
//                     <input type="number" className="form-control" name="userId" value={newReservation.userId} onChange={handleInputChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Car ID:</label>
//                     <input type="number" className="form-control" name="carId" value={newReservation.carId} onChange={handleInputChange} disabled  />
//                 </div>
//                 <div className="form-group">
//                     <label>Pickup Date and Time:</label>
//                     <input type="datetime-local" className="form-control" name="pickupDateTime" value={newReservation.pickupDateTime} onChange={handleInputChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Drop-off Date and Time:</label>
//                     <input type="datetime-local" className="form-control" name="dropOffDateTime" value={newReservation.dropOffDateTime} onChange={handleInputChange} required />
//                 </div>
//                 {/* <div className="form-group">
//                     <label>Reservation Date:</label>
//                     <input type="datetime-local" className="form-control" name="reservationDate" value={newReservation.reservationDate} onChange={handleInputChange} disabled/>
//                 </div> */}
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//             <Link to="/cars/getAll" className="btn btn-danger my-2">Back</Link>
//         </div>
//     );

// }
import React, { useState, useEffect, useContext, useRef } from 'react'
import ReservationService from '../services/ReservationService';
import { Link, useParams } from 'react-router-dom';
import '../styles/BackButton.css';
import { AuthContext } from '../context/AuthProvider';

import emailjs from '@emailjs/browser';
import UserService from '../services/UserService';

export const AddBookingComponent = () => {
  const { auth } = useContext(AuthContext);
  const admin = auth.role === 'ROLE_ADMIN';
  const token = auth.accessToken;

  const { carId } = useParams();
  const { reservationId } = useParams();

  const [newReservation, setNewReservation] = useState({
    userId: auth.id,
    carId: carId || null,
    pickupDateTime: '',
    dropOffDateTime: '',
    status: null
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (reservationId) {
      ReservationService.getReservationById(reservationId, token)
        .then((response) => {
          console.log("response recieved from Reservation by id api..:", response.data);
          const reservationData = response.data;
          setNewReservation(reservationData);
        })
        .catch(error => {
          console.error("Error retrieving Reservation data:", error);
          setErrorMessage('Error retrieving Reservation data');
        });
    }
  }, [reservationId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReservation({ ...newReservation, [name]: value });
  };

  
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    toName: '',
    toEmail: '',
    message: ''
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xqn0l27', 'template_15sj03b', form.current, {
        publicKey: 'BVdDoZMM5NKiuaGTy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // Function to fetch user details by user ID
  const fetchUserDetails = (userId) => {
    UserService.getUserById(userId, token)
      .then((response) => {
        const userData = response.data;
        setFormData({
          toName: userData.firstName + " " + userData.lastName,
          toEmail: userData.email
        });
        console.log("User data", userData);
        console.log("User email", userData.email);
      })
      .catch(error => {
        console.error("Error retrieving User data:", error);
        setErrorMessage('Error retrieving User data');
      });
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("formData", formData);
    setFormData({
      ...formData,
      [name]: value
    });
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("reservation data send to api .. :", newReservation);
    if (carId) {
      ReservationService.addReservation(newReservation, token)
        .then((response) => {
          console.log('Booking added successfully:', response.data);
          setSuccessMessage("Your booking is added  successfuly! We Let You Know once it confirms. Thank you!");
        })
        .catch((error) => {
          console.error('Error adding booking:', error);
          setErrorMessage("Error adding booking");
        });
    } else {
      console.log("reservation data send to update api .. :", newReservation.status);
      ReservationService.updateReservation(reservationId, newReservation.status, token)
        .then((response) => {
          console.log('Reservatiom updated successfully:', response.data);
          setSuccessMessage(" Reservatiom is updated  successfuly!Thank you!");

          setFormData({ message: `Your Booking has been ${newReservation.status}` });
          fetchUserDetails(newReservation.userId);
          setShowEmailForm(true);

        })
        .catch((error) => {
          console.error('Error updating booking:', error);
          setErrorMessage("Error updating booking");
        });
    }
  };
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="AddBooking p-12 px-72 py-36  ">
        <div className="container bg-white border-2 border-black shadow-xl ">
          <h1 className="text-center font-extralight font-serif">
            {admin ? 'Update' : 'Add'} Booking
          </h1>
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            {admin ? (
              <div className="form-group">
                <label>User ID:</label>
                <input
                  type="number"
                  className="form-control"
                  name="userId"
                  value={newReservation.userId}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            ) : (
              <div className="form-group">
                <label>User ID:</label>
                <input
                  type="number"
                  className="form-control"
                  name="userId"
                  value={auth.id}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            )}
            <div className="form-group">
              <label>Car ID:</label>
              <input
                type="number"
                className="form-control"
                name="carId"
                value={newReservation.carId}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Pickup Date and Time:</label>
              <input
                type="datetime-local"
                className="form-control"
                name="pickupDateTime"
                value={newReservation.pickupDateTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Drop-off Date and Time:</label>
              <input
                type="datetime-local"
                className="form-control"
                name="dropOffDateTime"
                value={newReservation.dropOffDateTime}
                onChange={handleInputChange}
                required
              />
            </div>
            {admin ? (
              <>
                <div className="form-group">
                  <label>Reservation Date:</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="reservationDate"
                    value={newReservation.reservationDate}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Reservation Status:</label>
                  <select
                    className="form-control"
                    name="status"
                    value={newReservation.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="form-group pb-4">
                <label>Reservation Date:</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="reservationDate"
                  value={newReservation.reservationDate}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <button type="submit" className="btn btn-success rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Submit
            </button>
          </form>


          {/* Inside your return statement */}
          {admin && showEmailForm && (
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-grouppb-4">
                <label>Name</label>
                <input type="text" name="toName" value={formData.toName} className="form-control" onChange={handleChange} />
              </div>
              <div className="form-grouppb-4">
                <label>Email</label>
                <input type="email" name="toEmail" value={formData.toEmail} className="form-control" onChange={handleChange} />
              </div>
              <div className="form-grouppb-4">
                <label>Message</label>
                <textarea name="message" value={formData.message} className="form-control" onChange={handleChange} />
              </div>
              <input type="submit" value="Send" className="btn btn-success rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" />
            </form>
          )}

          <Link to="/cars/getAll" className="custButton btn mt-1">
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
    </div>
  );
}