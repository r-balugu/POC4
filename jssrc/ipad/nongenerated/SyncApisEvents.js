//SyncGlobals
syncBatchSize = "500";
konymbaas = null;
identityObj = null;
konysync = null;
syncUserID = "1008";
syncPwd = "1000115095d7ee788";
syncAppID = "1000115095d7ee788";
syncServerHost = "https://novartis-eu-dev.konycloud.com"
syncServerPort = "80"
syncBatchSize = "500"
syncConfigKey = "syncConfig"
skyConfigKey = "skyConfig"
syncUserIDKey = "syncUserID"
syncPwdKey = "syncPwd"
syncAppIDKey = "syncAppID"
syncServerHostKey = "syncServerHost"
syncServerPortKey = "syncServerPort"
syncBatchSizeKey = "syncBatchSize"
flag_mBaasInIt = false;
syncVersion = "810d8cd60037a1130ec54f0343229a5d40a7022de54ac2c6505b74033b58f968";
syncAppKey = "1e9eca6060652d4b0f491385d9159ec7";
syncAppSecret = "1b9234d663aa6ef9a919811248f1d6c3";
syncAppURL = "https://100011509.auth.konycloud.com/appconfig";
/*
syncVersion = "2ff43bb4d09adfcc1f5aa23c0e33d7ccbf80135ee6435ccef6756be0b5c152a2";
syncAppKey = "4b4fb40378d959e71d729b0a43b7bb24";
syncAppSecret = "295ae3628e0180c1bb9ed69a32bcfb5";
syncAppURL = "	http://KH396.kitspl.com:8089/authService/100000002/appconfig";
*/
function NavigateToForm(formname) {
    formname.show();
}

function navigateToTableForm() {}

function showSyncForm() {
    NavigateToForm(frmSync)
}

function callSyncAPIs() {
    if (frmSync.seguiSync.selectedIndex[1] == 0) {
        initSyncSession();
    }
    if (frmSync.seguiSync.selectedIndex[1] == 1) {
        syncStartSession();
    }
    if (frmSync.seguiSync.selectedIndex[1] == 2) {
        resetSyncSession();
    }
    if (frmSync.seguiSync.selectedIndex[1] == 3) {
        rollbackSyncSession();
    }
}

function initSyncSession() {
    showSyncLoadingScreen("Initializing Sync")
        //loadSyncSettingsFromDevice();
    if (flag_mBaasInIt == true) {
        konysync = konyObject.getSyncService();
        kony.sync.enableORMValidations = false;
        konysync.init(syncinit_successcallback, syncinit_errorcallback);
    } else {
        dismissSyncLoadingScreen();
        kony.ui.Alert({
            message: "Sync init is not successful.",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Novartis",
            yesLabel: "OK",
            noLabel: "",
            alertHandler: null
        }, {});
    }
}

function syncinit_successcallback(outputparams) {
    //callAlert(getMessageTemplate("syncInitSuccess"),"info")
    showSyncLoadingScreen("Initializing Sync Success");
    //alert("syncinit_success---");
    syncStartSession();
    dismissSyncLoadingScreen();
}

function syncinit_errorcallback(outputparams) {
    showSyncLoadingScreen("Initializing Sync Failure: " + JSON.stringify(outputparams));
    dismissSyncLoadingScreen();
}
/**
 * @function
 *
 */
