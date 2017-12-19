/**
 * @module lifeHacks.js
 *
 *   
 */

var lifeHacksMaster = [];
var userTable = [];

function printDebugLogs(msg, data){
  kony.print(msg + ": "+JSON.stringify(data));
}
/**
 * @function
 *
 */
function mBaasInitLifeHacks() {
  kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  konyObject = new kony.sdk();
  konyObject.init("85e34349670933e15520e2307da3518f","bf639cbc210698b6d20ce907b593a94d","https://100011509.auth.konycloud.com/appconfig", successCallbackLifeHacks, errorCallbackLifeHacks);
}

/**
 * @function
 *
 */
function successCallbackLifeHacks(res) {
  printDebugLogs("successCallbackLifeHacks", res);
  kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  var iParam = {};
  getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
  getLifeHacksService.invokeOperation("novartis_lifehacks_read", null, iParam, getLifeHacksCallback, getFailureLifeHacksCallback);
}


/**
 * @function
 *
 */
function loadUserLifeHack() {
  kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  var iParam = {};
  getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
  printDebugLogs("loadUserLifeHack - inside", "");
  getLifeHacksService.invokeOperation("novartis_userlifehack_read", null, iParam, getLifeHacksUserCallback, getFailureLifeHacksCallback);
}

/**
 * @function
 *
 */
function getLifeHacksUserCallback(res) {
  printDebugLogs("getLifeHacksUserCallback", res);
  userTable = [];
  for (var i in res.userlifehack) {
    var j =parseInt(i) +1;
    var imgName = "user"+j+".png";
    //alert(imgName)
    userTable.push({
      "id": res.userlifehack[i].iduserlifehack,
      "lblList": "User " + res.userlifehack[i].userid,
      "LFHS": res.userlifehack[i].lifehackid,
      "imgNextArrow": imgName
    });
  }
  frmAdmin.segList.setData(userTable);
  frmAdmin.imgUserImage.src = "user1.png";
  frmAdmin.segList.selectedRowIndex = [0,0];
  var lfTab = userTable[0].LFHS;
  var lfData = [];
  frmAdmin.lblSelectedUser.text = "SELECTED : USER 1";
  if (lfTab == "") {
    
  } else {
    lfTab = lfTab.split(" ");
    lfTab = lfTab.sort(function(a, b){return a-b;});
    for (var k in lfTab) {
      var idLF = lfTab[k] - 1;
      var lbIdVal = idLF + 1;
      lfData.push({
        "lblList": lifeHacksMaster[idLF].lblList,
        "lblId": lbIdVal
      });
    }
  }
  selIndexUser = 0;
  frmAdmin.segListUser.setData(lfData);
  kony.application.dismissLoadingScreen();
}




/**
 * @function
 *
 */
function errorCallbackLifeHacks(res) {
  alert("MBaas Init Failed " + res);
  kony.application.dismissLoadingScreen();
}

/**
 * @function
 *
 */
function getLifeHacksCallback(res) {
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
  loadUserLifeHack();
  printDebugLogs("getLifeHacksCallback - lifeHacksMaster", lifeHacksMaster);
  frmListScreen.segList.setData(lifeHacksMaster);
}

/**
 * @function
 *
 */
function getFailureLifeHacksCallback(res) {
  var infoAlert = kony.ui.Alert({
    message: "Error in connecting. Please try again",
    alertType: constants.ALERT_TYPE_INFO,
    alertTitle: "LifeHacks",
    yesLabel: "OK",
    noLabel: "Cancel",
    alertHandler: null
  }, {});
  kony.application.dismissLoadingScreen();
}


/**
 * @function
 *
 */
function lifeHacksDetails() {
  frmDetailsScreen.lblList.text = frmListScreen.segList.selectedRowItems[0].lblList;
  frmDetailsScreen.lblDesc.text = frmListScreen.segList.selectedRowItems[0].desc;
  frmDetailsScreen.imgList.src = frmListScreen.segList.selectedRowItems[0].imgList;
  frmDetailsScreen.show();
}

/**
 * @function
 *
 */
