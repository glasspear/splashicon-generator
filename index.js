var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
var ig = require('imagemagick');
var colors = require('colors');
var _ = require('underscore');
var Q = require('q');
var nodeFs = require('node-fs');

/**
 * Check which platforms are added to the project and return their icon names and sized
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformIcons = function() {
    var deferred = Q.defer();
    var platforms = [];
    platforms.push({
        name: 'ios',
        isAdded: fs.existsSync('platforms/ios'),
        iconsPath: 'resources/icons/ios/',
        icons: [
            // Default icon (avoid Apple submit error ITMS-90032)
            { name: "../../../icon.png", size: 57 },
            // App Store
            { name: "icon-1024.png", size: 1024 },
            // iOS 8.0+, iPhone 6 Plus
            { name: "icon-60@3x.png", size: 180 },
            // iOS 7.0+, iPhone / iPod Touch  -->
            { name: "icon-60.png", size: 60 },
            { name: "icon-60@2x.png", size: 120 },
            // iPad -->
            { name: "icon-76.png", size: 76 },
            { name: "icon-76@2x.png", size: 152 },
            // iOS 6.1, Spotlight Icon -->
            { name: "icon-40.png", size: 40 },
            { name: "icon-40@2x.png", size: 80 },
            // iPhone / iPod Touch -->
            { name: "icon.png", size: 57 },
            { name: "icon@2x.png", size: 114 },
            // iPad -->
            { name: "icon-72.png", size: 72 },
            { name: "icon-72@2x.png", size: 144 },
            // iPhone Spotlight and Settings Icon -->
            { name: "icon-small.png", size: 29 },
            { name: "icon-small@2x.png", size: 58 },
            // iPad Spotlight and Settings Icon -->
            { name: "icon-50.png", size: 50 },
            { name: "icon-50@2x.png", size: 100 }
        ]
    });

    platforms.push({
        name: 'android',
        iconsPath: 'resources/icons/android/',
        isAdded: fs.existsSync('platforms/android'),
        icons: [
            { name: 'icon-ldpi.png', size: 36 },
            { name: 'icon-mdpi.png', size: 48 },
            { name: 'icon-hdpi.png', size: 72 },
            { name: 'icon-xhdpi.png', size: 96 },
            { name: 'icon-xxhdpi.png', size: 144 },
            { name: 'icon-xxxhdpi.png', size: 192 }
        ]
    });

    // TODO: hack - this should just be done right in Cordova
    platforms.push({
        name: 'blackberry10',
        iconsPath: 'www/resources/icons',
        isAdded: fs.existsSync('platforms/blackberry10'),
        icons: [
            { name: 'icon-90.png', size: 90 },
            { name: 'icon-96.png', size: 96 },
            { name: 'icon-110.png', size: 110 },
            { name: 'icon-144.png', size: 144 }
        ]
    });

    platforms.push({
        name: 'wp8',
        iconsPath: 'resources/icons/wp8/',
        isAdded: fs.existsSync('platforms/wp8'),
        icons: [
            // Icon
            { name: 'ApplicationIcon.png', size: 99 },
            // Tile Icon
            { name: 'Background.png', size: 159 }
        ]
    });

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * Check which platforms are added to the project and return their splash screen names and sizes
 *
 * @param  {String} projectName
 * @return {Promise} resolves with an array of platforms
 */
var getPlatformSplashs = function() {
    var deferred = Q.defer();
    var platforms = [];
    platforms.push({
        name: 'ios',
        isAdded: fs.existsSync('platforms/ios'),
        splashPath: 'resources/splash/ios/',
        splash: [
            // iPhone
            { name: 'Default.png', width: 320, height: 480 },
            // iPhone Retina
            { name: 'Default@2x.png', width: 640, height: 960 },
            // iPhone 5 Retina
            { name: 'Default-568h@2x.png', width: 640, height: 1136 },
            // iPhone 6
            { name: 'Default-667h@2x.png', width: 750, height: 1334 },
            // iPhone 6 Plus
            { name: 'Default-Portrait-736h@3x.png', width: 1242, height: 2208 },
            // iPhone 6 Plus
            { name: 'Default-Landscape-736h@3x.png', width: 2208, height: 1242 },
            // iPad
            { name: 'Default-Portrait.png', width: 768, height: 1024 },
            // iPad
            { name: 'Default-Landscape.png', width: 1024, height: 768 },
            // iPad Retina
            { name: 'Default-Portrait@2x.png', width: 1536, height: 2048 },
            // iPad Retina
            { name: 'Default-Landscape@2x.png', width: 2048, height: 1536 }
        ]
    });
    platforms.push({
        name: 'android',
        isAdded: fs.existsSync('platforms/android'),
        splashPath: 'resources/splash/android/',
        splash: [
            { name: 'ldpi.png', width: 200, height: 320},
            { name: 'landscape-ldpi.png', width: 320, height: 200 },
            { name: 'mdpi.png', width: 320, height: 480 },
            { name: 'landscape-mdpi.png', width: 480, height: 320 },
            { name: 'hdpi.png', width: 480, height: 800 },
            { name: 'landscape-hdpi.png', width: 800, height: 480 },
            { name: 'xhdpi.png', width: 720, height: 1280 },
            { name: 'landscape-xhdpi.png', width: 1280, height: 720 }
        ]
    });

    // TODO: hack - this should just done right in Cordova
    platforms.push({
        name: 'blackberry10',
        isAdded: fs.existsSync('platforms/blackberry10'),
        splashPath: 'www/resources/splash/',
        splash: [
            { name: 'splash-768X1280.png', width: 768, height: 1280 },
            { name: 'splash-1280X768.png', width: 1280, height: 768 },
            { name: 'splash-1280X720.png', width: 1280, height: 720 },
            { name: 'splash-720X1280.png', width: 720, height: 1280 },
            { name: 'splash-720X720.png', width: 720, height: 720},
            { name: 'splash-1440X1440.png', width: 1440, height: 1440}
        ]
    });
    platforms.push({
        name: 'wp8',
        isAdded: fs.existsSync('platforms/wp8'),
        splashPath: 'resources/splash/wp8/',
        splash: [
            { name: 'SplashScreenImage.jpg', width: 480, height: 800}
        ]
    });

    deferred.resolve(platforms);
    return deferred.promise;
};

