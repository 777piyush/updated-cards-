// import React, { useState, useEffect } from 'react';
// import CarService from '../services/CarService';
// import { Link, useParams, useNavigate } from 'react-router-dom';

// const AddCarComponent = () => {
//     const [newCar, setNewCar] = useState({
//         brand: '',
//         model: '',
//         color: '',
//         price: 0.0,
//         availability: true,
//         location: '',
//         description: '',
//         fuelType: '',
//         transmissionType: '',
//         carType: '',
//     });
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (id) {
//             CarService.getCarById(id)
//                 .then((response) => {
//                     const carData = response.data;
//                     setNewCar(carData);
//                 })
//                 .catch(error => {
//                     console.error("Error retrieving car data:", error);
//                     setErrorMessage('Error retrieving car data');
//                 });
//         }
//     }, [id]);


//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewCar({ ...newCar, [name]: value });
//     };

//     const saveOrUpdateCar = async (e) => {
//         e.preventDefault();
//         try {
//             if (id) {
//                 await CarService.updateCarById(id, newCar);
//                 setSuccessMessage('Car updated successfully.');
//             } else {
//                 await CarService.addCar(newCar);
//                 setSuccessMessage('Car added successfully.');
//             }
//             navigate('/admin'); // Redirect to admin page after successful operation
//         } catch (error) {
//             console.error("Error saving or updating car:", error);
//             setErrorMessage('Error saving or updating car. Please try again.');
//         }
//     };

//     // const addCar = async () => {
//     //     try {
//     //         await CarService.addCar(newCar);
//     //         setSuccessMessage('Car added successfully.');
//     //         // Reset form fields after successful addition
//     //         setNewCar({
//     //             brand: '',
//     //             model: '',
//     //             color: '',
//     //             price: '',
//     //             availability: true,
//     //             location: '',
//     //             description: '',
//     //             fuelType: '',
//     //             transmissionType: '',
//     //             carType: '',
//     //         });
//     //     } catch (error) {
//     //         console.error("Error received from addCar API:", error);
//     //         setErrorMessage('Error adding car. Please try again.');
//     //     }
//     // };

//     const handleCancel = () => {
//         // Reset form fields to default values
//         setNewCar({
//             brand: '',
//             model: '',
//             color: '',
//             price: 0.0,
//             availability: true,
//             location: '',
//             description: '',
//             fuelType: '',
//             transmissionType: '',
//             carType: '',
//         });
//     };

//     return (
//         <div>
//             {console.log("Application rendered...")}
//             <div className="container">
//                 <div className="card col-md-6 offset-md-3">
//                     {/* <h2 className="text-centre">Add New Car</h2> */}
//                     <h2 className="text-center">{id ? 'Update Car' : 'Add New Car'}</h2>
//                     {successMessage && <div className="alert alert-success">{successMessage}</div>}
//                     {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                     <div className="card-body">
//                         <form>
//                             {/* Brand textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Brand:</label>
//                                 <input type="text" placeholder='Enter Brand name' name='brand' className='form-control' value={newCar.brand} onChange={handleInputChange} />
//                             </div>
//                             {/* Model textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Model:</label>
//                                 <input type="text" placeholder='Enter Model name' name='model' value={newCar.model} className='form-control' onChange={handleInputChange} />
//                             </div>
//                             {/* Color textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Color:</label>
//                                 <input type="text" placeholder='Enter Car color' name='color' value={newCar.color} className='form-control' onChange={handleInputChange} />
//                             </div>
//                             {/* Price textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Price:</label>
//                                 <input type="number" placeholder='Enter car price' name='price' value={newCar.price} className='form-control' onChange={handleInputChange} />
//                             </div>
//                             {/* availability dropdown  */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Availability:</label>
//                                 <select name="availability" value={newCar.availability} className="form-control" onChange={handleInputChange}>
//                                     <option value="" disabled >Select Availability</option>
//                                     <option value={true}>Available</option>
//                                     <option value={false}>Not Available</option>
//                                 </select>
//                             </div>
//                             {/* location textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Location:</label>
//                                 <input type="text" placeholder='Enter car location' name='location' value={newCar.location} className='form-control' onChange={handleInputChange} />
//                             </div>
//                             {/* description textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Description:</label>
//                                 <input type="text" placeholder='Enter car description' name='description' value={newCar.description} className='form-control' onChange={handleInputChange} />
//                             </div>
//                             {/* fuelType dropdown */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Fuel Type:</label>
//                                 <select name="fuelType" value={newCar.fuelType} className="form-control" onChange={handleInputChange}>
//                                     <option value="" disabled >Select Fuel Type</option>
//                                     <option value="PETROL">Petrol</option>
//                                     <option value="DIESEL">Diesel</option>
//                                     <option value="ELECTRIC">Electric</option>
//                                     <option value="HYBRID">Hybrid</option>
//                                     <option value="CNG">CNG</option>
//                                 </select>
//                             </div>
//                             {/* transmissionType dropdown */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Transmission Type:</label>
//                                 <select name="transmissionType" value={newCar.transmissionType} className="form-control" onChange={handleInputChange}>
//                                     <option value="" disabled >Select Transmission Type</option>
//                                     <option value="MANUAL">Manual</option>
//                                     <option value="AUTOMATIC">Automatic</option>
//                                 </select>
//                             </div>
//                             {/* carType dropdown */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Car Type:</label>
//                                 <select name="carType" value={newCar.carType} className="form-control" onChange={handleInputChange}>
//                                     <option value="" disabled >Select Car Type</option>
//                                     <option value="HATCHBACK">Hatchback</option>
//                                     <option value="SEDAN">Sedan</option>
//                                     <option value="SUV">SUV</option>
//                                     <option value="MUV">MUV</option>
//                                 </select>
//                             </div>
//                             {/* submit button */}
//                             {/* <button type="button" onClick={addCar} className="btn btn-success mx-3">Add Car</button> */}
//                             <button type="button" onClick={saveOrUpdateCar} className="btn btn-success mx-3">Save</button>
//                             <button type="button" onClick={handleCancel} className="btn btn-danger">Cancel</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Link to="/admin" className="btn btn-danger my-2">Back</Link>
//         </div>
//     )

// };

// export default AddCarComponent;





import React, { useState, useEffect, useContext } from 'react';
import CarService from '../services/CarService';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';
import { AuthContext } from '../context/AuthProvider';

const AddCarComponent = () => {
const {auth} = useContext(AuthContext)

    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        color: '',
        price: 0.0,
        availability: true,
        location: '',
        description: '',
        fuelType: '',
        transmissionType: '',
        carType: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            CarService.getCarById(id,auth.accessToken)
                .then((response) => {
                    const carData = response.data;
                    setNewCar(carData);
                })
                .catch(error => {
                    console.error("Error retrieving car data:", error);
                    setErrorMessage('Error retrieving car data');
                });
        }
    }, [id]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCar({ ...newCar, [name]: value });
    };

    const saveOrUpdateCar = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await CarService.updateCarById(id, newCar,auth.accessToken);
                setSuccessMessage('Car updated successfully.');
            } else {
                await CarService.addCar(newCar,auth.accessToken);
                setSuccessMessage('Car added successfully.');
            }
            navigate('/cars/getall'); // Redirect to admin page after successful operation
        } catch (error) {
            console.error("Error saving or updating car:", error);
            setErrorMessage('Error saving or updating car. Please try again.');
        }
    };

    // const addCar = async () => {
    //     try {
    //         await CarService.addCar(newCar);
    //         setSuccessMessage('Car added successfully.');
    //         // Reset form fields after successful addition
    //         setNewCar({
    //             brand: '',
    //             model: '',
    //             color: '',
    //             price: '',
    //             availability: true,
    //             location: '',
    //             description: '',
    //             fuelType: '',
    //             transmissionType: '',
    //             carType: '',
    //         });
    //     } catch (error) {
    //         console.error("Error received from addCar API:", error);
    //         setErrorMessage('Error adding car. Please try again.');
    //     }
    // };

    const handleCancel = () => {
        // Reset form fields to default values
        setNewCar({
            brand: '',
            model: '',
            color: '',
            price: 0.0,
            availability: true,
            location: '',
            description: '',
            fuelType: '',
            transmissionType: '',
            carType: '',
        });
    };

    return (
        <div>
            {console.log("Application rendered...")}
            <div className='bg-gradient-to-br from-blue-100 to-blue-50 '>
            <div className="container py-12">
                <div className="card col-md-6 offset-md-3 border-2 border-black shadow-xl">
                    {/* <h2 className="text-centre">Add New Car</h2> */}
                    <h2 className="text-center pt-8">{id ? 'Update Car' : 'Add New Car'}</h2>
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <div className="card-body">
                        <form>
                            {/* Brand textbox */}
                            <div className="form-group mb-2">
                                <label className="form-label">Brand:</label>
                                <input type="text" placeholder='Enter Brand name' name='brand' className='form-control' value={newCar.brand} onChange={handleInputChange} />
                            </div>
                            {/* Model textbox */}
                            <div className="form-group mb-2">
                                <label className="form-label">Model:</label>
                                <input type="text" placeholder='Enter Model name' name='model' value={newCar.model} className='form-control' onChange={handleInputChange} />
                            </div>
                            {/* Color textbox */}
                            <div className="form-group mb-2">
                                <label className="form-label">Color:</label>
                                <input type="text" placeholder='Enter Car color' name='color' value={newCar.color} className='form-control' onChange={handleInputChange} />
                            </div>
                            {/* Price textbox */}
                            <div className="form-group mb-2">
                                <label className="form-label">Price:</label>
                                <input type="number" placeholder='Enter car price' name='price' value={newCar.price} className='form-control' onChange={handleInputChange} />
                            </div>
                            {/* availability dropdown  */}
                            <div className="form-group mb-2">
                                <label className="form-label">Availability:</label>
                                <select name="availability" value={newCar.availability} className="form-control" onChange={handleInputChange}>
                                    <option value="" disabled >Select Availability</option>
                                    <option value={true}>Available</option>
                                    <option value={false}>Not Available</option>
                                </select>
                            </div>
                            {/* location textbox */}
                            <div className="form-group mb-2">
                                <label className="form-label">Location:</label>
                                <input type="text" placeholder='Enter car location' name='location' value={newCar.location} className='form-control' onChange={handleInputChange} />
                            </div>
                            {/* description textbox */}
                            <div className="form-group mb-2">
                                <label className="form-label">Description:</label>
                                <input type="text" placeholder='Enter car description' name='description' value={newCar.description} className='form-control' onChange={handleInputChange} />
                            </div>
                            {/* fuelType dropdown */}
                            <div className="form-group mb-2">
                                <label className="form-label">Fuel Type:</label>
                                <select name="fuelType" value={newCar.fuelType} className="form-control" onChange={handleInputChange}>
                                    <option value="" disabled >Select Fuel Type</option>
                                    <option value="PETROL">Petrol</option>
                                    <option value="DIESEL">Diesel</option>
                                    <option value="ELECTRIC">Electric</option>
                                    <option value="HYBRID">Hybrid</option>
                                    <option value="CNG">CNG</option>
                                </select>
                            </div>
                            {/* transmissionType dropdown */}
                            <div className="form-group mb-2">
                                <label className="form-label">Transmission Type:</label>
                                <select name="transmissionType" value={newCar.transmissionType} className="form-control" onChange={handleInputChange}>
                                    <option value="" disabled >Select Transmission Type</option>
                                    <option value="MANUAL">Manual</option>
                                    <option value="AUTOMATIC">Automatic</option>
                                </select>
                            </div>
                            {/* carType dropdown */}
                            <div className="form-group mb-2">
                                <label className="form-label">Car Type:</label>
                                <select name="carType" value={newCar.carType} className="form-control" onChange={handleInputChange}>
                                    <option value="" disabled >Select Car Type</option>
                                    <option value="HATCHBACK">Hatchback</option>
                                    <option value="SEDAN">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MUV">MUV</option>
                                </select>
                            </div>
                            {/* submit button */}
                            {/* <button type="button" onClick={addCar} className="btn btn-success mx-3">Add Car</button> */}
                            <button type="button" onClick={saveOrUpdateCar} className="btn btn-success mx-3">Save</button>
                            <button type="button" onClick={handleCancel} className="btn btn-danger">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>

            <Link to="/cars/getall" className="mt-3 custButton btn">
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                <span>Back</span>
            </Link>
        </div>
        </div>
    )

};

export default AddCarComponent;