/**
 * @module genericCode_sync
 *
 * @author prakash gotukula <prakash.gotukula@kony.com>
 */

/**
 * @function
 *
 */
function loadGlobalVariables()
{
  	slctdValue = 5;

  	//symptoms variables
  	sliderConcentrationValue = 5;
  	sliderMemoryValue = 5;
  	sliderMoodValue = 5;
  	sliderSleepQualityValue = 5;
  	sliderEnergyValue = 5;
  	sliderActivitiesValue = 5;
  	sliderImpactFeelValue = 5;
  	sliderImpactDailyActivitiesValue = 5;
  	
  	flag_MedicationsTaken = false;
  	flag_MSToday = "GOOD";
  	flag_Gender = "Male";
  	flag_HasAppointment = false;
  
  	notesText = "";
  	
  	tempNewSymptom = {};
  	tabNewSymptomsList = [];
	slctdSymptomsList = "";	
  
  
  	//symptom tracker variables
  	count_all = 0;
  	bodyType = "Body";
  	bodyPlaceSelected = "";
  
  	loadSymptomsData();
  
  	tempdailyTracker = {};
  	tabDailyTracker = [];
  		
  	chkSlctdValue = [];
  	
  	flag_MSToday = "Good";
  
  	userid = 1;
  	
   tabUserList = [];
  
    	slctdSymptomsList = "";
  		slctdKeysList = "";
}


/**
 * @function
 *
 */
function loadSymptomsData()
{
		tabSymptomsData  = [
          										{"lblSymptoms":"Blind spots","lblKey":1},
          										{"lblSymptoms":"Colour Blindness","lblKey":2},
          										{"lblSymptoms":"Fatigue","lblKey":3},
          										{"lblSymptoms":"Hearing Problems","lblKey":4},
          										{"lblSymptoms":"Insomnia","lblKey":5}
                           				];
}

/**
 * @function
 *
 */
function sliderCode()
{
  		idWidget = this.id;
  		frmName = kony.application.getCurrentForm();
  		slctdValue = frmName[idWidget].selectedValue;
}


/**
 * @function
 *
 */
function sliderConcentrationFunc()
{
  	sliderConcentrationValue = slctdValue;
}

/**
 * @function
 *
 */
function sliderMemoryFunc()
{
  	sliderMemoryValue = slctdValue;
}

function sliderMoodFunc()
{
  	sliderMoodValue = slctdValue;
}

/**
 * @function
 *
 */
function sliderSleepQualityFunc()
{
  	sliderSleepQualityValue = slctdValue;
}

/**
 * @function
 *
 */
function sliderEnergyFunc()
{
  	sliderEnergyValue = slctdValue;
}

function sliderActivitiesFunc()
{
  	sliderActivitiesValue = slctdValue;
}

/**
 * @function
 *
 */
function sliderImpactFeelFunc()
{
  	sliderImpactFeelValue = slctdValue;
}

/**
 * @function
 *
 */
function sliderImpactDailyActivitiesFunc()
{
  	sliderImpactDailyActivitiesValue = slctdValue;
}


/**
 * @function
 *
 */
function switchBody(){
  if(frmSymptom.imgBody.src=="body_img.png")
  {
    frmSymptom.imgBody.src="bodyback.png";
  }
  else
  {
    frmSymptom.imgBody.src="body_img.png"
  }
}


/**
 * @function
 *
 */
function frmSymptom_PreShow()
{
  		frmSymptom.imgBody.src = "body_img.png";
  		frmSymptom.btn1.skin = "btnTrans";
  		frmSymptom.btn2.skin = "btnTrans";
  		bodyPlaceSelected = "";
}

/**
 * @function
 *
 */
function onClickofBody_btn1()
{
  		if(frmSymptom.btn1.skin == "btnTrans")
          {
  				frmSymptom.btn1.skin = "btnSymMark";
  				bodyPlaceSelected = bodyPlaceSelected + "Left Arm" + ",";
          }
  		else if(frmSymptom.btn1.skin == "btnSymMark")
          {
  					frmSymptom.btn1.skin = "btnTrans";
  					bodyPlaceSelected = bodyPlaceSelected.replace("Left Arm","");
          }
}


/**
 * @function
 *
 */
function onClickofBody_btn2()
{
  		if(frmSymptom.btn2.skin == "btnTrans")
          {
  				frmSymptom.btn2.skin = "btnSymMark";
  				bodyPlaceSelected = bodyPlaceSelected + "Left Leg" + ",";
          }
  		else if(frmSymptom.btn2.skin == "btnSymMark")
          {
  					frmSymptom.btn2.skin = "btnTrans";
  					bodyPlaceSelected = bodyPlaceSelected.replace("Left Leg","");
          }
}



/**
 * @function
 *
 */

