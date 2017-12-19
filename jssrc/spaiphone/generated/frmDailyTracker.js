function addWidgetsfrmDailyTracker() {
    frmDailyTracker.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 20
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
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
        "centerX": "50.05%",
        "centerY": "50.34%",
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel0ab9fa8ac3f8944",
        "text": "Daily Tracker",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "18dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_779291c83f72492b84489761000dd304,
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
        "isVisible": false,
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
    var btnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0629806af586148",
        "height": "100%",
        "id": "btnCancel",
        "isVisible": false,
        "left": "0%",
        "onClick": AS_Button_c38ff527549247839019708806c314d2,
        "skin": "CopyslButtonGlossBlue0629806af586148",
        "text": "Cancel",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSave = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0629806af586148",
        "height": "100%",
        "id": "btnSave",
        "isVisible": true,
        "onClick": AS_Button_4364280dfb9545f189e9a87a2d99e142,
        "right": "0%",
        "skin": "CopyslButtonGlossBlue0629806af586148",
        "text": "Save",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer041f6c9ae426243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer041f6c9ae426243",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "onClick": AS_FlexContainer_e68c13e18b644b05ae95f3114855a3e0,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    FlexContainer041f6c9ae426243.setDefaultUnit(kony.flex.DP);
    FlexContainer041f6c9ae426243.add();
    flxHeader.add(lblHeading, btnBack, imgHam, btnCancel, btnSave, FlexContainer041f6c9ae426243);
    var flxScrollBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "92%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "skScrollWhite",
        "top": "8%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrollBody.setDefaultUnit(kony.flex.DP);
    var flxWayUfeel = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "flxWayUfeel",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxWayUfeel.setDefaultUnit(kony.flex.DP);
    var lblhowdoyoufeel = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "lblhowdoyoufeel",
        "isVisible": true,
        "skin": "sklblBlack95",
        "text": "Concentration",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderConcentrationValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderConcentrationValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_b0b639d069df400aa13c500b8faac602,
        "onSlide": AS_Slider_903a244db13a4598b49e8eb1d0dd4587,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {
        "maxLabel": "10",
        "minLabel": "0",
        "thickness": 1
    });
    var flxAvg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxAvg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    flxAvg.setDefaultUnit(kony.flex.DP);
    var img = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "img",
        "isVisible": true,
        "skin": "slImage",
        "src": "ave_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAverage = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "lblAverage",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Average",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxAvg.add(img, lblAverage);
    var lbl0 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "lbl0",
        "isVisible": true,
        "left": "2%",
        "skin": "sklbl80Black",
        "text": "0",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lbl10 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "lbl10",
        "isVisible": true,
        "right": "2%",
        "skin": "sklbl80Black",
        "text": "10",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var flxBad = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxBad",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    flxBad.setDefaultUnit(kony.flex.DP);
    var Copyimg0bfb698756e9e41 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0bfb698756e9e41",
        "isVisible": true,
        "skin": "slImage",
        "src": "reallybad_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage03d4da1d6bd4f4a = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage03d4da1d6bd4f4a",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Bad",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxBad.add(Copyimg0bfb698756e9e41, CopylblAverage03d4da1d6bd4f4a);
    var flxGood = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxGood",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    flxGood.setDefaultUnit(kony.flex.DP);
    var Copyimg0489887c90f9345 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0489887c90f9345",
        "isVisible": true,
        "skin": "slImage",
        "src": "verygood_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage08b49627869c445 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage08b49627869c445",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Good",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxGood.add(Copyimg0489887c90f9345, CopylblAverage08b49627869c445);
    flxWayUfeel.add(lblhowdoyoufeel, sliderConcentrationValue, flxAvg, lbl0, lbl10, flxBad, flxGood);
    var CopyflxWayUfeel07c82698c5e3b4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "CopyflxWayUfeel07c82698c5e3b4e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxWayUfeel07c82698c5e3b4e.setDefaultUnit(kony.flex.DP);
    var Copylblhowdoyoufeel0deda0611e4c148 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "Copylblhowdoyoufeel0deda0611e4c148",
        "isVisible": true,
        "skin": "sklblBlack95",
        "text": "Memory",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderMemoryValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderMemoryValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_3c6457246fa34bb2ba9c175b64c6a7af,
        "onSlide": AS_Slider_40f1b2a9206f40bcbfd858fe6fd06216,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {
        "maxLabel": "10",
        "minLabel": "0",
        "thickness": 1
    });
    var CopyflxAvg02afe09c6a02a4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxAvg02afe09c6a02a4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxAvg02afe09c6a02a4f.setDefaultUnit(kony.flex.DP);
    var Copyimg02b6e3df10dbf46 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg02b6e3df10dbf46",
        "isVisible": true,
        "skin": "slImage",
        "src": "ave_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0ff8095c60c8743 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0ff8095c60c8743",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Average",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxAvg02afe09c6a02a4f.add(Copyimg02b6e3df10dbf46, CopylblAverage0ff8095c60c8743);
    var Copylbl08b8aebe11b0948 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl08b8aebe11b0948",
        "isVisible": true,
        "left": "2%",
        "skin": "sklbl80Black",
        "text": "0",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Copylbl05ddd1055ce514c = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl05ddd1055ce514c",
        "isVisible": true,
        "right": "2%",
        "skin": "sklbl80Black",
        "text": "10",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyflxBad06b609cbb05f944 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxBad06b609cbb05f944",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxBad06b609cbb05f944.setDefaultUnit(kony.flex.DP);
    var Copyimg0a465f2137b2f4c = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0a465f2137b2f4c",
        "isVisible": true,
        "skin": "slImage",
        "src": "reallybad_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage053e2b9f57efc44 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage053e2b9f57efc44",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Bad",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxBad06b609cbb05f944.add(Copyimg0a465f2137b2f4c, CopylblAverage053e2b9f57efc44);
    var CopyflxGood0ea852f82586546 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxGood0ea852f82586546",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxGood0ea852f82586546.setDefaultUnit(kony.flex.DP);
    var Copyimg0c72bb3be388a49 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0c72bb3be388a49",
        "isVisible": true,
        "skin": "slImage",
        "src": "verygood_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage03eb7d399f7bf48 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage03eb7d399f7bf48",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Good",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxGood0ea852f82586546.add(Copyimg0c72bb3be388a49, CopylblAverage03eb7d399f7bf48);
    CopyflxWayUfeel07c82698c5e3b4e.add(Copylblhowdoyoufeel0deda0611e4c148, sliderMemoryValue, CopyflxAvg02afe09c6a02a4f, Copylbl08b8aebe11b0948, Copylbl05ddd1055ce514c, CopyflxBad06b609cbb05f944, CopyflxGood0ea852f82586546);
    var CopyflxWayUfeel0346ecee72f1049 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "CopyflxWayUfeel0346ecee72f1049",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxWayUfeel0346ecee72f1049.setDefaultUnit(kony.flex.DP);
    var Copylblhowdoyoufeel01dfe36c095ab46 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "Copylblhowdoyoufeel01dfe36c095ab46",
        "isVisible": true,
        "skin": "sklblBlack95",
        "text": "Mood",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderMoodValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderMoodValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_74cc212887e44a51b111f6cacb012406,
        "onSlide": AS_Slider_c63ccb9856cf4380af907568511cd311,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {
        "maxLabel": "10",
        "minLabel": "0",
        "thickness": 1
    });
    var CopyflxAvg048298bcc4cf145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxAvg048298bcc4cf145",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxAvg048298bcc4cf145.setDefaultUnit(kony.flex.DP);
    var Copyimg042e8a87e23184a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg042e8a87e23184a",
        "isVisible": true,
        "skin": "slImage",
        "src": "ave_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0d612bf032d8e49 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0d612bf032d8e49",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Average",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxAvg048298bcc4cf145.add(Copyimg042e8a87e23184a, CopylblAverage0d612bf032d8e49);
    var Copylbl0ee18b5a56b6c4d = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl0ee18b5a56b6c4d",
        "isVisible": true,
        "left": "2%",
        "skin": "sklbl80Black",
        "text": "0",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Copylbl045a20967afb449 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl045a20967afb449",
        "isVisible": true,
        "right": "2%",
        "skin": "sklbl80Black",
        "text": "10",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyflxBad031a25b9d664e47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxBad031a25b9d664e47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxBad031a25b9d664e47.setDefaultUnit(kony.flex.DP);
    var Copyimg0ff8c39e0645444 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0ff8c39e0645444",
        "isVisible": true,
        "skin": "slImage",
        "src": "reallybad_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0a15171aca0404f = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0a15171aca0404f",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Bad",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxBad031a25b9d664e47.add(Copyimg0ff8c39e0645444, CopylblAverage0a15171aca0404f);
    var CopyflxGood0ca1f0304b95548 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxGood0ca1f0304b95548",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxGood0ca1f0304b95548.setDefaultUnit(kony.flex.DP);
    var Copyimg072acccc3f5da47 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg072acccc3f5da47",
        "isVisible": true,
        "skin": "slImage",
        "src": "verygood_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0cd68d397e96f4f = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0cd68d397e96f4f",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Good",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxGood0ca1f0304b95548.add(Copyimg072acccc3f5da47, CopylblAverage0cd68d397e96f4f);
    CopyflxWayUfeel0346ecee72f1049.add(Copylblhowdoyoufeel01dfe36c095ab46, sliderMoodValue, CopyflxAvg048298bcc4cf145, Copylbl0ee18b5a56b6c4d, Copylbl045a20967afb449, CopyflxBad031a25b9d664e47, CopyflxGood0ca1f0304b95548);
    var CopyflxWayUfeel0a234f10f09f546 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "CopyflxWayUfeel0a234f10f09f546",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxWayUfeel0a234f10f09f546.setDefaultUnit(kony.flex.DP);
    var Copylblhowdoyoufeel03a5ea02e57cd45 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "Copylblhowdoyoufeel03a5ea02e57cd45",
        "isVisible": true,
        "skin": "sklblBlack95",
        "text": "Sleep Quality",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderSleepQualityValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderSleepQualityValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_9c376916b6ec4f5497a9a2a53b58fd25,
        "onSlide": AS_Slider_54571e0db21a4e59a2b6532296197501,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {
        "maxLabel": "10",
        "minLabel": "0",
        "thickness": 1
    });
    var CopyflxAvg0de839c8f0a2e4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxAvg0de839c8f0a2e4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxAvg0de839c8f0a2e4f.setDefaultUnit(kony.flex.DP);
    var Copyimg08bb69b6c1c1e46 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg08bb69b6c1c1e46",
        "isVisible": true,
        "skin": "slImage",
        "src": "ave_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0d8b20ed11bae45 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0d8b20ed11bae45",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Average",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxAvg0de839c8f0a2e4f.add(Copyimg08bb69b6c1c1e46, CopylblAverage0d8b20ed11bae45);
    var Copylbl03c78be53b8d948 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl03c78be53b8d948",
        "isVisible": true,
        "left": "2%",
        "skin": "sklbl80Black",
        "text": "0",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Copylbl022ac15e838dd48 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl022ac15e838dd48",
        "isVisible": true,
        "right": "2%",
        "skin": "sklbl80Black",
        "text": "10",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyflxBad0f542ff4be1dd47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxBad0f542ff4be1dd47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxBad0f542ff4be1dd47.setDefaultUnit(kony.flex.DP);
    var Copyimg0c79eceb3bd7543 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0c79eceb3bd7543",
        "isVisible": true,
        "skin": "slImage",
        "src": "reallybad_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage020c16b18c19f46 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage020c16b18c19f46",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Bad",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxBad0f542ff4be1dd47.add(Copyimg0c79eceb3bd7543, CopylblAverage020c16b18c19f46);
    var CopyflxGood00be47730f7e04b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxGood00be47730f7e04b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxGood00be47730f7e04b.setDefaultUnit(kony.flex.DP);
    var Copyimg064d6507fbab14a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg064d6507fbab14a",
        "isVisible": true,
        "skin": "slImage",
        "src": "verygood_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage06ce37f0fe45948 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage06ce37f0fe45948",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Good",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxGood00be47730f7e04b.add(Copyimg064d6507fbab14a, CopylblAverage06ce37f0fe45948);
    CopyflxWayUfeel0a234f10f09f546.add(Copylblhowdoyoufeel03a5ea02e57cd45, sliderSleepQualityValue, CopyflxAvg0de839c8f0a2e4f, Copylbl03c78be53b8d948, Copylbl022ac15e838dd48, CopyflxBad0f542ff4be1dd47, CopyflxGood00be47730f7e04b);
    var CopyflxWayUfeel0c9d13fd0686749 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "CopyflxWayUfeel0c9d13fd0686749",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxWayUfeel0c9d13fd0686749.setDefaultUnit(kony.flex.DP);
    var Copylblhowdoyoufeel0a8baaedb9ac149 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "Copylblhowdoyoufeel0a8baaedb9ac149",
        "isVisible": true,
        "skin": "sklblBlack95",
        "text": "Energy",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderEnergyValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderEnergyValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_cd6292acfa7444b183dca170344a8c44,
        "onSlide": AS_Slider_e42a8979c2cd4dc4858fa05cd28c4472,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {
        "maxLabel": "10",
        "minLabel": "0",
        "thickness": 1
    });
    var CopyflxAvg06ca284c27a9547 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxAvg06ca284c27a9547",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxAvg06ca284c27a9547.setDefaultUnit(kony.flex.DP);
    var Copyimg00ac3e34f510843 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg00ac3e34f510843",
        "isVisible": true,
        "skin": "slImage",
        "src": "ave_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0368ee491dc5d4c = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0368ee491dc5d4c",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Average",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxAvg06ca284c27a9547.add(Copyimg00ac3e34f510843, CopylblAverage0368ee491dc5d4c);
    var Copylbl004ceab81ab5442 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl004ceab81ab5442",
        "isVisible": true,
        "left": "2%",
        "skin": "sklbl80Black",
        "text": "0",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Copylbl0c615a2a8beb94a = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl0c615a2a8beb94a",
        "isVisible": true,
        "right": "2%",
        "skin": "sklbl80Black",
        "text": "10",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyflxBad0261d3a959dea47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxBad0261d3a959dea47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxBad0261d3a959dea47.setDefaultUnit(kony.flex.DP);
    var Copyimg03e5d2c341d084e = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg03e5d2c341d084e",
        "isVisible": true,
        "skin": "slImage",
        "src": "reallybad_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage017f22cadbd4448 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage017f22cadbd4448",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Bad",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxBad0261d3a959dea47.add(Copyimg03e5d2c341d084e, CopylblAverage017f22cadbd4448);
    var CopyflxGood07911ded91f1a4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxGood07911ded91f1a4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxGood07911ded91f1a4b.setDefaultUnit(kony.flex.DP);
    var Copyimg0d0f901a9a8d848 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0d0f901a9a8d848",
        "isVisible": true,
        "skin": "slImage",
        "src": "verygood_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0f86b2d98132041 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0f86b2d98132041",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Good",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxGood07911ded91f1a4b.add(Copyimg0d0f901a9a8d848, CopylblAverage0f86b2d98132041);
    CopyflxWayUfeel0c9d13fd0686749.add(Copylblhowdoyoufeel0a8baaedb9ac149, sliderEnergyValue, CopyflxAvg06ca284c27a9547, Copylbl004ceab81ab5442, Copylbl0c615a2a8beb94a, CopyflxBad0261d3a959dea47, CopyflxGood07911ded91f1a4b);
    var CopyflxWayUfeel0287ab2cb918845 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "CopyflxWayUfeel0287ab2cb918845",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxWayUfeel0287ab2cb918845.setDefaultUnit(kony.flex.DP);
    var Copylblhowdoyoufeel09285cc3b3c0445 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "Copylblhowdoyoufeel09285cc3b3c0445",
        "isVisible": true,
        "skin": "sklblBlack95",
        "text": "Activities",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var sliderActivitiesValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderActivitiesValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_bf5402184d534e318ba9dc1b799ede02,
        "onSlide": AS_Slider_3e435c75f8594366a215f155b4cf817a,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {
        "maxLabel": "10",
        "minLabel": "0",
        "thickness": 1
    });
    var CopyflxAvg04b72d48f7a874e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxAvg04b72d48f7a874e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxAvg04b72d48f7a874e.setDefaultUnit(kony.flex.DP);
    var Copyimg0db1154ada23d43 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0db1154ada23d43",
        "isVisible": true,
        "skin": "slImage",
        "src": "ave_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0875a3e6975994b = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0875a3e6975994b",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Average",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxAvg04b72d48f7a874e.add(Copyimg0db1154ada23d43, CopylblAverage0875a3e6975994b);
    var Copylbl0571f4e42e6e440 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl0571f4e42e6e440",
        "isVisible": true,
        "left": "2%",
        "skin": "sklbl80Black",
        "text": "0",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Copylbl0250b0b9f77d643 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl0250b0b9f77d643",
        "isVisible": true,
        "right": "2%",
        "skin": "sklbl80Black",
        "text": "10",
        "top": "10%",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var CopyflxBad01bae295ae47c49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxBad01bae295ae47c49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxBad01bae295ae47c49.setDefaultUnit(kony.flex.DP);
    var Copyimg08e2f183c3e604d = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg08e2f183c3e604d",
        "isVisible": true,
        "skin": "slImage",
        "src": "reallybad_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0764bd6be9c6949 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0764bd6be9c6949",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Bad",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxBad01bae295ae47c49.add(Copyimg08e2f183c3e604d, CopylblAverage0764bd6be9c6949);
    var CopyflxGood012837f4519c94c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxGood012837f4519c94c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxGood012837f4519c94c.setDefaultUnit(kony.flex.DP);
    var Copyimg08743be88073642 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg08743be88073642",
        "isVisible": true,
        "skin": "slImage",
        "src": "verygood_icn.png",
        "top": "0%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopylblAverage0b96716a995d741 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0b96716a995d741",
        "isVisible": true,
        "skin": "sklbl50black",
        "text": "Good",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopyflxGood012837f4519c94c.add(Copyimg08743be88073642, CopylblAverage0b96716a995d741);
    CopyflxWayUfeel0287ab2cb918845.add(Copylblhowdoyoufeel09285cc3b3c0445, sliderActivitiesValue, CopyflxAvg04b72d48f7a874e, Copylbl0571f4e42e6e440, Copylbl0250b0b9f77d643, CopyflxBad01bae295ae47c49, CopyflxGood012837f4519c94c);
    var flxBottomBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxBottomBtn",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBottomBtn.setDefaultUnit(kony.flex.DP);
    var btnRecord = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skBrownishYellowN",
        "height": "70%",
        "id": "btnRecord",
        "isVisible": true,
        "left": "13%",
        "onClick": AS_Button_268c6cf3ef654d9c9eff3fc41c9f63ee,
        "skin": "skBrownishYellow",
        "text": "Save",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnRecord0b25cd98ebf6945 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skBrownishYellow",
        "height": "70%",
        "id": "CopybtnRecord0b25cd98ebf6945",
        "isVisible": true,
        "onClick": AS_Button_3813a5a909b247e7b9f3829e36405b0d,
        "right": "13%",
        "skin": "skBrownishYellowN",
        "text": "Cancel",
        "top": 0,
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBottomBtn.add(btnRecord, CopybtnRecord0b25cd98ebf6945);
    flxScrollBody.add(flxWayUfeel, CopyflxWayUfeel07c82698c5e3b4e, CopyflxWayUfeel0346ecee72f1049, CopyflxWayUfeel0a234f10f09f546, CopyflxWayUfeel0c9d13fd0686749, CopyflxWayUfeel0287ab2cb918845, flxBottomBtn);
    flxMain.add(flxHeader, flxScrollBody);
    frmDailyTracker.add(flxMain);
};

function frmDailyTrackerGlobals() {
    frmDailyTracker = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDailyTracker,
        "bounces": false,
        "enabledForIdleTimeout": false,
        "id": "frmDailyTracker",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_b16c0e28384240f98ed6bb5bb7083a0c,
        "skin": "CopyslForm0919d9be8cf5949",
        "verticalScrollIndicator": false
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};