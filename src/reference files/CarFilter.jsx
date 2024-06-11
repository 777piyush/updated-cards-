// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CarFilter() {
//     // State variables for filter options
//     const [segments, setSegments] = useState([]);
//     const [fuels, setFuels] = useState([]);
//     const [transmissions, setTransmissions] = useState([]);

//     // State variable to store filtered cars
//     const [filteredCars, setFilteredCars] = useState([]);

//     // Function to fetch filtered cars from API
//     const fetchFilteredCars = async () => {
//         // Construct filter object based on selected options
//         const filters = {
//             segments,
//             fuels,
//             transmissions
//         };

//         try {
//             // Make API call with filter options
//             const response = await axios.post('/api/cars/filter', filters);
//             // Update state with filtered cars
//             setFilteredCars(response.data);
//         } catch (error) {
//             console.error('Error fetching filtered cars:', error);
//         }
//     };

//     // useEffect hook to fetch filtered cars when filter options change
//     useEffect(() => {
//         fetchFilteredCars();
//     }, [segments, fuels, transmissions]);

//     // Event handlers for checkbox changes
//     const handleSegmentChange = (segment) => {
//         if (segments.includes(segment)) {
//             setSegments(segments.filter(item => item !== segment));
//         } else {
//             setSegments([...segments, segment]);
//         }
//     };

//     const handleFuelChange = (fuel) => {
//         if (fuels.includes(fuel)) {
//             setFuels(fuels.filter(item => item !== fuel));
//         } else {
//             setFuels([...fuels, fuel]);
//         }
//     };

//     const handleTransmissionChange = (transmission) => {
//         if (transmissions.includes(transmission)) {
//             setTransmissions(transmissions.filter(item => item !== transmission));
//         } else {
//             setTransmissions([...transmissions, transmission]);
//         }
//     };

//     // Display checkboxes for filter options
//     return (
//         <div>
//             <h2>Car Filter</h2>
//             <div>
//                 <h3>Segments</h3>
//                 <label>
//                     <input type="checkbox" checked={segments.includes('Hatchback')} onChange={() => handleSegmentChange('Hatchback')} />
//                     Hatchback
//                 </label>
//                 <label>
//                     <input type="checkbox" checked={segments.includes('Sedan')} onChange={() => handleSegmentChange('Sedan')} />
//                     Sedan
//                 </label>
//                 <label>
//                     <input type="checkbox" checked={segments.includes('SUV/MUV')} onChange={() => handleSegmentChange('SUV/MUV')} />
//                     SUV/MUV
//                 </label>
//             </div>
//             <div>
//                 <h3>Fuel</h3>
//                 <label>
//                     <input type="checkbox" checked={fuels.includes('Diesel')} onChange={() => handleFuelChange('Diesel')} />
//                     Diesel
//                 </label>
//                 <label>
//                     <input type="checkbox" checked={fuels.includes('Petrol')} onChange={() => handleFuelChange('Petrol')} />
//                     Petrol
//                 </label>
//             </div>
//             <div>
//                 <h3>Transmission</h3>
//                 <label>
//                     <input type="checkbox" checked={transmissions.includes('Automatic')} onChange={() => handleTransmissionChange('Automatic')} />
//                     Automatic
//                 </label>
//                 <label>
//                     <input type="checkbox" checked={transmissions.includes('Manual')} onChange={() => handleTransmissionChange('Manual')} />
//                     Manual
//                 </label>
//             </div>

//             {/* Display filtered cars */}
//             <h3>Filtered Cars</h3>
//             <ul>
//                 {filteredCars.map((car) => (
//                     <li key={car.id}>{car.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default CarFilter;
