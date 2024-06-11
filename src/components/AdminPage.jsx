// import React from 'react';
// import { Link } from 'react-router-dom';


// const AdminPage = () => {
//     return (
//         <div>
//             <h2>Welcome to the Admin Page</h2>
//             <Link to="/users/getAll" className='btn btn-primary mx-3' >All Users</Link>
//             <Link to="/cars/getAll" className='btn btn-primary mx-3' >All Cars</Link>
//             <Link to="/cars/addCar" className='btn btn-primary mx-3' >Add new Car</Link>
//             <Link to="/reservations/getAll" className='btn btn-primary mx-3' >All Reservations</Link>
//             <Link to="/reviews/getAll" className='btn btn-primary mx-3' >All Reviews</Link>
//             {/* Add any content specific to the admin page */}
//         </div>
//     );
// }

// export default AdminPage;

import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="bg-blue-100  min-h-screen py-8 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 font-serif ">Welcome to the Admin Page</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/users/getAll">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">All Users</h3>
              <p>View all registered users</p>
            </div>
          </Link>
          <Link to="/cars/getAll">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">All Cars</h3>
              <p>View all available cars</p>
            </div>
          </Link>
          <Link to="/cars/addCar">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Add New Car</h3>
              <p>Add a new car to the inventory</p>
            </div>
          </Link>
          <Link to="/reservations/getAll">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">All Reservations</h3>
              <p>View all reservations</p>
            </div>
          </Link>
          <Link to="/reviews/getAll">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">All Reviews</h3>
              <p>View all reviews</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
