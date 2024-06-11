// import axios from "axios";

// const BASE_REST_API_URL = "http://localhost:8080/api/cars"
// class CarService {
//     async getAllCars() {
//         try {
//             const response = await axios.get(BASE_REST_API_URL + "/getAll");
//             return response;
//         } catch (error) {
//             console.error("Error fetching cars:", error);
//         }
//     }
//     deleteCar(id) {
//         return (axios.delete(BASE_REST_API_URL + "/delete/" + id))
//     }

//     addCar(carData) {
//         return axios.post(BASE_REST_API_URL+ '/addCar', carData);
//     }

//     getCarById(id){
//         return axios.get(BASE_REST_API_URL+"/getById/"+id)
//     }
//     updateCarById(id,car){
//         return axios.put(BASE_REST_API_URL+"/updateCar/"+id,car)
//     }

//     getFilteredAndSortedCars(sortBy, available, carTypes, fuelTypes, transmissionTypes, location) {
//         const carTypesQueryParam = carTypes ? carTypes.join(',') : '';
//         const fuelTypesQueryParam = fuelTypes ? fuelTypes.join(',') : '';
//         const transmissionTypesQueryParam = transmissionTypes ? transmissionTypes.join(',') : '';

//         // console.log("inside getFilteredAndSortedCars method......");
//         // console.log("value for carTypesQueryParam :",carTypesQueryParam);
//         // console.log("value for carTypes :",carTypes);
//         // console.log("value for fuelfuelTypesQueryParamTypes :",fuelTypesQueryParam);
//         // console.log("value for fuelTypes :",fuelTypes);
//         // console.log("value for transmissionTypesQueryParam :",transmissionTypesQueryParam);
//         // console.log("value for transmissionTypes :",transmissionTypes);

//         return axios.get(`${BASE_REST_API_URL}/getAll`, {
//             params: {   
//                 sortBy: sortBy,
//                 filterByAvailable: available,
//                 filterByCarType: carTypesQueryParam, // Convert array to comma-separated string
//                 filterByFuelType: fuelTypesQueryParam,
//                 filterByTransmissionType: transmissionTypesQueryParam,
//                 location: location
//             },
//         });
//     }

//     // getSortedCars(sortBy) {
//     //     return axios.get(`${BASE_REST_API_URL}/getAll`, {
//     //         params: {
//     //             sortBy: sortBy,
//     //         },
//     //     });
//     // }
    
//     // getFilteredCars(filterBy) {
//     //     return axios.get(`${BASE_REST_API_URL}/getAll`, {
//     //         params: {
//     //             filterBy: filterBy,
//     //         },
//     //     });
//     // }
// }
// export default new CarService



// import axios from "axios";

// const BASE_REST_API_URL = "http://localhost:8080/api/cars"
// class CarService {
//     async getAllCars() {
//         try {
//             const response = await axios.get(BASE_REST_API_URL + "/getAll");
//             return response;
//         } catch (error) {
//             console.error("Error fetching cars:", error);
//         }
//     }
//     deleteCar(id) {
//         return (axios.delete(BASE_REST_API_URL + "/delete/" + id))
//     }

//     addCar(carData) {
//         return axios.post(BASE_REST_API_URL+ '/addCar', carData);
//     }

//     getCarById(id){
//         return axios.get(BASE_REST_API_URL+"/getById/"+id)
//     }
//     updateCarById(id,car){
//         return axios.put(BASE_REST_API_URL+"/updateCar/"+id,car)
//     }

//     getFilteredAndSortedCars(sortBy, available, carTypes, fuelTypes, transmissionTypes, location) {
//         const carTypesQueryParam = carTypes ? carTypes.join(',') : '';
//         const fuelTypesQueryParam = fuelTypes ? fuelTypes.join(',') : '';
//         const transmissionTypesQueryParam = transmissionTypes ? transmissionTypes.join(',') : '';

