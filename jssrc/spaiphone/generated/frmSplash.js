function addWidgetsfrmSplash() {
    frmSplash.setDefaultUnit(kony.flex.DP);
    var flxSplashMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSplashMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxSplashMain.setDefaultUnit(kony.flex.DP);
    var imgSplashBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSplashBg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "splash_bg.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgSymTrac = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "150dp",
        "id": "imgSymTrac",
        "isVisible": true,
        "skin": "slImage",
        "src": "symtrac_logo.png",
        "width": "180dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgNov = new kony.ui.Image2({
        "bottom": "0%",
        "centerX": "50%",
        "centerY": "94%",
        "height": "70dp",
        "id": "imgNov",
        "isVisible": false,
        "skin": "slImage",
        "src": "novartis_logo.png",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLanguageSelect = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "-39%",
        "clipBounds": true,
        "height": "39%",
        "id": "flxLanguageSelect",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLanguageSelect.setDefaultUnit(kony.flex.DP);
    var segLanguage = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "lblLanguage": "English"
        }, {
            "lblLanguage": "Español"
        }, {
            "lblLanguage": "العربية"
        }],
        "groupCells": false,
        "height": "78.85%",
        "id": "segLanguage",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": true,
        "rowFocusSkin": "Copyseg0f58da34bf8fa44",
        "rowSkin": "Copyseg0789c6b656fa446",
        "rowTemplate": FBox0c0810835b26e4d,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff46",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "8.50%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0004762119ea943": "FlexContainer0004762119ea943",
            "lblLanguage": "lblLanguage"
        },
        "width": "38.67%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0c7861d1f6fd548 = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "sknCommonBtnFocus",
        "height": "21%",
        "id": "Button0c7861d1f6fd548",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_edc6683de32d405584fcf97605b88c3e,
        "skin": "sknCommonBtnNormal",
        "text": "Confirm",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLanguageSelect.add(segLanguage, Button0c7861d1f6fd548);
    flxSplashMain.add(imgSplashBg, imgSymTrac, imgNov, flxLanguageSelect);
    frmSplash.add(flxSplashMain);
};

function frmSplashGlobals() {
    frmSplash = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSplash,
        "enabledForIdleTimeout": false,
        "id": "frmSplash",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_cdb9f3a090b2425eb1f42c92085c79da,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};