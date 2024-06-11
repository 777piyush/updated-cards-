// import React, { useEffect, useState } from 'react'
// import CarService from '../services/CarService';
// import { Link } from 'react-router-dom';
// import CarCard from './CarCard';

// import { ChevronDown } from 'lucide-react'

// const CarComponent = () => {
//     const [cars, setCars] = useState([]);
//     const [status, setStatus] = useState(false)
//     const [error, setError] = useState(null);

//     // for sorting the car and filter
//     const [sortBy, setSortBy] = useState('id');
//     const [filterBy, setFilterBy] = useState({
//         available: false, // Default value for filtering by availability
//         carType: [], // Array to hold selected car types
//         // Add more filter options as needed
//         fuelType: [], // Array to hold selected fuel types
//         transmissionType: [], // Array to hold selected transmission types
//     });

//     // location wise search filter
//     const [searchLocation, setSearchLocation] = useState('');
//     // const [filteredCars, setFilteredCars] = useState([]);

//     // for deleting cars by admin
//     const deleteCar = (id) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this car?');
//         if (confirmDelete) {
//             console.log("Delete handler fired.. Id value received : ", id);
//             CarService.deleteCar(id)
//                 .then((response) => {
//                     console.log("Response received from delete API:", response.data);
//                     setStatus(!status);
//                 })
//                 .catch(error => {
//                     console.error("Error received from delete API:", error);
//                     setError("Error deleting car. Please try again.");
//                 });
//         }
//     }

//     // Handler for checkbox change to update filterBy state
//     // const handleFilterChange = (event) => {
//     //     const { name, checked } = event.target;
//     //     console.log("inside handleFilterChange");
//     //     console.log(`Filter changed: ${name} - ${checked}`);
//     //     setFilterBy((prevFilterBy) => ({
//     //         ...prevFilterBy,
//     //         [name]: checked,
//     //     }));
//     // };

//     // Fetch cars on component mount and when status, sortBy, or filterBy change

//     useEffect(() => {
//         fetchFilteredAndSortedCars();
//     }, [status, sortBy, filterBy, searchLocation]);

//     // useEffect(() => {
//     //     fetchAllCars(); // Fetch all cars initially
//     // }, []);

//     // const fetchAllCars = () => {
//     //     console.log("inside fetchAllCars API....");
//     //     CarService.getAllCars()
//     //     .then(response => {
//     //             console.log("Response received from fetchAllCars API:", response.data);
//     //             setCars(response.data);
//     //         })
//     //         .catch(error => {
//     //             console.error("Error fetching cars:", error);
//     //             setError("Failed to fetch cars. Please try again later.");
//     //         });
//     // };

//     const fetchFilteredAndSortedCars = () => {

//         console.log("inside fetchFilteredAndSortedCars   filterBy.available  is", filterBy.available);
//         console.log("inside fetchFilteredAndSortedCars   filterBy.carType  is", filterBy.carType);
//         console.log("inside fetchFilteredAndSortedCars   filterBy.fuelType  is", filterBy.fuelType);
//         console.log("inside fetchFilteredAndSortedCars   filterBy.transmissionType  is", filterBy.transmissionType);

//         CarService.getFilteredAndSortedCars(sortBy, filterBy.available, filterBy.carType, filterBy.fuelType, filterBy.transmissionType, searchLocation)
//             .then((response) => {
//                 console.log("Response received from getFilteredAndSortedCars API:", response.data);
//                 setCars(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error received from getFilteredAndSortedCars API:", error);
//                 setError("Failed to fetch filtered and sorted cars. Please try again later.");
//             });
//     };

//     const handleFilterChange = (event) => {
//         const { name, value, checked } = event.target;
//         console.log("inside handleFilterChange");
//         console.log(`Filter changed: ${name} - ${value}`);

//         setFilterBy((prevFilterBy) => ({
//             ...prevFilterBy,
//             [name]: name === "available" ? checked : Array.isArray(prevFilterBy[name]) ?
//                 (checked ? [...prevFilterBy[name], value] : prevFilterBy[name].filter(item => item !== value))
//                 : (checked ? [value] : []),
//         }));
//     };

//     // const handleLocationChange = (event) => {
//     //     setSearchLocation(event.target.value);
//     // };
//     const handleLocationSubmit = (e) => {
//         e.preventDefault();
//         fetchFilteredAndSortedCars();
//     };

