// // CarById.jsx
// import React, { useEffect, useState } from 'react';
// import { getCarById } from '../services/carService';
// import { useParams } from 'react-router-dom';

// const CarById = () => {
//     const { id } = useParams();
//     const [car, setCar] = useState(null);

//     useEffect(() => {
//         getCarById(id)
//             .then(response => {
//                 setCar(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, [id]);

//     return (
//         <div>
//             <h1>Car Details</h1>
//             {car && (
//                 <pre>{JSON.stringify(car, null, 2)}</pre>
//             )}
//         </div>
//     );
// };

// export default CarById;
