//Template File
function initializeItemLookup() {
    var lblStyle = new kony.ui.Label({
        "id": "lblStyle",
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
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "left": "120dp",
        "width": "150dp",
        "height": "100%",
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
    var lblColor = new kony.ui.Label({
        "id": "lblColor",
        "left": "280dp",
        "width": "80dp",
        "height": "100%",
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
    var lblSize = new kony.ui.Label({
        "id": "lblSize",
        "left": "370dp",
        "width": "100dp",
        "height": "100%",
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
    var lblStore = new kony.ui.Label({
        "id": "lblStore",
        "left": "474dp",
        "width": "100dp",
        "height": "100%",
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
    var lblQty = new kony.ui.Label({
        "id": "lblQty",
        "right": "20",
        "width": "120dp",
        "height": "100%",
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
    FlexContainer0c1ef887287534d = new kony.ui.FlexContainer({
        "id": "FlexContainer0c1ef887287534d",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0c1ef887287534d.setDefaultUnit(kony.flex.DP)
    FlexContainer0c1ef887287534d.add(
    lblStyle, lblDesc, lblColor, lblSize, lblStore, lblQty);
};