function addWidgetsfrmSignUp() {
    frmSignUp.setDefaultUnit(kony.flex.DP);
    var flxSignupMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSignupMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxSignupMain.setDefaultUnit(kony.flex.DP);
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
        "text": kony.i18n.getLocalizedString("signup"),
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
    var FlexContainer0a8912b7f912b4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0a8912b7f912b4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_a3e44658a4714899995655c2f95e4beb,
        "right": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "18%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a8912b7f912b4d.setDefaultUnit(kony.flex.DP);
    FlexContainer0a8912b7f912b4d.add();
    flxHeader.add(lblHeading, btnBack, FlexContainer0a8912b7f912b4d);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox01105fe971d4446",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var FlexContainer0fddf1deb12eb49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "FlexContainer0fddf1deb12eb49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%"
    }, {}, {});
    FlexContainer0fddf1deb12eb49.setDefaultUnit(kony.flex.DP);
    var Label07c53b1cd52b246 = new kony.ui.Label({
        "height": "50%",
        "id": "Label07c53b1cd52b246",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("firstname"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtfirstName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox069c139e020c342",
        "height": "50%",
        "id": "txtfirstName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05f107ac5fc7a4b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    FlexContainer0fddf1deb12eb49.add(Label07c53b1cd52b246, txtfirstName);
    var Label03dff1933c8094c = new kony.ui.Label({
        "height": "1dp",
        "id": "Label03dff1933c8094c",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer03e2bdebbefeb42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer03e2bdebbefeb42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer03e2bdebbefeb42.setDefaultUnit(kony.flex.DP);
    var CopyLabel0236bf64588a240 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel0236bf64588a240",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("lastname"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtLastName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox069c139e020c342",
        "height": "50%",
        "id": "txtLastName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05f107ac5fc7a4b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer03e2bdebbefeb42.add(CopyLabel0236bf64588a240, txtLastName);
    var CopyLabel09bf4c27d051c4d = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel09bf4c27d051c4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer07edde973166f46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer07edde973166f46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer07edde973166f46.setDefaultUnit(kony.flex.DP);
    var CopyLabel0a3762499c98745 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel0a3762499c98745",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("gender"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lstbxGender = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox00d32765bf6b646",
        "height": "50%",
        "id": "lstbxGender",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["1", kony.i18n.getLocalizedString("male")],
            ["2", kony.i18n.getLocalizedString("female")]
        ],
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Male"],
        "skin": "CopyslListBox00d32765bf6b646",
        "top": "46%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "transparent.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var Image0b7fc4e02214b40 = new kony.ui.Image2({
        "height": "50%",
        "id": "Image0b7fc4e02214b40",
        "isVisible": true,
        "left": "91%",
        "skin": "slImage",
        "src": "dropdownarrow.png",
        "top": "50%",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer07edde973166f46.add(CopyLabel0a3762499c98745, lstbxGender, Image0b7fc4e02214b40);
    var CopyLabel051af9031bb524b = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel051af9031bb524b",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer05911b93e06f84c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer05911b93e06f84c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer05911b93e06f84c.setDefaultUnit(kony.flex.DP);
    var CopyLabel0ca53ecb543274b = new kony.ui.Label({
        "height": "40%",
        "id": "CopyLabel0ca53ecb543274b",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("birthday"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var calBDay = new kony.ui.Calendar({
        "calendarIcon": "transparent.png",
        "dateComponents": [6, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 6,
        "focusSkin": "CopyslCalendar0601ffd1d911f43",
        "formattedDate": "06/10/2016",
        "height": "50%",
        "hour": 0,
        "id": "calBDay",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "CopyslCalendar0601ffd1d911f43",
        "top": "50%",
        "viewConfig": {},
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "100%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage054dd42503c344e = new kony.ui.Image2({
        "height": "50%",
        "id": "CopyImage054dd42503c344e",
        "isVisible": true,
        "left": "91%",
        "skin": "slImage",
        "src": "cal_icn.png",
        "top": "50%",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer05911b93e06f84c.add(CopyLabel0ca53ecb543274b, calBDay, CopyImage054dd42503c344e);
    var CopyLabel09e82b0d9fd094d = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel09e82b0d9fd094d",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0d868a5da2c1842 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer0d868a5da2c1842",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer0d868a5da2c1842.setDefaultUnit(kony.flex.DP);
    var CopyLabel048b88460aa8149 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel048b88460aa8149",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("frequentmssymptom"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtfrequentSymptoms = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox069c139e020c342",
        "height": "50%",
        "id": "txtfrequentSymptoms",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05f107ac5fc7a4b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer0d868a5da2c1842.add(CopyLabel048b88460aa8149, txtfrequentSymptoms);
    var CopyLabel09f4c6b70292241 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel09f4c6b70292241",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer06c569af397f043 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "CopyFlexContainer06c569af397f043",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_f6264d85b8814deeaccd2676561556d4,
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer06c569af397f043.setDefaultUnit(kony.flex.DP);
    var CopyLabel0298e88d2944448 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel0298e88d2944448",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("addmsspecialist"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "62.22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMSSpecialist = new kony.ui.Label({
        "height": "100%",
        "id": "lblMSSpecialist",
        "isVisible": true,
        "left": "11.13%",
        "skin": "CopyslLabel03ffed05d0f6740",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15.54%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyImage092066f625e9b41 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "CopyImage092066f625e9b41",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "listarrow.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer06c569af397f043.add(CopyLabel0298e88d2944448, lblMSSpecialist, CopyImage092066f625e9b41);
    var CopyLabel0db36725b9cca4c = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel0db36725b9cca4c",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0c3d844ed3df645 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "CopyFlexContainer0c3d844ed3df645",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_1a2f4528f6d94b3bbaa1a0467d401484,
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer0c3d844ed3df645.setDefaultUnit(kony.flex.DP);
    var CopyLabel03671d52775ba4d = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel03671d52775ba4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("addallergie"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "62.22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblAllergie = new kony.ui.Label({
        "height": "100%",
        "id": "lblAllergie",
        "isVisible": true,
        "left": "11.13%",
        "skin": "CopyslLabel03ffed05d0f6740",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15.54%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Image09f5f1c325e114c = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "Image09f5f1c325e114c",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "listarrow.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0c3d844ed3df645.add(CopyLabel03671d52775ba4d, lblAllergie, Image09f5f1c325e114c);
    var CopyLabel09e73df545bd948 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel09e73df545bd948",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxBody.add(FlexContainer0fddf1deb12eb49, Label03dff1933c8094c, CopyFlexContainer03e2bdebbefeb42, CopyLabel09bf4c27d051c4d, CopyFlexContainer07edde973166f46, CopyLabel051af9031bb524b, CopyFlexContainer05911b93e06f84c, CopyLabel09e82b0d9fd094d, CopyFlexContainer0d868a5da2c1842, CopyLabel09f4c6b70292241, CopyFlexContainer06c569af397f043, CopyLabel0db36725b9cca4c, CopyFlexContainer0c3d844ed3df645, CopyLabel09e73df545bd948);
    var btnDone = new kony.ui.Button({
        "bottom": "0.00%",
        "focusSkin": "sknCommonBtnFocus",
        "height": "8.50%",
        "id": "btnDone",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_7963899979784e7daf383a0c750a3667,
        "skin": "sknCommonBtnNormal",
        "text": kony.i18n.getLocalizedString("done"),
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSignupMain.add(flxHeader, flxBody, btnDone);
    var flxSignUpArabic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSignUpArabic",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxSignUpArabic.setDefaultUnit(kony.flex.DP);
    var CopyflxHeader0223e8ea181234e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "CopyflxHeader0223e8ea181234e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox07b808c87af814b",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyflxHeader0223e8ea181234e.setDefaultUnit(kony.flex.DP);
    var CopylblHeading0ef0450fa4f984a = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblHeading0ef0450fa4f984a",
        "isVisible": true,
        "skin": "CopyslLabel0ab9fa8ac3f8944",
        "text": kony.i18n.getLocalizedString("signup"),
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
    var CopybtnBack0f23ef95eeff24e = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0185e817a02e145",
        "height": "20dp",
        "id": "CopybtnBack0f23ef95eeff24e",
        "isVisible": true,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue097a76463da414e",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyFlexContainer0bc3f552a151846 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0bc3f552a151846",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "83%",
        "onClick": AS_FlexContainer_9b96a3ebe6494c2fa592591438b85fd7,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0bc3f552a151846.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0bc3f552a151846.add();
    CopyflxHeader0223e8ea181234e.add(CopylblHeading0ef0450fa4f984a, CopybtnBack0f23ef95eeff24e, CopyFlexContainer0bc3f552a151846);
    var CopyflxBody006674f5f9d5b47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "CopyflxBody006674f5f9d5b47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0b5b9dce6164b4b",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxBody006674f5f9d5b47.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0e6e63df7fe9a4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer0e6e63df7fe9a4e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer0e6e63df7fe9a4e.setDefaultUnit(kony.flex.DP);
    var CopyLabel08e61e0ee855545 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel08e61e0ee855545",
        "isVisible": true,
        "right": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("firstname"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtfirstNameArabic = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox069c139e020c342",
        "height": "50%",
        "id": "txtfirstNameArabic",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05f107ac5fc7a4b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer0e6e63df7fe9a4e.add(CopyLabel08e61e0ee855545, txtfirstNameArabic);
    var CopyLabel01b171b6b07e74c = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel01b171b6b07e74c",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer03ebf6f7cf77646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer03ebf6f7cf77646",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer03ebf6f7cf77646.setDefaultUnit(kony.flex.DP);
    var CopyLabel080a83c03fb534b = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel080a83c03fb534b",
        "isVisible": true,
        "right": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("lastname"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtLastNameArabic = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox069c139e020c342",
        "height": "50%",
        "id": "txtLastNameArabic",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05f107ac5fc7a4b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer03ebf6f7cf77646.add(CopyLabel080a83c03fb534b, txtLastNameArabic);
    var CopyLabel0eb66ccc645b748 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel0eb66ccc645b748",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer065fc1cfb3bee47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer065fc1cfb3bee47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer065fc1cfb3bee47.setDefaultUnit(kony.flex.DP);
    var CopyLabel06a548841dfe14b = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel06a548841dfe14b",
        "isVisible": true,
        "right": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("gender"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lstbxGenderArabic = new kony.ui.ListBox({
        "focusSkin": "CopyslListBox00d32765bf6b646",
        "height": "50%",
        "id": "lstbxGenderArabic",
        "isVisible": true,
        "masterData": [
            ["1", "ذكر"],
            ["2", "أنثى"]
        ],
        "right": "0%",
        "selectedKey": "1",
        "selectedKeyValue": ["1", "ذكر"],
        "skin": "CopyslListBox00d32765bf6b646",
        "top": "46%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "transparent.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var CopyImage0d1b6cdb41c2746 = new kony.ui.Image2({
        "height": "50%",
        "id": "CopyImage0d1b6cdb41c2746",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "dropdownarrow.png",
        "top": "50%",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer065fc1cfb3bee47.add(CopyLabel06a548841dfe14b, lstbxGenderArabic, CopyImage0d1b6cdb41c2746);
    var CopyLabel016c22e76bec746 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel016c22e76bec746",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer016bde0f0148443 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer016bde0f0148443",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer016bde0f0148443.setDefaultUnit(kony.flex.DP);
    var CopyLabel0b0778a1affd04c = new kony.ui.Label({
        "height": "40%",
        "id": "CopyLabel0b0778a1affd04c",
        "isVisible": true,
        "right": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("birthday"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var calBDayArabic = new kony.ui.Calendar({
        "calendarIcon": "transparent.png",
        "dateComponents": [6, 10, 2016, 0, 0, 0],
        "dateFormat": "MM/dd/yyyy",
        "day": 6,
        "focusSkin": "CopyslCalendar0601ffd1d911f43",
        "formattedDate": "10/06/2016",
        "height": "50%",
        "hour": 0,
        "id": "calBDayArabic",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "CopyslCalendar0601ffd1d911f43",
        "top": "50%",
        "viewConfig": {},
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "100%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [55, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0b866c54a5baf43 = new kony.ui.Image2({
        "height": "50%",
        "id": "CopyImage0b866c54a5baf43",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "cal_icn.png",
        "top": "50%",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer016bde0f0148443.add(CopyLabel0b0778a1affd04c, calBDayArabic, CopyImage0b866c54a5baf43);
    var CopyLabel0092b2a70a96a4a = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel0092b2a70a96a4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer02d6213485bbf41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer02d6213485bbf41",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer02d6213485bbf41.setDefaultUnit(kony.flex.DP);
    var CopyLabel0e0c199ac4ac44d = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel0e0c199ac4ac44d",
        "isVisible": true,
        "right": "0dp",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("frequentmssymptom"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtfrequentSymptomsArabic = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "CopyslTextBox069c139e020c342",
        "height": "50%",
        "id": "txtfrequentSymptomsArabic",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05f107ac5fc7a4b",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    CopyFlexContainer02d6213485bbf41.add(CopyLabel0e0c199ac4ac44d, txtfrequentSymptomsArabic);
    var CopyLabel0c2033b8a11c347 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel0c2033b8a11c347",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer09ce73a49062046 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "CopyFlexContainer09ce73a49062046",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_d3427db8e1084d6fb2af1c735dce77f8,
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer09ce73a49062046.setDefaultUnit(kony.flex.DP);
    var CopyImage067fe95048dd04e = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "CopyImage067fe95048dd04e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "listarrow_arabic.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMSSpecialistArabic = new kony.ui.Label({
        "height": "100%",
        "id": "lblMSSpecialistArabic",
        "isVisible": true,
        "left": "11.13%",
        "skin": "CopyslLabel03ffed05d0f6740",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15.54%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel01d2e5869864a49 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel01d2e5869864a49",
        "isVisible": true,
        "right": "0%",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("addmsspecialist"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "62.22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer09ce73a49062046.add(CopyImage067fe95048dd04e, lblMSSpecialistArabic, CopyLabel01d2e5869864a49);
    var CopyLabel0d210fbd94d1549 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel0d210fbd94d1549",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyFlexContainer0985ff7b7373e42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "5%",
        "id": "CopyFlexContainer0985ff7b7373e42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "onClick": AS_FlexContainer_84fc5549e4e4433481151d78090263df,
        "skin": "slFbox",
        "top": "1%",
        "width": "90%"
    }, {}, {});
    CopyFlexContainer0985ff7b7373e42.setDefaultUnit(kony.flex.DP);
    var CopyImage0e84a65846a134d = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "CopyImage0e84a65846a134d",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "listarrow_arabic.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAllergieArabic = new kony.ui.Label({
        "height": "100%",
        "id": "lblAllergieArabic",
        "isVisible": true,
        "left": "11.13%",
        "skin": "CopyslLabel03ffed05d0f6740",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "15.54%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel01db985d4d30e45 = new kony.ui.Label({
        "height": "100%",
        "id": "CopyLabel01db985d4d30e45",
        "isVisible": true,
        "right": "0%",
        "skin": "CopyslLabel0bec4d6b1d4f64b",
        "text": kony.i18n.getLocalizedString("addallergie"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "62.22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0985ff7b7373e42.add(CopyImage0e84a65846a134d, lblAllergieArabic, CopyLabel01db985d4d30e45);
    var CopyLabel0ee90f6ecfad148 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel0ee90f6ecfad148",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxBody006674f5f9d5b47.add(CopyFlexContainer0e6e63df7fe9a4e, CopyLabel01b171b6b07e74c, CopyFlexContainer03ebf6f7cf77646, CopyLabel0eb66ccc645b748, CopyFlexContainer065fc1cfb3bee47, CopyLabel016c22e76bec746, CopyFlexContainer016bde0f0148443, CopyLabel0092b2a70a96a4a, CopyFlexContainer02d6213485bbf41, CopyLabel0c2033b8a11c347, CopyFlexContainer09ce73a49062046, CopyLabel0d210fbd94d1549, CopyFlexContainer0985ff7b7373e42, CopyLabel0ee90f6ecfad148);
    var btnDoneArabic = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "sknCloudSyncFocus",
        "height": "8.50%",
        "id": "btnDoneArabic",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_33e570fd8f2e45b084b1f086b43a6dd4,
        "skin": "sknCommonBtnN",
        "text": kony.i18n.getLocalizedString("done"),
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSignUpArabic.add(CopyflxHeader0223e8ea181234e, CopyflxBody006674f5f9d5b47, btnDoneArabic);
    frmSignUp.add(flxSignupMain, flxSignUpArabic);
};

function frmSignUpGlobals() {
    frmSignUp = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSignUp,
        "enabledForIdleTimeout": false,
        "id": "frmSignUp",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "CopyslForm0919d9be8cf5949"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
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