//     const clearAllFilters = () => {
//         setFilterBy({
//             available: false,
//             carType: [],
//             fuelType: [],
//             transmissionType: [],
//         });
//         setSearchLocation('');
//         setSortBy('id'); // Reset sorting to default
//         // fetchFilteredAndSortedCars(); // Re-fetch page with no filters applied
//     };

//     return (
//         <section className="w-full">
//             <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
//                 <div className="md:flex md:flex-row md:items-start md:justify-between">
//                     <div>
//                         <h1 className="text-xl font-bold">Cars</h1>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                     </div>
//                     <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
//                         <input type="text" placeholder="Search location" value={searchLocation} onChange={(e) => { setSearchLocation(e.target.value) }} className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex" />
//                         <button type="button" onClick={(e) => { handleLocationSubmit(e) }}>Search</button>
//                         <label htmlFor="sortBy" className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex">
//                             Sort by:
//                             <select id="sortBy" value={sortBy} aria-placeholder='Sort' onChange={(e) => setSortBy(e.target.value)}>
//                                 <option value="id">ID</option>
//                                 <option value="brand">Brand (A - Z)</option>
//                                 <option value="-brand">Brand (Z - A)</option>
//                                 <option value="price">Price (Low to High)</option>
//                                 <option value="-price">Price (High to Low)</option>
//                             </select>
//                         </label>

//                         <button type="button" className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"> Car Type <ChevronDown className="ml-2 h-4 w-4" />
//                         </button>
//                         <button type="button" className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"> Fuel Type <ChevronDown className="ml-2 h-4 w-4" />
//                         </button>
//                         <button type="button" className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"> Transmission Type <ChevronDown className="ml-2 h-4 w-4" />
//                         </button>
//                     </div>
//                 </div>
//                 <hr className="my-3" />
//                 <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
//                     <div className="hidden space-y-2 divide-y lg:col-span-3 lg:block">

//                             <span className="flex space-x-20">
//                                 <h4 className="mr-20" >Filters</h4>
//                                 <button type="button" className="text-sm decoration-gray-400 underline font-light text-black" onClick={clearAllFilters} >Clear All</button>
//                             </span>

