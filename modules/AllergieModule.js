function selectSegAllergie()
{
  var selItems =  frmAddAllergy.segAllergi.selectedItems[0];
  frmSignUp.lblAllergie.text = selItems.lblAllergi;
  frmSignUp.lblAllergieArabic.text = selItems.lblAllergi;
  frmSignUp.show();
}

function addNewAllergie()
{
  var AllergieVal = frmAddAllergy.TextField0a293653869744b.text;
    if(AllergieVal == null || AllergieVal == "")
      {
        kony.print("Do nothing");
      }
  else
    {
      var AllergieData = frmAddAllergy.segAllergi.data;
      AllergieData.push({"lblAllergi" : AllergieVal});
       frmAddAllergy.segAllergi.setData(AllergieData);
      frmAddAllergy.TextField0a293653869744b.text = "";
    }
}