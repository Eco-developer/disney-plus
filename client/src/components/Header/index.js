import HeaderItems from '../header-items/index.js';
import axios from 'axios';
import DISNEY_API from '../../const/disneyApi.js';
import {
  HeaderContainer,
  Logo,
  SignUpButton,
} from './style.js';
import { Button } from '../../global-styles/index.js';
import { 
  useSelector,
  useDispatch,
} from "react-redux";
import { 
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  selectUser,
  setSignOutState,
} from "../../features/user/userSlice.js";
import {
  LANDING_PAGE,
  SIGNUP_PAGE,
  SIGNIN_PAGE,
} from '../../const/routes.js';

const Header = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { pathname } =  useLocation();
  
  const goToSignIn = () => {
    if (!pathname.includes(SIGNIN_PAGE)) {
      push(SIGNIN_PAGE);
    }
  }

  const goToSignUp = () => {
    if (!pathname.includes(SIGNUP_PAGE)) {
      push(SIGNUP_PAGE);
    }
  }

  const goToHome = () => {
    if (pathname !== LANDING_PAGE) {
      push(LANDING_PAGE);
    }
  }

  const signOut = async () => {
    try {
      await axios.get(
        `${DISNEY_API}logout`,
        { withCredentials: true }
      )
      dispatch(setSignOutState());
    } catch (error){
      console.log(error)
    }
  }

  return (
    <HeaderContainer>
      <Logo onClick={goToHome}>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {user ? (
        <>
          <HeaderItems/>
          <Button onClick={signOut}>
            sign out
          </Button>
        </>
      ) : (
        <div>
          <SignUpButton onClick={goToSignUp}>
            Sign up
          </SignUpButton>
          <Button onClick={goToSignIn}>
            login
          </Button>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;