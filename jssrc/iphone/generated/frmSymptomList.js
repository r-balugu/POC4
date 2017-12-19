function addWidgetsfrmSymptomList() {
    frmSymptomList.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
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
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel0ab9fa8ac3f8944",
        "text": "What are you feeling?",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "18dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_871181aa237f45d28410e45b8bb04df5,
        "skin": "CopyslButtonGlossBlue097a76463da414e",
        "top": "0dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxHeader.add(lblHeading, btnBack);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0b5b9dce6164b4b",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var segSymptoms = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "imgSelection": "imagedrag.png",
            "lblSymptoms": "Symptom 1"
        }, {
            "imgSelection": "imagedrag.png",
            "lblSymptoms": "Symptom 2"
        }, {
            "imgSelection": "imagedrag.png",
            "lblSymptoms": "Symptom 3"
        }, {
            "imgSelection": "imagedrag.png",
            "lblSymptoms": "Symptom 4"
        }, {
            "imgSelection": "imagedrag.png",
            "lblSymptoms": "Symptom 5"
        }, {
            "imgSelection": "imagedrag.png",
            "lblSymptoms": "Symptom 6"
        }],
        "groupCells": false,
        "id": "segSymptoms",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a7562914f9324dc0bd378eaf55ae0132,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox0c8e135f81d2742,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "imgSelection",
            "selectedStateImage": "checkboxn.png",
            "unselectedStateImage": "transchkbx.png"
        },
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer02ff0ab8bb80847": "FlexContainer02ff0ab8bb80847",
            "imgSelection": "imgSelection",
            "lblSymptoms": "lblSymptoms"
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var flxNotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "flxNotes",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxNotes.setDefaultUnit(kony.flex.DP);
    var txtAreaNotes = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtAreaNotes",
        "height": "94%",
        "id": "txtAreaNotes",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "placeholder": "Notes",
        "skin": "sknTxtAreaNotes",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "5%",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    flxNotes.add(txtAreaNotes);
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
        "skin": "sklblBlue80",
        "text": "How do these symptoms impact the way you feel?",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var sliderImpactFeelValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderImpactFeelValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_205d49df516742159943c31209b61934,
        "onSlide": AS_Slider_f5eb320977a34f49953f2a25bb2fe299,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflxGood012837f4519c94c.add(Copyimg08743be88073642, CopylblAverage0b96716a995d741);
    CopyflxWayUfeel0287ab2cb918845.add(Copylblhowdoyoufeel09285cc3b3c0445, sliderImpactFeelValue, CopyflxAvg04b72d48f7a874e, Copylbl0571f4e42e6e440, Copylbl0250b0b9f77d643, CopyflxBad01bae295ae47c49, CopyflxGood012837f4519c94c);
    var flxSepratorLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxSepratorLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "1%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxSepratorLine.setDefaultUnit(kony.flex.DP);
    flxSepratorLine.add();
    var CopyflxWayUfeel0cda9f5b3ca4747 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "16%",
        "id": "CopyflxWayUfeel0cda9f5b3ca4747",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "skin": "CopyslFbox0f961f47010054f",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxWayUfeel0cda9f5b3ca4747.setDefaultUnit(kony.flex.DP);
    var Copylblhowdoyoufeel0f1d51bdc4c8d45 = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "Copylblhowdoyoufeel0f1d51bdc4c8d45",
        "isVisible": true,
        "skin": "sklblBlue80",
        "text": "How do these symptoms impact your daily activities?",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var sliderImpactDailyActivitiesValue = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "40%",
        "focusThumbImage": "slider_ios7.png",
        "height": "40%",
        "id": "sliderImpactDailyActivitiesValue",
        "isVisible": true,
        "leftSkin": "sksliderleft",
        "max": 10,
        "min": 0,
        "onSelection": AS_Slider_b426761197c140be8e816ff52ca65f19,
        "onSlide": AS_Slider_8f8c370686f64c2dba6e1565e26626f4,
        "rightSkin": "skSliderRight",
        "selectedValue": 5,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    var CopyflxAvg008d027659dfe47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxAvg008d027659dfe47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxAvg008d027659dfe47.setDefaultUnit(kony.flex.DP);
    var Copyimg0ef2eeb66b72c4a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0ef2eeb66b72c4a",
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
    var CopylblAverage0da1fffe8b2554b = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0da1fffe8b2554b",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflxAvg008d027659dfe47.add(Copyimg0ef2eeb66b72c4a, CopylblAverage0da1fffe8b2554b);
    var Copylbl010188c5f126e47 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl010188c5f126e47",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Copylbl048326368092140 = new kony.ui.Label({
        "centerY": "45%",
        "height": "20%",
        "id": "Copylbl048326368092140",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyflxBad040ded5ac7dd549 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxBad040ded5ac7dd549",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxBad040ded5ac7dd549.setDefaultUnit(kony.flex.DP);
    var Copyimg0890176d970cf4e = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg0890176d970cf4e",
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
    var CopylblAverage0bfa8223f965c47 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0bfa8223f965c47",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflxBad040ded5ac7dd549.add(Copyimg0890176d970cf4e, CopylblAverage0bfa8223f965c47);
    var CopyflxGood0e2341a1a74ab4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "40%",
        "id": "CopyflxGood0e2341a1a74ab4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyflxGood0e2341a1a74ab4a.setDefaultUnit(kony.flex.DP);
    var Copyimg07dec37c2e01048 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "Copyimg07dec37c2e01048",
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
    var CopylblAverage0f876cc651e2749 = new kony.ui.Label({
        "centerX": "50%",
        "height": "30%",
        "id": "CopylblAverage0f876cc651e2749",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflxGood0e2341a1a74ab4a.add(Copyimg07dec37c2e01048, CopylblAverage0f876cc651e2749);
    CopyflxWayUfeel0cda9f5b3ca4747.add(Copylblhowdoyoufeel0f1d51bdc4c8d45, sliderImpactDailyActivitiesValue, CopyflxAvg008d027659dfe47, Copylbl010188c5f126e47, Copylbl048326368092140, CopyflxBad040ded5ac7dd549, CopyflxGood0e2341a1a74ab4a);
    var flxSepratorLine1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxSepratorLine1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "1%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxSepratorLine1.setDefaultUnit(kony.flex.DP);
    flxSepratorLine1.add();
    var flxBottomBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxBottomBtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBottomBtn.setDefaultUnit(kony.flex.DP);
    var btnNext = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknCommonBtnFocus",
        "height": "70%",
        "id": "btnNext",
        "isVisible": true,
        "left": "13%",
        "onClick": AS_Button_cebb2718f82e4ee8bdc95c1a6204ecb5,
        "skin": "sknCommonBtnNormal",
        "text": "Next",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": false
    });
    var btnCancel = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skBrownishYellow",
        "height": "70%",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_03891eb527b2446bb254f2a46e94f7f4,
        "right": "12%",
        "skin": "skBrownishYellowN",
        "text": "Cancel",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": false
    });
    flxBottomBtn.add(btnNext, btnCancel);
    flxBody.add(segSymptoms, flxNotes, CopyflxWayUfeel0287ab2cb918845, flxSepratorLine, CopyflxWayUfeel0cda9f5b3ca4747, flxSepratorLine1, flxBottomBtn);
    flxMain.add(flxHeader, flxBody);
    frmSymptomList.add(flxMain);
};

function frmSymptomListGlobals() {
    frmSymptomList = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSymptomList,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmSymptomList",
        "init": AS_Form_37aa3a74982f484e9de1422a6b2a718b,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0919d9be8cf5949",
        "statusBarHidden": false,
        "title": "What are you feeling?"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": true,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};