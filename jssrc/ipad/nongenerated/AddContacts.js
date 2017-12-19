function showAddContactForm() {
    frmAddContacts.txtFirstName.text = "";
    frmAddContacts.txtLastName.text = "";
    frmAddContacts.txtCompany.text = "";
    frmAddContacts.txtEmail.text = "";
    frmAddContacts.txtPhone.text = "";
    frmAddContacts.show();
}

function saveContacts() {
    var FirstName = frmAddContacts.txtFirstName.text;
    var LastName = frmAddContacts.txtLastName.text;
    var CompanyName = frmAddContacts.txtCompany.text;
    var PhoneNumber = frmAddContacts.txtPhone.text;
    var Email = frmAddContacts.txtEmail.text;
    if (FirstName == "" || LastName == "" || CompanyName == "" || PhoneNumber == "" || Email == "") {
        showAlert("All fields are mandatory.");
    } else {
        isContactFromDevice = false;
        var AddedContactTab = [];
        var ContactName = FirstName + " " + LastName;
        AddedContactTab.push({
            "lblRole": RoleName,
            "lblName": ContactName,
            "CompanyName": CompanyName,
            "PhoneNumber": PhoneNumber,
            "Email": Email
        });
        frmConatctAdded.segRole.setData(AddedContactTab);
        frmConatctAdded.show();
    }
}

function showAlert(msg) {
    kony.ui.Alert({
        message: msg,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Novartis",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: null
    }, {});
}

function showContactDetails() {
    var selItems = frmConatctAdded.segRole.selectedItems[0];
    var DetailsTab = [{
        "lblRole": selItems.lblName,
        "lblName": selItems.PhoneNumber
    }, {
        "lblRole": "Appointments",
        "lblName": "1"
    }];
    frmContactDetails.segDetails.setData(DetailsTab);
    frmContactDetails.show();
}

function dialNumber() {
    var selIndex = frmContactDetails.segDetails.selectedIndex[1];
    var selItems = frmContactDetails.segDetails.selectedItems[0];
    if (selIndex == 0) {
        kony.phone.dial(selItems.lblName);
    } else {
        kony.print("Do nothing");
    }
}