const router = require("express").Router();
const pool = require("../db");

// Registering
router.post('/', async (req, res) => {
    try {

        //1. destructure the req.body (name, email, password).
        const { name, email, password } = req.body;

        //2. check if user exists (if user exists then throw error).
        const user
        
        //3. bcrypt the user password.

        //4. enter the new user inside our database.

        //5. generating our jwt token.

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;