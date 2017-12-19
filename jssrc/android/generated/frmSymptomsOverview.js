function addWidgetsfrmSymptomsOverview() {
    frmSymptomsOverview.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox01105fe971d4446",
        "top": "0dp",
        "width": "100%"
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
        "text": "Your Symptoms",
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
        "left": "5%",
        "onClick": AS_Button_a1e67dc4839244619da976070283328a,
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
    flxHeader.add(lblHeading, btnBack, imgHam);
    var flxOne = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxOne",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxOne.setDefaultUnit(kony.flex.DP);
    var Label0aa52d22cd74a42 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0aa52d22cd74a42",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblBlue130",
        "text": "Where",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblWhere = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblWhere",
        "isVisible": true,
        "right": "0%",
        "skin": "lbl140Grey",
        "text": "Left Leg",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxOne.add(Label0aa52d22cd74a42, lblWhere);
    var flxSepratorLine1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxSepratorLine1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxSepratorLine1.setDefaultUnit(kony.flex.DP);
    flxSepratorLine1.add();
    var CopyflxOne0093ed34ff71b41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "CopyflxOne0093ed34ff71b41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyflxOne0093ed34ff71b41.setDefaultUnit(kony.flex.DP);
    var CopyLabel0962e7bad8dd84d = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0962e7bad8dd84d",
        "isVisible": true,
        "left": 0,
        "skin": "sklblBlue130",
        "text": "Symptoms",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": "160dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblSymptoms = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSymptoms",
        "isVisible": true,
        "right": "0%",
        "skin": "lbl100Grey",
        "text": "Increase Spasticity Neuropatic Pain, Tingling",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0a9e8502c4e1343 = new kony.ui.Label({
        "bottom": "20%",
        "id": "CopyLabel0a9e8502c4e1343",
        "isVisible": false,
        "right": "0%",
        "skin": "lbl140Grey",
        "text": "Neuropatic Pain, Tingling",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflxSepratorLine056602bb3f2bd4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine056602bb3f2bd4e",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine056602bb3f2bd4e.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine056602bb3f2bd4e.add();
    CopyflxOne0093ed34ff71b41.add(CopyLabel0962e7bad8dd84d, lblSymptoms, CopyLabel0a9e8502c4e1343, CopyflxSepratorLine056602bb3f2bd4e);
    var CopyflxSepratorLine02efe9630084947 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine02efe9630084947",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine02efe9630084947.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine02efe9630084947.add();
    var CopyflxOne0d167a17009bd43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxOne0d167a17009bd43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyflxOne0d167a17009bd43.setDefaultUnit(kony.flex.DP);
    var CopyLabel07fb79581c08249 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel07fb79581c08249",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblBlue130",
        "text": "Notes",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblNotes = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblNotes",
        "isVisible": true,
        "right": "0%",
        "skin": "lbl100Grey",
        "text": "I Started have this feelings after run around 45min",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel02a29f51a67f948 = new kony.ui.Label({
        "bottom": "20%",
        "id": "CopyLabel02a29f51a67f948",
        "isVisible": false,
        "right": "0%",
        "skin": "lbl140Grey",
        "text": "after run around 45min",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflxSepratorLine04e3916a341154d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine04e3916a341154d",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine04e3916a341154d.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine04e3916a341154d.add();
    CopyflxOne0d167a17009bd43.add(CopyLabel07fb79581c08249, lblNotes, CopyLabel02a29f51a67f948, CopyflxSepratorLine04e3916a341154d);
    var CopyflxSepratorLine09b63159f539c40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine09b63159f539c40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine09b63159f539c40.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine09b63159f539c40.add();
    var CopyflxOne00abb873282244b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxOne00abb873282244b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyflxOne00abb873282244b.setDefaultUnit(kony.flex.DP);
    var CopyLabel0bd89e05432c84a = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0bd89e05432c84a",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblBlue130",
        "text": "Impact on the way you feel",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblImpactFeelValue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblImpactFeelValue",
        "isVisible": true,
        "right": "5%",
        "skin": "lbl100Grey",
        "text": "5",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflxSepratorLine050de2714052f45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine050de2714052f45",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine050de2714052f45.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine050de2714052f45.add();
    CopyflxOne00abb873282244b.add(CopyLabel0bd89e05432c84a, lblImpactFeelValue, CopyflxSepratorLine050de2714052f45);
    var CopyflxSepratorLine096e8e128b8fb45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine096e8e128b8fb45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine096e8e128b8fb45.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine096e8e128b8fb45.add();
    var CopyflxOne0a003101f1b1247 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxOne0a003101f1b1247",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyflxOne0a003101f1b1247.setDefaultUnit(kony.flex.DP);
    var CopyLabel0d1d0904ecf1f4c = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0d1d0904ecf1f4c",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblBlue130",
        "text": "Impact on your daily activities",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblImpactDailyActivities = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblImpactDailyActivities",
        "isVisible": true,
        "right": "5%",
        "skin": "lbl100Grey",
        "text": "5",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 3, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflxSepratorLine0f1ff96d3c60c41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine0f1ff96d3c60c41",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine0f1ff96d3c60c41.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine0f1ff96d3c60c41.add();
    CopyflxOne0a003101f1b1247.add(CopyLabel0d1d0904ecf1f4c, lblImpactDailyActivities, CopyflxSepratorLine0f1ff96d3c60c41);
    var CopyflxSepratorLine0ef4aecbd97ab4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine0ef4aecbd97ab4c",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine0ef4aecbd97ab4c.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine0ef4aecbd97ab4c.add();
    var flxFemaleMenstrualCycle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxFemaleMenstrualCycle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    flxFemaleMenstrualCycle.setDefaultUnit(kony.flex.DP);
    var CopyLabel0d7d0f402b9494d = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0d7d0f402b9494d",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblBlue130",
        "text": "Day on Mentrual Cycle",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": "53%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflxSepratorLine0de2e7cb0373b44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine0de2e7cb0373b44",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine0de2e7cb0373b44.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine0de2e7cb0373b44.add();
    var chkBxDayMenstrualCycle = new kony.ui.CheckBoxGroup({
        "centerY": "50%",
        "focusSkin": "sknChkBxNormal",
        "height": "100%",
        "id": "chkBxDayMenstrualCycle",
        "isVisible": false,
        "masterData": [
            ["Key598", "."]
        ],
        "right": "2.89%",
        "skin": "sknChkBxNormal",
        "width": "20%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tickedImage": "checkboxf.png",
        "untickedImage": "checkboxn.png"
    });
    var btnCheckBox = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnCheckBxFocus",
        "height": "35%",
        "id": "btnCheckBox",
        "isVisible": true,
        "onClick": AS_Button_f8b70ea7681840bab75251ed6c407d4c,
        "right": "5%",
        "skin": "sknbtnCheckBxNormal",
        "top": 16,
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxFemaleMenstrualCycle.add(CopyLabel0d7d0f402b9494d, CopyflxSepratorLine0de2e7cb0373b44, chkBxDayMenstrualCycle, btnCheckBox);
    var flxSepratorLineFemale = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxSepratorLineFemale",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxSepratorLineFemale.setDefaultUnit(kony.flex.DP);
    flxSepratorLineFemale.add();
    var CopyflxOne0b9e559aa0e8243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxOne0b9e559aa0e8243",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    CopyflxOne0b9e559aa0e8243.setDefaultUnit(kony.flex.DP);
    var CopyLabel0a0588ef3c99347 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0a0588ef3c99347",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblBlue130",
        "text": "Discuss these symptoms with doctor",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyflxSepratorLine0ca6dacc680fb48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine0ca6dacc680fb48",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine0ca6dacc680fb48.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine0ca6dacc680fb48.add();
    var chkBxImpactDailyActivities = new kony.ui.CheckBoxGroup({
        "centerY": "50%",
        "focusSkin": "sknChkBxNormal",
        "height": "50%",
        "id": "chkBxImpactDailyActivities",
        "isVisible": false,
        "masterData": [
            ["cbg1", "."]
        ],
        "onSelection": AS_CheckBoxGroup_5533de8a611249ca8069273fa85b285c,
        "right": "2%",
        "selectedKeyValues": [
            ["cbg1", "."]
        ],
        "selectedKeys": ["cbg1"],
        "skin": "sknChkBxNormal",
        "width": "10%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tickedImage": "checkboxf.png",
        "untickedImage": "checkboxn.png"
    });
    var btnCheckBox2 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnCheckBxFocus",
        "height": "35%",
        "id": "btnCheckBox2",
        "isVisible": true,
        "onClick": AS_Button_39f767e30fbe4689988019d1857ca420,
        "right": "5%",
        "skin": "sknbtnCheckBxNormal",
        "top": 16,
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxOne0b9e559aa0e8243.add(CopyLabel0a0588ef3c99347, CopyflxSepratorLine0ca6dacc680fb48, chkBxImpactDailyActivities, btnCheckBox2);
    var CopyflxSepratorLine0a1390486aeb34f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "1dp",
        "id": "CopyflxSepratorLine0a1390486aeb34f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxSepratorLine",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    CopyflxSepratorLine0a1390486aeb34f.setDefaultUnit(kony.flex.DP);
    CopyflxSepratorLine0a1390486aeb34f.add();
    var flxBottomBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxBottomBtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "12%",
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
        "onClick": AS_Button_640cb79a661549f79e479c3b117e29ca,
        "skin": "sknCommonBtnNormal",
        "text": "Next",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCancel = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skBrownishYellow",
        "height": "70%",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_084c33a6cecd4fcba45f164f5c5de22c,
        "right": "13%",
        "skin": "skBrownishYellowN",
        "text": "Cancel",
        "top": "0dp",
        "width": "35%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBottomBtn.add(btnNext, btnCancel);
    flxMain.add(flxHeader, flxOne, flxSepratorLine1, CopyflxOne0093ed34ff71b41, CopyflxSepratorLine02efe9630084947, CopyflxOne0d167a17009bd43, CopyflxSepratorLine09b63159f539c40, CopyflxOne00abb873282244b, CopyflxSepratorLine096e8e128b8fb45, CopyflxOne0a003101f1b1247, CopyflxSepratorLine0ef4aecbd97ab4c, flxFemaleMenstrualCycle, flxSepratorLineFemale, CopyflxOne0b9e559aa0e8243, CopyflxSepratorLine0a1390486aeb34f, flxBottomBtn);
    frmSymptomsOverview.add(flxMain);
};

function frmSymptomsOverviewGlobals() {
    frmSymptomsOverview = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSymptomsOverview,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmSymptomsOverview",
        "init": AS_Form_d4878ffd3672461fa07f4ef36e376382,
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