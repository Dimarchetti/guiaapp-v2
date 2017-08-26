#
# Create output (Cordova) directory
#
mkdir www

#
# Install client libraries
#
bower install

#
# Install cordova plugins
#
# cordova plugin add cordova-plugin-device
# cordova plugin add cordova-plugin-console
# cordova plugin add cordova-plugin-whitelist
# cordova plugin add cordova-plugin-transport-security
# cordova plugin add cordova-plugin-network-information
# cordova plugin add cordova-plugin-inappbrowser
# cordova plugin add cordova-plugin-geolocation
# cordova plugin add ionic-plugin-keyboard
# cordova plugin add cordova-plugin-email
# cordova plugin add cordova-plugin-x-socialsharing
# cordova plugin add phonegap-plugin-push --variable SENDER_ID="228071472080"

#
# Add target platform
#
# Comment out the platform(s) your system supports
#
ionic cordova platform add ios
# ionic cordova platform add android

#
# Build the  project and generate the cordova directory (www)
#
ionic cordova build
