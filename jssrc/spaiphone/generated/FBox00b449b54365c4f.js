function initializeFBox00b449b54365c4f() {
    FBox00b449b54365c4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "14%",
        "id": "FBox00b449b54365c4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox00b449b54365c4f.setDefaultUnit(kony.flex.DP);
    var FlexContainer00625bb7649bb44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer00625bb7649bb44",
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
    FlexContainer00625bb7649bb44.setDefaultUnit(kony.flex.DP);
    var Image0199b252bf9a441 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "55%",
        "id": "Image0199b252bf9a441",
        "isVisible": true,
        "left": "2dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "15%",
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
    var lblOption = new kony.ui.Label({
        "height": "100%",
        "id": "lblOption",
        "isVisible": true,
        "left": "22%",
        "skin": "CopyslLabel0a9fb11c2c6cc42",
        "text": "Label",
        "top": "0dp",
        "width": "74.19%",
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
    FlexContainer00625bb7649bb44.add(Image0199b252bf9a441, lblOption);
    FBox00b449b54365c4f.add(FlexContainer00625bb7649bb44);
}