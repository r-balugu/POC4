function initializeCopyFBox06d17178365574d() {
    CopyFBox06d17178365574d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "CopyFBox06d17178365574d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox06d17178365574d.setDefaultUnit(kony.flex.DP);
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
    var lblOption = new kony.ui.Label({
        "height": "100%",
        "id": "lblOption",
        "isVisible": true,
        "left": "55dp",
        "skin": "CopyslLabel09712fce068c547",
        "text": "Label",
        "top": "0dp",
        "width": "78.00%",
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
    var imgContact = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50.00%",
        "id": "imgContact",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "22.00%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FlexContainer0004762119ea943.add(lblOption, imgContact);
    CopyFBox06d17178365574d.add(FlexContainer0004762119ea943);
}