// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../context/AuthProvider'


// export const Profile = () => {

//   const {auth}=useContext(AuthContext)

//   return (
    
//     // <div>
//     //     <h2> Welcome user </h2>

//     //     {auth.username}

//     //         <Link to="/reviewsById" className='btn btn-primary mx-3' >Your Reviews</Link>
//     //         <Link to="/reservationById" className='btn btn-primary mx-3' >Your Reservation</Link>
//     // </div>

//     <div>
//             <h2>Welcome {auth.username}</h2>
//             {/* Add any content specific to the user page */}

//             <Link to="/cars/getAll" className='btn btn-primary mx-3' >All Cars</Link>
//             <Link to={`/user/reviews/${auth.id}`} className='btn btn-primary mx-3' >Your Reviews</Link>
//             <Link to={`/user/reservations/${auth.id}`} className='btn btn-primary mx-3' >Your Reservation</Link>

//             <Link to={`/user/${auth.id}`} className='btn btn-primary mx-3' >Your Data</Link>

            

//         </div>
//   )
// }

// export default Profile


// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';

// const Profile = () => {
//   const { auth } = useContext(AuthContext);
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle the profile card
//   const toggleProfileCard = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed top-10 right-10 z-50">
//       <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleProfileCard}>
//         Profile
//       </button>

//       {isOpen && (
//         <div className="fixed top-10 right-10 bg-white shadow-lg rounded p-4 z-50">
//           <button className="absolute top-2 right-2 text-gray-500" onClick={toggleProfileCard}>
//             &times;
//           </button>
//           <h2 className="text-lg font-semibold mb-4">Welcome {auth.username}</h2>
//           {/* Add any content specific to the user page */}
//           <Link to="/cars/getAll" className="btn btn-primary mx-3">
//             All Cars
//           </Link>
//           <Link to={`/user/reviews/${auth.id}`} className="btn btn-primary mx-3">
//             Your Reviews
//           </Link>
//           <Link to={`/user/reservations/${auth.id}`} className="btn btn-primary mx-3">
//             Your Reservation
//           </Link>
//           <Link to={`/user/${auth.id}`} className="btn btn-primary mx-3">
//             Your Data
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';

// const Profile = () => {
//   const { auth } = useContext(AuthContext);
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle the profile card
//   const toggleProfileCard = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed top-10 right-10 z-50">
//       <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleProfileCard}>
//         Profile
//       </button>

//       {isOpen && (
//         <div className="fixed top-10 right-10 bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-4 z-50">
//           <button className="absolute top-2 right-2 text-gray-500" onClick={toggleProfileCard}>
//             &times;
//           </button>
//           <h2 className="text-xl font-semibold mb-4">Welcome {auth.username}</h2>
//           <div className="flex flex-col gap-2">
//             <Link to="/cars/getAll" className="btn btn-primary">
//               All Cars
//             </Link>
//             <Link to={`/user/reviews/${auth.id}`} className="btn btn-primary">
//               Your Reviews
//             </Link>
//             <Link to={`/user/reservations/${auth.id}`} className="btn btn-primary">
//               Your Reservation
//             </Link>
//             <Link to={`/user/${auth.id}`} className="btn btn-primary">
//               Your Data
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;

