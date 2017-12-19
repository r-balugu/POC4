function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxOverviewMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxOverviewMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxOverviewMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox07b808c87af814b",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblHeading = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel0ab9fa8ac3f8944",
        "text": "MS Overview",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "18dp",
        "id": "btnBack",
        "isVisible": true,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue097a76463da414e",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgHam = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "imgHam",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "menun_icn.png",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(lblHeading, btnBack, imgHam);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0b5b9dce6164b4b",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var Image017659023341b49 = new kony.ui.Image2({
        "height": "30dp",
        "id": "Image017659023341b49",
        "isVisible": true,
        "right": "5%",
        "skin": "slImage",
        "src": "helpn_icn.png",
        "top": "3%",
        "width": "30dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image0fb4c5f94f3874f = new kony.ui.Image2({
        "centerX": "50%",
        "height": "20%",
        "id": "Image0fb4c5f94f3874f",
        "isVisible": true,
        "skin": "slImage",
        "src": "profilepic.png",
        "top": "7%",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblName = new kony.ui.Label({
        "bottom": "67%",
        "centerX": "50%",
        "id": "lblName",
        "isVisible": true,
        "skin": "CopyslLabel0ba41a93407cd4f",
        "text": "Hi, Melina!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer00d15158b8e2842 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "60%",
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer00d15158b8e2842",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer00d15158b8e2842.setDefaultUnit(kony.flex.DP);
    var Image07765d59bd2e04b = new kony.ui.Image2({
        "centerY": "45%",
        "height": "50%",
        "id": "Image07765d59bd2e04b",
        "isVisible": true,
        "left": "18%",
        "skin": "slImage",
        "src": "weather_icn.png",
        "top": "10dp",
        "width": "10%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0c68c41d1d3c448 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0c68c41d1d3c448",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0800bfd82b71946",
        "text": "11-10-2016,  10:00 AM  Clear sky",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer00d15158b8e2842.add(Image07765d59bd2e04b, Label0c68c41d1d3c448);
    var FlexContainer0031736374ff34d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "25%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "FlexContainer0031736374ff34d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0208b563c0bc741",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0031736374ff34d.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f63b69a4037444 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0f63b69a4037444",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxSubHeaderNorm",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f63b69a4037444.setDefaultUnit(kony.flex.DP);
    var Label0852fde09fe0646 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0852fde09fe0646",
        "isVisible": true,
        "skin": "sknlblSubHeaderDarkBlue",
        "text": "How was your MS Today",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0f63b69a4037444.add(Label0852fde09fe0646);
    var FlexContainer0abec2cd1c5db43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "FlexContainer0abec2cd1c5db43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0abec2cd1c5db43.setDefaultUnit(kony.flex.DP);
    var CopyImage0e76ae97216d04f = new kony.ui.Image2({
        "centerX": "50%",
        "height": "63.83%",
        "id": "CopyImage0e76ae97216d04f",
        "isVisible": true,
        "skin": "slImage",
        "src": "goodn_icn.png",
        "top": "10%",
        "width": "71.58%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0ea3f10552e9a43 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "Label0ea3f10552e9a43",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "text": "Good",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0abec2cd1c5db43.add(CopyImage0e76ae97216d04f, Label0ea3f10552e9a43);
    var CopyFlexContainer07ca0fc86e7d24f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "CopyFlexContainer07ca0fc86e7d24f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33.50%",
        "skin": "slFbox",
        "top": "20%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07ca0fc86e7d24f.setDefaultUnit(kony.flex.DP);
    var CopyImage0792de6dd2f1448 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "63.83%",
        "id": "CopyImage0792de6dd2f1448",
        "isVisible": true,
        "skin": "slImage",
        "src": "averagen_icn.png",
        "top": "10%",
        "width": "71.58%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel000b3348c02844b = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopyLabel000b3348c02844b",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "text": "Average",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer07ca0fc86e7d24f.add(CopyImage0792de6dd2f1448, CopyLabel000b3348c02844b);
    var CopyFlexContainer02087c365b78949 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "CopyFlexContainer02087c365b78949",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "67%",
        "skin": "slFbox",
        "top": "20%",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer02087c365b78949.setDefaultUnit(kony.flex.DP);
    var CopyImage0e20d9300ce9a4f = new kony.ui.Image2({
        "centerX": "50%",
        "height": "63.83%",
        "id": "CopyImage0e20d9300ce9a4f",
        "isVisible": true,
        "skin": "slImage",
        "src": "badn_icn.png",
        "top": "10%",
        "width": "71.58%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0b73cf8297e0244 = new kony.ui.Label({
        "bottom": "10%",
        "centerX": "50%",
        "id": "CopyLabel0b73cf8297e0244",
        "isVisible": true,
        "skin": "lblDarkBlue",
        "text": "Bad",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer02087c365b78949.add(CopyImage0e20d9300ce9a4f, CopyLabel0b73cf8297e0244);
    FlexContainer0031736374ff34d.add(FlexContainer0f63b69a4037444, FlexContainer0abec2cd1c5db43, CopyFlexContainer07ca0fc86e7d24f, CopyFlexContainer02087c365b78949);
    var Button0c7861d1f6fd548 = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "slButtonGlossRed",
        "height": "9%",
        "id": "Button0c7861d1f6fd548",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknCommonBtnN",
        "text": "Submit",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0227178f35c444f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "13%",
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0227178f35c444f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0227178f35c444f.setDefaultUnit(kony.flex.DP);
    var Label077e0eef44cb24d = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label077e0eef44cb24d",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0162e8dc2dd3845",
        "text": "Medication Taken?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnYes = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed05a4f0976a8cf47",
        "height": "60%",
        "id": "btnYes",
        "isVisible": true,
        "right": "30%",
        "skin": "CopyslButtonGlossBlue0123d8c49f72242",
        "text": "Yes",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNo = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0123d8c49f72242",
        "height": "60%",
        "id": "btnNo",
        "isVisible": true,
        "right": "5%",
        "skin": "CopyslButtonGlossRed05a4f0976a8cf47",
        "text": "No",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0227178f35c444f.add(Label077e0eef44cb24d, btnYes, btnNo);
    var Label0fe70f0083f394a = new kony.ui.Label({
        "bottom": "10%",
        "id": "Label0fe70f0083f394a",
        "isVisible": true,
        "right": "36%",
        "skin": "CopyslLabel0e763c9b76c7249",
        "text": "Details",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxBody.add(Image017659023341b49, Image0fb4c5f94f3874f, lblName, FlexContainer00d15158b8e2842, FlexContainer0031736374ff34d, Button0c7861d1f6fd548, FlexContainer0227178f35c444f, Label0fe70f0083f394a);
    flxOverviewMain.add(flxHeader, flxBody);
    frmHome.add(flxOverviewMain);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_cd3c33e1798145a9b940b34b44719356,
        "skin": "CopyslForm0919d9be8cf5949"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};