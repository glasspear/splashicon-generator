# splashicon-generator

Automatic icon and splash screen resizing for PhoneGap. Create an icon in the root folder of your PhoneGap project and use ```icon.png``` and a ```splash.png``` to automatically resize and copy it for all the platforms your project supports (currently works with iOS, Android and Windows Phone 8).

Consider using the base icon and splash images in the `model` folder, so that images are not cropped and resized incorrectly.

### Installation

     $ npm install splashicon-generator -g

---

### Usage

Create an ```model/icon.png``` and a ```model/splash.png``` file in the root folder of your cordova project and run:

     $ splashicon-generator

For optimal results, your icon file has to be square, and at least 1024x1024px and your splash file has a vertical rectangle, and at least 3925x3925px.

---

### Requirements

#### ImageMagick

Install on a Mac:

     $ brew install imagemagick

On linux:

    $ sudo apt-get install imagemagick

On windows see http://www.imagemagick.org/script/binary-releases.php#windows

---

### Configuring icons && splash screens

Include in your ```config.xml``` file:

```xml
<icon src="icon.png" />

<platform name="android">
    <icon src="res/icons/android/icon-ldpi.png" density="ldpi" />
    <icon src="res/icons/android/icon-mdpi.png" density="mdpi" />
    <icon src="res/icons/android/icon-hdpi.png" density="hdpi" />
    <icon src="res/icons/android/icon-xhdpi.png" density="xhdpi" />
    <icon src="res/icons/android/icon-xxhdpi.png" density="xxhdpi" />
    <icon src="res/icons/android/icon-xxxhdpi.png" density="xxxhdpi" />
    <!-- you can use any density that exists in the Android project -->
    <splash src="res/splash/android/landscape-hdpi.png" density="land-hdpi"/>
    <splash src="res/splash/android/landscape-ldpi.png" density="land-ldpi"/>
    <splash src="res/splash/android/landscape-mdpi.png" density="land-mdpi"/>
    <splash src="res/splash/android/landscape-xhdpi.png" density="land-xhdpi"/>
    <splash src="res/splash/android/hdpi.png" density="port-hdpi"/>
    <splash src="res/splash/android/ldpi.png" density="port-ldpi"/>
    <splash src="res/splash/android/mdpi.png" density="port-mdpi"/>
    <splash src="res/splash/android/xhdpi.png" density="port-xhdpi"/>
</platform>

<platform name="blackberry10">
    <icon src="res/icons/icon-90.png" />
    <icon src="res/icons/icon-96.png" />
    <icon src="res/icons/icon-110.png" />
    <icon src="res/icons/icon-144.png" />
    <!-- Add a rim:splash element for each resolution and locale you wish -->
    <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
    <rim:splash src="res/splash/splash-1280X720.png"/>
    <rim:splash src="res/splash/splash-720X1280.png"/>
    <rim:splash src="res/splash/splash-1280X768.png"/>
    <rim:splash src="res/splash/splash-768X1280.png"/>
    <rim:splash src="res/splash/splash-720X720.png"/>
    <rim:splash src="res/splash/splash-1440X1440.png"/>

</platform>

<platform name="ios">
    <!-- iOS 8.0+ -->
    <!-- iPhone 6 Plus  -->
    <icon src="res/icons/ios/icon-60@3x.png" width="180" height="180" />
    <!-- iOS 7.0+ -->
    <!-- iPhone / iPod Touch  -->
    <icon src="res/icons/ios/icon-60.png" width="60" height="60" />
    <icon src="res/icons/ios/icon-60@2x.png" width="120" height="120" />
    <!-- iPad -->
    <icon src="res/icons/ios/icon-76.png" width="76" height="76" />
    <icon src="res/icons/ios/icon-76@2x.png" width="152" height="152" />
    <!-- iOS 6.1 -->
    <!-- Spotlight Icon -->
    <icon src="res/icons/ios/icon-40.png" width="40" height="40" />
    <icon src="res/icons/ios/icon-40@2x.png" width="80" height="80" />
    <!-- iPhone / iPod Touch -->
    <icon src="res/icons/ios/icon.png" width="57" height="57" />
    <icon src="res/icons/ios/icon@2x.png" width="114" height="114" />
    <!-- iPad -->
    <icon src="res/icons/ios/icon-72.png" width="72" height="72" />
    <icon src="res/icons/ios/icon-72@2x.png" width="144" height="144" />
    <!-- iPhone Spotlight and Settings Icon -->
    <icon src="res/icons/ios/icon-small.png" width="29" height="29" />
    <icon src="res/icons/ios/icon-small@2x.png" width="58" height="58" />
    <!-- iPad Spotlight and Settings Icon -->
    <icon src="res/icons/ios/icon-50.png" width="50" height="50" />
    <icon src="res/icons/ios/icon-50@2x.png" width="100" height="100" />
    <!-- App Store -->
    <icon src="res/icons/ios/icon-1024.png" width="1024" height="1024" />
    <!-- images are determined by width and height. The following are supported -->
    <splash src="res/splash/ios/Default-568h@2x.png" width="640" height="1136"/>
    <splash src="res/splash/ios/Default-667h@2x.png" width="750" height="1334"/>
    <splash src="res/splash/ios/Default-Landscape-736h@3x.png" width="2208" height="1242"/>
    <splash src="res/splash/ios/Default-Landscape.png" width="1024" height="768"/>
    <splash src="res/splash/ios/Default-Landscape@2x.png" width="2048" height="1536"/>
    <splash src="res/splash/ios/Default-Portrait-736h@3x.png" width="1242" height="2208"/>
    <splash src="res/splash/ios/Default-Portrait.png" width="768" height="1024"/>
    <splash src="res/splash/ios/Default-Portrait@2x.png" width="1536" height="2048"/>
    <splash src="res/splash/ios/Default.png" width="320" height="480"/>
    <splash src="res/splash/ios/Default@2x.png" width="640" height="960"/>
</platform>

<platform name="wp8">
    <icon src="res/icons/wp8/ApplicationIcon.png" width="99" height="99" />
    <!-- tile image -->
    <icon src="res/icons/wp8/Background.png" width="159" height="159" />
    <!-- images are determined by width and height. The following are supported -->
    <splash src="res/splash/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
</platform>
```

---

### License

MIT
