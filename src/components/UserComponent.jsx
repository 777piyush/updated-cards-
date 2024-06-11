// import React, { useEffect, useState } from 'react'
// import UserService from '../services/UserService';
// import { Link } from 'react-router-dom';
// import '../styles/UserComponent.css';

// const UserComponent = () => {
//     const [users, setUsers] = useState([]);
//     const [status, setStatus] = useState(false);
//     const [error, setError] = useState(null);

//     const deleteUser = (id) => {
//         console.log("Delete handler fired.. Id value recieved : ", id);
//         const confirmDelete = window.confirm('Are you sure you want to delete this user?');
//         if (confirmDelete) {
//             UserService.deleteUser(id).then((response) => {
//                 console.log("response recieved from delete api.." + JSON.stringify(response.data));
//                 setStatus(!status)
//             }).catch(error => {
//                 console.log("Error recieved from delete api..", error);
//                 setError("Failed to delete user. Please try again.");
//             })
//         }
//     }

//     useEffect(() => {
//         console.log("useeffect hooked fired...");
//         UserService.getAllUser().then((response) => {
//             console.log("response recievd from api..", response.data);
//             setUsers(response.data);
//             console.log("state variable assigned with..", response.data);
//         }).catch((error) => {
//             console.log("Error recieved from getAll api..", error);
//             setError("Failed to fetch users. Please try again.");
//         });
//     }, []);
//     return (
//         <div>
//             <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                     <li className="breadcrumb-item active" aria-current="page">Users</li>
//                 </ol>
//             </nav>
//             <h1>List of all Users</h1>
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
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.firstName}</td>
//                                 <td>{user.lastName}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.phoneNumber}</td>
//                                 <td>{user.username}</td>
//                                 <td>
//                                     {/* <Link className="btn btn-primary mx-1" to={`/updateUser/${user.id}`}>Update</Link> */}
//                                     <button className="btn btn-danger mx-1" onClick={() => deleteUser(user.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <Link to="/admin" className="btn btn-danger mt-3">Back</Link>
//         </div>
//     );

// }

// export default UserComponent

import React, { useContext, useEffect, useState } from 'react'
import UserService from '../services/UserService';
import { Link } from 'react-router-dom';
import '../styles/UserComponent.css';
import '../styles/BackButton.css';
import { AuthContext } from '../context/AuthProvider';

const UserComponent = () => {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(null);
    const {auth} =useContext(AuthContext)

    const deleteUser = (id) => {
        console.log("Delete handler fired.. Id value recieved : ", id);
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (confirmDelete) {
            UserService.deleteUser(id,auth.accessToken).then((response) => {
                console.log("response recieved from delete api.." + JSON.stringify(response.data));
                setStatus(!status)
            }).catch(error => {
                console.log("Error recieved from delete api..", error);
                setError("Failed to delete user. Please try again.");
            })
        }
    }

    useEffect(() => {
        console.log("useeffect hooked fired...");
        UserService.getAllUser(auth.accessToken).then((response) => {
            console.log("response recievd from api..", response.data);
            setUsers(response.data);
            console.log("state variable assigned with..", response.data);
        }).catch((error) => {
            console.log("Error recieved from getAll api..", error);
            setError("Failed to fetch users. Please try again.");
        });
    }, [status]);
    return (
        <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Users
              </li>
            </ol>
          </nav>
          <h1 className="font-serif text-center py-3 bg-blue-100">List of all Users</h1>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-semibold">First Name:</div>
                  <div>{user.firstName}</div>
                  <div className="font-semibold">Last Name:</div>
                  <div>{user.lastName}</div>
                  <div className="font-semibold">Email:</div>
                  <div>{user.email}</div>
                  <div className="font-semibold">Phone Number:</div>
                  <div>{user.phoneNumber}</div>
                  <div className="font-semibold">Username:</div>
                  <div>{user.username}</div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    className="flex justify-center items-center gap-2 w-24 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/admin" className="mt-4 btn btn-secondary inline-flex items-center">
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span className="ml-2">Back</span>
          </Link>
        </div>
      );
      

}

export default UserComponent