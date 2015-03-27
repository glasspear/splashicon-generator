# splashicon-generator

Automatic icon and splash screen resizing for Cordova. Create an icon in the root folder of your 
Cordova project and use ```resources/icon.png``` and a ```resources/splash.png``` to automatically 
resize and copy it for all the platforms your project supports (currently works with iOS, Android, 
BlackBerry 10 and Windows Phone 8).

### Installation

     $ npm install splashicon-generator -g

---

### Usage

Create an ```resources/icon.png``` and a ```resources/splash.png``` file in the root folder of your 
cordova project and run:

     $ splashicon-generator

The icon should be 1024 X 1024px and should have no rounded corners. Each platform will apply its 
own mask and effects to the icons.

The splash screen dimensions vary for each platform, device, and orientation, so a square source 
image is required to generate each of the various screen sizes. The source imageshould be at least 
2208 X 2208px, and the artwork should be centered within the square, each generated image will be 
center cropped into landscape and portrait images. 

---

### Requirements

#### ImageMagick

##### Install 

On Mac:

     $ brew install imagemagick

On linux:

    $ sudo apt-get install imagemagick

On windows:

see http://www.imagemagick.org/script/binary-releases.php#windows


#### GhostScript

If you would like to resize AI/PSD files directly you also need to install GhostScript.

##### Install 

On Mac:
     
     $ brew install ghostscript

On Windows/Linux:

see http://www.ghostscript.com/download/gsdnld.html

---

### Configuring icons && splash screens

Include in your ```config.xml``` file:

```xml
<icon src="icon.png" />

<platform name="android">
    <icon src="resources/icons/android/icon-ldpi.png" density="ldpi" />
    <icon src="resources/icons/android/icon-mdpi.png" density="mdpi" />
    <icon src="resources/icons/android/icon-hdpi.png" density="hdpi" />
    <icon src="resources/icons/android/icon-xhdpi.png" density="xhdpi" />
    <icon src="resources/icons/android/icon-xxhdpi.png" density="xxhdpi" />
    <icon src="resources/icons/android/icon-xxxhdpi.png" density="xxxhdpi" />
    <!-- you can use any density that exists in the Android project -->
    <splash src="resources/splash/android/landscape-hdpi.png" density="land-hdpi"/>
    <splash src="resources/splash/android/landscape-ldpi.png" density="land-ldpi"/>
    <splash src="resources/splash/android/landscape-mdpi.png" density="land-mdpi"/>
    <splash src="resources/splash/android/landscape-xhdpi.png" density="land-xhdpi"/>
    <splash src="resources/splash/android/hdpi.png" density="port-hdpi"/>
    <splash src="resources/splash/android/ldpi.png" density="port-ldpi"/>
    <splash src="resources/splash/android/mdpi.png" density="port-mdpi"/>
    <splash src="resources/splash/android/xhdpi.png" density="port-xhdpi"/>
</platform>

<platform name="blackberry10">
    <icon src="resources/icons/icon-90.png" />
    <icon src="resources/icons/icon-96.png" />
    <icon src="resources/icons/icon-110.png" />
    <icon src="resources/icons/icon-144.png" />
    <!-- Add a rim:splash element for each resolution and locale you wish -->
    <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
    <rim:splash src="resources/splash/splash-1280X720.png"/>
    <rim:splash src="resources/splash/splash-720X1280.png"/>
    <rim:splash src="resources/splash/splash-1280X768.png"/>
    <rim:splash src="resources/splash/splash-768X1280.png"/>
    <rim:splash src="resources/splash/splash-720X720.png"/>
    <rim:splash src="resources/splash/splash-1440X1440.png"/>

</platform>

<platform name="ios">
    <!-- iOS 8.0+ -->
    <!-- iPhone 6 Plus  -->
    <icon src="resources/icons/ios/icon-60@3x.png" width="180" height="180" />
    <!-- iOS 7.0+ -->
    <!-- iPhone / iPod Touch  -->
    <icon src="resources/icons/ios/icon-60.png" width="60" height="60" />
    <icon src="resources/icons/ios/icon-60@2x.png" width="120" height="120" />
    <!-- iPad -->
    <icon src="resources/icons/ios/icon-76.png" width="76" height="76" />
    <icon src="resources/icons/ios/icon-76@2x.png" width="152" height="152" />
    <!-- iOS 6.1 -->
    <!-- Spotlight Icon -->
    <icon src="resources/icons/ios/icon-40.png" width="40" height="40" />
    <icon src="resources/icons/ios/icon-40@2x.png" width="80" height="80" />
    <!-- iPhone / iPod Touch -->
    <icon src="resources/icons/ios/icon.png" width="57" height="57" />
    <icon src="resources/icons/ios/icon@2x.png" width="114" height="114" />
    <!-- iPad -->
    <icon src="resources/icons/ios/icon-72.png" width="72" height="72" />
    <icon src="resources/icons/ios/icon-72@2x.png" width="144" height="144" />
    <!-- iPhone Spotlight and Settings Icon -->
    <icon src="resources/icons/ios/icon-small.png" width="29" height="29" />
    <icon src="resources/icons/ios/icon-small@2x.png" width="58" height="58" />
    <!-- iPad Spotlight and Settings Icon -->
    <icon src="resources/icons/ios/icon-50.png" width="50" height="50" />
    <icon src="resources/icons/ios/icon-50@2x.png" width="100" height="100" />
    <!-- App Store -->
    <icon src="resources/icons/ios/icon-1024.png" width="1024" height="1024" />
    <!-- images are determined by width and height. The following are supported -->
    <splash src="resources/splash/ios/Default-568h@2x.png" width="640" height="1136"/>
    <splash src="resources/splash/ios/Default-667h@2x.png" width="750" height="1334"/>
    <splash src="resources/splash/ios/Default-Landscape-736h@3x.png" width="2208" height="1242"/>
    <splash src="resources/splash/ios/Default-Landscape.png" width="1024" height="768"/>
    <splash src="resources/splash/ios/Default-Landscape@2x.png" width="2048" height="1536"/>
    <splash src="resources/splash/ios/Default-Portrait-736h@3x.png" width="1242" height="2208"/>
    <splash src="resources/splash/ios/Default-Portrait.png" width="768" height="1024"/>
    <splash src="resources/splash/ios/Default-Portrait@2x.png" width="1536" height="2048"/>
    <splash src="resources/splash/ios/Default.png" width="320" height="480"/>
    <splash src="resources/splash/ios/Default@2x.png" width="640" height="960"/>
</platform>

<platform name="wp8">
    <icon src="resources/icons/wp8/ApplicationIcon.png" width="99" height="99" />
    <!-- tile image -->
    <icon src="resources/icons/wp8/Background.png" width="159" height="159" />
    <!-- images are determined by width and height. The following are supported -->
    <splash src="resources/splash/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
</platform>
```

---

### License

MIT
