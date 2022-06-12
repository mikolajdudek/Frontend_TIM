import axios from "axios";

const PODOPIECZNY_API_BASE_URL = "http://localhost:8082/api/allPodopieczny"

class PodopiecznyService {
    getPodopiecznych(){
        return axios.get(PODOPIECZNY_API_BASE_URL );
    }
}
export default new PodopiecznyService()