/**
 * @var {Object} settings - currently just paths, ext and file names to concat
 * TODO: add option to store these in a config file
 */
var settings = {
    DEFAULT_FOLDER: 'resources/',
    FILE_EXT: ['.ai','.png'],
    ICON_FILENAME: 'icon',
    SPLASH_FILENAME: 'splash',
    DEST_FILE_EXT: '.png'
};

/**
 * @var {Object} console utils
 */
var display = {};
display.success = function(str) {
    str = '✓  '.green + str;
    console.log('  ' + str);
};
display.error = function(str) {
    str = '✗  '.red + str;
    console.log('  ' + str);
};
display.header = function(str) {
    console.log('');
    console.log(' ' + str.cyan.underline);
    console.log('');
};

/**
 * Resizes and creates a new icon in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} icon
 * @return {Promise}
 */
var generateIcon = function(platform, icon) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(platform.iconsPath, icon.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }
        ig.resize({
            srcPath: settings.DEFAULT_FOLDER + settings.ICON_FILENAME + settings.DEST_FILE_EXT,
            dstPath: filePath,
            quality: 1,
            format: icon.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: icon.size,
            height: icon.size,
        }, function(err, stdout, stderr) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(icon.name + ' created');
            }
        });
    } catch (error) {
        deferred.reject(err);
    }
    return deferred.promise;
};

/**
 * Generates icons based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateIconsForPlatform = function(platform) {
    var deferred = Q.defer();
    display.header('Generating Icons for ' + platform.name);
    var all = [];
    var icons = platform.icons;
    icons.forEach(function(icon) {
        all.push(generateIcon(platform, icon));
    });
    Q.all(all).then(function() {
        deferred.resolve();
    }).catch(function(err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers icon generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateIcons = function(platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];
    _(platforms).where({
        isAdded: true
    }).forEach(function(platform) {
        sequence = sequence.then(function() {
            return generateIconsForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function() {
        deferred.resolve();
    });
    return deferred.promise;
};


/**
 * Checks if a valid icon file exists + generates PNG from AI if needed
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
 // TODO: split out AI generation
var validIconExists = function() {
    var sourceFile;

    var sourceFiles = _.map(settings.FILE_EXT, function(ext) {
        var fileDetails = {
            path: settings.DEFAULT_FOLDER + settings.ICON_FILENAME + ext,
            ext: ext,
            filename: settings.ICON_FILENAME,
            dir: settings.DEFAULT_FOLDER
        }
        return fileDetails;
    });

    for (var i = 0, len = sourceFiles.length; i < len; i++) {
        if (fs.existsSync(sourceFiles[i].path)) {
            sourceFile = sourceFiles[i];
            break;
        }
    }

    if(!sourceFile) {
        display.error('Unable to find a valid icon source file! Please create a valid icon source file and re-run.');
        return false;
    } else {
        display.success('A valid icon source file was found: ' + sourceFile.path);
    }

    if(sourceFile.ext === '.ai') {
        var deferred = Q.defer();
        console.log('AI file found, generating icon source PNG...');
        ig.convert(
            [
                sourceFile.path, 
                '-colorspace', 
                'CMYK', 
                '-resize', 
                '1024x1024',
                '-gravity',
                'center',
                '-extent',
                '1024x1024',
                settings.DEFAULT_FOLDER + settings.ICON_FILENAME + '.png'
            ],
            function(err, stdout){
                if (err) {
                    display.error('Something went wrong generating icon PNG from AI')
                    deferred.resolve(false);
                } else {
                    console.log('stdout:', stdout);
                    display.success('Icon source PNG created from AI successfully')
                    deferred.resolve(true);
                }
            }
        );
        return deferred.promise;
    } else {
        return true;
    }
};


/**
 * Crops and creates a new splash in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} splash
 * @return {Promise}
 */
