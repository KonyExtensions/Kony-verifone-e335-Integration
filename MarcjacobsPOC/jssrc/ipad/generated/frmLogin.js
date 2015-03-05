//Form JS File
function frmLogin_btnLogin_onClick_seq0(eventobject) {
    frmHome.show();
};

function addWidgetsfrmLogin() {
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
        "top": "26dp",
        "left": "0dp",
        "width": "100%",
        "height": "50dp",
        "centerX": "50%",
        "centerY": "8%",
        "zIndex": 1,
        "isVisible": true,
        "text": "LOGIN",
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
        "top": "77dp",
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
        "top": "104dp",
        "width": "260dp",
        "height": "25dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "USER NAME",
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
    var lblPassword = new kony.ui.Label({
        "id": "lblPassword",
        "top": "242dp",
        "width": "260dp",
        "height": "25dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "PASSWORD",
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
        "top": "400dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "LOGIN",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041",
        "onClick": frmLogin_btnLogin_onClick_seq0
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
    var flexUserName = new kony.ui.FlexContainer({
        "id": "flexUserName",
        "top": "140dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[-18,140]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexUserName.setDefaultUnit(kony.flex.DP)
    flexUserName.add();
    var flexPassword = new kony.ui.FlexContainer({
        "id": "flexPassword",
        "top": "278dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[-18,278]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexPassword.setDefaultUnit(kony.flex.DP)
    flexPassword.add();
    var txtBoxPassword = new kony.ui.TextBox2({
        "id": "txtBoxPassword",
        "top": "273dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "51%",
        "zIndex": 2,
        "isVisible": true,
        "text": "password",
        "secureTextEntry": true,
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
    var txtBoxUsername = new kony.ui.TextBox2({
        "id": "txtBoxUsername",
        "top": "135dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "51%",
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
    var FlexContainer070a68271a31049 = new kony.ui.FlexContainer({
        "id": "FlexContainer070a68271a31049",
        "width": "50%",
        "height": "468dp",
        "centerX": "50%",
        "centerY": "60%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[113,36]",
        "skin": "CopyslFbox04d2fa3a4d9cc40",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer070a68271a31049.setDefaultUnit(kony.flex.DP)
    FlexContainer070a68271a31049.add(
    lblLogin, lblLine, lblUsename, lblPassword, btnLogin, flexUserName, flexPassword, txtBoxPassword, txtBoxUsername);
    frmLogin.add(
    FlexContainer0df2e02be073844, FlexContainer070a68271a31049);
};

function frmLoginGlobals() {
    var MenuId = [];
    frmLogin = new kony.ui.Form2({
        "id": "frmLogin",
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
        "addWidgets": addWidgetsfrmLogin
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
    frmLogin.setDefaultUnit(kony.flex.DP);
};