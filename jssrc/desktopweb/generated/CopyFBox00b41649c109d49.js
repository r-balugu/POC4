function initializeCopyFBox00b41649c109d49() {
    CopyFBox00b41649c109d49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "CopyFBox00b41649c109d49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    CopyFBox00b41649c109d49.setDefaultUnit(kony.flex.DP);
    var flexList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox097afc1250bcb43",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexList.setDefaultUnit(kony.flex.DP);
    var imgNextArrow = new kony.ui.Image2({
        "centerY": "50%",
        "height": "100%",
        "id": "imgNextArrow",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "14%",
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
    var lblList = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblList",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel06ed82f1e908748",
        "text": "Label",
        "width": "80%",
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
    }, {});
    flexList.add(imgNextArrow, lblList);
    CopyFBox00b41649c109d49.add(flexList);
}