var generateSplash = function(platform, splash) {
    var deferred = Q.defer();
    try {
        var filePath = path.join(platform.splashPath, splash.name);
        var filedirName = path.dirname(filePath);
        if (!fs.existsSync(filedirName)) {
            nodeFs.mkdirSync(filedirName, '0777', true);
        }
        ig.crop({
            srcPath: settings.DEFAULT_FOLDER + settings.SPLASH_FILENAME + settings.DEST_FILE_EXT,
            dstPath: filePath,
            quality: 1,
            format: splash.name.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
            width: splash.width,
            height: splash.height,
        }, function(err, stdout, stderr) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve();
                display.success(splash.name + ' created');
            }
        });
    } catch (error) {
        deferred.reject(err);
    }
    return deferred.promise;
};

/**
 * Generates splash based on the platform object
 *
 * @param  {Object} platform
 * @return {Promise}
 */
var generateSplashForPlatform = function(platform) {
    var deferred = Q.defer();
    display.header('Generating splash screen for ' + platform.name);
    var all = [];
    var splashes = platform.splash;
    splashes.forEach(function(splash) {
        all.push(generateSplash(platform, splash));
    });
    Q.all(all).then(function() {
        deferred.resolve();
    }).catch(function(err) {
        console.log(err);
    });
    return deferred.promise;
};

/**
 * Goes over all the platforms and triggers splash screen generation
 *
 * @param  {Array} platforms
 * @return {Promise}
 */
var generateSplashes = function(platforms) {
    var deferred = Q.defer();
    var sequence = Q();
    var all = [];
    _(platforms).where({
        isAdded: true
    }).forEach(function(platform) {
        sequence = sequence.then(function() {
            return generateSplashForPlatform(platform);
        });
        all.push(sequence);
    });
    Q.all(all).then(function() {
        deferred.resolve();
    });
    return deferred.promise;
};
/**
 * Checks if a valid splash file exists + creates PNG from AI if needed
 *
 * @return {Promise} resolves if exists, rejects otherwise
 */
  // TODO: split out AI generation
var validSplashExists = function() {
    var sourceFile;

    var sourceFiles = _.map(settings.FILE_EXT, function(ext) {
        var fileDetails = {
            path: settings.DEFAULT_FOLDER + settings.SPLASH_FILENAME + ext,
            ext: ext,
            filename: settings.SPLASH_FILENAME,
            dir: settings.DEFAULT_FOLDER
        }
        return fileDetails;
    });

    for (var i = 0, len = sourceFiles.length; i < len; i++) {
        if (fs.existsSync(sourceFiles[i].path)) {
            sourceFile = sourceFiles[i];
            break;
        }
    }

    if(!sourceFile) {
        display.error('Unable to find a valid splash screen source file! Please create a valid splash screen source file and re-run.');
        return false;
    } else {
        display.success('A valid splash screen source file was found: ' + sourceFile.path);
    }

    if(sourceFile.ext === '.ai') {
        var deferred = Q.defer();
        console.log('AI file found, generating splash screen source PNG...');
        ig.convert(
            [
                sourceFile.path, 
                '-colorspace', 
                'CMYK', 
                '-resize', 
                '2208x2208',
                '-gravity',
                'center',
                '-extent',
                '2208x2208',
                settings.DEFAULT_FOLDER + settings.SPLASH_FILENAME + '.png'
            ],
            function(err, stdout){
                if (err) {
                    display.error('Something went wrong generating splash screen PNG from AI')
                    deferred.resolve(false);
                } else {
                    console.log('stdout:', stdout);
                    display.success('Splash screen source PNG created from AI successfully')
                    deferred.resolve(true);
                }
            }
        );
        return deferred.promise;
    } else {
        return true;
    }
};

display.header('Checking Splash & Icon');

Q.all([validIconExists(), validSplashExists()])
    .then(function(results) {
        var hasIcon = results[0] === true;
        var hasSplash = results[1] === true;
        var promise;

        if (!hasIcon && !hasSplash) {
            console.log(arguments);
            promise = Q.reject();
        }

        if (hasIcon) {
            promise = Q.when(promise)
                .then(getPlatformIcons)
                .then(generateIcons);
        }

        if (hasSplash) {
            promise = Q.when(promise)
                .then(getPlatformSplashs)
                .then(generateSplashes);
        }

        return Q.when(promise);
    })
    .catch(function(err) {
        if (err) {
            console.log(err);
        }
    }).then(function() {
        console.log('');
    });