function initializeCopyFBox0c8e135f81d2742() {
    CopyFBox0c8e135f81d2742 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35dp",
        "id": "CopyFBox0c8e135f81d2742",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0c8e135f81d2742.setDefaultUnit(kony.flex.DP);
    var FlexContainer02ff0ab8bb80847 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
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
    var lblSymptoms = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblSymptoms",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel08221d6ceb12f4f",
        "text": "Good",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 2, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgSelection = new kony.ui.Image2({
        "height": "20dp",
        "id": "imgSelection",
        "isVisible": true,
        "right": "2%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "9dp",
        "width": "35dp",
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
    FlexContainer02ff0ab8bb80847.add(lblSymptoms, imgSelection);
    CopyFBox0c8e135f81d2742.add(FlexContainer02ff0ab8bb80847);
}