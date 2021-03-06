import axios from 'axios';

class AuthenticationService {
	// send username, password to the SERVER
	executeJwtAuthenticationService(username, password) {
		return axios.post('http://localhost:8081/login', {
			username,
			password
		});
	}

	createJWTToken(token) {
		return 'Bearer ' + token;
	}

	isUserLoggedIn() {
		//let user = sessionStorage.getItem('authenticatedUser')
		const token = localStorage.getItem('token');
		console.log('===UserloggedInCheck===');
		console.log(token);

		if (token) {
			return true;
		}

		return false;
	}

	getLoggedInUserName() {
		//let user = sessionStorage.getItem('authenticatedUser')
		let user = localStorage.getItem('USER');
		if (user === null) return '';
		return user;
	}
}

axios.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		console.log(token);
		if (token) {
			config.headers['Authorization'] = token;
		}
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	error => {
		Promise.reject(error);
	}
);

export default new AuthenticationService();