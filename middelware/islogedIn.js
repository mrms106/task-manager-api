const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); 
    }
    res.status(401).json({ message: "Unauthorized access. Please log in." }); 
};

module.exports=isLoggedIn