//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "LifeHacks",
    appName: "LifeHacks",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.63",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "LifeHacks",
    isMFApp: false,
    eventTypes: ["FormEntry", "FormExit", "Touch", "Gesture", "Orientation", "ServiceRequest", "ServiceResponse", "Error", "Crash"],
    url: "https://novartis-eu-dev.konycloud.com/LifeHacks/MWServlet",
    secureurl: "https://novartis-eu-dev.konycloud.com/LifeHacks/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeUserWidgets();
    initializeCopyFBox00b41649c109d49();
    initializeCopyFBox03a088faf429d49();
    initializeCopyFBox085f04035297647();
    initializeCopyFBox0890f1bcfba7543();
    initializeCopyFBox0b9719e00bdc746();
    initializeCopyFBox0df201c4e14474f();
    initializeCopyFBox0ee4c0f67730342();
    initializeCopyFBox0f1191d883af44c();
    frmAdminGlobals();
    frmListScreenGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmListScreen.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_GB", onSuccess, onFailure, null);