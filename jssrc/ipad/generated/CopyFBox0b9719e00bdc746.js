function initializeCopyFBox0b9719e00bdc746() {
    CopyFBox0b9719e00bdc746 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "CopyFBox0b9719e00bdc746",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0b9719e00bdc746.setDefaultUnit(kony.flex.DP);
    var flexList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "flexList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ee017ded55674b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flexList.setDefaultUnit(kony.flex.DP);
    var lblList = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexList.add(lblList);
    CopyFBox0b9719e00bdc746.add(flexList);
}