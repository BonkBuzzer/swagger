const express = require('express')
const router = express.Router()
const { getUserById } = require('../controllers/auth.controllers')

router.get('/users/:uid', getUserById)
/**
 * @swagger
 * /users/{uid}:
 *   get:
 *     tags:
 *       - users
 *     name: Fetch user data
 *     summary: Fetch user data by UID
 *     description: "Fetches the user's data based on the UID provided in the path."
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uid
 *         in: path
 *         required: true
 *         description: The UID of the user to fetch
 *         type: string
 *         example: bc
 *     responses:
 *       '200':
 *         description: User data fetched successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       '404':
 *         description: UID was not provided
 *       '401':
 *         description: Invalid Token / Not Authorized
 */

module.exports = router