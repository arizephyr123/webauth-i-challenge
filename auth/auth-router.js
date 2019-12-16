const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");

const userRouter = require("../users/users.router.js");

router.use('/auth', authRouter);

router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.json({ message: "API active "})
})

module.exports = router;