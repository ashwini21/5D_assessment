const BaseController = require('../shared/BaseController');
const momentModel = require('./moment.model');
class MomentController extends BaseController {
    createMoment(reqBody,req, res) {
      if(req.session.email){
            return momentModel
              .create({
                name: reqBody.name,
                description: reqBody.description,
                is_deleted: false,
                is_updated : false
              })
              .then(function(moment) {
                if (moment) {
                  res.status(200).send(moment);
                } else {
                  res.status(400).send("Error in inserting new record");
                }
              });
          }
          else
          return res.status(404).send("User not found. Please Login First");
    }

    updateMoment(reqBody,req,res){
      if(req.session.email){
        return momentModel
        .update({
            name : reqBody.name,
            description: reqBody.description,
            is_deleted: true,
            is_updated : true
        })
        .then(function(moment) {
            if (moment) {
              res.status(200).send(moment);
            } else {
              res.status(400).send("Error in updating a record");
            }
          });
        }
        else
        return res.status(404).send("User not found. Please Login First");
    }
    listMoment(reqBody,req,res){
      if(req.session.email){
        return momentModel
              .findAll({})
              .then(function(moment) {
                if (moment) {
                  res.status(200).send(moment);
                } else {
                  res.status(400).send("Error in fetching records");
                }
              });
      }
      else
        return res.status(404).send("User not found. Please Login First");

    }
}

module.exports = MomentController;

