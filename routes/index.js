var express = require('express');
var panorama = require('google-panorama-by-location');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
   var location = [ req.query.lat, req.query.lng ]
   panorama(location, function (err, result) {
      if (!err && result) {
          // Heading
          res.json({ "success": true, "heading": result.camera_rotation.heading });
      } else {
          res.json({ "success": false, "error":"Could not get heading for given lat and long." });
      }

   });

});

module.exports = router;