function syncStartSession() {
    showSyncLoadingScreen("Initializing Sync success function")
    networkstatus = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    if (networkstatus == true) {
        config = {};
        config.batchsize = syncBatchSize;
        config.onsyncstart = onsyncstartCallback;
        config.onscopestart = onscopestartCallback;
        config.onscopeerror = onscopeerrorCallback;
        config.onscopesuccess = onscopesuccessCallback;
        config.onuploadstart = onuploadstartCallback;
        config.onuploadsuccess = onuploadsuccessCallback;
        config.ondownloadstart = ondownloadstartCallback;
        config.ondownloadsuccess = ondownloadsuccessCallback;
        config.onbatchstored = onbatchstoredCallback;
        config.onbatchprocessingstart = onbatchprocessingstartCallback;
        config.onbatchprocessingsuccess = onbatchprocessingsuccessCallback;
        config.onsyncsuccess = onsyncsuccessCallback;
        config.onsyncerror = onsyncerrorCallback;
        showSyncLoadingScreen("Starting Sync Session")
        config.onretry = myretryfunction;
        config.numberofretryattempts = 5;
        config.networktimeout = 120;
        config.retrywaittime = 10;
        config.retryerrorcodes = [1000, 1013, 1017, 1014, 1011, 1015, 1012, 1016, 1200];
        if (konysync != null) {
            konysync.startSession(config);
        } else {
            dismissSyncLoadingScreen();
            kony.ui.Alert({
                message: "Please Initialise Sync before Start Sync",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Novartis",
                yesLabel: "OK",
                noLabel: "",
                alertHandler: null
            }, {});
        }
    } else {
        dismissSyncLoadingScreen();
        kony.ui.Alert({
            message: "Device has no wifi or mobile connectivity. Please try after having network connectivity.",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Novartis",
            yesLabel: "OK",
            noLabel: "",
            alertHandler: null
        }, {});
    }
}

function myretryfunction(context) {
    kony.print("Following error occurred : " + JSON.stringify(context.errorResponse));
    kony.print("#####Retry attempts : " + context.retryCount);
    kony.print("#####Retry attempts : " + context.retryCount);
}

function resetSyncSession() {
    function resetSucc() {
        callAlert(getMessageTemplate("syncResetSuccess"), "info")
    }

    function resetFail() {
        callAlert(getMessageTemplate("syncResetFailure"), "error")
    }
    if (konysync != null) {
        konysync.reset(resetSucc, resetFail);
    } else {
        dismissSyncLoadingScreen();
        kony.ui.Alert({
            message: "Please initialise sync before reset sync",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Novartis",
            yesLabel: "OK",
            noLabel: "",
            alertHandler: null
        }, {});
    }
}

function rollbackSyncSession() {
    function resetSucc() {
        callAlert(getMessageTemplate("rollbackSuccess"), "info")
    }

    function resetFail() {
        callAlert(getMessageTemplate("rollbackFailure"), "error")
    }
    if (konysync != null) {
        konysync.rollbackPendingLocalChanges(resetSucc, resetFail);
    } else {
        dismissSyncLoadingScreen();
        kony.ui.Alert({
            message: "Please initialise sync before reset sync",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Novartis",
            yesLabel: "OK",
            noLabel: "",
            alertHandler: null
        }, {});
    }
}

function onsyncstartCallback(outputparams) {
    //window.Alert("Sync Started", nil, "info", "Ok", "", "info", nil);
    showSyncLoadingScreen("Sync Started");
}

function onuploadstartCallback(outputparams) {
    showSyncLoadingScreen("Upload Started")
}
/**
 * @function
 *
 */
function onuploadsuccessCallback(outputparams) {
    kony.print("upload success");
    showSyncLoadingScreen("Upload Success")
}
/**
 * @function
 *
 */
function ondownloadstartCallback(outputparams) {
    kony.print("download success start");
    showSyncLoadingScreen("Download Started")
}

function ondownloadsuccessCallback(outputparams) {
    kony.print("download success");
    showSyncLoadingScreen("Download Success");
}

function onbatchstoredCallback(outputparams) {
    showSyncLoadingScreen("Batch Stored");
}

function onbatchprocessingstartCallback(outputparams) {
    showSyncLoadingScreen("Batch Processing")
}

function onbatchprocessingsuccessCallback(outputparams) {
    showSyncLoadingScreen("Batch Processing Success")
}

function onsyncerrorCallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    showSyncLoadingScreen("Sync Session Error");
    dismissSyncLoadingScreen();
}

