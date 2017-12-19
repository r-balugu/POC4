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
  if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    konyObject = new kony.sdk();
    konyObject.init("85e34349670933e15520e2307da3518f","bf639cbc210698b6d20ce907b593a94d","https://100011509.auth.konycloud.com/appconfig", successCallbackLifeHacksMob, errorCallbackLifeHacks);

  }
}

/**
 * @function
 *
 */
function successCallbackLifeHacksMob(res) {
  printDebugLogs("successCallbackLifeHacksMob - ", res);
  kony.application.dismissLoadingScreen();
  var iParam = {};
  getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
  if(kony.application.getCurrentForm().id ==  frmMSOverview.id){
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    getLifeHacksService.invokeOperation("novartis_lifehacks_read", null, iParam, getLifeHacksCallbackMob, getFailureLifeHacksCallback);
  }
}


/**
 * @function
 *
 */

function getLifeHacksCallbackMob(res) {
  printDebugLogs("getLifeHacksCallbackMob", res);
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
  printDebugLogs("loadUserLifeHackMob inside", "");
  kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  var iParam = {};
  getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
  getLifeHacksService.invokeOperation("novartis_userlifehack_read", null, iParam, getLifeHacksUserCallbackMob, getFailureLifeHacksCallback);
}


function getLifeHacksUserCallbackMob(res) {
  printDebugLogs("getLifeHacksUserCallbackMob - ", res);
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
  if (lfTab == "") {

  } else {
    lfTab = lfTab.split(" ");
    lfTab = lfTab.sort(function(a, b){return a-b;});
    //alert("$$$$$"+lfTab+"%%%%%%%%")
    for (var k in lfTab) {
      var idLF = lfTab[k] - 1;
      var lbIdVal = idLF + 1;
      lfData.push({
        "lblList": lifeHacksMaster[idLF].lblList,
        "lblId": lbIdVal,
        "imgList":lifeHacksMaster[idLF].imgList,
        "desc": lifeHacksMaster[idLF].desc,
        "imgNextArrow": "listarrow.png"
      });
    }
  }
  frmListScreen.segList.setData(lfData);
  kony.application.dismissLoadingScreen();
  frmListScreen.show();
  printDebugLogs("getLifeHacksUserCallbackMob - end ", lfData);
}


/**
 * @function
 *
 */
function selectUserMob(){
  var selInd = frmListScreen.listUser.selectedKey;
  var lfTab = userTable[selInd].LFHS;
  var lfData = [];
  if (lfTab == "") {

  } else {
    lfTab = lfTab.split(" ");
    lfTab = lfTab.sort(function(a, b){return a-b;});
    //alert("$$$$$"+lfTab+"%%%%%%%%")
    for (var k in lfTab) {
      var idLF = lfTab[k] - 1;
      var lbIdVal = idLF + 1;
      lfData.push({
        "lblList": lifeHacksMaster[idLF].lblList,
        "lblId": lbIdVal,
        "imgList":lifeHacksMaster[idLF].imgList,
        "desc": lifeHacksMaster[idLF].desc,
        "imgNextArrow": "listarrow.png"
      });
    }
  }
  frmListScreen.segList.setData(lfData);

}