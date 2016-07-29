var panorama = require('google-panorama-by-location')
 
// var location = [ 51.50700703827454, -0.12791916931155356 ]

 var location = [ 41.719540, -70.588950 ]
panorama(location, function (err, result) {
  if (err) throw err
  
  // Heading
  console.log('Heading: ' + result.camera_rotation.heading); 

  // pano ID 
  // console.log(result.id)
 
  // actual latitude, longitude 
  console.log(result.latitude)
  console.log(result.longitude)
 
  // other details from Google API 
  // console.log(result.copyright)
})
