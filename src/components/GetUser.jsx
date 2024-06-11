// import React, { useContext, useEffect, useState } from 'react'
// import UserService from '../services/UserService';
// import { Link, useParams } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';

// const GetUser = () => {
//     const [user, setUser] = useState({});
//     const [error, setError] = useState(null);
//     const { userId } = useParams();
//     const { auth } = useContext(AuthContext);
//     // Fetch the user data when this component is first rendered.
//     useEffect(() => {
//         console.log("useEffect triggered...")
//         console.log("id value recieved from URL using useParams() ", userId)
//         UserService.getUserById(userId,auth.accessToken).then((response) => {
//             setUser(response.data);
//         }).catch((err) => {
//             setError(err.message);
//         })
//     }, []);
    
//     return (
//         <div>
//             <h1>Profile</h1>
//             {error && <div className="alert alert-danger" role="alert">{error}</div>}
//             <div className="table-responsive custom-table">
//                 <table className="table table-striped table-hover custom-table">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>FirstName</th>
//                             <th>LastName</th>
//                             <th>Email</th>
//                             <th>Phone Number</th>
//                             <th>Username</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr key={user.id}>
//                             <td>{user.firstName}</td>
//                             <td>{user.lastName}</td>
//                             <td>{user.email}</td>
//                             <td>{user.phoneNumber}</td>
//                             <td>{user.username}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             <Link to="/profile" className="mt-2 custButton btn">
//                 <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
//                 <span>Back</span>
//             </Link>
//         </div>
//     );
// }

// export default GetUser


import React, { useContext, useEffect, useState } from 'react'
import UserService from '../services/UserService';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const GetUser = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const { userId } = useParams();
    const { auth } = useContext(AuthContext);

    // Fetch the user data when this component is first rendered.
    useEffect(() => {
        UserService.getUserById(userId, auth.accessToken)
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                setError(err.message);
            })
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-8 p-10 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-6">Welcome, {auth.username}</h1>
          {error && (
            <div className="alert alert-danger mb-4" role="alert">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-semibold">First Name:</span>
              <span>{user.firstName}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-semibold">Last Name:</span>
              <span>{user.lastName}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-semibold">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-semibold">Phone Number:</span>
              <span>{user.phoneNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Username:</span>
              <span>{user.username}</span>
            </div>
          </div>
          <Link
            to="/user"
            className="flex items-center justify-center mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
          >
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span className="ml-2">Back</span>
          </Link>
        </div>
      );
      
}

export default GetUser;
