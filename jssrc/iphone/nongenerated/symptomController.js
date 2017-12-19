/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of symptom instances
 *   
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
/*  This method retrieves all the instances of the symptom stored in the device and displays on frmsymptomList
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
seguiSearchKeysymptom = null;

function getAllsymptom() {
    //Success callback reads the response and populates the SegmentedUI
    function getAllsymptomSuccessCallback(res) {
        //preparing object to be mapped to SegmentedUI
        var objectToMap = [];
        if (res.length < 0) {
            callAlert(getMessageTemplate("noData"), "info")
        } else {
            //Initialize global for back button feature
            gblsymptomBack = getAllsymptom;
            for (var i in res) {
                var v = res[i];
                objectToMap[i] = new Object();
                //objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
                objectToMap[i]["widgetidsymptomValue"] = kony.sync.getString(v.idsymptom);
                objectToMap[i]["widgetsymptomtypeidValue"] = kony.sync.getString(v.symptomtypeid);
                objectToMap[i]["widgetbothernessValue"] = kony.sync.getString(v.botherness);
                objectToMap[i]["widgetimpactValue"] = kony.sync.getString(v.impact);
                objectToMap[i]["widgetdateValue"] = kony.sync.getString(v.date);
                objectToMap[i]["widgetnotesValue"] = kony.sync.getString(v.notes);
                objectToMap[i]["widgetuseridValue"] = kony.sync.getString(v.userid);
                //preparing primary key object to be mapped to SegmentedUI as hidden variable
                objectToMap[i]["idsymptom"] = kony.sync.getString(v.idsymptom);
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
            frmsymptomList.seguiList.setData(objectToMap);
            //gblComingFromHome = false;
        } else {
            if (isPageLimit == false) frmsymptomList.seguiList.addAll(objectToMap);
        }
        frmsymptomList.show();
        //Dismiss Loading screen
        dismissSyncLoadingScreen();
    }
    //Display Loading screen
    showSyncLoadingScreen("Loading Data");
    // Call the com.kony.symptom.getAll ORM API
    com.kony.symptom.getAll(getAllsymptomSuccessCallback, eventErrorCallBack, null, limitForListView, offsetForListView);
}
//Wrapper method for back button functionality of edit page
function getsymptombyPKFromBack() {
    getsymptombyPK(true);
}
//Wrapper method for navigation from List to Detail view
function getsymptombyPKFromList() {
    getsymptombyPK(false);
}
/*  This method retrieves an instance of symptom for a given Primary Key (unique identifier) of the object and displays on frmsymptomDetails
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function getsymptombyPK(fromBack) {
    var getsymptombyPKObject = new com.kony.symptom();
    // Success callback reads the response and populates the fields on frmsymptomDetails
    function getsymptomSuccessCallback(res) {
        if (res != null && res.length > 0) {
            gblsymptomObject = res[0];
            frmsymptomDetails.widgetidsymptomValue.text = kony.sync.getString(gblsymptomObject.idsymptom);
            frmsymptomDetails.widgetsymptomtypeidValue.text = kony.sync.getString(gblsymptomObject.symptomtypeid);
            frmsymptomDetails.widgetbothernessValue.text = kony.sync.getString(gblsymptomObject.botherness);
            frmsymptomDetails.widgetimpactValue.text = kony.sync.getString(gblsymptomObject.impact);
            frmsymptomDetails.widgetdateValue.text = kony.sync.getString(gblsymptomObject.date);
            frmsymptomDetails.widgetnotesValue.text = kony.sync.getString(gblsymptomObject.notes);
            frmsymptomDetails.widgetuseridValue.text = kony.sync.getString(gblsymptomObject.userid);
            frmsymptomDetails.show();
        }
        //Showing alert when result set is empty
        else {
            callAlert(getMessageTemplate("noData"), "info")
        }
    }
    if (fromBack == true) {
        getsymptombyPKObject.idsymptom = gblsymptomObject.idsymptom;
    } else {
        //Storing the primary key in global variable to be used for other ORMs
        getsymptombyPKObject.idsymptom = frmsymptomList.seguiList.selectedItems[0].idsymptom;
    }
    // Call the com.kony.symptom.getAllDetailsByPK ORM API
    getsymptombyPKObject.getAllDetailsByPK(getsymptomSuccessCallback, eventErrorCallBack);
}
/* This method deletes an instance of symptom identified by Primary Key (unique identifier) of the object 
 * and loads the frmsymptomList with refreshed data
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function deleteByPKsymptom() {
    // Success callback deletes the entry of specified record on frmsymptomDetails
    function deleteByPKsymptomSuccessCallback(res) {
        callAlert(getMessageTemplate("deleteSuccess", "symptom"), "info")
        gblsymptomObject = null;
        kony.appgen.comingFromDelete = true;
        goBackTosymptomList();
    }
    // Call the com.kony.symptom.deleteByByPK ORM API
    function handler(response) {
        if (response == true) {
            gblsymptomObject.deleteByPK(deleteByPKsymptomSuccessCallback, eventErrorCallBack);
        }
    }
    callAlert(getMessageTemplate("delete", "symptom"), "confirmation", handler, "", "YES", "NO")
}
/* This method updates an instance of symptom identified by Primary Key (unique identifier) of the object
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function updateByPKsymptom() {
    //Success callback that displays an alert on successful update
    function updateByPKsymptomSuccessCallback(res) {
        callAlert(getMessageTemplate("updateSuccess", "symptom"), "info")
    }

    function updateByPKsymptomErrorCallback(res) {
        gblsymptomObject = gblsymptomtempObject;
        eventErrorCallBack(res);
    }
    //storing the global object in a temporary object as backup in case the update fails
    var gblsymptomtempObject = kony.sync.CreateCopy(gblsymptomObject);
    //Preparing an object to store the values to be updated
    gblsymptomObject.symptomtypeid = frmsymptomEdit.widgetsymptomtypeidValue.text;
    gblsymptomObject.botherness = frmsymptomEdit.widgetbothernessValue.text;
    gblsymptomObject.impact = frmsymptomEdit.widgetimpactValue.text;
    gblsymptomObject.date = frmsymptomEdit.widgetdateValue.formattedDate;
    gblsymptomObject.notes = frmsymptomEdit.widgetnotesValue.text;
    gblsymptomObject.userid = frmsymptomEdit.widgetuseridValue.text;
    // Call the com.kony.symptom.updateByByPK ORM API
    gblsymptomObject.updateByPK(updateByPKsymptomSuccessCallback, updateByPKsymptomErrorCallback);
}
/*  This method navigates to Add Form of symptom object after resetting the fields 
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function showAddsymptomForm() {
    //Resetting the fields				
    frmsymptomAdd.widgetsymptomtypeidValue.text = "";
    frmsymptomAdd.widgetbothernessValue.text = "";
    frmsymptomAdd.widgetimpactValue.text = "";
    clearCalenderWidget(frmsymptomAdd.widgetdateValue);
    frmsymptomAdd.widgetnotesValue.text = "";
    frmsymptomAdd.widgetuseridValue.text = "";
    frmsymptomAdd.show();
}
/*  This method navigates to Edit Form of symptom object
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function showEditsymptomForm() {
    // Success callback reads the response and populates the fields on frmsymptomEdit
    function editsymptomSuccessCallback(res) {
        if (res != null && res.length > 0) {
            frmsymptomEdit.widgetsymptomtypeidValue.text = checkUndefined(res[0].symptomtypeid).trim();
            frmsymptomEdit.widgetbothernessValue.text = checkUndefined(res[0].botherness).trim();
            frmsymptomEdit.widgetimpactValue.text = checkUndefined(res[0].impact).trim();
            var inputDate;
            var mydate;
            inputDate = checkUndefined(res[0].date)
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
            frmsymptomEdit.widgetdateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmsymptomEdit.widgetnotesValue.text = checkUndefined(res[0].notes).trim();
            frmsymptomEdit.widgetuseridValue.text = checkUndefined(res[0].userid).trim();
            frmsymptomEdit.show();
        }
    }
    // Call the com.kony.symptom.getAllDetailsByPK ORM API
    gblsymptomObject.getAllDetailsByPK(editsymptomSuccessCallback, eventErrorCallBack);
}
/* This method creates an instance of symptom
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function createsymptom() {
    var createsymptomObject = new com.kony.symptom();
    // Success callback creates a new record on frmsymptomDetails	
    function createsymptomSuccessCallback(res) {
        //callAlert(getMessageTemplate("addSuccess","symptom"),"info")
    }
    userIDValue = frmSignUp.txtfirstName.text;
    for (i = 0; i < tabUserList.length; i++) {
        if (userIDValue == tabUserList[i].widgetfirstNameValue) {
            userid = tabUserList[i].widgetidValue;
        }
    }
    var dt = new Date();
    dt1 = dt.getTime();
    dt1 = dt1.toString();
    dt2 = dt1.substring(3, dt1.length);
    fullYr = dt.getFullYear();
    mnth = dt.getMonth() + 1;
    dateCurrent = dt.getDate();
    createsymptomObject.symptomtypeid = slctdKeysList.toString();
    createsymptomObject.botherness = checkNull(frmSymptomsOverview.lblNotes.text);
    createsymptomObject.impact = checkNull(frmSymptomsOverview.lblImpactFeelValue.text) + "," + frmSymptomsOverview.lblImpactDailyActivities.text;
    createsymptomObject.date = fullYr + "-" + mnth + "-" + dateCurrent;
    createsymptomObject.notes = checkNull(frmSymptomsOverview.lblSymptoms.text);
    createsymptomObject.userid = userid.toString();
    // Call the com.kony.symptom.create ORM API
    createsymptomObject.create(createsymptomSuccessCallback, eventErrorCallBack);
}

function goBackTosymptomList() {
    gblComingFromHome = true;
    offsetForListView = 0;
    goBack(gblsymptomBack);
}

function getAllsymptomFromMenu() {
    gblComingFromHome = true;
    limitForListView = gblLimitForListView;
    offsetForListView = 0;
    isPageLimit = false;
    showSyncLoadingScreen("Loading Data");
    getAllsymptom();
}

function onReachEventsymptom() {
    if (gblsymptomBack) {
        gblsymptomBack();
    } else {
        getAllsymptom();
    }
}