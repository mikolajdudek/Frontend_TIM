import axios from "axios";

const TRENER_API_BASE_URL = "http://localhost:8082/api/allTrener"

class TrenerService{
    getTrenerzy(){
        return axios.get(TRENER_API_BASE_URL);
    }
}

export default new TrenerService()