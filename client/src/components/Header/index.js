import {
  HeaderContainer,
  Logo,
  HeaderItems,
  SignUpButton,
} from './style.js';
import { Button } from '../../global-styles/index.js';
import { 
  useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUser,
} from "../../features/user/userSlice.js";
import {
  LANDING_PAGE,
  SIGNUP_PAGE,
  SIGNIN_PAGE,
} from '../../const/routes.js';

const Header = (props) => {
  const { push } = useHistory();
  const user = useSelector(selectUser);
  
  const goToSignIn = () => {
    push(SIGNIN_PAGE);
  }

  const goToSignUp = () => {
    push(SIGNUP_PAGE);
  }

  const goToHome = () => {
    push(LANDING_PAGE);
  }

  return (
    <HeaderContainer>
      <Logo onClick={goToHome}>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {user ? (
        <>
          <HeaderItems>
            <li href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </li>
            <li>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </li>
            <li>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </li>
            <li>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </li>
            <li>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </li>
            <li>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </li>
          </HeaderItems>
          
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