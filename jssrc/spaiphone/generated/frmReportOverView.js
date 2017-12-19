function addWidgetsfrmReportOverView() {
    frmReportOverView.setDefaultUnit(kony.flex.DP);
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
        "width": "100%",
        "zIndex": 10
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
        "onClick": AS_Button_fee6f1ca9b454aeab62cc993630233e4,
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
    var flxHamburgerClick = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHamburgerClick",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "onClick": AS_FlexContainer_bd5501039c364162a8a0fdcc64339cb3,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerClick.setDefaultUnit(kony.flex.DP);
    flxHamburgerClick.add();
    flxHeader.add(lblHeading, btnBack, imgHam, flxHamburgerClick);
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
    var imgHelp = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgHelp",
        "imageWhenFailed": "helpn_icn.png",
        "imageWhileDownloading": "helpn_icn.png",
        "isVisible": true,
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
    var lblStatus = new kony.ui.Label({
        "bottom": "70%",
        "centerX": "50%",
        "id": "lblStatus",
        "isVisible": true,
        "skin": "skLblGreen140",
        "text": "Your MS is good  today!",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var FlxGoodIcon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "15%",
        "id": "FlxGoodIcon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "5%",
        "width": "24%",
        "zIndex": 1
    }, {}, {});
    FlxGoodIcon.setDefaultUnit(kony.flex.DP);
    var btnGoodIcon = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "btnGoodiconF",
        "height": "100%",
        "id": "btnGoodIcon",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_43315cd1b63649b5b22022d994445853,
        "skin": "btnGoodiconF",
        "top": "0dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlxGoodIcon.add(btnGoodIcon);
    var flxRecordNSymptoms = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "14%",
        "id": "flxRecordNSymptoms",
        "isVisible": true,
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
    var Label062728fb1a18f4c = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label062728fb1a18f4c",
        "isVisible": true,
        "skin": "sklblWhite120",
        "text": "RECORD",
        "top": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyLabel0ffb7b5d245f44a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ffb7b5d245f44a",
        "isVisible": true,
        "skin": "sklblWhite110",
        "text": "How you Feel Today",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnRecord = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "btnTrans",
        "height": "100%",
        "id": "btnRecord",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_fe04da28a8ee4deb89b2ceafbe68f592,
        "skin": "btnTrans",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBtnRecord.add(Label062728fb1a18f4c, CopyLabel0ffb7b5d245f44a, btnRecord);
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
    var CopyLabel0ad67de267b5543 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ad67de267b5543",
        "isVisible": true,
        "skin": "sklblWhite120",
        "text": "Do you have",
        "top": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyLabel022f1e8051f8a4b = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel022f1e8051f8a4b",
        "isVisible": true,
        "skin": "sklblWhite110",
        "text": "any Symptoms",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnSym = new kony.ui.Button({
        "centerY": "50.16%",
        "focusSkin": "btnTrans",
        "height": "100%",
        "id": "btnSym",
        "isVisible": true,
        "left": "0.07%",
        "onClick": AS_Button_473418fe9b654c1f92b0a4fc7845d37a,
        "skin": "btnTrans",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSymp.add(CopyLabel0ad67de267b5543, CopyLabel022f1e8051f8a4b, btnSym);
    flxRecordNSymptoms.add(flxBtnRecord, flxSymp);
    var lblReportOverview = new kony.ui.Label({
        "bottom": "42%",
        "id": "lblReportOverview",
        "isVisible": true,
        "right": "50.50%",
        "skin": "sklblBlue110",
        "text": "Report's Overview",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
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
        "left": "50.50%",
        "skin": "sknBlueFont110",
        "text": "SHOW ME MORE",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCallEmergency = new kony.ui.Button({
        "focusSkin": "sknbtnTransp",
        "id": "btnCallEmergency",
        "isVisible": false,
        "onClick": AS_Button_14347d1ba1f44d1abb47aae5d1af123e,
        "right": "5%",
        "skin": "sknbtnTransp",
        "text": "Call Emergency Contact",
        "top": "10%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody.add(imgHelp, lblStatus, FlxGoodIcon, flxRecordNSymptoms, lblReportOverview, flxChart, btnShowMeMore, btnCallEmergency);
    flxMain.add(flxHeader, flxBody);
    var flxScrollHamburger = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": false,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollHamburger",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "78%",
        "zIndex": 1
    }, {}, {});
    flxScrollHamburger.setDefaultUnit(kony.flex.DP);
    var Image027244a45d4004a = new kony.ui.Image2({
        "height": "100%",
        "id": "Image027244a45d4004a",
        "isVisible": true,
        "left": "90%",
        "skin": "slImage",
        "src": "bar.png",
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image06bbac8803ccc47 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "18.43%",
        "id": "Image06bbac8803ccc47",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "ham_logo.png",
        "top": "3%",
        "width": "56.11%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segMenu = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image0199b252bf9a441": "medical_icn.png",
            "lblOption": "Medications"
        }, {
            "Image0199b252bf9a441": "appointment_icn.png",
            "lblOption": "Appointments"
        }, {
            "Image0199b252bf9a441": "tracker_icn.png",
            "lblOption": "Daily Trackers"
        }, {
            "Image0199b252bf9a441": "excercise_icn.png",
            "lblOption": "Exercises"
        }, {
            "Image0199b252bf9a441": "specialist_icn.png",
            "lblOption": "Specialists"
        }],
        "groupCells": false,
        "height": "73.91%",
        "id": "segMenu",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0aefedaa770a547",
        "rowTemplate": CopyFBox0c43c7e29f1fe49,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff46",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "141dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer00625bb7649bb44": "FlexContainer00625bb7649bb44",
            "Image0199b252bf9a441": "Image0199b252bf9a441",
            "lblOption": "lblOption"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxScrollHamburger.add(Image027244a45d4004a, Image06bbac8803ccc47, segMenu);
    frmReportOverView.add(flxMain, flxScrollHamburger);
};

function frmReportOverViewGlobals() {
    frmReportOverView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmReportOverView,
        "enabledForIdleTimeout": false,
        "id": "frmReportOverView",
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