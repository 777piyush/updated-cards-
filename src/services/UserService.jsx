// import axios from "axios";

// const BASE_REST_API_URL ="http://localhost:8080/api/users"
// class UserService {
//     getAllUser() {
//         return (axios.get(BASE_REST_API_URL+"/all"))
//     }

//     getUserById(id) {
//         return (axios.get(BASE_REST_API_URL+"/userById/"+id))
//     }
    
//     updateUser(id,user) {
//         return (axios.put(BASE_REST_API_URL+"/update/"+id,user))
//     }

//     deleteUser(id) {
//         return (axios.delete(BASE_REST_API_URL+"/delete/"+id))
//     }
    
// }
// export default new UserService

// import axios from "axios";

// const BASE_REST_API_URL ="http://localhost:8080/api/users"
// class UserService {
//     getAllUser() {
//         return (axios.get(BASE_REST_API_URL+"/all"))
//     }

//     getUserById(id) {
//         return (axios.get(BASE_REST_API_URL+"/userById/"+id))
//     }
    
//     updateUser(id,user) {
//         return (axios.put(BASE_REST_API_URL+"/update/"+id,user))
//     }

//     deleteUser(id) {
//         return (axios.delete(BASE_REST_API_URL+"/delete/"+id))
//     }
    
// }
// export default new UserService

import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/users";
class UserService {
    getAllUser(token) {
        return axios.get(BASE_REST_API_URL + "/all", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }


    getUserById(id, token) {
        return axios.get(BASE_REST_API_URL + "/userById/" + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    updateUser(id, user, token) {
        const response = axios({
            method: 'put',
            url: BASE_REST_API_URL + '/update/' + id,
            data: user,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;
    }

    deleteUser(id, token) {
        const response = axios({
            method: 'delete',
            url: BASE_REST_API_URL + '/delete/' + id,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    }

}
export default new UserService