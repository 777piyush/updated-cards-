import axios from "axios";

const BASE_REST_API_URL ="http://localhost:8080/api/authenticate"
class AuthenticationService {
    registerUser(user) {
        return (axios.post(BASE_REST_API_URL+"/register",user))
    }

    loginUser(user) {
        return (axios.post(BASE_REST_API_URL+"/login",user))
    }
}
export default new AuthenticationService