function lifeHacksDetailsTablet() {
  var selInd = frmListScreen.segList.selectedRowIndex[1];
  frmListScreen.lblList.text = lifeHacksMaster[selInd].lblList;
  frmListScreen.lblDesc.text = lifeHacksMaster[selInd].desc;
  frmListScreen.imgList.src = lifeHacksMaster[selInd].imgList;
  frmListScreen.flxBody2.setVisibility(true);
}


/**
 * @function
 *
 */
function navigateManageUserLifeHacks() {
  frmAdmin.segListLF.setData(lifeHacksMaster);
  frmAdmin.show();
}
/**
 * @function
 *
 */
function navigateLifeHacks() {
  frmListScreen.flxBody2.setVisibility(false);
  frmListScreen.show();
}


/**
 * @function
 *
 */
function selectLifeHacks() {
  var lfhs = userTable[selIndexUser].LFHS;
  var selIndex = frmAdmin.segListLF.selectedRowIndex[1];
  var lfTab = [];
  var lfhstab = lfhs.split(" ");
  selIndex = selIndex + 1;
  selIndex = selIndex.toFixed(0);
  if (lfhstab.indexOf(selIndex) >= 0) {
    
  } else {
    lfhstab.push(selIndex);
    if (lfhs == "") {
      lfhs = selIndex;
    } else {
      lfhs = lfhs + " " + selIndex;
    }
  }
  userTable[selIndexUser].LFHS = lfhs;
  frmAdmin.segList.setData(userTable);
  lfhstab = [];
  lfhstab = lfhs.split(" ");
  lfhstab = lfhstab.sort(function(a, b){return a-b;});
  for (var i in lfhstab) {
    lfTab.push({
      "lblList": lifeHacksMaster[lfhstab[i] - 1].lblList,
      "lblId": selIndex
    });
  }
  frmAdmin.segListUser.setData(lfTab);
  frmAdmin.lblSelectedUser.text = "SELECTED : "+(userTable[selIndexUser].lblList).toUpperCase();
}


/**
 * @function
 *
 */
function removeLifeHacks() {
  var selIndex = frmAdmin.segListUser.selectedRowIndex[1];
  var lfhs = userTable[selIndexUser].LFHS;
  var lfhstab = lfhs.split(" ");
  lfhstab = lfhstab.sort(function(a, b){return a-b;});
  var lftext = "";
  var tabLFHS = [];
  lfhstab.splice(selIndex, 1);
  for (var i in lfhstab) {
    tabLFHS.push({
      "lblList": lifeHacksMaster[lfhstab[i] - 1].lblList,
      "lblId": lfhstab[i] - 1
    });
    lftext = lftext + " " + (lfhstab[i]);
  }
  lftext = lftext.slice(1);
  frmAdmin.segListUser.setData(tabLFHS);
  userTable[selIndexUser].LFHS = lftext;
  frmAdmin.segList.setData(userTable);
}


/**
 * @function
 *
 */
function onclickEdit() {
  frmListScreen.txtAreaEditList.text = frmListScreen.lblList.text;
  frmListScreen.txtAreaDesc.text = frmListScreen.lblDesc.text;
  frmListScreen.lblEditHead.text = "Update LifeHacks";
  frmListScreen.imgEdit.src = frmListScreen.imgList.src;
  var imgName = frmListScreen.imgList.src;
  imgName = imgName.slice(4);
  imgName = imgName.replace(".png", "");
  frmListScreen.imageId.text = imgName;
  frmListScreen.imageId.setEnabled(false);
  frmListScreen.flexEdit.setVisibility(true);
}

/**
 * @function
 *
 */
