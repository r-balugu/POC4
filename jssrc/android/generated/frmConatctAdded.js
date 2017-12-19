function addWidgetsfrmConatctAdded() {
    frmConatctAdded.setDefaultUnit(kony.flex.DP);
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
        "zIndex": 1
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
        "text": kony.i18n.getLocalizedString("msspecialists"),
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
        "height": "18dp",
        "id": "btnBack",
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
    var btnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0629806af586148",
        "height": "100%",
        "id": "btnCancel",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_2b4681e3fe5245e28278c853be6ae94d,
        "right": "0%",
        "skin": "CopyslButtonGlossBlue0629806af586148",
        "text": kony.i18n.getLocalizedString("Add"),
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0a8912b7f912b4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0a8912b7f912b4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_b0c0ee003eb54c828e2b13f9846cc0a8,
        "right": "1%",
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a8912b7f912b4d.setDefaultUnit(kony.flex.DP);
    FlexContainer0a8912b7f912b4d.add();
    flxHeader.add(lblHeading, btnBack, btnCancel, FlexContainer0a8912b7f912b4d);
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
    var segRole = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblName": "Dr. XXX",
            "lblRole": "MS-Specialist"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segRole",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_28d9557e67b643bcbae099b3c861ba06,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox024f1a47362834b,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "a8a8a800",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer02ff0ab8bb80847": "FlexContainer02ff0ab8bb80847",
            "lblName": "lblName",
            "lblRole": "lblRole"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBody.add(segRole);
    flxMain.add(flxHeader, flxBody);
    frmConatctAdded.add(flxMain);
};

function frmConatctAddedGlobals() {
    frmConatctAdded = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmConatctAdded,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmConatctAdded",
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