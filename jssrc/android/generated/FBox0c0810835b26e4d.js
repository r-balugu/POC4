function initializeFBox0c0810835b26e4d() {
    FBox0c0810835b26e4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FBox0c0810835b26e4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0c0810835b26e4d.setDefaultUnit(kony.flex.DP);
    var FlexContainer0004762119ea943 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0004762119ea943",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0004762119ea943.setDefaultUnit(kony.flex.DP);
    var lblLanguage = new kony.ui.Label({
        "height": "100%",
        "id": "lblLanguage",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel09712fce068c547",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    FlexContainer0004762119ea943.add(lblLanguage);
    FBox0c0810835b26e4d.add(FlexContainer0004762119ea943);
}