function onclickSaveEdit() {
  var iParam = {};
  if (frmListScreen.lblEditHead.text == "Create New LifeHacks") {
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    iParam = {
      "id": frmListScreen.imageId.text,
      "summary": frmListScreen.txtAreaEditList.text,
      "details": frmListScreen.txtAreaDesc.text
    };
    getLifeHacksUpdateService = konyObject.getIntegrationService("lifehackslist");
    getLifeHacksUpdateService.invokeOperation("novartis_lifehacks_create", null, iParam, getLifeHacksUpdateCallback, getFailureLifeHacksCallback);
  } else {
    frmListScreen.lblList.text = frmListScreen.txtAreaEditList.text;
    frmListScreen.lblDesc.text = frmListScreen.txtAreaDesc.text;
    frmListScreen.lblEditHead.text = "Update LifeHacks";
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    iParam = {
      "id": frmListScreen.imageId.text,
      "summary": frmListScreen.txtAreaEditList.text,
      "details": frmListScreen.txtAreaDesc.text
    };
    getLifeHacksUpdateService = konyObject.getIntegrationService("lifehackslist");
    getLifeHacksUpdateService.invokeOperation("novartis_lifehacks_update", null, iParam, getLifeHacksUpdateCallback, getFailureLifeHacksCallback);
  }
}


/**
 * @function
 *
 */
function getLifeHacksUpdateCallback(res) {
  kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  var iParam = {};
  getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
  getLifeHacksService.invokeOperation("novartis_lifehacks_read", null, iParam, getLifeHacksCallback, getFailureLifeHacksCallback);
  frmListScreen.flexEdit.setVisibility(false);
}


/**
 * @function
 *
 */
function onClickRefresh() {
  kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  var iParam = {};
  getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
  getLifeHacksService.invokeOperation("novartis_lifehacks_read", null, iParam, getLifeHacksCallback, getFailureLifeHacksCallback);
  frmListScreen.flexEdit.setVisibility(false);
}

/**
 * @function
 *
 */
function selectedUser() {
  var userTab = [];
  //alert(frmAdmin.segList.selectedRowIndex)
  selIndexUser = frmAdmin.segList.selectedRowIndex[1];
  frmAdmin.imgUserImage.src = userTable[selIndexUser].imgNextArrow;
  frmAdmin.lblSelectedUser.text = "SELECTED : "+ (userTable[selIndexUser].lblList).toUpperCase();
  var lfTab = userTable[selIndexUser].LFHS;
  var lfData = [];
  for (var i = 1; i < 4; i++) {
    userTab.push({
      "lblList": "User " + i
    });
  }
  if (lfTab == "") {

  } else {
    lfTab = lfTab.split(" ");
    lfTab = lfTab.sort(function(a, b){return a-b;});
    for (var k in lfTab) {
      var idLF = lfTab[k] - 1;
      var lbIdVal = idLF + 1;
      lfData.push({
        "lblList": lifeHacksMaster[idLF].lblList,
        "lblId": lbIdVal
      });
    }
  }
  frmAdmin.segListUser.setData(lfData);
}


/**
 * @function
 *
 */
function createNewLifeHack() {
  frmListScreen.txtAreaEditList.text = "";
  frmListScreen.txtAreaDesc.text = "";
  frmListScreen.lblEditHead.text = "Create New LifeHacks";
  frmListScreen.imgEdit.src = "";
  var imgLength = lifeHacksMaster.length;
  imgLength = parseInt(imgLength);
  imgLength += 1;
  imgLength = imgLength.toFixed(0);
  frmListScreen.imageId.text = imgLength;
  frmListScreen.imageId.setEnabled(false);
  frmListScreen.flexEdit.setVisibility(true);
}


/**
 * @function
 *
 */
function updateLifeHack(){
  indexUser = 0;
  for(var i in userTable){
    
    kony.application.showLoadingScreen(BlockedUi, "Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var iParam = {};
    var lfhs = userTable[i].LFHS;
    lfhs= lfhs.replace(" ", " ")
    iParam = {
      "iduserlifehack": userTable[i].id,
      "userid": (userTable[i].lblList).slice(5),
      "lifehackid": lfhs
    };
    getLifeHacksService = konyObject.getIntegrationService("lifehackslist");
    getLifeHacksService.invokeOperation("novartis_userlifehack_update", null, iParam, getUserLifeHacksUpdateCallback, getFailureLifeHacksCallback);
  }
}

/**
 * @function
 *
 */
function getUserLifeHacksUpdateCallback(res){
  kony.application.dismissLoadingScreen();
  indexUser++;
    if(indexUser == userTable.length){
      
      sendMessageFromTablet();
  }
  
}