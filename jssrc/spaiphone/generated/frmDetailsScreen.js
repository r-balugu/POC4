function addWidgetsfrmDetailsScreen() {
    frmDetailsScreen.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0aed56a392df84f",
        "top": "0%",
        "width": "100%",
        "zIndex": 20
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox07b808c87af814b",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblHeading = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel0ab9fa8ac3f8944",
        "text": "Details",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopybtnBack0b83332be57584d = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "18dp",
        "id": "CopybtnBack0b83332be57584d",
        "isVisible": true,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue097a76463da414e",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer01cc50aba2ac940 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer01cc50aba2ac940",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_dd155fcfdc1a4aa888b0f13b7e2a5fc1,
        "right": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer01cc50aba2ac940.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer01cc50aba2ac940.add();
    flxHeader.add(lblHeading, CopybtnBack0b83332be57584d, CopyFlexContainer01cc50aba2ac940);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox050fecba0fdc64e",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var flexList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "28%",
        "id": "flexList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ee017ded55674b",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexList.setDefaultUnit(kony.flex.DP);
    var lblList = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblList",
        "isVisible": true,
        "skin": "CopyslLabel054def91d887243",
        "text": "PAINT THE TOPS OF KEYS WITH NAIL POLISH TO DIFFERENTIATE WITH THEM",
        "top": "55%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var imgList = new kony.ui.Image2({
        "height": "50%",
        "id": "imgList",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexList.add(lblList, imgList);
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel05204da2e323948",
        "text": "How do you know ehich key is for which lock? Enough with the confusion. Paint each key with a different colour nail polish! #MSLifeHacks",
        "top": "33%",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxBody.add(flexList, lblDesc);
    flxMain.add(flxHeader, flxBody);
    frmDetailsScreen.add(flxMain);
};

function frmDetailsScreenGlobals() {
    frmDetailsScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDetailsScreen,
        "enabledForIdleTimeout": false,
        "id": "frmDetailsScreen",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0919d9be8cf5949"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};