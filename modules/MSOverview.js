function Hamburger(){
  var currentForm = kony.application.getCurrentForm().id;
  // alert("current form is " + currentForm);
    if (eval(currentForm+".flxMain").left == "0%") {
         eval(currentForm+".flxMain").animate(
            kony.ui.createAnimation({
                "100": {
                    "left": "78%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function() {}
            });
    } else {
         eval(currentForm+".flxMain").animate(
            kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function() {}
            });
    }
}

function onClickYes()
{
  flag_MedicationsTaken = true;
  frmMSOverview.btnYes.skin = "CopyslButtonGlossBlue0123d8c49f72242";
  frmMSOverview.btnNo.skin = "CopyslButtonGlossRed05a4f0976a8cf47";
}

function onClickNo()
{
  flag_MedicationsTaken = false;
  frmMSOverview.btnYes.skin = "CopyslButtonGlossRed05a4f0976a8cf47";
  frmMSOverview.btnNo.skin = "CopyslButtonGlossBlue0123d8c49f72242";
}

function GoodSelected()
{
  frmMSOverview.img1.src = "goodf_icn.png";
  frmMSOverview.img2.src = "averagen_icn.png";
  frmMSOverview.img3.src = "badn_icn.png";
   
  frmReportOverView.btnGoodIcon.skin = "sknbtnGoodNormal";
  frmReportOverView.btnGoodIcon.focusSkin = "sknbtnGoodFocus";
  
  flag_MSToday = "Good";
  onClick_MSOverviewImage();
  frmReportOverView.lblStatus.text = "Your MS is good today!";
  frmReportOverView.btnCallEmergency.setVisibility(false);
  
  //frmReportOverView.show();
}

function AverageSelected()
{
  frmMSOverview.img1.src = "goodn_icn.png";
  frmMSOverview.img2.src = "averagef_icn.png";
  frmMSOverview.img3.src = "badn_icn.png";
  flag_MSToday = "Average";
  frmReportOverView.lblStatus.text = "Your MS is OK";
  	frmReportOverView.btnCallEmergency.setVisibility(false);
  onClick_MSOverviewImage();
  //frmSymptom.show();
}

function BadSelected()
{
  frmMSOverview.img1.src = "goodn_icn.png";
  frmMSOverview.img2.src = "averagen_icn.png";
  frmMSOverview.img3.src = "badf_icn.png";
  flag_MSToday = "Bad";
  frmReportOverView.lblStatus.text = "You're not feeling good today.";
  frmReportOverView.btnCallEmergency.setVisibility(true);
  onClick_MSOverviewImage();
  //frmReportOverView.show();
}

function msOverviewPreshow(){
  var todaysDate = new Date();
  formattedDate = todaysDate.getFullYear() +"-"+ todaysDate.getMonth()+1 +"-"+todaysDate.getDay();
  frmMSOverview.lblDateTime.text = todaysDate.toLocaleString() + ' partly cloudy';
}