//                         <div className="pt-6">
//                             <h4 className="text-lg font-semibold text-gray-900">Available Cars</h4>
//                             <ul className="mt-2">
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="available" checked={filterBy.available} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Available</label>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="pt-6 " >
//                             <h4 className="text-lg font-semibold text-gray-900">Car Type</h4>
//                             <ul className="mt-2">
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" type="checkbox" name="carType" value="HATCHBACK" checked={filterBy.carType.includes('HATCHBACK')} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Hatchback</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" type="checkbox" name="carType" value="SEDAN" checked={filterBy.carType.includes('SEDAN')} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Sedan</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" type="checkbox" name="carType" value="SUV" checked={filterBy.carType.includes('SUV')} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >SUV</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" type="checkbox" name="carType" value="MUV" checked={filterBy.carType.includes('MUV')} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >MUV</label>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="pt-6">
//                             <h4 className="text-lg font-semibold text-gray-900">Fuel Type</h4>
//                             <ul className="mt-2">
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="fuelType" value="PETROL" checked={filterBy.fuelType.includes("PETROL")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Petrol</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="fuelType" value="DIESEL" checked={filterBy.fuelType.includes("DIESEL")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Diesel</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="fuelType" value="ELECTRIC" checked={filterBy.fuelType.includes("ELECTRIC")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Electric</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="fuelType" value="HYBRID" checked={filterBy.fuelType.includes("HYBRID")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Hybrid</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="fuelType" value="CNG" checked={filterBy.fuelType.includes("CNG")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >CNG</label>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="pt-6">
//                             <h4 className="text-lg font-semibold text-gray-900">Transmission Type</h4>
//                             <ul className="mt-2">
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="transmissionType" value="MANUAL" checked={filterBy.transmissionType.includes("MANUAL")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Manual</label>
//                                     </div>
//                                 </li>
//                                 <li className="flex items-center justify-between py-2">
//                                     <div className="flex items-center">
//                                         <input type="checkbox" name="transmissionType" value="AUTOMATIC" checked={filterBy.transmissionType.includes("AUTOMATIC")} onChange={handleFilterChange} />
//                                         <label className="ml-3 text-sm font-medium text-gray-900" >Automatic </label>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className=" w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full" >
//                         <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
//                             {cars.map((car, index) => (
//                                 <CarCard key={index} car={car} deleteCar={deleteCar} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Link to="/admin" className="btn btn-danger ">Back</Link>
//         </section>
//     )
// }
// // export { deleteCar };
// export default CarComponent;

import React, { useEffect, useState } from "react";
import CarService from "../services/CarService";
import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import "../styles/BackButton.css";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const CarComponent = () => {
  const { auth } = useContext(AuthContext);
  const admin = auth.role === "ROLE_ADMIN";

  const [cars, setCars] = useState([]);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);

  // for sorting the car and filter
  const [sortBy, setSortBy] = useState("id");
  const [filterBy, setFilterBy] = useState({
    available: false, // Default value for filtering by availability
    carType: [], // Array to hold selected car types
    // Add more filter options as needed
    fuelType: [], // Array to hold selected fuel types
    transmissionType: [], // Array to hold selected transmission types
  });

  // location wise search filter
  const [searchLocation, setSearchLocation] = useState("");
  // const [filteredCars, setFilteredCars] = useState([]);

  // for deleting cars by admin
  const deleteCar = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );
    if (confirmDelete) {
      console.log("Delete handler fired.. Id value received : ", id);
      CarService.deleteCar(id, auth.accessToken)
        .then((response) => {
          console.log("Response received from delete API:", response.data);
          setStatus(!status);
        })
        .catch((error) => {
          console.error("Error received from delete API:", error);
          setError("Error deleting car. Please try again.");
        });
    }
  };

  // Handler for checkbox change to update filterBy state
  // const handleFilterChange = (event) => {
  //     const { name, checked } = event.target;
  //     console.log("inside handleFilterChange");
  //     console.log(`Filter changed: ${name} - ${checked}`);
  //     setFilterBy((prevFilterBy) => ({
  //         ...prevFilterBy,
  //         [name]: checked,
  //     }));
  // };

  // Fetch cars on component mount and when status, sortBy, or filterBy change

  useEffect(() => {
    fetchFilteredAndSortedCars();
  }, [status, sortBy, filterBy, searchLocation]);

  // useEffect(() => {
  //     fetchAllCars(); // Fetch all cars initially
  // }, []);

  // const fetchAllCars = () => {
  //     console.log("inside fetchAllCars API....");
  //     CarService.getAllCars()
  //     .then(response => {
  //             console.log("Response received from fetchAllCars API:", response.data);
  //             setCars(response.data);
  //         })
  //         .catch(error => {
  //             console.error("Error fetching cars:", error);
  //             setError("Failed to fetch cars. Please try again later.");
  //         });
  // };

  const fetchFilteredAndSortedCars = () => {
    console.log(
      "inside fetchFilteredAndSortedCars   filterBy.available  is",
      filterBy.available
    );
    console.log(
      "inside fetchFilteredAndSortedCars   filterBy.carType  is",
      filterBy.carType
    );
    console.log(
      "inside fetchFilteredAndSortedCars   filterBy.fuelType  is",
      filterBy.fuelType
    );
    console.log(
      "inside fetchFilteredAndSortedCars   filterBy.transmissionType  is",
      filterBy.transmissionType
    );

    CarService.getFilteredAndSortedCars(
      sortBy,
      filterBy.available,
      filterBy.carType,
      filterBy.fuelType,
      filterBy.transmissionType,
      searchLocation,
      auth.accessToken
    )
      .then((response) => {
        console.log(
          "Response received from getFilteredAndSortedCars API:",
          response.data
        );
        setCars(response.data);
      })
      .catch((error) => {
        console.error(
          "Error received from getFilteredAndSortedCars API:",
          error
        );
        setError(
          "Failed to fetch filtered and sorted cars. Please try again later."
        );
      });
  };

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    console.log("inside handleFilterChange");
    console.log(`Filter changed: ${name} - ${value}`);

    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      [name]:
        name === "available"
          ? checked
          : Array.isArray(prevFilterBy[name])
          ? checked
            ? [...prevFilterBy[name], value]
            : prevFilterBy[name].filter((item) => item !== value)
          : checked
          ? [value]
          : [],
    }));
  };

  // const handleLocationChange = (event) => {
  //     setSearchLocation(event.target.value);
  // };

  // const handleLocationSubmit = (e) => {
  //     e.preventDefault();
  //     fetchFilteredAndSortedCars();
  // };

  const clearAllFilters = () => {
    setFilterBy({
      available: false,
      carType: [],
      fuelType: [],
      transmissionType: [],
    });
    setSearchLocation("");
    setSortBy("id"); // Reset sorting to default
    // fetchFilteredAndSortedCars(); // Re-fetch page with no filters applied
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10  ">
        {/* bg-gradient-to-t from-sky-200 to-blue-100 */}
        <div className="md:flex md:flex-row md:items-start md:justify-between ">
          <div>
            <h1 className="text-xl font-bold font-sans">Cars</h1>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            {/* <input type="text" placeholder="Search location" value={searchLocation} onChange={(e) => { setSearchLocation(e.target.value) }} className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex" /> */}

            <div className="flex items-center justify-center">
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  value={searchLocation}
                  onChange={(e) => {
                    setSearchLocation(e.target.value);
                  }}
                  className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                />
                <label
                  htmlFor="location"
                  className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                >
                  Location
                </label>
              </div>
            </div>
            {/* <button type="button" onClick={(e) => { handleLocationSubmit(e) }}>Search</button> */}

            <label
              htmlFor="sortBy"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort by:
              <select
                id="sortBy"
                value={sortBy}
                aria-placeholder="Sort"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="id">ID</option>
                <option value="brand">Brand (A - Z)</option>
                <option value="-brand">Brand (Z - A)</option>
                <option value="price">Price (Low to High)</option>
                <option value="-price">Price (High to Low)</option>
              </select>
            </label>

            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              {" "}
              Car Type <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              {" "}
              Fuel Type <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              {" "}
              Transmission Type <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-3" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 border-black  ">
          <div className="hidden space-y-2 divide-y lg:col-span-3 lg:block">
            <span className="flex space-x-20 bg-sky-200">
              <h4 className="mr-20">Filters</h4>
              <button
                type="button"
                className="text-sm decoration-gray-400 underline font-light text-black"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            </span>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Available Cars
              </h4>
              <ul className="mt-2">
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="available"
                      checked={filterBy.available}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 font-medium text-gray-900">
                      Available
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-6 ">
              <h4 className="text-lg font-semibold text-gray-900">Car Type</h4>
              <ul className="mt-2">
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      type="checkbox"
                      name="carType"
                      value="HATCHBACK"
                      checked={filterBy.carType.includes("HATCHBACK")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Hatchback
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      type="checkbox"
                      name="carType"
                      value="SEDAN"
                      checked={filterBy.carType.includes("SEDAN")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Sedan
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      type="checkbox"
                      name="carType"
                      value="SUV"
                      checked={filterBy.carType.includes("SUV")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      SUV
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      type="checkbox"
                      name="carType"
                      value="MUV"
                      checked={filterBy.carType.includes("MUV")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      MUV
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900">Fuel Type</h4>
              <ul className="mt-2">
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="fuelType"
                      value="PETROL"
                      checked={filterBy.fuelType.includes("PETROL")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Petrol
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="fuelType"
                      value="DIESEL"
                      checked={filterBy.fuelType.includes("DIESEL")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Diesel
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="fuelType"
                      value="ELECTRIC"
                      checked={filterBy.fuelType.includes("ELECTRIC")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Electric
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="fuelType"
                      value="HYBRID"
                      checked={filterBy.fuelType.includes("HYBRID")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Hybrid
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="fuelType"
                      value="CNG"
                      checked={filterBy.fuelType.includes("CNG")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      CNG
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Transmission Type
              </h4>
              <ul className="mt-2">
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="transmissionType"
                      value="MANUAL"
                      checked={filterBy.transmissionType.includes("MANUAL")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Manual
                    </label>
                  </div>
                </li>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="transmissionType"
                      value="AUTOMATIC"
                      checked={filterBy.transmissionType.includes("AUTOMATIC")}
                      onChange={handleFilterChange}
                    />
                    <label className="ml-3 text-sm font-medium text-gray-900">
                      Automatic{" "}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">
            <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 ">
              {/* {cars.map((car, index) => (
                <CarCard key={index} car={car} deleteCar={deleteCar} />
              ))} */}

              {cars.length > 0 ? (
                cars.map((car, index) => (
                  <CarCard key={index} car={car} deleteCar={deleteCar} />
                ))
              ) : (
                //
                <div className="flex flex-col items-center justify-center  w-full h-full px-24">
                  <img
                    src="https://www.revv.co.in/assets/RentalImages/PLP/resetCarFilter.svg"
                    alt="Reset Filters"
                    className="mt-4"
                  />

                  <p className="font-sans text-3xl text-gray-500 text-center">
                    Sorry, No cars available for your search. Try changing dates
                    or reset filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to={!admin ? "/user" : "/admin"} className="custButton btn">
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
    </section>
  );
};
// export { deleteCar };
export default CarComponent;
