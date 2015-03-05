//Form JS File
function addWidgetsfrmItemLookup() {
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
        "text": "ITEM LOOKUP",
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
        "text": "UPC",
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
        "top": "520dp",
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
    var flexUpc = new kony.ui.FlexContainer({
        "id": "flexUpc",
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
    flexUpc.setDefaultUnit(kony.flex.DP)
    flexUpc.add();
    var lblLastName = new kony.ui.Label({
        "id": "lblLastName",
        "top": "190dp",
        "left": "0dp",
        "width": "260dp",
        "height": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "ITEM #",
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
        "text": "STYLE",
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
    var flexItem = new kony.ui.FlexContainer({
        "id": "flexItem",
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
    flexItem.setDefaultUnit(kony.flex.DP)
    flexItem.add();
    var flexStyle = new kony.ui.FlexContainer({
        "id": "flexStyle",
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
    flexStyle.setDefaultUnit(kony.flex.DP)
    flexStyle.add();
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "top": "390dp",
        "left": "0dp",
        "width": "260dp",
        "height": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "DESCRIPTION",
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
    var flexDesc = new kony.ui.FlexContainer({
        "id": "flexDesc",
        "top": "424dp",
        "left": "4dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,424]",
        "skin": "CopyslFbox0de5cf47e74ed47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexDesc.setDefaultUnit(kony.flex.DP)
    flexDesc.add();
    var CopybtnLogin02b4d571d1b8842 = new kony.ui.Button({
        "id": "CopybtnLogin02b4d571d1b8842",
        "top": "585dp",
        "left": "0dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "CANCEL",
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
    var txtBoxDesc = new kony.ui.TextBox2({
        "id": "txtBoxDesc",
        "top": "420dp",
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
        "width": "27%",
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
    lblLogin, lblLine, lblUsename, btnLogin, flexUpc, lblLastName, lblPhone, flexItem, flexStyle, lblDesc, flexDesc, CopybtnLogin02b4d571d1b8842, txtBoxDesc, txtBoxPhone, txtBoxLastname, txtBoxFirstname);
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
            "lblSize": "lblSize",
            "lblQty": "lblQty",
            "lblStyle": "lblStyle",
            "lblDesc": "lblDesc",
            "ItemLookup": "ItemLookup",
            "FlexContainer0c1ef887287534d": "FlexContainer0c1ef887287534d",
            "lblStore": "lblStore",
            "lblColor": "lblColor"
        },
        "data": [{
            "lblSize": "Size",
            "lblQty": "On Hand Qty",
            "lblStyle": "Style",
            "lblDesc": "Description",
            "lblStore": "Store",
            "lblColor": "Color"
        }, {
            "lblSize": "Size",
            "lblQty": "On Hand Qty",
            "lblStyle": "Style",
            "lblDesc": "Description",
            "lblStore": "Store",
            "lblColor": "Color"
        }, {
            "lblSize": "Size",
            "lblQty": "On Hand Qty",
            "lblStyle": "Style",
            "lblDesc": "Description",
            "lblStore": "Store",
            "lblColor": "Color"
        }, {
            "lblSize": "Size",
            "lblQty": "On Hand Qty",
            "lblStyle": "Style",
            "lblDesc": "Description",
            "lblStore": "Store",
            "lblColor": "Color"
        }, {
            "lblSize": "Size",
            "lblQty": "On Hand Qty",
            "lblStyle": "Style",
            "lblDesc": "Description",
            "lblStore": "Store",
            "lblColor": "Color"
        }, {
            "lblSize": "Size",
            "lblQty": "On Hand Qty",
            "lblStyle": "Style",
            "lblDesc": "Description",
            "lblStore": "Store",
            "lblColor": "Color"
        }],
        "Location": "[0,6]",
        "rowTemplate": FlexContainer0c1ef887287534d,
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
        "right": "1%",
        "width": "98%",
        "height": "100%",
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
    var Label0f840b26781a54f = new kony.ui.Label({
        "id": "Label0f840b26781a54f",
        "left": "10dp",
        "width": "100dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Style",
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
    var Label08d17f47abd9441 = new kony.ui.Label({
        "id": "Label08d17f47abd9441",
        "left": "120dp",
        "width": "150dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Description",
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
    var Label0340914ce7e8d45 = new kony.ui.Label({
        "id": "Label0340914ce7e8d45",
        "left": "280dp",
        "width": "80dp",
        "centerY": "50%",
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
    var Label0f255ba2c0b5244 = new kony.ui.Label({
        "id": "Label0f255ba2c0b5244",
        "left": "370dp",
        "width": "100dp",
        "centerY": "50%",
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
    var Label098f3b887a69a48 = new kony.ui.Label({
        "id": "Label098f3b887a69a48",
        "left": "474dp",
        "width": "80dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Store",
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
    var Label01c6ccb386bf94c = new kony.ui.Label({
        "id": "Label01c6ccb386bf94c",
        "right": "20dp",
        "width": "120dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "On Hand Qty",
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
    var FlexContainer06427d73cbf9245 = new kony.ui.FlexContainer({
        "id": "FlexContainer06427d73cbf9245",
        "top": "5dp",
        "left": "1%",
        "right": "1%",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,5]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer06427d73cbf9245.setDefaultUnit(kony.flex.DP)
    FlexContainer06427d73cbf9245.add(
    Label0f840b26781a54f, Label08d17f47abd9441, Label0340914ce7e8d45, Label0f255ba2c0b5244, Label098f3b887a69a48, Label01c6ccb386bf94c);
    var flexSearchResults = new kony.ui.FlexContainer({
        "id": "flexSearchResults",
        "bottom": "0dp",
        "right": "0dp",
        "width": "70%",
        "height": "648dp",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[135,-198]",
        "skin": "flexSearchResults",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexSearchResults.setDefaultUnit(kony.flex.DP)
    flexSearchResults.add(
    FlexScrollContainer05c3ab212fcfc41, FlexContainer06427d73cbf9245);
    frmItemLookup.add(
    FlexContainer0df2e02be073844, FlexContainer070a68271a31049, flexSearchResults);
};

function frmItemLookupGlobals() {
    var MenuId = [];
    frmItemLookup = new kony.ui.Form2({
        "id": "frmItemLookup",
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
        "addWidgets": addWidgetsfrmItemLookup
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
    frmItemLookup.setDefaultUnit(kony.flex.DP);
};