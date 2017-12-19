function preShowSelectRole() {
    frmSelectRole.flxContact.bottom = "-39%";
    frmSelectRole.flxTrans.setVisibility(false);
}

function onClickSegSelectRole() {
    var selItems = frmSelectRole.segRole.selectedItems[0];
    RoleName = selItems.lblRole;
    animateSelectContacts();
}

function animateSelectContacts() {
    var currentForm = kony.application.getCurrentForm().id;
    // alert("current form is " + currentForm);
    if (eval(currentForm + ".flxContact").bottom == "-39%") {
        eval(currentForm + ".flxTrans").setVisibility(true);
        eval(currentForm + ".flxContact").animate(kony.ui.createAnimation({
            "100": {
                "bottom": "0%",
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
        eval(currentForm + ".flxContact").animate(kony.ui.createAnimation({
            "100": {
                "bottom": "-39%",
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
            "animationEnd": function() {
                eval(currentForm + ".flxTrans").setVisibility(false);
            }
        });
    }
}

function onSelectContactOption() {
    var selIndex = frmSelectRole.segContact.selectedIndex[1];
    if (selIndex == 1) {
        showAddContactForm();
    } else {
        getAllContactsFromDevice();
    }
}

function getAllContactsFromDevice() {
    var tempContactsTab = kony.contact.find("*", true);
    AllImportedContactTab = [];
    for (var i = 0; i < tempContactsTab.length; i++) {
        AllImportedContactTab.push({
            "lblRole": tempContactsTab[i].firstname + " " + tempContactsTab[i].lastname,
            "firstname": tempContactsTab[i].firstname,
            "lastname": tempContactsTab[i].lastname,
            "email": (tempContactsTab[i].email === undefined || tempContactsTab[i].email.length == 0) ? "" : tempContactsTab[i].email[0].id,
            "lblName": (tempContactsTab[i].phone === undefined || tempContactsTab[i].phone.length == 0) ? "" : tempContactsTab[i].phone[0].number,
            "company": (tempContactsTab[i].company === undefined || tempContactsTab[i].company.length == 0) ? "" : tempContactsTab[i].company[0].company,
            "id": tempContactsTab[i].id
        });
    }
    frmImportedContacts.segRole.setData(AllImportedContactTab);
    frmImportedContacts.show();
}