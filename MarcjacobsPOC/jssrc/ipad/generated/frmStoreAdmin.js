//Form JS File
function addWidgetsfrmStoreAdmin() {
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
        "text": "STORE INFORMATION",
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
    var btnLogin = new kony.ui.Button({
        "id": "btnLogin",
        "top": "575dp",
        "width": "200dp",
        "height": "50dp",
        "centerX": "30%",
        "zIndex": 1,
        "isVisible": true,
        "text": "SAVE",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 0, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var flexStoreNumber = new kony.ui.FlexContainer({
        "id": "flexStoreNumber",
        "top": "104dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,104]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexStoreNumber.setDefaultUnit(kony.flex.DP)
    flexStoreNumber.add();
    var flexStoreName = new kony.ui.FlexContainer({
        "id": "flexStoreName",
        "top": "204dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,204]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexStoreName.setDefaultUnit(kony.flex.DP)
    flexStoreName.add();
    var flexAddr1 = new kony.ui.FlexContainer({
        "id": "flexAddr1",
        "top": "304dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,304]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexAddr1.setDefaultUnit(kony.flex.DP)
    flexAddr1.add();
    var flexStoreCode = new kony.ui.FlexContainer({
        "id": "flexStoreCode",
        "top": "304dp",
        "right": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,304]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexStoreCode.setDefaultUnit(kony.flex.DP)
    flexStoreCode.add();
    var flexCountry = new kony.ui.FlexContainer({
        "id": "flexCountry",
        "top": "204dp",
        "right": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,204]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexCountry.setDefaultUnit(kony.flex.DP)
    flexCountry.add();
    var flexCity = new kony.ui.FlexContainer({
        "id": "flexCity",
        "top": "504dp",
        "left": "4",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,504]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexCity.setDefaultUnit(kony.flex.DP)
    flexCity.add();
    var flexState = new kony.ui.FlexContainer({
        "id": "flexState",
        "top": "104dp",
        "right": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,104]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexState.setDefaultUnit(kony.flex.DP)
    flexState.add();
    var flexStoreType = new kony.ui.FlexContainer({
        "id": "flexStoreType",
        "top": "404dp",
        "right": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,404]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexStoreType.setDefaultUnit(kony.flex.DP)
    flexStoreType.add();
    var flexTaxArea = new kony.ui.FlexContainer({
        "id": "flexTaxArea",
        "top": "504dp",
        "right": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,504]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexTaxArea.setDefaultUnit(kony.flex.DP)
    flexTaxArea.add();
    var flexAddr2 = new kony.ui.FlexContainer({
        "id": "flexAddr2",
        "top": "404dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,404]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexAddr2.setDefaultUnit(kony.flex.DP)
    flexAddr2.add();
    var CopybtnLogin0defc4deefa1b4e = new kony.ui.Button({
        "id": "CopybtnLogin0defc4deefa1b4e",
        "top": "575dp",
        "width": "200dp",
        "height": "50dp",
        "centerX": "70%",
        "zIndex": 1,
        "isVisible": true,
        "text": "CANCEL",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041"
    }, {
        "padding": [4, 0, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var txtBoxStoreType = new kony.ui.TextBox2({
        "id": "txtBoxStoreType",
        "top": "400dp",
        "right": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Store Type",
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
    var txtBoxCity = new kony.ui.TextBox2({
        "id": "txtBoxCity",
        "top": "500dp",
        "left": "8",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "City",
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
    var txtBoxState = new kony.ui.TextBox2({
        "id": "txtBoxState",
        "top": "100dp",
        "right": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "State",
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
    var txtBoxTaxArea = new kony.ui.TextBox2({
        "id": "txtBoxTaxArea",
        "top": "500dp",
        "right": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Tax Area",
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
    var txtBoxCountry = new kony.ui.TextBox2({
        "id": "txtBoxCountry",
        "top": "200dp",
        "right": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Country",
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
    var txtBoxStoreCode = new kony.ui.TextBox2({
        "id": "txtBoxStoreCode",
        "top": "300dp",
        "right": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Store Code",
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
    var txtBoxAddr2 = new kony.ui.TextBox2({
        "id": "txtBoxAddr2",
        "top": "400dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Addr Line 2",
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
    var txtBoxAddr1 = new kony.ui.TextBox2({
        "id": "txtBoxAddr1",
        "top": "300dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Addr Line 1",
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
    var txtBoxStoreName = new kony.ui.TextBox2({
        "id": "txtBoxStoreName",
        "top": "200dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Store Name",
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
    var txtBoxStoreNumber = new kony.ui.TextBox2({
        "id": "txtBoxStoreNumber",
        "top": "100dp",
        "left": "8dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Store Number",
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
        "left": "20%",
        "bottom": "0dp",
        "right": "20%",
        "height": "648dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[90,-198]",
        "skin": "CopyslFbox04d2fa3a4d9cc40",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer070a68271a31049.setDefaultUnit(kony.flex.DP)
    FlexContainer070a68271a31049.add(
    lblLogin, lblLine, btnLogin, flexStoreNumber, flexStoreName, flexAddr1, flexStoreCode, flexCountry, flexCity, flexState, flexStoreType, flexTaxArea, flexAddr2, CopybtnLogin0defc4deefa1b4e, txtBoxStoreType, txtBoxCity, txtBoxState, txtBoxTaxArea, txtBoxCountry, txtBoxStoreCode, txtBoxAddr2, txtBoxAddr1, txtBoxStoreName, txtBoxStoreNumber);
    frmStoreAdmin.add(
    FlexContainer0df2e02be073844, FlexContainer070a68271a31049);
};

function frmStoreAdminGlobals() {
    var MenuId = [];
    frmStoreAdmin = new kony.ui.Form2({
        "id": "frmStoreAdmin",
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
        "addWidgets": addWidgetsfrmStoreAdmin
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
    frmStoreAdmin.setDefaultUnit(kony.flex.DP);
};