const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        // .exec(function (err, users) {
        //     res.json(users);
        // await User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
})



router.route('/register').post((req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    const newUser = new User(user)
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))

})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})

router.route('/update/:id').post((req, res) => {
    User.findByIdAndUpdate(req.params.id, { password: req.body.password })
        .then(() => res.json('updated'))
        .catch(err => res.status(400).json(err))
})

router.route('/login').post((req, res) => {

    User.find({ username: req.body.username, password: req.body.password })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
})

module.exports = router