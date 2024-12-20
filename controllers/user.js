const passport = require('passport');
const User = require('../modules/user'); 

// User Registration
module.exports.signup = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const user = new User({ email, name });

        User.register(user, password, (err, registeredUser) => {
            if (err) {
                return res.status(500).json({ message: 'Registration failed', error: err.message });
            }

            // Automatically log in 
            req.login(registeredUser, (loginErr) => {
                if (loginErr) {
                    return res.status(500).json({ message: 'Login after registration failed', error: loginErr.message });
                }
                res.status(201).json({ message: 'Registration successful', user: registeredUser });
            });
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Something went wrong ", error: err.message });
    }
};

// User Login
module.exports.login = (req, res) => {
    res.status(200).json({ message: 'Login successful', user: req.user });
};

// User Logout
module.exports.logout = async (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to logout', error: err.message });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
};
