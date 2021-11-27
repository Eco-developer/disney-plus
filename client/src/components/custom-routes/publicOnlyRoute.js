import {
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice.js";
import { CATALOGUE_MOVIES } from '../../const/routes.js';

const PublicOnlyRoute = ({children, ...rest}) => {
	const user = useSelector(selectUser);
 	return (
		!user ?
 		<Route {...rest}>
 			{children}
 		</Route> : <Redirect to={CATALOGUE_MOVIES}/> 			
  	);
}

export default PublicOnlyRoute;