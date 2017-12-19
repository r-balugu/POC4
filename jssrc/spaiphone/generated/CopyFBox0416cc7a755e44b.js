function initializeCopyFBox0416cc7a755e44b() {
    CopyFBox0416cc7a755e44b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyFBox0416cc7a755e44b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0416cc7a755e44b.setDefaultUnit(kony.flex.DP);
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
        "width": "61.89%",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblName = new kony.ui.Label({
        "height": "100%",
        "id": "lblName",
        "isVisible": true,
        "left": "195dp",
        "skin": "CopyslLabel03ffed05d0f6740",
        "text": "Good",
        "top": "0dp",
        "width": "35.83%",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer02ff0ab8bb80847.add(lblRole, lblName);
    CopyFBox0416cc7a755e44b.add(FlexContainer02ff0ab8bb80847);
}