function onClick_MSOverviewImage()
{
  		if(flag_MSToday == "Good")
          {
            	frmMSStatus.btnGood.skin = "sknbtnGoodFocus";
            	frmMSStatus.btnGood.focusSkin = "sknbtnGoodFocus";
            	
            	frmMSStatus.btnAverage.skin = "sknbtnAverageNormal";
            	frmMSStatus.btnAverage.focusSkin = "sknbtnAverageNormal";
            	
            	frmMSStatus.btnBad.skin = "sknbtnBadNormal";
            	frmMSStatus.btnBad.focusSkin = "sknbtnBadNormal";
    			
            	frmReportOverView.lblStatus.text = "Your MS is good today!";
            	frmReportOverView.btnGoodIcon.skin = "sknbtnGoodFocus";
            	frmReportOverView.btnGoodIcon.focusSkin = "sknbtnGoodFocus";
            
            	  frmMSOverview.img1.src = "goodf_icn.png";
                  frmMSOverview.img2.src = "averagen_icn.png";
                  frmMSOverview.img3.src = "badn_icn.png";

				frmReportOverView.btnCallEmergency.setVisibility(false);            
          }
  		  else if(flag_MSToday == "Average")
          {
            	frmMSStatus.btnGood.skin = "sknbtnGoodNormal";
            	frmMSStatus.btnGood.focusSkin = "sknbtnGoodNormal";
            	
            	frmMSStatus.btnAverage.skin = "sknbtnAverageFocus";
            	frmMSStatus.btnAverage.focusSkin = "sknbtnAverageFocus";
            	
            	frmMSStatus.btnBad.skin = "sknbtnBadNormal";
            	frmMSStatus.btnBad.focusSkin = "sknbtnBadNormal";
            
            	frmReportOverView.lblStatus.text = "Your MS is OK";
            	frmReportOverView.btnGoodIcon.skin = "sknbtnAverageFocus";
            	frmReportOverView.btnGoodIcon.focusSkin = "sknbtnAverageFocus";
           
            	frmReportOverView.btnCallEmergency.setVisibility(false);
            	
          		frmMSOverview.img1.src = "goodn_icn.png";
                frmMSOverview.img2.src = "averagef_icn.png";
                frmMSOverview.img3.src = "badn_icn.png";

          }
  			else if(flag_MSToday == "Bad")
          {
            	frmMSStatus.btnGood.skin = "sknbtnGoodNormal";
            	frmMSStatus.btnGood.focusSkin = "sknbtnGoodNormal";
            	
            	frmMSStatus.btnAverage.skin = "sknbtnAverageNormal";
            	frmMSStatus.btnAverage.focusSkin = "sknbtnAverageNormal";
            	
            	frmMSStatus.btnBad.skin = "sknbtnBadFocus";
            	frmMSStatus.btnBad.focusSkin = "sknbtnBadFocus";
            
            	frmReportOverView.lblStatus.text = "You're not feeling good today.";
            	frmReportOverView.btnGoodIcon.skin = "sknbtnBadFocus";
            	frmReportOverView.btnGoodIcon.focusSkin = "sknbtnBadFocus";
            
            	  frmMSOverview.img1.src = "goodn_icn.png";
                  frmMSOverview.img2.src = "averagen_icn.png";
                  frmMSOverview.img3.src = "badf_icn.png";
            
            	frmReportOverView.btnCallEmergency.setVisibility(true);
           }
}

function CallTheNumber()
{
try
{
var number="123456789";
kony.phone.dial(number);
}
catch(err)
{
alert("error in dial:: "+err);
}
}


/**
 * @function
 *
 */
function submit_frmMSStatus()
{
  	
  
}




/**
 * @function
 *
 */
function checkDiscussSymptoms()
{
	//chkSlctdValue = checkNull(frmSymptomsOverview.chkBxImpactDailyActivities.selectedKeyValues);
  	
  	if(chkSlctdValue != "")
  	{
    		chkSlctd = true;   
    }
    else
     {
       		chkSlctd = false;
     }  
  
  	if(chkSlctd == true)
	{
      		if(flag_HasAppointment == true)		
      		{
              		//show appointments list
              		
            }
      		else if(flag_HasAppointment == false)		
      		{
              		//show alert
              		       	var infoAlert = kony.ui.Alert({
                                        message: "You don't have any appointment scheduled. Do you want to create one?",
                                        alertType: constants.ALERT_TYPE_CONFIRMATION,
                                        alertTitle: "Discuss with your HCP",
                                        yesLabel: "Yes",
                                        noLabel: "Cancel",
                                        alertHandler: null
                                    }, {});
            }
    }  
}


/**
 * @function
 *
 */
function frmSymptomsOverview_PreShow()
{
  		frmSymptomsOverview.chkBxImpactDailyActivities.selectedKeys = null;
  		if(flag_Gender == "FEMALE")
  		{
          		frmSymptomsOverview.flxFemaleMenstrualCycle.setVisibility(true);
          		frmSymptomsOverview.flxSepratorLineFemale.setVisibility(true);
          		frmSymptomsOverview.chkBxDayMenstrualCycle.selectedKeys = null;
        }
  		else
         {
                frmSymptomsOverview.flxFemaleMenstrualCycle.setVisibility(false);
                frmSymptomsOverview.flxSepratorLineFemale.setVisibility(false);
         }
}


/**
 * @function
 *
 */
