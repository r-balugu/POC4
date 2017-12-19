function addWidgetsfrmMSOverview() {
    frmMSOverview.setDefaultUnit(kony.flex.DP);
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
        "i18n_text": "kony.i18n.getLocalizedString(\"msoverview\")",
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
        "height": "25dp",
        "id": "btnBack",
        "isVisible": false,
        "onClick": AS_Button_19151196b3004468a60b680cbd0e935e,
        "right": "5%",
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
    var FlexContainer0a8004e8dd7a341 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0a8004e8dd7a341",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_0890cfc6487f4176ad190110b02cb4fb,
        "skin": "slFbox",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a8004e8dd7a341.setDefaultUnit(kony.flex.DP);
    FlexContainer0a8004e8dd7a341.add();
    var FlexContainer0a8912b7f912b4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0a8912b7f912b4d",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "83%",
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a8912b7f912b4d.setDefaultUnit(kony.flex.DP);
    FlexContainer0a8912b7f912b4d.add();
    flxHeader.add(lblHeading, btnBack, imgHam, FlexContainer0a8004e8dd7a341, FlexContainer0a8912b7f912b4d);
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
    var imgInfo = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgInfo",
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
    var imgUserProfilePic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "20%",
        "id": "imgUserProfilePic",
        "isVisible": true,
        "skin": "slImage",
        "src": "profilepic.png",
        "top": "7%",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblUserName = new kony.ui.Label({
        "bottom": "67%",
        "centerX": "50%",
        "id": "lblUserName",
        "isVisible": true,
        "skin": "CopyslLabel0ba41a93407cd4f",
        "text": "Hi, Melina!",
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
    var flxWeather = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "60%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxWeather",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxWeather.setDefaultUnit(kony.flex.DP);
    var imgCloud = new kony.ui.Image2({
        "centerY": "45%",
        "height": "50%",
        "id": "imgCloud",
        "isVisible": true,
        "left": "11%",
        "skin": "slImage",
        "src": "weather_icn.png",
        "top": "10dp",
        "width": "10%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDateTime = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDateTime",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0800bfd82b71946",
        "i18n_text": "kony.i18n.getLocalizedString(\"clearsky\")",
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
    flxWeather.add(imgCloud, lblDateTime);
    var flxAverage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "25%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "flxAverage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0208b563c0bc741",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxAverage.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f63b69a4037444 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0f63b69a4037444",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxSubHeaderNorm",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f63b69a4037444.setDefaultUnit(kony.flex.DP);
    var Label0852fde09fe0646 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0852fde09fe0646",
        "isVisible": true,
        "skin": "sknlblSubHeaderDarkBlue",
        "i18n_text": "kony.i18n.getLocalizedString(\"howwasmstoday\")",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer0f63b69a4037444.add(Label0852fde09fe0646);
    var FlexContainer0abec2cd1c5db43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "FlexContainer0abec2cd1c5db43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "67%",
        "skin": "slFbox",
        "top": "20%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0abec2cd1c5db43.setDefaultUnit(kony.flex.DP);
    var img1 = new kony.ui.Image2({
        "centerX": "49%",
        "height": "63.83%",
        "id": "img1",
        "isVisible": true,
        "onTouchEnd": AS_Image_8fcd7340e0ba44bda83bb248a5d9ec6a,
        "skin": "slImage",
        "src": "goodn_icn.png",
        "top": "10%",
        "width": "71.58%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0ea3f10552e9a43 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "Label0ea3f10552e9a43",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "i18n_text": "kony.i18n.getLocalizedString(\"good\")",
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
    FlexContainer0abec2cd1c5db43.add(img1, Label0ea3f10552e9a43);
    var CopyFlexContainer07ca0fc86e7d24f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "CopyFlexContainer07ca0fc86e7d24f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33.50%",
        "skin": "slFbox",
        "top": "20%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07ca0fc86e7d24f.setDefaultUnit(kony.flex.DP);
    var img2 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "63.83%",
        "id": "img2",
        "isVisible": true,
        "onTouchEnd": AS_Image_3f38d1d9e77744728d52a9e958328a7b,
        "skin": "slImage",
        "src": "averagen_icn.png",
        "top": "10%",
        "width": "71.58%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel000b3348c02844b = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopyLabel000b3348c02844b",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "i18n_text": "kony.i18n.getLocalizedString(\"average\")",
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
    CopyFlexContainer07ca0fc86e7d24f.add(img2, CopyLabel000b3348c02844b);
    var CopyFlexContainer02087c365b78949 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "CopyFlexContainer02087c365b78949",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer02087c365b78949.setDefaultUnit(kony.flex.DP);
    var img3 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "63.83%",
        "id": "img3",
        "isVisible": true,
        "onTouchEnd": AS_Image_4fa8d7c18d324078addfffd7c4e5fae1,
        "skin": "slImage",
        "src": "badn_icn.png",
        "top": "10%",
        "width": "71.58%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0b73cf8297e0244 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopyLabel0b73cf8297e0244",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "i18n_text": "kony.i18n.getLocalizedString(\"bad\")",
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
    CopyFlexContainer02087c365b78949.add(img3, CopyLabel0b73cf8297e0244);
    flxAverage.add(FlexContainer0f63b69a4037444, FlexContainer0abec2cd1c5db43, CopyFlexContainer07ca0fc86e7d24f, CopyFlexContainer02087c365b78949);
    var btnSubmit = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "sknCommonBtnFocus",
        "height": "9%",
        "id": "btnSubmit",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_a0360dae30ec41d7a6b049bbf022bcf8,
        "skin": "sknCommonBtnNormal",
        "i18n_text": "kony.i18n.getLocalizedString(\"submit\")",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxYesNo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "14%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxYesNo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxYesNo.setDefaultUnit(kony.flex.DP);
    var Label077e0eef44cb24d = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label077e0eef44cb24d",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0162e8dc2dd3845",
        "i18n_text": "kony.i18n.getLocalizedString(\"madicationtaken\")",
        "top": "9dp",
        "width": "42.97%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnYes = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed05a4f0976a8cf47",
        "height": "55%",
        "id": "btnYes",
        "isVisible": true,
        "onClick": AS_Button_43c200a8dde24694a9bc5256f10d8209,
        "right": "30%",
        "skin": "CopyslButtonGlossBlue0123d8c49f72242",
        "i18n_text": "kony.i18n.getLocalizedString(\"yes\")",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNo = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0123d8c49f72242",
        "height": "55%",
        "id": "btnNo",
        "isVisible": true,
        "onClick": AS_Button_7a741275dd574bbbb5a85d91b06495a2,
        "right": "5%",
        "skin": "CopyslButtonGlossRed05a4f0976a8cf47",
        "i18n_text": "kony.i18n.getLocalizedString(\"no\")",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxYesNo.add(Label077e0eef44cb24d, btnYes, btnNo);
    var lblTxtDetails = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "54%",
        "id": "lblTxtDetails",
        "isVisible": true,
        "right": "36%",
        "skin": "CopyslLabel0e763c9b76c7249",
        "i18n_text": "kony.i18n.getLocalizedString(\"details\")",
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
    var btnCloudSync = new kony.ui.Button({
        "bottom": 0,
        "focusSkin": "sknCloudSyncFocus",
        "height": "25dp",
        "id": "btnCloudSync",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_72785779c21a4cf198ab9d05366b70a8,
        "skin": "sknCloudSync",
        "top": "3%",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody.add(imgInfo, imgUserProfilePic, lblUserName, flxWeather, flxAverage, btnSubmit, flxYesNo, lblTxtDetails, btnCloudSync);
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
        "rowTemplate": FBox00b449b54365c4f,
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
    frmMSOverview.add(flxMain, flxScrollHamburger);
};

function frmMSOverviewGlobals() {
    frmMSOverview = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMSOverview,
        "enabledForIdleTimeout": false,
        "id": "frmMSOverview",
        "init": AS_Form_c6169196d6854dc7be66248eda149072,
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