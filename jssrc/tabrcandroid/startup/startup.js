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
    isturlbase: "https://nvspoc.konycloud.com/services",
    isMFApp: true,
    appKey: "ed32f9432c25d6fe10c2a3647377b6f2",
    appSecret: "8d32634a5baba2fc44e4d690cd67884f",
    serviceUrl: "https://100011509.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "e5fe4773-7e99-4b34-a7f9-b667303e2497",
        "baseId": "ce6b98ae-dc6d-447f-9d0c-7c4f287c4699",
        "name": "LifeHacks",
        "selflink": "https://100011509.auth.konycloud.com/appconfig",
        "messagingsvc": {
            "appId": "e5fe4773-7e99-4b34-a7f9-b667303e2497",
            "url": "https://nvspoc.messaging.konycloud.com/api/v1"
        },
        "integsvc": {
            "lifehackslist": "https://nvspoc.konycloud.com/services/lifehackslist",
            "userAuthentication": "https://nvspoc.konycloud.com/services/userAuthentication",
            "pushMessageFromDevice": "https://nvspoc.konycloud.com/services/pushMessageFromDevice"
        },
        "reportingsvc": {
            "custom": "https://nvspoc.konycloud.com/services/CMS",
            "session": "https://nvspoc.konycloud.com/services/IST"
        },
        "Webapp": {
            "url": "https://nvspoc.konycloud.com/LifeHacks"
        },
        "services_meta": {
            "lifehackslist": {
                "version": "1.0",
                "url": "https://nvspoc.konycloud.com/services/lifehackslist",
                "type": "integsvc"
            },
            "userAuthentication": {
                "version": "1.0",
                "url": "https://nvspoc.konycloud.com/services/userAuthentication",
                "type": "integsvc"
            },
            "pushMessageFromDevice": {
                "version": "1.0",
                "url": "https://nvspoc.konycloud.com/services/pushMessageFromDevice",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "FormExit", "Touch", "Gesture", "Orientation", "ServiceRequest", "ServiceResponse", "Error", "Crash"],
    url: "https://nvspoc.konycloud.com/LifeHacks/MWServlet",
    secureurl: "https://nvspoc.konycloud.com/LifeHacks/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
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
    callAppMenu();
    initializeGlobalVariables();
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
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
kony.print = function() {
    return;
};