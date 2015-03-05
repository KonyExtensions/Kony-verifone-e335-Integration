//Form JS File
function addWidgetsfrmCustomerLookup() {
    var CopyLabel01c193a5d44594d = new kony.ui.Label({
        "id": "CopyLabel01c193a5d44594d",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "MARC JACOBS",
        "skin": "CopyslLabel076dc88a104a14b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer0df2e02be073844 = new kony.ui.FlexContainer({
        "id": "FlexContainer0df2e02be073844",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox0072f46de8af241",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0df2e02be073844.setDefaultUnit(kony.flex.DP)
    FlexContainer0df2e02be073844.add(
    CopyLabel01c193a5d44594d);
    var lblLogin = new kony.ui.Label({
        "id": "lblLogin",
        "top": "15dp",
        "left": "0dp",
        "width": "100%",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "CUSTOMER LOOKUP",
        "skin": "CopyslLabel075619a7e4cd946"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblLine = new kony.ui.Label({
        "id": "lblLine",
        "top": "56dp",
        "left": "0dp",
        "width": "100%",
        "height": "8dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel0edea1d8752134f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblUsename = new kony.ui.Label({
        "id": "lblUsename",
        "top": "90dp",
        "left": "0dp",
        "width": "260dp",
        "height": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "FIRST NAME",
        "skin": "lblCustName"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnLogin = new kony.ui.Button({
        "id": "btnLogin",
        "top": "405dp",
        "left": "0dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "SEARCH",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 3, 4, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var flexFirstName = new kony.ui.FlexContainer({
        "id": "flexFirstName",
        "top": "124dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,124]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexFirstName.setDefaultUnit(kony.flex.DP)
    flexFirstName.add();
    var lblLastName = new kony.ui.Label({
        "id": "lblLastName",
        "top": "190dp",
        "left": "0dp",
        "width": "260dp",
        "height": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "LAST NAME",
        "skin": "lblCustName"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPhone = new kony.ui.Label({
        "id": "lblPhone",
        "top": "290dp",
        "left": "0dp",
        "width": "260dp",
        "height": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "PHONE",
        "skin": "lblCustName"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexLastName = new kony.ui.FlexContainer({
        "id": "flexLastName",
        "top": "224dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,224]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexLastName.setDefaultUnit(kony.flex.DP)
    flexLastName.add();
    var flexPhone = new kony.ui.FlexContainer({
        "id": "flexPhone",
        "top": "324dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,324]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexPhone.setDefaultUnit(kony.flex.DP)
    flexPhone.add();
    var CopybtnLogin0eca5b0f316dc48 = new kony.ui.Button({
        "id": "CopybtnLogin0eca5b0f316dc48",
        "top": "549dp",
        "left": "1dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "NEW CUSTOMER",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 3, 4, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var CopyLabel055a540f7dbca4c = new kony.ui.Label({
        "id": "CopyLabel055a540f7dbca4c",
        "top": "48%",
        "left": "0dp",
        "width": "105dp",
        "height": "4dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel0f66e19351b7e45"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0b1e1d33d5b714d = new kony.ui.Label({
        "id": "CopyLabel0b1e1d33d5b714d",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "OR",
        "skin": "CopyslLabel0e6488af734ab40"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel01ec66fc0df134f = new kony.ui.Label({
        "id": "CopyLabel01ec66fc0df134f",
        "top": "48%",
        "left": "155dp",
        "width": "100dp",
        "height": "4dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel0f66e19351b7e45"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyFlexContainer09bd3f5ff437348 = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer09bd3f5ff437348",
        "top": "473dp",
        "left": "-1dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[-1,473]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer09bd3f5ff437348.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer09bd3f5ff437348.add(
    CopyLabel055a540f7dbca4c, CopyLabel0b1e1d33d5b714d, CopyLabel01ec66fc0df134f);
    var txtBoxPhone = new kony.ui.TextBox2({
        "id": "txtBoxPhone",
        "top": "320dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": "1234567890",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox0acc20bf769834b",
        "focusSkin": "CopyslTextBox0acc20bf769834b"
    }, {
        "padding": [3, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var txtBoxLastname = new kony.ui.TextBox2({
        "id": "txtBoxLastname",
        "top": "220dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": "ZAMEER",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox0acc20bf769834b",
        "focusSkin": "CopyslTextBox0acc20bf769834b"
    }, {
        "padding": [3, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var txtBoxFirstname = new kony.ui.TextBox2({
        "id": "txtBoxFirstname",
        "top": "120dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": "ROSHAN",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox0acc20bf769834b",
        "focusSkin": "CopyslTextBox0acc20bf769834b"
    }, {
        "padding": [3, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var FlexContainer070a68271a31049 = new kony.ui.FlexContainer({
        "id": "FlexContainer070a68271a31049",
        "left": "20dp",
        "bottom": "0dp",
        "width": "30%",
        "height": "648dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[20,-198]",
        "skin": "CopyslFbox04d2fa3a4d9cc40",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer070a68271a31049.setDefaultUnit(kony.flex.DP)
    FlexContainer070a68271a31049.add(
    lblLogin, lblLine, lblUsename, btnLogin, flexFirstName, lblLastName, lblPhone, flexLastName, flexPhone, CopybtnLogin0eca5b0f316dc48, CopyFlexContainer09bd3f5ff437348, txtBoxPhone, txtBoxLastname, txtBoxFirstname);
    var segCustomerLookupbox = new kony.ui.FlexContainer({
        "id": "segCustomerLookupbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segCustomerLookup = new kony.ui.SegmentedUI2({
        "id": "segCustomerLookup",
        "top": "1%",
        "left": "0%",
        "right": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblFirstName": "lblFirstName",
            "FlexContainer0bba6eb617e9241": "FlexContainer0bba6eb617e9241",
            "CustomerLookup": "CustomerLookup",
            "lblAddress": "lblAddress",
            "lblLastName": "lblLastName",
            "lblPhone": "lblPhone"
        },
        "data": [{
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }, {
            "lblFirstName": "First Name",
            "lblAddress": "Address",
            "lblLastName": "Last Name",
            "lblPhone": "Phone"
        }],
        "Location": "[0,6]",
        "rowTemplate": FlexContainer0bba6eb617e9241,
        "widgetSkin": "Copyseg03b9989a43ebc42",
        "rowSkin": "Copyseg03b9989a43ebc42",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    segCustomerLookupbox.add();
    var FlexScrollContainer05c3ab212fcfc41 = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainer05c3ab212fcfc41",
        "top": "45dp",
        "left": "1%",
        "right": "1.50%",
        "width": "97.50%",
        "height": "94%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": true,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "Location": "[3,45]",
        "skin": "slFSbox",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollContainer05c3ab212fcfc41.setDefaultUnit(kony.flex.DP);
    FlexScrollContainer05c3ab212fcfc41.add(
    segCustomerLookup);
    var Label01323059064264c = new kony.ui.Label({
        "id": "Label01323059064264c",
        "left": "10dp",
        "width": "150dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "First Name",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label0a9945b471a544c = new kony.ui.Label({
        "id": "Label0a9945b471a544c",
        "left": "180dp",
        "width": "150dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Last Name",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label0cdefb03dd71f49 = new kony.ui.Label({
        "id": "Label0cdefb03dd71f49",
        "left": "350dp",
        "width": "80dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Phone",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label0b846e69e52444b = new kony.ui.Label({
        "id": "Label0b846e69e52444b",
        "top": "3dp",
        "right": "10",
        "width": "192dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Address",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer020f9f428844c4d = new kony.ui.FlexContainer({
        "id": "FlexContainer020f9f428844c4d",
        "top": "0dp",
        "left": "1%",
        "right": "1%",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer020f9f428844c4d.setDefaultUnit(kony.flex.DP)
    FlexContainer020f9f428844c4d.add(
    Label01323059064264c, Label0a9945b471a544c, Label0cdefb03dd71f49, Label0b846e69e52444b);
    var flexSearchResults = new kony.ui.FlexContainer({
        "id": "flexSearchResults",
        "bottom": "0dp",
        "right": "0dp",
        "width": "67%",
        "height": "648dp",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[149,-198]",
        "skin": "flexSearchResults",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexSearchResults.setDefaultUnit(kony.flex.DP)
    flexSearchResults.add(
    FlexScrollContainer05c3ab212fcfc41, FlexContainer020f9f428844c4d);
    frmCustomerLookup.add(
    FlexContainer0df2e02be073844, FlexContainer070a68271a31049, flexSearchResults);
};

function frmCustomerLookupGlobals() {
    var MenuId = [];
    frmCustomerLookup = new kony.ui.Form2({
        "id": "frmCustomerLookup",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm0983b8152a2d944",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmCustomerLookup
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "titleBarConfig": {},
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    frmCustomerLookup.setDefaultUnit(kony.flex.DP);
};