function onsyncsuccessCallback(outputparams) {
    //callAlert(getMessageTemplate("syncSuccess"),"info")
    getAllusers();
    getAllsymptomtype();
    showSyncLoadingScreen("Sync Session Success");
    dismissSyncLoadingScreen();
}

function onscopestartCallback(outputparams) {
    showSyncLoadingScreen("Scope Started");
}

function onscopeerrorCallback(outputparams) {
    showSyncLoadingScreen("Sync Scope Error");
    dismissSyncLoadingScreen();
}

function onscopesuccessCallback(outputparams) {
    showSyncLoadingScreen("Scope Success");
}

function loadSyncSettingsFromDevice() {
    syncConfigArr = kony.store.getItem(syncConfigKey);
    if (null != syncConfigArr) {
        syncServerHost = syncConfigArr[syncServerHostKey];
        syncServerPort = syncConfigArr[syncServerPortKey];
        syncUserID = syncConfigArr[syncUserIDKey];
        syncPwd = syncConfigArr[syncPwdKey];
        syncAppID = syncConfigArr[syncAppIDKey];
        syncBatchSize = syncConfigArr[syncBatchSizeKey];
        syncVersion = syncConfigArr[syncVersion];
        syncAppKey = syncConfigArr[syncAppKey];
        syncAppSecret = syncConfigArr[syncAppSecret];
        syncAppURL = syncConfigArr[syncAppURL];
    }
}

function loadSkySettingsFromDevice() {}

function showSyncSettingsForm() {
    //Sync Settings
    //loadSyncSettingsFromDevice();
    frmSyncSettings.txtIP.text = syncServerHost;
    frmSyncSettings.txtPort.text = syncServerPort;
    frmSyncSettings.txtUserID.text = syncUserID;
    frmSyncSettings.txtUserPwd.text = syncPwd;
    frmSyncSettings.txtAppID.text = syncAppID;
    frmSyncSettings.txtBatchSize.text = syncVersion;
    frmSyncSettings.txtAppKey.text = syncAppKey;
    frmSyncSettings.txtAppSecret.text = syncAppSecret;
    frmSyncSettings.txtAppURL.text = syncAppURL;
    frmSyncSettings.show();
}

function saveSyncSettings() {
    //Sync Settings
    syncServerHost = frmSyncSettings.txtIP.text;
    syncServerPort = frmSyncSettings.txtPort.text;
    syncUserID = frmSyncSettings.txtUserID.text;
    syncPwd = frmSyncSettings.txtUserPwd.text;
    syncAppID = frmSyncSettings.txtAppID.text;
    syncVersion = frmSyncSettings.txtBatchSize.text;
    syncAppKey = frmSyncSettings.txtAppKey.text;
    syncAppSecret = frmSyncSettings.txtAppSecret.text;
    syncAppURL = frmSyncSettings.txtAppURL.text;
    //updating the sync datastore with new settings
    syncConfigArr = {};
    syncConfigArr[syncServerHostKey] = syncServerHost;
    syncConfigArr[syncServerPortKey] = syncServerPort;
    syncConfigArr[syncUserIDKey] = syncUserID;
    syncConfigArr[syncPwdKey] = syncPwd;
    syncConfigArr[syncAppIDKey] = syncAppID;
    syncConfigArr[syncBatchSizeKey] = syncBatchSize;
    syncConfigArr[syncVersion] = syncVersion;
    syncConfigArr[syncAppKey] = syncAppKey;
    syncConfigArr[syncAppSecret] = syncAppSecret;
    syncConfigArr[syncAppURL] = syncAppURL;
    kony.store.setItem(syncConfigKey, syncConfigArr);
    //callAlert(getMessageTemplate("settingsSaveSuccess"),"info")
    var infoAlert = kony.ui.Alert({
        message: "Settings saved successfully.",
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "OK",
        noLabel: "Cancel",
        alertHandler: saveSettingsCallback
    }, {});
}

