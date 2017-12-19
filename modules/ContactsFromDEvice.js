isContactFromDevice = false; 
function selectImportedContacts()
{
  isContactFromDevice = true;
  var AddedContactTab = [];
  var selItems = frmImportedContacts.segRole.selectedItems[0];
  AddedContactTab.push({"lblRole" : RoleName,
                                         "lblName" : selItems.lblRole,
                                           "CompanyName" : selItems.company,
                                           "PhoneNumber" : selItems.lblName,
                                           "Email" : selItems.email
                                        });
  frmConatctAdded.segRole.setData(AddedContactTab);
  frmConatctAdded.show();
}