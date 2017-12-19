function addWidgetsfrmMSStatus() {
    frmMSStatus.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
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
        "text": "Symtrac",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "25dp",
        "id": "btnBack",
        "isVisible": false,
        "left": "5%",
        "onClick": AS_Button_abc2e249e81845e49ab689d50a570e68,
        "right": 0,
        "skin": "CopyslButtonGlossBlue097a76463da414e",
        "top": "0dp",
        "width": "27dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgHam = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgHam",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "menun_icn.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxHambugerClick = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHambugerClick",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "onClick": AS_FlexContainer_628c641b8187467883cad1658097b461,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxHambugerClick.setDefaultUnit(kony.flex.DP);
    flxHambugerClick.add();
    flxHeader.add(lblHeading, btnBack, imgHam, flxHambugerClick);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b5b9dce6164b4b",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var lblStatus = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblStatus",
        "isVisible": true,
        "skin": "skLblGreen140",
        "text": "How is your MS now?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image017659023341b49 = new kony.ui.Image2({
        "height": "25dp",
        "id": "Image017659023341b49",
        "imageWhenFailed": "helpn_icn.png",
        "imageWhileDownloading": "helpn_icn.png",
        "isVisible": false,
        "left": 0,
        "right": "5%",
        "skin": "slImage",
        "src": "helpn_icn.png",
        "top": "3%",
        "width": "25dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlxGoodIcon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlxGoodIcon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "10%",
        "skin": "slFbox",
        "top": "12%",
        "width": "24%",
        "zIndex": 1
    }, {}, {});
    FlxGoodIcon.setDefaultUnit(kony.flex.DP);
    var btnGood = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnGoodFocus",
        "height": "100%",
        "id": "btnGood",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f6b2fa6ac45747b0a9e7c10dd7b692d6,
        "skin": "sknbtnGoodNormal",
        "top": "0dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlxGoodIcon.add(btnGood);
    var Label0ea3f10552e9a43 = new kony.ui.Label({
        "id": "Label0ea3f10552e9a43",
        "isVisible": true,
        "right": "16%",
        "skin": "lblDarkBlue",
        "text": "Good",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxRecordNSymptoms = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "14%",
        "id": "flxRecordNSymptoms",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRecordNSymptoms.setDefaultUnit(kony.flex.DP);
    var flxBtnRecord = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxBtnRecord",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "skFlxBrowYello",
        "top": "0%",
        "width": "43%",
        "zIndex": 1
    }, {}, {});
    flxBtnRecord.setDefaultUnit(kony.flex.DP);
    var btnRecord = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skBrownishYellow",
        "height": "100%",
        "id": "btnRecord",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_f075f4b58b8041b994594333a0025228,
        "skin": "skBrownishYellow",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label062728fb1a18f4c = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label062728fb1a18f4c",
        "isVisible": true,
        "skin": "sklblWhite120",
        "text": "RECORD",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0ffb7b5d245f44a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ffb7b5d245f44a",
        "isVisible": true,
        "skin": "sklblWhite110",
        "text": "How you Feel Today",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxBtnRecord.add(btnRecord, Label062728fb1a18f4c, CopyLabel0ffb7b5d245f44a);
    var flxSymp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "flxSymp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "5%",
        "skin": "skFlxBrowYello",
        "top": "0%",
        "width": "43%",
        "zIndex": 1
    }, {}, {});
    flxSymp.setDefaultUnit(kony.flex.DP);
    var btnSym = new kony.ui.Button({
        "centerY": "50.16%",
        "focusSkin": "skBrownishYellow",
        "height": "100%",
        "id": "btnSym",
        "isVisible": true,
        "left": "0.07%",
        "onClick": AS_Button_5395229c92ab46ffbe0d05cba14122fe,
        "skin": "skBrownishYellow",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0ad67de267b5543 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ad67de267b5543",
        "isVisible": true,
        "skin": "sklblWhite120",
        "text": "Do you have",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel022f1e8051f8a4b = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel022f1e8051f8a4b",
        "isVisible": true,
        "skin": "sklblWhite110",
        "text": "any Symptoms",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxSymp.add(btnSym, CopyLabel0ad67de267b5543, CopyLabel022f1e8051f8a4b);
    flxRecordNSymptoms.add(flxBtnRecord, flxSymp);
    var lblReportOverview = new kony.ui.Label({
        "bottom": "42%",
        "id": "lblReportOverview",
        "isVisible": true,
        "right": "50.75%",
        "skin": "sklblBlue110",
        "text": "Report's Overview",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxChart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxChart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxChart.setDefaultUnit(kony.flex.DP);
    var imgChart = new kony.ui.Image2({
        "height": "100%",
        "id": "imgChart",
        "isVisible": false,
        "left": "0%",
        "skin": "slImage",
        "src": "graph.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxChart.add(imgChart);
    var btnShowMeMore = new kony.ui.Button({
        "bottom": "42%",
        "focusSkin": "sknBlueFont110",
        "id": "btnShowMeMore",
        "isVisible": true,
        "left": "50.75%",
        "onClick": AS_Button_264cd33604034dbdb9b748828ad3d9c0,
        "skin": "sknBlueFont110",
        "text": "SHOW ME MORE",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxAverage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxAverage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "37%",
        "skin": "slFbox",
        "top": "12%",
        "width": "24%",
        "zIndex": 1
    }, {}, {});
    flxAverage.setDefaultUnit(kony.flex.DP);
    var btnAverage = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnAverageFocus",
        "height": "100%",
        "id": "btnAverage",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_511a1237739f48f887793524f52e89bd,
        "skin": "sknbtnAverageNormal",
        "top": "0dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAverage.add(btnAverage);
    var flxBad = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxBad",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "12%",
        "width": "24%",
        "zIndex": 1
    }, {}, {});
    flxBad.setDefaultUnit(kony.flex.DP);
    var btnBad = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnBadFocus",
        "height": "100%",
        "id": "btnBad",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_10fa5abac66e454d85c3f4d75abefcd1,
        "skin": "sknbtnBadNormal",
        "top": "0dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBad.add(btnBad);
    var CopyLabel0b1cff60865cd46 = new kony.ui.Label({
        "centerX": "51%",
        "id": "CopyLabel0b1cff60865cd46",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "text": "Average",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnSubmit = new kony.ui.Button({
        "focusSkin": "sknCommonBtnFocus",
        "height": "9%",
        "id": "btnSubmit",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_c46edba5291c4ec58bf08875699f717f,
        "skin": "sknCommonBtnNormal",
        "text": "Submit",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0590a1adc8dd643 = new kony.ui.Label({
        "centerX": "21%",
        "id": "CopyLabel0590a1adc8dd643",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "text": "Bad",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "30%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxBody.add(lblStatus, Image017659023341b49, FlxGoodIcon, Label0ea3f10552e9a43, flxRecordNSymptoms, lblReportOverview, flxChart, btnShowMeMore, flxAverage, flxBad, CopyLabel0b1cff60865cd46, btnSubmit, CopyLabel0590a1adc8dd643);
    flxMain.add(flxHeader, flxBody);
    frmMSStatus.add(flxMain);
};

function frmMSStatusGlobals() {
    frmMSStatus = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMSStatus,
        "enabledForIdleTimeout": false,
        "id": "frmMSStatus",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0919d9be8cf5949"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};