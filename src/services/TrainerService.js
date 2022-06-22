import axios from "axios";

const TRAINERS_API_BASE_URL = "http://localhost:8081/api/trainers";

class TrainerService{

    getTrainers(){
        return axios.get(TRAINERS_API_BASE_URL);
    }

    addTrainer(trainer){
        return axios.post(TRAINERS_API_BASE_URL, trainer);
    }

    getTrainerById(trainerId){
        return axios.get(TRAINERS_API_BASE_URL + '/' + trainerId);
    }

    updateTrainer(trainer, trainerId){
        return axios.put(TRAINERS_API_BASE_URL + '/' + trainerId, trainer);
    }

    deleteTrainer(trainerId){
        return axios.delete(TRAINERS_API_BASE_URL + '/' + trainerId);
    }
}

export default new TrainerService()