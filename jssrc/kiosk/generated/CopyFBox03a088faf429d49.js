function initializeCopyFBox03a088faf429d49() {
    CopyFBox03a088faf429d49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "CopyFBox03a088faf429d49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox03a088faf429d49.setDefaultUnit(kony.flex.DP);
    var flexList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "flexList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox010477447428d46",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flexList.setDefaultUnit(kony.flex.DP);
    var lblList = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblList",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0fcbc525631844e",
        "text": "Label",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flexList.add(lblList);
    CopyFBox03a088faf429d49.add(flexList);
}