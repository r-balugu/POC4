/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of symptomtype instances
 *   
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
 
/*  This method retrieves all the instances of the symptomtype stored in the device and displays on frmsymptomtypeList
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
seguiSearchKeysymptomtype=null;
gblComingFromHome = true;

function getAllsymptomtype(){
	//Success callback reads the response and populates the SegmentedUI
	function getAllsymptomtypeSuccessCallback(res){
		//preparing object to be mapped to SegmentedUI
		var objectToMap = [];
      	alert("res---"+JSON.stringify(res))
		if(res.length<0){
			callAlert(getMessageTemplate("noData"),"info")
		}else{
			//Initialize global for back button feature
			gblsymptomtypeBack = getAllsymptomtype;
			for(var i in res){
				var v=res[i];
				objectToMap[i] = new Object();
              
				//objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
              
				objectToMap[i]["widgetidsymptomtypeValue"] = kony.sync.getString(v.idsymptomtype);
				objectToMap[i]["lblSymptoms"] = kony.sync.getString(v.symtomttypedesc);
	
				//preparing primary key object to be mapped to SegmentedUI as hidden variable
				objectToMap[i]["lblKey"] = kony.sync.getString(v.idsymptomtype);
				//objectToMap[i]["imgSelection"] = "arr.png";
			}
		}
		if(res.length!=0) {
			offsetForListView = offsetForListView + limitForListView;
		}
		else{
			isPageLimit = true;
		}

		//Set the data to the Segmented UI and display the form
		if(gblComingFromHome)
        {
          	tabSymptomsData = [];
          	for(i=0;i<objectToMap.length;i++)
              {
                	tabSymptomsData.push(objectToMap[i]);
              }
          	alert("tabSymptomsData---"+JSON.stringify(objectToMap));
			frmSymptomList.segSymptoms.setData(tabSymptomsData);
			//gblComingFromHome = false;
		}
		else
        {
			//if(isPageLimit==false)
			//	frmSymptomList.segSymptoms.addAll(objectToMap);
		}
		
      //frmSymptomList.show();
	
      //Dismiss Loading screen
		dismissSyncLoadingScreen();
	}
		//Display Loading screen
		showSyncLoadingScreen("Loading Data");		
		// Call the com.kony.symptomtype.getAll ORM API
		com.kony.symptomtype.getAll(getAllsymptomtypeSuccessCallback, eventErrorCallBack,null,limitForListView,offsetForListView);
}


//Wrapper method for back button functionality of edit page
function getsymptomtypebyPKFromBack(){
	getsymptomtypebyPK(true);
}

//Wrapper method for navigation from List to Detail view
function getsymptomtypebyPKFromList(){
	getsymptomtypebyPK(false);
}


/*  This method retrieves an instance of symptomtype for a given Primary Key (unique identifier) of the object and displays on frmsymptomtypeDetails
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function getsymptomtypebyPK(fromBack){
	var getsymptomtypebyPKObject = new com.kony.symptomtype ();
	// Success callback reads the response and populates the fields on frmsymptomtypeDetails
	function getsymptomtypeSuccessCallback(res){
		if(res!=null && res.length>0){
			gblsymptomtypeObject = res[0];
			frmsymptomtypeDetails.widgetidsymptomtypeValue.text = kony.sync.getString(gblsymptomtypeObject.idsymptomtype);
			frmsymptomtypeDetails.widgetsymtomttypedescValue.text = kony.sync.getString(gblsymptomtypeObject.symtomttypedesc);
			frmsymptomtypeDetails.show();
		}
		//Showing alert when result set is empty
		else{
			callAlert(getMessageTemplate("noData"),"info")
		}
	}
	if(fromBack==true) {
		getsymptomtypebyPKObject.idsymptomtype = gblsymptomtypeObject.idsymptomtype;
	}
	else {
		//Storing the primary key in global variable to be used for other ORMs
		getsymptomtypebyPKObject.idsymptomtype = frmsymptomtypeList.seguiList.selectedItems[0].idsymptomtype;
	}

	// Call the com.kony.symptomtype.getAllDetailsByPK ORM API
getsymptomtypebyPKObject.getAllDetailsByPK(getsymptomtypeSuccessCallback, eventErrorCallBack);
}

/* This method deletes an instance of symptomtype identified by Primary Key (unique identifier) of the object 
 * and loads the frmsymptomtypeList with refreshed data
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function deleteByPKsymptomtype(){ 
	// Success callback deletes the entry of specified record on frmsymptomtypeDetails
	function deleteByPKsymptomtypeSuccessCallback(res) {
		callAlert(getMessageTemplate("deleteSuccess","symptomtype"),"info")
		gblsymptomtypeObject = null;
		kony.appgen.comingFromDelete = true;
		goBackTosymptomtypeList();
	}
	// Call the com.kony.symptomtype.deleteByByPK ORM API
	function handler(response){
	if(response==true){
		gblsymptomtypeObject.deleteByPK(deleteByPKsymptomtypeSuccessCallback, eventErrorCallBack); 
		}
	}
	callAlert(getMessageTemplate("delete","symptomtype"),"confirmation",handler,"","YES","NO")
}


/* This method updates an instance of symptomtype identified by Primary Key (unique identifier) of the object
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function updateByPKsymptomtype(){ 
	//Success callback that displays an alert on successful update
	function updateByPKsymptomtypeSuccessCallback(res) {
		callAlert(getMessageTemplate("updateSuccess","symptomtype"),"info")
	}
	function updateByPKsymptomtypeErrorCallback(res){
		gblsymptomtypeObject = gblsymptomtypetempObject;
		eventErrorCallBack(res);
	}
	//storing the global object in a temporary object as backup in case the update fails
	var gblsymptomtypetempObject = kony.sync.CreateCopy(gblsymptomtypeObject);
	//Preparing an object to store the values to be updated
	gblsymptomtypeObject.symtomttypedesc = frmsymptomtypeEdit.widgetsymtomttypedescValue.text;


	// Call the com.kony.symptomtype.updateByByPK ORM API
	gblsymptomtypeObject.updateByPK(updateByPKsymptomtypeSuccessCallback, updateByPKsymptomtypeErrorCallback); 
}


/*  This method navigates to Add Form of symptomtype object after resetting the fields 
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function showAddsymptomtypeForm(){
	//Resetting the fields				
		frmsymptomtypeAdd.widgetidsymptomtypeValue.text="";
		frmsymptomtypeAdd.widgetsymtomttypedescValue.text="";
	
	frmsymptomtypeAdd.show();
}

/*  This method navigates to Edit Form of symptomtype object
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function showEditsymptomtypeForm(){
// Success callback reads the response and populates the fields on frmsymptomtypeEdit
	function editsymptomtypeSuccessCallback(res){
	if(res!=null && res.length>0){
		frmsymptomtypeEdit.widgetsymtomttypedescValue.text = checkUndefined(res[0].symtomttypedesc).trim();
		frmsymptomtypeEdit.show();
		}
	}

		// Call the com.kony.symptomtype.getAllDetailsByPK ORM API
	gblsymptomtypeObject.getAllDetailsByPK(editsymptomtypeSuccessCallback, eventErrorCallBack);
}

/* This method creates an instance of symptomtype
 *
 * Created On: Mon Oct 10 13:49:35 IST 2016
 * Created by: KH396
 */
