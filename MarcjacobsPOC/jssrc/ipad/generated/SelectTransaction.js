//Template File
function initializeSelectTransaction() {
    var lblUpc = new kony.ui.Label({
        "id": "lblUpc",
        "top": "0dp",
        "left": "0dp",
        "width": "100dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "UPC988999",
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
    var lblItemDesc = new kony.ui.Label({
        "id": "lblItemDesc",
        "top": "0dp",
        "left": "104dp",
        "width": "200dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "New item with discount",
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
        "top": "0dp",
        "left": "309dp",
        "width": "80dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "37",
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
        "top": "0dp",
        "left": "394dp",
        "width": "120dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Blue",
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
        "top": "0dp",
        "left": "517dp",
        "width": "80dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "10",
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
    var lblDescPrice = new kony.ui.Label({
        "id": "lblDescPrice",
        "top": "0dp",
        "right": "0dp",
        "width": "118dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "$100000.00",
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
    FlexContainer09c86d61a36484c = new kony.ui.FlexContainer({
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
    lblUpc, lblItemDesc, lblSize, lblColor, lblQty, lblDescPrice);
};