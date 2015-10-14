# arduino-plasma-ball
Destroying the web with a plasma ball

[http://www.tannr.com/2015/10/13/destroying-the-web-with-a-plasma-ball/]

### How it works

1. The Arduino gets a baseline of the input voltage value on an analog pin
2. The Arduino constantly scans for a drop in voltage
3. If the voltage drops, it sends output via serial
4. The python script (ran by Chrome) constantly reads the serial output for any data
5. If data is detected, the Chrome extension sends a message to the active page with text selected to do its thing

##### Python Script

* It needs to be executable (chmod +x on *nix)
* The manifest file needs to be moved to the appropriate location defined here: [https://developer.chrome.com/extensions/nativeMessaging]
* The app ID will probably may need to be changed (can be found in chrome://extensions)

##### Circuit

* Check out the picture in the blog post
* I used a 10k ohm resistor for the Arduino analog input
* I cut a USB extender so that I didn't damage the original plasma ball cord
