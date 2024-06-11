// import React, { useState } from "react";
// import axios from "axios";
// import { addCar } from "../services/CarService";
// import { useNavigate } from "react-router-dom";

// const NewCarForm = () => {
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [color, setColor] = useState("");
//   const [price, setPrice] = useState(0);
//   const [availability, setAvailability] = useState(false);
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");
//   const [fuelType, setFuelType] = useState(""); // Adjust based on your backend's DTO structure
//   const [transmissionType, setTransmissionType] = useState(""); // Adjust based on your backend's DTO structure
//   const [carType, setCarType] = useState(""); // Adjust based on your backend's DTO structure

//    const navigator = useNavigate();

  
//   function handleSubmit(e){
//     e.preventDefault();

//     const cars ={brand,model,color,price,availability,location,description,fuelType,transmissionType,carType }

//     console.log("Car created successfully:", cars);

//     addCar(cars).then((response) =>{
//         console.log(response.data);
//          navigator('/users/getAll')
//     })

//   }
   

//   return (
//     <div className="container mt-4">
//       <div className="card p-4">
//         <h2>Add a New Car</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Brand:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="brand"
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Model:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="model"
//               value={model}
//               onChange={(e) => setModel(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Color:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="color"
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Price:</label>
//             <input
//               type="number"
//               className="form-control"
//               name="price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Availability:</label>
//             <select
//               className="form-select"
//               name="availability"
//               value={availability}
//               onChange={(e) => setAvailability(e.target.value)}
//               required
//             >
//               <option value={true}>Available</option>
//               <option value={false}>Not Available</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Location:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Description:</label>
//             <textarea
//               className="form-control"
//               name="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Fuel Type:</label>
//             <select
//               className="form-select"
//               name="fuelType"
//               value={fuelType}
//               onChange={(e) => setFuelType(e.target.value)}
//               required
//             >
//               <option value="">Select Fuel Type</option>
//               <option value="PETROL">PETROL</option>
//               <option value="DIESEL">DIESEL</option>
//               <option value="ELECTRIC">ELECTRIC</option>
//               <option value="HYBRID">HYBRID</option>
//               <option value="CNG">CNG</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Transmission Type:</label>
//             <select
//               className="form-select"
//               name="transmissionType"
//               value={transmissionType}
//               onChange={(e) => setTransmissionType(e.target.value)}
//               required
//             >
//               <option value="">Select Transmission Type</option>
//               <option value="MANUAL">MANUAL</option>
//               <option value="AUTOMATIC">AUTOMATIC</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Car Type:</label>
//             <select
//               className="form-select"
//               name="carType"
//               value={carType}
//               onChange={(e) => setCarType(e.target.value)}
//               required
//             >
//               <option value="">Select Car Type</option>
//               <option value="HATCHBACK">HATCHBACK</option>
//               <option value="SEDAN">SEDAN</option>
//               <option value="SUV">SUV</option>
//               <option value="MUV">MUV</option>
//             </select>
//           </div>
//           <button  className="btn btn-primary" onClick={handleSubmit}>
//             Add Car
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewCarForm;