function saveSettingsCallback() {
    initMbaasMobile();
    frmSync.show();
}

function initSyncSkySession() {
    showSyncLoadingScreen("Initializing Sky Sync")
    loadSkySettingsFromDevice();
    var config = {};
    config.SERVER = skyServerHost;
    config.PORT = skyServerPort;
    config.PROFILE = skyProfile;
    config.onProvisionError = syncskyinit_errorcallback;
    config.onProvisionSuccess = syncskyinit_successcallback;
    skySync.init(config);
}

function syncskyinit_successcallback(outputparams) {
    callAlert(getMessageTemplate("syncInitSuccess"), "info")
    showSyncLoadingScreen("Initializing Sync Success")
    dismissSyncLoadingScreen();
}

function syncskyinit_errorcallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncInitFailure"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function syncSkyStartSession() {
    var config = {};
    config.onSkyStart = onSkySyncStartCallback;
    config.onSkySuccess = onSkySyncSuccessCallback;
    config.onSkyError = onSkySyncErrorCallback;
    config.onIndentifyStart = onIndentifyStartCallback;
    config.onIndentifyError = onIndentifyErrorCallback;
    config.onIndentifySuccess = onIndentifySuccessCallback;
    config.onSessionStart = onSessionStartCallback;
    config.onSessionSuccess = onSessionSuccessCallback;
    config.onSessionError = onSessionErrorCallback;
    showSyncLoadingScreen("Starting SkySync Session")
    loadSkySettingsFromDevice();
    config.USER = skyUserID;
    config.PASSWORD = skyPwd;
    skySync.startSession(config);
}

function onSkySyncStartCallback(outputparams) {
    showSyncLoadingScreen("Sky Sync Started");
}

function onSkySyncSuccessCallback(outputparams) {
    callAlert(getMessageTemplate("syncSuccess"), "info")
    showSyncLoadingScreen("Sky Sync Success");
    dismissSyncLoadingScreen();
}

function onSkySyncErrorCallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function onIndentifyStartCallback(outputparams) {
    showSyncLoadingScreen("Sky Sync Started");
}

function onIndentifySuccessCallback(outputparams) {
    showSyncLoadingScreen("Identified Successfully");
}

function onIndentifyErrorCallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function onSessionStartCallback(outputparams) {
    showSyncLoadingScreen("Session Started");
}

function onSessionSuccessCallback(outputparams) {
    showSyncLoadingScreen("Session Successfully");
}

function onSessionErrorCallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function resetSyncSkySession() {
    var config = {};
    showSyncLoadingScreen("Starting Sync Session")
    config.onResetError = syncskyreset_errorcallback;
    config.onResetSuccess = syncskyreset_successcallback;
    skySync.reset(config);
}

function syncskyreset_successcallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncResetSuccess"), outputparams), "info");
    showSyncLoadingScreen("Reset Sky Sync Success")
    dismissSyncLoadingScreen()
}

function syncskyreset_errorcallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncResetFailure"), outputparams), "error");
    showSyncLoadingScreen("Reset Sky Sync Failure");
    dismissSyncLoadingScreen()
}

function stopSyncSkySession() {
    var config = {};
    showSyncLoadingScreen("Stopping Sync Session")
    config.onStopError = syncskystop_errorcallback;
    config.onStopSuccess = syncskystop_successcallback;
    skySync.stop(config);
}

function syncskystop_successcallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncSuccessFailure"), outputparams), "info");
    showSyncLoadingScreen("Stopping Sky Sync Success");
    dismissSyncLoadingScreen()
}

function syncskystop_errorcallback(outputparams) {
    callAlert(constructErrorMsg(getMessageTemplate("syncStopFailure"), outputparams), "error");
    showSyncLoadingScreen("Stopping Sky Sync Failure");
    dismissSyncLoadingScreen();
}

function NavigateToFormScopes() {
    form.show(frmSyncScopes)
}