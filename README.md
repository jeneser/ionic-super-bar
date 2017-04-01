# ionic2-super-bar
A transparent statusBar and toolBar DEMO in ionic2.

|Android 4.x|Android 5.0+|iOS|
|:-:|:-:|:-:|
|![build faill](https://camo.githubusercontent.com/cbe526959c45b29c41d5b489fcd60751e8f1228f/68747470733a2f2f7472617669732d63692e6f72672f6a656e657365722f68707548656c7065722e7376673f6272616e63683d6d6173746572)|![build passing](https://camo.githubusercontent.com/4200a9813e893f7d7a311bec7d4181a53f891857/687474703a2f2f636f72646f76612d63692e636c6f75646170702e6e65743a383038302f6275696c645374617475732f69636f6e3f6a6f623d636f72646f76612d706572696f6469632d6275696c642f504c4154464f524d3d616e64726f69642d342e342c504c5547494e3d636f72646f76612d706c7567696e2d737461747573626172)|![build passing](https://camo.githubusercontent.com/4200a9813e893f7d7a311bec7d4181a53f891857/687474703a2f2f636f72646f76612d63692e636c6f75646170702e6e65743a383038302f6275696c645374617475732f69636f6e3f6a6f623d636f72646f76612d706572696f6469632d6275696c642f504c4154464f524d3d616e64726f69642d342e342c504c5547494e3d636f72646f76612d706c7567696e2d737461747573626172)|![build passing](https://camo.githubusercontent.com/4200a9813e893f7d7a311bec7d4181a53f891857/687474703a2f2f636f72646f76612d63692e636c6f75646170702e6e65743a383038302f6275696c645374617475732f69636f6e3f6a6f623d636f72646f76612d706572696f6469632d6275696c642f504c4154464f524d3d616e64726f69642d342e342c504c5547494e3d636f72646f76612d706c7567696e2d737461747573626172)|

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
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
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
