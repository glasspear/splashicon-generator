var ig = require('imagemagick');

ig.convert([
        'splash-rory.ai', 
        '-colorspace', 
        'CMYK', 
        '-resize', 
        '2208x2208',
        '-gravity',
        'center',
        '-extent',
        '2208x2208',
        'splash.png'
    ],
    function(err, stdout){
      if (err) throw err;
      console.log('stdout:', stdout);
    }
);