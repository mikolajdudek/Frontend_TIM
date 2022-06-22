import axios from "axios";

const WARDS_API_BASE_URL = "http://localhost:8081/api/wards";

class WardService{

    getWards(){
        return axios.get(WARDS_API_BASE_URL);
    }

    addWard(ward){
        return axios.post(WARDS_API_BASE_URL, ward);
    }

    getWardById(wardId){
        return axios.get(WARDS_API_BASE_URL + '/' + wardId);
    }

    updateWard(ward, wardId){
        return axios.put(WARDS_API_BASE_URL + '/' + wardId, ward);
    }

    deleteWard(wardId){
        return axios.delete(WARDS_API_BASE_URL + '/' + wardId);
    }
}

export default new WardService()