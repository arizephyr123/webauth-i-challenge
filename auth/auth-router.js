const router = require("express").Router();

// const authRouter = require("../auth/auth-router.js");

const userRouter = require("../users/users-router.js");

router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.status(200).json({ message: "API active "})
})

module.exports = router;