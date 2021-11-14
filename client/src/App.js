import  Navigation from './domain/Navigation/index.js'
import axios from 'axios';
import DISNEY_API from './const/disneyApi.js';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route 
} from "react-router-dom";
import { setUserLoginDetails } from './features/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import "./App.css";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchAuthUser = async () => {
			try {
				const response = await axios.get(
					`${DISNEY_API}auth-user`,
					{ withCredentials: true }
				)
				const { data } = response;
				dispatch(setUserLoginDetails(data))
				console.log(data)
			} catch (error) {
				console.log(error.response?.data);
			}
		}
		fetchAuthUser()
	}, [])
  	return (
    	<div className="App">
    	 	<Navigation/>
    	</div>
  	);
}

export default App;
