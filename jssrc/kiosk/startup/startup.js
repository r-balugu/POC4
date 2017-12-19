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
    isturlbase: "https://novartis-eu-dev.konycloud.com/services",
    isMFApp: true,
    appKey: "85e34349670933e15520e2307da3518f",
    appSecret: "bf639cbc210698b6d20ce907b593a94d",
    serviceUrl: "https://100011509.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100011509.auth.konycloud.com/appconfig",
        "messagingsvc": {
            "appId": "9d26f9ca-a82b-45bd-ad69-2072a7d9385c",
            "url": "https://novartis-eu-dev.messaging.konycloud.com/api/v1"
        },
        "integsvc": {
            "pushMessageFromDevice": "https://novartis-eu-dev.konycloud.com/services/pushMessageFromDevice",
            "lifehackslist": "https://novartis-eu-dev.konycloud.com/services/lifehackslist",
            "userAuthentication": "https://novartis-eu-dev.konycloud.com/services/userAuthentication"
        },
        "appId": "9d26f9ca-a82b-45bd-ad69-2072a7d9385c",
        "name": "LifeHacks",
        "reportingsvc": {
            "session": "https://novartis-eu-dev.konycloud.com/services/IST",
            "custom": "https://novartis-eu-dev.konycloud.com/services/CMS"
        },
        "baseId": "af1908a2-879f-4af1-a311-abfa197bf84d",
        "services_meta": {
            "SignUp": {
                "metadata_url": "https://novartis-eu-dev.konycloud.com/services/metadata/v1/SignUp",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://novartis-eu-dev.konycloud.com/services/data/v1/SignUp"
            },
            "pushMessageFromDevice": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://novartis-eu-dev.konycloud.com/services/pushMessageFromDevice"
            },
            "lifehackslist": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://novartis-eu-dev.konycloud.com/services/lifehackslist"
            },
            "userAuthentication": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://novartis-eu-dev.konycloud.com/services/userAuthentication"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    url: "https://novartis-eu-dev.konycloud.com/LifeHacks/MWServlet",
    secureurl: "https://novartis-eu-dev.konycloud.com/LifeHacks/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeCopyFBox00b41649c109d49();
    initializeCopyFBox03a088faf429d49();
    initializeCopyFBox0890f1bcfba7543();
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
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