//         // console.log("inside getFilteredAndSortedCars method......");
//         // console.log("value for carTypesQueryParam :",carTypesQueryParam);
//         // console.log("value for carTypes :",carTypes);
//         // console.log("value for carTypes by stringyfy  : ",JSON.stringify(carTypes));
//         // console.log("value for fuelfuelTypesQueryParamTypes :",fuelTypesQueryParam);
//         // console.log("value for fuelTypes :",fuelTypes);
//         // console.log("value for transmissionTypesQueryParam :",transmissionTypesQueryParam);
//         // console.log("value for transmissionTypes :",transmissionTypes);

//         return axios.get(`${BASE_REST_API_URL}/getAll`, {
//             params: {   
//                 sortBy: sortBy,
//                 filterByAvailable: available,
//                 filterByCarType: carTypesQueryParam, // Convert array to comma-separated string
//                 filterByFuelType: fuelTypesQueryParam,
//                 filterByTransmissionType: transmissionTypesQueryParam,
//                 location: location
//             },
//         });
//     }

//     // getSortedCars(sortBy) {
//     //     return axios.get(`${BASE_REST_API_URL}/getAll`, {
//     //         params: {
//     //             sortBy: sortBy,
//     //         },
//     //     });
//     // }
    
//     // getFilteredCars(filterBy) {
//     //     return axios.get(`${BASE_REST_API_URL}/getAll`, {
//     //         params: {
//     //             filterBy: filterBy,
//     //         },
//     //     });
//     // }
// }
// export default new CarService


import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/cars"


class CarService {

    getAllCars(token) {
        const response = axios.get(BASE_REST_API_URL + "/getAll",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response;

    }

    deleteCar(id,token) {
        // return (axios.delete(BASE_REST_API_URL + "/delete/" + id))
        const response = axios({
            method: 'delete',
            url: BASE_REST_API_URL + "/delete/" + id,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    }

    addCar(carData,token) {
        const response = axios({
            method:'post',
            url:BASE_REST_API_URL + '/addCar',
            data : carData,
            headers:{
                'Content-Type':'application/json',
                'Authorization' :`Bearer ${token}`
            }
        });
        return response;
    }

    getCarById(id,token) {
        return axios.get(BASE_REST_API_URL + "/getById/" + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
    updateCarById(id, car,token) {
        const response = axios({
            method:"put",
            url:BASE_REST_API_URL+"/updateCar/"+id,
            data:car,
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        });
        return response;
    }


    getFilteredAndSortedCars(sortBy, available, carTypes, fuelTypes, transmissionTypes, location, token) {
        const carTypesQueryParam = carTypes ? carTypes.join(',') : '';
        const fuelTypesQueryParam = fuelTypes ? fuelTypes.join(',') : '';
        const transmissionTypesQueryParam = transmissionTypes ? transmissionTypes.join(',') : '';

        // console.log("inside getFilteredAndSortedCars method......");
        // console.log("value for carTypesQueryParam :",carTypesQueryParam);
        // console.log("value for carTypes :",carTypes);
        // console.log("value for carTypes by stringyfy  : ",JSON.stringify(carTypes));
        // console.log("value for fuelfuelTypesQueryParamTypes :",fuelTypesQueryParam);
        // console.log("value for fuelTypes :",fuelTypes);
        // console.log("value for transmissionTypesQueryParam :",transmissionTypesQueryParam);
        // console.log("value for transmissionTypes :",transmissionTypes);

        return axios.get(`${BASE_REST_API_URL}/getAll`, {
            params: {
                sortBy: sortBy,
                filterByAvailable: available,
                filterByCarType: carTypesQueryParam, // Convert array to comma-separated string
                filterByFuelType: fuelTypesQueryParam,
                filterByTransmissionType: transmissionTypesQueryParam,
                location: location
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    getCarUnderPrice(price){
        return axios.get(BASE_REST_API_URL + "/priceLessThan/" + price, )
    }
}
export default new CarService();                            
       