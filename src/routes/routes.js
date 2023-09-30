import { Router } from 'express';
import { authenticationRoutes } from './authentication/authentication.routes';
import { userRoutes } from './user/user.routes';

const routes = Router();

authenticationRoutes(routes);

userRoutes(routes);

export {
    routes,
}