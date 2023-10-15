/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints.
 * /api/v1/login:
 *   post:
 *     summary: Login into your account.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *       200:
 *         description: Returns an object with the authenticated user's token.
 *       400:
 *         description: Returns an object with the errors messages of the login form values.
 * 
 * /api/v1/sign-up:
 *   post:
 *     summary: Register in the application.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - user_name
 *              - user_email
 *              - user_password
 *              - phone_number
 *            properties:
 *              user_name:
 *                type: string
 *              user_email:
 *                type: string
 *              user_password:
 *                type: string
 *              phone_number:
 *                type: string
 *     responses:
 *       200:
 *         description: Returns an object with the signed up user's token.
 *       400:
 *         description: Returns an object with the errors messages of the signup form values.
 * 
 *   name: User
 *   description: User endpoints.
 * /api/v1/update/user/{userId}:
 *   put:
 *     summary: Modify the user's watchlist.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         requiered: true
 *         description: The user's id.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - watchlist_item
 *            properties:
 *              watchlist_item:
 *                type: object
 *     responses:
 *       200:
 *         description: Returns a token with the updated user information.
 *       400:
 *         description: Returns an object with the errors messages of the login form values.
 */