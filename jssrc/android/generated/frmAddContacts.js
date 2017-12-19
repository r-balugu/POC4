function addWidgetsfrmAddContacts() {
    frmAddContacts.setDefaultUnit(kony.flex.DP);
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
        "text": kony.i18n.getLocalizedString("newmsspecialist"),
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
    var btnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0629806af586148",
        "height": "100%",
        "id": "btnCancel",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_74fb1601c7fa49ef9cf33e903612e744,
        "skin": "CopyslButtonGlossBlue0629806af586148",
        "text": kony.i18n.getLocalizedString("cancelheader"),
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
        "onClick": AS_Button_e1fa178f84704585b81a51d21e91b582,
        "right": "0%",
        "skin": "CopyslButtonGlossBlue0629806af586148",
        "text": kony.i18n.getLocalizedString("save"),
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(lblHeading, btnCancel, btnSave);
    var flxBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0b5b9dce6164b4b",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var FlexContainer06995d516efbc45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "31.09%",
        "id": "FlexContainer06995d516efbc45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06995d516efbc45.setDefaultUnit(kony.flex.DP);
    var Image0f7d961b840cc4a = new kony.ui.Image2({
        "height": "72.97%",
        "id": "Image0f7d961b840cc4a",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "importcontact.png",
        "top": "0%",
        "width": "13.89%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0faebcb0e5d5b43 = new kony.ui.Label({
        "height": "72.97%",
        "id": "Label0faebcb0e5d5b43",
        "isVisible": true,
        "left": "-1%",
        "skin": "CopyslLabel09739e337221e41",
        "text": kony.i18n.getLocalizedString("addphoto"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "15.28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer06a2e6e99db3447 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer06a2e6e99db3447",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "16%",
        "skin": "slFbox",
        "top": "0%",
        "width": "84%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06a2e6e99db3447.setDefaultUnit(kony.flex.DP);
    var FlexContainer04c92fc8e8cbf4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "26.08%",
        "id": "FlexContainer04c92fc8e8cbf4c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "13dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04c92fc8e8cbf4c.setDefaultUnit(kony.flex.DP);
    var txtFirstName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextBox008233572772443",
        "height": "90%",
        "id": "txtFirstName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": kony.i18n.getLocalizedString("firstname"),
        "secureTextEntry": false,
        "skin": "CopyslTextBox04754215004c343",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0af9b0f9caeba46",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel051af9031bb524b = new kony.ui.Label({
        "height": "2dp",
        "id": "CopyLabel051af9031bb524b",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer04c92fc8e8cbf4c.add(txtFirstName, CopyLabel051af9031bb524b);
    var CopyFlexContainer0df9bbcecfad54d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "26.08%",
        "id": "CopyFlexContainer0df9bbcecfad54d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0df9bbcecfad54d.setDefaultUnit(kony.flex.DP);
    var txtLastName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextBox008233572772443",
        "height": "90%",
        "id": "txtLastName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": kony.i18n.getLocalizedString("lastname"),
        "secureTextEntry": false,
        "skin": "CopyslTextBox04754215004c343",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0af9b0f9caeba46",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel094ff073668fa4d = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel094ff073668fa4d",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0df9bbcecfad54d.add(txtLastName, CopyLabel094ff073668fa4d);
    var CopyFlexContainer006adaa783ffd42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "26.08%",
        "id": "CopyFlexContainer006adaa783ffd42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer006adaa783ffd42.setDefaultUnit(kony.flex.DP);
    var txtCompany = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextBox008233572772443",
        "height": "90%",
        "id": "txtCompany",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": kony.i18n.getLocalizedString("company"),
        "secureTextEntry": false,
        "skin": "CopyslTextBox04754215004c343",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0af9b0f9caeba46",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel05b5617a6c9624f = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel05b5617a6c9624f",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer006adaa783ffd42.add(txtCompany, CopyLabel05b5617a6c9624f);
    FlexContainer06a2e6e99db3447.add(FlexContainer04c92fc8e8cbf4c, CopyFlexContainer0df9bbcecfad54d, CopyFlexContainer006adaa783ffd42);
    FlexContainer06995d516efbc45.add(Image0f7d961b840cc4a, Label0faebcb0e5d5b43, FlexContainer06a2e6e99db3447);
    var FlexContainer07c1dbbc6ee6c45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "FlexContainer07c1dbbc6ee6c45",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer07c1dbbc6ee6c45.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0dcd46e9fad2645 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "18%",
        "id": "CopyFlexContainer0dcd46e9fad2645",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "13dp",
        "width": "94.67%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0dcd46e9fad2645.setDefaultUnit(kony.flex.DP);
    var txtPhone = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextBox008233572772443",
        "height": "90%",
        "id": "txtPhone",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "left": "0%",
        "maxTextLength": 15,
        "placeholder": kony.i18n.getLocalizedString("phonenum"),
        "secureTextEntry": false,
        "skin": "CopyslTextBox04754215004c343",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0af9b0f9caeba46",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel00ab8376a54ec44 = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel00ab8376a54ec44",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0dcd46e9fad2645.add(txtPhone, CopyLabel00ab8376a54ec44);
    var CopyFlexContainer0e24d60ce260b4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "18%",
        "id": "CopyFlexContainer0e24d60ce260b4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "94.67%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e24d60ce260b4f.setDefaultUnit(kony.flex.DP);
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "CopyslTextBox008233572772443",
        "height": "90%",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "left": "0%",
        "placeholder": kony.i18n.getLocalizedString("email"),
        "secureTextEntry": false,
        "skin": "CopyslTextBox04754215004c343",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0af9b0f9caeba46",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyLabel04d8fbe8f74984e = new kony.ui.Label({
        "height": "1dp",
        "id": "CopyLabel04d8fbe8f74984e",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel04f61518dbfe044",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0e24d60ce260b4f.add(txtEmail, CopyLabel04d8fbe8f74984e);
    FlexContainer07c1dbbc6ee6c45.add(CopyFlexContainer0dcd46e9fad2645, CopyFlexContainer0e24d60ce260b4f);
    flxBody.add(FlexContainer06995d516efbc45, FlexContainer07c1dbbc6ee6c45);
    flxMain.add(flxHeader, flxBody);
    frmAddContacts.add(flxMain);
};

function frmAddContactsGlobals() {
    frmAddContacts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAddContacts,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmAddContacts",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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