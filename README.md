# ionic2-super-bar
A transparent statusBar and toolBar DEMO in ionic2.

|Android 4.4|Android 5.1|iOS 9.3|iOS 10.0|Windows 10 Store|Travis CI|
|:-:|:-:|:-:|:-:|:-:|:-:|
|[![Build Status](http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=android-4.4,PLUGIN=cordova-plugin-statusbar)](http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=android-4.4,PLUGIN=cordova-plugin-statusbar/)|[![Build Status](http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=android-5.1,PLUGIN=cordova-plugin-statusbar)](http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=android-5.1,PLUGIN=cordova-plugin-statusbar/)|[![Build Status](http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=ios-9.3,PLUGIN=cordova-plugin-statusbar)](http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=ios-9.3,PLUGIN=cordova-plugin-statusbar/)|[![Build Status](http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=ios-10.0,PLUGIN=cordova-plugin-statusbar)](http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=ios-10.0,PLUGIN=cordova-plugin-statusbar/)|[![Build Status](http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=windows-10-store,PLUGIN=cordova-plugin-statusbar)](http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=windows-10-store,PLUGIN=cordova-plugin-statusbar/)|[![Build Status](https://travis-ci.org/apache/cordova-plugin-statusbar.svg?branch=master)](https://travis-ci.org/apache/cordova-plugin-statusbar)|

## Preview
<img src="https://github.com/jeneser/jeneser.github.io/blob/master/assets/images/ionic2-super-bar-demo.gif?raw=true" alt="Preview">

## Get started
* Clone this repository:  `git@github.com:jeneser/ionic2-super-bar.git`
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.

## Transparent statusBar for android
* Run `ionic platform add android` in a terminal
* On `MainActivity.java` file on Android platform folder`platforms/android/src/../../MainActivity.java`, paste the following code after super.onCreate()
```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
	getWindow().getDecorView().setSystemUiVisibility(
	   View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
	   View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
}
```
* Remember to add these packages in MainActivity.java
```java
import android.os.Build;
import android.view.View;
```
* Last set `StatusBarBackgroundColor` in `config.xml`from the project root.
`<preference name="StatusBarBackgroundColor" value="#33000000"/>`

## File Structure
```
.
├── config.xml
├── ionic.config.json
├── LICENSE
├── package.json
├── README.md
├── resources
├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.html
│   │   ├── app.module.ts
│   │   ├── app.scss				* transparent statusBar and SuperBar
│   │   └── main.ts
│   ├── assets
│   │   ├── icon
│   │   │   └── favicon.ico
│   │   └── imgs
│   │       ├── avatar.png
│   │       ├── detail-bg.png
│   │       ├── home-bg.png
│   │       └── menu-header.jpg
│   ├── declarations.d.ts
│   ├── index.html
│   ├── manifest.json
│   ├── pages
│   │   ├── home				* transparent statusBar and SuperBar page
│   │   │   ├── home.html
│   │   │   ├── home.scss
│   │   │   └── home.ts
│   │   └── page1				* transparent statusBar and SuperBar page
│   │       ├── page1.html
│   │       ├── page1.scss
│   │       └── page1.ts
│   ├── service-worker.js
│   └── theme
│       └── variables.scss
├── tsconfig.json
└── tslint.json
```

## Environment
```
Cordova CLI: 6.5.0
Ionic Framework Version: 2.2.0
Ionic CLI Version: 2.2.1
Ionic App Lib Version: 2.2.0
Ionic App Scripts Version: 1.1.4
ios-deploy version: Not installed
ios-sim version: Not installed
OS: Linux 4.8
Node Version: v6.9.2
Xcode version: Not installed
```
