Ti.version<1.8&&alert("Sorry - this application template requires Titanium Mobile SDK 1.8 or later"),function(){function i(){var i=Ti.Platform.osname;switch(i){case"ipad":return!0;case"android":var a=Ti.Platform.Android.physicalSizeCategory,r=Ti.Platform.Android;return a===r.PHYSICAL_SIZE_CATEGORY_LARGE||a===r.PHYSICAL_SIZE_CATEGORY_XLARGE;default:return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=400}}var a=Ti.Platform.osname,r=(Ti.Platform.version,Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth,i());console.log(r);var o;o=require(r?"ui/tablet/ApplicationWindow":"android"===a?"ui/handheld/android/ApplicationWindow":"ui/handheld/ApplicationWindow"),(new o).open()}();