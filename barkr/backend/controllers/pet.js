const Pet = require('../models/pet');

const me = (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
};

const signUp = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.send('Body required in POST request');
    Pet.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        city: req.body.city,
        state: req.body.state,
        likes: []
    })
        .then(pet => res.json({
            success: true,
            pet: pet
        }))
        .catch(err => res.json({
            success: false,
            message: err
        }));
};

const login = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.send('Body required in POST request');
    Pet.findOne({email: req.body.email})
        .then(pet => {
            if (!pet) return res.json({
                success: false,
                message: `Incorrect email`
            });
            pet.comparePassword(req.body.password, (err, isMatch) => {
                if (err) return res.json({
                    success: false,
                    message: `bcrypt compare failed`
                });
                if (isMatch) {
                    const token = pet.generateJwt();
                    return res.json({
                        success: true,
                        token: token
                    });
                }
                else {
                    return res.json({
                        success: false,
                        message: `Incorrect password`
                    });
                }
            });
        })
        .catch(err => res.json({
            success: false,
            message: `Error finding email; ${err}`
        }));
};

const addLikedPet = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.send('Body required in POST request');
    Pet.findById(req.user.id)
        .then(pet => {
            pet.likes.push(req.body.id);
            pet.save()
                .then(() => res.json({
                    success: true
                }))
                .catch(err => console.error(`Error adding liked pet; ${err}`));
        })
        .catch(err => console.error(`Error finding pet; ${err}`));
};

const petsAround = (req, res) => {
    Pet.find({
        _id: {
            $ne: req.user.id,
        }
    })
    .then(pets => {
        res.json({
            success: true,
            pets: pets
        })
    }).catch(err => console.error(`Error finding pets around: ${err}`));
};

module.exports = {
    petsAround,
    addLikedPet,
    login,
    signUp,
    me
};
