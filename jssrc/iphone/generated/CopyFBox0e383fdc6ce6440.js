function initializeCopyFBox0e383fdc6ce6440() {
    CopyFBox0e383fdc6ce6440 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFBox0e383fdc6ce6440",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0e383fdc6ce6440.setDefaultUnit(kony.flex.DP);
    var FlexContainer02ff0ab8bb80847 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer02ff0ab8bb80847",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer02ff0ab8bb80847.setDefaultUnit(kony.flex.DP);
    var lblRole = new kony.ui.Label({
        "height": "100%",
        "id": "lblRole",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel08221d6ceb12f4f",
        "text": "Good",
        "top": "0dp",
        "width": "61.11%",
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
    var lblName = new kony.ui.Label({
        "height": "100%",
        "id": "lblName",
        "isVisible": true,
        "right": "2%",
        "skin": "CopyslLabel03ffed05d0f6740",
        "text": "Good",
        "top": "0dp",
        "width": "45.60%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
    FlexContainer02ff0ab8bb80847.add(lblRole, lblName);
    CopyFBox0e383fdc6ce6440.add(FlexContainer02ff0ab8bb80847);
}