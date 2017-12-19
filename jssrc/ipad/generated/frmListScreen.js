function addWidgetsfrmListScreen() {
    frmListScreen.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0aed56a392df84f",
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
    var btnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue05b31d6ae5f5340",
        "height": "40dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_47651279d09943bd998beb075b4d6f01,
        "right": "2%",
        "skin": "CopyslButtonGlossBlue05b31d6ae5f5340",
        "top": "0dp",
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var imgLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "30%",
        "skin": "slImage",
        "src": "ham_logo.png",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexManage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexManage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "55%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flexManage.setDefaultUnit(kony.flex.DP);
    var btnManage = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "CopyslButtonGlossBlue0d52bfba983ba47",
        "height": "100%",
        "id": "btnManage",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_d222f5fea1ac4b7fa40818f4cd16c9ab,
        "skin": "CopyslButtonGlossBlue0d52bfba983ba47",
        "text": "Manage User LifeHacks",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexManage.add(btnManage);
    var flexAdmin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexAdmin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "76%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flexAdmin.setDefaultUnit(kony.flex.DP);
    var btnAdmin = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "CopyslButtonGlossBlue0d52bfba983ba47",
        "height": "100%",
        "id": "btnAdmin",
        "isVisible": true,
        "left": "6%",
        "onClick": AS_Button_0d53c0c338d34f488901a63bb2d6c922,
        "skin": "CopyslButtonGlossBlue024b50d7816084f",
        "text": "LifeHacks Admin",
        "width": "88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flexFocus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "5dp",
        "id": "flexFocus",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "6%",
        "skin": "CopyslFbox02cf70ff7983a40",
        "width": "88%",
        "zIndex": 1
    }, {}, {});
    flexFocus.setDefaultUnit(kony.flex.DP);
    flexFocus.add();
    flexAdmin.add(btnAdmin, flexFocus);
    var flexRefresh = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexRefresh",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_9756e09661b8449e9e4ab5907aa9d0c5,
        "right": "1%",
        "skin": "slFbox",
        "top": "0%",
        "width": "6%",
        "zIndex": 1
    }, {}, {});
    flexRefresh.setDefaultUnit(kony.flex.DP);
    var imgrefresh = new kony.ui.Image2({
        "height": "100%",
        "id": "imgrefresh",
        "isVisible": true,
        "right": "0%",
        "skin": "slImage",
        "src": "refresh1.png",
        "top": "0%",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexRefresh.add(imgrefresh);
    flxHeader.add(btnBack, imgLogo, flexManage, flexAdmin, flexRefresh);
    var lblHeading = new kony.ui.Label({
        "height": "5%",
        "id": "lblHeading",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel08fe2d028131249",
        "text": "List Screen",
        "top": "8%",
        "width": "38%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "87%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox050fecba0fdc64e",
        "top": "13%",
        "width": "38%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var segList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgList": "",
            "imgNextArrow": "",
            "lblDesc": "",
            "lblList": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_e5f30731d3854f2f9e20353bc1504f70,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg06adce1e25e8a42",
        "rowSkin": "Copyseg01d148924d0214b",
        "rowTemplate": CopyFBox0f1191d883af44c,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexList": "flexList",
            "imgList": "imgList",
            "imgNextArrow": "imgNextArrow",
            "lblDesc": "lblDesc",
            "lblList": "lblList"
        },
        "width": "100%",
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
    flxBody.add(segList);
    var flxBody2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody2",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40%",
        "skin": "CopyslFbox088c81f0b304c40",
        "top": "8%",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxBody2.setDefaultUnit(kony.flex.DP);
    var lblHeadingDetails = new kony.ui.Label({
        "height": "5%",
        "id": "lblHeadingDetails",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel05db633982da346",
        "text": "Details",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "28%",
        "id": "flexList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ee017ded55674b",
        "top": "14%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexList.setDefaultUnit(kony.flex.DP);
    var imgList = new kony.ui.Image2({
        "height": "50%",
        "id": "imgList",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblList = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblList",
        "isVisible": true,
        "skin": "CopyslLabel02fdf958b4e5e41",
        "text": "PAINT THE TOPS OF KEYS WITH NAIL POLISH TO DIFFERENTIATE WITH THEM",
        "top": "70%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexList.add(imgList, lblList);
    var lblDesc = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblDesc",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel05204da2e323948",
        "text": "How do you know ehich key is for which lock? Enough with the confusion. Paint each key with a different colour nail polish! #MSLifeHacks",
        "top": "47%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnEdit = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0339341dade8045",
        "height": "12%",
        "id": "btnEdit",
        "isVisible": true,
        "onClick": AS_Button_1e2e5d46e7d24a248159be6b597d294b,
        "right": "2%",
        "skin": "CopyslButtonGlossBlue0339341dade8045",
        "text": "EDIT",
        "top": "3%",
        "width": "13%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxBody2.add(lblHeadingDetails, flexList, lblDesc, btnEdit);
    var flexEdit = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flexEdit",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_195e04f52da84d85b108c48899d699d2,
        "skin": "CopyslFbox0bbcd922cf2bf42",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEdit.setDefaultUnit(kony.flex.DP);
    var flexEditBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flexEditBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "51%",
        "skin": "CopyslFbox088c81f0b304c40",
        "top": "8%",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flexEditBody.setDefaultUnit(kony.flex.DP);
    var lblEditHead = new kony.ui.Label({
        "height": "10%",
        "id": "lblEditHead",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel066d9bcd8b2d842",
        "text": "Edit LifeHacks",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexEditDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flexEditDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ee017ded55674b",
        "top": "12%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEditDetails.setDefaultUnit(kony.flex.DP);
    var imgEdit = new kony.ui.Image2({
        "height": "50%",
        "id": "imgEdit",
        "isVisible": true,
        "left": "50%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0%",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imageId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox002c5121829424d",
        "height": "20%",
        "id": "imageId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "Enter Image Id",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05e0d60f099c34b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "15%",
        "width": "40%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtAreaEditList = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextArea0bc4f26021b014a",
        "height": "45%",
        "id": "txtAreaEditList",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "numberOfVisibleLines": 3,
        "placeholder": "Summary",
        "skin": "CopyslTextArea0bc4f26021b014a",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "55%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    flexEditDetails.add(imgEdit, imageId, txtAreaEditList);
    var txtAreaDesc = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextArea0bc4f26021b014a",
        "height": "26%",
        "id": "txtAreaDesc",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "numberOfVisibleLines": 3,
        "placeholder": "Description",
        "skin": "CopyslTextArea0bc4f26021b014a",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "55%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "showProgressIndicator": false
    });
    var btnSave = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0f715a4ec571d41",
        "height": "8%",
        "id": "btnSave",
        "isVisible": true,
        "left": "60%",
        "onClick": AS_Button_95590477fb6f48bbb2cb748b2022f745,
        "skin": "CopyslButtonGlossBlue0327d43a7cbf546",
        "text": "Save",
        "top": "85%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0f715a4ec571d41",
        "height": "8%",
        "id": "btnCancel",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_9174181c0f8e4e5ebe96853e6134b5ba,
        "skin": "CopyslButtonGlossBlue0327d43a7cbf546",
        "text": "Cancel",
        "top": "85%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexEditBody.add(lblEditHead, flexEditDetails, txtAreaDesc, btnSave, btnCancel);
    flexEdit.add(flexEditBody);
    flxMain.add(flxHeader, lblHeading, flxBody, flxBody2, flexEdit);
    var flxScrollHamburger = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": false,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollHamburger",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "78%",
        "zIndex": 1
    }, {}, {});
    flxScrollHamburger.setDefaultUnit(kony.flex.DP);
    var Image027244a45d4004a = new kony.ui.Image2({
        "height": "100%",
        "id": "Image027244a45d4004a",
        "isVisible": true,
        "left": "90%",
        "skin": "slImage",
        "src": "bar.png",
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image06bbac8803ccc47 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "18.43%",
        "id": "Image06bbac8803ccc47",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "ham_logo.png",
        "top": "3%",
        "width": "74.15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segMenu = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image0199b252bf9a441": "medical_icn.png",
            "lblOption": "Medications"
        }, {
            "Image0199b252bf9a441": "appointment_icn.png",
            "lblOption": "Appointments"
        }, {
            "Image0199b252bf9a441": "tracker_icn.png",
            "lblOption": "Daily Trackers"
        }, {
            "Image0199b252bf9a441": "excercise_icn.png",
            "lblOption": "Exercises"
        }, {
            "Image0199b252bf9a441": "specialist_icn.png",
            "lblOption": "Specialists"
        }],
        "groupCells": false,
        "height": "73.91%",
        "id": "segMenu",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0aefedaa770a547",
        "rowTemplate": CopyFBox0890f1bcfba7543,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff46",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "140dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer00625bb7649bb44": "FlexContainer00625bb7649bb44",
            "Image0199b252bf9a441": "Image0199b252bf9a441",
            "lblOption": "lblOption"
        },
        "width": "100%",
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
    flxScrollHamburger.add(Image027244a45d4004a, Image06bbac8803ccc47, segMenu);
    frmListScreen.add(flxMain, flxScrollHamburger);
};

function frmListScreenGlobals() {
    frmListScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmListScreen,
        "enabledForIdleTimeout": false,
        "id": "frmListScreen",
        "init": AS_Form_626987b60eed4d58951e674d996e5af8,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_8299c69535ad4fd396a3583e556cd543,
        "skin": "CopyslForm0919d9be8cf5949",
        "statusBarHidden": false
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};