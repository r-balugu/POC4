function addWidgetsfrmTremAndCond() {
    frmTremAndCond.setDefaultUnit(kony.flex.DP);
    var flxTermAndConMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTermAndConMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox088912d6c161f48",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxTermAndConMain.setDefaultUnit(kony.flex.DP);
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
        "i18n_text": "kony.i18n.getLocalizedString(\"termsnconds\")",
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
        "onClick": AS_FlexContainer_5c086ea8cc2745d091cf88807642cba5,
        "right": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "18%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a8912b7f912b4d.setDefaultUnit(kony.flex.DP);
    FlexContainer0a8912b7f912b4d.add();
    flxHeader.add(lblHeading, btnBack, FlexContainer0a8912b7f912b4d);
    var FlexContainer0b1ec06b28ee149 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "83.50%",
        "horizontalScrollIndicator": true,
        "id": "FlexContainer0b1ec06b28ee149",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "8%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b1ec06b28ee149.setDefaultUnit(kony.flex.DP);
    var RichText03531ecb8a9b943 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText03531ecb8a9b943",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText0e25dac32901d4b",
        "text": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. \n \nThe first line of Lorem Ipsum, \" Lorem ipsum dolor sit amet..\", comes from a line in sec-tion 1.10.32. <br/> <br/> \nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. <br/><br/>\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \" Lorem ipsum dolor sit amet..\", comes from a line in sec-tion 1.10.32. <br/> <br/>\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. \nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one \n",
        "top": "3%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    FlexContainer0b1ec06b28ee149.add(RichText03531ecb8a9b943);
    var Button0c7861d1f6fd548 = new kony.ui.Button({
        "bottom": "0%",
        "focusSkin": "sknCommonBtnFocus",
        "height": "8.50%",
        "id": "Button0c7861d1f6fd548",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ca1a06b8d64e47b4a5d845f9aea9bda4,
        "skin": "sknCommonBtnNormal",
        "i18n_text": "kony.i18n.getLocalizedString(\"accept\")",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTermAndConMain.add(flxHeader, FlexContainer0b1ec06b28ee149, Button0c7861d1f6fd548);
    frmTremAndCond.add(flxTermAndConMain);
};

function frmTremAndCondGlobals() {
    frmTremAndCond = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTremAndCond,
        "enabledForIdleTimeout": false,
        "id": "frmTremAndCond",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0919d9be8cf5949"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};