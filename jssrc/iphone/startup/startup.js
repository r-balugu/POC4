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
    isDebug: true,
    middlewareContext: "LifeHacks",
    isMFApp: false,
    eventTypes: ["FormEntry", "FormExit", "Touch", "Gesture", "Orientation", "ServiceRequest", "ServiceResponse", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeUserWidgets();
    initializeCopyFBox024f1a47362834b();
    initializeCopyFBox0416cc7a755e44b();
    initializeCopyFBox0614493868a644b();
    initializeCopyFBox06d17178365574d();
    initializeCopyFBox0842e9e013a3549();
    initializeCopyFBox0890f1bcfba7543();
    initializeCopyFBox0c43c7e29f1fe49();
    initializeCopyFBox0c8e135f81d2742();
    initializeCopyFBox0ca0f3499f05c49();
    initializeCopyFBox0e383fdc6ce6440();
    initializeFBox00b449b54365c4f();
    initializeFBox03f08a675ecb749();
    initializeFBox0ab2ab5860dc64b();
    initializeFBox0c0810835b26e4d();
    initializeFBox0dadd320e598e49();
    initializehdrMsOverview();
    frmAddAllergyGlobals();
    frmAddContactsGlobals();
    frmConatctAddedGlobals();
    frmContactDetailsGlobals();
    frmDailyTrackerGlobals();
    frmDetailsScreenGlobals();
    frmHomeGlobals();
    frmImportedContactsGlobals();
    frmListScreenGlobals();
    frmListScreen1Globals();
    frmMSOverviewGlobals();
    frmMSStatusGlobals();
    frmReportOverViewGlobals();
    frmSelectRoleGlobals();
    frmSignUpGlobals();
    frmSplashGlobals();
    frmSymptomGlobals();
    frmSymptomListGlobals();
    frmSymptomsOverviewGlobals();
    frmTremAndCondGlobals();
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
            frmSplash.show();
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
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;