// // import logo from './logo.svg';
// import './App.css';
// import  Header  from './components/Header';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import LoginComponent from './components/LoginComponent';
// import UserComponent from './components/UserComponent';

// import {RegisterComponent}  from './components/RegisterComponent';
// import AdminPage from './components/AdminPage';
// import UserPage from './components/UserPage';
// import CarComponent from './components/CarComponent';
// import AddCarComponent from './components/AddCarComponent';
// import GetReservationsComponent from './components/GetReservationComponent';
// import GetReviewsComponent from './components/GetReviewsComponent';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import {AddBookingComponent } from './components/AddBookingComponent';
// import Profile from './components/Profile';
// import ReviewById from './components/Review/ReviewById';
// import UpdateReview from './components/Review/UpdateReview';




// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header   />
//         {/* <h1>Car Rental</h1>
//         <Link to="/register" className='btn btn-primary mx-3' >Sign Up!</Link>
//         <Link to="/login" className='btn btn-primary mx-3' >Sign In!</Link> */}

//         {/* <Link to="/users/getAll" className='btn btn-primary' >All Users</Link> */}

//         <div className="container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register" element={<RegisterComponent />} />
//             <Route path="/login" element={<LoginComponent />} />
//             <Route path="/users/getAll" element={<UserComponent />} />
//             <Route path="/updateUser/:id" element={<RegisterComponent />} />
//             <Route path="/admin" element={<AdminPage />} />
//             <Route path="/user" element={<UserPage />} />
//             <Route path="/users/getAll" element={<UserComponent />} />
//             <Route path="/cars/getAll" element={<CarComponent />} />
//             <Route path="/cars/addCar" element={<AddCarComponent/>} />
//             <Route path="/cars/updateCar/:id" element={<AddCarComponent/>} />
//             <Route path="/reservations/getAll" element={<GetReservationsComponent/>} />
//             <Route path="/reservations/make/:id" element={<AddBookingComponent/>} />
//             <Route path="/reviews/getAll" element={<GetReviewsComponent/>} />
//             <Route path="/profile" element={<Profile/>} />

//             <Route path="/users/byCarId/:profileId" element={<UserPage/>} />
//             <Route path="/ReviewById/:profileId" element={<ReviewById/>} />

//             <Route path='/editReview/:id' element={<UpdateReview/>} />

//           </Routes>
//         </div>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';


import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LoginComponent from './components/LoginComponent';
import UserComponent from './components/UserComponent';

import { RegisterComponent } from './components/RegisterComponent';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import CarComponent from './components/CarComponent';
import AddCarComponent from './components/AddCarComponent';
import GetReservationsComponent from './components/GetReservationComponent';
import GetReviewsComponent from './components/GetReviewsComponent';
import Footer from './components/Footer';
// import Home from './components/Home';
import { AddBookingComponent } from './components/AddBookingComponent';
import CarReviews from './components/CarReviews';
import UpdateReview from './components/Review/UpdateReview';
import ReviewById from './components/Review/ReviewById';
import { RequireAuth } from './components/RequireAuth';
import LandingPage, { LandinngPageTwo } from './components/LandingPage';
// import Profile from './components/Profile';
import GetUser from './components/GetUser';
import AuthProvider from './context/AuthProvider';




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      
      <Header />
      {/* <h1>Car Rental</h1>
        <Link to="/register" className='btn btn-primary mx-3' >Sign Up!</Link>
        <Link to="/login" className='btn btn-primary mx-3' >Sign In!</Link> */}

      {/* <Link to="/users/getAll" className='btn btn-primary' >All Users</Link> */}

      
      <div className="container">
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />


          <Route element={<RequireAuth allowedRoles={['ROLE_ADMIN']} />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/users/getAll" element={<UserComponent />} />
            <Route path="/cars/updateCar/:id" element={<AddCarComponent />} />
            <Route path="/cars/addCar" element={<AddCarComponent />} />
            <Route path="/reservations/getAll" element={<GetReservationsComponent />} />
            <Route path="/reviews/getAll" element={<GetReviewsComponent />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={['ROLE_USER']} />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/user/:userId" element={<GetUser />} />
            <Route path="/reservations/make/:carId" element={<AddBookingComponent />} />
            <Route path="/updateUser/:id" element={<RegisterComponent />} />
            <Route path="/user/reviews/:userId" element={<ReviewById />} />
            <Route path="/reviews/addReview/:carId" element={<UpdateReview />} />
            <Route path="/user/reservations/:userId" element={<GetReservationsComponent />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={['ROLE_ADMIN', 'ROLE_USER']} />}>
            <Route path="/cars/getAll" element={<CarComponent />} />
            <Route path="/reviews/byCarId/:carId" element={<CarReviews />} />
            <Route path="/reservations/update/:reservationId" element={<AddBookingComponent />} />
            <Route path="/reviews/update/:reviewId" element={<UpdateReview />} />
          </Route>

        </Routes>
      </div>
      <Footer />
     
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

