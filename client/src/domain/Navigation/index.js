import Header from '../../components/Header/index.js';
import Home from '../Home/index.js';
import CatalogueMoviesPage from '../Movies/index.js';
import CatalogueSeriesPage from '../Series/index.js';
import MovieDetailsPage from '../movie-page/index.js';
import SerieDetailsPage from '../serie-page/index.js';
import ProfilePage from '../Profile/index.js';
import WatchList from '../watch-list/index.js'
import SignInPage from '../sign-in/index.js';
import SignUpPage from '../sign-up/index.js';
import {
	PrivateRoute,
	PublicOnlyRoute,
} from '../../components/custom-routes/index.js';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect  
} from "react-router-dom";
import * as ROUTES from '../../const/routes.js'

const Navigation = () => (
	<Router>
    <Header />
    <Switch>
      <Route exact path={ROUTES.LANDING_PAGE}>
        <Home/>
      </Route>
      <PublicOnlyRoute path={ROUTES.SIGNUP_PAGE}>
        <SignUpPage/>
      </PublicOnlyRoute>
      <PublicOnlyRoute path={ROUTES.SIGNIN_PAGE}>
        <SignInPage/>
      </PublicOnlyRoute>
      <PrivateRoute path={ROUTES.PROFILE_PAGE}>
        <ProfilePage/>
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.CATALOGUE_MOVIES}>
        <CatalogueMoviesPage/>
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.CATALOGUE_SERIES}>
        <CatalogueSeriesPage/>
      </PrivateRoute>
      <PrivateRoute path={ROUTES.WATCH_LIST}>
        <WatchList/>
      </PrivateRoute>
      <PrivateRoute path={ROUTES.MOVIE_PAGE}>
        <MovieDetailsPage/>
      </PrivateRoute>
      <PrivateRoute path={ROUTES.SERIE_PAGE}>
        <SerieDetailsPage/>
      </PrivateRoute>
      <Redirect to={ROUTES.LANDING_PAGE}/>
    </Switch>
  </Router>
)

export default Navigation;