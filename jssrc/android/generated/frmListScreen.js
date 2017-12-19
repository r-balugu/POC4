function addWidgetsfrmListScreen() {
    frmListScreen.setDefaultUnit(kony.flex.DP);
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
        "text": "List Screen",
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
    var imgHam = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "imgHam",
        "isVisible": true,
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
    var CopyimgHam0bf5b3e87d6cd4e = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80%",
        "id": "CopyimgHam0bf5b3e87d6cd4e",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "back.png",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer02877a7d8b64f4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer02877a7d8b64f4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_576aa4f86df545109bd8a2050dd88b6a,
        "skin": "slFbox",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer02877a7d8b64f4b.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer02877a7d8b64f4b.add();
    var CopyFlexContainer0c7141f7fde7743 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0c7141f7fde7743",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e85d93d2b1f44e2cb6ff81189dcfc408,
        "right": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0c7141f7fde7743.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0c7141f7fde7743.add();
    flxHeader.add(lblHeading, imgHam, CopyimgHam0bf5b3e87d6cd4e, CopyFlexContainer02877a7d8b64f4b, CopyFlexContainer0c7141f7fde7743);
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
    var segList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgList": "",
            "imgNextArrow": "",
            "lblDesc": "",
            "lblList": ""
        }],
        "groupCells": false,
        "height": "90%",
        "id": "segList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a787e5fcb92949d2ab7993d916ad1345,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg01d148924d0214b",
        "rowTemplate": CopyFBox0614493868a644b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "10%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexList": "flexList",
            "imgList": "imgList",
            "imgNextArrow": "imgNextArrow",
            "lblDesc": "lblDesc",
            "lblList": "lblList"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image01ce20f55c91443 = new kony.ui.Image2({
        "height": "8%",
        "id": "Image01ce20f55c91443",
        "isVisible": true,
        "right": "3%",
        "skin": "slImage",
        "src": "refresh1.png",
        "top": "1%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0864f534e6a0748 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0864f534e6a0748",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_772182c02274451dacc2bf4802a8445b,
        "right": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0864f534e6a0748.setDefaultUnit(kony.flex.DP);
    FlexContainer0864f534e6a0748.add();
    var listUser = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox082bcc7a2fcf44b",
        "height": "6%",
        "id": "listUser",
        "isVisible": true,
        "left": "3%",
        "masterData": [
            ["0", "User 1"],
            ["1", "User 2"]
        ],
        "onSelection": AS_ListBox_e526b63f51c04643a841b816b9786913,
        "selectedKey": "0",
        "selectedKeyValue": ["0", "User 1"],
        "skin": "CopyslListBox082bcc7a2fcf44b",
        "top": "2%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "dropdown_trans.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var Image09ae3f92da3014f = new kony.ui.Image2({
        "height": "6%",
        "id": "Image09ae3f92da3014f",
        "isVisible": true,
        "right": "17%",
        "skin": "slImage",
        "src": "dropdown.png",
        "top": "2%",
        "width": "6%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody.add(segList, Image01ce20f55c91443, FlexContainer0864f534e6a0748, listUser, Image09ae3f92da3014f);
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
        "rowTemplate": CopyFBox0ca0f3499f05c49,
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
    frmListScreen.add(flxMain, flxScrollHamburger);
};

function frmListScreenGlobals() {
    frmListScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmListScreen,
        "enabledForIdleTimeout": false,
        "id": "frmListScreen",
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