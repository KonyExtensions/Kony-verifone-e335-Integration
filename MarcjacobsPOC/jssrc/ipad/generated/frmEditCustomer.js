//Form JS File
function addWidgetsfrmEditCustomer() {
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
    var Label04141d90c89f047 = new kony.ui.Label({
        "id": "Label04141d90c89f047",
        "top": "0dp",
        "left": "10dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "First Name",
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
    var Label05910f54122074a = new kony.ui.Label({
        "id": "Label05910f54122074a",
        "top": "0dp",
        "left": "230dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Last Name",
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
    var Label0ed3d89ba63d845 = new kony.ui.Label({
        "id": "Label0ed3d89ba63d845",
        "top": "0dp",
        "left": "450dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Cust ID",
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
    var TextField06ae8d6ed987b4b = new kony.ui.TextBox2({
        "id": "TextField06ae8d6ed987b4b",
        "top": "35dp",
        "left": "10dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var TextField05cdb91ce2c4747 = new kony.ui.TextBox2({
        "id": "TextField05cdb91ce2c4747",
        "top": "35dp",
        "left": "230dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var TextField0e9b84a983f644b = new kony.ui.TextBox2({
        "id": "TextField0e9b84a983f644b",
        "top": "35dp",
        "left": "450dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var chkActive = new kony.ui.CheckBoxGroup({
        "id": "chkActive",
        "top": "37dp",
        "right": "0dp",
        "width": "96dp",
        "height": "45dp",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["active", "."]
        ],
        "selectedKeys": ["active"],
        "skin": "CopyslCheckBoxGroup08a24c2300aee4b"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH,
        "groupCells": false,
        "tickedImage": "check.png",
        "untickedImage": "uncheck.png"
    });
    var Label0ee59c22832e645 = new kony.ui.Label({
        "id": "Label0ee59c22832e645",
        "top": "3dp",
        "right": "0dp",
        "width": "96dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Active",
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
    var FlexContainer02a80ea20e4b044 = new kony.ui.FlexContainer({
        "id": "FlexContainer02a80ea20e4b044",
        "top": "10dp",
        "left": "1%",
        "right": "1%",
        "width": "98%",
        "height": "84dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,10]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer02a80ea20e4b044.setDefaultUnit(kony.flex.DP)
    FlexContainer02a80ea20e4b044.add(
    Label04141d90c89f047, Label05910f54122074a, Label0ed3d89ba63d845, TextField06ae8d6ed987b4b, TextField05cdb91ce2c4747, TextField0e9b84a983f644b, chkActive, Label0ee59c22832e645);
    var CopychkActive02f70a09ac4fc46 = new kony.ui.CheckBoxGroup({
        "id": "CopychkActive02f70a09ac4fc46",
        "left": "0dp",
        "width": "204dp",
        "height": "60dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["email", "E-Mail"]
        ],
        "selectedKeys": ["email"],
        "skin": "CopyslCheckBoxGroup00e6d619e74c74d"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH,
        "groupCells": false,
        "tickedImage": "check.png",
        "untickedImage": "uncheck.png"
    });
    var CopychkActive0a2136ad636f94f = new kony.ui.CheckBoxGroup({
        "id": "CopychkActive0a2136ad636f94f",
        "width": "204dp",
        "height": "60dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["sms", "SMS/MMS"]
        ],
        "selectedKeys": ["sms"],
        "skin": "CopyslCheckBoxGroup00e6d619e74c74d"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH,
        "groupCells": false,
        "tickedImage": "check.png",
        "untickedImage": "uncheck.png"
    });
    var CopychkActive0c6a23025ef1748 = new kony.ui.CheckBoxGroup({
        "id": "CopychkActive0c6a23025ef1748",
        "right": "0dp",
        "width": "168dp",
        "height": "60dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["mail", "Mail"]
        ],
        "selectedKeys": ["mail"],
        "skin": "CopyslCheckBoxGroup00e6d619e74c74d"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH,
        "groupCells": false,
        "tickedImage": "check.png",
        "untickedImage": "uncheck.png"
    });
    var FlexContainer021148713faaa4d = new kony.ui.FlexContainer({
        "id": "FlexContainer021148713faaa4d",
        "top": "87dp",
        "left": "10%",
        "right": "10%",
        "height": "60dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[33,87]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer021148713faaa4d.setDefaultUnit(kony.flex.DP)
    FlexContainer021148713faaa4d.add(
    CopychkActive02f70a09ac4fc46, CopychkActive0a2136ad636f94f, CopychkActive0c6a23025ef1748);
    var Label0af5952c21e1548 = new kony.ui.Label({
        "id": "Label0af5952c21e1548",
        "top": "6dp",
        "left": "0dp",
        "width": "280dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Email Address",
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
    var Label03c04cb1ce5fa42 = new kony.ui.Label({
        "id": "Label03c04cb1ce5fa42",
        "top": "6dp",
        "width": "230dp",
        "height": "35dp",
        "centerX": "56%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Cust Type",
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
    var Label048096d981f2944 = new kony.ui.Label({
        "id": "Label048096d981f2944",
        "top": "6dp",
        "right": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Phone 2",
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
    var TextField0233440b87bf748 = new kony.ui.TextBox2({
        "id": "TextField0233440b87bf748",
        "top": "40dp",
        "left": "0dp",
        "width": "280dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Shaik.jameer@kony.com",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var TextField01758b473fe1c4c = new kony.ui.TextBox2({
        "id": "TextField01758b473fe1c4c",
        "top": "40dp",
        "width": "230dp",
        "height": "40dp",
        "centerX": "56%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Business",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var TextField0a23b9af84ce44c = new kony.ui.TextBox2({
        "id": "TextField0a23b9af84ce44c",
        "top": "40dp",
        "right": "0dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "+040-8099720205",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var FlexContainer036b8c7789c304c = new kony.ui.FlexContainer({
        "id": "FlexContainer036b8c7789c304c",
        "top": "167dp",
        "left": "1%",
        "right": "1%",
        "width": "98%",
        "height": "84dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,167]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer036b8c7789c304c.setDefaultUnit(kony.flex.DP)
    FlexContainer036b8c7789c304c.add(
    Label0af5952c21e1548, Label03c04cb1ce5fa42, Label048096d981f2944, TextField0233440b87bf748, TextField01758b473fe1c4c, TextField0a23b9af84ce44c);
    var CopyTextField015d5480623de4d = new kony.ui.TextBox2({
        "id": "CopyTextField015d5480623de4d",
        "top": "37dp",
        "left": "0dp",
        "width": "250dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField0a8520f42b3194c = new kony.ui.TextBox2({
        "id": "CopyTextField0a8520f42b3194c",
        "top": "37dp",
        "left": "260dp",
        "width": "240dp",
        "height": "40dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField05df2e354f41140 = new kony.ui.TextBox2({
        "id": "CopyTextField05df2e354f41140",
        "top": "37dp",
        "right": "0dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField083f46efdee444d = new kony.ui.TextBox2({
        "id": "CopyTextField083f46efdee444d",
        "top": "118dp",
        "left": "0dp",
        "width": "250dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField0a266e75ce2d54f = new kony.ui.TextBox2({
        "id": "CopyTextField0a266e75ce2d54f",
        "top": "118dp",
        "left": "260dp",
        "width": "240dp",
        "height": "40dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField0a316d24322414f = new kony.ui.TextBox2({
        "id": "CopyTextField0a316d24322414f",
        "top": "118dp",
        "right": "0dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyLabel0718f6585d7a44b = new kony.ui.Label({
        "id": "CopyLabel0718f6585d7a44b",
        "top": "3dp",
        "left": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Addr Line1",
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
    var CopyLabel008cca2779e3444 = new kony.ui.Label({
        "id": "CopyLabel008cca2779e3444",
        "top": "3dp",
        "left": "270dp",
        "width": "240dp",
        "height": "35dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": "City",
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
    var CopyLabel056e4d6a19ca242 = new kony.ui.Label({
        "id": "CopyLabel056e4d6a19ca242",
        "top": "3dp",
        "right": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Zip Code",
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
    var CopyLabel0b1615cc43a4e46 = new kony.ui.Label({
        "id": "CopyLabel0b1615cc43a4e46",
        "top": "85dp",
        "left": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Addr Line2",
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
    var CopyLabel010ef0f583f6548 = new kony.ui.Label({
        "id": "CopyLabel010ef0f583f6548",
        "top": "85dp",
        "left": "270dp",
        "width": "240dp",
        "height": "35dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": "State",
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
    var CopyLabel07e87461e16484a = new kony.ui.Label({
        "id": "CopyLabel07e87461e16484a",
        "top": "85dp",
        "right": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Country",
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
    var FlexContainer0b0d710086abf4a = new kony.ui.FlexContainer({
        "id": "FlexContainer0b0d710086abf4a",
        "top": "251dp",
        "left": "1%",
        "right": "1%",
        "width": "98%",
        "height": "165dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,251]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0b0d710086abf4a.setDefaultUnit(kony.flex.DP)
    FlexContainer0b0d710086abf4a.add(
    CopyTextField015d5480623de4d, CopyTextField0a8520f42b3194c, CopyTextField05df2e354f41140, CopyTextField083f46efdee444d, CopyTextField0a266e75ce2d54f, CopyTextField0a316d24322414f, CopyLabel0718f6585d7a44b, CopyLabel008cca2779e3444, CopyLabel056e4d6a19ca242, CopyLabel0b1615cc43a4e46, CopyLabel010ef0f583f6548, CopyLabel07e87461e16484a);
    var CopyTextField033365c19e95042 = new kony.ui.TextBox2({
        "id": "CopyTextField033365c19e95042",
        "top": "37dp",
        "left": "0dp",
        "width": "250dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField059af1803361f4d = new kony.ui.TextBox2({
        "id": "CopyTextField059af1803361f4d",
        "top": "37dp",
        "left": "260dp",
        "width": "240dp",
        "height": "40dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField0afbf097ec0ba49 = new kony.ui.TextBox2({
        "id": "CopyTextField0afbf097ec0ba49",
        "top": "37dp",
        "right": "0dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField05ada4eb16b7944 = new kony.ui.TextBox2({
        "id": "CopyTextField05ada4eb16b7944",
        "top": "118dp",
        "left": "0dp",
        "width": "250dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField02fad85cf53c54f = new kony.ui.TextBox2({
        "id": "CopyTextField02fad85cf53c54f",
        "top": "118dp",
        "left": "260dp",
        "width": "240dp",
        "height": "40dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyTextField077c6913e5c8d48 = new kony.ui.TextBox2({
        "id": "CopyTextField077c6913e5c8d48",
        "top": "118dp",
        "right": "0dp",
        "width": "200dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [2, 0, 2, 0],
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
    var CopyLabel0161bb42c893b47 = new kony.ui.Label({
        "id": "CopyLabel0161bb42c893b47",
        "top": "3dp",
        "left": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Addr Line1",
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
    var CopyLabel063fcf79f883741 = new kony.ui.Label({
        "id": "CopyLabel063fcf79f883741",
        "top": "3dp",
        "left": "270dp",
        "width": "240dp",
        "height": "35dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": "City",
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
    var CopyLabel0743d1724742d48 = new kony.ui.Label({
        "id": "CopyLabel0743d1724742d48",
        "top": "3dp",
        "right": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Zip Code",
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
    var CopyLabel07f31f20af02b49 = new kony.ui.Label({
        "id": "CopyLabel07f31f20af02b49",
        "top": "85dp",
        "left": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Addr Line2",
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
    var CopyLabel026a7ad823db84e = new kony.ui.Label({
        "id": "CopyLabel026a7ad823db84e",
        "top": "85dp",
        "left": "270dp",
        "width": "240dp",
        "height": "35dp",
        "centerX": "53%",
        "zIndex": 1,
        "isVisible": true,
        "text": "State",
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
    var CopyLabel0cef86ef1c8314b = new kony.ui.Label({
        "id": "CopyLabel0cef86ef1c8314b",
        "top": "85dp",
        "right": "0dp",
        "width": "200dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Country",
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
    var CopyFlexContainer04571f4e737154e = new kony.ui.FlexContainer({
        "id": "CopyFlexContainer04571f4e737154e",
        "left": "1%",
        "bottom": "5dp",
        "right": "1%",
        "width": "98%",
        "height": "165dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,478]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    CopyFlexContainer04571f4e737154e.setDefaultUnit(kony.flex.DP)
    CopyFlexContainer04571f4e737154e.add(
    CopyTextField033365c19e95042, CopyTextField059af1803361f4d, CopyTextField0afbf097ec0ba49, CopyTextField05ada4eb16b7944, CopyTextField02fad85cf53c54f, CopyTextField077c6913e5c8d48, CopyLabel0161bb42c893b47, CopyLabel063fcf79f883741, CopyLabel0743d1724742d48, CopyLabel07f31f20af02b49, CopyLabel026a7ad823db84e, CopyLabel0cef86ef1c8314b);
    var Label0924cf3e7846647 = new kony.ui.Label({
        "id": "Label0924cf3e7846647",
        "left": "0dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Shipping Address",
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
    var CopychkActive002cd2c11935a48 = new kony.ui.CheckBoxGroup({
        "id": "CopychkActive002cd2c11935a48",
        "right": "0dp",
        "width": "348dp",
        "height": "60dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["sameAsBilling", "Same as Billing Info"]
        ],
        "selectedKeys": ["sameAsBilling"],
        "skin": "CopyslCheckBoxGroup00e6d619e74c74d"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH,
        "groupCells": false,
        "tickedImage": "check.png",
        "untickedImage": "uncheck.png"
    });
    var FlexContainer01e987399fc714c = new kony.ui.FlexContainer({
        "id": "FlexContainer01e987399fc714c",
        "top": "425dp",
        "left": "1%",
        "right": "1%",
        "width": "98%",
        "height": "60dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,425]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer01e987399fc714c.setDefaultUnit(kony.flex.DP)
    FlexContainer01e987399fc714c.add(
    Label0924cf3e7846647, CopychkActive002cd2c11935a48);
    var FlexContainer029c14db5907d43 = new kony.ui.FlexContainer({
        "id": "FlexContainer029c14db5907d43",
        "left": "0dp",
        "bottom": "0dp",
        "width": "75%",
        "height": "648dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,-198]",
        "skin": "CopyslFbox0839c84795fce4e",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer029c14db5907d43.setDefaultUnit(kony.flex.DP)
    FlexContainer029c14db5907d43.add(
    FlexContainer02a80ea20e4b044, FlexContainer021148713faaa4d, FlexContainer036b8c7789c304c, FlexContainer0b0d710086abf4a, CopyFlexContainer04571f4e737154e, FlexContainer01e987399fc714c);
    var CopybtnLogin0cfb69d02ba2d45 = new kony.ui.Button({
        "id": "CopybtnLogin0cfb69d02ba2d45",
        "left": "20dp",
        "right": "20dp",
        "height": "50dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Delete Customer",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 3, 4, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var CopybtnLogin00dfbc16fd71746 = new kony.ui.Button({
        "id": "CopybtnLogin00dfbc16fd71746",
        "left": "20dp",
        "right": "20dp",
        "height": "50dp",
        "centerY": "40%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Update Customer",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 3, 4, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var CopybtnLogin029c56dbfdad844 = new kony.ui.Button({
        "id": "CopybtnLogin029c56dbfdad844",
        "left": "20dp",
        "right": "20dp",
        "height": "50dp",
        "centerY": "30%",
        "zIndex": 1,
        "isVisible": true,
        "text": "New Customer",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 3, 4, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var FlexContainer09afbbbe0025744 = new kony.ui.FlexContainer({
        "id": "FlexContainer09afbbbe0025744",
        "bottom": "0dp",
        "right": "0dp",
        "width": "25%",
        "height": "650dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[338,-200]",
        "skin": "CopyslFbox0c7c2cbc915f040",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer09afbbbe0025744.setDefaultUnit(kony.flex.DP)
    FlexContainer09afbbbe0025744.add(
    CopybtnLogin0cfb69d02ba2d45, CopybtnLogin00dfbc16fd71746, CopybtnLogin029c56dbfdad844);
    frmEditCustomer.add(
    FlexContainer0df2e02be073844, FlexContainer029c14db5907d43, FlexContainer09afbbbe0025744);
};

function frmEditCustomerGlobals() {
    var MenuId = [];
    frmEditCustomer = new kony.ui.Form2({
        "id": "frmEditCustomer",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm0cd19731665f74c",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmEditCustomer
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
    frmEditCustomer.setDefaultUnit(kony.flex.DP);
};