function addWidgetsfrmSymptom() {
    frmSymptom.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
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
        "text": "New Symptom",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "18dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_a510fa813b124abcae24be0c659648c9,
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
    var imgHam = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "imgHam",
        "isVisible": false,
        "left": "0dp",
        "skin": "slImage",
        "src": "menun_icn.png",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnBack0f420d3c28ef544 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "btnWhiteFont100",
        "height": "25dp",
        "id": "CopybtnBack0f420d3c28ef544",
        "isVisible": true,
        "onClick": AS_Button_d4bbf96d6fea423f90e16ba178754ceb,
        "right": "5%",
        "skin": "btnWhiteFont100",
        "text": "Next",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(lblHeading, btnBack, imgHam, CopybtnBack0f420d3c28ef544);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01105fe971d4446",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var flxMainBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "70%",
        "id": "flxMainBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%"
    }, {}, {});
    flxMainBody.setDefaultUnit(kony.flex.DP);
    var imgBody = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "98%",
        "id": "imgBody",
        "imageWhileDownloading": "body_img.png",
        "isVisible": true,
        "skin": "slImage",
        "src": "body_img.png",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNeckInj = new kony.ui.Button({
        "focusSkin": "btnTrans",
        "height": "8%",
        "id": "btnNeckInj",
        "isVisible": false,
        "left": "49%",
        "skin": "btnSymMark",
        "text": "Button",
        "top": "12%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btn1 = new kony.ui.Button({
        "focusSkin": "btnTrans",
        "height": "10%",
        "id": "btn1",
        "isVisible": true,
        "left": "57%",
        "onClick": AS_Button_12c00b6cb7454a909d396d84805e4eee,
        "skin": "btnTrans",
        "text": "Button",
        "top": "16%",
        "width": "11%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btn2 = new kony.ui.Button({
        "focusSkin": "btnTrans",
        "height": "9%",
        "id": "btn2",
        "isVisible": true,
        "left": "52%",
        "onClick": AS_Button_7569685d5c4a4388b4782af6b97d27c3,
        "skin": "btnTrans",
        "text": "Button",
        "top": "69%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMainBody.add(imgBody, btnNeckInj, btn1, btn2);
    var flxSelOption = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxSelOption",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSelOption.setDefaultUnit(kony.flex.DP);
    var Button051e101db7f344a = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "btnTransf",
        "height": "100%",
        "id": "Button051e101db7f344a",
        "isVisible": true,
        "left": "2%",
        "skin": "btnTrans",
        "text": "Select Body Part",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0820b87a2f2e94b = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "btnTrans",
        "height": "100%",
        "id": "CopyButton0820b87a2f2e94b",
        "isVisible": true,
        "right": "2%",
        "skin": "btnTransf",
        "text": "View Full List",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 2, 0],
        "paddingInPixel": false
    }, {});
    flxSelOption.add(Button051e101db7f344a, CopyButton0820b87a2f2e94b);
    var flxRotateOptions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "clipBounds": true,
        "height": "15%",
        "id": "flxRotateOptions",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRotateOptions.setDefaultUnit(kony.flex.DP);
    var flxRotate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxRotate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxRotate.setDefaultUnit(kony.flex.DP);
    var Label0d6e6acf3f4b44d = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "Label0d6e6acf3f4b44d",
        "isVisible": true,
        "skin": "CopyslLabel0125bdb5cf83a43",
        "text": "Rotate",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnRotate = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "btnRotateF",
        "height": "75%",
        "id": "btnRotate",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_b53134337d30481abe118e97fc03e782,
        "skin": "btnRotateN",
        "text": "Select Body Part",
        "top": "0%",
        "width": "65%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxRotate.add(Label0d6e6acf3f4b44d, btnRotate);
    var flxWholeBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxWholeBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "5%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxWholeBody.setDefaultUnit(kony.flex.DP);
    var CopyLabel07db0b13a52bd40 = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "CopyLabel07db0b13a52bd40",
        "isVisible": true,
        "skin": "CopyslLabel0125bdb5cf83a43",
        "text": "Whole Body",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnWholeBody = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "btnFullBodyF",
        "height": "75%",
        "id": "btnWholeBody",
        "isVisible": true,
        "left": "2%",
        "skin": "btnFullBodyN",
        "text": "Select Body Part",
        "top": "0%",
        "width": "65%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxWholeBody.add(CopyLabel07db0b13a52bd40, btnWholeBody);
    flxRotateOptions.add(flxRotate, flxWholeBody);
    flxBody.add(flxMainBody, flxSelOption, flxRotateOptions);
    flxMain.add(flxHeader, flxBody);
    frmSymptom.add(flxMain);
};

function frmSymptomGlobals() {
    frmSymptom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSymptom,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmSymptom",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_45bd461b372b401e863e3e0d425ca6cb,
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