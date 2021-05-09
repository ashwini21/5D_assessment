const BaseController = require('../shared/BaseController');
const userModel = require('./auth.user.model');
class AuthController extends BaseController {
    createUser(reqBody,req, res) {
      if(req.session.email){
            return userModel
              .create({
                name: reqBody.name,
                email: reqBody.email,
                password: reqBody.password
              })
              .then(function(user) {
                if (user) {
                  res.status(200).send(user);
                } else {
                  res.status(400).send("Error in inserting new record");
                }
              });
          }
        else
          return res.status(404).send("User not found. Please Login First");
        }
      loginUser(reqBody,req, res){
        return userModel
        .findOne({
          where: {email: reqBody.email,
                  password : reqBody.password
                }
        })
        .then(function(user) {
          if (user) {
            req.session.email = reqBody.email;
            res.status(200).send(user);
          } else {
            res.status(400).send("No record found");
          }
        });
      }
      logoutUser(reqBody,req, res){
        req.session.destroy();
        res.status(200).send("User logged out Successfully");
      }
}

module.exports = AuthController;

