// import React, { useEffect, useState } from 'react';
// import { getCarsById, listCars } from '../services/carService';
// import CarCard from './CarCard';



// const Cars = () => {
//     const [cars, setCars] = useState([]);


//     useEffect(() => {
//         console.log('Inside useEffect - Fetching data');
//         listCars()
//             .then(response => {
//                 setCars(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, []);

//     console.log('Rendering Cars component');


//     // useEffect(()=>{
//     //     if (carId){
//     //         getCarsById(carId).then((response)=>{
//     //             setCars(response.data)
//     //         }).catch(error =>{
//     //             console.error(error);
//     //         })
//     //     }
//     // })


// // return (
// //     <div>
// //       <h1>List of Cars</h1>
// //       <div>
// //         {cars.map(car => {
// //           console.log('new console',car.cartype); // Log carType here
         
// //           return <CarCard key={car.id} car={car} />;
// //         })}
// //       </div>
// //     </div>
// //   );
// //     }  


// return (
//     <div>
//       <h1>List of Cars</h1>
//       <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
//         {cars.map((car, index) => (
//           <CarCard key={index} car={car} /> // Render a CarCard for each car in the cars array
//         ))}
//       </div>
//     </div>
//   );
// };

// // function getCarsById(id){
// //     navigator(`/getById/`${id})
// // }

// console.log('Cars component - Exit');

// export default Cars;
