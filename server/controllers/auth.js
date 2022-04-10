// req: containing the info what we sending from the front-end
// res: 

const signup = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
};
const login = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
};

module.exports = { signup, login }