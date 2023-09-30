import {
    signup,
	login,
} from "../../controllers";
import { 
    signupValidators,
    loginValidators,
    checkInputsErrors 
}  from "../../middlewares";
import {
    LOGIN,
    SIGNUP,
} from "../../const/routes";

export const authenticationRoutes = (routes) => {  
    routes.post(LOGIN, loginValidators, checkInputsErrors, login);
    
    routes.post(SIGNUP, signupValidators, checkInputsErrors, signup);
}