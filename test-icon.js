var ig = require('imagemagick');

ig.convert([
        'Icon2-rory.ai', 
        '-colorspace', 
        'CMYK', 
        '-resize', 
        '1024x1024',
        '-gravity',
        'center',
        '-extent',
        '1024x1024',
        'icon.png'
    ],
    function(err, stdout){
      if (err) throw err;
      console.log('stdout:', stdout);
    }
);