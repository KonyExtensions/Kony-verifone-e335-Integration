//Form JS File
function frmTender_CopybtnLogin00dfbc16fd71746_onClick_seq0(eventobject) {
    print.printScreen();
};

function frmTender_CopybtnLogin029c56dbfdad844_onTouchEnd_seq0(eventobject, x, y) {
    card.scan(callbackPinpadMSRData);
    kony.print("called scan card");
};

function frmTender_button46255602941824_onTouchEnd_seq0(eventobject, x, y) {
    onClickSigCapture.call(this);
};

function addWidgetsfrmTender() {
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
    var Label0cac55197f59642 = new kony.ui.Label({
        "id": "Label0cac55197f59642",
        "top": "0dp",
        "left": "0dp",
        "width": "190dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Bill to Customer",
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
    var Label05dc2f18be17848 = new kony.ui.Label({
        "id": "Label05dc2f18be17848",
        "top": "0dp",
        "right": "0dp",
        "width": "240dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "12/26/2014 12:00",
        "skin": "lblCustName"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label0d87a7e1301c343 = new kony.ui.Label({
        "id": "Label0d87a7e1301c343",
        "top": "2dp",
        "left": "190dp",
        "width": "350dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Roshan Zameer",
        "skin": "CopylblCustName0cbd21a01c5454c"
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
    var FlexContainer0717253695d4247 = new kony.ui.FlexContainer({
        "id": "FlexContainer0717253695d4247",
        "top": "5dp",
        "left": "20dp",
        "right": "20dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[20,5]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0717253695d4247.setDefaultUnit(kony.flex.DP)
    FlexContainer0717253695d4247.add(
    Label0cac55197f59642, Label05dc2f18be17848, Label0d87a7e1301c343);
    var Label07c5167e5467645 = new kony.ui.Label({
        "id": "Label07c5167e5467645",
        "top": "0dp",
        "left": "0dp",
        "width": "100dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "UPC",
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
    var Label039cecc04097343 = new kony.ui.Label({
        "id": "Label039cecc04097343",
        "top": "0dp",
        "left": "104dp",
        "width": "200dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Item Desc",
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
    var Label074aaca5b994a42 = new kony.ui.Label({
        "id": "Label074aaca5b994a42",
        "top": "0dp",
        "left": "309dp",
        "width": "80dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Size",
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
    var Label0198ba435987944 = new kony.ui.Label({
        "id": "Label0198ba435987944",
        "top": "0dp",
        "left": "394dp",
        "width": "120dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Color",
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
    var Label0f7ad1d3ce1a342 = new kony.ui.Label({
        "id": "Label0f7ad1d3ce1a342",
        "top": "0dp",
        "left": "517dp",
        "width": "80dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Qty",
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
    var CopyLabel0458949a5696a48 = new kony.ui.Label({
        "id": "CopyLabel0458949a5696a48",
        "top": "0dp",
        "right": "0dp",
        "width": "118dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Disc Price",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer09c86d61a36484c = new kony.ui.FlexContainer({
        "id": "FlexContainer09c86d61a36484c",
        "top": "50dp",
        "left": "20dp",
        "right": "20dp",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[20,50]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer09c86d61a36484c.setDefaultUnit(kony.flex.DP)
    FlexContainer09c86d61a36484c.add(
    Label07c5167e5467645, Label039cecc04097343, Label074aaca5b994a42, Label0198ba435987944, Label0f7ad1d3ce1a342, CopyLabel0458949a5696a48);
    var TextField00607099132cf4f = new kony.ui.TextBox2({
        "id": "TextField00607099132cf4f",
        "left": "0dp",
        "bottom": "0dp",
        "width": "250dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Receipt #",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "CopyslTextBox04680242ed42e4f",
        "focusSkin": "CopyslTextBox04680242ed42e4f"
    }, {
        "padding": [1, 0, 2, 0],
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
    var TextField0c5dc3d94b61f42 = new kony.ui.TextBox2({
        "id": "TextField0c5dc3d94b61f42",
        "left": "260dp",
        "bottom": "0dp",
        "width": "240dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Cashier #",
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
    var TextField0e7b8ea2f7a814d = new kony.ui.TextBox2({
        "id": "TextField0e7b8ea2f7a814d",
        "bottom": "0dp",
        "right": "0dp",
        "width": "220dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Trans Type",
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
    var FlexContainer04aae3072ba7141 = new kony.ui.FlexContainer({
        "id": "FlexContainer04aae3072ba7141",
        "left": "20dp",
        "bottom": "10dp",
        "right": "20dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[20,600]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer04aae3072ba7141.setDefaultUnit(kony.flex.DP)
    FlexContainer04aae3072ba7141.add(
    TextField00607099132cf4f, TextField0c5dc3d94b61f42, TextField0e7b8ea2f7a814d);
    var Segment0f995acce61484abox = new kony.ui.FlexContainer({
        "id": "Segment0f995acce61484abox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var Segment0f995acce61484a = new kony.ui.SegmentedUI2({
        "id": "Segment0f995acce61484a",
        "top": "0dp",
        "left": "20dp",
        "right": "20dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblSize": "lblSize",
            "lblQty": "lblQty",
            "lblUpc": "lblUpc",
            "SelectTransaction": "SelectTransaction",
            "lblDescPrice": "lblDescPrice",
            "FlexContainer09c86d61a36484c": "FlexContainer09c86d61a36484c",
            "lblColor": "lblColor",
            "lblItemDesc": "lblItemDesc"
        },
        "data": [{
            "lblSize": "37",
            "lblQty": "10",
            "lblUpc": "UPC988999",
            "lblDescPrice": "$100000.00",
            "lblColor": "Blue",
            "lblItemDesc": "New item with discount"
        }, {
            "lblSize": "37",
            "lblQty": "10",
            "lblUpc": "UPC988999",
            "lblDescPrice": "$100000.00",
            "lblColor": "Blue",
            "lblItemDesc": "New item with discount"
        }, {
            "lblSize": "37",
            "lblQty": "10",
            "lblUpc": "UPC988999",
            "lblDescPrice": "$100000.00",
            "lblColor": "Blue",
            "lblItemDesc": "New item with discount"
        }],
        "Location": "[20,0]",
        "rowTemplate": FlexContainer09c86d61a36484c,
        "rowSkin": "seg2Normal",
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
    Segment0f995acce61484abox.add();
    var FlexScrollContainer08500a8267e9d44 = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollContainer08500a8267e9d44",
        "top": "90dp",
        "left": "0dp",
        "width": "100%",
        "height": "360dp",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": false,
        "bounces": true,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "Location": "[0,90]",
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
    FlexScrollContainer08500a8267e9d44.setDefaultUnit(kony.flex.DP);
    FlexScrollContainer08500a8267e9d44.add(
    Segment0f995acce61484a);
    var imgSignPad = new kony.ui.Image2({
        "id": "imgSignPad",
        "top": "453dp",
        "left": "3dp",
        "width": "333dp",
        "height": "150dp",
        "zIndex": 1,
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var FlexContainer029c14db5907d43 = new kony.ui.FlexContainer({
        "id": "FlexContainer029c14db5907d43",
        "left": "0dp",
        "bottom": "0dp",
        "width": "75%",
        "height": "650dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,-200]",
        "skin": "CopyslFbox0839c84795fce4e",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer029c14db5907d43.setDefaultUnit(kony.flex.DP)
    FlexContainer029c14db5907d43.add(
    FlexContainer0717253695d4247, FlexContainer09c86d61a36484c, FlexContainer04aae3072ba7141, FlexScrollContainer08500a8267e9d44, imgSignPad);
    var CopybtnLogin00dfbc16fd71746 = new kony.ui.Button({
        "id": "CopybtnLogin00dfbc16fd71746",
        "left": "20dp",
        "right": "20dp",
        "height": "50dp",
        "centerY": "55%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Print",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue0686a4f7de8ae49",
        "onClick": frmTender_CopybtnLogin00dfbc16fd71746_onClick_seq0
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
        "centerY": "45%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Credit Card",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041",
        "onTouchEnd": frmTender_CopybtnLogin029c56dbfdad844_onTouchEnd_seq0
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
    var button46255602941824 = new kony.ui.Button({
        "id": "button46255602941824",
        "left": "21dp",
        "right": "19dp",
        "height": "50dp",
        "centerY": "66.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Sign",
        "skin": "CopyslButtonGlossBlue05c0b56842a9041",
        "focusSkin": "CopyslButtonGlossBlue05c0b56842a9041",
        "onTouchEnd": frmTender_button46255602941824_onTouchEnd_seq0
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
    CopybtnLogin00dfbc16fd71746, CopybtnLogin029c56dbfdad844, button46255602941824);
    frmTender.add(
    FlexContainer0df2e02be073844, FlexContainer029c14db5907d43, FlexContainer09afbbbe0025744);
};

function frmTenderGlobals() {
    var MenuId = [];
    frmTender = new kony.ui.Form2({
        "id": "frmTender",
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
        "addWidgets": addWidgetsfrmTender
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
    frmTender.setDefaultUnit(kony.flex.DP);
};