function frmDailyTrackerPreShow()
{
 	frmDailyTracker.sliderConcentrationValue.selectedValue = 5;
	frmDailyTracker.sliderMemoryValue.selectedValue = 5;  
  	frmDailyTracker.sliderMoodValue.selectedValue = 5;  
  	frmDailyTracker.sliderSleepQualityValue.selectedValue = 5;  
  	frmDailyTracker.sliderEnergyValue.selectedValue = 5;  
  	frmDailyTracker.sliderActivitiesValue.selectedValue = 5;  
}


/**
 * @function
 *
 */
function frmSymptomListPreShow()
{
  	//frmSymptomList.segSymptoms.removeAll();
  	//frmSymptomList.segSymptoms.setData(tabSymptomsData);
  	frmSymptomList.txtAreaNotes.text = "";
 	frmSymptomList.sliderImpactDailyActivitiesValue.selectedValue = 5;
	frmSymptomList.sliderImpactFeelValue.selectedValue = 5;
  	
}

/**
 * @function
 *
 */
function onClickSegSymptoms()
{
  	slctdItems = frmSymptomList.segSymptoms.selectedItems;
  	slctdSymptomsList = "";
  	slctdKeysList = "";
  if(slctdItems != null)
    {
      	for(i=0;i<slctdItems.length;i++)
          {
            	slctdSymptomsList = slctdSymptomsList+ slctdItems[i].lblSymptoms+",";
            	slctdKeysList = slctdKeysList+(slctdItems[i].lblKey).toString();
          }
    }
	 slctdSymptomsList = slctdSymptomsList.substring(0, slctdSymptomsList.length-1);
  	 
}


/**
 * @function
 *
 */
function saveNewSymptom()
{
  		tabNewSymptomsList = [];
  		notesText = checkNull(frmSymptomList.txtAreaNotes.text);
		tempNewSymptom = {"symptom":slctdSymptomsList,"sliderImpactFeel":sliderImpactFeelValue,"sliderImpactActivities":sliderImpactDailyActivitiesValue,"bodyPlaceSelected":bodyPlaceSelected,"comments":notesText};
  		tabNewSymptomsList.push(tempNewSymptom);
  		
  		//alert("tabNewSymptomsList----"+JSON.stringify(tabNewSymptomsList));
  		
        frmSymptomsOverview.lblWhere.text = bodyPlaceSelected.substring(0, bodyPlaceSelected.length-1);
        frmSymptomsOverview.lblSymptoms.text = slctdSymptomsList;
  		frmSymptomsOverview.lblNotes.text = notesText;
  		frmSymptomsOverview.lblImpactFeelValue.text = sliderImpactFeelValue;
  		frmSymptomsOverview.lblImpactDailyActivities.text = sliderImpactDailyActivitiesValue;
  		frmSymptomsOverview.btnCheckBox2.skin = "sknbtnCheckBxNormal";
  		frmSymptomsOverview.show();
}


/**
 * @function
 *
 */
function onClickSave_frmDailyTracker()
{
  		tabDailyTracker = [];
  		tempdailyTracker = {"sliderConcentrationValue":sliderConcentrationValue,"sliderMemoryValue":sliderMemoryValue,"sliderMoodValue":sliderMoodValue,"sliderSleepQualityValue":sliderSleepQualityValue,"sliderEnergyValue":sliderEnergyValue,"sliderActivitiesValue":sliderActivitiesValue};
  		tabDailyTracker.push(tempdailyTracker);
  		//alert("tabDailyTracker----"+JSON.stringify( tabDailyTracker));
  		frmReportOverView.show();
}


function showPreviousForm()
{
	kony.application.getPreviousForm().show(); 
}


/**
 * @function
 *
 */
function checkNull(arg) 
{
	    if (arg == null || arg == "" || arg == undefined  || arg == "undefined" ||  arg == "null") {
	        arg = "";
	    }
	    return arg;
}



/**
 * @function
 *
 */
function onClickofSubmit_frmMSOverview()
{
  		if(flag_MSToday == "Good" || flag_MSToday == "Bad")
          {
            	frmReportOverView.show();
          }
  		else if(flag_MSToday == "Average")  
		{
          	frmSymptom.show();
        }  
}



/**
 * @function
 *
 */
function onClickCheckBoxButton2()
{
  		if(this.skin == "sknbtnCheckBxNormal")
          {
            	this.skin = "sknbtnCheckBxFocus";
            	chkSlctdValue = "Slected";
            	checkDiscussSymptoms();
          }
		 else if(this.skin == "sknbtnCheckBxFocus")
          {
            	this.skin = "sknbtnCheckBxNormal";
            	chkSlctdValue = "";
            	checkDiscussSymptoms();
          }
}


/**
 * @function
 *
 */
function onClickCheckBoxButton1()
{
  		if(this.skin == "sknbtnCheckBxNormal")
          {
            	this.skin = "sknbtnCheckBxFocus";
          }
		 else if(this.skin == "sknbtnCheckBxFocus")
          {
            	this.skin = "sknbtnCheckBxNormal";
          }
}
