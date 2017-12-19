/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of users instances
 *   
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
/*  This method retrieves all the instances of the users stored in the device and displays on frmusersList
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
seguiSearchKeyusers = null;

function getAllusers() {
    //Success callback reads the response and populates the SegmentedUI
    function getAllusersSuccessCallback(res) {
        //preparing object to be mapped to SegmentedUI
        var objectToMap = [];
        //alert(JSON.stringify(res));
        if (res.length < 0) {
            callAlert(getMessageTemplate("noData"), "info")
        } else {
            //Initialize global for back button feature
            gblusersBack = getAllusers;
            for (var i in res) {
                var v = res[i];
                objectToMap[i] = new Object();
                //objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
                objectToMap[i]["widgetidValue"] = kony.sync.getString(v.id);
                objectToMap[i]["widgetusernameValue"] = kony.sync.getString(v.username);
                objectToMap[i]["widgetpinValue"] = kony.sync.getString(v.pin);
                objectToMap[i]["widgetfirstNameValue"] = kony.sync.getString(v.firstName);
                objectToMap[i]["widgetlastNameValue"] = kony.sync.getString(v.lastName);
                objectToMap[i]["widgetgenderValue"] = kony.sync.getString(v.gender);
                objectToMap[i]["widgetdobValue"] = kony.sync.getString(v.dob);
                objectToMap[i]["widgethomePhoneValue"] = kony.sync.getString(v.homePhone);
                objectToMap[i]["widgetmobileValue"] = kony.sync.getString(v.mobile);
                objectToMap[i]["widgetemailValue"] = kony.sync.getString(v.email);
                objectToMap[i]["widgettargetweightValue"] = kony.sync.getString(v.targetweight);
                objectToMap[i]["widgetactualweightValue"] = kony.sync.getString(v.actualweight);
                //preparing primary key object to be mapped to SegmentedUI as hidden variable
                objectToMap[i]["id"] = kony.sync.getString(v.id);
                objectToMap[i]["imgArr"] = "arr.png";
            }
        }
        if (res.length != 0) {
            offsetForListView = offsetForListView + limitForListView;
        } else {
            isPageLimit = true;
        }
        //Set the data to the Segmented UI and display the form
        if (gblComingFromHome) {
            tabUserList = [];
            tabUserList = objectToMap;
            //alert("tabUserList----"+JSON.stringify(objectToMap));
            //frmusersList.seguiList.setData(objectToMap);
            //gblComingFromHome = false;
        } else {
            if (isPageLimit == false) {
                //frmusersList.seguiList.addAll(objectToMap);
            }
        }
        //frmusersList.show();
        //Dismiss Loading screen
        dismissSyncLoadingScreen();
    }
    //Display Loading screen
    showSyncLoadingScreen("Loading Data");
    // Call the com.kony.users.getAll ORM API
    com.kony.users.getAll(getAllusersSuccessCallback, eventErrorCallBack, null, limitForListView, offsetForListView);
}
//Wrapper method for back button functionality of edit page
function getusersbyPKFromBack() {
    getusersbyPK(true);
}
//Wrapper method for navigation from List to Detail view
function getusersbyPKFromList() {
    getusersbyPK(false);
}
/*  This method retrieves an instance of users for a given Primary Key (unique identifier) of the object and displays on frmusersDetails
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function getusersbyPK(fromBack) {
    var getusersbyPKObject = new com.kony.users();
    // Success callback reads the response and populates the fields on frmusersDetails
    function getusersSuccessCallback(res) {
        if (res != null && res.length > 0) {
            gblusersObject = res[0];
            frmusersDetails.widgetidValue.text = kony.sync.getString(gblusersObject.id);
            frmusersDetails.widgetusernameValue.text = kony.sync.getString(gblusersObject.username);
            frmusersDetails.widgetpinValue.text = kony.sync.getString(gblusersObject.pin);
            frmusersDetails.widgetfirstNameValue.text = kony.sync.getString(gblusersObject.firstName);
            frmusersDetails.widgetlastNameValue.text = kony.sync.getString(gblusersObject.lastName);
            frmusersDetails.widgetgenderValue.text = kony.sync.getString(gblusersObject.gender);
            frmusersDetails.widgetdobValue.text = kony.sync.getString(gblusersObject.dob);
            frmusersDetails.widgethomePhoneValue.text = kony.sync.getString(gblusersObject.homePhone);
            frmusersDetails.widgetmobileValue.text = kony.sync.getString(gblusersObject.mobile);
            frmusersDetails.widgetemailValue.text = kony.sync.getString(gblusersObject.email);
            frmusersDetails.widgettargetweightValue.text = kony.sync.getString(gblusersObject.targetweight);
            frmusersDetails.widgetactualweightValue.text = kony.sync.getString(gblusersObject.actualweight);
            frmusersDetails.show();
        }
        //Showing alert when result set is empty
        else {
            callAlert(getMessageTemplate("noData"), "info")
        }
    }
    if (fromBack == true) {
        getusersbyPKObject.id = gblusersObject.id;
    } else {
        //Storing the primary key in global variable to be used for other ORMs
        getusersbyPKObject.id = frmusersList.seguiList.selectedItems[0].id;
    }
    // Call the com.kony.users.getAllDetailsByPK ORM API
    getusersbyPKObject.getAllDetailsByPK(getusersSuccessCallback, eventErrorCallBack);
}
/* This method deletes an instance of users identified by Primary Key (unique identifier) of the object 
 * and loads the frmusersList with refreshed data
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function deleteByPKusers() {
    // Success callback deletes the entry of specified record on frmusersDetails
    function deleteByPKusersSuccessCallback(res) {
        callAlert(getMessageTemplate("deleteSuccess", "users"), "info")
        gblusersObject = null;
        kony.appgen.comingFromDelete = true;
        goBackTousersList();
    }
    // Call the com.kony.users.deleteByByPK ORM API
    function handler(response) {
        if (response == true) {
            gblusersObject.deleteByPK(deleteByPKusersSuccessCallback, eventErrorCallBack);
        }
    }
    callAlert(getMessageTemplate("delete", "users"), "confirmation", handler, "", "YES", "NO")
}
/* This method updates an instance of users identified by Primary Key (unique identifier) of the object
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function updateByPKusers() {
    //Success callback that displays an alert on successful update
    function updateByPKusersSuccessCallback(res) {
        callAlert(getMessageTemplate("updateSuccess", "users"), "info")
    }

    function updateByPKusersErrorCallback(res) {
        gblusersObject = gbluserstempObject;
        eventErrorCallBack(res);
    }
    //storing the global object in a temporary object as backup in case the update fails
    var gbluserstempObject = kony.sync.CreateCopy(gblusersObject);
    //Preparing an object to store the values to be updated
    gblusersObject.username = frmusersEdit.widgetusernameValue.text;
    gblusersObject.pin = frmusersEdit.widgetpinValue.text;
    gblusersObject.firstName = frmusersEdit.widgetfirstNameValue.text;
    gblusersObject.lastName = frmusersEdit.widgetlastNameValue.text;
    gblusersObject.gender = frmusersEdit.widgetgenderValue.text;
    gblusersObject.dob = frmusersEdit.widgetdobValue.formattedDate;
    gblusersObject.homePhone = frmusersEdit.widgethomePhoneValue.text;
    gblusersObject.mobile = frmusersEdit.widgetmobileValue.text;
    gblusersObject.email = frmusersEdit.widgetemailValue.text;
    gblusersObject.targetweight = frmusersEdit.widgettargetweightValue.text;
    gblusersObject.actualweight = frmusersEdit.widgetactualweightValue.text;
    // Call the com.kony.users.updateByByPK ORM API
    gblusersObject.updateByPK(updateByPKusersSuccessCallback, updateByPKusersErrorCallback);
}
/*  This method navigates to Add Form of users object after resetting the fields 
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function showAddusersForm() {
    //Resetting the fields				
    frmusersAdd.widgetusernameValue.text = "";
    frmusersAdd.widgetpinValue.text = "";
    frmusersAdd.widgetfirstNameValue.text = "";
    frmusersAdd.widgetlastNameValue.text = "";
    frmusersAdd.widgetgenderValue.text = "";
    clearCalenderWidget(frmusersAdd.widgetdobValue);
    frmusersAdd.widgethomePhoneValue.text = "";
    frmusersAdd.widgetmobileValue.text = "";
    frmusersAdd.widgetemailValue.text = "";
    frmusersAdd.widgettargetweightValue.text = "";
    frmusersAdd.widgetactualweightValue.text = "";
    frmusersAdd.show();
}
/*  This method navigates to Edit Form of users object
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function showEditusersForm() {
    // Success callback reads the response and populates the fields on frmusersEdit
    function editusersSuccessCallback(res) {
        if (res != null && res.length > 0) {
            frmusersEdit.widgetusernameValue.text = checkUndefined(res[0].username).trim();
            frmusersEdit.widgetpinValue.text = checkUndefined(res[0].pin).trim();
            frmusersEdit.widgetfirstNameValue.text = checkUndefined(res[0].firstName).trim();
            frmusersEdit.widgetlastNameValue.text = checkUndefined(res[0].lastName).trim();
            frmusersEdit.widgetgenderValue.text = checkUndefined(res[0].gender).trim();
            var inputDate;
            var mydate;
            inputDate = checkUndefined(res[0].dob)
            mydate = new Date(inputDate);
            //This workaround is for iOS platform where Safari has issues with some ISO complaint date formats
            if (mydate.toString() === "Invalid Date") {
                var re = new RegExp("-", "g");
                inputDate = inputDate.replace(re, "/");
                //If server sends time component also, remove it
                if (inputDate.indexOf(" ") !== -1) {
                    inputDate = inputDate.substr(0, inputDate.indexOf(" "));
                }
                mydate = new Date(inputDate);
            }
            frmusersEdit.widgetdobValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmusersEdit.widgethomePhoneValue.text = checkUndefined(res[0].homePhone).trim();
            frmusersEdit.widgetmobileValue.text = checkUndefined(res[0].mobile).trim();
            frmusersEdit.widgetemailValue.text = checkUndefined(res[0].email).trim();
            frmusersEdit.widgettargetweightValue.text = checkUndefined(res[0].targetweight).trim();
            frmusersEdit.widgetactualweightValue.text = checkUndefined(res[0].actualweight).trim();
            frmusersEdit.show();
        }
    }
    // Call the com.kony.users.getAllDetailsByPK ORM API
    gblusersObject.getAllDetailsByPK(editusersSuccessCallback, eventErrorCallBack);
}
/* This method creates an instance of users
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function createusers() {
    var createusersObject = new com.kony.users();
    // Success callback creates a new record on frmusersDetails	
    function createusersSuccessCallback(res) {
        callAlert(getMessageTemplate("addSuccess", "users"), "info")
    }
    createusersObject.username = frmusersAdd.widgetusernameValue.text;
    createusersObject.pin = frmusersAdd.widgetpinValue.text;
    createusersObject.firstName = frmusersAdd.widgetfirstNameValue.text;
    createusersObject.lastName = frmusersAdd.widgetlastNameValue.text;
    createusersObject.gender = frmusersAdd.widgetgenderValue.text;
    createusersObject.dob = frmusersAdd.widgetdobValue.formattedDate;
    createusersObject.homePhone = frmusersAdd.widgethomePhoneValue.text;
    createusersObject.mobile = frmusersAdd.widgetmobileValue.text;
    createusersObject.email = frmusersAdd.widgetemailValue.text;
    createusersObject.targetweight = frmusersAdd.widgettargetweightValue.text;
    createusersObject.actualweight = frmusersAdd.widgetactualweightValue.text;
    // Call the com.kony.users.create ORM API
    createusersObject.create(createusersSuccessCallback, eventErrorCallBack);
}

function goBackTousersList() {
    gblComingFromHome = true;
    offsetForListView = 0;
    goBack(gblusersBack);
}

function getAllusersFromMenu() {
    gblComingFromHome = true;
    limitForListView = gblLimitForListView;
    offsetForListView = 0;
    isPageLimit = false;
    showSyncLoadingScreen("Loading Data");
    getAllusers();
}

function onReachEventusers() {
    if (gblusersBack) {
        gblusersBack();
    } else {
        getAllusers();
    }
}