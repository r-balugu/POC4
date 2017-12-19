function initializeFBox0ab2ab5860dc64b() {
    FBox0ab2ab5860dc64b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "40dp",
        "id": "FBox0ab2ab5860dc64b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0ab2ab5860dc64b.setDefaultUnit(kony.flex.DP);
    var FlexContainer0983da676d55948 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0983da676d55948",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0983da676d55948.setDefaultUnit(kony.flex.DP);
    var lblAllergi = new kony.ui.Label({
        "height": "100%",
        "id": "lblAllergi",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel08221d6ceb12f4f",
        "text": "Good",
        "top": "0%",
        "width": "100%",
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
    FlexContainer0983da676d55948.add(lblAllergi);
    FBox0ab2ab5860dc64b.add(FlexContainer0983da676d55948);
}