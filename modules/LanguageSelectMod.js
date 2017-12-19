function slideimgLogo() {
  //var CurrForm = kony.application.getCurrentForm();
    frmSplash.imgSymTrac.animate(
      kony.ui.createAnimation({
        "100": {
          "centerY": "20%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0.5,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.8,
      }, {
        "animationEnd": function() {
          slideLanguageSelectFlex();
        }
      });
}

function slideimgNovatris()
{
  frmSplash.imgNov.animate(
      kony.ui.createAnimation({
        "100": {
          "centerY": "50%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": .1,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.8,
      }, {
        "animationEnd": function() {
       //   slideimgNovatris();
          slideLanguageSelectFlex();
        }
      });
} 
  function slideLanguageSelectFlex()
  {
    frmSplash.flxLanguageSelect.animate(
      kony.ui.createAnimation({
        "100": {
          "bottom": "0%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0.6,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.8,
      }, {
        "animationEnd": function() {
        }
      });
  }



function selectLanguage()
{
  try{
  var selIndex  = frmSplash.segLanguage.selectedIndex[1];
 if(selIndex == 0)
    {
      kony.i18n.setCurrentLocaleAsync("en_GB", onsuccesscallback, onfailurecallback);
      loadLanguageStrings();
    }
  else if(selIndex == 1)
    {
       kony.i18n.setCurrentLocaleAsync("es_ES", onsuccesscallback, onfailurecallback);
      loadLanguageStrings();
    }
  else
    {
       kony.i18n.setCurrentLocaleAsync("ar_AE", onsuccesscallback, onfailurecallback);
      loadLanguageStringsArabic();
    }
  }
  catch(err)
    {
      showAlert("Please select language to continue.");
    }
}

function onsuccesscallback(){}
function onfailurecallback(){}
function loadLanguageStrings(){
  frmTremAndCond.destroy();
  frmAddContacts.destroy();
  frmAddAllergy.destroy();
  frmConatctAdded.destroy();
  frmContactDetails.destroy();
  frmMSOverview.destroy();
  frmSelectRole.destroy();
  frmSignUp.destroy();
  frmImportedContacts.destroy();
  frmTremAndCond.show();
  frmSignUp.flxSignUpArabic.setVisibility(false);
  frmSignUp.flxSignupMain.setVisibility(true);
}

function loadLanguageStringsArabic(){
  frmTremAndCond.destroy();
  frmAddContacts.destroy();
  frmAddAllergy.destroy();
  frmConatctAdded.destroy();
  frmContactDetails.destroy();
  frmMSOverview.destroy();
  frmSelectRole.destroy();
  frmSignUp.destroy();
  frmImportedContacts.destroy();
  frmTremAndCond.show();
  frmSignUp.flxSignUpArabic.setVisibility(true);
  frmSignUp.flxSignupMain.setVisibility(false);
}