function createsymptomtype(){
	var createsymptomtypeObject = new com.kony.symptomtype();
// Success callback creates a new record on frmsymptomtypeDetails	
	function createsymptomtypeSuccessCallback(res){
		callAlert(getMessageTemplate("addSuccess","symptomtype"),"info")
	}
	createsymptomtypeObject.idsymptomtype = frmsymptomtypeAdd.widgetidsymptomtypeValue.text;
	createsymptomtypeObject.symtomttypedesc = frmsymptomtypeAdd.widgetsymtomttypedescValue.text;

	// Call the com.kony.symptomtype.create ORM API

	createsymptomtypeObject.create(createsymptomtypeSuccessCallback, eventErrorCallBack);
}



function goBackTosymptomtypeList() {
	gblComingFromHome=true;
	offsetForListView = 0;
	goBack(gblsymptomtypeBack);
}

function getAllsymptomtypeFromMenu(){
	gblComingFromHome = true;
	limitForListView = gblLimitForListView;
	offsetForListView = 0;
	isPageLimit = false;
	showSyncLoadingScreen("Loading Data");
	getAllsymptomtype();
}

function onReachEventsymptomtype(){
	if(gblsymptomtypeBack){
		gblsymptomtypeBack();
	}else{
		getAllsymptomtype();
	}
}