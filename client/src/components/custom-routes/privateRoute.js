import {
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice.js";
import { LANDING_PAGE } from '../../const/routes.js';

const PrivateRoute = ({children, ...rest}) => {
  const user = useSelector(selectUser);
 	return (
		<Route
      {...rest}
      render={() =>
        user ? (
          children
      ) : (
        	 <Redirect
            to={LANDING_PAGE}
          />
        )
      }
    />		
  );
}

export default PrivateRoute;