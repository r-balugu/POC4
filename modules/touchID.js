
function statusCB(status,message)
{

  // alert("Status "+status+ "Message "+message);




  switch(status) {
    case 5000:
      kony.ui.Alert({
        message: "Successful",
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;
    case 5001:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;
    case 5002:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;
    case 5003:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;
    case 5004:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;
    case 5005:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;


    case 5006:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;



    case 5007:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;
    case 5008:
      kony.ui.Alert({
        message: message,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: ""
      }, {});
      break;


  }



}



function authenticate()
{

  var config = {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"};
  kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,statusCB,config);



}
