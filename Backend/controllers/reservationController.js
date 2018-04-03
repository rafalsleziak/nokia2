var Device = require('../models/device');
var Reservation=require('../models/reservations');
exports.index = function(req, res, next) {
  res.json({express: 'API works!'});
  console.log('hello there');
}


export.reservation_list = function (req, res, next) {
  Reservation.find(function(err reservations)) {
    if (err)
    res.send(err);
    res.json(reservation);

    export.index=function(res,req) {
      req.render('index');
    }
  }
}

exports.reservation_list = function(req, res) {
  models.reservations.findAll({  }).then((result) => {
  });
};

export.reservation_detail=function(req,res) {
models.reservations.findOne ({where:{id:req.params.id }}.then(res))

}
