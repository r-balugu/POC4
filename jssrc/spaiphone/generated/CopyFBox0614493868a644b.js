function initializeCopyFBox0614493868a644b() {
    CopyFBox0614493868a644b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "CopyFBox0614493868a644b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0614493868a644b.setDefaultUnit(kony.flex.DP);
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
    var imgList = new kony.ui.Image2({
        "height": "100%",
        "id": "imgList",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "20%",
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
    var imgNextArrow = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNextArrow",
        "isVisible": true,
        "left": "92%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "6%",
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
        "height": "100%",
        "id": "lblList",
        "isVisible": true,
        "left": "23%",
        "skin": "CopyslLabel0fcbc525631844e",
        "text": "Label",
        "top": "0%",
        "width": "67%",
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
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": false,
        "left": "23%",
        "skin": "CopyslLabel05204da2e323948",
        "text": "Label",
        "top": "50%",
        "width": "67%",
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
    flexList.add(imgList, imgNextArrow, lblList, lblDesc);
    CopyFBox0614493868a644b.add(flexList);
}