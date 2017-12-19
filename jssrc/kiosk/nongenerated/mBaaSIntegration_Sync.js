/**
 * @module mBaaSIntegration_Sync
 *
 * @author prakash gotukula <prakash.gotukula@kony.com>
 */
/**
 * @function initMbaasMobile
 * is called to initializeMbaas
 * Date: Nov 02,2015
 */
function initMbaasMobile() {
    konyObject = new kony.sdk();
    //kony.print("konyobkect-"+JSON.stringify(konyObject));
    networkstatus = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    if (networkstatus == true) {
        kony.application.showLoadingScreen("BlockedUi", "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        konyObject.init(syncAppKey, syncAppSecret, syncAppURL, successCallback, errorCallback);
    } else {
        kony.print("in initMbaasMobile function");
    }
}
/**
 * @function successCallback
 * is called to successCallback of MBaasInit
 * Date: Nov 02,2015
 */
function successCallback(res) {
    kony.application.showLoadingScreen("BlockedUi", "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    flag_mBaasInIt = true;
    initSyncSession();
    kony.application.dismissLoadingScreen();
}
/**
 * @function errorCallback
 * is called to errorCallBack of MBaasInit
 * Date: Nov 02,2015
 */
function errorCallback(res) {
    kony.application.dismissLoadingScreen();
    var infoAlert = kony.ui.Alert({
        message: JSON.stringify(res),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "OK",
        noLabel: "Cancel",
        alertHandler: null
    }, {});
}
/**
 * @function
 *
 */
function getAllUsers_service() {}