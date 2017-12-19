/**
 * @module File04098502679e74d
 *
 * @author prakash gotukula <prakash.gotukula@kony.com>
 */
/**
 * @function
 *
 */
function sendMessageFromTablet() {
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var iParam = {
        "userid": "chandrasena.chittimalla@kony.com",
        "password": "Cloudsena@1234"
    };
    getLifeHacksService = konyObject.getIntegrationService("userAuthentication");
    getLifeHacksService.invokeOperation("getAccessToken", null, iParam, getPushServiceCallBackCallback, getFailureLifeHacksCallback);
}
/**
 * @function chandrasena.chittimalla@kony.com
 *Cloudsena@1234
 */
function getPushServiceCallBackCallback(res) {
    if (res.opstatus == 0) {
        var accessToken = res.accesstoken;
        var iParam = {
            "data": "LifeHacks for users have been updated",
            "title": "LifeHacks Updates"
        };
        var header = {
            "X-Kony-Authorization": accessToken
        };
        getLifeHacksService = konyObject.getIntegrationService("pushMessageFromDevice");
        getLifeHacksService.invokeOperation("sendMessage", header, iParam, getPushCallBackCallback, getFailureLifeHacksCallback);
    } else {
        kony.application.dismissLoadingScreen();
        var infoAlert = kony.ui.Alert({
            message: "Error in Connecting. Please try later",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "LifeHacks",
            yesLabel: "OK",
            noLabel: "Cancel",
            alertHandler: null
        }, {});
    }
}
/**
 * @function
 *
 */
function getPushCallBackCallback(res) {
    kony.application.dismissLoadingScreen();
    var infoAlert = kony.ui.Alert({
        message: "Updated Successfully. User have been notified.",
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "LifeHacks",
        yesLabel: "OK",
        noLabel: "Cancel",
        alertHandler: null
    }, {});
}