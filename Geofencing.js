/**
 * Geofencing.js
 *
 * Phonegap Geofencing Plugin
 * Copyright (c) Dov Goldberg 2012
 * http://www.ogonium.com
 * dov.goldberg@ogonium.com
 *
 */
var Geofencing = {
/*
     Params:
     NONE
     */
	initCallbackForRegionMonitoring: function(params, success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "initCallbackForRegionMonitoring", params);
	},

/*
     Params:
     #define KEY_REGION_ID       @"fid"
     #define KEY_REGION_LAT      @"latitude"
     #define KEY_REGION_LNG      @"longitude"
     #define KEY_REGION_RADIUS   @"radius"
     #define KEY_REGION_ACCURACY @"accuracy"
     */
	startMonitoringRegion: function(params, success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "startMonitoringRegion", params);
	},

/*
	Params:
	#define KEY_REGION_ID      @"fid"
	#define KEY_REGION_LAT     @"latitude"
    #define KEY_REGION_LNG     @"longitude"
	*/
	stopMonitoringRegion: function(params, success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "stopMonitoringRegion", params);
	},

/*
	Params:
	NONE
	*/
	getWatchedRegionIds: function(success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "getWatchedRegionIds", []);
	},

/*
	Params:
	NONE
	*/
	getPendingRegionUpdates: function(success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "getPendingRegionUpdates", []);
	},

/*
	Params:
	NONE
	*/
	startMonitoringSignificantLocationChanges: function(success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "startMonitoringSignificantLocationChanges", []);
	},

/*
	Params:
	NONE
	*/
	stopMonitoringSignificantLocationChanges: function(success, fail) {
		return Cordova.exec(success, fail, "Geofencing", "stopMonitoringSignificantLocationChanges", []);
	}
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.Geofencing) {
    window.plugins.Geofencing = Geofencing;
}
