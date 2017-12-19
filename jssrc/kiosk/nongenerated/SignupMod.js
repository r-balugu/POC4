function navToSignupForm() {
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
function validateAndPushObjectService() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService("SignUp", {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject("CustomerSignup");
        var odataUrl = "";
        var timeStamp = new Date();
        var dateOfBirth = new Date(frmSignUp.calBDay.year + "-" + frmSignUp.calBDay.month + "-" + frmSignUp.calBDay.day);
        dataObject.addField("dob", "2016-10-05T00:00:00Z");
        dataObject.addField("actualweight", 50);
        dataObject.addField("email", "rahul.asthana@kony.com");
        dataObject.addField("firstName", frmSignUp.txtfirstName.text);
        dataObject.addField("gender", frmSignUp.lstbxGender.selectedKeyValue[1]);
        dataObject.addField("homePhone", "00055556111");
        dataObject.addField("lastName", frmSignUp.txtLastName.text);
        dataObject.addField("mobile", "00055556111");
        dataObject.addField("pin", 10005);
        dataObject.addField("targetweight", 50);
        dataObject.addField("updateTimestamp", timeStamp.toISOString());
        dataObject.addField("username", frmSignUp.txtfirstName.text);
        var options = {
            "dataObject": dataObject,
            "httpRequestOptions": {
                "timeoutIntervalForRequest": 60,
                "timeoutIntervalForResource": 600
            }
        };
        objSvc.create(options, objectServiceSuccessCallback, objectServiceFailureCallback);
        kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    } else {
        alert('Please make sure you are connected to the internet');
    }
}
/**
 * Purpose: Success callback for database content fetch.
 * 
 */
function objectServiceSuccessCallback(response) {
    kony.application.dismissLoadingScreen();
    frmMSOverview.lblUserName.text = "Hi, " + frmSignUp.txtfirstName.text;
    frmMSOverview.show();
}
/**
 * Purpose: Failure callback for database content fetch.
 * 
 */
function objectServiceFailureCallback(response) {
    kony.application.dismissLoadingScreen();
    alert("----> fail " + JSON.stringify(response));
}