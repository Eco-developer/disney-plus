import sessionConfig from './session/index.js';
import routes from './routes-handlers/index.js';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import path from 'path';
import { connectDb } from './db/index.js';
import { Strategy } from 'passport-local';
import {
	localStrategyCallback,
	serializeCallback,
	deSerializeCallback,
} from './passaport-callbacks/index.js';
import 'dotenv/config';
;
const app = express();

//Midlewares:
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(sessionConfig);

// Passport

app.use(passport.initialize());
app.use(passport.session());

const options = {
	usernameField: 'user_email',
	passwordField: 'user_password',
};

passport.use(new Strategy(options, localStrategyCallback));
passport.serializeUser(serializeCallback);
passport.deserializeUser(deSerializeCallback);

//Routes:

app.use('/api/v1/sign-up', routes.signUpRouter);
app.use('/api/v1/login', routes.loginRouter);
app.use('/api/v1/auth-user', routes.authUserRouter);
app.use('/api/v1/logout', routes.logoutRouter);
app.use('/api/v1/update', routes.updateUserRouter);

if (process.env.NODE_ENV === 'production') {
	const dir = __dirname.replace('src', '').replace('build', '');
	app.use(express.static(path.join(dir, '/client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(dir, 'client', 'build', 'index.html'));
	})

} else {
	app.get('/', (req, res) => {
		res.send('disney-plus-clone server development');
	});
}

//Config:

const PORT = process.env.PORT || 4040;

connectDb().then(async () => {
	app.listen(PORT)
	console.log(`app listenin here -> ${PORT} `)
});