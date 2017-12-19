function addWidgetsfrmAdmin() {
    frmAdmin.setDefaultUnit(kony.flex.DP);
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
        "centerX": "50%",
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
    var lblSelectedUser = new kony.ui.Label({
        "height": "100%",
        "id": "lblSelectedUser",
        "isVisible": true,
        "left": "8%",
        "skin": "CopyslLabel04a217f12314a4d",
        "text": "Selected: User 1",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "30%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flexManage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexManage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "55%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flexManage.setDefaultUnit(kony.flex.DP);
    var btnManage = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0d52bfba983ba47",
        "height": "100%",
        "id": "btnManage",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_60ff6e6e632e45ceb33ffe7c67f5a1bc,
        "skin": "CopyslButtonGlossBlue024b50d7816084f",
        "text": "Manage User LifeHacks",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexFocus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "5dp",
        "id": "flexFocus",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6%",
        "skin": "CopyslFbox02cf70ff7983a40",
        "width": "88%",
        "zIndex": 1
    }, {}, {});
    flexFocus.setDefaultUnit(kony.flex.DP);
    flexFocus.add();
    flexManage.add(btnManage, flexFocus);
    var flexAdmin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexAdmin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "76%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flexAdmin.setDefaultUnit(kony.flex.DP);
    var btnAdmin = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0d52bfba983ba47",
        "height": "100%",
        "id": "btnAdmin",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_43b2b11cde2545c89326e287078d84bd,
        "skin": "CopyslButtonGlossBlue0d52bfba983ba47",
        "text": "LifeHacks Admin",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexAdmin.add(btnAdmin);
    var flexRefresh = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexRefresh",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_471f431385cd4492a4e2720279d4e13d,
        "right": "1%",
        "skin": "slFbox",
        "top": "0%",
        "width": "6%",
        "zIndex": 1
    }, {}, {});
    flexRefresh.setDefaultUnit(kony.flex.DP);
    var imgrefresh = new kony.ui.Image2({
        "height": "100%",
        "id": "imgrefresh",
        "isVisible": true,
        "right": "0%",
        "skin": "slImage",
        "src": "refresh1.png",
        "top": "0%",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexRefresh.add(imgrefresh);
    var imgUserImage = new kony.ui.Image2({
        "centerY": "50%",
        "height": "100%",
        "id": "imgUserImage",
        "isVisible": true,
        "left": "1%",
        "skin": "slImage",
        "src": "user1.png",
        "top": "0dp",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "30%",
        "skin": "slImage",
        "src": "ham_logo.png",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(lblSelectedUser, flexManage, flexAdmin, flexRefresh, imgUserImage, imgLogo);
    var flexSubHeaders = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "flexSubHeaders",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f7727aea9d7c40",
        "top": "8%",
        "width": "100%"
    }, {}, {});
    flexSubHeaders.setDefaultUnit(kony.flex.DP);
    var lblUser = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblUser",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel082158862318846",
        "text": "Users",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "28%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblSelected = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSelected",
        "isVisible": true,
        "left": "31%",
        "skin": "CopyslLabel082158862318846",
        "text": "Selected LifeHacks",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "31%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblAvailable = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblAvailable",
        "isVisible": true,
        "left": "68%",
        "skin": "CopyslLabel082158862318846",
        "text": "Available LifeHacks",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "30%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexSubHeaders.add(lblUser, lblSelected, lblAvailable);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "87%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "skin": "CopyslFbox0789b1fd7aaf14f",
        "top": "13%",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var segList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgNextArrow": "user1.png",
            "lblList": "User 1"
        }, {
            "imgNextArrow": "user2.png",
            "lblList": "User 2"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_45efefb998364774821d36d09d555bb5,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": true,
        "rowFocusSkin": "Copyseg0154a4745dd4047",
        "rowSkin": "Copyseg041698069888c4c",
        "rowTemplate": CopyFBox00b41649c109d49,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "separatorColor": "e7e7e700",
        "separatorRequired": true,
        "separatorThickness": 20,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexList": "flexList",
            "imgNextArrow": "imgNextArrow",
            "lblList": "lblList"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody.add(segList);
    var flexContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "87%",
        "id": "flexContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30%",
        "skin": "CopyslFbox061905ab9c2a947",
        "top": "13%",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flexContent.setDefaultUnit(kony.flex.DP);
    var flxBody2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "flxBody2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0379f8c17b01b4a",
        "top": "0%",
        "width": "43%",
        "zIndex": 1
    }, {}, {});
    flxBody2.setDefaultUnit(kony.flex.DP);
    var segListUser = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "lblList": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segListUser",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_179ea50b2b324aa49e8c7753a75bf1cc,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg08b40fb44312840",
        "rowTemplate": CopyFBox0df201c4e14474f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 2,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexList": "flexList",
            "lblList": "lblList"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody2.add(segListUser);
    var imgArrow = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100%",
        "id": "imgArrow",
        "isVisible": true,
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0%",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxBody3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "flxBody3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "2%",
        "skin": "CopyslFbox0379f8c17b01b4a",
        "top": "0%",
        "width": "43%",
        "zIndex": 1
    }, {}, {});
    flxBody3.setDefaultUnit(kony.flex.DP);
    var segListLF = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "lblList": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segListLF",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_13d676d3050848a29642bbd7bd279eeb,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg08b40fb44312840",
        "rowTemplate": CopyFBox03a088faf429d49,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 2,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexList": "flexList",
            "lblList": "lblList"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody3.add(segListLF);
    var btnSave = new kony.ui.Button({
        "bottom": "2%",
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossBlue0f715a4ec571d41",
        "height": "6%",
        "id": "btnSave",
        "isVisible": true,
        "onClick": AS_Button_a2264aa101cc479b9ecab5592b9670b3,
        "skin": "CopyslButtonGlossBlue0327d43a7cbf546",
        "text": "SAVE",
        "width": "26%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexContent.add(flxBody2, imgArrow, flxBody3, btnSave);
    flxMain.add(flxHeader, flexSubHeaders, flxBody, flexContent);
    var flxScrollHamburger = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": false,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollHamburger",
        "isVisible": false,
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
        "width": "74.15%",
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
        "rowTemplate": CopyFBox0ee4c0f67730342,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff46",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "140dp",
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
    frmAdmin.add(flxMain, flxScrollHamburger);
};

function frmAdminGlobals() {
    frmAdmin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAdmin,
        "enabledForIdleTimeout": false,
        "id": "frmAdmin",
        "init": AS_Form_e92918b841364540b13f1b1b1e6209e4,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0919d9be8cf5949"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
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
    frmAdmin.info = {
        "kuid": "2e8dd8c07e3644a2a0cd5bdac4c502aa"
    };
};