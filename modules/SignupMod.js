function navToSignupForm()
{
  frmSignUp.txtfirstName.text = "";
  frmSignUp.txtLastName.text = "";
  frmSignUp.txtfrequentSymptoms.text = "";
  frmSignUp.lblMSSpecialist.text = "";
  frmSignUp.lblAllergie.text = "";
  frmSignUp.show();
}

/**
 * Purpose: Call the service to fetch new content on receiving push.
 * 
 */
function validateAndPushObjectService(){
  if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("SignUp", {"access":"online"});

    var dataObject = new kony.sdk.dto.DataObject("CustomerSignup");
    var odataUrl = "";
    var timeStamp = new Date();
    var dateOfBirth = new Date(frmSignUp.calBDay.formattedDate);
    dataObject.addField("dob",dateOfBirth.toISOString());
    //dataObject.addField("actualweight",0);
    //dataObject.addField("email","");
    dataObject.addField("firstName",frmSignUp.txtfirstName.text);
    dataObject.addField("gender",frmSignUp.lstbxGender.selectedKeyValue[1]);
    //dataObject.addField("homePhone","");
    dataObject.addField("lastName",frmSignUp.txtLastName.text);
    //dataObject.addField("mobile","");
    //dataObject.addField("pin",0);
    //dataObject.addField("targetweight",0);
    dataObject.addField("updateTimestamp",timeStamp.toISOString());
    dataObject.addField("username",frmSignUp.txtfirstName.text);
    var options = {"dataObject":dataObject};
    objSvc.create(options,
                  objectServiceSuccessCallback,
                  objectServiceFailureCallback
                 );
    kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  } else {
    alert('Please make sure you are connected to the internet');
  }
}

/**
 * Purpose: Success callback for database content fetch.
 * 
 */
function objectServiceSuccessCallback(response){
  kony.application.dismissLoadingScreen();
  frmMSOverview.lblUserName.text = "Hi, " + frmSignUp.txtfirstName.text;
  frmMSOverview.show();
}

/**
 * Purpose: Failure callback for database content fetch.
 * 
 */
function objectServiceFailureCallback(response){
  kony.application.dismissLoadingScreen();
  alert("Sign up failed. Please try again.");
}