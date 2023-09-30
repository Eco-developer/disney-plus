/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Disney+ API.
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
 */