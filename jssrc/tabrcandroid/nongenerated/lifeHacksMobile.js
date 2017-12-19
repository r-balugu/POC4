/**
 * @module lifeHacks.js
 *
 *   
 */
var lifeHacksMaster = [];
var userTable = [];
/**
 * @function
 *
 */
function mBaasInitLifeHacksMob() {
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    konyObject = new kony.sdk();
    konyObject.init("ed32f9432c25d6fe10c2a3647377b6f2", "8d32634a5baba2fc44e4d690cd67884f", " https://100011509.auth.konycloud.com/appconfig", successCallbackLifeHacksMob, errorCallbackLifeHacks);
}
/**
 * @function
 *
 */
function successCallbackLifeHacksMob(res) {
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var iParam = {};
    getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
    getLifeHacksService.invokeOperation("novartis_lifehacks_read", null, iParam, getLifeHacksCallbackMob, getFailureLifeHacksCallback);
}

function getLifeHacksCallbackMob(res) {
    lifeHacksMaster = [];
    for (var i in res.lifehacks) {
        var desc = res.lifehacks[i].details;
        desc = desc.slice(0, 50);
        lifeHacksMaster.push({
            "imgList": "img_" + res.lifehacks[i].id + ".png",
            "lblList": res.lifehacks[i].summary,
            "lblDesc": desc,
            "desc": res.lifehacks[i].details,
            "imgNextArrow": "listarrow.png"
        });
    }
    loadUserLifeHackMob();
    frmListScreen.listUser.selectedKey = "0";
    // frmListScreen.segList.setData(lifeHacksMaster);
}
/**
 * @function
 *
 */
function loadUserLifeHackMob() {
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var iParam = {};
    getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
    getLifeHacksService.invokeOperation("novartis_userlifehack_read", null, iParam, getLifeHacksUserCallbackMob, getFailureLifeHacksCallback);
}

function getLifeHacksUserCallbackMob(res) {
    userTable = [];
    for (var i in res.userlifehack) {
        userTable.push({
            "id": res.userlifehack[i].iduserlifehack,
            "lblList": "User " + res.userlifehack[i].userid,
            "LFHS": res.userlifehack[i].lifehackid,
            "imgNextArrow": "listarrow.png"
        });
    }
    var lfTab = userTable[0].LFHS;
    var lfData = [];
    if (lfTab == "") {} else {
        lfTab = lfTab.split(" ");
        lfTab = lfTab.sort(function(a, b) {
            return a - b;
        });
        //alert("$$$$$"+lfTab+"%%%%%%%%")
        for (var k in lfTab) {
            var idLF = lfTab[k] - 1;
            var lbIdVal = idLF + 1;
            lfData.push({
                "lblList": lifeHacksMaster[idLF].lblList,
                "lblId": lbIdVal,
                "imgList": lifeHacksMaster[idLF].imgList,
                "desc": lifeHacksMaster[idLF].desc,
                "imgNextArrow": "listarrow.png"
            });
        }
    }
    frmListScreen.segList.setData(lfData);
    frmListScreen.show();
    kony.application.dismissLoadingScreen();
}
/**
 * @function
 *
 */
function selectUserMob() {
    var selInd = frmListScreen.listUser.selectedKey;
    var lfTab = userTable[selInd].LFHS;
    var lfData = [];
    if (lfTab == "") {} else {
        lfTab = lfTab.split(" ");
        lfTab = lfTab.sort(function(a, b) {
            return a - b;
        });
        //alert("$$$$$"+lfTab+"%%%%%%%%")
        for (var k in lfTab) {
            var idLF = lfTab[k] - 1;
            var lbIdVal = idLF + 1;
            lfData.push({
                "lblList": lifeHacksMaster[idLF].lblList,
                "lblId": lbIdVal,
                "imgList": lifeHacksMaster[idLF].imgList,
                "desc": lifeHacksMaster[idLF].desc,
                "imgNextArrow": "listarrow.png"
            });
        }
    }
    frmListScreen.segList.setData(lfData);
}